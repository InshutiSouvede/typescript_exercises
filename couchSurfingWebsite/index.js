"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var propertyContainer = document.querySelector('.properties');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var button = document.querySelector('button');
var footer = document.querySelector('.footer');
var isLoggedIn;
var enums_1 = require("./enums");
var utils_1 = require("./utils");
var isOpen;
// Reviews
var reviews = [
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
// User
// const you: {
//     firstName: string;
//     lastName: string;
//     isReturning: boolean;
//     age: number;
//     stayedAt: string[]
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     isReturning: true,
//     age: 35,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: null, //What happens with null permission
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
var properties = [
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
    }
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
var authorityStatus;
// Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
}
var count = 0;
function addReviews(reviews) {
    if (!count) {
        count++;
        var topTwo = (0, utils_1.getTopTwoReviews)(reviews);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', function () { return addReviews(reviews); });
var currentLocation = ['Rwanda', '15:19', 29];
footer.innerHTML = currentLocation.join(' ') + '° C';
