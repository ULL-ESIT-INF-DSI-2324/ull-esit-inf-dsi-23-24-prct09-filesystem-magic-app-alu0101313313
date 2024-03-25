
# Practica 9: Aplicacion para coleccionistas de Cartas Magic
<sup>José Javier Ramos Carballo, [alu0101313313@ull.edu.es](https://github.com/alu0101313313)  

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313?branch=main)
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/actions/workflows/node.js.yml)
[![Sonar-Cloud](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/actions/workflows/sonarcloud.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313)

## Introducción

En esta práctica nos encargamos de gestionar una aplicacion que almacena colecciones del juego de cartas coleccionables Magic The Gathering.

En esta practica, deberemos realizar las siguientes funciones:  

- Crear usuarios y sus respectivas colecciones, guardando las cartas de sus colecciones en ficheros.json
- Añadir, modificar, ver, listar y borrar las diferentes cartas de la colección.


## Implementación Conceptual

Empezamos por crear las clases mas elementales en nuestro programa: **Carta**, **Coleccion**, **Coleccionista**, **ColeccionistaJSON**.

En la clase **Carta**, nos dedicamos a dar formato a las cartas, definir todos sus elementos, y distinguir sus caracteristicas depende del tipo de carta que queramos crear.

En la clase **Coleccion**, tratamos las colecciones de cartas, aqui es donde implementamos las funciones comentadas anteriormente, sobre las cartas que hayamos definido en la clase anterior.  

En la clase **Coleccionista**, por un lado nos encargamos de registrar los usuarios de la aplicación, y por otro, nos encargamos proyectar las funciones que se realizan en la clase **Coleccion** sobre la interfaz del usuario, es decir que le vamos a otorgar feedback sobre las acciones que realize sobre el programa.  

En la clase **ColeccionistaJSON**, actuaremos de la misma manera que en la clase **Coleccion**, no obstante, a diferencia de la clase anterior que se focalizaba en el feedback aportado al usuario, trata de modificar un sistemas de directorios y ficheros.json que almacenaran las colecciones de los usuarios.

A parte de estas cuatro clase principales, incluimos el fichero **mainApp.ts** que funciona como programa principal sobre toda esta aplicacion, el cual es una pura implementacion de la herramienta _yargs_ la cual nos otorga añadir elementos a la linea de comandos de la ejecuccion del programa y manejarlos como posibles opciones y/o argumentos que nos permiten, en nuestro caso, realizar las funciones del programa desde linea de comandos.   

## Implementación sobre el código

### Carta.ts

El fichero **Carta.ts** contiene la clase Carta, en la cual se define, el formato de las diferentes cartas.  
La clase es la siguiente y contiene los siguientes atributos:  

- **id_**: identificador de la carta
- **nombre_**: nombre de la carta
- **tipo_**: tipo de carta en el juego
- **coste_**: coste de juego de la carta
- **colores_**: colores atribuidos a la carta
- **rareza_**: rareza de encontrar la carta 
- **texto_**: texto de la carta, puede contener habilidades o contexto
- **FyR_**: fuerza y resistencia de la carta, solo requeridos para cartas tipo _criatura_
- **lealtad_**: lealtad de la carta, solo requerido para cartas tipo _planeswalker_
- **valor_mercado_**: valor de la carta en el mercado real. 


El resto de la clase se divide en 2 tipos de metodos:

- getters: que devuelven los diferentes atributos sobre los que se compone una carta
- metodos para imprimir por pantalla: _darColor_ y _mostrarCarta_

Podrá consultar la informacion de la clase Carta en el siguiente [enlace](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/blob/main/src/carta.ts)


### Coleccion.ts

El fichero **Coleccion.ts** contiene la clase Coleccion, en la cual se define, el formato de las diferentes acciones que se pueden realizar sobre las carta de una coleccion.    
La clase es la siguiente y contiene el siguiente atributo:  

- **coleccion_**: almacena en un mapa, una dupla de number y Carta, donde el primero es la clave donde se almacena cada objeto en el mapa, y donde el segundo es el valor almacenado.

Aqui lo importante viene en los metodos implementados que nos permiten realizar las acciones comentadas anteriormente:

- **getCarta()**: obtiene una carta de la coleccion
- **setCarta()**: añade una carta a la coleccion
- **modCarta()**: modifica una carta de la coleccion
- **quitarCarta()**: elimina una carta de la coleccion
- **forEach()**: nos permite listar las cartas de la coleccion

Podrá consultar la informacion de la clase Coleccion en el siguiente [enlace](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/blob/main/src/coleccion.ts)

### Coleccionista.ts

El fichero **Coleccionista.ts** contiene la clase Coleccionista, en la cual se trata, la comunicacion entre las funciones realizadas en la clase anterior y el feedback que le aportamos al usuarios que utiliza la aplicacion.   
La clase es la siguiente y contiene los siguientes atributos:  

- **nombre_**: indica el nombre del usuario del coleccionista
- **coleccionUsuario_**: es la coleccion del coleccionista

Como en la clase anterior, los metodos implementados nos permiten realizar las acciones comentadas anteriormente:

-**getUsuarioNombre()**: devuelve el nombre del usuario
- **setCarta()**: añade una carta a la coleccion del usuario
- **modCarta()**: modifica una carta de la coleccion del usuario
- **quitarCarta()**: elimina una carta de la coleccion del usuario
- **showColeccion()**: nos permite listar las cartas de la coleccion del usuario
- **showCarta()**: nos permite mostrar una carta de la coleccion del usuario

Podrá consultar la informacion de la clase Coleccionista en el siguiente [enlace](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/blob/main/src/coleccionista.ts)

### ColeccionistaJSON.ts

El fichero **ColeccionistaJSON.ts** contiene la clase ColeccionistaJSON, en la cual se trabaja para que los usuarios y sus respectivas colecciones sean almacenadas en ficheros.json      
La clase dado a que implementa la clase **Coleccionista**, sus metodos son similares de manera funcional que la clase anterior, ademas de que su mayor impacto en el proyecto se realiza en el constructor de la clase.

Podrá consultar la informacion de la clase ColeccionistaJSON en el siguiente [enlace](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/blob/main/src/coleccionistaJSON.ts)  

### MainApp.ts

Este fichero finalmente se encarga de porporcionar la implementacion de la herramienta _yargs_ que nos permite recoger en linea de comandos, las diferentes opciones que se añaden en el comando de la ejecuccion del programa.  
Esta configuracion se aplica para las funciones descritas anteriormente, ademas de que se comunican los parametros pasados con la clase **ColeccionistaJSON** que los gestiona en directorios y ficheros.json.  

Podrá consultar la informacion de la clase ColeccionistaJSON en el siguiente [enlace](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-alu0101313313/blob/main/src/mainApp.ts)  

## Conclusiones

Hemos realizado de forma completa este ejercicio, y aqui señalamos los diferentes conceptos que se han tocado:

- Utilizamos las herramientas de _chalk_ y _yargs_ las cuales nos aventajan en obtener resultados por un lado mas coloridos, y por otro obtenidos por linea de comandos en la ejecuccion del programa.  

- Para la creacion de ficheros de manera sincrona, hemos requerido estudiar **_Node.js_** para implementar las funciones necesarias que nos han permitido generar un esquema de directorios y ficheros para cada usuario y su coleccion respectivamente.  

## Bibliografía

Para este ultimo punto, he recopilado algunas de las paginas que me han sido utiles para los ejercicos de la _práctica_:

1. **Enunciado de la practica:** [https://ull-esit-inf-dsi-2324.github.io/prct09-fiilesystem-magic-app/](https://ull-esit-inf-dsi-2324.github.io/prct09-fiilesystem-magic-app/)
2. **Yargs:** [https://www.npmjs.com/package/yargs](https://www.npmjs.com/package/yargs)
3. **Chalk:** [https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)
4. **Node.js** [https://nodejs.org/docs/latest/api/fs.html](https://nodejs.org/docs/latest/api/fs.html)
