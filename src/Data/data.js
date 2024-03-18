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
    name: "HTML/CSS Proficiency",
    rating: 9,
    description:
      "Solid understanding of HTML5 and CSS3. Proficient in creating responsive and visually appealing web layouts.",
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/html-2752158-2284975.png?f=webp&w=512",
  },
  {
    name: "JavaScript Proficiency",
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
    name: "UI/UX Design Basics",
    rating: 9,
    description:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/ui-ux-design-1594521-1348622.png?f=webp&w=512",
    image:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/ui-ux-design-1594521-1348622.png?f=webp&w=512",
  },
];

export const projects = [
  {
    name: "Dee Store",
    description:
      "An e-commerce website built with React, Redux, React Router, and Tailwind CSS.",
    techStack: ["React", "Redux", "React Router", "Tailwind CSS"],
    githubLink: "https://github.com/deepak-singh-jethi/Dee-store",
    imageUrl: Store,
  },

  {
    name: "Bloggers App",
    description:
      "A blogging application created using React, Redux, React Router, and Tailwind CSS.",
    techStack: ["React", "Redux", "React Router", "Tailwind CSS"],
    githubLink: "https://github.com/deepak-singh-jethi/bloggers-app",
    imageUrl: Blog,
  },
  {
    name: "Quiz Application",
    description: "A quiz application built using React.",
    techStack: ["React"],
    githubLink: "https://github.com/deepak-singh-jethi/d_quiz_application",
    imageUrl: Quiz,
  },
];
