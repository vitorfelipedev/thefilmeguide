import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import SerieDetails from './pages/SerieDetails';
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
      { path: 'movie/:id', element: <MovieDetails /> },
      { path: 'serie/:id', element: <SerieDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
