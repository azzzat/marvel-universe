class ApiService {
  getResourse = async url => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/${url}?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }

    return await res.json();
  };

  getRandomCharacter = async ramdomNumber => {
    const result = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9&limit=1&offset=${ramdomNumber}`
    );
    const characters = await result.json();
    return characters;
  };

  getCharacter = async id => {
    const character = await this.getResourse(`characters/${id}`);
    return character;
  };

  getCharactersList = async () => {
    const characters = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9&limit=20&offset=0`
    );
    const list = await characters.json();
    return list.data.results;
  };

  // getAllCharacters = async () => {
  //   const resul = await fetch(
  //     `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9&limit=1&offset=30`
  //   );
  //   const characters = await resul.json();
  //   console.log(characters.data);

  //   const res = await this.getResourse(`characters`);
  //   console.log(res.data);
  // };

  // characterData = character => {
  //   return {
  //     id: character.id,
  //     name: character.name,
  //     description: character.description,
  //     modified: character.modified
  //   };
  // };
}

export default ApiService;
