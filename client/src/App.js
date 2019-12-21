import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import NavbarCustom from './components/NavbarCustom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Cart from './components/Cart';
library.add(fab, faShoppingBag)

function App(props) {

  const popup = useSelector(state => state.popup);

  const [popupVisible, serPopupVisible] = useState(null);

  useEffect(() => {
    if (popup === 'mini-cart') {
      serPopupVisible(<Cart />)
    }
    else {
      serPopupVisible(null)
    }

  }, [popup])

  return (
    <div className="App">
      <NavbarCustom />
      {popupVisible}

    </div>
  );
}

export default App;
