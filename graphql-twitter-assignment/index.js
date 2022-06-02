const {ApolloServer}=require("apollo-server");
const { db } = require("./db");
const { typeDefs } = require("./schema");
const {Query}=require("./resolvers/Query")
const {Tweet}=require("./resolvers/Tweet")
const {Mutation}=require("./resolvers/Mutation")
const server=new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation,
        Tweet
    },
    context:{
       db
    }
});

server.listen().then(({url}) =>{
    console.log("Server is ready at "+url);
})
