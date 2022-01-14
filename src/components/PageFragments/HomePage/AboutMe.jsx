import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paragraphOne: `Hello fellas! My name is Muhammad Farhan. I'm an android app developer as well as full stack web developer who is
    passionate about various technologies. I like to experiment with different web
    technologies. I have an experience of 2 yaears building android app as well as web app 😅.`,
  paragraphTwo: `Currently I work mostly in android app development using Kotlin and web development using Laravel framework and JavaScript (Node JS, React, Gatsby, etc). 
    I also have hands on experience working with cloud infrastructures like <b>Google Cloud Platform</b> specially for Firebase. 
    I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paragraphOne} ${stripTags(pageText.paragraphTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['lordfarhan', 'lord', 'farhan', 'muhammad farhan', 'farhan', 'android', 'fullstack']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paragraphOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paragraphTwo)} />
        <h2 className="mt-4">Not Fun Fact 😅</h2>
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
