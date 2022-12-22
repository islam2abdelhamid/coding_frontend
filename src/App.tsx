import { MainLayout } from 'components/MainLayout';
import { ErrorPage, Home } from 'pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
