import { Component } from "react";
import UsuarioFuncional from "./usuarios-component-funcional";
import React from "react";

class UsuarioClase extends Component {
    render() {
        return (
            <><h3>Componente funcional</h3><UsuarioFuncional name="Pepito Perez" /><UsuarioFuncional name="Juan Patiño" /></>
        )
    }
}

export default UsuarioClase