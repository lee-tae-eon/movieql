export let movies = [
  {
    id: 1,
    name: "lee",
    age: 22,
    gender: "male",
  },
  {
    id: 2,
    name: "woo",
    age: 23,
    gender: "female",
  },
  {
    id: 3,
    name: "kin",
    age: 44,
    gender: "male",
  },
  {
    id: 4,
    name: "aiden",
    age: 59,
    gender: "male",
  },
  {
    id: 5,
    name: "lewis",
    age: 32,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = movies.filter((person) => person.id === id);
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

console.log("heello");
