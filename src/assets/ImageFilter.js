import React from "react";
import alimentacion from "../assets/images/alimentacion.svg";
import salud from "../assets/images/salud.svg";
import otros from "../assets/images/otros.svg";
import transporte from "../assets/images/transporte.svg";
import utiludades from "../assets/images/utilidades.svg";
import {IconoTema} from "../assets/index";


export default (type) => {
    const Image = {
    Restaurante: <IconoTema src={alimentacion} alt="Restaurante"/>,
    Salud: <IconoTema src={salud} alt="Salud"/>,
    Transporte: <IconoTema src={transporte} alt="Transporte"/>,
    Utilidades: <IconoTema src={utiludades} alt="Utilidades"/>,
    default: <IconoTema src={otros} alt="Otros"/>
    }
    return Image[type] || Image["default"];
}