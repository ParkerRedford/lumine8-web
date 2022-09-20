using lumine8_GrpcService;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using System.Linq;

namespace lumine8.Server.Hubs
{
    public class AppHub : Hub
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AppHub(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async void CheckVersion(string version)
        {
            if (version == "1.0.0.0")
                await Clients.Caller.SendAsync("IsUpToDate", true);
            else
                await Clients.Caller.SendAsync("IsUpToDate", false);
        }

        public async void Connect(string UserName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, UserName);
        }

        public void Disconnect(string UserName)
        {
            Groups.RemoveFromGroupAsync(Context.ConnectionId, UserName);
        }

        public async void CheckLogin(string UserName, string pwd)
        {
            var user = _userManager.Users.Where(x => x.Username == UserName).FirstOrDefault();

            if (_userManager.CheckPasswordAsync(user, pwd).Result)
            {
                //This is optional
                await Groups.AddToGroupAsync(Context.ConnectionId, UserName);
                await Clients.Caller.SendAsync("IsAuthenticated", true);
            }
            else
                await Clients.Caller.SendAsync("IsAuthenticated", false);
        }
    }
}
