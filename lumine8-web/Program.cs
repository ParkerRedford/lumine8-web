using lumine8.Server.Data;
using lumine8.Server.Hubs;
using lumine8.Server.Services;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddGrpc();

if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
{
    builder.WebHost.ConfigureKestrel((context, options) =>
    {
        options.ListenAnyIP(5001, p =>
        {
            p.Protocols = Microsoft.AspNetCore.Server.Kestrel.Core.HttpProtocols.Http1AndHttp2;
            p.UseHttps();
        });
    });
}

builder.Services.AddSignalR(o =>
{
    o.EnableDetailedErrors = true;
    o.MaximumReceiveMessageSize = null;
});//.AddStackExchangeRedis(config.ToString());

builder.Services.AddCors(o =>
{
    o.AddPolicy(name: "MyCors", builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

builder.Services.AddResponseCompression(opts =>
{
    opts.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(
        new[] { "application/octet-stream", "application/vnd.android.package-archive" });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.UseCors("MyCors");

app.MapGrpcService<MainService>();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.MapHub<PostRealTime>("/postreal");
app.MapHub<Notify>("/notify");
app.MapHub<MainHub>("/mainhub");
app.MapHub<Chat>("/chathub");

app.Run();
