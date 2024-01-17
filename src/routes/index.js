// Import Page Components
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignupPage";
import SignInPage from "../pages/SigninPage";
import PatientDashboard from "../pages/PatientDashboard";
import TherapistDashboard from "../pages/TherapistDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import CheckoutPage from "../pages/CheckoutPage";
import AdminApointment from "../pages/AdminAppointment"

// Import Layout Components
import HeaderFooterLayout from "../components/Layout/HeaderFooterLayout";
import PatientLayout from "../components/Layout/PatientLayout";
import TherapistLayout from "../components/Layout/TherapistLayout";
import TherapistSignup from "../pages/TherapistSignup";
import BookingPage from "../pages/BookingPage";
import TherapistPage from "../pages/TherapistPage";
import AdminLayout from "../components/Layout/AdminLayout";
import TherapistMedicalRecord from "../pages/TherapistMedicalRecord";
import TherapistProfile from "../pages/TherapistProfile";
import PatientViewTherapistProfile from "../pages/PatientViewTherapistProfile";
import TherapistSchedule from "../pages/TherapistSchedule";
import TherapistAppointment from "../pages/TherapistAppointment";
import PatientMedicalRecord from "../pages/PatientMedicalRecord";
import PatientAppointment from "../pages/PatientAppointment";

// Public Routes
const publicRoutes = [
  { path: "/", component: LandingPage, layout: HeaderFooterLayout },
  { path: "/signup", component: SignUpPage, layout: HeaderFooterLayout },
  {
    path: "/signuptherapist",
    component: TherapistSignup,
    layout: HeaderFooterLayout,
  },

  { path: "/signin", component: SignInPage, layout: HeaderFooterLayout },
  {
    path: "/patient/dashboard",
    component: PatientDashboard,
    layout: PatientLayout,
  },
  {
    path: "/patient/appointments",
    component: PatientAppointment,
    layout: PatientLayout,
  },
  {
    path: "/therapist/dashboard",
    component: TherapistDashboard,
    layout: TherapistLayout,
  },
  {
    path: "therapist/medicalrecord/create",
    component: TherapistMedicalRecord,
    layout: TherapistLayout
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
    path: "/patient/booking",
    component: TherapistPage,
    layout: PatientLayout,
  },
  {
    path: "/patient/booking/:id",
    component: BookingPage,
    layout: PatientLayout
  },
  {
    path: "patient/therapistProfile",
    component: PatientViewTherapistProfile,
    layout: PatientLayout
  },
  {

    path: "/patient/checkout",
    component: CheckoutPage,
    layout: PatientLayout,
  },
  {
    path: "/therapist/schedule",
    component: TherapistSchedule,
    layout: TherapistLayout
  },
  {
    path: "/therapist/appointments",
    component: TherapistAppointment,
    layout: TherapistLayout
  },
  {
    path: "/admin/appointments",
    component: AdminApointment,
    layout: AdminLayout
  },
  {
    path: "patient/medicalrecord/",
    component: PatientMedicalRecord,
    layout: PatientLayout
  }
  
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
