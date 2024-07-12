"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReviewTotal = showReviewTotal;
exports.populateUser = populateUser;
exports.showDetails = showDetails;
exports.makeMultiple = makeMultiple;
exports.getTopTwoReviews = getTopTwoReviews;
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const enums_1 = require("./enums");
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = enums_1.loyalty.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = +value.toString() + "review" + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
function add(firstValue, secondValue) {
    let result;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue;
    }
    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition');
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition');
    }
}
const combinedReviews = add(5, 1);
const firstNameLastName = add('Souvede', 'Inshuti');
//# sourceMappingURL=utils.js.map