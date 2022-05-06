import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Topo from "./Topo";
import Detalhes from "./Detalhes";
import Botao from "../../../componentes/Botao";
import Itens from "../componentes/Itens";

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Botao>{detalhes.botao}</Botao>
        <Itens />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
