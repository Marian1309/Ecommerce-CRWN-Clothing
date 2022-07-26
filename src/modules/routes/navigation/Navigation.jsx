import { Outlet, Link } from 'react-router-dom';

import { useContext } from 'react';

import { UserContext } from '../../contexts/User.context';
import { signOutUser } from '../../utils/firebase/Firebase';

import './Navigation.scss';

import Logo from '../../assets/images/crown.svg';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className='navigation'>
        <Link className='nav-link' to='/'>
          <img src={Logo} alt='Logo' className='logo-container' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export { Navigation };
