exports.Query = {
    tweets: (parent, input, { db }) => {
        return db.tweets;
    },
    tweet: (parent, { id }, { db }) => {
        const tweet = db.tweets.find(tweet => tweet.id === id);
        if (!tweet) return null;
        return tweet;
    },
    user: (parent, { id }, { db }) => {
        const user = db.users.find(user => user.id === id);
        if (!user) return null;
        return user;
    },
    Notifications: (parent, { limit }, { db }) => {

        return db.notifications.slice(0, limit);
    },
    TweetsMeta: (parent,args,{db}) =>{return db.Meta}
}