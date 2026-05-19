import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import MediaDetails from './pages/MediaDetails';
import NotFound from './pages/NotFound';
import LayoutRoute from './LayoutRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'search', element: <Search /> },
      { path: 'movie/:id', element: <MediaDetails type="movie" /> },
      { path: 'tv/:id', element: <MediaDetails type="tv" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
