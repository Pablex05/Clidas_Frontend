import React from 'react';

import Header from "../../template/Header";
import ImagePage from "../../assetss/img/home/fondo-de-pantalla.jpg";
import {Apiurl} from "../../services/apirest";
import axios from "axios";

class ConfiguracionRutinas extends React.Component{

    //ponemos el contructor para poder usar los props
    constructor(props){
        super(props);
    }

    state = {
        form: {
            "examen_fisico_densidad": {
                "min": "",
                "max": ""
            },
            "examen_fisico_reaccion": {
                "min": "",
                "max": ""
            },
            "examen_microscopico_leucocitos": {
                "min": "",
                "max": ""
            },
            "examen_microscopico_hematies": {
                "min": "",
                "max": ""
            },
            "bilirrubina_total": {
                "min": "",
                "max": ""
            },
            "bilirrubina_directa": {
                "min": "",
                "max": ""
            },
            "bilirrubina_indirecta": {
                "min": "",
                "max": ""
            },
            "fosfatasa_alcalina_recien_nacido": {
                "min": "",
                "max": ""
            },
            "fosfatasa_alcalina_bebe": {
                "min": "",
                "max": ""
            },
            "fosfatasa_alcalina_ninio": {
                "min": "",
                "max": ""
            },
            "fosfatasa_alcalina_adulto": {
                "min": "",
                "max": ""
            },
            "glutamico_piruvica_hombre": {
                "min": "",
                "max": ""
            },
            "glutamico_piruvica_mujer": {
                "min": "",
                "max": ""
            },
            "glutamico_oxalacetica_hombre": {
                "min": "",
                "max": ""
            },
            "glutamico_oxalacetica_mujer": {
                "min": "",
                "max": ""
            },
            "trigliceridos": {
                "min": "",
                "max": ""
            },
            "colesterol_total": {
                "min": "",
                "max": ""
            },
            "hdl_hombre": {
                "min": "",
                "max": ""
            },
            "hdl_mujer": {
                "min": "",
                "max": ""
            },
            "ldl": {
                "min": "",
                "max": ""
            },
            "creatinina": {
                "min": "",
                "max": ""
            },
            "urea": {
                "min": "",
                "max": ""
            },
            "glucosa": {
                "min": "",
                "max": ""
            },
            "globulos_rojos_total_mujer": {
                "min": "",
                "max": ""
            },
            "globulos_rojos_total_hombre": {
                "min": "",
                "max": ""
            },
            "hematocritos_hombre": {
                "min": "",
                "max": ""
            },
            "hematocritos_mujer": {
                "min": "",
                "max": ""
            },
            "hemoglobina_g_hombre": {
                "min": "",
                "max": ""
            },
            "hemoglobina_g_mujer": {
                "min": "",
                "max": ""
            },
            "leucocitos": {
                "min": "",
                "max": ""
            },
            "neutrofilos_cayado": {
                "min": "",
                "max": ""
            },
            "neutrofilos_segmentado": {
                "min": "",
                "max": ""
            },
            "basofilos": {
                "min": "",
                "max": ""
            },
            "linfocitos": {
                "min": "",
                "max": ""
            },
            "monocitos": {
                "min": "",
                "max": ""
            },
            "plaquetas": {
                "min": "",
                "max": ""
            }
        },
        lists: []
    }

    manejadorChange = async e=>{
        //asigna un valor a una variable del estado
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    manejadorSubmit=e=>{
        e.preventDefault();
    }

    manejadorButton=()=>{
        let url = Apiurl + "analisis/add/"
        axios.post(url, this.state.form)
            .then(response =>{
                console.log(response)
                window.location.href = window.location.href;
                })
    }

    componentDidMount(){
        let url = Apiurl + "analisis";
        axios.get(url)
            .then(response =>{
                this.setState({
                    lists:response.data

                })
                console.log(response)
            })
    }

    clickList(id){
        this.props.history.push("/analisis/Edit/" +id)
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <body background={ImagePage}>
                <div class="flex-xl-column" align="center" >
                    <div className="container-xl">
                        <div align="center" >

                                <br/><br/><br/><br/><br/>
                                <h3 style={{backgroundColor:"black", color:"white"}}>Agregar Nuevo Analisis</h3>
                                <form onSubmit={this.manejadorSubmit}>
                                <input type="text" className="fadeIn second" name="Name" placeholder="Name" onChange={this.manejadorChange}/>
                                <input type="submit" className="fadeIn fourth" value="Aceptar" onClick={this.manejadorButton}/>
                                </form>

                        </div>
                    </div>
                </div>
                <div className="container-xl">
                    <div class="row-cols-2" align="center">
                    <br/>
                        <h3 style={{backgroundColor:"black", color:"white"}}>Lista Analisis</h3>
                    <table class="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.lists.map((value, index) =>{
                            return(
                                <tr key={index} onClick={()=>this.clickList(value.id)}>
                                    <td>{value.id}</td>

                                </tr>
                            )
                        })}

                        </tbody>
                    </table>

                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default ConfiguracionRutinas