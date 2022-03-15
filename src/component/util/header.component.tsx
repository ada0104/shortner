import { Link } from '@mui/material';

const Header = () => {
  const style = {
    borderBottom: 'solid 1px',
  };

  return (
    <div>
      <nav style={style}>
        <Link className="m-8" underline="hover" href="/test/index">
          Test Index
        </Link>
        <Link className="m-8" underline="hover" href="/test/a">
          Test A
        </Link>
        <Link className="m-8" underline="hover" href="/test/b">
          Test B
        </Link>
      </nav>
    </div>
  );
};

export default Header;
