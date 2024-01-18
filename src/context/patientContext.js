import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/auth";

export const PatientContext = createContext(null);

const PatientProvider = ({children}) => {
  const [bookingSession, setBookingSession] = useState()
  
  const patientList = {
    bookingSession,
    setBookingSession
  };

  return(
    <PatientContext.Provider value={patientList}>
      {children}
    </PatientContext.Provider>
  )
}
export default PatientProvider;