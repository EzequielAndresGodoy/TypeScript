(()=>{

  class Apocalipsis {

    static intance:Apocalipsis

    private constructor(public name: string){}

    static callApocalipsis(): Apocalipsis {
      if ( !Apocalipsis.intance ){
        Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis... el unico')
      }
      return Apocalipsis.intance
    }

    changeName( newName:string ):void {
      this.name = newName
    }

  }

  const apocalipsis1 = Apocalipsis.callApocalipsis()
  const apocalipsis2 = Apocalipsis.callApocalipsis()
  const apocalipsis3 = Apocalipsis.callApocalipsis()

  apocalipsis1.changeName('Xavier')
  // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el unico')
  // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el unico')
  // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el unico')

  console.log(apocalipsis1)
  console.log(apocalipsis2)
  console.log(apocalipsis3)


})()