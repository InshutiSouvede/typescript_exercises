const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean
enum loyalty{//default values would be 0,1,2
    GOLD_USER = 'GOLD_USER',
    SILVER_USER ='SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}
// Reviews
const reviews : any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: loyalty.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: loyalty.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: loyalty.SILVER_USER,
        date: '27-03-2021',
        description:"Great hosts, location was a bit further than said"
    },
]

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

enum Permissions {
    ADMIN='admin',
    READ_ONLY = 12
}

const you= {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions:Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array of Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
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
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}
let currentLocation:[string,string,number] = ['Rwanda','15:19',29]
footer.innerHTML = currentLocation.join(' ')+'° C'
