import React from 'react';
import Metric from './Metric';


const ContentRowMovies = () => {
    return (
        <div className="row">
					
           <Metric
            color= "primary"
            titulo= "Movies in Data Base"
            cifra = {21}
            icono = "fa-film"
            />

            <Metric
            color= "success"
            titulo= "Awards"
            cifra = {79}
            icono = "fa-award"
            />

           <Metric
            color= "warning"
            titulo= "Actor quantity"
            cifra = {49}
            icono = "fa-user"
            />
                    
        
        </div>
            
    );
}

export default ContentRowMovies;
