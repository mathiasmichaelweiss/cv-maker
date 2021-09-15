import classes from './CvConstructor.module.css';
import { CvComponent } from '../../components/CvComponent/CvComponent';
import { Link } from 'react-router-dom';
import { ScrollingWindow } from '../../components/ScrollingWindow/ScrollingWindow';
import { CV } from '../CV/CV';
import { Btn } from '../../components/Btn/Btn';
import { useState } from 'react';

export const CvConstructor = ({
  addedComponents,
  setAddedComponents,
  components,
  setComponents,
  dataFilter
}) => {
  const openComponent = component => {
    setComponents([...components]);
    component.isClosed = false;
  };

  const addComponent = (
    svg,
    name,
    component,
    type,
    secondName,
    beginningYear,
    endingYear,
    about
  ) => {
    if (type === 'company') {
    }
    setAddedComponents([
      ...addedComponents,
      {
        svg: svg,
        name: name,
        type: type,
        secondName: secondName,
        beginningYear: beginningYear,
        endingYear: endingYear,
        about: about
      }
    ]);
    component.isAdded = true;
    component.isClosed = true;
  };

  const [cvVisible, setCvVisible] = useState(false);
  console.log(addedComponents);

  const removeComponent = (component, idx) => {
    const index = addedComponents.indexOf(component);
    const before = addedComponents.slice(0, index);
    const after = addedComponents.slice(index + 1);

    const newArr = [...before, ...after];

    components[idx].isAdded = false;

    setAddedComponents(newArr);
  };

  const componentsLeftBlock = components.filter((component, id) => id <= 5);
  const componentsRightBlock = components.filter((component, id) => id > 5);

  return (
    <>
      <div className={classes.CvConstructor}>
        <CV
          cvVisible={cvVisible}
          setCvVisible={setCvVisible}
          addedComponents={addedComponents}
          dataFilter={dataFilter}
        />
        <h3>Add Components</h3>
        <div className={classes.ComponentsContainer}>
          <div className={classes.ContainerLeftBlock}>
            {componentsLeftBlock.map((component, id) => {
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
          <div className={classes.ContainerRightBlock}>
            {componentsRightBlock.map((component, id) => {
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
        </div>
        <ScrollingWindow
          addedComponents={addedComponents}
          removeComponent={removeComponent}
        />
        <div className={classes.Bottom}>
          <Btn text="show result" makeAction={() => setCvVisible(true)} />
        </div>
      </div>
    </>
  );
};
