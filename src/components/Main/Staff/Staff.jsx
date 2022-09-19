import React, { Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Pokemon from './Pokemon';


class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          pokeLista: this.props.defaultList 
        }
        // Event binding (Bindear eventos)
        console.log('CONSTRUCTOR')
    }
    
    async componentDidMount(){
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        this.setState({
            pokeLista: data.results
        })
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps: ', prevProps, 'prevState: ', prevState)
        console.log('Props: ', this.props, 'State: ', this.state)
        alert("número de pokemons en plantilla: "+this.state.pokeLista.length)
        console.log('componentDidUpdate');
    }


    handlerLoadPokemons = async () => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.json();
        this.setState({
            pokeLista: data.results
        })
    }

    handlerResetPokemons = () => {
        this.setState({
            pokeLista: []
        })
    }

    handlerUpdate = () => {
        this.forceUpdate()
    }

    render() {
        console.log('RENDER')
        return (
            <section>
                <h1>Lista Pokemon</h1>
                {
                  this.state.pokeLista.map(pokemon => 
                    <Pokemon data={pokemon} key={uuidv4()}/>
                  )
                }
                <button onClick={this.handlerLoadPokemons}>Load Pokemons</button>
                <button onClick={this.handlerResetPokemons}>Reset Pokemons</button>
                <button onClick={this.handlerUpdate}>Force Update</button>
            </section>        
        );
    }
}

Staff.defaultProps = {
    defaultList: []
}

export default Staff;