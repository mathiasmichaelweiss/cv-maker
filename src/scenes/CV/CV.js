import classes from './CV.module.css';
import { useState, useEffect } from 'react';
import { Btn } from '../../components/Btn/Btn';
import { ReactSVG } from 'react-svg';
import close from './icons/close.svg';

export const CV = ({ setCvVisible, cvVisible, addedComponents }) => {
  const [themeColor, setThemeColor] = useState('#004F5F');
  const [colors, setColors] = useState([
    { theme: 'Default', colorName: 'darkGreen', background: '#004F5F' },
    { theme: 'Default', colorName: 'darkPurple', background: '#323B6E' },
    { theme: 'Default', colorName: 'black', background: '#000000' },
    { theme: 'Default', colorName: 'green', background: '#008F64' },
    { theme: 'Default', colorName: 'yellow', background: '#E1A200' },
    { theme: 'Default', colorName: 'red', background: '#DD0D00' },
    { theme: 'Default', colorName: 'blue', background: '#0058AA' },
    { theme: 'Default', colorName: 'pink', background: '#DD009F' },
    { theme: 'Default', colorName: 'gray', background: '#616161' },
    { theme: 'Default', colorName: 'lightGreen', background: '#00E1D4' }
  ]);
  let CVclasses = [classes.CV];
  if (cvVisible) CVclasses.push(classes.Visible);

  const ColorRow1 = colors.filter((color, i) => i <= 4);
  const ColorRow2 = colors.filter((color, i) => i > 4);

  const getDataFromArray = (dataType, arr, getAll) => {
    let isName = false;
    if (
      dataType === 'name' ||
      dataType === 'position' ||
      dataType === 'email' ||
      dataType === 'phone' ||
      dataType === 'linkedin' ||
      dataType === 'facebook' ||
      dataType === 'location' ||
      dataType === 'photo' ||
      dataType === 'knowledge'
    ) {
      isName = true;
    }
    let result;
    if (getAll) {
      result = arr.map(item => item);
    }
    for (let i = 0; i <= arr.length - 1; i++) {
      if (dataType === arr[i].type && isName) {
        result = arr[i].name;
      }
      if (dataType === arr[i].type && dataType === 'company') {
        result = {
          name: arr[i].name,
          about: arr[i].about,
          beginningYear: arr[i].beginningYear,
          endingYear: arr[i].endingYear
        };
      }
      if (dataType === arr[i].type && dataType === 'education') {
        result = {
          name: arr[i].name,
          secondName: arr[i].secondName,
          beginningYear: arr[i].beginningYear,
          endingYear: arr[i].endingYear
        };
      }
    }
    console.log(isName);
    console.log(result);
    console.log(arr);
    console.log(dataType);
    return result;
  };

  const dataFilter = (data, types) => {
    const dataTypes = types;
    const filteredData = data.filter(item => {
      for (let i = 0; i <= dataTypes.length; i++) {
        let filtered = [];
        if (item.type === dataTypes[i]) {
          return (filtered = filtered.push(item));
        }
      }
    });
    return filteredData;
  };

  const probe = dataFilter(addedComponents, [
    'email',
    'phone',
    'location',
    'linkedin',
    'facebook'
  ]);
  const contactsBlockFirst = addedComponents.filter(item => {
    if (
      item.type === 'email' ||
      item.type === 'phone' ||
      item.type === 'location' ||
      item.type === 'linkedin' ||
      item.type === 'facebook'
    ) {
      return item;
    }
  });

  console.log(probe);

  return (
    <>
      <div className={CVclasses.join(' ')}>
        <div className={classes.Colors}>
          <p>Choose theme color</p>
          <div className={classes.ColorRow}>
            {ColorRow1.map((color, id) => {
              return (
                <div
                  key={id}
                  className={classes.Color}
                  style={{ background: color.background }}
                  onClick={() => setThemeColor(color.background)}
                ></div>
              );
            })}
          </div>
          <div className={classes.ColorRow}>
            {ColorRow2.map((color, id) => {
              return (
                <div
                  key={id}
                  className={classes.Color}
                  style={{ background: color.background }}
                  onClick={() => setThemeColor(color.background)}
                ></div>
              );
            })}
          </div>
        </div>
        <div className={classes.CVBody}>
          <div className={classes.CVHeader} style={{ background: themeColor }}>
            <div
              className={classes.Photo}
              style={{
                backgroundImage: `url(${getDataFromArray(
                  'photo',
                  addedComponents
                )})`
              }}
            ></div>
            <div className={classes.Contacts}>
              <p className={classes.Name}>
                {getDataFromArray('name', addedComponents)}
              </p>
              <p className={classes.Position}>
                {getDataFromArray('position', addedComponents)}
              </p>
              <div className={classes.ContactsBlock}></div>
              <div className={classes.ContactsBlock}></div>
            </div>
          </div>
          <div
            className={classes.Skills}
            style={{ background: themeColor }}
          ></div>
          <div className={classes.OtherData}></div>
        </div>
        <div className={classes.SkipAndSave}>
          <div className={classes.Top}>
            <ReactSVG
              src={close}
              className={classes.Close}
              onClick={() => setCvVisible(false)}
            />
          </div>
          <div className={classes.Bottom}>
            <Btn text="save" />
          </div>
        </div>
      </div>
    </>
  );
};
