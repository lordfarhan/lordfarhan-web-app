import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const pageText = {
  paragraphOne: `Hello folks Farhan here. You can contact me through the contact form on this page.
                Please feel free to contact me, don't be shy guys, just remember Farhan is always open to talk about
                technologies especially android and web development. - Farhan.`,
};

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description={pageText.paragraphOne}
        path="/contact"
        keywords={['Muhammad', 'Farhan', 'Android Developer', 'FullStack Developer', 'Javascript', 'Laravel', 'NodeJS']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
          <p>{pageText.paragraphOne}</p>
        </div>
        <Row gutter={[40, 20]} className="mt-4">
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
