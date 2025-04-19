const navLinks = [
    {
      name: "Projects",
      link: "#work",
    },
    {
      name: "Development Journey",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { ind: 1, value: 2, suffix: "+", label: "Years in Web Development" },
    // { ind: 2, value: 200, suffix: "+", label: "Satisfied Clients" },
    { ind: 3, value: 15, suffix: "+", label: "Total Projects" },
    { ind: 3, value: 5, suffix: "+", label: "Deployed Projects" },
    // { ind: 4, value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Python Developer",
    //   modelPath: "/models/python-transformed.glb",
    //   scale: 0.8,
    //   rotation: [0, 0, 0],
    // },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Competitive Programmer",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Full Stack",
    //   modelPath: "/models/node-transformed.glb",
    //   scale: 5,
    //   rotation: [0, -Math.PI / 2, 0],
    // },
    // {
    //   name: "Project Manager",
    //   modelPath: "/models/git-svg-transformed.glb",
    //   scale: 0.05,
    //   rotation: [0, -Math.PI / 4, 0],
    // },
  ];
  
  const expCards = [
    {
      review: "Diving into frontend development was a game-changer for me. It helped me express ideas visually and taught me the importance of clean, user-friendly design.",
      imgPath: "/images/logos/react.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developer",
      date: "June 2023 - November 2023",
      responsibilities: [
        "Built multiple responsive websites and web apps using HTML, CSS, JavaScript, and React.",
        "Learned and implemented modern frontend practices like component-based architecture and state management.",
        "Explored popular tools and libraries such as Tailwind CSS, React Router, and Axios.",
        "Focused on clean UI design and improved UX through continuous iterations.",
        "Collaborated with peers on GitHub and participated in open-source projects to gain real-world experience.",
      ],
    },
    {
      review: "Learning backend development gave me a deeper understanding of how web apps function behind the scenes. It was exciting to bring real logic and data handling into my projects.",
      imgPath: "/images/logos/node.png",
      logoPath: "/images/logo2.png",
      title: "Backened Developer",
      date: "November 2023 - April 2024",
      responsibilities: [
        "Learned core backend concepts including REST APIs, authentication, and database design.",
        "Built full-stack projects using Node.js, Express.js, and MongoDB.",
        "Integrated third-party APIs and services to add real-world functionality to apps.",
        "Implemented user authentication using JWT and session-based strategies.",
        "Handled file uploads, form data processing, and error handling in server-side apps.",
        "Used tools like Postman for API testing and MongoDB Atlas for cloud database management.",
        "Deployed backend services on platforms like Render and Vercel for real-time access.",
      ],
    },
    {
      review: "Putting frontend and backend together in full-stack projects gave me the confidence to build complete, real-world applications from scratch and deploy them to production.",
      imgPath: "/images/logos/git.svg",
      logoPath: "/images/logo3.png",
      title: "Full Stack Developer",
      date: "June 2024 - Present",
      responsibilities: [
        "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Designed RESTful APIs and connected them with dynamic frontend interfaces.",
        "Managed user authentication and authorization systems using JWT and OAuth.",
        "Worked with both NoSQL (MongoDB) and Firebase Realtime DB to store and manage data.",
        "Handled state management in frontend apps using Context API and Redux.",
        "Implemented features like file uploads, pagination, and real-time updates.",
        "Deployed full-stack applications to cloud platforms like Vercel and Render with CI/CD setup.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Arnab Bhattacharya",
      mentions: "@arnabbhattacharya2005",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    // {
    //   name: "insta",
    //   imgPath: "/images/insta.png",
    //   url: "/"
    // },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      // url: ""
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      url: "https://x.com/arnab20052108"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/arnab-bhattacharya-42216a320"
    },
  ];

  const projects = [
    {
      title: "My Portfolio",
      image: "/images/portfolio.png",
      liveLink: "https://your-portfolio.com",
      githubLink: "https://github.com/your-username/portfolio",
    },
    {
      title: "Easy Attendance",
      image: "/images/easy_attendance.png",
      liveLink: "https://easy-present-production-0924.up.railway.app/",
      githubLink: "https://github.com/Code-With-Arnab2005/easy-present",
    },
    {
      title: "Blog App",
      image: "/images/mega_blog.png",
      liveLink: "https://megablogappwrite-eight.vercel.app/",
      githubLink: "https://github.com/Code-With-Arnab2005/Mega-Blog",
    },
    // {
    //   title: "Twitter Clone(Frontend)",
    //   image: "/images/project1.png",
    //   liveLink: "https://scanner-app.com",
    //   githubLink: "https://github.com/your-username/scanner-app",
    // },
  ]
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projects
  };