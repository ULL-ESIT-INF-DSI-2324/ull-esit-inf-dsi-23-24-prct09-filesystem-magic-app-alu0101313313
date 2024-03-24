import { Carta } from "./carta.js";
import { Coleccionista } from "./coleccionista.js";
import fs from "fs";

/**
 * @class ColeccionistaJSON es una clase que hereda la clase Coleccionista
 * y se encarga de las operaciones de lectura, escritura y creacion de ficheros.json
 * que almacenan las colecciones de cartas Magic de los usuarios del programa
 */
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

  /**
   * @method setCarta es un metodo que añade el fichero.json de la carta en el directorio de la coleccion de un usuario
   * @param carta la carta sobre la que se va a crear el fichero.json
   * @returns true si la operacion se ha realizado correctamente, 
   * false si no se ha podido añadir la carta a la coleccion del usuario
   */
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

  /**
   * @method quitarCarta es un metodo que elimina el fichero.json de la carta en el directorio de la coleccion de un usuario
   * @param id id de la carta sobre la que se va a eliminar el fichero.json
   * @returns true si la operacion se ha realizado correctamente, 
   * false si no se ha podido eliminar la carta de la coleccion del usuario
   */
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

  /**
   * @method modCarta es un metodo que modifica el fichero.json de la carta en el directorio de la coleccion de un usuario
   * @param carta la carta sobre la que se va a modificar el fichero.json
   * @returns true si la operacion se ha realizado correctamente, 
   * false si no se ha podido modificar la carta de la coleccion del usuario
   */
  modCarta(carta: Carta): boolean {
    const result = super.modCarta(carta);
    const ruta = "./data/" + this.getUsuarioNombre() + "/" + carta.getID() + ".json";
    if(result){
      fs.writeFileSync(ruta, JSON.stringify(carta));
    }
    return result;
  }

  /**
   * @method showCarta es un metodo que muestra el fichero.json de la carta de la coleccion de un usuario
   * @param id id de la carta del fichero.json que se va a mostrar
   * @returns true si la operacion se ha realizado correctamente
   */
  showCarta(id: number): boolean {
    super.showCarta(id);
    return true;
  }

  /**
   * @method showColeccion es un metodo que muestra la coleccion de un usuario
   * @returns true si la operacion se ha realizado correctamente
   */
  showColeccion(): boolean {
    super.showColeccion();
    return true;
  }
}
