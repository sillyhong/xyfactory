import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
// import App from './_app';
import Navigator from './components/Navigator';
// import Header from './components/Header';
import CarouselComp from './components/Carousel';
import ProductInfo from './components/ProductInfo';
// import Aboutus from './components/Aboutus';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Navigator />
      {/* <Header /> */}
      <CarouselComp />
      <ProductInfo />
      {/* <Aboutus /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
