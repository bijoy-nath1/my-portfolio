import bank from "../../assets/bank.jpeg";
import music from "../../assets/sync.jpeg";
import quiz from "../../assets/quiz.jpg";
import task from "../../assets/task.png";
import crm from "../../assets/crm.jpeg";

const projectDetails = [
  {
    name: "Sync Music",
    description:
      "A music platform where you can search for all artists globally and listen to their songs.",
    githubLink: "https://github.com/bijoy-nath1/sync-music",
    hostLink:
      "https://sync-music-j1ui-3fjyx2v5a-bijoy-naths-projects.vercel.app/",
    image: music,
  },
  {
    name: "Quiz App",
    description:
      "A quiz app where you can take technical and traditional quizzes, earn points, and track progress on your profile.",
    githubLink: "https://github.com/bijoy-nath1/quizApp",
    hostLink: "https://quiz-app-delta-eosin.vercel.app/",
    image: quiz,
  },
  {
    name: "FinFlaw",
    description:
      "A modern banking platform where users can make transactions. Currently under development.",
    githubLink: "https://github.com/bijoy-nath1/FinFlaw",
    hostLink: {},
    image: bank,
  },
  {
    name: "Task List",
    description:
      "A task management app where you can add, track, and mark tasks as completed.",
    githubLink: "https://github.com/bijoy-nath1/taskList",
    hostLink: "https://task-list-olive-zeta.vercel.app/",
    image: task,
  },
];

const freelanceWorks = [
  {
    name: "welferi",
    description: "its a CRM website i worked on its frontend",
    githubLink: "https://github.com/bijoy-nath1/taskList",
    hostLink: {},
    image: crm,
  },
];

const skills = [
  { name: "HTML", level: 95, color: "bg-red-500" },
  { name: "CSS", level: 90, color: "bg-blue-500" },
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "React", level: 80, color: "bg-cyan-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-indigo-500" },
  { name: "Next.js", level: 75, color: "bg-purple-700" },
  { name: "TypeScript", level: 70, color: "bg-blue-600" },
  { name: "GSAP", level: 65, color: "bg-green-500" },
];

const contactWay = {
    email: "bijoynath706@gmail.com",
    mainPhoneNumber:"9678316489",
    alternateNumber:"6003397308",
    linkedIn:"https://www.linkedin.com/in/bijoy-nath-0b7167313/"

  }


export { projectDetails, freelanceWorks,skills ,contactWay};
