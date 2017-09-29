import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

class Topo extends Component {
  render() {
    return <View style={ style.content }>
        <TouchableHighlight onPress={ () => { this.props.reiniciar(1) } } style={ style.reiniciar }>
            <Text style={ style.txtReiniciar }>Reiniciar</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={ () => { this.props.ranking()} } style={ style.reiniciar }>
            <Text style={ style.txtReiniciar }>Ranking</Text>
        </TouchableHighlight>
      </View>;
  }
}

const style = StyleSheet.create({
    content:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    reiniciar:{
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 10,
        height: 55,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "#CBCBCB"
    },

    txtReiniciar:{
        fontSize: 20
    }
});

export { Topo };