import React from 'react';
import Header from '../template/Header'
import ImagePage from "../assetss/img/home/fondo-de-pantalla.jpg";
import ImagePageWelcome from "../assetss/img/home/imagen-bienvenida.png"
import axios from 'axios';
import '../assetss/css/Login.css';

class HomePage extends React.Component{

    clickAnalisis=()=>{
        this.props.history.push("clidas/analisis")
    }
    
    clickConfiguracionRutinas=()=>{
        this.props.history.push("clidas/configuracion/rutinas")
    }
    manejadorSubmit=e=>{
        e.preventDefault();
    }
    constructor(props){
        super(props);
    }


    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                
                <div class="flex-xl-column" align="center" >
                    <div class="container-fluid">
                        <div align="center" >

                <img src={ImagePageWelcome} class="img-thumbnail" style={{marginTop: "9%", alignSelf:"center"}}/>
                <div class="flex-xl-column">
                    <br/>
                    <button type="submit" className="btn btn-primary" style={{marginRight: "2%"}} onClick={()=>this.clickAnalisis()}>Analisis</button>
                    


                </div>
                <br/>
                    <button type="submit" className="btn btn-primary" style={{marginRight: "2%"}} onClick={()=>this.clickConfiguracionRutinas()}>Configuracion Rutinas</button>
                </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default HomePage