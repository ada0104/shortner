import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = (props) => {
  const style = {
    borderBottom: 'solid 1px',
  };

  return (
    <div>
      <nav style={style}>
        <Link className="m-8" to="/test/index">
          Test Index
        </Link>
        <Link className="m-8" to="/test/a">
          Test A
        </Link>
        <Link className="m-8" to="/test/b">
          Test B
        </Link>
        {/* <Link className="m-8" underline="hover" href="/test/index">
          Test Index
        </Link>
        <Link className="m-8" underline="hover" href="/test/a">
          Test A
        </Link>
        <Link className="m-8" underline="hover" href="/test/b">
          Test B
        </Link> */}
      </nav>
    </div>
  );
};

export default Header;
