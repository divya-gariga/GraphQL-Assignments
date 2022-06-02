const tweets = [
    {
        id: "1",
        body: "#throwbackthursday: Coolest fan we’ve ever seen.",
        date: "01/01/2022",
        Author:"usr1",
        Stats:'tweet1-stat'
    },
    {
        id: "2",
        body: "SHARE this with anyone you know who can use this tip! pic.twitter.com/AIY2pgV95",
        date: "02/01/2022",
        Author:"usr2",
        Stats:'tweet2-stat'

    },
    {
        id: "3",
        body: "Time for a Royal Celebration! #Royalbaby pic.twitter.com/lITsX3lHf",
        date: "22/06/2021",
        Author:"usr3",
        Stats:'tweet3-stat'
    }
];

const users = [
    {
        id: "usr1",
        username:"divya163",
        first_name:"divya",
        last_name: "gariga",
        full_name: "divya gariga",
        name: "divya",
        avatar_url: "avatars/divya.png"
    },
    {
        id: "usr2",
        username:"bhavya369",
        first_name:"bhavya",
        last_name: "gariga",
        full_name: "bhavya gariga",
        name: "bhavya",
        avatar_url: "avatars/bhavya.jpeg"
    },
    {
        id: "usr3",
        username:"Raj312",
        first_name:"Raju",
        last_name: "G",
        full_name: "Raju G",
        name: "Raju",
        avatar_url: "avatars/raj.png"
    },
    {
        id: "usr4",
        username:"abhi123",
        first_name:"abhi",
        last_name: "D",
        full_name: "abhi D",
        name: "Abhi",
        avatar_url: "avatars/Abhi.jpeg"
    },
]

const stats=[
    {
        id:"tweet1-stat",
        views: 2000,
        likes: 300,
        retweets: 50,
        responses: 100
    },
    {       
        id:"tweet2-stat",
        views: 1000,
        likes: 50,
        retweets: 10,
        responses: 50
    },
    {
        id:"tweet3-stat",
        views: 3100,
        likes: 150,
        retweets: 100,
        responses: 70
    }
];

const notifications=[
    {
        id:"notify1",
        date:"02/02/2022",
        type:"pop up"
    },
    {  
        id:"notify2",
        date:"02/03/2022",
        type:"email"

    },
    {
        id:"notify3",
        date:"10/03/2022",
        type:"notification"
    },
    {
        id:"notify4",
        date:"05/05/2022",
        type:"email"
    },
]
Meta={
    count:3
};

exports.db = {
    tweets,
    users,
    stats,
    notifications,
    Meta
}