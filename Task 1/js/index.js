import Polyfill from "./modules/polyfill.js";
import findUnique from "./modules/findUnique.js";

const NOTES = [
  {
    id: 1,
    title: "Recipe",
    description: "Ingredients include 2 eggs...",
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: "Workouts",
    description: "3 sets of squats...",
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: "Passwords",
    description: "VISA ...",
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: "To Do 2021",
    description: "1. Learn JS...",
    pagesCount: 3,
    isMarked: false,
    access: [],
  },
];

const polyfill = new Polyfill(NOTES);

const filterArray = polyfill.customFilter((newArray) => newArray.isMarked);

console.log(filterArray);

const mapArray = polyfill.customMap((newArray) => ({
  id: newArray.id,
  title: newArray.title,
}));

console.log(mapArray);

const ReduceArray = polyfill.customReduce(
  (acc, newArray) => acc + newArray.pagesCount,
  0
);

console.log(ReduceArray);

const TEST_ARRAY = [1, 1, 1, 15, 2, 2, 3, 4, 4, 5, 5, 5, 5, 7];

const uniqueElement = findUnique(TEST_ARRAY);

console.log(`Unique is: ${uniqueElement}`);
