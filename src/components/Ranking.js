import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListaJogadores } from "../components"


class Ranking extends Component{
    render(){
        return(
            <ListaJogadores></ListaJogadores>
        )
    }
}

export { Ranking };