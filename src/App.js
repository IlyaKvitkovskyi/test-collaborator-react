import React from 'react';
import DB from './assets/db.json';

import TelegramNotifications from './components/TelegramNotifications';
import GeneralNotifications from './components/GeneralNotifications';
import SitesNotifications from './components/SitesNotifications';
import Button from './components/Button';

function App() {
  const [data, setData] = React.useState(DB.data);
  

  return (
    <div className="wrapper">
      <div className="main-title">
        <div className="container">
          <div className="main-title__head">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      </div>

      <section className="messages">
        <div className="container">
          <GeneralNotifications />

          <SitesNotifications />

          <TelegramNotifications />

          <Button/>
        </div>
      </section>
    </div>
  );
}

export default App;
