import logo from './logo.svg';

import { RouterProvider } from 'react-router-dom';
import router from './component/Route/Router';

function App() {
  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
