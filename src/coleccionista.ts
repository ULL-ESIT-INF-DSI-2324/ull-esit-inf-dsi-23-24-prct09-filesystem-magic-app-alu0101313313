import { Carta } from "./carta.js";
import { Coleccion } from "./coleccion.js";
import chalk from "chalk";

const log = console.log;

export class Coleccionista {
  private nombre_: string;
  protected coleccionUsuario_ = new Coleccion();

  constructor(
    nombre: string,
  ){
    this.nombre_ = nombre;
  }

  getUsuarioNombre(): string {
    return this.nombre_;
  }

  setCarta(carta: Carta): boolean {
    let result = this.coleccionUsuario_.setCarta(carta);
    if(result){
      log(chalk.green("Se ha añadido la carta " + carta.getNombre() + " a la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("La carta " + carta.getNombre() + "ya existe en su coleccion."));
    }
    return result;
  }

  modCarta(carta: Carta): boolean {
    const result = this.coleccionUsuario_.modCarta(carta);
    if(result){
      log(chalk.green("Se ha modificado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("No se ha encontrado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
    }
    return result;
  }

  quitarCarta(id: number): boolean {
    const result = this.coleccionUsuario_.quitarCarta(id);
    if(result){
      log(chalk.green("Se ha retirado la carta en la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("No se ha encontrado la carta en la coleccion de " + this.nombre_));
    }
    return result;
  }

  showCarta(id: number): boolean {
    const carta = this.coleccionUsuario_.getCarta(id);
    if(carta){
      carta.mostrarCarta();
    } else {
      log(chalk.red("No se ha encontrado la carta en la coleccion de " + this.nombre_));
      return false;
    }
    return true;
  }

  showColeccion(): boolean {
    log(chalk.green("Colecion de cartas MTG de " + this.nombre_));
    this.coleccionUsuario_.forEach((carta) => {
      log("======================================");
      carta.mostrarCarta();
    });
    return true;
  }
}