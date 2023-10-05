import React, { Component } from 'react'
import Stagiaire from './Stagiaires'

export default class Etablissement extends Component {

    state = {
        stagiaires : this.props.stgs
    }
  render() {
    return (
      <div>
        <h1>Nombre d'etudiants : {this.state.stagiaires.length}</h1>
        {this.state.stagiaires.map(s => 
            <Stagiaire key={s.id} nom={s.nom} filiere={s.filiere} age={s.age} image={s.image}/>
            )}

        <button onClick={() => this.setState({stagiaires: []})}>Clear all</button>
        <button onClick={() => this.setState({stagiaires: this.props.stgs})}>all</button>
      </div>
    )
  }
}
