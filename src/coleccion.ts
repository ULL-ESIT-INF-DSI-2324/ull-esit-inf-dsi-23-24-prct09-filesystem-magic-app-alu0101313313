import { Carta } from "./carta.js";

/**
 * @class Coleccion: es una clase que define una coleccion de cartas Magic
 * @param coleccion_ es un mapa que registra una dupla de un id y una carta Magic
 */
export class Coleccion {

  protected coleccion_: Map<number, Carta>;
  
  constructor(){
    this.coleccion_ = new Map<number, Carta>(); 
  }

  /**
   * @method getCarta es un metodo que nos devuelve una carta de la coleccion
   * @returns la carta buscada en la coleccion
   */
  getCarta(id: number): Carta | undefined {
    return this.coleccion_.get(id)
  }

  /**
   * @method setCarta es un metodo que añade una carta a la coleccion
   * @returns true si la carta ha sido añadida correctamente, false si ya la carta existia en la coleccion
   */
  setCarta(carta: Carta): boolean {
    if(this.coleccion_.has(carta.getID())){
      return false;
    } else {
      this.coleccion_.set(carta.getID(), carta);
      return true;
    }
  }

  /**
   * @method modCarta es un metodo que modifica una carta de la coleccion
   * @returns true si la carta ha sido modificada correctamente, false si la carta no esta en la coleccion
   */
  modCarta(carta: Carta): boolean {
    if(this.coleccion_.has(carta.getID())){
      this.coleccion_.set(carta.getID(), carta);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method quitarCarta es un metodo que retira una carta de la coleccion
   * @returns true si la carta ha sido retirada correctamente, false si la carta no esta en la coleccion
   */
  quitarCarta(id: number): boolean {
    return this.coleccion_.delete(id);
  }

  /**
   * @method forEach es un metodo que recorre las cartas de la coleccion   
  */
  forEach(callback: (carta: Carta) => void): void {
    this.coleccion_.forEach((carta) => {
      callback(carta);
    });
  }

}