import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tryhackme,
  hackthebox,
  splunk,
  cribl,
  positka,
  letsdefend,
  clg,
  scl,
  zybeak,
  wireshark,
  mircosoft,
  linux,
  openvpn,
  kali,
  gcp,
  burpsuite,
  aws,
  splunk1,
  postman,
  cod
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
];

const services = [
  {
    title: "Splunk Accredited Splunk Cloud and Enterprise Developer",
    icon: web,
  },
  {
    title: "Cribl Certified Observability Engineer (CCOE) Stream User",
    icon: mobile,
  },
  {
    title: "EC council Certified Ethical Hacker version 11",
    icon: backend,
  },
  {
    title: "Top 4% of Tryhackme Users",
    icon: creator,
  },
  {
    title: "#590 Global Rank in HacktheBox",
    icon: creator,
  },
  {
    title: "Business English Certificate (BEC)",
    icon: backend,
  },
  {
    title: "Splunk Accredited Security Sales Rep 1",
    icon: mobile,
  },
  {
    title: "Splunk Support Engineer (SSE)",
    icon: web,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Splunk",
    icon: linux,
  },
  {
    name: "Postman",
    icon: gcp,
  },
  {
    name: "Kubernetes",
    icon: docker,
  },
  {
    name: "Mircosoft",
    icon: mircosoft,
  },
  {
    name: "Redux Toolkit",
    icon: wireshark,
  },
  {
    name: "Tailwind CSS",
    icon: splunk1,
  },
  {
    name: "Node JS",
    icon: postman,
  },
  {
    name: "MongoDB",
    icon: cod,
  },
  {
    name: "Three JS",
    icon: openvpn,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: burpsuite,
  },
  {
    name: "docker",
    icon: kali,
  },
];

