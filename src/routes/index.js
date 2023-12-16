// Import Page Components
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignupPage";
import SignInPage from "../pages/SigninPage";
import PatientDashboard from "../pages/PatientDashboard";
import TherapistDashboard from "../pages/TherapistDashboard";
import PatientProfile from "../pages/PatientProfile";

// Import Layout Components
import HeaderFooterLayout from "../components/Layout/HeaderFooterLayout";
import PatientLayout from "../components/Layout/PatientLayout";
import TherapistLayout from "../components/Layout/TherapistLayout";

// Public Routes
const publicRoutes = [
  { path: "/", component: LandingPage, layout: HeaderFooterLayout },
  { path: "/signup", component: SignUpPage, layout: HeaderFooterLayout },
  { path: "/signin", component: SignInPage, layout: HeaderFooterLayout },

  // Private routes actually 
  {
    path: "/patientdashboard",
    component: PatientDashboard,
    layout: PatientLayout,
  },
  {
    path: "therapistdashboard",
    component: TherapistDashboard,
    layout: TherapistLayout,
  },
  {
    path: '/patientprofile',
    component: PatientProfile,
    layout: PatientLayout
  }
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
