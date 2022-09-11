// Crear interfaces

  interface Automovil {
    encender: boolean,
    velocidadMaxima: number,
    acelear():void
  }

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Automovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Automovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

  interface Villano {
    reir?: boolean,
    comer?: boolean,
    llorar?: boolean
  }

const guason: Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

  interface PoblacionFunction {
    (ciudadanos: string[]):number
  }

const ciudadGotica: PoblacionFunction = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface DatosPersona {
  nombre: string,
  edad: number,
  sexo: number,
  estadoCivil: string,
  imprimirBio():void
}

class Persona implements DatosPersona {

  constructor(
    public nombre: string,
    public edad: number,
    public sexo: number,
    public estadoCivil: string,
  ){}

    imprimirBio(): void {
      
    }

}