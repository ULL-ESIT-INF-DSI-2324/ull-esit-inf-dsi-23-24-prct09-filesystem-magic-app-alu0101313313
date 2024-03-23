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
          carta.valor_mercado_,
          carta.cantidad_
        ));
    }); 
  }

  setCarta(carta: Carta): boolean {
    const result = super.setCarta(carta);
    if(result){
      fs.writeFile("./data/" + this.getUsuarioNombre() + "/" + carta.getID() + ".json", JSON.stringify)
    }
  }

}