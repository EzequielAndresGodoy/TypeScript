(()=>{

  interface addTwoNumbers {
    (a: number, b: number): number,
  }

  let addNumberFunction: addTwoNumbers;

  addNumberFunction = (a: number, b: number) => {
    console.log(10)
    return 10;
  }


})()