import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import YouTubeVideos from "./components/landing/Youtube";
import './App.css';
import UserProfile from "./components/User/UserProfile";
import Admin from "./components/admin/Admin";
import Register from "./components/Auth/Signup";
import Login from "./components/Auth/Signin";
import UserUpdate from "./components/User/UserUpdate";
import ContractPage from "./components/Contract/ContractsPage";
// import Admin from './components/admin/Admin';
import CreateUser from './components/admin/SestemU/CreateUser';
import ListUser from './components/admin/SestemU/ListUser';
import EditUser from './components/admin/SestemU/EditUser';
import ListCompny from './components/admin/Comp/ListCompny';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" index element={<Landing />} />
      <Route path="YouTubeVideos" element={<YouTubeVideos />} />
      <Route path="/User/UserProfile" element={<UserProfile />} />
      <Route path="/User/UserUpdate" element={<UserUpdate />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="SignUp" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="/ContractPage" element={<ContractPage />} />


      <Route path="/ListUser" element={<ListUser />} />
       {/* <Route path="/Main" element={<Main />} /> */}
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/Edit/:id/User" element={<EditUser />} />
          <Route/>
          <Route path="/ListCompny" element={<ListCompny />} />

          <Route/>
          <Route/>
<Route/>




      </Routes>
    </BrowserRouter>
  );
}