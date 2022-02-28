/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-restricted-properties */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Pie, Bar } from '@ant-design/plots';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Skills from '../../components/PageFragments/StatisticsPage/SkillProgress';

const pageText = {
  paragraphOne: 'This is some of my statistics. Please kindly note for the skills section, it is only an estimate from me personally based on what I have learned and applied from projects. Some stats are written based on my experience and habits, others are plans I made.',
};

const Statistics = () => {
  const currentYear = new Date().getFullYear();

  const timeManagementData = [
    {
      type: 'Learn',
      value: 5,
    },
    {
      type: 'Earn',
      value: 5,
    },
    {
      type: 'Solopreneur',
      value: 5,
    },
    {
      type: 'Life',
      value: 9,
    },
  ];

  const timelineData = [
    {
      event: 'Play Group',
      values: [2003, 2006],
    },
    {
      event: 'Elementary School',
      values: [2006, 2012],
    },
    {
      event: 'Junior High School',
      values: [2012, 2015],
    },
    {
      event: 'Senior High School',
      values: [2015, 2018],
    },
    {
      event: 'Bachelor\'s Degree',
      values: [2018, 2022],
    },
    {
      event: 'Android Developer',
      values: [2018, currentYear],
    },
    {
      event: 'Laravel Developer',
      values: [2019, currentYear],
    },
    {
      event: 'NodeJS Developer',
      values: [2021, currentYear],
    },
  ];

  const timeManagementConfig = {
    appendPadding: 10,
    data: timeManagementData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
      autoRotate: false,
    },
    tooltip: {
      formatter: (datum) => ({ name: datum.type, value: `${datum.value} Hour(s)` }),
    },
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  const timelineConfig = {
    xAxis: {
      min: 2000,
      tickInterval: 1,
    },
    data: timelineData,
    xField: 'values',
    yField: 'event',
    isRange: true,
    tooltip: {
      formatter: (datum) => ({ name: 'Year', value: `${datum.values[0]} - ${datum.values[1]}` }),
    },
    label: {
      position: 'middle',
      layout: [
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title="Statistics"
          description={pageText.paragraphOne}
          path="/statistics"
          keywords={['Muhammad', 'Farhan', 'Android Developer', 'FullStack Developer', 'Javascript', 'Laravel', 'NodeJS']}
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">Statistics</h1>
            <p>{pageText.paragraphOne}</p>
          </div>
          <Row gutter={[20, 20]} className="mt-4">
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className="card">
                <div className="cardHeader">
                  <h3>Time Management</h3>
                </div>
                <div className="cardBody">
                  <Pie {...timeManagementConfig} />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className="card">
                <div className="cardHeader">
                  <h3>Daily Schedule</h3>
                </div>
                <div className="cardBody">
                  <Pie {...timeManagementConfig} />
                </div>
              </div>
            </Col>
            {/* <Col xs={24} sm={24} md={24} lg={24}>
              <div className="card">
                <div className="cardHeader">
                  <h3>
                    Timeline (2000 -
                    {' '}
                    {currentYear}
                    )
                  </h3>
                </div>
                <div className="cardBody">
                  <Bar {...timelineConfig} />
                </div>
              </div>
            </Col> */}
            <Col xs={24} sm={24} md={24} lg={24}>
              <Skills />
            </Col>
          </Row>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export default Statistics;
