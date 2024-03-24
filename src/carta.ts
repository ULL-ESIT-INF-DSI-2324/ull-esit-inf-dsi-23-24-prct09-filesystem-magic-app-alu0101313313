import chalk from "chalk";
import { log } from "console";

export type Coste = [Color[], number?];
export type FuerzaYResistencia = [number, number];
export type Rareza = 'Comun' | 'Infrecuente' | 'Rara' | 'Rara Mitica';

export enum Tipo {
  tierra = 'Tierra',
  conjuro = 'Conjuro',
  instantaneo = 'Instantaneo',
  criatura = 'Criatura',
  artefacto = 'Artefacto',
  encantamiento = 'Encantamiento',
  planeswalker = 'Planeswalker'
}

export enum Color {
  white = "blanco",
  black = "negro",
  red = "rojo",
  green = "verde",
  blue = "azul",
  nocolor = "incoloro",
}

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

  getID(): number {
    return this.id_;
  }

  getNombre(): string {
    return this.nombre_;
  }

  getTipos(): Tipo {
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

  getTexto(): string{
    return this.texto_;
  }

  getFyR(): FuerzaYResistencia | undefined {
    if(this.tipo_ == 'Criatura'){
      return this.FyR_;
    } else {
      console.log("La carta introducida no tiene fuerza ni resistencia dado a que no es una criatura");
      return undefined;
    }
  }

  getLealtad(): number | undefined {
    if(this.tipo_ == 'Planeswalker'){
      return this.lealtad_;
    } else {
      console.log("La carta introducida no tiene contadores de lealtad dado a que no es un planeswalker");
      return undefined;
    }
  }

  getValorMercado():number{
    return this.valor_mercado_;
  }

  darColor(colores: Color[]): void {
    colores.forEach((color) => {
      switch(color){
        case "blanco":
          chalk.white(color);
          break;
        case "negro":
          chalk.black(color);
          break;
        case "azul":
          chalk.blue(color);
          break;
        case "rojo":
          chalk.red(color);
          break;
        case "verde":
          chalk.green(color);
          break;
             
      }
    });
  }

  mostrarCarta() {

    switch(this.tipo_){

      case 'Tierra':
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));
        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Conjuro":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: " + this.texto_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Instantaneo":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: " + this.texto_));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;

      case "Criatura":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

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

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: " + this.texto_));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;
    
      case "Encantamiento":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: " + this.texto_));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;
    
      case "Planeswalker":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: " + this.texto_));

        log(chalk.green("Lealtad: " + this.lealtad_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
      break;
    
    }    
    return true;
  }

}
