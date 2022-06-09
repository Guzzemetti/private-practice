
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

// App.css is needed to keep footer stuck at bottom.
import "../src/App.css"

//-------------------------------- Pages and Components ------------------------------------
// Pages to import
import Login from './pages/Login';
import Signup from './pages/Signup';
import CategoryPage from './pages/Category';
import Profile from "../src/pages/Profile";
// import Home from './pages/Home';
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

// Components to import
import Navbar from "../src/components/Nav/index";
import HomeComp from "../src/components/Home/index";
import Footer from "../src/components/Footer/index";
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound'
// import CatagoryPage from './components/CatagoryPage';
// import Categories from '../src/components/categoryCards/index';
//------------------------------------------------------------------------------------------


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


//-------------------------------- App function that builds our webpages ------------------------------------
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <StoreProvider>
            {/* The Navbar is added here to be added to every page that renders */}
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<HomeComp />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
               <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/category" 
                element={<CategoryPage />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/profile/:userId" 
                element={<Profile />} 
              />
              {/* 404 Page */}
              <Route
                path="*" 
                element={<NotFound />} 
              />
              {/* 
              <Route 
                path="/orderHistory" 
                element={<NA />} 
              />
              <Route 
                path="/products/:id" 
                element={<NA />} 
              /> */}
            </Routes>
          </StoreProvider>
          {/* Renders the footer to the bottom of each page */}
          <Footer/>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
