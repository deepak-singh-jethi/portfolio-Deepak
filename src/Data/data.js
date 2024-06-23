import Quiz from "../resource/Quiz.png";
import Store from "../resource/Store.png";
import Blog from "../resource/Bloggers.png";

export const navLinks = [
  { title: "About Me", href: "/" },
  { title: "Skills", href: "#skill" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#hireMe" },
];

export const aboutMeText = [
  "Hey, I'm Deepak Singh Jethi.",
  "Passionate about frontend web development.",
  "Let's collaborate to bring your digital vision to life!",
];

export const skills = [
  {
    name: "HTML/CSS ",
    rating: 9,
    description:
      "Solid understanding of HTML5 and CSS3. Proficient in creating responsive and visually appealing web layouts.",
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/html-2752158-2284975.png?f=webp&w=512",
  },
  {
    name: "JavaScript",
    rating: 8,
    description:
      "Strong understanding of core JavaScript concepts and modern ES6+ features. Experienced in building dynamic and interactive web applications.",
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/javascript-2752148-2284965.png?f=webp&w=512",
  },
  {
    name: "React.js",
    rating: 8,
    description:
      "Familiar with React.js for building user interfaces. Have developed single-page applications (SPAs) and reusable UI components using React.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-226053.png?f=webp&w=512",
  },

  {
    name: "Node.js/Express.js",
    rating: 7.6,
    description:
      "Basic understanding of backend development using Node.js and Express.js. Can build simple RESTful APIs and handle server-side logic.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=webp&w=512",
  },
  {
    name: "SQL Basics",
    rating: 6.8,
    description:
      "Basic knowledge of SQL and relational databases. Can write simple queries to interact with databases.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-mysql-21-1174941.png?f=webp&w=512",
  },
  {
    name: "Java Basics",
    rating: 6,
    description:
      "Basic understanding of core Java concepts and object-oriented programming principles. Have developed basic desktop and web applications using Java.",
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/java-2752149-2284966.png?f=webp&w=512",
  },
  {
    name: "CSS Framework",
    rating: 9,
    description:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/ui-ux-design-1594521-1348622.png?f=webp&w=512",
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/ui-ux-design-1594521-1348622.png?f=webp&w=512",
  },
];

export const projects = [
  {
    name: "MERN Quiz Application",
    description:
      "I designed and developed an interactive quiz application using the MERN (MongoDB, Express.js, React, and Node.js) stack. Users can take quizzes, answer questions, and receive real-time feedback. The app features responsive design and a seamless user experience.",
    techStack: ["React", "Node ", "Express", "Tailwind CSS","Mongoose"],
    githubLink: "https://github.com/deepak-singh-jethi/Quiz-application-MERN-Stack",
    imageUrl: Store,
  },
  {
    name: "Rosier Foods",
    description:
      "The Rosier Foods app aims to revolutionize food delivery by offering high-quality, organic products. Our focus is on raw honey, A2 Vedic ghee, and other wholesome items. Users can explore our range, place orders, and enjoy the richness of health.",
    techStack: ["React", "Redux", "React Router", "Tailwind CSS"],
    githubLink: "https://github.com/deepak-singh-jethi/rousier-food-app",
    imageUrl: Store,
  },
  {
    name: "Dee Store",
    description:
      "Dee Store: A React-based e-commerce platform, utilizing Redux, Router, and Tailwind CSS, offering seamless online shopping. Browse diverse products, manage your cart, and experience secure checkout for a convenient shopping journey.",
    techStack: ["React", "Redux", "React Router", "Tailwind CSS"],
    githubLink: "https://github.com/deepak-singh-jethi/Dee-store",
    imageUrl: Store,
  },

  {
    name: "Bloggers App",
    description:
      "Bloggers App: A comprehensive React application with Redux, Router, and Tailwind CSS, empowering bloggers to effortlessly create, manage, and share their content, fostering meaningful connections within the blogging community.",
    techStack: ["React", "Redux", "React Router", "Tailwind CSS"],
    githubLink: "https://github.com/deepak-singh-jethi/bloggers-app",
    imageUrl: Blog,
  },
  {
    name: "Quiz Application",
    description:
      "Quiz Application: A React-powered quiz platform, offering diverse subject coverage and an engaging learning environment. Test your knowledge, track your progress, and enhance your understanding with this interactive educational tool.",
    techStack: ["React"],
    githubLink: "https://github.com/deepak-singh-jethi/d_quiz_application",
    imageUrl: Quiz,
  },
];
