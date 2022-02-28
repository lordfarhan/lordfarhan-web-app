/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';
import config from '../../../config';

const pageText = {
  paragraphOne: `Hello folks Farhan here. You can contact me through the list on this page.
                Please feel free to contact me, don't be shy guys, just remember Farhan is always open to talk about
                technologies especially android and web development.`,
};

const socialMedia = {
  dribbble: { link: config.social.dribbble, img: '../../socmed/dribbble.png', name: 'Dribbble' },
  email: { link: config.social.gmail, img: '../../socmed/technorati.png', name: 'Email' },
  facebook: { link: config.social.facebook, img: '../../socmed/facebook.png', name: 'Facebook' },
  github: { link: config.social.github, img: '../../socmed/github.png', name: 'GitHub' },
  instagram: { link: config.social.instagram, img: '../../socmed/instagram.png', name: 'Instagram' },
  linkedin: { link: config.social.linkedin, img: '../../socmed/linkedin.png', name: 'LinkedIn' },
  paypal: { link: config.social.paypal, img: '../../socmed/paypal.png', name: 'PayPal' },
  spotify: { link: config.social.spotify, img: '../../socmed/spotify.png', name: 'Spotify' },
  stack_overflow: { link: config.social.stack_overflow, img: '../../socmed/stack-overflow.png', name: 'Stack Overflow' },
  telegram: { link: config.social.telegram, img: '../../socmed/telegram.png', name: 'Telegram' },
  twitter: { link: config.social.twitter, img: '../../socmed/twitter.png', name: 'Twitter' },
  whatsapp: { link: config.social.whatsapp, img: '../../socmed/whatsapp.png', name: 'WhatsApp' },
  youtube_development: { link: config.social.youtube_development, img: '../../socmed/youtube.png', name: 'YouTube (Development)' },
  youtube_entertainment: { link: config.social.youtube_entertainment, img: '../../socmed/youtube.png', name: 'YouTube (Entertainment)' },
};

function Contact() {
  return (
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
          <Row gutter={[20, 20]}>
            {
              Object.values(socialMedia).map((element) => (
                <Col xs={24} sm={24} md={12} lg={12}>
                  <div className="card">
                    <a href={element.link} target="_blank" rel="noreferrer">
                      <div className="cardBody">
                        <div className="contactSocialMediaCard">
                          <img
                            src={element.img}
                            alt={element.name}
                            className="width44px me-2"
                          />
                          {element.name}
                        </div>
                      </div>
                    </a>
                  </div>
                </Col>
              ))
            }
          </Row>
          <p className="mt-4">
            You guys can also contact me via the following form,
            please note that I rarely respond to this form.
          </p>
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
          <p className="mt-4">
            I am not a good icon designer, icons made by
            <a href="https://www.flaticon.com/authors/iconsbox" title="IconsBox"> IconsBox </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
          </p>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
}

export default Contact;
