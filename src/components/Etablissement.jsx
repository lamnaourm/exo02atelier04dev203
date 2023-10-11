import React, { Component } from 'react'
import Stagiaire from './Stagiaires'

export default class Etablissement extends Component {

    state = {
        stagiaires : this.props.stgs
    }
  render() {
    return (
      <div className='list'>
        <h1>Nombre d'etudiants : {this.state.stagiaires.length}</h1>
        {this.state.stagiaires.map(s => 
            <Stagiaire key={s.id} nom={s.nom} filiere={s.filiere} age={s.age} image={s.image}/>
            )}

          <div className='btns'>
          <button onClick={(e) => {this.setState({stagiaires: []}) }} type='submit'>Clear all</button>
          <button onClick={() => this.setState({stagiaires: this.props.stgs})}>all</button>
          <button onClick={() => this.setState({stagiaires: this.props.stgs.filter(s => s.filiere==='TDI')})}>TDI</button>
          <button onClick={() => this.setState({stagiaires: this.props.stgs.filter(s => s.filiere==='TRI')})}>TRI</button>
        </div>
      </div>
    )
  }
}
