(()=>{

  const addNumbers = (a: number, b: number): number => a + b;
  
  const greet = (name: string): string => `Hola ${name}`;
  
  const saveTheWorld = (): string => `El mundo esta salvado`;

  // let myFunction; //Sin tipado
  // myFunction = 10;
  // console.log( myFunction )
  
  // let myFunction: (a: number, b: number) => number; // Tipado para funcion addnumber
  // myFunction = addNumbers
  // console.log( myFunction(1,2) )
  
  // let myFunction: (name: string) => string; // tipado para funcion greet
  // myFunction = greet
  // console.log( myFunction('Ezequiel') )
  
  
  let myFunction: () => string; //tipado para funcion savetheworld
  // ^
  // |
  myFunction = saveTheWorld
  console.log( myFunction() )

})()