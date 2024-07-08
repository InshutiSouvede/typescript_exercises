var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var age = 23;
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
function showReviewTotal(value) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '⭐';
}
function mostRecentReviewer(value, name) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + " | last reviewed by " + name;
}
function reviewReviewerStatus(value, name, loyaltyUser) {
    reviewTotalDisplay.innerHTML = "review total".concat(value.toString(), " | last reviewed by ").concat(name, " ").concat(loyaltyUser ? '⭐' : '');
}
showReviewTotal(reviews.length);
mostRecentReviewer(reviews.length, reviews[0].name);
reviewReviewerStatus(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.firstName);
