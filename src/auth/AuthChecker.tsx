import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      signInWithPopup(auth, Providers.google)
        .then(() => {
          navigate('/dashboard');
        })
        .catch(() => {
          navigate('/'); // Assuming you have a login route
        });
    }
  }, [navigate]);

  if (!auth.currentUser) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
};

export default AuthChecker;