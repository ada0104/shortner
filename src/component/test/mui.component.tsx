import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
      <div className="text-blue-500">tailwind</div>
    </>
  );
};

export default MUI;
