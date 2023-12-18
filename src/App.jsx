import './app.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/about';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Add from './pages/add/Add';
import Orders from './pages/orders/Orders';
import Careers from './pages/careers/career';
import Clothing from './pages/clothing/clothing';
import Design from './pages/design/design';
import Digital from './pages/digital/digital';
import Graphic from './pages/graphic/graphic';
import Marketing from './pages/marketing/marketing';
import Music from './pages/music/music';
import Product from './pages/product/product';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import MyGigs from './pages/myGigs/MyGigs';
import Team from './pages/team/team';
import Spiritual from './pages/spiritual/spiritual';
import Work from './pages/work/work';
import Division from './pages/division/division';
import Technology from './pages/technology/technology';
import Video from './pages/video/video';
import Audio from './pages/audio/audio';
import Song from './pages/song/song';
import Program from './pages/program/program';
import Virtual from './pages/virtual/virtual';
import Fashion from './pages/fashion/fashion';
import Media from './pages/media/media';

import Pay from './pages/pay/Pay';
import Success from './pages/success/Success';

function App() {
  const queryClient = new QueryClient();

  const Layout = () => (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>

      {/* <h1> Lol! keep calm !!Working on the updates</h1> */}
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/myGigs',
          element: <MyGigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/pay/:id',
          element: <Pay />,
        },
        {
          path: '/success',
          element: <Success />,
        },
        {
          path: '/team',
          element: <Team />,
        },
        {
          path: '/spiritual',
          element: <Spiritual />,
        },
        {
          path: '/work',
          element: <Work />,
        },
        {
          path: '/division',
          element: <Division />,
        },
        {
          path: '/career',
          element: <Careers />,
        },
        {
          path: '/clothing',
          element: <Clothing />,
        },
        {
          path: '/design',
          element: <Design />,
        },
        {
          path: '/product',
          element: <Product />,
        },
        {
          path: '/music',
          element: <Music />,
        },
        {
          path: '/digital',
          element: <Digital />,
        },
        {
          path: '/marketing',
          element: <Marketing />,
        },
        {
          path: '/graphic',
          element: <Graphic />,
        },
        {
          path: '/technology',
          element: <Technology />,
        },
        {
          path: '/video',
          element: <Video />,
        },
        {
          path: '/audio',
          element: <Audio />,
        },
        {
          path: '/song',
          element: <Song />,
        },
        {
          path: '/program',
          element: <Program />,
        },
        {
          path: '/virtual',
          element: <Virtual />,
        },
        {
          path: '/fashion',
          element: <Fashion />,
        },
        {
          path: '/media',
          element: <Media />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
