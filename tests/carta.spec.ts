import "mocha";
import { expect } from "chai";
import { Carta, Coste, Color, Tipo, Rareza } from "../src/carta.js"

describe("Pruebas de Carta.ts", () => {
  it("Creacion de una criatura", () => {
    const textoCarta: string = "Aterrizaje: Siempre que una tierra entre al campo de batalla bajo tu control, crea una ficha de criatura Insecto Verde 1/1. "
    + "Si controlas seis o mas tierras, en vez de eso, crea una ficha que es una copia de la Horda de escrutos";
    const carta_ = new Carta(
      123,
      "Horda de escrutos",
      "Criatura" as Tipo,
      [["verde"], 2] as Coste,
      ["verde"] as Color[],
      "Rara" as Rareza,
      textoCarta,
      [1,1],
      0, //aqui escribo el contador de lealtad pero a la hora de construirse la criatura no se utiliza el valor
      12
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(123);
    expect(carta_.getNombre()).to.be.equal("Horda de escrutos");
    expect(carta_.getTipos()).to.be.equal("Criatura");
    expect(carta_.getColores()).to.be.eql(["verde"]);
    expect(carta_.getCoste()).to.be.eql([["verde"],2]);
    expect(carta_.getRareza()).to.be.equal("Rara");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getFyR()).to.be.eql([1,1]);
    expect(carta_.getValorMercado()).to.be.equal(12);
  })

  it("Creacion de una conjuro", () => {
    const textoCarta: string = "Como coste adicional para lanzar este hechizo, sacrifica una criatura o descarta una carta"
    + "Destruye la criatura o planeswalker objetivo";
    const carta_ = new Carta(
      1076,
      "Fragmentos oseos",
      "Conjuro" as Tipo,
      [["negro"], 0] as Coste,
      ["negro"] as Color[],
      "Comun" as Rareza,
      textoCarta,
      [0,0], //aqui escribo la fuerza y la resistencia pero a la hora de construirse el conjuro no se utiliza el valor 
      0,     //aqui escribo el contador de lealtad pero a la hora de construirse el conjuro no se utiliza el valor
      1.6
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(1076);
    expect(carta_.getNombre()).to.be.equal("Fragmentos oseos");
    expect(carta_.getTipos()).to.be.equal("Conjuro");
    expect(carta_.getColores()).to.be.eql(["negro"]);
    expect(carta_.getCoste()).to.be.eql([["negro"], 0]);
    expect(carta_.getRareza()).to.be.equal("Comun");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getValorMercado()).to.be.equal(1.6);
  })

  it("Creacion de una instantaneo", () => {
    const textoCarta: string = "El Ataque de aliento hace 2 puntos de daño a cada criatura que no sea un Dragon";
    const carta_ = new Carta(
      46,
      "Ataque de aliento",
      "Instantaneo" as Tipo,
      [["rojo"],2] as Coste,
      ["rojo"] as Color[],
      "Comun" as Rareza,
      textoCarta,
      [0,0], //aqui escribo la fuerza y la resistencia pero a la hora de construirse el instantaneo no se utiliza el valor 
      0,     //aqui escribo el contador de lealtad pero a la hora de construirse el instantaneo no se utiliza el valor
      0.7
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(46);
    expect(carta_.getNombre()).to.be.equal("Ataque de aliento");
    expect(carta_.getTipos()).to.be.equal("Instantaneo");
    expect(carta_.getColores()).to.be.eql(["rojo"]);
    expect(carta_.getCoste()).to.be.eql([["rojo"],2]);
    expect(carta_.getRareza()).to.be.equal("Comun");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getValorMercado()).to.be.equal(0.7);
  })

  it("Creacion de una tierra", () => {
    const textoCarta = " ";
    const carta_ = new Carta(
      9,
      "Isla",
      "Tierra" as Tipo,
      [[], 0] as Coste, 
      ["azul"] as Color[],
      "Comun" as Rareza,
      textoCarta,
      [0,0],  
      0,
      0.2
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(9);
    expect(carta_.getNombre()).to.be.equal("Isla");
    expect(carta_.getTipos()).to.be.equal("Tierra");
    expect(carta_.getColores()).to.be.eql(["azul"]);
    expect(carta_.getRareza()).to.be.equal("Comun");
    expect(carta_.getValorMercado()).to.be.equal(0.2);
  })

  it("Creacion de una artefacto", () => {
    const textoCarta = "'Girar': Agrega un mana de cualquier color en la identidad de color de tu comandante" +
    "Sacrificar la Esfera del comandante: Roba una carta.";
    const carta_ = new Carta(
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
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(912);
    expect(carta_.getNombre()).to.be.equal("Esfera del comandante");
    expect(carta_.getTipos()).to.be.equal("Artefacto");
    expect(carta_.getColores()).to.be.eql(["incoloro"]);
    expect(carta_.getCoste()).to.be.eql([[],3]);
    expect(carta_.getRareza()).to.be.equal("Comun");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getValorMercado()).to.be.equal(2.8);
  })

  it("Creacion de una encantamiento", () => {
    const textoCarta = "Cuando el santuario de ardillas entre al campo de batalla, crea una ficha de Ardilla Verde 1/1" +
    "Siempre que una criatura que no sea fucha que controlas muera, puedes pagar '1'." +
    "Si lo haces, regresa el Santuario de ardillas a la mano de su propietario.";
    const carta_ = new Carta(
      963,
      "Santuario de ardillas",
      "Encantamiento" as Tipo,
      [["verde"], 0] as Coste, 
      ["verde"] as Color[],
      "Infrecuente" as Rareza,
      textoCarta,
      [0,0],  
      0,
      4.3
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(963);
    expect(carta_.getNombre()).to.be.equal("Santuario de ardillas");
    expect(carta_.getTipos()).to.be.equal("Encantamiento");
    expect(carta_.getColores()).to.be.eql(["verde"]);
    expect(carta_.getCoste()).to.be.eql([["verde"],0]);
    expect(carta_.getRareza()).to.be.equal("Infrecuente");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getValorMercado()).to.be.equal(4.3);
  })

  it("Creacion de una planeswalker", () => {
    const textoCarta = "Todas las criaturas que controlas tiene la habilidad de vigilancia" +
    "'+1': Ganas 3 vidas" +
    "'-2': Pon un contador +1/+1 sobre cada criatura que controlas y un contador de planeswalker sobre cada uno de los planeswalker que controlas";
    const carta_ = new Carta(
      763,
      "Ajani, el de Corazon Grande",
      "Planeswalker" as Tipo,
      [["verde", "blanco"], 2] as Coste, 
      ["verde", "blanco"] as Color[],
      "Rara" as Rareza,
      textoCarta,
      [0,0],  
      5,
      9.8
    );
    expect(carta_).to.be.instanceOf(Carta);
    expect(carta_.getID()).to.be.equal(763);
    expect(carta_.getNombre()).to.be.equal("Ajani, el de Corazon Grande");
    expect(carta_.getTipos()).to.be.equal("Planeswalker");
    expect(carta_.getColores()).to.be.eql(["verde", "blanco"]);
    expect(carta_.getCoste()).to.be.eql([["verde", "blanco"],2]);
    expect(carta_.getRareza()).to.be.equal("Rara");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getValorMercado()).to.be.equal(9.8);
  })

  it("Creacion de una carta mal definida", () => {
    const textoCarta = " ";
    const carta_ = new Carta(
      0,
      " ",
      "Cosa" as Tipo,
      [[], 0] as Coste, 
      [] as Color[],
      "" as Rareza,
      textoCarta,
      [0,0],  
      0,
      0.0
    );
    expect(carta_).to.be.instanceOf(Carta);
  })

  it("Mostrar una carta", () => {
    const textoCarta: string = "Aterrizaje: Siempre que una tierra entre al campo de batalla bajo tu control, crea una ficha de criatura Insecto Verde 1/1. "
    + "Si controlas seis o mas tierras, en vez de eso, crea una ficha que es una copia de la Horda de escrutos";
    const carta_ = new Carta(
      123,
      "Horda de escrutos",
      "Criatura" as Tipo,
      [["verde"], 2] as Coste,
      ["verde"] as Color[],
      "Rara" as Rareza,
      textoCarta,
      [1,1],
      0, //aqui escribo el contador de lealtad pero a la hora de construirse la criatura no se utiliza el valor
      12
    );
    expect(carta_.mostrarCarta()).true;
  })


});