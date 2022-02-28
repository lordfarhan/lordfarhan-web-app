import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paragraphOne: `Hello fellas! My name is Muhammad Farhan. I'm an android app developer as well as full stack web developer who is
    passionate about various technologies. I like to experiment with different web
    technologies. I have an experience of 4 years building Android app as well as web app 😅.`,
  paragraphTwo: `Currently I work mostly in Android app development using Kotlin or Java and web development using Laravel framework and JavaScript (Node JS, React, Gatsby, etc). 
    I also have hands on experience working with cloud infrastructures like <b>Google Cloud Platform</b> specially for Firebase.`,
  paragraphThree: `I'm always a learner and a self taught programmer. Besides developing the skills that I have, I also really like to learn new things, 
    the difficulty in learning new things is a challenge that has its own meaning for me.`,
};

const AboutMe = () => {
  const description = `${pageText.paragraphOne} ${stripTags(pageText.paragraphTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="Root"
          description={description}
          path=""
          keywords={['lordfarhan', 'lord', 'farhan', 'muhammad farhan', 'farhan', 'android', 'fullstack']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paragraphOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paragraphTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paragraphThree)} />
        <h2 className="mt-4">Not Fun Fact 😅</h2>
        <p>Here are some facts about me, not very interesting but good for me to share.</p>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="map.png"
            height={60}
            alt="map image"
            textH4="Born and bought up in"
            textH3="Bojonegoro, Indonesia"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Unlocked new skill by coffee"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="handshake.png"
            alt="handshake image"
            textH4="Socially"
            textH3="Palsy-walsy to anyone"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="cat.png"
            alt="cat image"
            textH4="Cat Lover"
            textH3="Really love cat!"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="analytics.png"
            alt="analytics image"
            textH4="Lifelong Learner"
            textH3="Self Taught Programmer"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued Tech in"
            textH3="Informatics, Brawijaya U."
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
