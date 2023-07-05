import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Summary from "./pages/Summary";
import ChatBot from "./pages/ChatBot";
import Paragraph from "./pages/Paragraph";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        /> */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
      </Routes>
    </>
  );
}

// export function ProtectedRoutes(props) {
//   if (localStorage.getItem("user")) {
//     return props.children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }

export default App;
