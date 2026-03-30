export interface Profile {
  name: string;
  job: string;
  experience: string;
  city: string;
  nativeLanguage: string;
  businessLanguage: string;
}

export interface Experience {
  date: string;
  client: string;
  description: string;
  tech: string;
}

export interface Education {
  date: string;
  school: string;
  description: string;
}

export interface Hobby {
  category: string;
  items: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string;
  link?: string;
}

const CAREER_START_YEAR = 2005;

// Profile information
export const profile: Profile = {
  name: "Renaud Gallego",
  job: "Software Test Engineer",
  experience: `${new Date().getFullYear() - CAREER_START_YEAR} years`,
  city: "Nantes, France",
  nativeLanguage: "French",
  businessLanguage: "English"
};

// Experiences in France
export const experiencesFrance: Experience[] = [
  {
    date: "08/2024 - Now",
    client: "SII - Desoutter Validation",
    description: "Validation testing of software and firmwares of tightenings tools used in industrial fields such as aeronautics and automative.",
    tech: "Jenkins, Spiratest, Redmine"
  },
  {
    date: "01/2023 - 05/2024",
    client: "SII - Bouygues DSI PRECIS Serv ISIS",
    description: "Testing of the real time part of UTAH project involving the revamp of the AAA system (authentication, authorization, accounting) for Internet boxes to handle RADIUS and DHCP protocols.",
    tech: "Jira, Xray, Robotframework, Postman"
  },
  {
    date: "05/2022 - 12/2022",
    client: "SII - Avancial IV Transil",
    description: "Testing of new features and fixes across three scopes: EIFFEL (service monitoring and supervision), API Confort (crowd estimation and display), and ALMA (audio broadcasting and information display at stations).",
    tech: "Jenkins, Xray, Datadog, Postman"
  },
  {
    date: "07/2020 - 06/2022",
    client: "SII - Orange OBS",
    description: "Testing new features and improvements added to Orange's mobile billing payment services for Internet, mobile, and xMS transactions.",
    tech: "Jenkins, Robotframework, Postman"
  },
  {
    date: "05/2019 - 06/2020",
    client: "Accenture - Bouygues",
    description: "Testing new features added to the service platforms within the context of TV broadcasting managed by Bouygues Telecom.",
    tech: "HP ALM, SoapUI"
  }
];

// Experiences Abroad
export const experiencesAbroad: Experience[] = [
  {
    date: "10/2012 - 08/2017",
    client: "CT GmbH Management - Germany",
    description: "Ensured the coordination of translation and testing teams. Our goal was to provide high quality localised assets of game franchises (game text, scripts for audio recording, marketing assets). Our main clients were Nintendo, Microsoft, Square Enix, Codemasters and Blizzard.",
    tech: "Jira, Mantis, MemoQ, SDLTrados"
  },
  {
    date: "03/2011 - 09/2012",
    client: "CT GmbH Coordination - Germany",
    description: "Coordination of the testing teams : English, French, Italian, German and Spanish. Our goal was to check the quality of localised assets of games. Translations were done by our in-house translation teams.",
    tech: "Jira, Mantis, MemoQ, SDLTrados"
  },
  {
    date: "06/2005 - 02/2011",
    client: "Nintendo Lead tester - Germany",
    description: "Ensure the quality of localization/translation for franchises published by Nintendo of Europe. Bug reporting and management of French team.",
    tech: "Jira, Mantis"
  }
];

// Education
export const education: Education[] = [
  {
    date: "2023",
    school: "Orsys - Nantes",
    description: "Automatisation Robotframework / Selenium"
  },
  {
    date: "2021",
    school: "Certilog - Nantes",
    description: "Automated software testing"
  },
  {
    date: "2019",
    school: "ENI - Nantes",
    description: "ISTQB Foundation Certification"
  },
  {
    date: "2003",
    school: "IUP - Lorient",
    description: "Diplôme d'Ingénieur-Maître Génie Électrique et Informatique Industrielle"
  },
  {
    date: "2000",
    school: "IUT - Rennes",
    description: "DUT Génie Électrique et Informatique Industrielle"
  }
];

// Hobbies
export const hobbies: Hobby[] = [
  {
    category: "Sport",
    items: "Bikepacking, Fitness"
  },
  {
    category: "Programming",
    items: "Python, C"
  },
  {
    category: "AI & Automation",
    items: "Vibe coding around with Claude"
  },
  {
    category: "Languages of interest",
    items: "Spanish, German"
  },
  {
    category: "Driving licenses",
    items: "Car and bike"
  },
  {
    category: "Other",
    items: "Investment, Cinema, Gaming"
  }
];

// Projects
export const projects: Project[] = [
  {
    name: "My Resume Terminal",
    description: "Interactive terminal-style resume interface built with React and TypeScript.",
    tech: "React, TypeScript, Parcel, CSS",
    link: "https://github.com/renaudgallego/my-resume-terminal"
  },
  {
    name: "Discord Bot Sandbox",
    description: "Experimental Discord bot framework and utilities for learning and prototyping.",
    tech: "Python, discord.py",
    link: "https://github.com/renaudgallego/discord-bot-sandbox"
  },
  {
    name: "Python Training",
    description: "Educational resources and examples for learning Python programming.",
    tech: "Python",
    link: "https://github.com/renaudgallego/python-training"
  }
];
