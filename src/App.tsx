import { Routes, Route } from 'react-router-dom';
import Root from './component/util/root.component';
import Expenses from './container/expenses.container';
import Invoices from './container/invoices.container';
import MUI from './component/test/mui.component';
import { environment } from './core/environment';

const App = () => {
  return (
    <Root>
      <Routes>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/" element={<MUI />} />
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
