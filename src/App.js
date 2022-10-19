
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { hotelRouter } from './Route/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={hotelRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
