import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  StatusBar,
  Button
} from "react-native";
import firebase from "firebase";

import { Actions } from "react-native-router-flux"

import { Topo, Bloco } from "./"; 

/// Variaveis
let seq = [1, 2, 3, 4, 5, 6];
let rodada = 0;
let totalToques = 0;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { corFundo: "white" };
    this.trataEvento = this.trataEvento.bind(this);
    this.reiniciar = this.reiniciar.bind(this);
    this.state = { show: [1, 1, 1, 1, 1, 1], progress: 0 };
  }

  fire(){
    let fire  = firebase.database();
    fire.ref("pessoa").set("luan");
  }

  componentWillReceiveProps(){
    this.forceUpdate();
  }
  

  reiniciar(embaralhar) {
    
    for (let i = 0; i < this.state.show.length; i++) {
      this.state.show[i] = 1;
    }

    this.setState({ corFundo: "white" });
    this.setState({ progress: 0 });
    rodada = 0;

    if (embaralhar){
      seq = shuffle(seq);
      totalToques = 0; 
    } 
  }

  trataEvento(corFundo, num) {
    totalToques++;

    if (rodada === 5) {

      Actions.resultado();
      Actions.resultado({
        onBack: () => {
          Actions.pop();
          this.reiniciar(true);
        }, toques: totalToques 
      });
    }

    if (seq[rodada] === num) {
      this.setState({ corFundo: corFundo });
      this.setState({ progress: (rodada + 1) / 6 });
      this.state.show[num - 1] = 0;
      rodada++;
    } else {
      this.reiniciar(0);
    }
    this.forceUpdate();
  }

  ranking(){
    Actions.ranking();
    Actions.ranking({
      onBack: () => {
        Actions.pop();
        this.reiniciar(true);
      }
    })
  }

  render() {
    return (
      <View style={[style.container, { backgroundColor: this.state.corFundo }]}>
        <StatusBar hidden={true} style={{ backgroundColor: "white" }} />
        <Topo reiniciar={this.reiniciar}  ranking={ this.ranking }/>
       
        <View style={style.body}>
          <View style={style.containerBtn}>
            <Bloco
              func={this.trataEvento}
              value="1"
              cor="#0166FF"
              show={this.state.show[0]}
            />
            <Bloco
              func={this.trataEvento}
              value="2"
              cor="#F70301"
              show={this.state.show[1]}
            />
          </View>

          <View style={style.containerBtn}>
            <Bloco
              func={this.trataEvento}
              value="3"
              cor="#006700"
              show={this.state.show[2]}
            />
            <Bloco
              func={this.trataEvento}
              value="4"
              cor="#FECB00"
              show={this.state.show[3]}
            />
          </View>

          <View style={style.containerBtn}>
            <Bloco
              func={this.trataEvento}
              value="5"
              cor="#CBCBCB"
              show={this.state.show[4]}
            />
            <Bloco
              func={this.trataEvento}
              value="6"
              cor="#666632"
              show={this.state.show[5]}
            />
          </View>
        </View>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          progress={this.state.progress}
          indeterminate={false}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  containerBtn: {
    flexDirection: "row"
  },

  body: {
    flex: 1,
    borderWidth: 0,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export { Game };
