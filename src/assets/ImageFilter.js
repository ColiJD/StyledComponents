import React from "react";
import alimentacion from "../assets/images/alimentacion.svg";
import salud from "../assets/images/salud.svg";
import otros from "../assets/images/otros.svg";
import transporte from "../assets/images/transporte.svg";
import utiludades from "../assets/images/utilidades.svg";
import {Icono} from "../assets/index";


export default (type) => {
    const Image = {
    Restaurante: <Icono src={alimentacion} alt="Restaurante"/>,
    Salud: <Icono src={salud} alt="Salud"/>,
    Transporte: <Icono src={transporte} alt="Transporte"/>,
    Utilidades: <Icono src={utiludades} alt="Utilidades"/>,
    default: <Icono src={otros} alt="Otros"/>
    }
    return Image[type] || Image["default"];
}