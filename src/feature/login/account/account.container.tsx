import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './account.container.css';

// image
import LoginLogo from '@app/assets/loginlogo.svg';

const Account = () => {
  return (
    <>
      <div className="accountBlock">
        <img className="logo" src={LoginLogo} alt="" />
        <p className="welcome">歡迎使用SHORTNER</p>
        <div className="accountHr"></div>
        <div className="accountForm">
          <label htmlFor="email">
            電子信箱
            <br />
            <input type="email" id="email" />
          </label>
          <br />
          <label htmlFor="password">
            密碼
            <br />
            <input type="password" id="password" />
          </label>
          <Button type="submit" className="submitEmail">
            發送Email驗證連結
          </Button>
          <div className="accountLink">
            <div className="field">
              <Link to="/login/index">回到登入頁面</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
