import "mocha";
import { expect } from "chai";
import { Carta, Tipo, Coste, Color, Rareza } from "../src/carta.js";
import { Coleccion } from "../src/coleccion.js"

describe("Pruebas de la clase Coleccion.js", () => {
  it("Creacion de una coleccion de cartas Magic", () => {
    const mtgColeccion = new Coleccion();
    expect(mtgColeccion).to.be.an.instanceOf(Coleccion);
  });

  it("Añadir una carta a la coleccion", () => {
    const mtgColeccion = new Coleccion();
    const carta_ = new Carta(
      46,
      "Ataque de aliento",
      "Instantaneo" as Tipo,
      [["rojo"],2] as Coste,
      ["rojo"] as Color[],
      "Comun" as Rareza,
      "El Ataque de aliento hace 2 puntos de daño a cada criatura que no sea un Dragon",
      [0,0], 
      0,     
      0.7
    );
    const test = mtgColeccion.setCarta(carta_); 
    expect(test).true;
    const test2 = mtgColeccion.setCarta(carta_);
    expect(test2).false;
  });

  it("Eliminar una carta de la coleccion", () => {
    const mtgColeccion = new Coleccion();
    const carta_ = new Carta(
      46,
      "Ataque de aliento",
      "Instantaneo" as Tipo,
      [["rojo"],2] as Coste,
      ["rojo"] as Color[],
      "Comun" as Rareza,
      "El Ataque de aliento hace 2 puntos de daño a cada criatura que no sea un Dragon",
      [0,0], 
      0,     
      0.7
    );
    mtgColeccion.setCarta(carta_);
    const test = mtgColeccion.quitarCarta(carta_.getID());
    expect(test).true;
    const test2 = mtgColeccion.quitarCarta(carta_.getID());
    expect(test2).false;

  });

  it("Modificar una carta de la coleccion", () => {
    const mtgColeccion = new Coleccion();
    const carta_1 = new Carta(
      46,
      "Ataque de aliento",
      "Instantaneo" as Tipo,
      [["rojo"],2] as Coste,
      ["rojo"] as Color[],
      "Comun" as Rareza,
      "El Ataque de aliento hace 2 puntos de daño a cada criatura que no sea un Dragon",
      [0,0], 
      0,     
      0.7
    );
    const carta_2 = new Carta(
      46,
      "Contrahechizo",
      "Instantaneo" as Tipo,
      [["azul", "azul"],0] as Coste,
      ["azul"] as Color[],
      "Comun" as Rareza,
      "Contrarresta el hechizo objetivo",
      [0,0], 
      0,     
      1.8
    );
    mtgColeccion.setCarta(carta_1);
    const test = mtgColeccion.modCarta(carta_2);    
    expect(test).true;
  })

  it("No modificar una carta que no pertenece la coleccion", () => {
    const mtgColeccion = new Coleccion();
    const carta_ = new Carta(
      46,
      "Niebla",
      "Instantaneo" as Tipo,
      [["verde"],0] as Coste,
      ["verde"] as Color[],
      "Comun" as Rareza,
      "Las criaturas no hacen daño de combate este turno",
      [0,0], 
      0,     
      1.8
    );
    const test = mtgColeccion.modCarta(carta_);
    expect(test).false
  });

  it("Obtener una carta de la coleccion", () =>{
    const mtgColeccion = new Coleccion();
    const carta_ = new Carta(
      46,
      "Ataque de aliento",
      "Instantaneo" as Tipo,
      [["rojo"],2] as Coste,
      ["rojo"] as Color[],
      "Comun" as Rareza,
      "El Ataque de aliento hace 2 puntos de daño a cada criatura que no sea un Dragon",
      [0,0], 
      0,     
      0.7
    );
    mtgColeccion.setCarta(carta_)
    const test = mtgColeccion.getCarta(carta_.getID()); 
    expect(test).to.be.eql(carta_);
  });

  it("Recorrer las cartas de una lista", () => {
    const mtgColeccion = new Coleccion();
    const carta_1 = new Carta(
      46,
      "Ataque de aliento",
      "Instantaneo" as Tipo,
      [["rojo"],2] as Coste,
      ["rojo"] as Color[],
      "Comun" as Rareza,
      "El Ataque de aliento hace 2 puntos de daño a cada criatura que no sea un Dragon",
      [0,0], 
      0,     
      0.7
    );
    const carta_2 = new Carta(
      458,
      "Contrahechizo",
      "Instantaneo" as Tipo,
      [["azul", "azul"],0] as Coste,
      ["azul"] as Color[],
      "Comun" as Rareza,
      "Contrarresta el hechizo objetivo",
      [0,0], 
      0,     
      1.8
    );
    mtgColeccion.setCarta(carta_1);
    mtgColeccion.setCarta(carta_2);
    let count = 0;
    mtgColeccion.forEach(() => {
      count += 1;
    });
    expect(count).to.be.equal(2);
  });
});