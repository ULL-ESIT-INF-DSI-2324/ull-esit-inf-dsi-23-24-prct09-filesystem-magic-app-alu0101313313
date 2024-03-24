import chalk from "chalk";
import { log } from "console";

/**
 * @type Coste: Señala el coste incoloro + coste de color de una carta
 */
export type Coste = [Color[], number?];

/**
 * @type FuerzaYResistencia: es una dupla de numeros que señalan respectivamente
 * la fuerza y la resistencia de una criatura 
 */
export type FuerzaYResistencia = [number, number];

/**
 * @type Rareza: indica la frecuencia de obtener la carta.
 */
export type Rareza = 'Comun' | 'Infrecuente' | 'Rara' | 'Rara Mitica';

/**
 * @enum Tipo: engloba los tipos principales de hechizos de Magic The Gathering
 */
export enum Tipo {
  tierra = 'Tierra',
  conjuro = 'Conjuro',
  instantaneo = 'Instantaneo',
  criatura = 'Criatura',
  artefacto = 'Artefacto',
  encantamiento = 'Encantamiento',
  planeswalker = 'Planeswalker'
}

/**
 * @enum Color: aglomera, junto al incoloro, los 5 principales colores de Magic The Gathering
 */
export enum Color {
  white = "blanco",
  black = "negro",
  red = "rojo",
  green = "verde",
  blue = "azul",
  nocolor = "incoloro",
}

/**
 * @class Carta: es una clase que genera las cartas de la coleccion
 * @param id_: indica el identificador de la carta dentro de la coleccion
 * @param nombre_: indica el nombre de la carta
 * @param tipo_: indica el tipo de la carta
 * @param coste_: indica el coste de juego de la carta
 * @param colores_: indica los colores de la carta
 * @param rareza_: indica la rareza de la carta
 * @param texto_: indica el texto de la carta, puede contener habilidades o contexto
 * @param FyR_: indica la fuerza y la resistencia de una criatura
 * @param leatad_: indica los contadores de lealtad de un planeswalker
 * @param valor_mercado_: indica el coste monetario de la carta 
*/
export class Carta {
  private id_: number;
  private nombre_: string;
  private tipo_: Tipo;
  private coste_: Coste;
  private colores_: Color[];
  private rareza_ : Rareza;
  private texto_: string;
  private FyR_: FuerzaYResistencia;
  private lealtad_: number;
  private valor_mercado_ : number;
  
  constructor(
    ID: number,
    nombre: string,
    tipo: Tipo,
    coste: Coste,
    colores: Color[],
    rareza: Rareza,
    texto: string,
    FyR: FuerzaYResistencia,
    lealtad: number,
    valor_mercado: number,
  ){

    this.id_ = ID;
    this.tipo_ = tipo;

    switch (tipo){

      case 'Tierra':
        this.nombre_ = nombre;
        this.colores_= colores;
        this.rareza_ = rareza;
        this.valor_mercado_ = valor_mercado;  
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
        this.coste_ = coste;
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

  /**
   * @method getID es un metodo que devuelve el id de una carta
   * @returns el id de una carta
   */
  getID(): number {
    return this.id_;
  }

  /**
   * @method getNombre es un metodo que devuelve el nombre de una carta
   * @returns el nombre de una carta
   */
  getNombre(): string {
    return this.nombre_;
  }

  /**
   * @method getTipos es un metodo que devuelve el tipo de una carta
   * @returns el tipo de una carta
   */
  getTipos(): Tipo {
    return this.tipo_;
  }

  /**
   * @method getCoste es un metodo que devuelve el coste de una carta
   * @returns el coste de una carta
   */
  getCoste(): Coste {
    return this.coste_;
  }

  /**
   * @method getColores es un metodo que devuelve los colores de una carta
   * @returns los colores de una carta
   */
  getColores(): Color[] {
    return this.colores_;
  }

  /**
   * @method getRareza es un metodo que devuelve la rareza de una carta
   * @returns la rareza de una carta
   */
  getRareza(): Rareza {
    return this.rareza_;
  }

  /**
   * @method getTexto es un metodo que devuelve el texto de una carta
   * @returns el texto de una carta
   */
  getTexto(): string{
    return this.texto_;
  }

  /**
   * @method getFyR es un metodo que devuelve la fuerza y la resistencia de una criatura
   * @returns la fuerza y la resistencia de una criatura
   */
  getFyR(): FuerzaYResistencia | undefined {
    if(this.tipo_ == 'Criatura'){
      return this.FyR_;
    } else {
      console.log("La carta introducida no tiene fuerza ni resistencia dado a que no es una criatura");
      return undefined;
    }
  }

  /**
   * @method getLealtad es un metodo que devuelve los contadores de lealtad de un planeswalker
   * @returns los contadores de lealtad de un planeswalker
   */
  getLealtad(): number | undefined {
    if(this.tipo_ == 'Planeswalker'){
      return this.lealtad_;
    } else {
      console.log("La carta introducida no tiene contadores de lealtad dado a que no es un planeswalker");
      return undefined;
    }
  }

  /**
   * @method getValorMercado es un metodo que devuelve el valor de mercado de una carta
   * @returns el valor de mercado de una carta
   */
  getValorMercado():number{
    return this.valor_mercado_;
  }

  /**
   * @method darColor es un metodo que imprime el color de una carta con su respectivo color
   */
  darColor(colores: Color[]): void {
    colores.forEach((color) => {
      switch(color){
        case "blanco":
          const white = log(chalk.white("blanco"));
          return white;
        case "negro":
          const black = log(chalk.black("negro"));
          return black;
        case "azul":
          const blue = log(chalk.blue("azul"));
          return blue;
        case "rojo":
          const red = log(chalk.red("rojo"));
          return red;
        case "verde":
          const green = log(chalk.green("verde"));
          return green;
      }
    });
  }

  /**
   * @method mostrarCarta es un metodo imprime las cartas
   * @returns true si se ha impreso correctamente
   */
  mostrarCarta() {

    switch(this.tipo_){

      case 'Tierra':
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Conjuro":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Coste: " + this.coste_[1] + " ") + this.darColor(this.coste_[0]));
        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Instantaneo":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Coste: " + this.coste_[1] + " ") + this.darColor(this.coste_[0]));
        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Criatura":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Coste: " + this.coste_[1] + " ") + this.darColor(this.coste_[0]));
        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Fuerza: " + this.FyR_[0]));
        log(chalk.green("Resistencia: " + this.FyR_[1]));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Artefacto":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Coste: " + this.coste_[1] + " ") + this.darColor(this.coste_[0]));
        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;
    
      case "Encantamiento":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Coste: " + this.coste_[1] + " ") + this.darColor(this.coste_[0]));
        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;
    
      case "Planeswalker":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: ") + this.darColor(this.colores_));
        log(chalk.green("Coste: " + this.coste_[1] + " ") + this.darColor(this.coste_[0]));
        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Lealtad: " + this.lealtad_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;
    
    }    
    return true;
  }
}
