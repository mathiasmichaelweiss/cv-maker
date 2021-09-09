import classes from './Header.module.css';
import { ReactSVG } from 'react-svg';
import Logo from './icons/Logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={classes.Header}>
      <Link to="/">
        <ReactSVG src={Logo} />
      </Link>
    </div>
  );
};
