import { Carta } from "./carta.js";

export class Coleccionista {
  private id_: number;
  private nombre_: string;
  private coleccion_: Carta[];

  constructor(
    id: number,
    nombre: string,
    coleccion: Carta[]
  ){
    this.id_ = id;
    this.nombre_ = nombre;
    this.coleccion_ = coleccion; 
  }

  getID(): number {
    return this.id_;
  }

  getName(): string {
    return this.nombre_;
  }

  getColection(): Carta[]{
    return this.coleccion_;
  }


}