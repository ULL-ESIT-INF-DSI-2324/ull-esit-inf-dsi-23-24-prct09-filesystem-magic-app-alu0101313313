import chalk from "chalk";
import { log } from "console";

type Coste = [number, Color[]];
type Texto = [Accion[], string[]?];
type Subtipo = 'Basica' | undefined;
type FuerzaYResistencia = [number, number];
type Rareza = 'Comun' | 'Infrecuente' | 'Rara' | 'Rara Mitica';
type Categoria = [Tipo, Subtipo?];
type Accion = [Coste[], string];

enum Tipo {
  tierra = 'Tierra',
  conjuro = 'Conjuro',
  instantaneo = 'Instantaneo',
  criatura = 'Criatura',
  artefacto = 'Artefacto',
  encantamiento = 'Encantamiento',
  planeswalker = 'Planeswalker'
}

enum Color {
  white = "blanco",
  black = "negro",
  red = "rojo",
  green = "verde",
  blue = "azul"
}

export abstract class Carta {
  private id_: number;
  private nombre_: string;
  private tipo_: Categoria;
  private coste_: Coste;
  private colores_: Color[];
  private rareza_ : Rareza;
  private texto_: Texto;
  private FyR_: FuerzaYResistencia;
  private lealtad_: number;
  private valor_mercado_ : number;
  private cantidad_: number;
  
  constructor(
    ID: number,
    nombre: string,
    tipo: Categoria,
    coste: Coste,
    colores: Color[],
    rareza: Rareza,
    texto: Texto,
    FyR: FuerzaYResistencia,
    lealtad: number,
    valor_mercado: number,
    cantidad: number
  ){

    this.id_ = ID;
    this.tipo_ = tipo;
    this.cantidad_ = cantidad;

    switch (tipo[0]){

      case 'Tierra':
        if(tipo[1] == 'Basica'){
          this.nombre_ = nombre;
          this.colores_[0] = colores[0];
          this.rareza_ = rareza;
          this.valor_mercado_ = valor_mercado;  
        } else {
          this.nombre_ = nombre;
          this.colores_ = colores;
          this.rareza_ = rareza;
          this.texto_ = texto;
          this.valor_mercado_ = valor_mercado;
        }
      break;

      case 'Conjuro':
        this.nombre_ = nombre;
        this.coste_ = coste;
        this.colores_ = colores;
        this.rareza_ = rareza;
        this.texto_ = texto;
        this.valor_mercado_ = valor_mercado;
      break;

      case 'Instantaneo':
        this.nombre_ = nombre;
        this.coste_ = coste;
        this.colores_ = colores;
        this.rareza_ = rareza;
        this.texto_ = texto;
        this.valor_mercado_ = valor_mercado;
      break;

      case 'Criatura':
        this.nombre_ = nombre;
        this.coste_ = coste;
        this.colores_ = colores;
        this.rareza_ = rareza;
        this.texto_ = texto;
        this.FyR_ = FyR;
        this.valor_mercado_ = valor_mercado;
      break;

      case 'Artefacto':
        this.nombre_ = nombre;
        this.coste_[0] = coste[0];
        this.colores_ = colores;
        this.rareza_ = rareza;
        this.texto_ = texto;
        this.valor_mercado_ = valor_mercado;
      break;  

      case 'Encantamiento':
        this.nombre_ = nombre;
        this.coste_ = coste;
        this.colores_ = colores;
        this.rareza_ = rareza;
        this.texto_ = texto;
        this.valor_mercado_ = valor_mercado;
      break;
      
      case 'Planeswalker':
        this.nombre_ = nombre;
        this.coste_ = coste;
        this.colores_ = colores;
        this.rareza_ = rareza;
        this.texto_ = texto;
        this.lealtad_ = lealtad;
        this.valor_mercado_ = valor_mercado;
      break;

      default:
        console.log("Se ha producido un error al crear el objeto");
      break;
    }
  }

  getID(): number {
    return this.id_;
  }

  getNombre(): string {
    return this.nombre_;
  }

  getTipos(): Categoria {
    return this.tipo_;
  }

  getCoste(): Coste {
    return this.coste_;
  }

  getColores(): Color[] {
    return this.colores_;
  }

  getRareza(): Rareza {
    return this.rareza_;
  }

  getTexto(): Texto{
    return this.texto_;
  }

  getFyR(): FuerzaYResistencia | undefined {
    if(this.tipo_[0] == 'Criatura'){
      return this.FyR_;
    } else {
      console.log("La carta introducida no tiene fuerza ni resistencia dado a que no es una criatura");
      return undefined;
    }
  }

  getLealtad(): number | undefined {
    if(this.tipo_[0] == 'Planeswalker'){
      return this.lealtad_;
    } else {
      console.log("La carta introducida no tiene contadores de lealtad dado a que no es un planeswalker");
      return undefined;
    }
  }

  getValorMercado():number{
    return this.valor_mercado_;
  }

  getCantidad():number{
    return this.cantidad_;
  }

  addCantidad(): void {
    this.cantidad_++;
  }

  quitarCantidad(): void {
    this.cantidad_--;
  }

  mostrarCarta(): void {
    
  }

}
