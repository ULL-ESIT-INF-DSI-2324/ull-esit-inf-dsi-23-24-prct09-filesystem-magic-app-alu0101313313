import "mocha";
import { expect } from "chai";
import { Carta, Tipo, Coste, Color, Rareza } from "../src/carta.js";
import { Coleccionista } from "../src/coleccionista.js"

describe("Pruebas de la clase Coleccionista", () => {
  it("Creacion de un coleccionista", () => {
    const usuario = new Coleccionista("usuario1");
    expect(usuario).to.be.an.instanceOf(Coleccionista);
  });

  it("Creacion de un coleccionista", () => {
    const usuario = new Coleccionista("usuario1");
    expect(usuario.getUsuarioNombre()).to.be.equal("usuario1");
  });

  it("Agregar una carta a la coleccion del usuario", () => {
    const usuario = new Coleccionista("usuario1");
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
    const test = usuario.setCarta(carta_);
    expect(test).true;
    const test2 = usuario.setCarta(carta_);
    expect(test2).false;
  });

  it("Eliminar una carta de la coleccion del usuario", () => {
    const usuario = new Coleccionista("usuario1");
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
    usuario.setCarta(carta_);
    const test = usuario.quitarCarta(carta_.getID());
    expect(test).true;
    const test2 = usuario.quitarCarta(carta_.getID());
    expect(test2).false;
  });

  it("Modificar una carta de la coleccion del usuario", () => {
    const usuario = new Coleccionista("usuario1");
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
    const carta_3 = new Carta(
      64,
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
    usuario.setCarta(carta_1);
    const test = usuario.modCarta(carta_2);
    expect(test).true;
    const test2 = usuario.modCarta(carta_3);
    expect(test2).false;
  });

  it("Mostrar los detalles de una carta de la coleccion del usuario", () => {
    const usuario = new Coleccionista("usuario1");
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
      64,
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
    usuario.setCarta(carta_1);
    const test = usuario.showCarta(carta_1.getID());
    expect(test).true;
    const test2 = usuario.showCarta(carta_2.getID());
    expect(test2).false;
  });

  it("Listar las cartas de la coleccion del usuario", () => {
    const usuario = new Coleccionista("usuario1");
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
      64,
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
    usuario.setCarta(carta_1);
    usuario.setCarta(carta_2);
    const test = usuario.showColeccion();
    expect(test).true;
  });

})