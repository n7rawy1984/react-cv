import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Function to export CV as PDF
const exportToPDF = () => {
  try {
    window.print();
  } catch (error) {
    alert("Print function not available. Please use Ctrl+P to print.");
  }
};

// Alternative download function
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

// Function to copy CV content for Word
const copyForWord = () => {
  const cvContent = document.querySelector(".cv-container");
  const htmlContent = cvContent.innerHTML;

  // Create a temporary textarea to copy content
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

    I am writing to express my interest in opportunities where I can apply my combined skills in accounting, data management, and operational support. With over 15 years of practical experience, I have developed a solid foundation in financial record-keeping, efficient data entry, and basic inventory control. I am also keen on integrating modern tools, including AI applications and data analysis using Python and Excel, to enhance productivity.

    My diverse background has provided me with:
    - Competence in handling financial transactions and preparing basic accounting reports.
    - Strong ability in accurate data entry and maintaining organized digital records.
    - Experience in supporting warehouse operations and inventory tracking.
    - A proactive approach to learning and applying AI tools and data analysis techniques for process improvement.
    - Beginner-level proficiency in Python and advanced Excel skills for data analysis and visualization.

    Throughout my career, I have consistently focused on maintaining accuracy in my work and supporting team objectives. For instance, I have:
    - Contributed to improving financial record accuracy and data integrity.
    - Assisted in streamlining data entry processes and managing information flow.
    - Supported inventory management tasks which helped in reducing minor discrepancies.
    - Explored and utilized AI tools to assist in data analysis and content generation.
    - Applied Python basics and Excel advanced functions to analyze business data and create insights.

    As a fast learner with excellent problem-solving abilities, I consistently adapt to new technologies and methodologies quickly. I am a highly adaptable and eager-to-learn professional, committed to contributing to a positive and efficient work environment. I believe my versatile skill set and ability to rapidly acquire new competencies makes me a valuable asset to your team.

    I would welcome the opportunity to discuss how my capabilities align with your requirements. Thank you for your time and consideration - I look forward to the possibility of contributing to your team's success.

    Sincerely,
    MOHAMED ELNAHRAWY
  `;

  const cvData = {
    personalInfo: {
      name: "MOHAMED SAID ELNAHRAWY",
      title: "Business Operations Specialist | Aspiring Web Developer",
      contact: {
        email: "n7rawy1984@gmail.com",
        phone: "+971 ________________ ",
        location: "Dubai, UAE",
      },
    },
    summary:
      "Adaptable professional with 15+ years of experience in business operations, data management, and administrative support.Currently learning web development (HTML, CSS, JavaScript, React, Next.js) while maintaining expertise in data entry and operational processes. Fast learner with strong problem-solving skills, eager to transition into tech while applying business knowledge. Bilingual in English and Arabic, with a focus on attention to detail and continuous learning.",
    education: {
      degree: "Bachelor of Commerce (Accounting)",
      university: "Tanta University",
      year: "2008",
      additional:
        "Self-Learning Web Development (2024-2025): HTML, CSS, JavaScript, React, Next.js",
    },
    experiences: [
      {
        id: 1,
        role: "Freelance Accounting & Business Support",
        company: "Self-Employed",
        period: "2024 - Present",
        location: "Alexandria, Egypt",
        achievements: [
          "Provided accounting assistance to small businesses, focusing on record-keeping and data input.",
          "Supported clients in organizing financial data for reporting purposes.",
          "Offered basic business advisory, often involving data organization and tracking.",
          "Utilized AI tools to assist in market research and content drafting for clients.",
          "Applied Python basics and Excel advanced features for data analysis and client reporting.",
        ],
      },
      {
        id: 2,
        role: "Online Sales & Warehouse Support",
        company: "Al Nahda Company",
        period: "2022 - 2024",
        location: "Alexandria, Egypt",
        achievements: [
          "Assisted in inventory management tasks, helping to track stock movements and counts.",
          "Contributed to managing export documentation, focusing on accurate data entry of shipping details.",
          "Helped coordinate with suppliers, ensuring timely information flow.",
          "Participated in developing social media content, exploring AI tools for ideas and initial drafts.",
          "Used Excel data analysis tools to identify sales trends and inventory patterns.",
        ],
      },
      {
        id: 4,
        role: "Warehouse Operations & Logistics Assistant",
        company: "Alexandria Port",
        period: "2021 - 2022",
        location: "Alexandria, Egypt",
        achievements: [
          "Supported logistics operations, helping with coordination of import/export activities.",
          "Assisted in maintaining inventory tracking records, ensuring data consistency.",
          "Helped to identify minor process improvements in shipping documentation.",
          "Explored using data analysis tools for basic inventory insights.",
          "Applied problem-solving skills to resolve shipping documentation discrepancies efficiently.",
        ],
      },
      {
        id: 5,
        role: "Accountant & Store Keeper Assistant",
        company: "Al-Helal Company for Medical Supplies",
        period: "2016 - 2018",
        location: "Alexandria, Egypt",
        achievements: [
          "Assisted in managing inventory for medical equipment, focusing on stock organization and data entry.",
          "Supported the accounting team in data input for financial transactions.",
          "Helped prepare basic financial summaries.",
          "Contributed to maintaining the company's digital presence through data updates.",
          "Used Excel advanced functions to streamline inventory reporting processes.",
        ],
      },
      {
        id: 6,
        role: "Accountant & Data Entry Assistant",
        company: "Ansar Group",
        period: "2013 - 2015",
        location: "Dubai, UAE",
        achievements: [
          "Handled barcode system operations for product tracking, focusing on data accuracy.",
          "Contributed to processing purchase orders and sales invoices, ensuring correct data input.",
          "Assisted in reconciling inventory records with physical counts.",
          "Supported the team in preparing basic financial data for reporting.",
          "Demonstrated fast learning ability by quickly mastering new ERP system functionalities.",
        ],
      },
    ],
    achievements: [
      "Data Accuracy: Consistently maintained high accuracy in data entry and record-keeping across various roles.",
      "Process Support: Actively supported operational workflows in accounting and warehousing to enhance efficiency.",
      "Digital Adaptability: Quickly learned and applied new software and tools, including initial exploration of AI functionalities.",
      "Organizational Skills: Successfully managed and organized diverse sets of information and physical inventory.",
      "Problem-Solving: Assisted in identifying and resolving minor data discrepancies and operational bottlenecks with excellent analytical thinking.",
      "Fast Learning: Demonstrated ability to rapidly acquire new technical skills, from ERP systems to programming basics.",
      "Data Analysis: Applied Python and Excel to extract meaningful insights from business data and improve decision-making processes.",
    ],
    skills: {
      technical: [
        "Financial Data Entry",
        "Basic Accounting Principles",
        "Inventory Tracking",
        "Data Management Systems",
        "MS Office Suite (Advanced Excel, Word)",
        "Python Programming (Beginner - Data Analysis)",
        "Excel Data Analysis & Visualization",
        "ERP System Familiarity (Microsoft Dynamics)",
        "Barcode System Operations",
        "ICDL Certified",
      ],
      management: [
        "Operational Support",
        "Time Management",
        "Attention to Detail",
        "Problem-Solving & Analytical Thinking",
        "Fast Learning & Adaptability",
        "Team Collaboration",
      ],
      digital: [
        "AI Tools (ChatGPT, Basic AI for data tasks)",
        "Digital Data Entry",
        "Python for Data Analysis (Beginner)",
        "Advanced Excel Functions & Pivot Tables",
        "Email & Communication Tools",
        "Internet Research",
      ],
      regional: [
        "Basic GCC Regulations Understanding",
        "Bilingual Communication (English/Arabic)",
      ],
    },
    languages: [
      { language: "Arabic", proficiency: "Native" },
      { language: "English", proficiency: "Fluent" },
    ],
    coverLetter: coverLetterContent,
  };

  return (
    <div className="app-container">
      <div className="cv-container">
        {/* Header Section */}
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

        {/* Cover Letter */}
        <section className="cv-section cover-letter">
          <h3>COVER LETTER</h3>
          <div className="cover-letter-content">
            {cvData.coverLetter.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Professional Summary */}
        <section className="cv-section">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>{cvData.summary}</p>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h3>EDUCATION & LEARNING</h3>
          <div className="education-item">
            <strong>{cvData.education.degree}</strong>
            <div>
              {cvData.education.university} | {cvData.education.year}
            </div>
          </div>
          <div className="education-item">
            <strong>Continuous Learning</strong>
            <div>{cvData.education.additional}</div>
          </div>
        </section>

        {/* Experience */}
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

        {/* Key Achievements */}
        <section className="cv-section">
          <h3>KEY ACHIEVEMENTS</h3>
          <ul className="achievements-list">
            {cvData.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Skills */}
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

        {/* Languages */}
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
