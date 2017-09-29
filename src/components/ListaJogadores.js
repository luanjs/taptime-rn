import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, Button } from "react-native";
import firebase from "firebase"

class ListaJogadores extends Component {
  constructor(props){
    super(props);

    this.state = { jogadores: [] }
  }

  componentWillMount() {
   
    // Carrega o firebase
    var config = { apiKey: "AIzaSyAaAeDHJpCpc-t-TqZva-fAWeEVEzs8JfQ", authDomain: "taptime-1b841.firebaseapp.com", databaseURL: "https://taptime-1b841.firebaseio.com", projectId: "taptime-1b841", storageBucket: "taptime-1b841.appspot.com", messagingSenderId: "595569611792" };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    
    //Pega todos os dados 
    let listaJogadores = firebase.database().ref("jogadores");
    listaJogadores.on("value", snapshot => {
      aux = [];
      snapshot.forEach(item => {
        aux.push({
          nome: item.val().nome,
          toques: item.val().toques
        });
      });
      this.setState({ jogadores: aux })
    });

  }

  render() {
    
    return (
      <ScrollView style={style.content}>
        {
          this.state.jogadores.map((item, index) => {
          return (
            <View style={style.jogador} key={index}>
              <Text style={style.txtJogadorNome} key={index + 1}>
                {item.nome}
              </Text>
              <Text style={style.txtJogadorPontos} key={index + 2}>
                Toques: {item.toques}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: "#212121"
    },

    jogador:{
        backgroundColor: "#313131",
        margin: 5,
        padding:5,
        borderRadius: 10,
        alignItems: "center"
    },

    txtJogadorNome:{
        color: "#00796B",
        fontWeight: "bold"
    },

    txtJogadorPontos:{
        color: "#00796B"
    }
})

export { ListaJogadores };