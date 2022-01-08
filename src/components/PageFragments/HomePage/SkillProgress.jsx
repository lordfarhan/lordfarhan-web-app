import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2 className="mt-4">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={95}
          text="Java"
        />
        <ProgressBar
          percent={95}
          text="Kotlin"
        />
        <ProgressBar
          percent={90}
          text="Android Dev."
        />
        <ProgressBar
          percent={80}
          text="Flutter"
        />
        <ProgressBar
          percent={85}
          text="GCP"
        />
        <ProgressBar
          percent={90}
          text="PHP"
        />
        <ProgressBar
          percent={90}
          text="Laravel"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="Javascript"
        />
        <ProgressBar
          percent={80}
          text="NodeJS"
        />
        <ProgressBar
          percent={70}
          text="ReactJS"
        />
        <ProgressBar
          percent={70}
          text="GatsbyJS"
        />
        <ProgressBar
          percent={75}
          text="SQL"
        />
        <ProgressBar
          percent={75}
          text="NoSQL"
        />
        <ProgressBar
          percent={85}
          text="Linux Server"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
