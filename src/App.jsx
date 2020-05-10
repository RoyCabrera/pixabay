import React,{useState, useEffect} from 'react';
import Formulario from './componens/Formulario';
import ListadoImagenes from './componens/ListadoImagenes';


function App() {

  const [busqueda, setBusqueda] = useState();
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(()=>{

    const consultarApi = async() => {

      if(busqueda){
        const imagenesPorPagina = 30;
        const key = '16249608-57494eba51fd2b8604546f0ad';
        const url =`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
    
    
        const respuesta = await fetch(url);
        const res = await respuesta.json();
        setImagenes(res.hits);

        // total de paginas
        const calcularTotalPaginas = Math.ceil(res.totalHits / imagenesPorPagina);
        setTotalPaginas(calcularTotalPaginas);
        
        // mover scroll al inicio luego de la busqueda

        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior:"smooth"})
        
      }else{
        return;
      }
      
      
    }
    consultarApi();

  },[busqueda,paginaActual]);

  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaActual-1;
    if(nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
    
  }
  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual+1;
    if(nuevaPaginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
    
  }


  return (
    <div className='container'>
      <div className="jumbotron">
        <h1 className='lead text-center mb-5'>Buscador de Imagenes Pixabay</h1>
        <Formulario setBusqueda={setBusqueda} />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
        <div className="mb-5">
        {
          (paginaActual === 1) ? null
          :<button className='btn btn-danger mr-1' onClick={paginaAnterior} type="button">&laquo; Anterior</button>

        }
        {
          (paginaActual === totalPaginas) ? null
          :<button className='btn btn-danger' onClick={paginaSiguiente} type="button">Siguiente &raquo;</button>

        }
        </div>
      </div>
    </div>
  );
}

export default App;
