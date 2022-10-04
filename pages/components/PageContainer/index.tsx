import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Navigator from '../Navigator';
import Contactus from '../Contactus';
import Footer from '../Footer';

function PageContainer(Component) {
  return class Hoc extends React.Component {
    render() {
      return (
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <Navigator />
          <Component {...this.props} />
          <Contactus />
          <Footer />
        </ThemeProvider>
      );
    }
  };
}
export default PageContainer;
