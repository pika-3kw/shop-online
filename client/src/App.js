import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';

import NavbarCustom from './components/NavbarCustom';
import Home from './components/Home';
import Category from './components/Category';
import Script from "react-load-script"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'

import Cart from './components/Cart';
library.add(fab, faShoppingBag);
library.add(fab, faTimes);

// Sandbox
const CLIENT_ID = 'ATbH9kBoWMrtQnO3QCUKa2LGI090XZfmbEG2bfIoO_npZ9y_5T1v3NXbhv3dGXiVuhmdbTsihE5z3h_r';
const src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`


function App(props) {

  const popup = useSelector(state => state.popup);

  const [popupVisible, serPopupVisible] = useState(null);

  useEffect(() => {
    if (popup === 'mini-cart') {
      serPopupVisible(<Cart />)
      document.body.style.overflow = 'hidden';
    }
    else {
      serPopupVisible(null)
      document.body.style.overflow = 'visible';
    }

  }, [popup])

  const handleScriptCreate = () => {
    console.log("Script created.");
  }

  const handleScriptError = () => {
    console.log("Script error.");
  }
  const handleScriptLoad = () => {
    console.log("Script loaded.");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarCustom />
        {popupVisible}

        <Container>
          <Switch>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Script
          url={src}
          onCreate={() => handleScriptCreate()}
          onError={() => handleScriptError()}
          onLoad={() => handleScriptLoad()}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
