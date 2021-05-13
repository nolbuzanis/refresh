import React from 'react';
import { PageProps, Link } from 'gatsby';

import 'normalize.css';

const Home: React.FC<PageProps> = () => (
  <main>
    <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
    <Link to="/about">About me.</Link>
  </main>
);

export default Home;
