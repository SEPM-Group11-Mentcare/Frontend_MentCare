// Import Page Components
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignupPage";
import SignInPage from "../pages/SigninPage";
import PatientDashboard from "../pages/PatientDashboard";
import TherapistDashboard from "../pages/TherapistDashboard";
import PatientProfile from "../pages/PatientProfile";
import AdminDashboard from "../pages/AdminDashboard";
import PatientJournal from "../pages/PatientJournal";
import PatientJournalList from "../pages/PatientJournalList";
import CheckoutPage from "../pages/CheckoutPage";
import AdminApointment from "../pages/AdminAppointment";
import PatientMedicalRecordList from "../pages/PatientMedicalRecordList";
import BookingPage from "../pages/BookingPage";
import TherapistPage from "../pages/TherapistList";
import AdminLayout from "../components/Layout/AdminLayout";
import TherapistMedicalRecord from "../pages/TherapistMedicalRecord";
import TherapistProfile from "../pages/TherapistProfile";
import PatientViewTherapistProfile from "../pages/PatientViewTherapistProfile";
import TherapistSchedule from "../pages/TherapistSchedule";
import TherapistAppointment from "../pages/TherapistAppointment";
import PatientMedicalRecord from "../pages/PatientMedicalRecord";
import PatientAppointment from "../pages/PatientAppointment";
import PatientRecordAccessList from "../pages/PatientRecordAccessList";
import PatientMyTherapistRoom from "../pages/PatientMyTherapistRoom";
import PatientVideoCall from "../pages/PatientVideoCall";

// Import Layout Components
import HeaderFooterLayout from "../components/Layout/HeaderFooterLayout";
import PatientLayout from "../components/Layout/PatientLayout";
import TherapistLayout from "../components/Layout/TherapistLayout";
import TherapistSignup from "../pages/TherapistSignup";
import MedicalRecordListTherapist from "../pages/MedicalRecordListTherapist";
import PatientList from "../pages/PatientList";

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
    path: "/therapist/dashboard",
    component: TherapistDashboard,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/patients",
    component: PatientList,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/records/:id",
    component: MedicalRecordListTherapist,
    layout: TherapistLayout
  },
  {
    path: "therapist/records/:patientid/:id",
    component: PatientMedicalRecord,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/medicalrecord/create",
    component: TherapistMedicalRecord,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/profile",
    component: TherapistProfile,
    layout: TherapistLayout,
  },
  {
    path: "/admin/therapistlist",
    component: AdminDashboard,
    layout: AdminLayout,
  },
  {
    path: "/therapist/schedule",
    component: TherapistSchedule,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/appointments",
    component: TherapistAppointment,
    layout: TherapistLayout,
  },
  {
    path: "/admin/appointments",
    component: AdminApointment,
    layout: AdminLayout,
  },
];

// Private Routes
const privateRoutes = [
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
    path: "/patient/profile",
    component: PatientProfile,
    layout: PatientLayout,
  },
  {
    path: "/patient/booking",
    component: TherapistPage,
    layout: PatientLayout,
  },
  {
    path: "/patient/journals/:journalID",
    component: PatientJournal,
    layout: PatientLayout,
  },
  {
    path: "/patient/journals",
    component: PatientJournalList,
    layout: PatientLayout,
  },
  {
    path: "/patient/booking/:id",
    component: BookingPage,
    layout: PatientLayout,
  },
  {
    path: "/patient/therapistprofile/:id",
    component: PatientViewTherapistProfile,
    layout: PatientLayout,
  },
  {
    path: "/patient/checkout",
    component: CheckoutPage,
    layout: PatientLayout,
  },
  {
    path: "patient/records/:id",
    component: PatientMedicalRecord,
    layout: PatientLayout,
  },
  {
    path: "/patient/records",
    component: PatientMedicalRecordList,
    layout: PatientLayout,
  },
  {
    path: "/patient/recordaccesslist",
    component: PatientRecordAccessList,
    layout: PatientLayout,
  },
  {
    path: "patient/rooms",
    component: PatientMyTherapistRoom,
    layout: PatientLayout,
  },
  {
    path: "videocall/",
    component: PatientVideoCall,
    layout: PatientLayout,
  },
];

export { publicRoutes, privateRoutes };
