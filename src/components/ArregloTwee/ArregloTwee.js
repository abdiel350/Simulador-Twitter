import React from 'react';
import { Grid } from '@material-ui/core';
import './ArregloTwee.scss';
import ModalTwitter from "../ModalTwitter";

export default function ArrayTwee(props){
    const {todosTwitter, elimartwitter }= props;  

    if(!todosTwitter || todosTwitter.length === 0){
        return(
            <div className="list-tweets-empty">
                <h2>No hay twitter que mostrar..</h2>
            </div>
        );
    }

    return ( 
        <Grid container spacing={3} className="list-tweets">

            {todosTwitter.map((resu, index) => (
                <Grid key={index} item xs={4}>
                    <ModalTwitter
                    resu={resu}
                    index={index}
                    elimartwitter={elimartwitter}
                    />
                </Grid>
           ))}
    </Grid>
    );
}