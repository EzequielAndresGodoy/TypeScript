(()=>{

  class Avenger {

    constructor (
      public name: string,
      public realName: string,
    ) {
      // console.log('Contructor Avenger Llamado')

    }

    protected getFullName() {
      return `${this.name} ${this.realName}`
    }

  }

  class Xmen extends Avenger {
  
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName)
      // console.log('Constructor Xmen Llamado')
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    set fullName(name:string) {
      if (name.length < 3){
        throw new Error('El nombre debe ser mayor de 3 letras')
      }
      this.name = name
    }

    getFullNameDesdeXmen() {
      // console.log(super.getFullName())
    }

  }


  const wolverine = new Xmen('Wolverine', 'Logan', true)

  // console.log(wolverine.fullName)

  // wolverine.fullName = 'Ez'

  // console.log(wolverine.fullName)

  // wolverine.getFullNameDesdeXmen()


})()