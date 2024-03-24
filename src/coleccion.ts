import { Carta } from "./carta.js";

export class Coleccion {

  protected coleccion_: Map<number, Carta>;
  
  constructor(){
    this.coleccion_ = new Map<number, Carta>(); 
  }

  getCarta(id: number): Carta | undefined {
    return this.coleccion_.get(id)
  }

  setCarta(carta: Carta): boolean {
    if(this.coleccion_.has(carta.getID())){
      return false;
    } else {
      this.coleccion_.set(carta.getID(), carta);
      return true;
    }
  }

  modCarta(carta: Carta): boolean {
    if(this.coleccion_.has(carta.getID())){
      this.coleccion_.set(carta.getID(), carta);
      return true;
    } else {
      return false;
    }
  }

  quitarCarta(id: number): boolean {
    return this.coleccion_.delete(id);
  }


  forEach(callback: (carta: Carta) => void): void {
    this.coleccion_.forEach((carta) => {
      callback(carta);
    });
  }

}