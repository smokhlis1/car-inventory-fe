
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';
import Button from './Button';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const signOutOnClick = () => {
    signOut(auth);
    window.location.reload();
  };

  const signInOnClick = async () => {
    try {
      await signInWithPopup(auth, Providers.google);
      window.location.reload();
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const dropDown = () => {
    setIsVisible(!isVisible);
  };

  const clicked = () => {
    setIsVisible(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="text-black font-semibold text-2xl tracking-tight">
          Car Inventory
        </Link>
      </div>
      <div className="block">
        <button
          onClick={dropDown}
          className="flex items-center px-3 py-2 text-white border rounded border-red-300 hover:text hover:border-black"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {isVisible && (
        <div className="w-full block flex-grow items-center">
          <div className="text-sm lg:flex-grow">
            <Button className="p-3 pt-1 m-5 bg-red-400 justify-content hover:bg-black hover:text-red-500 content-center rounded">
              <Link to="/" onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0">
                Home
              </Link>
            </Button>
            <Button className="p-3 pt-1 m-5 bg-red-400 justify-content hover:bg-black hover:text-red-500 content-center rounded">
              <Link to="/about" onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0">
                About
              </Link>
            </Button>
            <Button className="p-3 pt-1 m-5 bg-red-400 justify-content hover:bg-black hover:text-red-500 content-center rounded">
              <Link to="/dashboard" onClick={clicked} className="flex place-items-center mt-4 lg:inline-block lg:mt-0">
                Dashboard
              </Link>
            </Button>
            {!auth.currentUser ? (
              <Button className="p-3 m-5 bg-yellow-300 justify-center rounded-lg">
                <Link
                  to="/"
                  onClick={signInOnClick}
                  className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                >
                  Login
                </Link>
              </Button>
            ) : (
              <Button className="p-3 m-5 bg-yellow-300 justify-center rounded-lg">
                <Link
                  to="/"
                  onClick={signOutOnClick}
                  className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                >
                  Sign Out
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;