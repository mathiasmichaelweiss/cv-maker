import classes from './CV.module.css';
import { useState, useRef, useEffect } from 'react';
import { Btn } from '../../components/Btn/Btn';
import { useReactToPrint } from 'react-to-print';
import { ReactSVG } from 'react-svg';
import html2canvas from 'html2canvas';
import close from './icons/close.svg';

export const CV = ({
  setCvVisible,
  cvVisible,
  addedComponents,
  dataFilter
}) => {
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
  const componentRef = useRef();

  const pngCV = document.querySelector('.getCVBody');

  useEffect(() => {
    let toLocalStorage = getDataFromArray('photo', addedComponents);
    localStorage.setItem('photo', toLocalStorage);
  }, [addedComponents]);

  console.log(pngCV);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

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
    return result;
  };

  let contactsBlockFirst = dataFilter(addedComponents, [
    'email',
    'phone',
    'linkedin'
  ]);

  let contactsBlockSecond = dataFilter(addedComponents, ['facebook']);

  const CVBodyClasses = [classes.CVBody, 'getCVBody'];

  const capture = () => {
    html2canvas(document.body.querySelector('.getCVBody'), {
      useCORS: true,
      allowTaint: true
    }).then(function (canvas) {
      const modal = document.createElement('div');
      const description = document.createElement('p');
      description.style = 'color: #fff; width: 100%; text-align: center';
      description.textContent = 'right click  => Save Image As...';
      modal.classList.add('modal');
      modal.style =
        'display: flex; flex-wrap: wrap; justify-content: center; align-content: space-around; position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 1500; background: rgba(0,0,0, 0.7);';
      canvas.style = 'height: 802px; width: 634px';
      modal.append(description);
      modal.append(canvas);
      document.body.appendChild(modal);
    });
  };

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
        <div className={CVBodyClasses.join(' ')} ref={componentRef}>
          <div className={classes.CVHeader} style={{ background: themeColor }}>
            <div
              className={classes.Photo}
              style={{
                backgroundImage: `url(${localStorage.getItem('photo')})`
              }}
            ></div>
            <div className={classes.Contacts}>
              <p className={classes.Name}>
                {getDataFromArray('name', addedComponents)}
              </p>
              <p className={classes.Position}>
                {getDataFromArray('position', addedComponents)}
              </p>
              <div className={classes.ContactsBlock}>
                {contactsBlockFirst.length >= 1
                  ? contactsBlockFirst.map((item, i) => {
                      console.log(item);
                      if (
                        item.type !== 'linkedin' &&
                        item.type !== 'facebook'
                      ) {
                        return (
                          <a
                            key={Date.now() + i}
                            className={classes.ContactsBlockItem}
                          >
                            <ReactSVG
                              src={item.svg}
                              className={classes.CVIcon}
                            />
                            <p>{item.name}</p>
                          </a>
                        );
                      } else {
                        return (
                          <a
                            href={item.name}
                            target="_blank"
                            key={Date.now() + i}
                            className={classes.ContactsBlockItem}
                          >
                            <ReactSVG
                              src={item.svg}
                              className={classes.CVIcon}
                            />
                            <p>{item.name.split('').splice(24).join('')}</p>
                          </a>
                        );
                      }
                    })
                  : null}
              </div>
              <div className={classes.ContactsBlock}>
                {contactsBlockFirst.length >= 1
                  ? contactsBlockSecond.map((item, i) => {
                      return (
                        <a
                          href={item.name}
                          target="_blank"
                          key={Date.now() + i}
                          className={classes.ContactsBlockItem}
                        >
                          <ReactSVG src={item.svg} className={classes.CVIcon} />
                          <p>{item.name.split('').splice(24).join('')}</p>
                        </a>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className={classes.Skills} style={{ background: themeColor }}>
            {dataFilter(addedComponents, ['location']).map((item, i) => {
              return <p className={classes.Location}>{item.name}</p>;
            })}

            <p className={classes.SkillsTitle}>Skills</p>
            {dataFilter(addedComponents, ['knowledge']).map((item, i) => {
              return <p> - {item.name}</p>;
            })}
          </div>

          <div className={classes.OtherData}>
            <div className={classes.OtherDataItem}>
              <p className={classes.Title}>About</p>
              {dataFilter(addedComponents, ['about']).map((item, i) => {
                return <>{item.name}</>;
              })}
            </div>
            <div className={classes.OtherDataItem}>
              <p className={classes.Title}>Education</p>
              {dataFilter(addedComponents, ['education']).map((item, i) => {
                return (
                  <div className={classes.Education}>
                    <ReactSVG src={item.svg} />
                    <div className={classes.EducationDesription}>
                      <div className={classes.EducationName}>{item.name}</div>
                      <div className={classes.EducationName}>
                        {item.secondName}
                      </div>
                    </div>
                    <div className={classes.EducationYears}>
                      <div className={classes.Year}>{item.beginningYear}</div>
                      <span>&nbsp;/&nbsp;</span>
                      <div className={classes.Year}>{item.endingYear}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={classes.OtherDataItem}>
              <p className={classes.Title}>Experience</p>
              {dataFilter(addedComponents, ['company']).map((item, i) => {
                return (
                  <>
                    <div className={classes.Experience}>
                      <ReactSVG src={item.svg} />
                      <div className={classes.ExperienceDesription}>
                        <div className={classes.ExperienceName}>
                          {item.name}
                        </div>
                        <div className={classes.ExperienceYears}>
                          <div className={classes.Year}>
                            {item.beginningYear}
                          </div>
                          <span>&nbsp;/&nbsp;</span>
                          <div className={classes.Year}>{item.endingYear}</div>
                        </div>
                      </div>
                    </div>
                    <p style={{ marginTop: '0.5rem' }}>{item.about}</p>
                  </>
                );
              })}
            </div>
          </div>
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
            <Btn text="save" makeAction={() => capture()} />
          </div>
        </div>
      </div>
    </>
  );
};
