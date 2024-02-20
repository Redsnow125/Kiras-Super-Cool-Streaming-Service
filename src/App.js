import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";


function App() {
  return (
    <>  
    <AuthContextProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      </AuthContextProvider>    
    </>
  );
}

export default App;
