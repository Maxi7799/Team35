import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { rootAddress } from "../../../../env";
import FirstVisitPieChart from "../../../components/chart/FirstVisitPieChart";
import { QuestionSlideshow2 } from "../quizs/questionSlideShow2";
import { useTranslation } from "react-i18next";

export const ModulePage2: React.FC = () => {
  const [t] = useTranslation("global");

  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Antenatal Visits"
  );

  const [modalContent, setModalContent] = useState<{
    title: string;
    pdfUrl: string;
  } | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const openModal = (title: string, pdfUrl: string) => {
    setModalContent({ title, pdfUrl });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const [firstVisitData, setFirstVisitData] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/firstvisit`);
      const data = await response.json();
      setFirstVisitData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="module-page">
        <aside className="module-sidebar">
          <Link to="/educational" className="back-button">
            {t("education.sidebar.back-btn")}
          </Link>
          <div className="contents-container">
            <nav className="module-contents">
              <h3>{t("education.sidebar.overview")}</h3>
              <ul>
                <li>
                  <Link to="/module1" className="accordion-link">
                    {t("education.sidebar.card-1-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Antenatal Visits" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Antenatal Visits")}
                  >
                    {t("education.sidebar.card-2-title")}
                    <span
                      className={`arrow ${
                        expandedSection === "Antenatal Visits"
                          ? "down"
                          : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Antenatal Visits" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          {t("education.sidebar.card-2-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-2-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          {t("education.sidebar.card-2-topic-3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          {t("education.sidebar.card-2-topic-4")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section5"
                          onClick={(e) => handleLinkClick(e, "#section5")}
                        >
                          {t("education.sidebar.card-2-topic-5")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section6"
                          onClick={(e) => handleLinkClick(e, "#section6")}
                        >
                          {t("education.sidebar.card-2-topic-6")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-2-topic-7")}
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/module3" className="accordion-link">
                    {t("education.sidebar.card-3-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module4" className="accordion-link">
                    {t("education.sidebar.card-4-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module5" className="accordion-link">
                    {t("education.sidebar.card-5-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module6" className="accordion-link">
                    {t("education.sidebar.card-6-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="module-content">
          <h2>2. Antenatal Visits</h2>
          <p>
            Antenatal visits are essential check-ups during pregnancy that
            monitor the health of both mother and baby. These appointments track
            growth, detect potential issues early, and offer guidance on
            nutrition and wellness, ensuring a healthy pregnancy journey.
          </p>

          <section id="section1">
            <h3>2.1 Why Are Antenatal Visits Important?</h3>
            <p>
              Regular antenatal visits are crucial for maintaining the health of
              both you and your baby throughout pregnancy. These check-ups allow
              healthcare providers to track your baby’s growth through
              ultrasounds and fetal monitoring, ensuring proper development and
              detecting any abnormalities early on. They also monitor your
              health by keeping an eye on vital signs like blood pressure and
              weight, which helps in the early detection of conditions such as
              gestational diabetes, hypertension, and preeclampsia.
              Additionally, these visits provide expert advice on nutrition,
              exercise, and mental health, ensuring you receive comprehensive
              support and referrals to specialists if needed.
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal("Why Are Antenatal Visits Important?", "m2t1.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>2.2 When Should You Go?</h3>
            <p>
              Antenatal visits are structured to ensure the health of both
              mother and baby throughout pregnancy. The following chart shows
              the average time of first antenatal care visit (by week):
            </p>
            <div className="chart-section">
              {firstVisitData ? (
                <>
                  <div className="chart">
                    <FirstVisitPieChart data={firstVisitData} />
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <p>
              In the first trimester (0-12 weeks), it’s important to schedule
              your first visit early, typically around 6-8 weeks, to confirm the
              pregnancy and establish a care plan. During the second trimester
              (13-28 weeks), visits every 4 weeks focus on monitoring the baby’s
              growth and screening for complications like gestational diabetes
              and high blood pressure. In the third trimester (29-40 weeks),
              visits become more frequent, preparing for labor and delivery
              while closely monitoring the baby’s position and maternal health.
              Early visits are essential, as they can lower the risk of
              complications, with 79.6% of women starting antenatal care before
              14 weeks.
            </p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("When Should You Go?", "m2t2.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>2.3 What to Prepare/Expect Before Your Antenatal Visit</h3>
            <p>
              Preparing for your antenatal visit can help you make the most of
              your time with your healthcare provider. Start by bringing
              essential documents like your health records and insurance
              information. Prepare a list of questions about your pregnancy,
              labor, and postpartum care, and track any symptoms you’ve
              experienced, such as headaches or changes in fetal movement.
              Monitor your weight and diet, and be ready to discuss these with
              your provider. Plan your transportation, especially if you’re not
              feeling well, and wear comfortable clothing for examinations.
              Allow extra time for your appointment, as it may vary in length,
              and approach your visit with a positive mindset. Taking these
              steps will ensure a productive and informative antenatal visit,
              setting the stage for a healthy pregnancy journey.
            </p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "What to Prepare/Expect Before Your Antenatal Visit",
                  "m2t3.pdf"
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="section4">
            <h3>2.4. What Happens During Antenatal Visits?</h3>
            <p>
              During your antenatal visits, several key checks and tests are
              performed to ensure a healthy pregnancy. A blood pressure check is
              crucial for detecting early signs of hypertension, while a urine
              test screens for infections and gestational diabetes. Ultrasound
              scans allow real-time monitoring of your baby’s development, and
              blood tests help track your iron levels and overall health.
              Additionally, you’ll receive health advice tailored to managing
              your symptoms, nutrition, and exercise, helping you maintain your
              well-being throughout your pregnancy.
            </p>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() =>
                openModal("What Happens During Antenatal Visits?", "m2t4.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section5">
            <h3>2.5 After Your Antenatal Visit</h3>
            <p>
              After your antenatal visit, it’s important to reflect and ensure
              you’re following through on your healthcare provider’s
              recommendations. Start by reviewing any notes or handouts you
              received to reinforce what you learned. Implement any advice, such
              as dietary changes, exercise routines, or medication adjustments.
              Schedule your next appointment and mark it on your calendar, or
              confirm when you should return, usually within 4-6 weeks. Continue
              monitoring any symptoms discussed during your visit, and reach out
              to your provider if new symptoms arise or if existing ones worsen.
              Additionally, consider joining antenatal classes or support groups
              to connect with other expectant parents, offering valuable support
              and shared experiences.
            </p>
            <a
              href="#section5-more"
              className="details-link"
              onClick={() =>
                openModal("After Your Antenatal Visit", "m2t5.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section6">
            <h3>2.6 Why Regular Check-ups Matter</h3>
            <p>
              Stay Healthy, Stay Informed! Regular antenatal visits are
              essential for catching complications like hypertension and
              gestational diabetes early, ensuring they don’t become serious.
              These visits help you monitor both your well-being and your baby’s
              growth, keeping everything on track. Empower yourself by learning
              about pregnancy, childbirth, and parenting—ask questions and get
              the information you need. Build a strong relationship with your
              healthcare provider for open communication and reassurance.
              Consistent check-ups provide peace of mind, reduce anxiety, and
              keep you informed throughout your pregnancy journey. Remember,
              your health matters, and regular check-ups are key to a healthy
              pregnancy for you and your baby.
            </p>
            <a
              href="#section6-more"
              className="details-link"
              onClick={() =>
                openModal("Why Regular Check-ups Matter", "m2t6.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>1.7 Test Your Knowledge!</h3>
            <p>
              Try the questions below to test your understanding of the above
              content.
            </p>
            <QuestionSlideshow2 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module1">
              <button className="prev-button">Previous Chapter</button>
            </Link>
            <Link to="/module3">
              <button className="next-button">Next Chapter</button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
      {modalContent && (
        <Modal
          title={modalContent.title}
          pdfUrl={modalContent.pdfUrl}
          onClose={closeModal}
        />
      )}
    </>
  );
};
