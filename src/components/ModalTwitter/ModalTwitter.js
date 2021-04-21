import React from 'react';
import { Card, CardContent } from "@material-ui/core";
import moment from "moment";
import "./ModalTwitter.scss";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

export default function MostrarTwee(props){

    const { resu:{name,mensaje,time}, index, elimartwitter} = props;

return (   
   
    <Card className="tweet">
      <CardContent>
        <div className="tweet__header">
          <h5>{name}</h5>
          <DeleteTwoToneIcon onClick={() => elimartwitter(index)} />
        </div>
        <p>{mensaje}</p>
        <div className="tweet__date-add-tweet">
          {moment(time).format("DD/MM/YYYY HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
}