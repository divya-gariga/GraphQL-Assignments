const { v4: uuid } = require('uuid');
const { db } = require('../db');

exports.Mutation={
    createTweet:(parent,{body},{db})=>{
        var today=new Date().toLocaleDateString()
        const newTweet={
            id:uuid(),
            body,
            date:today
        };
        db.tweets.push(newTweet);
        return newTweet;
    },
    deleteTweet:(parent,{id},{db})=>{
        db.tweets=db.tweets.filter(tweet=>tweet.id!==id);
        return db.tweets;
    }
}