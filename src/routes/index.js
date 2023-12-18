// Import Page Components
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignupPage";
import SignInPage from "../pages/SigninPage";
import PatientDashboard from "../pages/PatientDashboard";
import TherapistDashboard from "../pages/TherapistDashboard";
<<<<<<< HEAD
import PatientProfile from "../pages/PatientProfile";
=======
import AdminDashboard from "../pages/AdminDashboard";
>>>>>>> main

// Import Layout Components
import HeaderFooterLayout from "../components/Layout/HeaderFooterLayout";
import PatientLayout from "../components/Layout/PatientLayout";
import TherapistLayout from "../components/Layout/TherapistLayout";
import TherapistSignup from "../pages/TherapistSignup";
import BookingPage from '../pages/BookingPage';
import TherapistPage from "../pages/TherapistPage"
import AdminLayout from "../components/Layout/AdminLayout";

// Public Routes
const publicRoutes = [
  { path: "/", component: LandingPage, layout: HeaderFooterLayout },
  { path: "/signup", component: SignUpPage, layout: HeaderFooterLayout },
  { path: "/signuptherapist", component: TherapistSignup, layout: HeaderFooterLayout },

  { path: "/signin", component: SignInPage, layout: HeaderFooterLayout },

  // Private routes actually 
  {
    path: "/patient/dashboard",
    component: PatientDashboard,
    layout: PatientLayout,
  },
  {
    path: "therapist/dashboard",
    component: TherapistDashboard,
    layout: TherapistLayout,
  },
  {
<<<<<<< HEAD
    path: '/patientprofile',
    component: PatientProfile,
=======
    path: "/admin/dashboard",
    component: AdminDashboard,
    layout: AdminLayout,
  },
  {
    path: "patient/find",
    component: TherapistPage,
    layout: PatientLayout
  },
  {
    path: "patient/booking/:id",
    component: BookingPage,
>>>>>>> main
    layout: PatientLayout
  }
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
