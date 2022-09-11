(()=>{

  interface Client {
    name: string,
    age?: number
    address?: Address,
    getFullAddress( id: string ):void,
  }

  interface Address {
    id: number,
    zip: string,
    city: string
  }

  const client: Client = {
    name: 'Ezequiel',
    age: 25,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    },
    getFullAddress(id: string){
      return this.address?.city
    }
  }

  const client2: Client = {
    name: 'Inti',
    age: 30,
    address: {
      id: 120,
      zip: 'Z2S U2A',
      city: 'Toronto'
    },
    getFullAddress(id: string){
      return this.address?.city
    }
  }



})()