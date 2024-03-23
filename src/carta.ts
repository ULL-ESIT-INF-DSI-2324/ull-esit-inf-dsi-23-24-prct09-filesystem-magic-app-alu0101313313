import chalk from "chalk";
import { log } from "console";

type Coste = [Color[], number?];
type Texto = [Accion[], string[]?];
type Subtipo = 'Basica' | undefined;
type FuerzaYResistencia = [number, number];
type Rareza = 'Comun' | 'Infrecuente' | 'Rara' | 'Rara Mitica';
type Categoria = [Tipo, Subtipo?];
type Accion = [string, Coste?];

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

export class Carta {
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

    switch(this.tipo_[0]){
      case 'Tierra':
        if(this.tipo_[1] == 'Basica'){

          log(chalk.green("ID: " + this.id_));
          log(chalk.green("Nombre: " + this.nombre_));
          log(chalk.green("Tipo: " + this.tipo_));
          log(chalk.green("Colores: "));
          this.darColor(this.colores_);
          log(chalk.green("Rareza: " + this.rareza_));
          log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
          //la parte del lore de la carta
          log(chalk.green("Historia: " + this.texto_[1]));

        } else {

          log(chalk.green("ID: " + this.id_));
          log(chalk.green("Nombre: " + this.nombre_));
          log(chalk.green("Tipo: " + this.tipo_));
          log(chalk.green("Colores: "));
          this.darColor(this.colores_);
          log(chalk.green("Rareza: " + this.rareza_));
          log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
          log(chalk.green("Texto: "));
          // texto de la carta
          let acciones = this.texto_[0];
          acciones.forEach((accion) => {
            //todo esto para los colores
            if(accion[1] != undefined){
              let coste = accion[1] as Coste;
              log(chalk.green(coste[1])); 
              this.darColor(coste[0]);
              //esto para el texto lol
              log(chalk.green(accion[0]));   
            } else {
              //esto para el texto lol
              log(chalk.green(accion[0]));  
            }
          });
          //la parte del lore de la carta
          log(chalk.green("Historia: " + this.texto_[1]));
        }
      break;

      case "Conjuro":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: "));
        // texto de la carta
        let accionesConjuro = this.texto_[0];
        accionesConjuro.forEach((accion) => {
          //todo esto para los colores
          if(accion[1] != undefined){
            let coste = accion[1] as Coste;
            log(chalk.green(coste[1])); 
            this.darColor(coste[0]);
            //esto para el texto lol
            log(chalk.green(accion[0]));   
          } else {
          //esto para el texto lol
          log(chalk.green(accion[0]));  
          }
        });
        //la parte del lore de la carta
        log(chalk.green(this.texto_[1]));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
        log(chalk.green("Cantidad: " + this.cantidad_));
      break;

      case "Instantaneo":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: "));
        // texto de la carta
        let accionesInstantaneo = this.texto_[0];
        accionesInstantaneo.forEach((accion) => {
          //todo esto para los colores
          if(accion[1] != undefined){
            let coste = accion[1] as Coste;
            log(chalk.green(coste[1])); 
            this.darColor(coste[0]);
            //esto para el texto lol
            log(chalk.green(accion[0]));   
          } else {
          //esto para el texto lol
          log(chalk.green(accion[0]));  
          }
        });
        //la parte del lore de la carta
        log(chalk.green(this.texto_[1]));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
        log(chalk.green("Cantidad: " + this.cantidad_));
      break;

      case "Criatura":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: "));
        // texto de la carta
        let accionesCriatura = this.texto_[0];
        accionesCriatura.forEach((accion) => {
          //todo esto para los colores
          if(accion[1] != undefined){
            let coste = accion[1] as Coste;
            log(chalk.green(coste[1])); 
            this.darColor(coste[0]);
            //esto para el texto lol
            log(chalk.green(accion[0]));   
          } else {
          //esto para el texto lol
          log(chalk.green(accion[0]));  
          }
        });
        //la parte del lore de la carta
        log(chalk.green(this.texto_[1]));

        log(chalk.green("Fuerza: " + this.FyR_[0]));
        log(chalk.green("Resistencia: " + this.FyR_[1]));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
        log(chalk.green("Cantidad: " + this.cantidad_));
      break;

      case "Artefacto":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: "));
        // texto de la carta
        let accionesArtefacto = this.texto_[0];
        accionesArtefacto.forEach((accion) => {
          //todo esto para los colores
          if(accion[1] != undefined){
            let coste = accion[1] as Coste;
            log(chalk.green(coste[1])); 
            this.darColor(coste[0]);
            //esto para el texto lol
            log(chalk.green(accion[0]));   
          } else {
          //esto para el texto lol
          log(chalk.green(accion[0]));  
          }
        });
        //la parte del lore de la carta
        log(chalk.green(this.texto_[1]));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
        log(chalk.green("Cantidad: " + this.cantidad_));
      break;
    
      case "Encantamiento":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: "));
        // texto de la carta
        let accionesEncantamiento = this.texto_[0];
        accionesEncantamiento.forEach((accion) => {
          //todo esto para los colores
          if(accion[1] != undefined){
            let coste = accion[1] as Coste;
            log(chalk.green(coste[1])); 
            this.darColor(coste[0]);
            //esto para el texto lol
            log(chalk.green(accion[0]));   
          } else {
          //esto para el texto lol
          log(chalk.green(accion[0]));  
          }
        });
        //la parte del lore de la carta
        log(chalk.green(this.texto_[1]));

        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
        log(chalk.green("Cantidad: " + this.cantidad_));
      break;
    
      case "Planeswalker":
        log(chalk.green("ID: " + this.id_));
        log(chalk.green("Nombre: " + this.nombre_));
        log(chalk.green("Tipo: " + this.tipo_));

        log(chalk.green("Colores: "));
        this.darColor(this.colores_);
        log(chalk.green("Coste: " + this.coste_[1])); 
        this.darColor(this.coste_[0]);

        log(chalk.green("Texto: "));
        // texto de la carta
        let accionesPlaneswalker = this.texto_[0];
        accionesPlaneswalker.forEach((accion) => {
          //todo esto para los colores
          if(accion[1] != undefined){
            let coste = accion[1] as Coste;
            log(chalk.green(coste[1])); 
            this.darColor(coste[0]);
            //esto para el texto lol
            log(chalk.green(accion[0]));   
          } else {
          //esto para el texto lol
          log(chalk.green(accion[0]));  
          }
        });
        //la parte del lore de la carta
        log(chalk.green(this.texto_[1]));

        log(chalk.green("Lealtad: " + this.lealtad_));
        log(chalk.green("Rareza: " + this.rareza_));
        log(chalk.green("Valor mercado: " + this.valor_mercado_  + "€"));
        log(chalk.green("Cantidad: " + this.cantidad_));
      break;
    
    }    
    return true;
  }

}
