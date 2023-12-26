// Import Page Components
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignupPage";
import SignInPage from "../pages/SigninPage";
import PatientDashboard from "../pages/PatientDashboard";
import TherapistDashboard from "../pages/TherapistDashboard";
import AdminDashboard from "../pages/AdminDashboard";

// Import Layout Components
import HeaderFooterLayout from "../components/Layout/HeaderFooterLayout";
import PatientLayout from "../components/Layout/PatientLayout";
import TherapistLayout from "../components/Layout/TherapistLayout";
import TherapistSignup from "../pages/TherapistSignup";
import BookingPage from '../pages/BookingPage';
import TherapistPage from "../pages/TherapistPage"
import AdminLayout from "../components/Layout/AdminLayout";
import TherapistProfile from "../pages/TherapistProfile";
import PatientViewTherapistProfile from "../pages/PatientViewTherapistProfile";

// Public Routes
const publicRoutes = [
  { path: "/", component: LandingPage, layout: HeaderFooterLayout },
  { path: "/signup", component: SignUpPage, layout: HeaderFooterLayout },
  { path: "/signuptherapist", component: TherapistSignup, layout: HeaderFooterLayout },

  { path: "/signin", component: SignInPage, layout: HeaderFooterLayout },
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
    path: "therapist/profile",
    component: TherapistProfile,
    layout: TherapistLayout,
  },
  {
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
    layout: PatientLayout
  },
  {
    path: "patient/therapistProfile",
    component: PatientViewTherapistProfile,
    layout: PatientLayout
  }
  
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
