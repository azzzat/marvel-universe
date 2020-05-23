class ApiService {
  getResourse = async (url) => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/${url}?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }

    return await res.json();
  };

  getRandomCharacter = async (ramdomNumber) => {
    const result = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9&limit=1&offset=${ramdomNumber}`
    );
    const characters = await result.json();
    return characters;
  };

  getCharacter = async (characterID) => {
    const result = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${characterID}?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9`
    );
    const characters = await result.json();
    return characters;
  };

  getCharactersList = async (boardPage) => {
    const characters = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9&limit=30&offset=${boardPage}`
    );
    const list = await characters.json();
    return list.data.results;
  };

  getSearchedCharactersList = async () => {
    const characters = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=Sp&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9`
      // `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchedCharacter}&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9`
    );
    const list = await characters.json();
    return list;
  };
}

export default ApiService;
