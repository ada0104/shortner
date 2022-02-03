import { Routes, Route } from 'react-router-dom';
import Provider from './component/util/provider.component';
import Expenses from './container/expenses.container';
import Invoices from './container/invoices.container';

const App = () => (
  <Provider>
    <Routes>
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route
        path="*"
        element={
          <main style={{ padding: "'1rem'" }}>
            <p>There is nothing here!</p>
          </main>
        }
      />
    </Routes>
  </Provider>
);

export default App;
