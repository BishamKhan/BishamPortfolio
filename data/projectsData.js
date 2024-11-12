import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Taqreebat CRM",
    url: "https://taqreebat-frontend-crm.vercel.app",
    category: "Web Application",
    img: "/images/taqreebat/p2.png",
    // img: "/images/web-project-2.jpg",
    ProjectHeader: {
      title: "Taqreebat CRM",
      publishDate: "Mar 12, 2024",
      tags: "UIUX / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/taqreebat/p1.png",
      },
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/taqreebat/p2.png",
      },
      {
        id: uuidv4(),
        title: "Google Health Platform",
        img: "/images/taqreebat/p3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "TAQREEBAT",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "SAAS",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://taqreebat-frontend-crm.vercel.app",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "123 45678 910",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
				The purpose for Taqreebat software is to digitalize the old 
practice for event management system. This software will include 
a CRM for vendor which helps them to manage their work and their 
customer on electronic devices. 
				`,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next Js",
            "TypeScript",
            "Material UI",
            "Figma",
            "Node Js",
            "Express Js",
            "Mongo DB",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Taqreebat is an advanced event management software aimed at transforming traditional event planning methods into a streamlined digital experience. This system provides vendors with a comprehensive Customer Relationship Management (CRM) tool, enabling them to manage customer interactions, bookings, schedules, and service details directly from their devices. By digitizing these operations, Taqreebat helps vendors enhance efficiency, reduce paperwork, and provide better service to clients, ultimately elevating the event management experience.",
        },
        {
          id: uuidv4(),
          details:
            "The software is developed using modern technologies to ensure a smooth, intuitive, and responsive interface. Built with Next.js and TypeScript for a robust frontend, it also utilizes Material UI for a visually appealing and user-friendly design. Figma is used for the design process, ensuring a well-structured, seamless user experience. On the backend, Node.js and Express.js provide a scalable and fast framework, while MongoDB serves as the database, enabling efficient data storage and retrieval for smooth vendor-client interactions.",
        },
        {
          id: uuidv4(),
          details:
            "Taqreebat aims to become an essential tool for event vendors, allowing them to manage their services more effectively in a competitive digital era.",
        },
      ],

      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: "Fanuun",
    url: "Fanuun.com",
    category: "Web Application",
    img: "/images/fanuun/p1.png",
    ProjectHeader: {
      title: "Fanuun",
      publishDate: "Jul 26, 2023",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/fanuun/p1.png",
      },
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/fanuun/p2.png",
      },
      {
        id: uuidv4(),
        title: "Phoenix Digital Agency",
        img: "/images/fanuun/p3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Fanuun",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Immigration consultancy company. ",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://fanuun.com",
        },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
To develop a user-friendly website that effectively communicates the benefits and scope of our comprehensive visa consultation service, providing clear guidance and information to individuals seeking immigration assistance, ultimately leading to increased engagement and conversion rates.
        `,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["JavaScript", "React JS", "TailwindCSS", "AdobeXD"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "This visa consultation website project aims to create an intuitive, user-centered platform that effectively communicates the benefits and details of comprehensive immigration services. It is designed to guide individuals through the complexities of visa and immigration processes, offering clear, step-by-step information and resources. The website's primary goal is to empower users with accessible guidance, reducing uncertainty and improving their overall experience. By focusing on easy navigation and visually engaging design, the platform seeks to build trust, enhance user engagement, and increase consultation conversion rates.",
        },
        {
          id: uuidv4(),
          details:
            "To achieve this, the project leverages a robust set of technologies. JavaScript and React.js power the website’s frontend, enabling fast, interactive components that provide users with a seamless experience. TailwindCSS ensures responsive, modern styling that adapts smoothly across devices, enhancing the site's visual appeal and usability. The design process, managed through Adobe XD, prioritizes a streamlined UI/UX, allowing users to find relevant information quickly and intuitively. Overall, the website is tailored to support individuals in their immigration journey while driving service engagement and consultations.",
        },
      ],

      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 3,
    title: "Sitaar",
    url: "cloud-storage-platform",
    category: "Web Application",
    img: "/images/Sitaar/p1.png",
    ProjectHeader: {
      title: "Sitaar",
      publishDate: "Feb 2, 2024",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Home",
        img: "/images/Sitaar/p1.png",
      },
      {
        id: uuidv4(),
        title: "About",
        img: "/images/Sitaar/p2.png",
      },
      {
        id: uuidv4(),
        title: "Roadmap",
        img: "/images/Sitaar/p3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Sitaar",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "AI generated Musics",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://sitara-music-app.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
      Objective: 
      website project is to create a user-friendly platform that utilizes artificial intelligence (AI) to generate music based on prompts provided by the user. The project aims to offer a diverse range of music genres including hip hop, pop, trap, electro, happy, sad, rock, and more. The primary goal is to enable users to input their preferences or prompts and have the AI algorithm generate customized music compositions in real-time.
      `,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next Js", "TypeScript", "Material UI"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Our project is driven by the vision to redefine how music is both created and enjoyed, leveraging cutting-edge AI technology to empower users in their musical exploration.",
        },
        {
          id: uuidv4(),
          details:
            "At the heart of our platform lies a sophisticated AI algorithm, meticulously trained on a vast array of musical styles and patterns. This algorithm serves as the maestro, interpreting user prompts and crafting bespoke compositions that resonate with their preferences. Whether you're in the mood for the infectious rhythms of hip hop, the catchy melodies of pop, the pulsating beats of trap, or the electrifying energy of electro, our AI is primed to deliver.",
        },
        {
          id: uuidv4(),
          details: `
            But our platform is more than just a music generator – it's a gateway to a world of musical discovery. Dive into our carefully curated library, where each track is a testament to the AI's versatility and ingenuity. From uplifting tunes that evoke feelings of happiness to soul-stirring melodies that tug at the heartstrings, we offer a diverse spectrum of genres and moods to suit every taste and occasion.
`,
        },
        {
          id: uuidv4(),
          details:
            "Navigating through our platform is a breeze, thanks to our intuitive user interface. Simply input your desired prompts – whether it's a specific genre, mood, tempo, or instrumentation – and watch as the AI brings your vision to life in real-time. And with our seamless music player integrated directly into the platform, you can immerse yourself in the sonic tapestry of AI-generated music with just a click.",
        },
        {
          id: uuidv4(),
          details:
            "But the magic doesn't end there. With our favorites feature, you can curate your own personalized playlist, saving your most beloved tracks for easy access whenever the mood strikes. Whether you're discovering new favorites or revisiting old classics, our platform puts the power of musical exploration firmly in your hands.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "The Groves",
    url: "https://the-groove-park.vercel.app/",
    category: "Website",
    // category: "UI/UX Design",
    img: "/images/groves/p1.png",
    ProjectHeader: {
      title: "The Groves",
      publishDate: "Oct 22, 2024",
      tags: "UI / Frontend ",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "The Groves",
        img: "/images/groves/p1.png",
      },
      {
        id: uuidv4(),
        title: "The Groves",
        img: "/images/groves/p2.png",
      },
      {
        id: uuidv4(),
        title: "The Groves",
        img: "/images/groves/p3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "The Groves",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Informative Website",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://the-groove-park.vercel.app/",
        },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
        To create an engaging and visually appealing website for The Grove Park, aimed at showcasing the features and attractions of the entertainment facility. The objective is to provide visitors with a comprehensive overview of the park's offerings, including activities, events, and amenities, while delivering a seamless browsing experience that encourages exploration and boosts visitor engagement and attendance. The website aims to attract families, friends, and thrill-seekers by presenting The Grove Park as an ideal destination for fun and relaxation.`,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next Js", "TypeScript", "Tailwind", "Adobe xd", "Shadcn"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The  Groves Park website is designed to provide an immersive and user-friendly online experience that highlights the wide range of attractions and amenities available at the entertainment facility. The goal of the site is to showcase The  Groves Park as an ideal destination for families, friends, and thrill-seekers looking for fun, relaxation, and unforgettable experiences. By offering a detailed overview of the park’s activities, events, and unique features, the website encourages visitors to explore what The  Groves Park has to offer, helping them plan their visit with ease.",
        },
        {
          id: uuidv4(),
          details:
            "The design prioritizes a visually engaging and easy-to-navigate layout, creating a seamless browsing experience that enhances visitor engagement and interest. The website features vibrant images, interactive elements, and comprehensive information on each attraction, giving users a virtual preview of the excitement that awaits them. With an emphasis on accessibility and mobile responsiveness, The  Groves Park site ensures that visitors can explore the park’s offerings from any device, anytime. The platform serves as an essential tool for informing, inspiring, and ultimately driving attendance by presenting The  Groves Park as a premier entertainment destination.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Artisttie",
    url: "cloud-storage-platform",
    category: "Web Application",
    img: "/images/artistie/p1.png",
    ProjectHeader: {
      title: "Artisttie",
      publishDate: "Feb 10, 2024",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Home",
        img: "/images/artistie/p1.png",
      },
      {
        id: uuidv4(),
        title: "About",
        img: "/images/artistie/p2.png",
      },
      {
        id: uuidv4(),
        title: "Roadmap",
        img: "/images/artistie/p3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Artistie",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "E-commerce Art market place",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://artisttie.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
      Objective: 
      To develop and launch an innovative e-commerce web application that serves as a vibrant marketplace for artists and art enthusiasts, providing a comprehensive platform for buying and selling a diverse range of artistic creations. This project aims to create an engaging and user-friendly online marketplace that connects artists with a global audience, fostering creativity, cultural exchange, and economic opportunities within the arts community.
      `,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next Js", "TypeScript", "Material UI", "Tailwind"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Our project involves the creation of an e-commerce web application tailored specifically for the art market. This platform will function as a dynamic marketplace where artists from various backgrounds and disciplines can showcase and sell their creations directly to buyers worldwide. The application will feature intuitive browsing and purchasing interfaces, allowing users to explore a vast array of artwork categories, including paintings, sculptures, photography, digital art, and more.",
        },
        {
          id: uuidv4(),
          details:
            "Artists will have the ability to set up their own storefronts within the platform, where they can showcase their portfolios, provide descriptions of their work, set prices, and manage transactions. To ensure quality and authenticity, we will implement robust verification processes for artists and their artworks.",
        },
        {
          id: uuidv4(),
          details:
            "For buyers, the platform will offer a seamless shopping experience with features such as advanced search filters, personalized recommendations, secure payment options, and transparent shipping policies. Additionally, users will have access to interactive features like reviews, ratings, and artist profiles to aid in their purchasing decisions.",
        },
        {
          id: uuidv4(),
          details:
            "Our project aims to not only facilitate the buying and selling of art but also to foster a sense of community and appreciation for creativity. By connecting artists with a global audience, we aspire to promote cultural exchange, support emerging talent, and democratize access to art in all its forms.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "AI Ads Management",
    url: "Ai-ads-management",
    category: "Web Application",
    img: "/images/AiAds/p2.png",
    ProjectHeader: {
      title: "AI Ads Management",
      publishDate: "Nov 15, 2024",
      tags: "UI / Frontend ",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "welcome",
        img: "/images/AiAds/p1.png",
      },
      {
        id: uuidv4(),
        title: "connect platforms",
        img: "/images/AiAds/p3.png",
      },
      {
        id: uuidv4(),
        title: "create Ad",
        img: "/images/AiAds/p4.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "AI Ads Management",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "AI Ads",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://ai-ads-management-crm.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
      Ai Ads Management is a web app designed to simplify and optimize the process of creating, launching, and managing ads across multiple platforms. Its goal is to provide businesses and marketers with a streamlined, all-in-one solution for ad management, enabling them to reach their target audiences efficiently, track performance metrics, and improve campaign results through a centralized, user-friendly dashboard.`,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next Js",
            "TypeScript",
            "Material UI",
            "Tailwind",
            "Shadcn",
            "Figma",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "AI Ads Management is an advanced ad management CRM designed to empower businesses and marketers by simplifying the complexities of multi-platform ad creation, deployment, and monitoring. This web app provides a centralized, user-friendly dashboard where users can efficiently create targeted ads, launch campaigns, and manage ad performance across popular advertising platforms, including social media and search engines. With an emphasis on usability and efficiency, AI Ads Management is crafted to help users maximize their ad reach and optimize engagement without needing to navigate multiple platforms individually.",
        },
        {
          id: uuidv4(),
          details:
            "The app includes features such as intuitive ad design tools, audience targeting options, scheduling capabilities, and real-time performance analytics. Users can monitor key metrics, track conversion rates, and make data-driven adjustments to campaigns, all within a single interface. Built to cater to both small businesses and large enterprises, AI Ads Management aims to streamline ad management and improve ROI by providing comprehensive control over ad campaigns, enabling users to adjust and refine strategies effortlessly. This platform represents a one-stop solution for effective ad management, reducing time and effort while enhancing overall marketing effectiveness.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Artisttie Admin CRM",
    url: "cloud-storage-platform",
    category: "Web Application",
    img: "/images/artistie/p4.png",
    ProjectHeader: {
      title: "Artisttie Admin CRM",
      publishDate: "Jan 27, 2024",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Home",
        img: "/images/artistie/p4.png",
      },
      {
        id: uuidv4(),
        title: "About",
        img: "/images/artistie/p5.png",
      },
      {
        id: uuidv4(),
        title: "Roadmap",
        img: "/images/artistie/p6.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Artistie",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "E-commerce Art market place",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://artisttie.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
      Objective: 
      To develop and launch an innovative e-commerce web application that serves as a vibrant marketplace for artists and art enthusiasts, providing a comprehensive platform for buying and selling a diverse range of artistic creations. This project aims to create an engaging and user-friendly online marketplace that connects artists with a global audience, fostering creativity, cultural exchange, and economic opportunities within the arts community.
      `,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next Js", "TypeScript", "Material UI", "Tailwind"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Our project involves the creation of an e-commerce web application tailored specifically for the art market. This platform will function as a dynamic marketplace where artists from various backgrounds and disciplines can showcase and sell their creations directly to buyers worldwide. The application will feature intuitive browsing and purchasing interfaces, allowing users to explore a vast array of artwork categories, including paintings, sculptures, photography, digital art, and more.",
        },
        {
          id: uuidv4(),
          details:
            "Artists will have the ability to set up their own storefronts within the platform, where they can showcase their portfolios, provide descriptions of their work, set prices, and manage transactions. To ensure quality and authenticity, we will implement robust verification processes for artists and their artworks.",
        },
        {
          id: uuidv4(),
          details:
            "For buyers, the platform will offer a seamless shopping experience with features such as advanced search filters, personalized recommendations, secure payment options, and transparent shipping policies. Additionally, users will have access to interactive features like reviews, ratings, and artist profiles to aid in their purchasing decisions.",
        },
        {
          id: uuidv4(),
          details:
            "Our project aims to not only facilitate the buying and selling of art but also to foster a sense of community and appreciation for creativity. By connecting artists with a global audience, we aspire to promote cultural exchange, support emerging talent, and democratize access to art in all its forms.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Taqreebat",
    url: "project-management-ui",
    category: "Web Application",
    // category: "UI/UX Design",
    img: "/images/taqreebat/p8.png",
    ProjectHeader: {
      title: "Taqreebat",
      publishDate: "Mar 12, 2024",
      tags: "UI / Frontend / Backend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Taqreebat",
        img: "/images/taqreebat/p7.png",
      },
      {
        id: uuidv4(),
        title: "Taqreebat",
        img: "/images/taqreebat/p5.png",
      },
      {
        id: uuidv4(),
        title: "Taqreebat",
        img: "/images/taqreebat/p6.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Taqreebat",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Saas",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://taqreebat-web.vercel.app/",
        },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
        The purpose for Taqreebat software is to digitalize the old 
        practice for event management system. This software will help user to book there event on just couple of clicks. The user just need to filter vendor according to there requirements and book your event from it.
        `,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next Js",
            "TypeScript",
            "Material UI",
            "Figma",
            "Node Js",
            "Express Js",
            "Mongo DB",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Taqreebat is an advanced event management software aimed at transforming traditional event planning methods into a streamlined digital experience. This system provides vendors with a comprehensive Customer Relationship Management (CRM) tool, enabling them to manage customer interactions, bookings, schedules, and service details directly from their devices. By digitizing these operations, Taqreebat helps vendors enhance efficiency, reduce paperwork, and provide better service to clients, ultimately elevating the event management experience.",
        },
        {
          id: uuidv4(),
          details:
            "The software is developed using modern technologies to ensure a smooth, intuitive, and responsive interface. Built with Next.js and TypeScript for a robust frontend, it also utilizes Material UI for a visually appealing and user-friendly design. Figma is used for the design process, ensuring a well-structured, seamless user experience. On the backend, Node.js and Express.js provide a scalable and fast framework, while MongoDB serves as the database, enabling efficient data storage and retrieval for smooth vendor-client interactions.",
        },
        {
          id: uuidv4(),
          details:
            "Taqreebat aims to become an essential tool for event vendors, allowing them to manage their services more effectively in a competitive digital era.",
        },
      ],

      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 9,
    title: "Trench Of Blob",
    url: "cloud-storage-platform",
    category: "Web Application",
    img: "/images/tob/p1.png",
    ProjectHeader: {
      title: "Trench Of Blob",
      publishDate: "Mar 27, 2022",
      tags: "Web, UI/UX & NFT",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Home",
        img: "/images/tob/p1.png",
      },
      {
        id: uuidv4(),
        title: "About",
        img: "/images/tob/p2.png",
      },
      {
        id: uuidv4(),
        title: "Roadmap",
        img: "/images/tob/p3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "TOB",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "NFT market place",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://tob-gules.vercel.app",
        },
        // {
        //   id: uuidv4(),
        //   title: "Phone",
        //   details: "555 8888 888",
        // },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: `
To develop and launch a cutting-edge NFT website showcasing "Trench of Blob" (TOB), a meticulously curated collection of 5,000 rare and unique pieces of marine life art. The objective is to provide art enthusiasts and collectors with exclusive access to the awe-inspiring marvels found in the deepest trenches of the seas, offering a captivating and immersive experience in the world of NFTs.
        `,
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React Js", "JavaScript", "Material UI", "Figma"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The Trench of Blob (TOB) NFT website is designed to introduce art enthusiasts and collectors to an exclusive and meticulously curated collection of 5,000 unique marine life-inspired digital art pieces. Each NFT in this collection highlights the awe-inspiring beauty and mystery of life found in the ocean’s deepest trenches. The website aims to offer users an immersive experience, allowing them to explore and collect these rare digital artworks. By capturing the wonder of marine life in a captivating digital format, the platform seeks to foster a strong connection between art and the NFT space.",
        },
        {
          id: uuidv4(),
          details:
            "The development of the TOB NFT website utilizes a blend of advanced tools and technologies to deliver a high-performance, visually appealing, and user-friendly interface. React.js and JavaScript are employed to create a dynamic frontend, ensuring smooth interactions and responsive design.  Material UI is used for a modern, cohesive design that highlights the beauty of the TOB collection, while Figma is instrumental in crafting a refined, immersive user experience. Together, these tools create a powerful platform that brings the captivating art of marine life to the world of NFTs, appealing to both new and seasoned collectors alike.",
        },
      ],

      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
];
