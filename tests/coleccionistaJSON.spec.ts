import "mocha";
import { expect } from "chai";
import { Carta, Tipo, Coste, Color, Rareza } from "../src/carta.js";
import { Coleccion } from "../src/coleccion.js"
import { Coleccionista } from "../src/coleccionista.js"
import { ColeccionistaJSON } from "../src/coleccionistaJSON.js"; 

describe("Pruebas de la clase ColeccionistaJSON.ts", () => {
  it("Creacion de un ColeccionistaJSON", () => {
    const coleccionistaJSON = new ColeccionistaJSON("usuario_test");
    expect(coleccionistaJSON).to.be.an.instanceOf(ColeccionistaJSON);
  });

  it("Añadir una carta a un ColeccionistaJSON", () => {
    const coleccionistaJSON = new ColeccionistaJSON("usuario_test");
    const textoCarta = "'Girar': Agrega un mana de cualquier color en la identidad de color de tu comandante" +
    "Sacrificar la Esfera del comandante: Roba una carta.";
    const carta_ = coleccionistaJSON.setCarta( new Carta(
      912,
      "Esfera del comandante",
      "Artefacto" as Tipo,
      [[], 3] as Coste, 
      ["incoloro"] as Color[],
      "Comun" as Rareza,
      textoCarta,
      [0,0],  
      0,
      2.8
    ));
    expect(carta_).to.be.equal(true);
  });

  it("Mostrar una carta de un ColeccionistaJSON", () => {
    const coleccionistaJSON = new ColeccionistaJSON("usuario_test");
    const carta_ = coleccionistaJSON.showCarta(912);
    expect(carta_).true;
  });

  it("Listar las cartas de un ColeccionistaJSON", () => {
    const coleccionistaJSON = new ColeccionistaJSON("usuario_test");
    const test = coleccionistaJSON.showColeccion();
    expect(test).true;
  });

  it("Modificar una carta a un ColeccionistaJSON", () => {
    const coleccionistaJSON = new ColeccionistaJSON("usuario_test");
    const textoCarta = "Todas las criaturas que controlas tiene la habilidad de vigilancia" +
    "'+1': Ganas 3 vidas" +
    "'-2': Pon un contador +1/+1 sobre cada criatura que controlas y un contador de planeswalker sobre cada uno de los planeswalker que controlas";
    const carta_ = coleccionistaJSON.modCarta(new Carta(
      912,
      "Ajani, el de Corazon Grande",
      "Planeswalker" as Tipo,
      [["verde", "blanco"], 2] as Coste, 
      ["verde", "blanco"] as Color[],
      "Rara" as Rareza,
      textoCarta,
      [0,0],  
      5,
      9.8
    ));
    expect(carta_).to.be.equal(true);
  });

  it("Eliminar las cartas de un ColeccionistaJSON", () => {
    const coleccionistaJSON = new ColeccionistaJSON("usuario_test");
    const test = coleccionistaJSON.quitarCarta(912);
    expect(test).true;
  });
})