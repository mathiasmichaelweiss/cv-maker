import classes from './CvComponent.module.css';
import { ReactSVG } from 'react-svg';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';

export const CvComponent = ({
  svg,
  title,
  description,
  addComponent,
  isAddOnce,
  isAdded,
  component,
  openComponent,
  isClosed
}) => {
  const [beginningYear, setBeginningYear] = useState('');
  const [endingYear, setEndingYear] = useState('');

  const [years, setYears] = useState({
    beginningYear: '',
    endingYear: ''
  });
  /* console.log(years.map(year => (year = year.beginningYear = 1))); */

  const addYear = (obj, isBeginnig, selectedYear) => {
    if (isBeginnig) obj.beginningYear = selectedYear;
    if (!isBeginnig) obj.endingYear = selectedYear;
  };
  console.log(years);

  let componentContainerClasses = [classes.CvComponent];
  let plusBtnClasses = [classes.Plus];

  if (!isClosed) {
    componentContainerClasses.push(classes.Active);
  }

  if (isClosed && componentContainerClasses.length >= 2) {
    componentContainerClasses = [classes.CvComponent];
  }

  if (isAddOnce && isAdded) {
    componentContainerClasses.push(classes.Added);
    plusBtnClasses.push(classes.DisabledBtn);
  }

  const inputType = title.split(' ')[0].toLowerCase();

  const addComponentToList = (e, svg, title, component) => {
    e.preventDefault();
    console.log('es geht');
  };

  return (
    <>
      {isAddOnce && isAdded ? (
        <div className={componentContainerClasses.join(' ')}>
          <ReactSVG src={svg} />
          <div className={classes.TextContent}>
            <p className={classes.Title}>{title}</p>
            <p className={classes.Description}>{description}</p>
          </div>
          <div className={plusBtnClasses.join(' ')}>+</div>
        </div>
      ) : (
        <>
          {isClosed ? (
            <div className={componentContainerClasses.join(' ')}>
              <ReactSVG src={svg} />
              <div className={classes.TextContent}>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Description}>{description}</p>
              </div>
              <div
                className={plusBtnClasses.join(' ')}
                onClick={() => openComponent(component)}
              >
                +
              </div>
            </div>
          ) : (
            <div className={componentContainerClasses.join(' ')}>
              <ReactSVG src={svg} />
              <div className={classes.TextContent}>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Description}>{description}</p>
              </div>
              <div className={classes.OpenedComponent}>
                <form action="submit" onSubmit={e => addComponentToList(e)}>
                  {inputType === 'name' ? (
                    <>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </>
                  ) : inputType === 'email' ? (
                    <>
                      <input type="email" name="email" placeholder="Email" />
                    </>
                  ) : inputType === 'phone' ? (
                    <>
                      <input
                        type="phone"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </>
                  ) : inputType === 'linkedin' ? (
                    <>
                      <input
                        type="text"
                        name="linkedin"
                        placeholder="LinkedIN URL"
                      />
                    </>
                  ) : inputType === 'facebook' ? (
                    <>
                      <input
                        type="text"
                        name="facebook"
                        placeholder="Facebook URL"
                      />
                    </>
                  ) : inputType === 'company' ? (
                    <>
                      <div className={classes.Year}>
                        <p>Company name</p>
                        <input
                          type="text"
                          name="company-name"
                          id=""
                          className={classes.CompanyNameInput}
                        />
                        <div className={classes.YearItem}>
                          <p>beginningYear (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date =>
                              addYear(years, false, date.year())
                            }
                          />
                        </div>

                        <div className={classes.YearItem}>
                          <p>Ending (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date => addYear(years, true, date.year())}
                          />
                        </div>
                        <p>About</p>
                        <input
                          type="textarea"
                          name="about-company"
                          className={classes.TextArea}
                        />
                      </div>
                    </>
                  ) : inputType === 'location' ? (
                    <>
                      <input
                        type="text"
                        name="location"
                        placeholder="Your location"
                      />
                    </>
                  ) : inputType === 'photo' ? (
                    <>
                      <input type="text" name="photo" placeholder="Photo URL" />
                    </>
                  ) : inputType === 'knowledge' ? (
                    <>
                      <input
                        type="text"
                        name="knowledge"
                        placeholder="Your skill"
                      />
                    </>
                  ) : inputType === 'education' ? (
                    <>
                      <div className={classes.Year}>
                        <p>Place of study</p>
                        <input
                          type="text"
                          name="education"
                          id=""
                          className={classes.CompanyNameInput}
                        />
                        <p>Course / Education</p>
                        <input
                          type="text"
                          name="course"
                          id=""
                          className={classes.CompanyNameInput}
                        />
                        <div className={classes.YearItem}>
                          <p>beginningYear (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date =>
                              addYear(years, false, date.year())
                            }
                          />
                        </div>

                        <div className={classes.YearItem}>
                          <p>Ending (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date => addYear(years, true, date.year())}
                          />
                        </div>
                      </div>
                    </>
                  ) : null}
                  <button
                    type="submit"
                    className={classes.PlusBotton}
                    onClick={() => addComponent(svg, title, component)}
                  >
                    +
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