const experiences = [
  {
    title: "M.sc in CyberSecurity",
  
    company_name: "National College of Ireland",
    icon: clg,
    date: "2023 - 2024",
    iconBg: "#0E0F0F",
   
    points: [ 
      "Forensic and eDiscovery",
      "Malware Analysis",
    
     
    ],
  },
  {
    title: "Junior Analyst - Splunk Team",
    company_name: "Positka",
    icon: positka,
    iconBg: "#180202",
    date: "May 2022 - Aug 2023",
    points: [
      "Implementing Business and security use cases on Splunk Enterprise platform.",
      "Skilled to write an Efficient Splunk Search processing query (SPL).",
      "Integrating AWS Elastic Kubernetes Service into Splunk Enterprise using Lamada Function.",
      "Integrating AWS S3 buckets into Splunk Using Splunk AWS-Addon",
      "Integrating Solar wind Orionnew logs into Splunk using Syslog.",
      "Knowledge about Splunk architecture and various components (indexer, forwarder, search head, deployment server), Heavy and Universal forwarder, License model.",
      "Configuring Splunk distributed environment with Universal Forwarder, Heavy Forwarder, Indexer , Search Head. ",
      "Configuring indexer cluster with indexer peers and cluster master.",
      "Configuring search Head Cluster with search peers and deployer.",
      "Upgrading Splunk versions, Cluster Rolling Upgrade.",
      "Configuring Splunk SAML Authentication with OKTA.",
      "Created efficient Splunk search Queries.",
      "Worked with Splunk configuration files.",
      "Worked on Splunk DB Connect.",
      "Created and configured reports and saved searches.",
      "Splunk Classic Dashboard and Dashboard Studio development.",
      "Splunk App development.",
      "Development of Splunk App in Splunk Dashboard Studio.",
      "Splunk App vetting.",
      "Splunk App Packaging.",
      "Deploying and upgrading Splunk App in Splunk environment.",
      "Experienced in Splunk Support Ticket.",
      "Splunk Diag file Investigation.",
      "Implementing Data pipeline from source -> Cribl -> Splunk.",
      "Implementing Machine Learning use case with Splunk MLTK.",
      "Developed Splunk Licence Monitoring App.",
      "Developed Custom Payment Gateway analytical Splunk App.",
      "Knowledge on Splunk O11y Platform",
      "Integrating AWS metrics logs to Splunk O11y Platform.",
      "Integrating Minikube kubernceetes metrics log to Splunk O11y platform.",
      "Integrating Apache web server metrics logs to Splunk O11y Platform. ",
      "Implemented Complex custom KPI use case with efficient Splunk search query.",
      
    ],
  },
  {
    title: "Cribl Achievement",
  
    icon: cribl,
    iconBg: "#1C1F23",
   
    points: [ 
      "Cribl Certified Observability Engineer (CCOE) Stream User",
     
    ],
  },
  {
    title: "Splunk Accreditations",
  
    icon: splunk,
    iconBg: "#070F07",
   
    points: [ 
      "Splunk Accredited Splunk Cloud and Enterprise Developer",
      "Splunk Accredited Sales Rep 1",
      "Splunk Accredited Sales Rep 2",
      "Splunk Accredited Security Sales Rep 1",
     
    ],
  },
  {
    title: "Lets Defend Badges",
  
    icon: letsdefend,
    iconBg: "#000707",
   
    points: [ 
      "First Blood - Investigated the first incident",
      "SOC Member - Completed the SOC Fundamentals course",
      "Phishing Expert - Phishing Campaign Analysis course",
      "Incident Handler - Investigated 5 different incidents",
     
    ],
  },
  {
    title: "Networking Traineer - Part Time",
    company_name: "Zybeak Technologies",
    icon: zybeak,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022 ",
    points: [
      "Classes on networking , OSI Model , Ip Addressing (ipv4 & ipv6)  and Mac Addressing mechanisms ",
      "Explaining TCP  Protocol, UDP Protocol ,Tor network",
      "basic Classes on  Linux Operating system.",
       "Explaining OSWAP 10, Cryptography , Hashing",
    ],
  },
  {
    title: "TryHackme Badges",
  
    icon: tryhackme,
    iconBg: "#111010",
   
    points: [ 
      "BLUE - Hacking into Windows via Eternal blue.",
      "HASH CRACKER - Cracking all those Hashes.",
      "OSWAP TOP 10 - Understanding very OSWAP vulnerability.",
      "ICE - Exploiting Windows via Media Server.",
      "PENTESTING PRINCIPLES - Completing Pentesting Introduction",
      "Module. CAT LINUX.TXT - Being Competent in Linux.",
      "MR.ROBOT - Completing the Mr.Robot room.",
      "7 DAY STREAK - Achieving a 7 day Hacking Streak",
     
    ],
  },
  {
    title: "HackTheBox Pwned Boxes",
  
    icon: hackthebox,
    iconBg: "#001C00",
   
    points: [ 
      "EXPLORE",
      "PANDORA",
      "CAT",
      "BOUNTY HUNTER",
      "MEOW",
      "PAPER",
      "BACKDOOR",
      "SECRET",
      "PREVISE",
     
    ],
  },
  {
    title: "B.Tech - Information Technology",
    company_name: "St.Joseph's Institute Of Technology",
    icon: clg,
    iconBg: "#0E0F0F",
    date: "Sept 2018 - April 2022",
    points: [
      "Qualified First Class with 7.5 CGPA",
      "RIPShell - Reverse Shell Generator in Commad Line Interface by using Python Programming Language",
      "Business English Certificate - BEC",
      
    ],
  },
  {
    title: "HSC Graduation",
    company_name: "Velammal Matric Higher Secondary School",
    icon: scl,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "Qualified with 78 Percentage",
     
    ],
  },

  {
    title: "SSLC Graduation",
    company_name: "Velammal Matric Higher Secondary School",
    icon: scl,
    iconBg: "#E6DEDD",
    date: "2015 - 2016",
    points: [
      "Qualified with 96 Percentage",
      
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
