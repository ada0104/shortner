import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import GoogleLoginBtn from '../auth/google-login.component';

const MUI = () => {
  const nav = useNavigate();

  const navigate = () => {
    nav('/test/index');
  };

  return (
    <>
      <Button variant="contained" onClick={navigate}>
        你好，世界
      </Button>
      <GoogleLoginBtn />
      <div className="text-blue-500">tailwind</div>
      <i className="ri-home-2-fill text-4xl" />
      <i className="ri-home-2-fill text-4xl hover:text-blue-800" />
      <i className="ri-home-2-fill text-4xl active:text-violet-800" />
    </>
  );
};

export default MUI;
