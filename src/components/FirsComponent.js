import React, {Component} from 'react';

class FirsComponent extends Component {
    render() {

        var receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Harina', 'Jamón'],
            calorias: 600
        }

        return ( 
            <React.Fragment>
                <h1> Hola Mundo, desde el FirsComponent</h1>
                <hr/>
                <h1>{'Producto: ' + receta.nombre}</h1>
                <h2>{'Calorías: ' + receta.calorias}</h2>

                <ol>
                    {receta.ingredientes.map((ingrediente, i) => {
                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                        );
                    })}
                </ol>
            </React.Fragment>
        );
    }
}

export default FirsComponent;