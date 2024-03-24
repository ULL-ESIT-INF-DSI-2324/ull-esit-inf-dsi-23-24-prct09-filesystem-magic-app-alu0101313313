import { Carta } from "./carta.js";
import { Coleccionista } from "./coleccionista.js";
import fs from "fs";

export class ColeccionistaJSON extends Coleccionista {
  constructor(nombre: string){
    super(nombre);
    if(!fs.existsSync("./data/" + nombre)){
      console.log("Creando directorio: " + nombre);
      fs.mkdirSync("./data/" + nombre);
    }
    const ficheros = fs.readdirSync("./data/" + nombre);
    ficheros.forEach((fichero) => {
      const datos = fs.readFileSync("./data/" + nombre + "/" + fichero);
      const carta = JSON.parse(datos.toString());
      this.coleccionUsuario_.setCarta(
        new Carta(
          carta.id_,
          carta.nombre_,
          carta.tipo_,
          carta.coste_,
          carta.colores_,
          carta.rareza_,
          carta.texto_,
          carta.FyR_,
          carta.lealtad_,
          carta.valor_mercado_
        ));
    }); 
  }

  setCarta(carta: Carta): boolean {
    const result = super.setCarta(carta);
    const ruta = "./data/" + this.getUsuarioNombre() + "/" + carta.getID() + ".json";
    if(result){
      fs.writeFile(ruta, JSON.stringify(carta), (err) => {
        if(err){
          console.log(err);
        }
      });
    }
    return result;
  }

  quitarCarta(id: number): boolean {
    let result;
    const ruta = "./data/" + this.getUsuarioNombre() + "/" + id + ".json";
    result = super.quitarCarta(id);
    if(result){
      fs.unlink(ruta, (err) => {
        if(err){
          console.log(err);
        }
      });
    }
    return result;
  }

  modCarta(carta: Carta): boolean {
    const result = super.modCarta(carta);
    const ruta = "./data/" + this.getUsuarioNombre() + "/" + carta.getID() + ".json";
    if(result){
      fs.writeFileSync(ruta, JSON.stringify(carta));
    }
    return result;
  }

  showCarta(id: number): boolean {
    super.showCarta(id);
    return true;
  }

  showColeccion(): boolean {
    super.showColeccion();
    return true;
  }

}
