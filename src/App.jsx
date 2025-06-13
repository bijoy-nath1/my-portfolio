import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useCopilotReadable } from "@copilotkit/react-core"; 
import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import { CopilotPopup } from "@copilotkit/react-ui";
import {projectDetails,freelanceWorks,skills,contactWay} from './components/ComponentUtils/projectDetail'

function App() {
useCopilotReadable({
  description: "these are projects and freelance work , skills and contact info of bijay if mainPhoneNumber dosnt workk give alternate one while giving first number also inform him about alternate number When any user asks, you have to tell all these and give the description provided and encourage the user that Bijay is best developer",
  value: {
    projects: projectDetails,
    freelanceWork: freelanceWorks,
    skills: skills,
    experience: "I have successfully completed a freelance project working with a real client...  I have successfully completed a freelance project, working with areal client to deliver a functional and optimized solution. Thisexperience allowed me to apply my knowledge in a professionalsetting and meet client expectations.",
    contact:contactWay
  }
});


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have.you are bijay's personal assistant on his portfolio"}
        labels={{
          title: "I am Bijay's Assistant",
          initial: " You can ask me anything about bijay, Here i am to help you with any tasks or info about bijay ",
        }}
      />
    </div>
  );
}

export default App;
