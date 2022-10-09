import React, { Component, useEffect } from 'react';
import "./petition.css";

export class Petitions extends Component {
    static displayName = Petitions.name;

    constructor(props) {
        super(props);
        this.state = { petitionModels: [], petitionSigs: [], users: [], search: '' };
    }

    componentDidMount() {
        document.title = "Petitios";
        document.body.style.backgroundColor = "#2C2E6B";
        this.getPetitions();
    }

    render() {
        return (
            <div>
                <a href="/" className="btn btn-info mt-2">Go back to Home</a>
                <h5 style={{textAlign: "center"}} className="text-white">Download app and sign-in to participate</h5>

                <input type="text" onChange={(e) => this.searchPetitions(e.target.value)} />

                {this.state.petitionModels.filter(s => {
                    return s.petition.toLowerCase().includes(this.state.search.toLowerCase())
                }).map(p => {
                    const c = this.state.petitionSigs.filter(f => {
                        return p.petitionId === f.petitionId
                    }).length;

                    const user = this.state.users.find(x => x.id === p.createdById);

                    return (<div className="card">
                        <div className="card-header" style={{color: "black"}}>{p.petition}</div>
                        <div className="card-body d-flex flex-row">
                            <p style={{ whiteSpace: "nowrap" }}>Signatures: {c}</p>
                            <p className="ms-auto">Created by: {user.name}</p>
                        </div>
                    </div>)
                }
                )}
            </div>
        );
    }

    async getPetitions() {
        const response = await fetch('https://lumine8.com/api/GetPetitions');
        const data = await response.json();
        this.setState({ petitionModels: data.petitionModels, petitionSigs: data.petitionSigs, users: data.users });
    }

    searchPetitions(event) {
        this.setState({ search: event })
    }
}