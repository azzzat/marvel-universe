// потом

// class SwapiService {
//   getResourse = async url => {
//     const res = await fetch(
//       `https://gateway.marvel.com/v1/public/${url}?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9`
//     );

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}`);
//     }

//     return await res.json();
//   };

//   getAllCharacters = async () => {
//     const res = await this.getResourse(`characters`);

//   };

//   getCharacter = async id => {
//     const character = await this.getResourse(`characters/${id}`);
//     return this.
//   };

//   getcharacterImage;

//   characterData = (character) => {
//       return {
//           id: character.id,
//           name: character.name,
//           description: character.description,
//           modified: character.modified,
//       }
//   }

// }
