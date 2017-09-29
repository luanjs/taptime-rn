import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';

import { Router, Scene } from "react-native-router-flux";

import Rotas from "./src/Rotas.js";

export default class taptime extends Component {
 

  render() {
    return (
      <Rotas />
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1
  },
})

AppRegistry.registerComponent('taptime', () => taptime);
