import { Fragment } from 'react';
import './App.scss';

import NavRoute from './components/navroute/navroute.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <NavRoute/>
    </Fragment>
  );
}

export default App;
