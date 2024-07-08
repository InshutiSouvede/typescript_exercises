const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const age = 23
const reviews = [
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
]
function showReviewTotal(value: number) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '⭐'
}
function mostRecentReviewer(value: number, name: string) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + " | last reviewed by " + name
}
function reviewReviewerStatus(value: number, name: string, loyaltyUser: boolean) {
    reviewTotalDisplay.innerHTML = `review total${value.toString()} | last reviewed by ${name} ${loyaltyUser ? '⭐' : ''}`
}
showReviewTotal(reviews.length)
mostRecentReviewer(reviews.length, reviews[0].name)
reviewReviewerStatus(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
    firstName: string,
    lastName: string,
    isReturning: boolean,
    age:number,
    stayedAt:(string|number)[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age:35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow',23]
}


function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}
populateUser(you.isReturning, you.firstName)