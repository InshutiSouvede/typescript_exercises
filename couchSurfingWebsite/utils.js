"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showReviewTotal = showReviewTotal;
exports.populateUser = populateUser;
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var enums_1 = require("./enums");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = enums_1.loyalty.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function add(firstValue, secondValue) {
    var result;
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
var combinedReviews = add(5, 1);
var firstNameLastName = add('Souvede', 'Inshuti');
