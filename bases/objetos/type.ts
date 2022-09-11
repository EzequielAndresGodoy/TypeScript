(()=>{

  type Hero = {
    name: string,
    age: number,
    power: number[],
    getName?: ()=>string;
  }

  let flash: Hero = {
    name: 'Barry Alen',
    age: 24,
    power: [1, 2]
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    power: [1],
    getName() {
      return this.name
    }
  }

})()