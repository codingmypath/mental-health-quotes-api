const express = require('express')
const app = express()
const PORT = 8000;
const cors = require('cors')

app.use(cors())


const quotes = 
    [ {
        "quote": "Your present circumstances don’t determine where you go; they merely determine where you start.",
        "author": "Nido Qubein",
    },
    {
        "quote": "Slow breathing is like an anchor in the midst of an emotional storm: the anchor won't make the storm go away, but it will hold you steady until it passes.",
        "author": "Russ Harris"
    },
    {
        "quote": "And still, I rise",
        "author": "Maya Angelou",
    },
    {
        "quote": "Be dedicated to change the way in which people see mental illness at all levels of society. If not for yourself, advocate for those who are struggling in silence.",
        "author": "Germany Kent",
    },
    {
        "quote": "Anyone can be affected, despite their level of success or their place on the food chain. In fact, there is a good chance you know someone who is struggling with it since nearly 20% of American adults face some form of mental illness in their lifetime. So why aren’t we talking about it?",
        "author":"Kristen Bell",
    },
    {
        "quote": "You don’t have to control your thoughts. You just have to stop letting them control you.",
        "author": "Dan Millman",
    },
    {
        "quote": "There is a crack in everything, that’s how the light gets in",
        "author": "Leonard Cohen",
    },
    {
        "quote": "Deep breathing is our nervous system’s love language.",
        "author": "Dr. Lauren Fogel Mersy",
    },
    {
        "quote": "I think it’s really important to take the stigma away from mental health… My brain and my heart are really important to me. I don’t know why I wouldn’t seek help to have those things be as healthy as my teeth",
        "author": "Kerry Washington",
    },
    {
        "quote": "It is not the bruises on the body that hurt. It is the wounds of the heart and the scars on the mind.",
        "author": "Aisha Mirza",
    },
    {
        "quote": "Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going.",
        "author": "Noam Shpancer, PhD",
    },
    {
        "quote": "Not until we are lost do we begin to understand ourselves.",
        "author": "Henry David Thoreau",
    },
    {
        "quote": "You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle.",
        "author": "Julian Seifter",
    },
    {
        "quote": "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        "author": "Albus Dumbledore",
    },
    {
        "quote": "Vulnerability sounds like truth and feels like courage. Truth and courage aren’t always comfortable, but they're never weakness.",
        "author": "Brené Brown",
    },
    {
        "quote": "Just because you don’t understand it doesn’t mean it isn’t so.",
        "author": "Lemony Snicket",
    },
    {
        "quote": "Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think.",
        "author": "Christopher Robin from Winnie the Pooh",
    },
    {
        "quote": "Just because no one else can heal or do your inner work for you doesn’t mean you can, should, or need to do it alone",
        "author": "Lisa Olivera",
    },
    {
        "quote": "There is hope, even when your brain tells you there isn’t.",
        "author": "John Green",
    },
    {
        "quote": "I cannot stand the words ‘Get over it’. All of us are under such pressure to put our problems in the past tense. Slow down. Don’t allow others to hurry your healing. It is a process, one that may take years, occasionally, even a lifetime – and that’s OK.",
        "author": "Beau Taplin",
    },
    {
        "quote": "Self-care is how you take your power back.",
        "author": "Lalah Delia",
    },
    {
        "quote": "My dark days made me strong. Or maybe I already was strong, and they made me prove it. ",
        "author": "Emery Lord",
    },
    {
        "quote": "There is no normal life that is free of pain. It's the very wrestling with our problems that can be the impetus for our growth.",
        "author": "Fred Rogers",
    },
    {
        "quote": "Positive vibes only’ isn’t a thing. Humans have a wide range of emotions and that’s OK.",
        "author": "Molly Bahr, LMHC",
    },
    {
        "quote": "You don’t have to be positive all the time. It’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn’t make you a negative person. It makes you human.",
        "author": "Lori Deschene",
    }, {
        "quote": "Nothing can dim the light that shines from within",
        "author": "Maya Angelou"
    }

]
    


const players = {
        'alisson_becker': {
            'number': 1,
            'position': 'Goalkeeper',
            'nationality': 'Brazil',
            'image': 'alisson.jpeg'
        },
        'adrian': {
            'number': 13,
            'position': 'Goalkeeper',
            'nationality': 'Spain'
        },
        'virgil van dijk': {
            'number': 4,
            'position': 'Defender',
            'nationality': 'Netherlands'
        },
        'ibrahima konate': {
            'number': 5,
            'position': 'Defender',
            'nationality': 'France'
        },
        'joe gomez': {
            'number': 12,
            'position': 'Defender',
            'nationality': 'England'
        },
        'kostas tsimikas': {
            'number': 21,
            'position': 'Defender',
            'nationality': 'Greece'
        },
        'andy robertson': {
            'number': 26,
            'position': 'Defender',
            'nationality': 'Scotland'
        },
        'joel matip': {
            'number': 32,
            'position': 'Defender',
            'nationality': 'Cameroon'
        },
        'trent alexander arnold': {
            'number': 66,
            'position': 'Defender',
            'nationality': 'England'
        },
        'fabinho': {
            'number': 3,
            'position': 'Midfielder',
            'nationality': 'Brazil'
        },
        'thiago alcantara': {
            'number': 6,
            'position': 'Midfielder',
            'nationality': 'Spain'
        },
        'james milner': {
            'number': 7,
            'position': 'Midfielder',
            'nationality': 'England'
        },
        'naby keita': {
            'number': 8,
            'position': 'Midfielder',
            'nationality': 'Guinea'
        },
        'jordan henderson': {
            'number': 14,
            'position': 'Midfielder',
            'nationality': 'England'
        },
        'alex oxlande-chamberlain': {
            'number': 15,
            'position': 'Midfielder',
            'nationality': 'England'
        },
        'curtis jones': {
            'number': 17,
            'position': 'Midfielder',
            'nationality': 'England'
        },
        'harvey elliot': {
            'number': 19,
            'position': 'Midfielder',
            'nationality': 'England'
        },
        'roberto firmino': {
            'number': 9,
            'position': 'Forward',
            'nationality': 'Brazil'
        },
        'mohamed salah': {
            'number': 11,
            'position': 'Forward',
            'nationality': 'Egypt'
        },
        'luis diaz': {
            'number': 23,
            'position': 'Forward',
            'nationality': 'Colombia'
        },
        'darwin nunez': {
            'number': 27,
            'position': 'Forward',
            'nationality': 'Uruguay'
        }
}




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:playerName', (request, response) => {
    const playersName = request.params.playerName.toLowerCase()
    if (quotes[playersName]) {
        response.json(players[playersName])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
})





app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:quote', (request, response) => {
    const quote = request.params.quote.toLowerCase()
    if (quotes[quote]) {
        response.json(quotes[playersName])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
})



