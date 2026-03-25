import React from "react";
import {
  profile,
  experiencesFrance,
  experiencesAbroad,
  education,
  hobbies,
  projects
} from "../data/resume";
import { commands } from "./registry";

export type CommandOutput = React.ReactNode;

export function executeCommand(input: string): CommandOutput {
  const command = input.toLowerCase().trim().slice(1); // remove leading /

  switch (command) {
    case "help":
    case "?":
      return renderHelp();
    case "whoami":
      return renderWhoami();
    case "experiences":
      return renderExperiences();
    case "education":
      return renderEducation();
    case "hobbies":
      return renderHobbies();
    case "projects":
      return renderProjects();
    case "linkedin":
      return renderLinkedIn();
    // case "getresume":
    //   return renderGetResume();
    case "clear":
      return null; // handled specially by Terminal component
    case "dark":
    case "light":
    case "retro":
      return null; // handled specially by Terminal component
    default:
      return <div className="error">Command not found: {input}</div>;
  }
}

function renderHelp(): CommandOutput {
  return (
    <div className="help-output">
      <ul>
        {commands.map(cmd => (
          <li key={cmd.name}>
            <code>/{cmd.name}</code> : {cmd.description}
          </li>
        ))}
        <li className="hint">
          <em>
            Press TAB key to autocomplete commands. Press up and down arrows to
            go through previously used commands.
          </em>
        </li>
      </ul>
    </div>
  );
}

function renderWhoami(): CommandOutput {
  return (
    <div className="whoami-output">
      <ul>
        <li>Name : {profile.name}</li>
        <li>Job : {profile.job}</li>
        <li>Experience : {profile.experience}</li>
        <li>City : {profile.city}</li>
        <li>Native language : {profile.nativeLanguage}</li>
        <li>Business Language : {profile.businessLanguage}</li>
      </ul>
    </div>
  );
}

function renderExperiences(): CommandOutput {
  return (
    <div className="experiences-output">
      <h3>Experiences in France</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Description</th>
            <th>Tech</th>
          </tr>
        </thead>
        <tbody>
          {experiencesFrance.map((exp, idx) => (
            <tr key={`france-${idx}`}>
              <td>{exp.date}</td>
              <td>{exp.client}</td>
              <td>{exp.description}</td>
              <td>{exp.tech}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Experiences Abroad</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Description</th>
            <th>Tech</th>
          </tr>
        </thead>
        <tbody>
          {experiencesAbroad.map((exp, idx) => (
            <tr key={`abroad-${idx}`}>
              <td>{exp.date}</td>
              <td>{exp.client}</td>
              <td>{exp.description}</td>
              <td>{exp.tech}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderEducation(): CommandOutput {
  return (
    <div className="education-output">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>School</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu, idx) => (
            <tr key={`edu-${idx}`}>
              <td>{edu.date}</td>
              <td>{edu.school}</td>
              <td>{edu.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderHobbies(): CommandOutput {
  return (
    <div className="hobbies-output">
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={`hobby-${idx}`}>
            <strong>{hobby.category}</strong> : {hobby.items}
          </li>
        ))}
      </ul>
    </div>
  );
}

function renderProjects(): CommandOutput {
  return (
    <div className="projects-output">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Tech</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((proj, idx) => (
            <tr key={`proj-${idx}`}>
              <td>{proj.name}</td>
              <td>{proj.description}</td>
              <td>{proj.tech}</td>
              <td>
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderLinkedIn(): CommandOutput {
  // Open LinkedIn profile in new window
  window.open("https://www.linkedin.com/in/renaud-gallego/", "_blank");
  return (
    <div className="linkedin-output success">
      Opening LinkedIn profile...
    </div>
  );
}

// function renderGetResume(): CommandOutput {
//   return (
//     <div className="getresume-output">
//       <p>
//         <a
//           href="/resume.pdf"
//           download="Renaud_Gallego_Resume.pdf"
//           className="download-link"
//         >
//           Download Resume (PDF)
//         </a>
//       </p>
//       <p className="hint">
//         If the download doesn't start, your browser may require you to click
//         "Save" in a dialog.
//       </p>
//     </div>
//   );
// }
