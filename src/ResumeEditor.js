import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CV = () => {
  const cvData = {
    personalInfo: {
      name: "MOHAMED SAID ELNAHRAWY",
      title: "Data Entry | Retail Assistant | Customer Service",
      contact: {
        email: "n7rawy1984@gmail.com",
        phone: "+971__________________",
        location: "Dubai, UAE",
      },
    },
    summary:
      "Reliable and adaptable individual with experience in retail assistance, data entry, and warehouse support. Fast learner with strong communication skills. Available for part-time or shift-based work. Fluent in Arabic and proficient in English.",
    education: {
      degree: "Bachelor of Commerce (Accounting)",
      university: "Tanta University",
      year: "2008",
    },
    experiences: [
      {
        id: 1,
        role: "Sales Assistant & Inventory Clerk",
        company: "Al Nahda Company",
        period: "2022 - 2024",
        location: "Alexandria, Egypt",
        achievements: [
          "Helped customers and managed stock",
          "Organized products and maintained clean displays",
          "Assisted with social media posts for promotions",
        ],
      },
      {
        id: 2,
        role: "Data Entry & Admin Assistant",
        company: "Self-Employed (Freelance)",
        period: "2021 - 2023",
        location: "Remote",
        achievements: [
          "Typed documents and entered data into Excel/Word",
          "Helped students and small businesses with basic reports",
        ],
      },
      {
        id: 6,
        role: "Accountant & Data Entry Operator",
        company: "Ansar Group",
        period: "2013 - 2015",
        location: "Dubai, UAE",
        achievements: [
          "Managed barcode system operations for trading company",
          "Reduced inventory discrepancies by 30% through systematic tracking",
          "Processed purchase orders and sales invoices",
          "Implemented bilingual reporting for government compliance",
        ],
      },
    ],
    skills: [
      "Data Entry (Excel, Word)",
      "Retail Customer Service",
      "Basic Inventory Management",
      "Social Media Handling (Basic)",
      "Fast Typing & Accuracy",
      "Teamwork & Flexibility",
    ],
    languages: [
      { language: "Arabic", proficiency: "Native" },
      { language: "English", proficiency: "Advanced" },
    ],
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

        <section className="cv-section">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>{cvData.summary}</p>
        </section>

        <section className="cv-section">
          <h3>EDUCATION</h3>
          <div className="education-item">
            <strong>{cvData.education.degree}</strong>
            <div>
              {cvData.education.university} | {cvData.education.year}
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>EXPERIENCE</h3>
          {cvData.experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <strong>{exp.role}</strong> | {exp.company}
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
          <h3>SKILLS</h3>
          <ul className="achievements-list">
            {cvData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
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

export default CV;
