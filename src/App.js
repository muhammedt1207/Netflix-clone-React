import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NaveBar from "./components/NaveBar";
import { AuthContextProvider } from "./context/AuthContetxt";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
    <AuthContextProvider>
  <NaveBar/>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path="/login" element={<Login/>}/>
  <Route path="signup" element={<Signup/>} />
  <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute> } />
 </Routes>
 </AuthContextProvider>
    </>
  );
}

export default App;
