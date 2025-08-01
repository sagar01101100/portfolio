// data/projects.ts

import musicPlayerAnim from "@/animations/Music_Iocn_Animation.json";
const musicPlayerLink = "/";
// import devPortfolioAnim from "@/animations/portfolio.json";
// import chatAppAnim from "@/animations/chat.json";
// import expenseAnim from "@/animations/finance.json";

const applications = [
  {
    title: "Music Player",
    description:
      "A clean and ad-free music player that lets users stream YouTube audio by simply pasting the video link.",
    animation: musicPlayerAnim,
    link: musicPlayerLink,
  },

  // Uncomment when ready to use
  // {
  //   title: "Dev Portfolio",
  //   description: "Your personal gamified developer portfolio with circuit-grid theme and animations.",
  //   animation: devPortfolioAnim,
  //   link: "https://sagar01101100.dev",
  // },
  // {
  //   title: "Chat App",
  //   description: "Realtime chat application built with Socket.io and Next.js for seamless communication.",
  //   animation: chatAppAnim,
  //   link: "https://github.com/sagar01101100/chat-app",
  // },
  // {
  //   title: "Expense Tracker",
  //   description: "Track your income and expenses with graphs, categories, and persistent storage.",
  //   animation: expenseAnim,
  //   link: "https://github.com/sagar01101100/expense-tracker",
  // },
];

export default applications;
