import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Enviotwitter.scss";
import ModalVista from "../Modal";
import Formulario from "../Formulario";
import moment from "moment";
import {clavekey} from "../claveprimary/ClaveKey";

export default function Enviartwitter(props) {

    const [ AbrirModal, setIsOpenModal] = useState(false);

  
    const {alertaMsj, todosTwitter}= props;
    
    const openModal = () => {
        setIsOpenModal(true);
      };
      const closeModal = () => {
        setIsOpenModal(false);
      };

      const enviotwi = (event, formValue)=>{
        event.preventDefault();

            const { name, mensaje } = formValue;
            let arregloTwee= [];

            if(todosTwitter){
              arregloTwee=todosTwitter;
            }

              if(!name || !mensaje){
                alertaMsj({
                  open: true,
                  text:"Error: Todas los campos son obligatorios"
                });

            } else {
              formValue.time=moment();
              arregloTwee.push(formValue);
              localStorage.setItem(clavekey,JSON.stringify(arregloTwee));
              alertaMsj({
                open: true,
                text:"Envio de msj exitoso"
              });
              
              closeModal();
            }
            arregloTwee= [];
      };



return(
    <div className="envio">
 
       <Fab className="envio__modal" color="primary" aria-label="add" onClick={openModal}  >           
          <AddIcon/>
      </Fab>

            <ModalVista AbrirModal={AbrirModal} closeModal={closeModal} >
             <Formulario enviotwi={enviotwi}/>
            </ModalVista>
    </div>
);

}