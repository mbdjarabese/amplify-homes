import React from 'react';
import './App.css';
import { HomeCollection, NavBarHeader2, MarketingFooter } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader2 />
      <div>
        <HomeCollection isPaginated itemsPerPage={3}/>
      </div>
      <MarketingFooter />
    </div>
  );
}

export default App;