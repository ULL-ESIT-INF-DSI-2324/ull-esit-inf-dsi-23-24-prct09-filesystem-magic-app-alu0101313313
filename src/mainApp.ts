import { Carta, Tipo, Coste, Color, Rareza } from "./carta.js";
import { ColeccionistaJSON } from "./coleccionistaJSON.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command("add", "Añade una carta a la coleccion", {
    usuario: {
      description: "Nombre de Usuario",
      type: "string",
      demandOption: true,
    },
    id: {
      description: "ID de la carta",
      type: "number",
      demandOption: true,
    },
    nombre: {
      description: "Nombre de la carta",
      type: "string",
      demandOption: true,
    },
    tipo: {
      description: "Tipo de la carta",
      type: "string",
      choices: ['Tierra', 'Conjuro', 'Instantaneo', 'Criatura', 'Artefacto', 'Encantamiento', 'Planeswalker'],
      demandOption: true,
    },
    coste: {
      description: "Coste de la carta",
      type: "array",
      demandOption: true,
    },
    colores: {
      description: "Colores de la carta",
      type: "array",
      choices: ['blanco','negro', 'azul', 'verde', 'rojo'],
      demandOption: true,
    },
    rareza: {
      description: "Rareza de la carta",
      type: "string",
      choices: ['Comun', 'Infrecuente', 'Rara', 'Rara Mitica'],
      demandOption: true,
    },
    texto: {
      description: "Texto de la carta",
      type: "string",
      demandOption: true,
    },
    FyR: {
      description: "Fuerza y resistencia de la criatura",
      type: "array",
      coerce: (arg) => arg.map(Number),
      demandOption: false,
    },
    lealtad: {
      description: "Contadores de lealtad de un planeswalker",
      type: "number",
      demandOption: false,
    },
    valor_mercado: {
      description: "Valor de mercado de una carta",
      type: "number",
      demandOption: true,
    },
  },
  (argv) => {
    const usuario_ = new ColeccionistaJSON(argv.usuario)
    const carta_ = new Carta(
        argv.id,
        argv.nombre,
        argv.tipo as Tipo,
        argv.coste as Coste,
        argv.colores as Color[],
        argv.rareza as Rareza,
        argv.texto,
        argv.FyR,
        argv.lealtad as number,
        argv.valor_mercado
      );
      usuario_.setCarta(carta_);
    }
  ).help().argv;


yargs(hideBin(process.argv))
  .command("remove", "Eliminar una copia o una carta de la coleccion", {
    usuario: {
      descripcion: "usuario",
      type: "string",
      demandOption: true,
    },
    id: {
      descripcion: "ID carta",
      type: "number",
      demandOption: true,
    },
  },
  (argv) => {
    const usuario_ = new ColeccionistaJSON(argv.usuario);
    usuario_.quitarCarta(argv.id);
  }
).help().argv;

yargs(hideBin(process.argv))
  .command("list", "Muestra la coleccion de cartas de un usuario", {
    usuario: {
      descripcion: "usuario",
      type: "string",
      demandOption: true,
    },
  },
  (argv) => {
    const usuario_ = new ColeccionistaJSON(argv.usuario);
    usuario_.showColeccion();
  }
).help().argv;

yargs(hideBin(process.argv))
  .command("show", "Muestra la una carta de la coleccion de un usuario", {
    usuario: {
      descripcion: "usuario",
      type: "string",
      demandOption: true,
    },
    id: {
      descripcion: "ID carta",
      type: "number",
      demandOption: true,
    },
  },
  (argv) => {
    const usuario_ = new ColeccionistaJSON(argv.usuario);
    usuario_.showCarta(argv.id);
  }
).help().argv;

yargs(hideBin(process.argv))
  .command("mod", "Modifica una carta de la coleccion", {
    usuario: {
      description: "Nombre de Usuario",
      type: "string",
      demandOption: true,
    },
    id: {
      description: "ID de la carta",
      type: "number",
      demandOption: true,
    },
    nombre: {
      description: "Nombre de la carta",
      type: "string",
      demandOption: true,
    },
    tipo: {
      description: "Tipo de la carta",
      type: "string",
      choices: ['Tierra', 'Conjuro', 'Instantaneo', 'Criatura', 'Artefacto', 'Encantamiento', 'Planeswalker'],
      demandOption: true,
    },
    coste: {
      description: "Coste de la carta",
      type: "array",
      demandOption: true,
    },
    colores: {
      description: "Colores de la carta",
      type: "array",
      choices: ['blanco','negro', 'azul', 'verde', 'rojo'],
      demandOption: true,
    },
    rareza: {
      description: "Rareza de la carta",
      type: "string",
      choices: ['Comun', 'Infrecuente', 'Rara', 'Rara Mitica'],
      demandOption: true,
    },
    texto: {
      description: "Texto de la carta",
      type: "string",
      demandOption: true,
    },
    FyR: {
      description: "Fuerza y resistencia de la criatura",
      type: "array",
      coerce: (arg) => arg.map(Number),
      demandOption: false,
    },
    lealtad: {
      description: "Contadores de lealtad de un planeswalker",
      type: "number",
      demandOption: false,
    },
    valor_mercado: {
      description: "Valor de mercado de una carta",
      type: "number",
      demandOption: true,
    },
    cantidad: {
      description: "Cantidad de cartas a añadir",
      type: "number",
      demandOption: true,
    },
  },
  (argv) => {
    const usuario_ = new ColeccionistaJSON(argv.usuario)
    const carta_ = new Carta(
        argv.id,
        argv.nombre,
        argv.tipo as Tipo,
        argv.coste as Coste,
        argv.colores as Color[],
        argv.rareza as Rareza,
        argv.texto,
        argv.FyR,
        argv.lealtad as number,
        argv.valor_mercado
      );
      usuario_.modCarta(carta_);
    }
  ).help().argv;
