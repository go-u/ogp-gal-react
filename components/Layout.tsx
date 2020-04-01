import * as React from 'react';
import Header from './header/Header';
// import Footer from './footer/Footer';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => (
  <div className="py-16">
    <Header />
    <main className="container mx-auto">
      {children}
    </main>
    { /* <Footer /> */ }
  </div>
);

export default Layout;
