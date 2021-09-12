import classes from './Container.module.css';
import { Home } from '../scenes/Home/Home';
import { Header } from '../components/Header/Header';
import { CvConstructor } from '../scenes/CvConstructor/CvConstructor';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import building from '../scenes/CvConstructor/icons/building.svg';
import education from '../scenes/CvConstructor/icons/education.svg';
import facebookIcon from '../scenes/CvConstructor/icons/facebook_icon.svg';
import fileImage from '../scenes/CvConstructor/icons/file-image.svg';
import geoAlt from '../scenes/CvConstructor/icons/geo-alt.svg';
import knowledge from '../scenes/CvConstructor/icons/knowledge.svg';
import linkedin from '../scenes/CvConstructor/icons/linkedin.svg';
import mail from '../scenes/CvConstructor/icons/mail.svg';
import person from '../scenes/CvConstructor/icons/person.svg';
import phone from '../scenes/CvConstructor/icons/phone.svg';
import position from '../scenes/CvConstructor/icons/position.svg';

export const Container = () => {
  const [components, setComponents] = useState([
    {
      svg: person,
      title: 'Name',
      description: 'Your first and last name',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: position,
      title: 'Position',
      description: 'Your position',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: mail,
      title: 'Email Address',
      description: 'Input for email address',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: phone,
      title: 'Phone Number',
      description: 'Input for a phone number',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: linkedin,
      title: 'LinkedIN URL',
      description: 'Input for respondent’s LinkedIn',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: facebookIcon,
      title: 'Facebook URL',
      description: 'Input for respondent’s Facebook',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: building,
      title: 'Company (expirience)',
      description: 'The company you worked for',
      addOnce: false,
      isAdded: false,
      isClosed: true
    },
    {
      svg: geoAlt,
      title: 'Location',
      description: 'Single or multi-line text label',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: fileImage,
      title: 'Photo URL',
      description: 'Input for your photo',
      addOnce: true,
      isAdded: false,
      isClosed: true
    },
    {
      svg: knowledge,
      title: 'Knowledge',
      description: 'Input for your knowledges',
      addOnce: false,
      isAdded: false,
      isClosed: true
    },
    {
      svg: education,
      title: 'Education',
      description: 'Input for your educations',
      addOnce: false,
      isAdded: false,
      isClosed: true
    }
  ]);
  const [addedComponents, setAddedComponents] = useState([]);

  return (
    <div className={classes.Container}>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route
        path="/cv-constructor"
        render={props => (
          <CvConstructor
            addedComponents={addedComponents}
            setAddedComponents={setAddedComponents}
            components={components}
            setComponents={setComponents}
          />
        )}
      />
    </div>
  );
};
