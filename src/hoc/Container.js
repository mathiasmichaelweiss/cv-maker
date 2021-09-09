import classes from './Container.module.css';
import { Home } from '../scenes/Home/Home';
import { Header } from '../components/Header/Header';
import { CvConstructor } from '../scenes/CvConstructor/CvConstructor';
import { Switch, Route } from 'react-router-dom';

export const Container = () => {
  return (
    <div className={classes.Container}>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/cv-constructor" component={CvConstructor} />
    </div>
  );
};
