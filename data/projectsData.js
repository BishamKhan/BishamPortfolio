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
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
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
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
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
          details: "https://taqreebat.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
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
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
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
    id: 4,
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
          techs: ["React Js", "JavaScript", "Vue.js", "Material UI", "Figma"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
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
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 6,
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
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 7,
    title: "Sitaar",
    url: "cloud-storage-platform",
    category: "Web Application",
    img: "/images/sitaar/p1.png",
    ProjectHeader: {
      title: "Sitaar",
      publishDate: "Feb 2, 2024",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Home",
        img: "/images/sitaar/p1.png",
      },
      {
        id: uuidv4(),
        title: "About",
        img: "/images/sitaar/p2.png",
      },
      {
        id: uuidv4(),
        title: "Roadmap",
        img: "/images/sitaar/p3.png",
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
          details: "https://sitaar.vercel.app/",
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
      SocialSharingHeading: "Share This",
    },
  },
  // {
  //   id: 5,
  //   title: "WeTalk Social Application",
  //   url: "wetalk-social-app",
  //   category: "Mobile Application",
  //   img: "/images/mobile-project-1.jpg",
  //   ProjectHeader: {
  //     title: "WeTalk Social Application",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: uuidv4(),
  //       title: "WeTalk Social Application",
  //       img: "/images/ui-project-1.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "WeTalk Social Application",
  //       img: "/images/web-project-2.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "WeTalk Social Application",
  //       img: "/images/mobile-project-2.jpg",
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: uuidv4(),
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     // SocialSharing: [
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Twitter',
  //     // 		icon: <FiTwitter />,
  //     // 		url: 'https://twitter.com/realstoman',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Instagram',
  //     // 		icon: <FiInstagram />,
  //     // 		url: 'https://instagram.com/realstoman',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Facebook',
  //     // 		icon: <FiFacebook />,
  //     // 		url: 'https://facebook.com/',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'LinkedIn',
  //     // 		icon: <FiLinkedin />,
  //     // 		url: 'https://linkedin.com/',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Youtube',
  //     // 		icon: <FiYoutube />,
  //     // 		url: 'https://www.youtube.com/c/realstoman',
  //     // 	},
  //     // ],
  //   },
  // },
  // {
  //   id: 6,
  //   title: "Apple New Design System",
  //   url: "apple-new-design-system",
  //   category: "Web Application",
  //   img: "/images/web-project-1.jpg",
  //   ProjectHeader: {
  //     title: "Apple New Design System",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: uuidv4(),
  //       title: "Kabul Apple New Design System",
  //       img: "/images/ui-project-1.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Kabul Apple New Design System",
  //       img: "/images/web-project-2.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Kabul Apple New Design System",
  //       img: "/images/mobile-project-2.jpg",
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: uuidv4(),
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Website",
  //         details: "https://company.com",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     // SocialSharing: [
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Twitter',
  //     // 		icon: <FiTwitter />,
  //     // 		url: 'https://twitter.com/realstoman',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Instagram',
  //     // 		icon: <FiInstagram />,
  //     // 		url: 'https://instagram.com/realstoman',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Facebook',
  //     // 		icon: <FiFacebook />,
  //     // 		url: 'https://facebook.com/',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'LinkedIn',
  //     // 		icon: <FiLinkedin />,
  //     // 		url: 'https://linkedin.com/',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Youtube',
  //     // 		icon: <FiYoutube />,
  //     // 		url: 'https://www.youtube.com/c/StomanStudio',
  //     // 	},
  //     // ],
  //   },
  // },
];
