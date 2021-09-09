import classes from './CvConstructor.module.css';
import { CvComponent } from '../../components/CvComponent/CvComponent';
import { useState, useEffect } from 'react';
import building from './icons/building.svg';
import education from './icons/education.svg';
import facebookIcon from './icons/facebook_icon.svg';
import fileImage from './icons/file-image.svg';
import geoAlt from './icons/geo-alt.svg';
import knowledge from './icons/knowledge.svg';
import linkedin from './icons/linkedin.svg';
import mail from './icons/mail.svg';
import person from './icons/person.svg';
import phone from './icons/phone.svg';
import { ScrollingWindow } from '../../components/ScrollingWindow/ScrollingWindow';

export const CvConstructor = () => {
  const [components, setComponents] = useState([
    {
      svg: person,
      title: 'Full Name',
      description: 'Your first and last name',
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
  const [componentContainerClasses, setComponentContainerClasses] = useState([
    classes.CvComponent
  ]);

  const openComponent = component => {
    setComponents([...components]);
    component.isClosed = false;
  };

  const addComponent = (svg, title, component) => {
    setAddedComponents([...addedComponents, { title: title, svg: svg }]);
    component.isAdded = true;
    component.isClosed = true;
  };

  const removeComponent = component => {
    const index = addedComponents.indexOf(component);
    const before = addedComponents.slice(0, index);
    const after = addedComponents.slice(index + 1);

    const newArr = [...before, ...after];

    setAddedComponents(newArr);
  };

  return (
    <>
      <div className={classes.CvConstructor}>
        <h3>Add Components</h3>
        <div className={classes.ComponentsContainer}>
          {components.map((component, id) => {
            return (
              <CvComponent
                key={id}
                component={component}
                isAddOnce={component.addOnce}
                isAdded={component.isAdded}
                svg={component.svg}
                title={component.title}
                description={component.description}
                addComponent={addComponent}
                openComponent={openComponent}
                isClosed={component.isClosed}
              />
            );
          })}
        </div>
        <ScrollingWindow
          addedComponents={addedComponents}
          removeComponent={removeComponent}
        />
      </div>
    </>
  );
};
