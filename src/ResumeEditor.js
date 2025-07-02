import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const exportToPDF = () => {
  try {
    window.print();
  } catch (error) {
    alert("Print function not available. Please use Ctrl+P to print.");
  }
};

const downloadAsHTML = () => {
  const cvContent = document.querySelector(".cv-container").outerHTML;
  const fullHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>CV - Mohamed Elnahrawy</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .cv-container { max-width: 800px; margin: 0 auto; }
        .cv-header { text-align: center; margin-bottom: 30px; }
        .cv-section { margin-bottom: 25px; }
        .experience-item { margin-bottom: 20px; }
        .achievements-list { margin: 10px 0; }
        .skills-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .contact-info { display: flex; justify-content: center; gap: 20px; margin-top: 10px; }
        @media print { body { margin: 0; } }
      </style>
    </head>
    <body>
      ${cvContent}
    </body>
    </html>
  `;

  const blob = new Blob([fullHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Mohamed_Elnahrawy_CV.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const copyForWord = () => {
  const cvContent = document.querySelector(".cv-container");
  const htmlContent = cvContent.innerHTML;

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = cvContent.innerText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  alert("CV content copied! You can paste it into a Word document.");
};

const CV_Combined_ModerateExperience = () => {
  const coverLetterContent = `
    Dear Hiring Manager,

    I am writing to express my interest in data analyst or data-driven operations roles that leverage both analytical tools and business insight. With over 15 years of hands-on experience in accounting, data management, and logistics support, I bring a practical understanding of business processes along with growing expertise in data analysis using Python and Excel.

    My experience includes:
    - Handling and organizing large sets of financial and inventory data.
    - Using Excel (Pivot Tables, VLOOKUP, Charts) for reporting and trend analysis.
    - Leveraging Python (pandas, NumPy, matplotlib) for data cleaning and basic analytics.
    - Exploring AI tools to improve operational workflows and generate content insights.

    I am currently advancing my skills through self-learning in web development and data analysis. My goal is to contribute to a team where my analytical mindset, attention to detail, and ability to learn rapidly can support data-driven decision-making.

    Thank you for considering my application. I look forward to the opportunity to contribute and grow within your team.

    Sincerely,
    MOHAMED ELNAHRAWY
  `;

  const cvData = {
    personalInfo: {
      name: "MOHAMED SAID ELNAHRAWY",
      title: "Data Analyst | Accounting & Business Operations Professional",
      contact: {
        email: "n7rawy1984@gmail.com",
        phone: "+971 ________________ ",
        location: "Dubai, UAE",
      },
    },
    summary:
      "Accounting and operations professional with 15+ years of experience in financial data entry, warehouse support, and business reporting. Currently transitioning into data analysis by developing Python, Excel, and AI-assisted tools skills. Adept at organizing data, supporting workflows, and applying technology to improve efficiency.",
    education: {
      degree: "Bachelor of Commerce (Accounting)",
      university: "Tanta University",
      year: "2008",
      additional:
        "Courses: Python for Data Analysis (Udemy, 2025), Excel for Business (Coursera, 2024), Learning React and JavaScript (Self-paced, 2024-2025)",
    },
    experiences: [
      {
        id: 1,
        role: "Freelance Accounting & Business Support",
        company: "Self-Employed",
        period: "2024 - Present",
        location: "Alexandria, Egypt",
        achievements: [
          "Assisted clients in organizing financial and operational data.",
          "Used Excel to create custom financial reports and dashboards.",
          "Explored AI and automation tools to streamline reporting.",
          "Used Python scripts for data formatting and merging tasks.",
        ],
      },
      {
        id: 2,
        role: "Online Sales & Warehouse Support",
        company: "Al Nahda Company",
        period: "2022 - 2024",
        location: "Alexandria, Egypt",
        achievements: [
          "Managed stock data and contributed to inventory reports.",
          "Used Excel for sales trend analysis.",
          "Assisted with export documentation and shipping data.",
        ],
      },
      {
        id: 3,
        role: "Warehouse Operations & Logistics Assistant",
        company: "Alexandria Port",
        period: "2021 - 2022",
        location: "Alexandria, Egypt",
        achievements: [
          "Maintained inventory data consistency using Excel.",
          "Assisted in reporting discrepancies in stock and shipment data.",
        ],
      },
      {
        id: 4,
        role: "Accountant & Store Keeper Assistant",
        company: "Al-Helal Company for Medical Supplies",
        period: "2016 - 2018",
        location: "Alexandria, Egypt",
        achievements: [
          "Organized stock records and assisted with financial data entry.",
          "Used Excel functions to generate daily inventory reports.",
        ],
      },
      {
        id: 5,
        role: "Accountant & Data Entry Assistant",
        company: "Ansar Group",
        period: "2013 - 2015",
        location: "Dubai, UAE",
        achievements: [
          "Handled barcode system for inventory tracking.",
          "Used ERP software to maintain sales and purchase data.",
        ],
      },
    ],
    achievements: [
      "Built automated Excel dashboards for basic data visualization.",
      "Used Python scripts to clean and structure CSV data.",
      "Explored AI tools to assist in content creation and data summarization.",
      "Rapidly learned and applied digital tools in multiple roles.",
    ],
    skills: {
      technical: [
        "Python (pandas, NumPy, matplotlib) – Beginner",
        "Excel (Pivot Tables, VLOOKUP, Charts)",
        "Basic SQL (in progress)",
        "MS Word, PowerPoint",
        "ERP Systems: Microsoft Dynamics",
        "HTML, CSS, React (Learning)",
      ],
      management: [
        "Time Management",
        "Attention to Detail",
        "Data Organization",
        "Problem Solving",
        "Inventory Handling",
      ],
      digital: [
        "AI Tools (ChatGPT, Google Bard)",
        "Internet Research",
        "Google Workspace & Microsoft 365",
        "Data Entry & Cleaning",
      ],
      regional: [
        "Understanding of GCC Business Culture",
        "Fluent Arabic & English Communication",
      ],
    },
    languages: [
      { language: "Arabic", proficiency: "Native" },
      { language: "English", proficiency: "Proficient" },
    ],
    coverLetter: coverLetterContent,
  };

  return (
    <div className="app-container">
      <div className="cv-container">
        <header className="cv-header">
          <h1>{cvData.personalInfo.name}</h1>
          <h2>{cvData.personalInfo.title}</h2>
          <div className="contact-info">
            <span>
              <i className="fas fa-envelope"></i>{" "}
              {cvData.personalInfo.contact.email}
            </span>
            <span>
              <i className="fas fa-phone"></i>{" "}
              {cvData.personalInfo.contact.phone}
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {cvData.personalInfo.contact.location}
            </span>
          </div>
        </header>

        <section className="cv-section cover-letter">
          <h3>COVER LETTER</h3>
          <div className="cover-letter-content">
            {cvData.coverLetter.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>{cvData.summary}</p>
        </section>

        <section className="cv-section">
          <h3>EDUCATION & LEARNING</h3>
          <div className="education-item">
            <strong>{cvData.education.degree}</strong>
            <div>
              {cvData.education.university} | {cvData.education.year}
            </div>
          </div>
          <div className="education-item">
            <strong>Additional Learning</strong>
            <div>{cvData.education.additional}</div>
          </div>
        </section>

        <section className="cv-section">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          {cvData.experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <div>
                  <strong>{exp.role}</strong> | {exp.company}
                </div>
                <div className="experience-period">{exp.period}</div>
              </div>
              <div className="experience-location">
                <i className="fas fa-map-marker-alt"></i> {exp.location}
              </div>
              <ul className="achievements-list">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h3>KEY ACHIEVEMENTS</h3>
          <ul className="achievements-list">
            {cvData.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h3>SKILLS & COMPETENCIES</h3>
          <div className="skills-container">
            <div className="skills-column">
              <h4>Technical Skills</h4>
              <ul>
                {cvData.skills.technical.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <h4>Management Skills</h4>
              <ul>
                {cvData.skills.management.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <h4>Digital Skills</h4>
              <ul>
                {cvData.skills.digital.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <h4>Regional Expertise</h4>
              <ul>
                {cvData.skills.regional.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>LANGUAGES</h3>
          <div className="languages-list">
            {cvData.languages.map((lang, index) => (
              <div key={index}>
                <strong>{lang.language}:</strong> {lang.proficiency}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV_Combined_ModerateExperience;
