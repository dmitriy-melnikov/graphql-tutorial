// https://funded-pet-library.moonhighway.com/

// types -> scalar types  Int float string boolean ID
//  custom scalar type -> scalar Date
/*enum Episode {
  NEWSHOP
  EMPIRE
  JEDI
}*/
// NULL AND NON-NULL
/*
type Character {
  name: String!
  city: String
}
*/

// List
/*type Character {
  myField: [String!]
}
myField: null -> valid
myField: [] -> valid
myField: ['a', 'b'] -> valid
myField: ['a', 'b', null] -> error*/

// List 2
/*type Character {
  myField: [String]!
}
myField: null -> error
myField: [] -> valid
myField: ['a', 'b'] -> valid
myField: ['a', 'b', null] -> valid
*/

// List 3
/*type Character {
  myField: [String!]!
}
myField: null -> error
myField: [] -> valid
myField: ['a', 'b'] -> valid
myField: ['a', 'b', null] -> error
/
 */
//********************************************************
// INTERFACES

/*interface Character {
  id: ID! -> not null
  name: String! -> not null
  friends: [Character] -> null [], [null] [null, Character]
  appearsIn: [Episode]! -> not null [] [Episode, null], [Episode]
}*/

// UNION TYPES
// union SearchResult = Human | Droid | Starship

// INPUT TYPES
/*
input ReviewInput {
  stars: Int!
  commentary: String
}*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// DIRECTIVES
/*
@include(if: Boolean)
@skip(if: Boolean)
*/
