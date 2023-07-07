import logo from './logo.svg';

import { RouterProvider } from 'react-router-dom';
import router from './component/Route/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
     <RouterProvider router={router} />
     <Toaster></Toaster>
    </div>
  );
}

export default App;
