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

export { projectDetails, freelanceWorks };
