import { isMobile } from 'react-device-detect';
import * as React from 'react';

const footer = () => (
  <footer className="container mx-auto">
    <h1>
      isMobile:
      {isMobile.toString()}
    </h1>
  </footer>
);

export default footer;
