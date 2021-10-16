# AppTemporizador
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {valor: 60, nome: "COMEÇAR"}
    this.timer = null;

    this.comecar = this.comecar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  comecar(){
    let s = this.state;

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      s.nome = "CONTINUAR";
      this.setState(s);
    }else{
      this.timer = setInterval(() => {
        
        s.valor -= 0.1;
        s.nome = "PARAR";

        this.setState(s);
      }, 100);
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let s = this.state;

    s.valor = 60;
    s.nome = "INICIAR";

    this.setState(s);
  }

  render(){ 
    return(
      <View style={estilo.body} >
      <Text style={estilo.tex}> TEMPORIZADOR </Text>
           <Image source={          {uri:'https://store-images.s-microsoft.com/image/apps.2213.9007199267200206.c2f85715-e1cc-4a97-a04e-b2295081b82d.447c0a22-da5d-4649-a8f4-b4368a0d1800?mode=scale&q=90&h=300&w=300'}}
        style={{width: 100,
        height: 100}}/>
        <Text style={estilo.texto}> {this.state.valor.toFixed(1)} </Text>
        <View style={estilo.areaBtn}>

          <TouchableOpacity style={estilo.btn} onPress={this.comecar}>
            <Text style={estilo.textBtn}> {this.state.nome} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.btn} onPress={this.limpar}>
            <Text style={estilo.textBtn}>LIMPAR</Text>
          </TouchableOpacity>
   
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  areaBtn:{
    flexDirection: 'row',
    marginTop: 170
  },
  textBtn:{
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  btn:{
    width: 160,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  texto:{
    fontSize: 125,
    fontWeight: 'bold',
    color: '#000000'
  },
  tex:{
    fontSize: 40,
    fontWeight: 'normal',
    color: '#000000'
  }
})
