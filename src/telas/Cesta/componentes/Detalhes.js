import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function Detalhes({
  titulo,
  nomeFazenda,
  logoFazenda,
  descricao,
  preco
}){
  return (
    <>
      <Texto style={estilos.nome}>{titulo}</Texto>
      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={logoFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
    </>
  );
}


const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
});
