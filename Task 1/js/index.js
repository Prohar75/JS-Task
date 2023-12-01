import Polyfill from "./modules/polyfill.js";
import findUnique from "./modules/findUnique.js"

const notes = [
{
    id: 1,
    title: "Recipe",
    description: "Ingredients include 2 eggs...",
    pagesCount: 2,
    isMarked: false,
    access: []
},
{
    id: 2,
    title: "Workouts",
    description: "3 sets of squats...",
    pagesCount: 1,
    isMarked: true,
    access: []
},
{
    id: 3,
    title: "Passwords",
    description: "VISA ...",
    pagesCount: 6,
    isMarked: true,
    access: []
},
{
    id: 4,
    title: "To Do 2021",
    description: "1. Learn JS...",
    pagesCount: 3,
    isMarked: false,
    access: []
}];

const polyfill = new Polyfill(notes);

const filterArray = polyfill.customFilter((item) => item.isMarked);

console.log(filterArray);

const mapArray = polyfill.customMap((item) => ({ id: item.id, title: item.title }));

console.log(mapArray);

const ReduceArray = polyfill.customReduce((acc, item) => acc + item.pagesCount, 0);

console.log(ReduceArray);


const testArray = [1,1,1,2,2,3,4,4,5,5,5,5];

const uniqueElement = findUnique(testArray);

console.log(`Unique is: ${uniqueElement}`);