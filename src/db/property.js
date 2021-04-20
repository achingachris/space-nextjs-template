import tenant from './tenant'
import owner from './owner'

const property = [
  {
    name: 'Uchumi Appartments',
    owner: owner.name[0],
    location: 'Bamburi Mwisho',
    no_of_units: 50,
    no_of_occupied_units: 37,
  },
  {
    name: 'Posted Appartments',
    owner: owner.name[1],
    location: 'Mtwapa',
    no_of_units: 45,
    no_of_occupied_units: 15,
  },
  {
    name: 'United Appartments',
    owner: owner.name[2],
    location: 'Nyali',
    no_of_units: 20,
    no_of_occupied_units: 20,
  },
]

export default property
