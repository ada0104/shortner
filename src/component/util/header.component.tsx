import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = (props) => {
  const style = {
    borderBottom: 'solid 1px',
  };

  return (
    <div>
      <nav style={style}>這裡是Header</nav>
    </div>
  );
};

export default Header;
