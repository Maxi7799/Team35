import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";

const Modal: React.FC<{
  title: string;
  content: string;
  onClose: () => void;
}> = ({ title, content, onClose }) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export const ModulePage1: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Australian Healthcare System"
  );
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <Header />
      <div className="module-page">
        <aside className="module-sidebar">
          <Link to="/educational" className="back-button">
            Back to Modules
          </Link>
          <div className="contents-container">
            <nav className="module-contents">
              <h3>Contents</h3>
              <ul>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Australian Healthcare System"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      toggleSection("Australian Healthcare System")
                    }
                  >
                    Australian Healthcare System
                    <span
                      className={`arrow ${
                        expandedSection === "Australian Healthcare System"
                          ? "down"
                          : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Australian Healthcare System" && (
                    <ul className="submenu">
                      <li>
                        <a href="#section1">1.1. Topic One</a>
                      </li>
                      <li>
                        <a href="#section2">1.2. Topic Two</a>
                      </li>
                      <li>
                        <a href="#section3">1.3. Topic Three</a>
                      </li>
                      <li>
                        <a href="#quiz">1.4. Knowledge Checker</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/module2" className="accordion-link">
                    Optimising Pregnancy Care
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module3" className="accordion-link">
                    Common Health Risks
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module4" className="accordion-link">
                    Nutritional Advice
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module5" className="accordion-link">
                    Exercise and Physical Activity
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module6" className="accordion-link">
                    Birth Preparation
                    <span className="arrow right"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="module-content">
          <h2>1. Module Title</h2>

          <section id="section1">
            <h3>1.1. Topic One</h3>
            <p>Content for Topic One...</p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Topic One Details",
                  "Detailed content for Topic One..."
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>1.2. Topic Two</h3>
            <p>Content for Topic Two...</p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Topic Two Details",
                  "Detailed content for Topic Two..."
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>1.3. Topic Three</h3>
            <p>Content for Topic Three...</p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Topic Three Details",
                  "Detailed content for Topic Three..."
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>1.4. Knowledge Checker</h3>
            <p>Quiz questions go here...</p>
          </section>

          <div className="navigation-buttons">
            <button className="prev-button">Previous Chapter</button>
            <button className="next-button">Next Chapter</button>
          </div>
        </main>
      </div>
      <Footer />
      {modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </>
  );
};
