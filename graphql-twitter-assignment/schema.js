const { gql } = require("apollo-server");

exports.typeDefs = gql`
type Query{
   tweets:[Tweet]
   tweet(id: ID!): Tweet
   # Tweets(limit: Int, skip: Int, sort_field: String, sort_order: String): [Tweet]
   Meta:Int
   TweetsMeta: Meta
   user(id: ID!): User
   Notifications(limit:Int): [Notification]
}
scalar Url
scalar Date
type Tweet {
   id: ID!
   body: String
   date: Date
   Author: User
   Stats: Stat
}
type User {
id: ID!
username: String
first_name: String
last_name: String
full_name: String
name: String 
avatar_url: Url
}
type Stat {
   id:ID!
   views: Int
   likes: Int
   retweets: Int
   responses: Int
}
type Meta{
   count:Int
}
type Notification {
   id: ID!
   date: Date
   type: String

}
type Mutation {
createTweet (
    body: String
): Tweet
deleteTweet(id: ID!): Tweet
}
`