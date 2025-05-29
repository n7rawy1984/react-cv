import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CV = () => {
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  const cvRef = useRef(null);

  const handleGeneratePdf = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: "Mohamed_Said_CV",
    removeAfterPrint: true,
    pageStyle: `
      @page {
        size: A4;
        margin: 1cm;
      }
      @media print {
        body {
          zoom: 90%;
        }
        .cv-container {
          box-shadow: none;
          padding: 0;
          margin: 0;
        }
        .action-buttons {
          display: none !important;
        }
      }
    `,
    onPrintError: () => alert("Error while printing! Please try again."),
  });

  const coverLetterContent = `
    Dear Hiring Manager,

    I am pleased to submit my application for consideration. With over 15 years of progressive experience in accounting, operations management, and logistics, complemented by expertise in digital marketing and AI tools, I am confident in my ability to contribute significantly to your organization.

    My professional journey has equipped me with:
    - Comprehensive financial management skills with GCC compliance expertise
    - Proven ability to optimize operations and implement efficiency improvements
    - Advanced digital skills including AI tools and social media marketing
    - Bilingual proficiency in English and Arabic

    Notable achievements include:
    - Developing financial systems that improved efficiency by 30%
    - Implementing inventory management systems that reduced discrepancies by 45%
    - Leading digital transformation initiatives for multiple companies
    - Growing social media engagement by 20-35% through targeted campaigns

    What sets me apart is my unique combination of financial acumen, operational expertise, and digital capabilities. I thrive in challenging environments that require analytical thinking and creative problem-solving.

    I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for your time and consideration - I look forward to the possibility of contributing to your team's success.

    Sincerely,
    MOHAMED SAID NASR ZAKI ELNAHRAWY
  `;

  const cvData = {
    personalInfo: {
      name: "MOHAMED SAID NASR ZAKI ELNAHRAWY",
      title:
        "Senior Accountant & Operations Manager | Digital Marketing Specialist",
      contact: {
        email: "your.email@example.com",
        phone: "+971 XX XXX XXXX",
        location: "Dubai, UAE",
        linkedin: "linkedin.com/in/yourprofile",
      },
    },
    summary:
      "Results-driven professional with 15+ years of experience in accounting, operations management, and logistics. Combines financial expertise with digital skills including AI tools and social media marketing. Bilingual in English and Arabic with proven ability to optimize processes and drive business improvements.",
    education: {
      degree: "Bachelor of Commerce (Accounting)",
      university: "Tanta University",
      year: "2008",
    },
    experiences: [
      {
        id: 1,
        role: "Freelance Accounting & Business Consultant",
        company: "Self-Employed",
        period: "2024 - Present",
        location: "Alexandria, Egypt",
        achievements: [
          "Provided accounting services to Egyptian small and medium businesses",
          "Developed financial reporting systems tailored to client needs",
          "Implemented cost-saving measures averaging 15-20% reduction in operational costs",
          "Offered business advisory services to improve financial processes",
        ],
      },
      {
        id: 2,
        role: "Online Sales Manager & Warehouse Manager",
        company: "Al Nahda Company",
        period: "2022 - 2024",
        location: "Alexandria, Egypt",
        achievements: [
          "Implemented inventory management system reducing stock discrepancies by 45%",
          "Managed export documentation for international shipments",
          "Coordinated with suppliers for timely deliveries",
          "Developed social media marketing strategy increasing online sales by 35%",
        ],
      },
      {
        id: 4,
        role: "Warehouse and Logistics Manager",
        company: "Alexandria Port",
        period: "2021 - 2022",
        location: "Alexandria, Egypt",
        achievements: [
          "Supervised logistics operations for import/export activities",
          "Implemented bilingual inventory tracking system",
          "Reduced shipping delays by 35% through process optimization",
          "Utilized data analysis tools for demand forecasting",
        ],
      },
      {
        id: 3,
        role: "Personnel Affairs and Recruitment Officer",
        company: "Al-Qafei Recruitment Company",
        period: "2019 - 2020",
        location: "Kingdom of Saudi Arabia",
        achievements: [
          "Managed recruitment processes for regional markets",
          "Handled employee documentation compliant with labor laws",
          "Coordinated visa processing for international positions",
          "Implemented efficient candidate screening system",
        ],
      },
      {
        id: 5,
        role: "Accountant & Store Keeper",
        company: "Al-Helal Company for Medical Supplies",
        period: "2016 - 2018",
        location: "Alexandria, Egypt",
        achievements: [
          "Managed inventory for medical equipment",
          "Implemented accounting system for regional compliance",
          "Prepared financial reports meeting international standards",
          "Managed company's digital presence and brand awareness",
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
    achievements: [
      "Digital Transformation: Led migration to automated accounting systems for multiple companies",
      "Process Optimization: Reduced monthly closing time by 40% through workflow improvements",
      "AI Implementation: Successfully integrated AI tools for financial analysis and marketing",
      "Social Media Growth: Increased engagement by 35% through targeted content strategy",
      "Published Author: Recognized for literary work at Cairo International Book Fair",
    ],
    skills: {
      technical: [
        "Financial Reporting & Analysis",
        "Inventory Management",
        "ERP Systems",
        "Microsoft Dynamics",
        "Data Analysis",
        "ICDL Certified",
      ],
      management: [
        "Operations Management",
        "Team Leadership",
        "Process Optimization",
        "Vendor Relations",
        "Cross-cultural Coordination",
      ],
      digital: [
        "AI Tools & Automation",
        "Social Media Marketing",
        "Digital Advertising",
        "Content Creation",
        "Data Visualization",
        "ChatGPT & AI Assistants",
      ],
      regional: [
        "GCC Compliance",
        "UAE VAT Regulations",
        "Bilingual Documentation",
        "International Standards",
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
      <div className="cv-container" ref={cvRef}>
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
            <span>
              <i className="fab fa-linkedin"></i>{" "}
              {cvData.personalInfo.contact.linkedin}
            </span>
          </div>
        </header>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="pdf-button" onClick={handleGeneratePdf}>
            <i className="fas fa-file-pdf"></i> Generate PDF
          </button>
          <button
            className="cover-letter-toggle"
            onClick={() => setShowCoverLetter(!showCoverLetter)}
          >
            {showCoverLetter ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}{" "}
            {showCoverLetter ? "Hide Cover Letter" : "Show Cover Letter"}
          </button>
        </div>

        {/* Cover Letter */}
        {showCoverLetter && (
          <section className="cv-section cover-letter">
            <h3>COVER LETTER</h3>
            <div className="cover-letter-content">
              {cvData.coverLetter.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Professional Summary */}
        <section className="cv-section">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>{cvData.summary}</p>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h3>EDUCATION</h3>
          <div className="education-item">
            <strong>{cvData.education.degree}</strong>
            <div>
              {cvData.education.university} | {cvData.education.year}
            </div>
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

export default CV;
