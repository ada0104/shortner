import { Routes, Route } from 'react-router-dom';
import Root from './component/util/root.component';
import Expenses from './container/expenses.container';
import Invoices from './container/invoices.container';
import { environment } from './core/environment';

const App = () => {
  return (
    <Root>
      <Routes>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "'1rem'" }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Root>
  );
};

export default App;
