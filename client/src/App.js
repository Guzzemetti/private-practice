
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { StoreProvider } from './utils/GlobalState';
// Pages to import
import Home from './pages/Home';
import Profile from "../src/pages/Profile";
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

// Components to import
import Navbar from "../src/components/Nav/index";
// import Nav from './components/Nav';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <StoreProvider>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Profile />} 
              />
              {/* <Route 
                path="/signup" 
                element={<NA />} 
              />
              <Route 
                path="/success" 
                element={<NA />} 
              />
              <Route 
                path="/orderHistory" 
                element={<NA />} 
              />
              <Route 
                path="/products/:id" 
                element={<NA />} 
              /> */}
              {/* 404 */}
              {/* <Route
                path="*" 
                element={<NA />} 
              /> */}
            </Routes>
          </StoreProvider>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
