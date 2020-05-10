import React,{useState} from 'react';
import Error from './Error';

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);

    const buscarImagenes = (e) => {
        e.preventDefault();

        if (termino.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setBusqueda(termino);
    }

    return(

        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="search" className='form-control form-control-lg' placeholder='Buscar una imagen, ejemplo: futbol o café' onChange={e=> setTermino(e.target.value)}  />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" value="Buscar" className='btn btn-danger btn-block btn-lg' />
                </div>
            </div>
            {error ? <Error mensaje='Agrega un término de búsqueda' /> :null}
        </form>
    );

}

export default Formulario;