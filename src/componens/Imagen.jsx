import React from "react";

const Imagen = ({imagen}) => {

    //extraer datos de la imagen

    const {largeImageURL,likes,previewURL,tags,views} = imagen;
    return(
        <div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className='card-img-top'  />
            
                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className='btn btn-block btn-primary'  >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Imagen;