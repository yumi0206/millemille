
import { GoogleLogin } from '@/lib/firebase';
import useStore from '../store/useStore';

const Login = () => {
  const updateUser = useStore((state) => state.updateUser);

  const handleGoogleLogin = async () => {
    try {
      const user = await GoogleLogin();
      updateUser(true, user.email, user.displayName, user.photoURL);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
};

export default Login;