import React, { Fragment, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { patientRoutes, therapistRoutes, adminRoutes, publicRoutes } from "./routes/routes";
import { AuthContext } from "./context/authContext";
import Error from "./pages/public/Error";

function App() {

  // Validate route
  const { userInfo, role } = useContext(AuthContext);
  console.log(role);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : route.layout;
            {/*Create public routes */ }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  !userInfo ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to={`/${role}/appointments`} replace />
                  )
                }
              />
            );
          })}
          {
            patientRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    userInfo && role === 'patient' ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <Navigate to='/signin' replace />
                    )
                  }
                />
              )
            })
          }
          {
            therapistRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    userInfo && role === 'therapist' ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <Navigate to='/signin' replace />
                    )
                  }
                />
              )
            })
          }
          {
            adminRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    userInfo && role === 'admin' ? (
                      <Layout>
                        <Page />
                      </Layout>
                    ) : (
                      <Navigate to='/signin' replace />
                    )
                  }
                />
              )
            })
          }
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
