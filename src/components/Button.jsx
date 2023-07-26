import React from "react";
import { useDispatch } from "react-redux";
import { ADD_NUMBER, SUB_NUMBER } from "../actions";

export default function Button(props) {

    const dispatch = useDispatch()

    const changer = () =>{
        if(props.type === "-"){
            dispatch(SUB_NUMBER())
        }
        else{
            dispatch(ADD_NUMBER())
            
        }
    }

  return (
    <input onClick={changer} type="button" value={props["type"] === "-" ? "-" : "+"}></input>
  );
}
