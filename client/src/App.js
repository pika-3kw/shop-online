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

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'

import Cart from './components/Cart';
library.add(fab, faShoppingBag);
library.add(fab, faTimes);


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

      </div>
    </BrowserRouter>
  );
}

export default App;
