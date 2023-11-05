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
import Programmes from "./components/DrawerComponent/Academic/AcademicComponent/Programmes";
import ApplyOnline from "./components/DrawerComponent/Academic/AcademicComponent/ApplyOnline";
import Ordiance from "./components/DrawerComponent/Academic/AcademicComponent/Ordiance";
import FeesExpences from "./components/DrawerComponent/Academic/AcademicComponent/FeesExpences";
import AcademicClender from "./components/DrawerComponent/Academic/AcademicComponent/AcademicClender";
import Syllbus from "./components/DrawerComponent/Academic/AcademicComponent/Syllbus";
import TimeTable from "./components/DrawerComponent/Academic/AcademicComponent/TimeTable";
import CivilEng from "./components/DrawerComponent/Departments/DepartmentComp/CivilEng";
import Cse from "./components/DrawerComponent/Departments/DepartmentComp/Cse"
import Ece from "./components/DrawerComponent/Departments/DepartmentComp/Ece"
import Electrical from "./components/DrawerComponent/Departments/DepartmentComp/Electrical"
import Humanities from "./components//DrawerComponent/Departments/DepartmentComp/Humanities"
import Mechanical from "./components/DrawerComponent/Departments/DepartmentComp/Mechanical"
import Faclities from './components/DrawerComponent/Facilites/Facilities'
import Infrasture from './components/DrawerComponent/Facilites/FacilitesComp/Infrasture';
import Libaray from './components/DrawerComponent/Facilites/FacilitesComp/Libaray';
import InternetContivity from './components/DrawerComponent/Facilites/FacilitesComp/InternetContivity'
import PowerSource from './components/DrawerComponent/Facilites/FacilitesComp/PowerSource'
import Medical from './components/DrawerComponent/Facilites/FacilitesComp/Medical'
import Canteen from './components/DrawerComponent/Facilites/FacilitesComp/Canteen'
import Security from './components/DrawerComponent/Facilites/FacilitesComp/Security'
import Ndl from './components/DrawerComponent/Facilites/FacilitesComp/Ndl'
import Nptel from './components/DrawerComponent/Facilites/FacilitesComp/Nptel'
import Hostel from './components/DrawerComponent/Facilites/FacilitesComp/Hostel'
import Cultural from "./components/DrawerComponent/Students Corner/StudentCornerComp/Cultural";
import Sports from "./components/DrawerComponent/Students Corner/StudentCornerComp/Sports"
import College from "./components/DrawerComponent/Students Corner/StudentCornerComp/College"





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
        <Route path="/programs" element={<Programmes/>}/>
       <Route path="/applyOnline" element={<ApplyOnline/>}/>
       <Route path="/ordinance" element={<Ordiance/>}/>
       <Route path="/Fees" element={<FeesExpences/>}/>
       <Route path="/calender" element={<AcademicClender/>}/>
       <Route path="/syllabus" element={<Syllbus/>}/> 
       <Route path="/timetable" element={<TimeTable/>}/> 
        <Route path="/department" element={<Departments/>}/>
        <Route path="/civil" element={<CivilEng/>}/>
        <Route path="/cse" element={<Cse/>}/>
        <Route path="/ece" element={<Ece/>}/>
        <Route path="/electrical" element={<Electrical/>}/>
        <Route path="/humanities" element={<Humanities/>}/>
        <Route path="/mechanical" element={<Mechanical/>}/>
        <Route path="/facilities" element={<Faclities/>}/>
        <Route path="/infrastructure" element={<Infrasture/>}/>
        <Route path="/libirary" element={<Libaray/>}/>
        <Route path="/internet" element={<InternetContivity/>}/>
        <Route path="/powerSource" element={<PowerSource/>}/>
        <Route path="/medical" element={<Medical/>}/>
        <Route path="/canteen" element={<Canteen/>}/>
        <Route path="/secirity" element={<Security/>}/>
        <Route path="/ndl" element={<Ndl/>}/>
        <Route path="/nptel" element={<Nptel/>}/>
        <Route path="/hostel" element={<Hostel/>}/>
       
        <Route path="/student" element={<StudentCorner/>}/>
<Route path="/cultural" element={<Cultural/>}/>
<Route path="/college" element={<College/>}/>
<Route path="/sports" element={<Sports/>}/>
      </Routes>
    </>
  );
};

export default App;
