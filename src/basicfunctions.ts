//import inquirer from 'inquirer'

/**
 * la suma de dos numeros
 * @param num1 primer operando
 * @param num2 segundo operando
 * @returns la suma de ambos operandos
 */
 export function add(num1: number, num2: number): number {
   return num1 + num2;
}

console.log(add(1,2));

/*
const prompt = await inquierer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the number to guess?'
  },
  {
    type: 'list',
    name: 'color',
    message: 'Whats is your favorite color?',
    choices: ['Red', 'Green', 'Blue']
  }
]);

//console.log(`Hello, ${prompt.name}!, your favorite color is ${prompt.color}`)

*/
/* 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?',
    },
    {
      type: 'password',
      name: 'password',
      message: 'Enter your password:',
    },
    {
      type: 'list',
      name: 'color',
      message: 'What is your favorite color?',
      choices: ['Red', 'Blue', 'Green'],
    },
  ])
  .then((answers) => {
    console.log('Username:', answers.username);
    console.log('Password:', answers.password);
    console.log('Favorite Color:', answers.color);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt couldn\'t be rendered in the current environment');
    } else {
      console.log('Something else went wrong');
    }
  });
*/
/*
import inquirer from 'inquirer';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

// Definir el adapter de LowDB para guardar los datos en un archivo JSON
const adapter = new FileSync('db.json');
const db = low(adapter);

// Definir el esquema de datos
interface UserData {
    name: string;
    age: number;
}

// Iniciar la interacción con el usuario
async function getUserData(): Promise<UserData> {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Ingrese su nombre:'
        },
        {
            type: 'number',
            name: 'age',
            message: 'Ingrese su edad:'
        }
    ]);

    return answers as UserData;
}

// Guardar los datos en la base de datos
function saveUserData(userData: UserData) {  
  db.defaults({ users: [] }).write(); // Establecer la estructura de la base de datos si no existe
  db.get('users').push(userData).write(); // Agregar el nuevo usuario a la base de datos
}

const userData = await getUserData();
saveUserData(userData);
console.log('¡Datos guardados correctamente!');
*/
