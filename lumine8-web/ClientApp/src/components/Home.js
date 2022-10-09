import React, { Component, useEffect } from 'react';
import "./home.css";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { petitionModels: [], petitionSigs: [], users: [], search: '' };
    }

    componentDidMount() {
        document.title = "Home";
        document.body.style.backgroundColor = "#2C2E6B";
    }

    render() {
        return (
            <div>
                <a href="/petitions" className="btn btn-info mt-2">Go to Petitions page</a>

                <div className="d-flex flexGroup" style={{flexDirection: "row"}}>
                    <div className="card" id="mainCard">
                        <div className="d-flex flex-row">
                            <img src="/bootstrap-icons-1.9.0/brightness-high.svg" style={{width: "3rem"} } />
                            <img className="card-img-top ms-0" src="lumine8-logo.png" />
                        </div>

                        <div className="card-body">
                            <ul>
                                <li>What is lumine8? Lumine8 is an app-based social media platform with a twist. You can sign petitions for any government.</li>
                                <li>We the people have the right to assemble and to petition the government for a redress of grievances.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="/bootstrap-icons-1.9.0/lock.svg" />
                        <p className="card-body">Uses blockchain technology for authentication</p>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="eth-diamond-purple.webp" style={{ width: "7rem" }} />
                        <p className="card-body">Accepts ethereum as payment</p>
                    </div>
                </div>

                <div className="d-flex flexGroup" style={{ flexDirection: "row", border: "1px solid grey", borderRadius: "1rem" }}>
                    <div className="card">
                        <div className="card-header">Other platforms</div>
                        <div className="card-body">
                            <ul>
                                <li>Censor YOU</li>
                                <li>Restrict Accounts</li>
                                <li>Unenvenly enforce rules to fit their agenda</li>
                                <li>Sell and share your info</li>
                                <li>Limit who you connect with through their algorithms</li>
                            </ul>
                        </div>
                    </div>
                    <span className="m-auto" style={{color: "white"} } >vs</span>
                    <div className="card">
                        <div className="card-header">lumine8</div>
                        <div className="card-body">
                            <ul>
                                <li>Enjoy Freedom</li>
                                <li>Post your thoughts</li>
                                <li>Your Platform...Your Way!</li>
                                <li>Share with who YOU want</li>
                                <li>Be limitless...You are in Control</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="d-flex flexGroup" style={{ flexDirection: "row" }} >
                    <div className="card">
                        <img className="card-img-top" src="/bootstrap-icons-1.9.0/people-fill.svg" alt="Bootstrap" width="32" height="32" />
                            <p className="card-body">Create friends and groups</p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/bootstrap-icons-1.9.0/chat-dots-fill.svg" alt="Bootstrap" width="32" height="32" />
                            <p className="card-body">One-to-one conversations</p>
                    </div>
                    <div className="card">
                        <div className="card-header">Moderation policy</div>
                        <div className="card-body">
                            <ol>
                                <li>No death threats</li>
                                <li>No copyright violations</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <h3>Downlods</h3>

                <div className="d-flex flexGroup" style={{flexDirection: "row"}} >
                    <div className="card">
                        <img className="card-img-top" src="/bootstrap-icons-1.9.0/android2.svg" style={{ filter: "invert(100%) sepia(43%) saturate(3115%) hue-rotate(14deg) brightness(82%) contrast(86%)"} } />
                        <a href="downloads/com.lumine8.lumine8_maui-Signed.apk" className="btn btn-primary ms-2 mb-2" download="lumine8.apk">Download</a>
                        {/*<a asp-action="Android" asp-controller="App" className="btn btn-primary ms-2 mb-2">Download</a>*/}
                        <div className="card-body px-4">
                            <p>How to install</p>
                            <ol>
                                <li>Tap Download</li>
                                <li>Allow browser to install apps</li>
                                <li>Tap Install</li>
                                <li>Tap Open</li>
                            </ol>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/bootstrap-icons-1.9.0/windows.svg" style={{ filter: "invert(38%) sepia(95%) saturate(5547%) hue-rotate(191deg) brightness(100%) contrast(102%)"} } />
                        <a href="downloads/lumine8.exe" className="btn btn-primary ms-2 mb-2" download="lumine8.exe">Download</a>
                        {/*<a asp-action="Windows" asp-controller="App" className="btn btn-primary ms-2 mb-2">Download</a>*/}
                        <div className="card-body px-4">
                            <p>How to install</p>
                            <ol>
                                <li>Run installer</li>
                                <li>App may show software requirements upon launching</li>
                            </ol>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/bootstrap-icons-1.9.0/apple.svg" style={{ filter: "invert(1)" }} width="32" height="32" />
                        <p className="card-body">Coming soon</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Open source</div>
                    <div className="card-body">
                        <img style={{width: "3rem"}} src="/bootstrap-icons-1.9.0/github.svg" />
                        <a href="https://github.com/ParkerRedford/lumine8-client">Client</a>
                        <a className="mx-2" href="https://github.com/ParkerRedford/lumine8-web">Server</a>
                        <a href="https://github.com/ParkerRedford/lumine8-shared">Shared</a>
                    </div>
                </div>
            </div>
        );
    }

    searchPetitions(event) {
        this.setState({ search: event })
    }
}
