import Home from '../Components/Pages/Home/Home';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Components/MainLayout/MainLayout';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyAddedVisas from '../Components/MyAddedVisas/MyAddedVisas';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import UpdateProfile from '../Components/UpdateProfile/UpdateProfile ';
import ErrorPage from '../Components/Error/ErrorPage';
import { Helmet } from 'react-helmet-async';
import AddVisa from '../Components/AddVisa/AddVisa';
import AllVisas from '../Components/AllVisas/AllVisas';
import VisaDetails from '../Components/VisaDetails/VisaDetails';
import VisaApplications from '../Components/VisaApplications/VisaApplications';

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
                        </Helmet>
                        <VisaApplications />
                    </PrivateRoute>
                )
            },
            {
                path: "/update-profile",
                element: (
                    <>
                        <Helmet>
                        </Helmet>
                        <UpdateProfile />
                    </>
                )
            },
            {
                path: '/login',
                element: (
                    <>
                        <Helmet>
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
                        </Helmet>
                        <Register />
                    </>
                )
            },

        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    },
]);
