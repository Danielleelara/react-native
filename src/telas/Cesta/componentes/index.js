import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native";
import { View } from "react-native";
import Topo from "./Topo";
import Detalhes from "./Detalhes";


export default function Cesta({topo, detalhes}) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
