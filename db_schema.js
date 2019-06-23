const schema = {
  od_centers: [{
    id: number,
    name: string,
    address: string,
    location: {
      lat: number,
      lon: number
    }
  }],
  users: [{
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    drug: {
      opioids: bool,
      coke: bool,
      xanax: bool
    },
    occupation: {
      student: bool,
      unemployed: bool,
      homeless: bool
    },
    history: [{
      location: number,
      date: number,
      drug_type: string,
      amount: number,
      notes: string
    }]
  }],
}