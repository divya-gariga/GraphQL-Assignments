
exports.Tweet = {
    Author: ({ Author }, args, { db }) => {
        return db.users.find(user => user.id === Author);
    },
    Stats:({Stats},args,{db})=>{
        return db.stats.find(stat=>stat.id===Stats);
    },
};