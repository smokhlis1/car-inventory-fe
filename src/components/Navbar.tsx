import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const signOutOnClick = () => {
    logout();
    navigate('/');
  };

  const signInOnClick = () => {
    loginWithRedirect();
    navigate('/');
  };

  const dropDown = () => {
    setIsVisible(!isVisible);
  };

  const clicked = () => {
    setIsVisible(false);
  };

  const handleNavigation = (path:any) => {
    navigate(path);
    clicked();
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <button onClick={() => handleNavigation('/')} className="text-black font-semibold text-2xl tracking-tight">Car Inventory</button>
      </div>
      <div className="block">
        <button
          onClick={dropDown}
          className="flex items-center px-3 py-2 text-white border rounded border-blue-300 hover:text hover:border-black">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {isVisible && (
        <div className="w-full block flex-grow items-center">
          <div className="text-sm lg:flex-grow">
            <Button className="p-3 pt-1 m-5 bg-blue-400 justify-content hover:bg-black hover:text-blue-500 content-center rounded" onClick={() => handleNavigation('/')}>
              Home
            </Button>
            {isAuthenticated && (
            <Button className="p-3 pt-1 m-5 bg-blue-400 justify-content hover:bg-black hover:text-blue-500 content-center rounded" onClick={() => handleNavigation('/dashboard')}>
              Dashboard
            </Button>
            )}
            {!isAuthenticated ? (
              <Button className='p-3 pt-1 m-5 bg-blue-400 justify-center' onClick={signInOnClick}>
                Login
              </Button>
            ) : (
              <Button className='p-3 pt-1 m-5 bg-blue-400 justify-center' onClick={signOutOnClick}>
                Sign Out
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;