import Home from '../Components/Pages/Home/Home';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Components/MainLayout/MainLayout';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyAddedVisas from '../Components/MyAddedVisas/MyAddedVisas';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import ErrorPage from '../Components/Error/ErrorPage';
import { Helmet } from 'react-helmet-async';
import AddVisa from '../Components/AddVisa/AddVisa';
import AllVisas from '../Components/AllVisas/AllVisas';
import VisaDetails from '../Components/VisaDetails/VisaDetails';
import VisaApplications from '../Components/VisaApplications/VisaApplications';
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs';

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout />
        ),
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Home | Sunflower VISA Navigator</title>
                            <meta name="description" content="Welcome to Sunflower VISA Navigator, your one-stop solution for all visa-related services!" />
                        </Helmet>
                        <Home />
                    </>
                )
            },
            {
                path: '/AllVisas',
                element: (
                    <>
                        <Helmet>
                            <title>All Visas | Sunflower VISA Navigator</title>
                            <meta name="description" content="Explore a wide range of visas available for application. Start your visa journey here!" />
                        </Helmet>
                        <AllVisas />
                    </>
                )
            },
            {

                path: "/visa-details/:id",
                element: (
                    <PrivateRoute>
                        <Helmet>
                            <title>Visa Details | Sunflower VISA Navigator</title>
                            <meta name="description" content="Get detailed information about a specific visa. Login required to access visa details." />
                        </Helmet>
                        <VisaDetails />
                    </PrivateRoute>
                ),

            },
            {
                path: '/addVisa',
                element: (
                    <PrivateRoute>
                        <Helmet>
                            <title>Add Visa | Sunflower VISA Navigator</title>
                            <meta name="description" content="Add your own visa offerings to the platform securely and easily. Login required." />
                        </Helmet>
                        <AddVisa />
                    </PrivateRoute>
                )
            },
            {
                path: '/MyAddedVisas',
                element: (
                    <>
                        <PrivateRoute>
                            <Helmet>
                                <title>My Added Visas | Sunflower VISA Navigator</title>
                                <meta name="description" content="View and manage visas you have added to the platform. Login required." />
                            </Helmet>
                            <MyAddedVisas />
                        </PrivateRoute>
                    </>
                )
            },
            {
                path: '/visa-applications',
                element: (
                    <PrivateRoute>
                        <Helmet>
                            <title>Visa Applications | Sunflower VISA Navigator</title>
                            <meta name="description" content="Track your visa applications and stay updated on their status. Login required." />
                        </Helmet>
                        <VisaApplications />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: (
                    <>
                        <Helmet>
                            <title>Login | Sunflower VISA Navigator</title>
                            <meta name="description" content="Login to your Sunflower VISA Navigator account to access exclusive features." />
                        </Helmet>
                        <Login />
                    </>
                )
            },
            {
                path: "/forgot-password",
                element: (
                    <>
                        <Helmet>
                            <title>Forgot Password | Sunflower VISA Navigator</title>
                            <meta name="description" content="Reset your password securely to regain access to your Sunflower VISA Navigator account." />
                        </Helmet>
                        <ForgotPassword />
                    </>
                )
            },
            {
                path: '/register',
                element: (
                    <>
                        <Helmet>
                            <title>Register | Sunflower VISA Navigator</title>
                            <meta name="description" content="Create an account with Sunflower VISA Navigator to start your visa journey today!" />
                        </Helmet>
                        <Register />
                    </>
                )
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            }

        ]
    },
    {
        path: "*",
        element: (
            <>
                <ErrorPage />
                <Helmet>
                    <title>404 Not Found | Sunflower VISA Navigator</title>
                    <meta name="description" content="The page you are looking for does not exist. Return to the homepage." />
                </Helmet>
            </>
        )
    },
]);
