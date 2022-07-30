import { Button } from '@mui/material';

// image
import LoginLogo from '@app/assets/loginlogo.svg';

const Password = () => {
  return (
    <>
      <div className="accountBlock">
        <img className="logo" src={LoginLogo} alt="" />
        <p className="welcome">修改密碼</p>
        <div className="accountForm">
          <label htmlFor="password">
            新密碼
            <br />
            <input type="password" id="password" />
          </label>
          <label htmlFor="password">
            重複確認新密碼
            <br />
            <input type="password" id="password" />
          </label>
          <Button type="submit" className="submitEmail">
            修改為新密碼
          </Button>
        </div>
      </div>
    </>
  );
};

export default Password;
