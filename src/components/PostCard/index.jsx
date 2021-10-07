/* eslint-disable max-len */
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import style from './postCard.module.less';
import Utils from '../../utils/pageUtils';

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;

  return (
    <Link className={style.postCard} to={Utils.resolvePageUrl(frontmatter.path)}>
      <div className={style.postCard}>
        <div
          className={style.postImg}
          style={{
            backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
          }}
        />
        <div className={style.pd20px}>
          <div>
            <p>
              <span className={style.postDateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
            </p>
            <h4 className={style.postTitle} style={{ color: `${frontmatter ? frontmatter.excerpt : '#FFF'}` }}>
              {frontmatter ? frontmatter.title : ''}
            </h4>
          </div>
          <p className={style.postExcerpt}>
            {frontmatter ? frontmatter.excerpt : ''}
          </p>
        </div>
      </div>
    </Link>
    // <Link to={Utils.resolvePageUrl(frontmatter.path)}>
    //   <div
    //     className={style.postCardImg}
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

export default PostCard;
