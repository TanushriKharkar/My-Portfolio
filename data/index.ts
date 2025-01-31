import { CircleGauge, Layers, Package } from 'lucide-react';

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with active communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on JAVA Tech",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Car Rental System",
      des: "Developed a comprehensive Car Rental System that automates the process of renting vehicles. Rental reservation booking, alteration, and cancellation.",
      img: "https://www.shutterstock.com/image-photo/man-handing-car-smart-key-600nw-2466586365.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/TanushriKharkar/Car_Rental_System.git",
    },
    {
      id: 2,
      title: "Employee Payroll System",
      des: "Designed an Employee Payroll System to handle and process salaries automatically. Pay computation based on employee, part-time, and full-time hours.",
      img: "https://media.istockphoto.com/id/1393379249/photo/with-the-earning-payment-person-concept-calculate-payroll-salary-or-wage-accounting-paycheck.jpg?s=612x612&w=0&k=20&c=3aAEtoWaWKv2vKsm0-DwAvn8rM5IDErNmvWlgWkbljU=",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/TanushriKharkar/Employee_Payroll_System.git",
    },
    {
      id: 3,
      title: "Hospital Management System",
      des: "Established a hospital management system that streamlines hospital management and patient care. Along with registration and supervision of patients, scheduling and monitoring appointments, medical records and history administration.",
      img: "https://www.softclinicsoftware.com/wp-content/uploads/2021/09/image-1-1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/TanushriKharkar/Hospital_Management_System.git",
    },
    {
      id: 4,
      title: "Restaurant Landing Page",
      des: "To ensure a smooth user experience, HTML, CSS, and JavaScript are used in its construction. Important components of the page include a reservation form, menu highlights, and an overview of the restaurant.",
      img: "https://static3.depositphotos.com/1003631/209/i/450/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/TanushriKharkar/Landing-page-for-a-Restaurant.git",
    },
  ];
  
  export const skills = [
    {
      id: 'scalability',
      gradientColor: 'var(--jungle--green)',
      asset: {
        background: 'var(--bush)',
        icon: Layers,
      },
      title: {
        label: 'Scalability',
        background: 'var(--black--bean)',
      },
      content:
        'I specialize in front-end architectures that scale as your applications and teams grow, using modular structures and efficient workflows.',
    },
    {
      id: 'Performance',
      gradientColor: 'var(--azure--radiance)',
      asset: {
        background: 'var(--blue--zodiac)',
        icon: CircleGauge,
      },
      title: {
        label: 'Performance',
        background: 'var(--downriver)',
      },
      content:
        'I ensure front-end applications are optimized for speed, responsiveness, and seamless user experiences as they are efficient for developers.',
    },
    {
      id: 'modularity',
      gradientColor: 'var(--rose-of--sharon)',
      asset: {
        background: 'var(--rose-of--sharon-2)',
        icon: Package,
      },
      title: {
        label: 'Modularity',
        background: 'var(--rose-of--sharon-2)',
      },
      content:
        'I create reusable components, libraries, and tools that empower teams to build consistent and efficient front-end solutions at scale.',
    },
  ];
  
  export const slugs = [
    'typescript',
    'javascript',
    'react',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
  
    'postgresql',
    'firebase',
    'vercel',
  
    'docker',
    'git',
    'github',
  
    'visualstudiocode',
    'figma',
  
    'mongodb',
    'rust',
    'cplusplus',
    'c',
    'python',
    'numpy',
    'pandas',
    'mat-plot-lib',
    'sea-born',
    'flask'
    ,
    'django',
    'sklearn',
    'raspberrypi',
    'arduino',
    'opencv',
  
  ];
  
  export const techs = [
    {
      label: 'Java',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    {
      label: 'C++',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    {
      label: 'Python',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    
    {
      label: 'javascript',
      textColor: '#F7DF1E', // Brighter yellow
      bgColor: '#F0C800', // Darker yellow
    },
    {
      label: 'typescript',
      textColor: '#3178C6', // Brighter blue
      bgColor: '#1E5D92', // Darker blue
    },
    {
      label: 'react.js',
      textColor: '#61DAFB', // Brighter light blue
      bgColor: '#4B9FC9', // Darker blue
    },
    {
      label: 'next.js',
      textColor: '#61DAFB', // Brighter light blue
      bgColor: '#4B9FC9', // Darker blue
    },
  
    {
      label: 'css',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    
    {
      label: 'tailwind css',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    {
      label: 'Computer Network ',
      textColor: '#DB7093', // Brighter pink
      bgColor: '#9B4F6C', // Darker pink
    },
    {
      label: 'Database Management System ',
      textColor: '#DB7093', // Brighter pink
      bgColor: '#9B4F6C', // Darker pink
    },
    {
      label: 'Data Structure and Algorithm ',
      textColor: '#DB7093', // Brighter pink
      bgColor: '#9B4F6C', // Darker pink
    },
    
    {
      label: 'Agile',
      textColor: '#68A063', // Brighter green
      bgColor: '#4E8B4A', // Darker green
    },
    {
      label: 'Scrum ',
      textColor: '#68A063', // Brighter green
      bgColor: '#4E8B4A', // Darker green
    },
    {
      label: 'Numpy',
      textColor: '#68A063', // Brighter green
      bgColor: '#4E8B4A', // Darker green
    },
    {
      label: 'REST API',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    {
      label: 'Bootstrap',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    {
      label: 'mongodb',
      textColor: '#47A248', // Brighter green
      bgColor: '#2C6A2F', // Darker green
    },
    {
      label: 'SQL',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
    {
      label: 'MySQL',
      textColor: '#38BDF8', // Brighter cyan
      bgColor: '#0D8FB7', // Darker cyan
    },
  
    {
      label: 'html5',
      textColor: '#000000', // Bright black (neutral)
      bgColor: '#333333', // Darker black (neutral)
    },
  
    {
      label: 'git',
      textColor: '#6A3B97', // Brighter purple
      bgColor: '#4E2C6C', // Darker purple
    },
    {
      label: 'github',
      textColor: '#6A3B97', // Brighter purple
      bgColor: '#4E2C6C', // Darker purple
    },
    {
      label: 'Intellij IDEA',
      textColor: '#68A063', // Brighter green
      bgColor: '#4E8B4A', // Darker green
    },
    {
      label: 'Eclipse',
      textColor: '#68A063', // Brighter green
      bgColor: '#4E8B4A', // Darker green
    },
  
    {
      label: 'and more...',
      textColor: '#6A3B97', // Brighter purple
      bgColor: '#4E2C6C', // Darker purple
    },
  ];

 
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/TanushriKharkar",
    },
    {
      id: 2,
      img: "/mail.jpg",
      link: "kharkartanushri@gmail.com",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "www.linkedin.com/in/tanushri-kharkar-177a3428b",
      target: "_blank",
    },
  ];

  