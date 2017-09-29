import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";


class Bloco extends Component {
  constructor(props){
    super(props);
  }  
  esconde(){
      if(this.props.show === 1)
        this.props.func(this.props.cor, parseInt(this.props.value));
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={ () => { this.esconde() } } 
                            style={ [style.btn, {backgroundColor:this.props.cor}, {opacity:this.props.show}]}>
            <Text style={ style.txtBtn }>{ this.props.value }</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const style = StyleSheet.create({
    btn:{
        width:120,
        height:120,
        marginHorizontal: 25,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 15
    },

    txtBtn:{
        fontSize: 35
    },

    hide:{
       opacity: 0
    },

    show:{
       opacity: 1
    }
})

export { Bloco };