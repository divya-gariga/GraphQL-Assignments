import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { RestLink } from 'apollo-link-rest';
const restLink = new RestLink({ uri: "  https://api.github.com/" });
const httpLink = createHttpLink({
  uri: restLink,
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = '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'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(restLink)
});

// query1 - get the user
const query = gql`
  query user {
    user @rest(type: "user", path: "user/") {
      login
      avatar_url
    }
  }
`;

// Invoke the query and log the person's name
client.query({ query }).then(response => {
  console.log(response.data.user.login);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
