import React, { Component } from "react";
import firebase from "firebase"
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Actions } from "react-native-router-flux"
import { ListaJogadores } from "../components"

class Resultado extends Component {


  constructor(props){
    super(props);
    this.state = { nome: "" };
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAaAeDHJpCpc-t-TqZva-fAWeEVEzs8JfQ",
      authDomain: "taptime-1b841.firebaseapp.com",
      databaseURL: "https://taptime-1b841.firebaseio.com",
      projectId: "taptime-1b841",
      storageBucket: "taptime-1b841.appspot.com",
      messagingSenderId: "595569611792"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

  }

  salva(){
    jogadores = firebase.database().ref("jogadores");
    jogadores.push().set(
      {
        nome: this.state.nome,
        toques: this.props.toques
      }
    );

    Actions.ranking();
    Actions.ranking({
      onBack: () => {
        Actions.game();
      }
    })
  }


  render() {
    return <View style={style.content}>
        <View style={style.contentInfo}>
          <Text style={style.txtToques}>
            {" "}
            Você deu {this.props.toques} toques!
          </Text>
          <TextInput style={style.txtInputNome} placeholderTextColor="white" placeholder={"Seu Nome"} value={this.state.nome} onChangeText={txt => {
              this.setState({ nome: txt });
            }} />

          <View style={style.btnSalvar}>
            <Button title="Salvar" onPress={() => {
                this.salva();
              }} />
            
          </View>
        </View>

        <View style={style.contentLista}>
          <Text style={style.txtTitleRanking}> RANKING </Text>
          <ListaJogadores firebase={ firebase.database } />
        </View>
      </View>;
  }
}

const style = StyleSheet.create({
    content:{
        backgroundColor: "#212121",
        flex: 1,
        alignItems: "center",
    },

    txtToques:{
      fontSize: 25,
      color: "white"
    },

    txtInputNome:{
      marginTop: 20,
      alignSelf: "stretch",
      textAlign: "center",
      color: "white"
    },

    contentInfo:{
      paddingTop: 50,
      alignItems: "center"
    },

    contentLista:{
      flex:1,
      alignSelf: "stretch",
      paddingTop: 10
    },

    btnSalvar:{
      marginTop: 20,
      width: 100
    },

    txtTitleRanking:{
      alignSelf: "center",
      fontSize: 20,
      color: "white"
    }
})

export { Resultado };
