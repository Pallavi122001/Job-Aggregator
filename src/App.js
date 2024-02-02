import React, { useState } from "react";
import HomePage from './components/homepage/homepage';
import AdminLogin from "./components/login/adminlogin";
import JobSeekerLogin from "./components/login/jobseeker_login";
import AdminRegister from './components/register/adminregister';
import JobSeekerRegister from "./components/register/jobseeker_register";
import Logout from './components/logout/logout';
import Addadminheader from "./components/Dashboards/addAdminheader";
import JobSeekertheader from "./components/Dashboards/jobseekerheader";
import Selectrole from "./components/login/selectrole";
import SelectRegisterrole from "./components/register/selectregisterrole";
import ContactForm from "./components/contact/contactform";
import Add_applicant from "./components/Dashboards/add_applicant";
import Add_Application from "./components/Dashboards/addall"
import Applicant_report from "./components/Dashboards/applicant_report";
import Add_com from "./components/Dashboards/addall1"
import Company_report from "./components/Dashboards/company_report";
import Add_Company from "./components/Dashboards/add_company";
import Add_my_account from "./components/Dashboards/add_my_account";
import FindJob from "./components/Dashboards/findjob";
import UploadJob from "./components/Dashboards/add_upload_job";
import JobApplicationForm from "./components/Dashboards/applyjob";
import ChangePassword from "./components/Dashboards/changePass";
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'; 
import './App.css'
function App() {
  const[user,setLoginUser]=useState({});
  const [members,setMembers] = useState([]); 
  const [com_members,com_setMembers] = useState([]); 
  const [jobApplications, setJobApplications] = useState([]);
  const handleApplicationSubmit = (applications) => {
    setJobApplications(applications);
  };
  return  (    
    <div className="App">
    <Router>
    <Switch>
<Route exact path='/' ><HomePage/></Route>  
<Route path="/adminlogin" ><AdminLogin setLoginUser={setLoginUser}/></Route>
<Route path="/jobseeker_login" ><JobSeekerLogin setLoginUser={setLoginUser}/></Route>
<Route path='/adminregister' ><AdminRegister /></Route> 
<Route path='/jobseeker_register' ><JobSeekerRegister/></Route> 
<Route path='/logout' > <Logout /></Route>
<Route path='/addAdminheader'>{user && user._id  ?<Addadminheader/>:<AdminLogin setLoginUser={setLoginUser}/> }</Route>
<Route path='/jobseekerheader'>{user && user._id  ?<JobSeekertheader/>:<JobSeekerLogin setLoginUser={setLoginUser}/> }</Route>
<Route path='/selectrole'><Selectrole/></Route>
<Route path='/selectregisterrole'><SelectRegisterrole/></Route>
<Route path='/ContactForm'><ContactForm/></Route>
<Route path='/add_applicant'><Add_applicant/></Route>
<Route path='/addall'><Add_Application members={members} setMembers={setMembers} setIsAdding={true} /></Route>
<Route path='/applicant_report'><Applicant_report /></Route>
<Route path='/addall1'><Add_com/></Route>
<Route path='/add_company'><Add_Company com_members={com_members} com_setMembers={com_setMembers} com_setIsAdding={true} /></Route>
<Route path='/company_report'><Company_report/></Route>
<Route path='/add_my_account'><Add_my_account com_members={com_members} com_setMembers={com_setMembers} com_setIsAdding={true} /></Route>
<Route path='/findjob'><FindJob/></Route>
<Route path='/add_upload_job'><UploadJob/></Route>
<Route path='/apply.js'><JobApplicationForm/></Route>
<Route path='/changePass'><ChangePassword/></Route>
</Switch>
    </Router>
    </div>
  );
}

export default App;
