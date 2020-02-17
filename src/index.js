// fetch(
//   "https://gateway.marvel.com/v1/public/characters/1009600?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9"
// )
//   .then(res => {
//     return res.json();
//   })
//   .then(body => {
//     console.log(body);
//   });

const getResourse = async url => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResourse(
  "https://gateway.marvel.com/v1/public/characters/1009600?ts=1&apikey=3bc96d4bd6e4433bbdc3ad4ee302904c&hash=c439a02b89d34016a1cbace6708c4ed9"
).then(body => console.log(body));
