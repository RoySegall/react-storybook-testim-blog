import {Food} from "../Food";
import type  {FoodInterface} from '../Food';

const foods: FoodInterface[] = [
    {
        name: 'Pizza',
        description: 'Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.',
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Pizza',
        emoji: '🍕',
        rating: 5,
    },
    {
        name: 'Hamburger',
        description: 'A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.',
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Hamburger',
        emoji: '🍔',
        rating: 5,
    },
    {
        name: 'Sushi',
        description: 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, plus a variety of ingredients, such as vegetables, and any meat, but most commonly seafood (often raw but can be cooked). ',
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Sushi',
        emoji: '🍣',
        rating: 4,
    },
    {
        name: 'Ice cream',
        description: 'Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches.',
        wikipediaUrl: 'https://en.wikipedia.org/wiki/Ice_cream',
        emoji: '🍦',
        rating: 3,
    },
    {
        name: 'French fries',
        description: 'French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or julienne-cut deep-fried potatoes of disputed origin from Belgium or France',
        wikipediaUrl: 'https://en.wikipedia.org/wiki/French_fries',
        emoji: '🍟',
        rating: 5
    },
];

export const Foods = () => <>
    {foods.map(food => <Food {...food} key={food.name} />)}
</>;