// Import Page Components
import LandingPage from "../pages/public/LandingPage";
import SignUpPage from "../pages/public/SignupPage";
import SignInPage from "../pages/public/SigninPage";
import PatientProfile from "../pages/private/PatientProfile";
import PatientJournal from "../pages/private/PatientJournal";
import PatientJournalList from "../pages/private/PatientJournalList";
import CheckoutPage from "../pages/private/CheckoutPage";
import AdminApointment from "../pages/private/AdminAppointment";
import PatientMedicalRecordList from "../pages/private/PatientMedicalRecordList";
import BookingPage from "../pages/private/BookingPage";
import TherapistPage from "../pages/private/TherapistList";
import AdminLayout from "../components/Layout/AdminLayout";
import TherapistMedicalRecord from "../pages/private/TherapistMedicalRecord";
import TherapistProfile from "../pages/private/TherapistProfile";
import PatientViewTherapistProfile from "../pages/private/PatientViewTherapistProfile";
import TherapistSchedule from "../pages/private/TherapistSchedule";
import TherapistAppointment from "../pages/private/TherapistAppointment";
import PatientMedicalRecord from "../pages/private/PatientMedicalRecord";
import PatientAppointment from "../pages/private/PatientAppointment";
import PatientRecordAccessList from "../pages/private/PatientRecordAccessList";
import PatientVideoCall from "../pages/private/PatientVideoCall";
import TherapistVideoCall from "../pages/private/TherapistVideoCall";

// Import Layout Components
import HeaderFooterLayout from "../components/Layout/HeaderFooterLayout";
import PatientLayout from "../components/Layout/PatientLayout";
import TherapistLayout from "../components/Layout/TherapistLayout";
import TherapistSignup from "../pages/public/TherapistSignup";
import MedicalRecordListTherapist from "../pages/private/MedicalRecordListTherapist";
import PatientList from "../pages/private/PatientList";
import AdminTherapistList from "../pages/private/AdminTherapistList";

// Public Routes
const publicRoutes = [
  { path: "/", component: LandingPage, layout: HeaderFooterLayout },
  { path: "/signup", component: SignUpPage, layout: HeaderFooterLayout },
  {
    path: "/signuptherapist",
    component: TherapistSignup,
    layout: HeaderFooterLayout,
  },

  {
    path: "/signin",
    component: SignInPage,
    layout: HeaderFooterLayout
  },

];

// Private - Patient routes 
const patientRoutes = [
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
    path: "patient/videocall/:id",
    component: PatientVideoCall,
    layout: PatientLayout,
  },

];

// Private - Therapist routes
const therapistRoutes = [
  {
    path: "/therapist/patients",
    component: PatientList,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/records/:id",
    component: MedicalRecordListTherapist,
    layout: TherapistLayout,
  },
  {
    path: "therapist/records/:patientid/:id",
    component: PatientMedicalRecord,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/medicalrecord/create/:id",
    component: TherapistMedicalRecord,
    layout: TherapistLayout,
  },
  {
    path: "/therapist/profile",
    component: TherapistProfile,
    layout: TherapistLayout,
  },
  {
    path: "therapist/videocall/:id",
    component: TherapistVideoCall,
    layout: TherapistLayout,
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

];

const adminRoutes = [
  {
    path: "/admin/appointments",
    component: AdminApointment,
    layout: AdminLayout,
  },
  {
    path: "/admin/therapistlist",
    component: AdminTherapistList,
    layout: AdminLayout,
  },
]

export { publicRoutes, patientRoutes, therapistRoutes, adminRoutes };
