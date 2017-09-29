import React from "react";

import { Router, Scene, Actions } from "react-native-router-flux";
import { Game, Resultado, Ranking } from "./components/";

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 51 }}>

    <Scene 
      key="game" 
      type="reset"
      initial
      component={Game} 
      title="TAP-TIME" />
          
    <Scene
      key="resultado"
      
      renderBackButton={() => null}
      component={ Resultado }
      title="Resultado"
    />

    <Scene 
      key="ranking"
      component = { Ranking }
      title = "Ranking"
    />
    
  </Router>
);

export default Rotas;
