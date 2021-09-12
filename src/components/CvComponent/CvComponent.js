import classes from './CvComponent.module.css';
import { ReactSVG } from 'react-svg';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useState, useEffect } from 'react';

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
  const [years, setYears] = useState({
    beginningYear: '',
    endingYear: ''
  });

  const [preparingComponentToAdd, setPreparingComponentToAdd] = useState({
    name: '',
    secondName: '',
    beginningYear: years.beginningYear,
    endingYear: years.endingYear,
    about: '',
    type: ''
  });

  const [maxTextArea, setMaxTextArea] = useState(0);

  const textAreaCounter = e => {
    preparingComponentToAdd.about = e.target.value;
    setMaxTextArea(preparingComponentToAdd.about.length);
  };

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

  const addComponentToList = (e, svg, title, component, type) => {
    e.preventDefault();
    if (inputType === 'name') {
      addComponent(
        svg,
        title.name + ' ' + title.secondName,
        component,
        type,
        title.secondName,
        title.beginningYear,
        title.endingYear,
        title.about
      );
    } else {
      addComponent(
        svg,
        title.name,
        component,
        type,
        title.secondName,
        title.beginningYear,
        title.endingYear,
        title.about
      );
    }
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
                <form
                  action="submit"
                  onSubmit={e =>
                    addComponentToList(
                      e,
                      svg,
                      preparingComponentToAdd,
                      component,
                      inputType
                    )
                  }
                >
                  {inputType === 'name' ? (
                    <>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={e =>
                          (preparingComponentToAdd.secondName = e.target.value)
                        }
                      />
                    </>
                  ) : inputType === 'position' ? (
                    <>
                      <input
                        type="text"
                        name="position"
                        placeholder="Your position"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
                      />
                    </>
                  ) : inputType === 'email' ? (
                    <>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
                      />
                    </>
                  ) : inputType === 'phone' ? (
                    <>
                      <input
                        type="phone"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
                      />
                    </>
                  ) : inputType === 'linkedin' ? (
                    <>
                      <input
                        type="text"
                        name="linkedin"
                        placeholder="LinkedIN URL"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
                      />
                    </>
                  ) : inputType === 'facebook' ? (
                    <>
                      <input
                        type="text"
                        name="facebook"
                        placeholder="Facebook URL"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
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
                          onChange={e =>
                            (preparingComponentToAdd.name = e.target.value)
                          }
                        />
                        <div className={classes.YearItem}>
                          <p>beginningYear (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date =>
                              (preparingComponentToAdd.beginningYear = date.year())
                            }
                          />
                        </div>
                        <div className={classes.YearItem}>
                          <p>Ending (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date =>
                              (preparingComponentToAdd.endingYear = date.year())
                            }
                          />
                        </div>
                        <p>About</p>
                        <div className={classes.TextAreaWrapper}>
                          <textarea
                            maxLength="280"
                            name="about-company"
                            className={classes.TextArea}
                            onChange={e => textAreaCounter(e)}
                          />
                          {maxTextArea === 280 ? (
                            <p className={classes.LimitRed}>
                              {maxTextArea} / 280
                            </p>
                          ) : (
                            <p className={classes.Limit}>{maxTextArea} / 280</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : inputType === 'location' ? (
                    <>
                      <input
                        type="text"
                        name="location"
                        placeholder="Your location"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
                      />
                    </>
                  ) : inputType === 'photo' ? (
                    <>
                      <input
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
                      />
                    </>
                  ) : inputType === 'knowledge' ? (
                    <>
                      <input
                        type="text"
                        name="knowledge"
                        placeholder="Your skill"
                        onChange={e =>
                          (preparingComponentToAdd.name = e.target.value)
                        }
                        style={{ width: '100%' }}
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
                          onChange={e =>
                            (preparingComponentToAdd.name = e.target.value)
                          }
                        />
                        <p>Course / Education</p>
                        <input
                          type="text"
                          name="course"
                          id=""
                          className={classes.CompanyNameInput}
                          onChange={e =>
                            (preparingComponentToAdd.secondName =
                              e.target.value)
                          }
                        />
                        <div className={classes.YearItem}>
                          <p>beginningYear (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date =>
                              (preparingComponentToAdd.beginningYear = date.year())
                            }
                          />
                        </div>

                        <div className={classes.YearItem}>
                          <p>Ending (year)</p>
                          <Datetime
                            dateFormat="YYYY"
                            onChange={date =>
                              (preparingComponentToAdd.endingYear = date.year())
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : null}
                  <button type="submit" className={classes.PlusBotton}>
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
