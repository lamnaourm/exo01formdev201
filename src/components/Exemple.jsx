import React, { Component } from 'react'

export default class Exemple extends Component {

    state = {
        nom:'xcxc',
        prenom:'jhjh',
        age:0,
        filiere:'TDI',
        vaccin: true
    }

    handleChange = (e) => {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value

        this.setState({[name]: type ==='checkbox' ? e.target.checked : value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('Nom :' + this.state.nom)
        console.log('Prenom :' + this.state.prenom)
        console.log('Age :' + this.state.age)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom :
                        <input name="nom" value={this.state.nom} onChange={this.handleChange} />
                    </label><br />

                    <label>
                        Nom :
                        <input name="prenom" value={this.state.prenom} onChange={this.handleChange} />
                    </label><br />

                    <label>
                        Age :
                        <input name="age" type='number' value={this.state.age} onChange={this.handleChange}/>
                    </label><br />

                    <label>
                        Filiére :
                        <input name="filiere" type="radio" value="TDI" checked={this.state.filiere==='TDI'} onChange={this.handleChange}/> TDI
                        <input name="filiere" type="radio" value="TRI" checked={this.state.filiere==='TRI'} onChange={this.handleChange}/> TRI
                    </label><br />

                    <label>
                        Vacciné :
                        <input type="checkbox" name="vaccin" checked={this.state.vaccin} onChange={this.handleChange}/>
                    </label><br />

                    <input type="submit" value="Soumettre les donnees" />

                </form>
            </div>
        )
    }
}
