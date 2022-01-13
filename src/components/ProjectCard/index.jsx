/* eslint-disable max-len */
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import style from './projectCard.module.less';
import Utils from '../../utils/pageUtils';

const ProjectCard = (props) => {
  const { data: { node: { frontmatter } } } = props;

  return (
    <Link to={Utils.resolvePageUrl(frontmatter.path)}>
      <div className={style.projectCard}>
        <div
          className={style.projectImg}
          style={{
            backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
          }}
        />
        <div className={style.pd20px}>
          <div>
            <p>
              <span className={style.projectDateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
            </p>
            <h4 className={style.projectTitle} style={{ color: `${frontmatter ? frontmatter.excerpt : '#FFF'}` }}>
              {frontmatter ? frontmatter.title : ''}
            </h4>
          </div>
          <p className={style.projectExcerpt}>
            {frontmatter ? frontmatter.excerpt : ''}
          </p>
        </div>
      </div>
    </Link>
    // <Link to={Utils.resolvePageUrl(frontmatter.path)}>
    //   <div
    //     className={style.projectCardImg}
    //     style={{
    //       backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
    //     }}
    //   />
    //   <div className={style.mrTp20}>
    //     <p>
    //       <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
    //     </p>
    //     <h3>{frontmatter ? frontmatter.title : ''}</h3>
    //     <p>{frontmatter ? frontmatter.excerpt : ''}</p>
    //     <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
    //       {
    //         `#${frontmatter.tags.join(' #')}`
    //       }
    //     </p>
    //   </div>
    // </Link>
  );
};

export default ProjectCard;
