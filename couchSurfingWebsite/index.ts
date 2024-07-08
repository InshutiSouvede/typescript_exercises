const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
let isLoggedIn: boolean
import { Permissions , loyalty} from './enums'
import { showReviewTotal, populateUser } from './utils'
import { Country } from './types'
let isOpen: boolean

// Reviews
const reviews : (
    { 
        name: string; 
        stars: number; 
        loyaltyUser: loyalty; 
        description?:string
        date: string;
    }|{ 
    name: string; 
    stars: number; 
    loyaltyUser: loyalty; 
    description?:string
    date: string;
    })[] = [
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

const you= {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions:null,//What happens with null permission
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
        country: Country;
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

let authorityStatus : any

function showDetails(authorityStatus: (boolean|Permissions), element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions,card,properties[i].price)
}
let currentLocation:[string,string,number] = ['Rwanda','15:19',29]
footer.innerHTML = currentLocation.join(' ')+'° C'
