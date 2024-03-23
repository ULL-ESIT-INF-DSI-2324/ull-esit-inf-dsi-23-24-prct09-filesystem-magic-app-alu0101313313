import { Carta } from "./carta.js";
import { Coleccion } from "./coleccion.js";
import chalk from "chalk";

const log = console.log;

export class Coleccionista {
  private id_: number;
  private nombre_: string;
  protected coleccionUsuario_ = new Coleccion();

  constructor(
    id: number,
    nombre: string,
  ){
    this.id_ = id;
    this.nombre_ = nombre;
  }

  getUsuarioID(): number {
    return this.id_;
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
      result = this.coleccionUsuario_.addCartaRepetida(carta);
      log(chalk.green("Se ha añadido una copia de " + carta.getNombre() + "en la coleccion de " + this.nombre_ +
      ". Unidades actuales de la carta en la coleccion: " + carta.getCantidad()));
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

  quitarCartar(id: number, carta: Carta, repetida: boolean): boolean {
    if(repetida){
      const result = this.coleccionUsuario_.quitarCartaRepetida(carta);
      if(result){
        log(chalk.green("Se ha retirado una copia de la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
      } else {
        log(chalk.red("No se ha encontrado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
      }
    }
    const result = this.coleccionUsuario_.quitarCarta(id, carta);
    if(result){
      log(chalk.green("Se ha retirado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("No se ha encontrado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
    }
    return result;
  }
}