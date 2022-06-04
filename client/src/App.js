
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Home from './pages/Home';
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
import Navbar from "../src/components/Nav/index";
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

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
        <div>
          <StoreProvider>
            <Navbar />
            <Routes>
              {/* <Route 
                path="/" 
                element={<Home />} 
              /> */}
              {/* <Route 
                path="/login" 
                element={<NA />} 
              />
              <Route 
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
        </div>
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
