import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Page/Homepage';
import Homepage_Admin from './component/Page/Homepage_Admin/HomepageAd';
import Login from './component/Page/Login';
import ViewBookingUser from './component/Page/ViewBooking_User';
import Footer from './component/Footer';
import Header from './component/Header';
import Loader from './component/Loader/Loader';
import ViewBookingAdmin from './component/Page/ViewBooking_Admin/ViewBookingAdmin';
import ViewUserAdmin from './component/Page/ViewUser_Admin';
import Signup from './component/Page/Signup/Signup';
import HomepageBlog_admin from './component/Page/HomepageBlog_admin/HomepageBlog_admin';
import ViewUserProfile_User from './component/Page/ViewUserProfile_User';


// Public routes
const publicRoutes = [
  { path: '/home', element: <Homepage /> },
  { path: '/', element: <Login /> },
  { path: '/home/viewBookingUser/:user_id', element: <ViewBookingUser/>},
  { path: '/signup', element: <Signup/>},
  { path: '/home/ViewProfile/:user_id', element: <ViewUserProfile_User/>}
];

// Private routes
const privateRoutes = [
  { path: '/homeAd/viewBooking', element: <ViewBookingAdmin /> },
  { path: '/homeAd', element: <Homepage_Admin /> },
  { path: '/homeAd/viewUser', element: <ViewUserAdmin /> },
  { path: '/homeAd/yourBlog', element: <HomepageBlog_admin /> }

];

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const currentRole = localStorage.getItem('currentRole');
  //   if (currentRole === 'admin') {
  //     setIsAdmin(true);
  //   }

  //   setLoading(false);
  // }, []);

  useEffect(() => {
    // Simulate data fetching delay (replace with your actual data fetching logic)
    const fetchData = async () => {
      // Your data fetching logic here

      // Simulate a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false once data is fetched
      setLoading(false);
    };

    fetchData();

    // Check admin role
    const currentRole = localStorage.getItem('currentRole');
    if (currentRole === 'admin') {
      setIsAdmin(true);
    }
  }, []);


  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                isAdmin ? (
                  route.element
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

