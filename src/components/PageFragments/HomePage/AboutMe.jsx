import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paragraphOne: `Hello !! My name is Muhammad Farhan. I'm an android app development as well as full stack web developer who is
    passionate about various technologies. I like to experiment with different web
    technologies. I have an experience of 2 yaears building android app as well as web app 😅.`,
  paragraphTwo: `Currently I work mostly in android app development using Kotlin and web development using Laravel framework and JavaScript. 
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
          keywords={['Muhammad', 'Farhan', 'Android Developer', 'FullStack Developer', 'Javascript', 'Laravel', 'NodeJS']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paragraphOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paragraphTwo)} />
        <h2 className="mt-4">Not Fun Fact 😅</h2>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
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
            img="meeting.png"
            alt="meeting image"
            textH4="Socially"
            textH3="Palsy-walsy to anyone"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Travel"
            textH3="Although not documented"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
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
