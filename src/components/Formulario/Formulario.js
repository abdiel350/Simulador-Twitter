import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import './Formulario.scss';

export default function Formularios(props){

    const {enviotwi} = props;    
  
    const [formValue, setFormulario] = useState({
        name: "",
        mensaje: ""
      });
 
      const guardandoInformacion = event => {
        setFormulario({
          ...formValue,
          [event.target.name]: event.target.value
        });
      };    

    return(
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title"> Enviar Twitter</h2>
            <form
             className="form-send-tweet__form" 
             onSubmit={event => enviotwi(event,formValue)}
             onChange={guardandoInformacion}             
             >
                <FormControl>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-name"
                            type="text"
                            name="name"
                            placeholder="Nombre de usuario..."
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-textarea"
                            name="mensaje"
                            multiline
                            rows="6"
                            placeholder="Escribi tu Tweet..."
                            margin="normal"
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Button type="submit">
                            <h2>Enviar</h2>
                        </Button>
                    </FormGroup>
                    
                </FormControl>
            </form>
        </div>
    );
}

