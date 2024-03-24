import { Carta } from "./carta.js";
import { Coleccion } from "./coleccion.js";
import chalk from "chalk";

const log = console.log;

/**
 * @class Coleccionista: define la coleccion personal de cartas Magic de un usuario
 * @param nombre_ indica el nombre de un usuario
 * @param coleccionUsuario_ indica la coleccion de un usuario
 */
export class Coleccionista {
  private nombre_: string;
  protected coleccionUsuario_ = new Coleccion();

  constructor(
    nombre: string,
  ){
    this.nombre_ = nombre;
  }

  /**
   * @method getUsuarioNombre obtiene el nombre de usuario del coleccionista
   * @returns el nombre de usuario del coleccionista
   */
  getUsuarioNombre(): string {
    return this.nombre_;
  }

  /**
   * @method setCarta añade una carta a la coleccion del usuario
   * @returns true si se ha añadido la carta correctamente, false si la carta ya existia en la coleccion
   */
  setCarta(carta: Carta): boolean {
    let result = this.coleccionUsuario_.setCarta(carta);
    if(result){
      log(chalk.green("Se ha añadido la carta " + carta.getNombre() + " a la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("La carta " + carta.getNombre() + " ya existe en su coleccion."));
    }
    return result;
  }

  /**
   * @method modCarta modifica una carta de la coleccion del usuario
   * @returns true si se ha modificado la carta correctamente, false si la carta no existia en la coleccion
   */  
  modCarta(carta: Carta): boolean {
    const result = this.coleccionUsuario_.modCarta(carta);
    if(result){
      log(chalk.green("Se ha modificado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("No se ha encontrado la carta " + carta.getNombre() + " en la coleccion de " + this.nombre_));
    }
    return result;
  }

  /**
   * @method quitarCarta elimina una carta de la coleccion del usuario
   * @returns true si se ha eliminado la carta correctamente, false si la carta no existia en la coleccion
   */
  quitarCarta(id: number): boolean {
    const result = this.coleccionUsuario_.quitarCarta(id);
    if(result){
      log(chalk.green("Se ha retirado la carta en la coleccion de " + this.nombre_));
    } else {
      log(chalk.red("No se ha encontrado la carta en la coleccion de " + this.nombre_));
    }
    return result;
  }

  /**
   * @method showCarta muestra una carta de la coleccion del usuario
   * @returns true si se ha mostrado la carta correctamente, false si la carta no existia en la coleccion
   */
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

  /**
   * @method showColeccion muestra la coleccion del usuario
   * @returns true si se ha mostrado la coleccion correctamente
   */
  showColeccion(): boolean {
    log(chalk.green("Colecion de cartas MTG de " + this.nombre_));
    this.coleccionUsuario_.forEach((carta) => {
      log("======================================");
      carta.mostrarCarta();
    });
    return true;
  }
}