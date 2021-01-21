import { Router, Link } from '@reach/router';
import { useEffect, useState } from 'react';

import './styles/global.css';
import Pictures from './pages/pictures';
import getPictures from "./utils/getPictures";

export default function App() {
  let Home = () => (
    <main>
      <h1>
        Home{' '}
        <span aria-label="home" role="img">
          🏠
        </span>
      </h1>
      <nav>
        <Link to="pictures">See My Pictures</Link>
      </nav>
    </main>
  );

  const [isLoading, setIsLoading] = useState(true);
  const [pictures, setPictures] = useState(getPictures());

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  function generateNewPictures() {
    const newPictures = getPictures();
    setPictures(newPictures);
  };

  return (
    <Router>
      <Home path="/" />
      <Pictures
        isLoading={isLoading}
        data={pictures}
        onGenerateNewPictures={generateNewPictures}
        path="pictures"
      />
    </Router>
  );
}
