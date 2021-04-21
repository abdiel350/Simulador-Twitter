import React, { useState, useEffect} from 'react';
import Header from "./components/Header";
import { Container, Snackbar } from "@material-ui/core";
import Enviotwitter from "./components/Enviotwee";
import {clavekey} from "./components/claveprimary/ClaveKey";
import ArregloTwee from "./components/ArregloTwee";

function App() {

  const [toastProps, alertaMsj] = useState({
    open: false,
    text: null
  });

  const [cargadostwee, setcargadostwee]= useState(false);

  const [todosTwitter, setTwitter] = useState([]);
      useEffect(() => {
        const arreglTwi= localStorage.getItem(clavekey);
        const arreglolleno= JSON.parse(arreglTwi);
        setTwitter(arreglolleno);
        setcargadostwee(false);    
      }, [cargadostwee]);

      const elimartwitter = index => {
        todosTwitter.splice(index, 1);
        setTwitter(todosTwitter);
        localStorage.setItem(clavekey, JSON.stringify(todosTwitter));
        setcargadostwee(true);    
      };

  return (
    <Container className="tweets" maxWindth={false}> 
      <Header/>

      <Enviotwitter alertaMsj={alertaMsj} todosTwitter={todosTwitter} />

      <ArregloTwee
        todosTwitter={todosTwitter}
        elimartwitter={elimartwitter}
      />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
        
    </Container>
  );
}

export default App;
