"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
const enums_1 = require("./enums");
const classes_1 = require("./classes"); //one export
const utils_1 = require("./utils"); //multiple exports
let isOpen;
// Reviews
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.loyalty.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.loyalty.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.loyalty.SILVER_USER,
        date: '27-03-2021',
        description: "Great hosts, location was a bit further than said"
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: null, //What happens with null permission
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
const properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+'1123495082908', 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysian-hotel.png',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
let authorityStatus;
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
}
let count = 0;
function addReviews(reviews) {
    if (!count) {
        count++;
        const topTwo = (0, utils_1.getTopTwoReviews)(reviews);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['Rwanda', '15:19', 29];
footer.innerHTML = currentLocation.join(' ') + '° C';
let yourMainProperty = new classes_1.default('images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: enums_1.loyalty.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
//# sourceMappingURL=index.js.map