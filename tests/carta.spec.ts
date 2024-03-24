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
      [["negro"]] as Coste,
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
    expect(carta_.getCoste()).to.be.eql([["negro"]]);
    expect(carta_.getRareza()).to.be.equal("Comun");
    expect(carta_.getTexto()).to.be.equal(textoCarta);
    expect(carta_.getValorMercado()).to.be.equal(1.6);
  })

});