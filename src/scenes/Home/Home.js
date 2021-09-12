import classes from './Home.module.css';
import { BigBtn } from '../../components/BigBtn/BigBtn';
import { Tag } from '../../components/Tag/Tag';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [tags, setTegs] = useState([
    { background: '#00C45F', text: 'cv-maker' },
    { background: '#7A7597', text: 'FastCV' },
    { background: '#FC9D95', text: 'Resume' }
  ]);

  return (
    <div className={classes.Home}>
      <div className={classes.Background}></div>
      <div className={classes.MainContainer}>
        <div className={classes.LeftBlock}>
          <div className={classes.TextContent}></div>
          <h1>A shortcut to building a resume</h1>
          <p className={classes.SubTitle}>make your resume fast and free</p>
          <Link to="/cv-constructor">
            <BigBtn text="get started" />
          </Link>
        </div>
        <div className={classes.RightBlock}>
          <div className={classes.InfoBox}>
            <h3>The first step to finding your dream job</h3>
            <div className={classes.Tags}>
              {tags.map((tag, id) => {
                return (
                  <Tag key={id} background={tag.background} text={tag.text} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
