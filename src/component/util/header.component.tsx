import { Link } from 'react-router-dom';

const Header = () => {
  const style = {
    borderBottom: 'solid 1px',
    paddingBottom: '1rem',
  };

  return (
    <div>
      <nav style={style}>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
};

export default Header;
