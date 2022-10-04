import React from 'react';
import PageContainer from 'pages/components/PageContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsComp = () => {
  return <div>contact us </div>;
};

const HomePage = PageContainer(ContactUsComp);

const ContactUs = () => {
  return <HomePage />;
};

export default ContactUs;
