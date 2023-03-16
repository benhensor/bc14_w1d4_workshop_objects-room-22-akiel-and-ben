const myCat = {
  color: 'black',
  name: 'Tony',
  lovesCuddles: true,
};

const myHouse = {
  stories: 2,
  parking: false,
  bedrooms: 2,
  garden: true,
  nrgEfficiency: 'D',
};

const myCar = {
  color: 'red',
  wheels: 4,
  pwrSteering: true,
  seats: 2,
  mpg: 20,
};

const myFavouriteFilm = {
  title: 'The Dark Knight',
  releaseDate: 2008,
  leadActor: 'Christian Bale',
};

let person = {
  name: "Ben",
  likesChocolate: true,
};

console.log(person.likesChocolate);

if (person.likesChocolate) {
  console.log("Ben loves chocolate");
} else {
  console.log("Ben hates chocolate");
}

let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases.smallTalk);
console.log(bensPhrases[desiredPleasantry]);

let me = {
  firstName: "Ben",
  lastName: "Hensor",
  isBootcamper: false,
};

me.isBootcamper = true;

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

let sentence = communication.payload.message.text + " " + communication.payload.message.priority;
console.log(sentence);

if (communication.payload.message.priority === "URGENT") {
  console.log(sentence);
} else {
  null;
}

