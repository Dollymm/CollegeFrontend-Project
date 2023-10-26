import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./form/Register";
import Navbar from "./pages/Navbar";
import About from "./components/DrawerComponent/About/About";
import AboutItg from "./components/DrawerComponent/About/AboutComponent/AboutItg";
import AboutUTU from "./components/DrawerComponent/About/AboutComponent/AboutUTU"
// import DirectorMessage from "./components/DrawerComponent/About/AboutComp
import PlanToVisit from "./components/DrawerComponent/About/AboutComponent/PlanToVisit"
import Adminstration from "./components/DrawerComponent/Administraion/Adminstration";
import ViceC from "./components/DrawerComponent/About/AboutComponent/ViceC";
import Academic from './components/DrawerComponent/Academic/Academic'
import Departments from './components/DrawerComponent/Departments/Departments'
import Faclities from './components/DrawerComponent/Facilites/Facilities'
import StudentCorner from './components/DrawerComponent/Students Corner/StuentsCorner'
import  ViceChacellor  from "./components/DrawerComponent/Administraion/AdministrationComponent/ViceChacellor";
import Director from "./components/DrawerComponent/Administraion/AdministrationComponent/Director"
import Deans from "./components/DrawerComponent/Administraion/AdministrationComponent/Deans"
import Hod from "./components/DrawerComponent/Administraion/AdministrationComponent/Hod";
import Fculty from "./components//DrawerComponent/Administraion/AdministrationComponent/Fculty"
import WorkingComitees from "./components/DrawerComponent/Administraion/AdministrationComponent/WorkingComitees"
import Bog from "./components/DrawerComponent/Administraion/AdministrationComponent/Bog"
import Muu from "./components/DrawerComponent/Administraion/AdministrationComponent/Muu"
import AnualReport  from "./components/DrawerComponent/Administraion/AdministrationComponent/AnualReport"
import Aicte from "./components/DrawerComponent/Administraion/AdministrationComponent/Aicte"
import DirectorMessage from "./components/DrawerComponent/About/AboutComponent/DirectorMessage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  exact path="/"  element={<Home/> } />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutitg" element={<AboutItg/>}/>
        <Route path="/aboutUtu" element={<AboutUTU/>}/>
        <Route path="/directorMessage" element={<DirectorMessage/>}/>
        <Route path="/vice" element={<ViceC/>}/>
        <Route path="/plantoVist" element={<PlanToVisit/>}/>
        <Route path="/administration" element={<Adminstration/>}/>
        <Route path="/viceChancellor" element={<ViceChacellor/>}/>
        <Route path="/director" element={<Director/>}/>
        <Route path="/deans" element={<Deans/>}/>
        <Route path="/hod" element={<Hod/>}/>
        <Route path="/facultyIncharge" element={<Fculty/>}/>
        <Route path="/workingComittee" element={<WorkingComitees/>}/>
        <Route path="/bog" element={<Bog/>}/>
        <Route path="/mou" element={<Muu/>}/>
        <Route path="/anual" element={<AnualReport/>}/>
        <Route path="/aicte" element={<Aicte/>}/>
        <Route path="/academic" element={<Academic/>}/>
        <Route path="/department" element={<Departments/>}/>
        <Route path="/facilities" element={<Faclities/>}/>
        <Route path="/student" element={<StudentCorner/>}/>

      </Routes>
    </>
  );
};

export default App;
