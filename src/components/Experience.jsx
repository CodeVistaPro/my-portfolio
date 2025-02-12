"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import Article3 from "../assets/article3.png";
import Article4 from "../assets/article4.png";
import Article5 from "../assets/article5.png";
import Article6 from "../assets/article6.png";
import Article7 from "../assets/article7.png";
import Article8 from "../assets/article8.png";
import ReadMoreIcon from "../assets/readmore.png";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="articles"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            ARTICLES
          </h1>

          <div
            className="ARTICLES mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Article1}
              title="Banking Churn Analysis"
              subtitle="Exploring the impact of data science in modern industries."
              date="January 2024"
              link="https://medium.com/@sharon4ugilbert/banking-churn-analysis-a-data-story-of-customer-retention-7b53fbce6d4c"
            />
            <Exp_prop
              img={Article2}
              title="Zillow Housing Trends 2000-2024"
              subtitle="Upcoming innovations and trends in ML."
              date="February 2024"
              link="https://medium.com/@sharon4ugilbert/unveiling-housing-trends-a-deep-dive-into-zillows-3-bedroom-insights-dashboard-066d584d74dc"
            />
            <Exp_prop
              img={Article3}
              title="Analyzing Unicorn Companies"
              subtitle="Which data visualization tool is better for business analytics?"
              date="March 2024"
              link="https://medium.com/@sharon4ugilbert/unveiling-unicorns-insights-from-the-worlds-most-valuable-startups-33ecd059a8a3"
            />
            <Exp_prop
              img={Article4}
              title="Data Science Jobs Analysis 2024"
              subtitle="Tips to write efficient and optimized SQL queries."
              date="April 2024"
              link="https://medium.com/@sharon4ugilbert/unlocking-insights-from-the-2024-data-science-job-market-39f09fdc9f75"
            />
            <Exp_prop
              img={Article5}
              title="Financial Risk Assessment"
              subtitle="How Python dominates artificial intelligence."
              date="May 2024"
              link="https://medium.com/@sharon4ugilbert/mastering-financial-risk-assessment-with-power-bi-9dc7c9186f93"
            />
            <Exp_prop
              img={Article6}
              title="RFM Analysis - Online Retail"
              subtitle="A beginner’s guide to creating powerful dashboards."
              date="June 2024"
              link="https://medium.com/@sharon4ugilbert/unlocking-customer-insights-with-rfm-analysis-a-data-driven-approach-782478811802"
            />
            <Exp_prop
              img={Article7}
              title="Amazon Prime Movies & Shows Analysis"
              subtitle="Why version control is essential for analysts."
              date="July 2024"
              link="https://medium.com/@sharon4ugilbert/exploring-amazon-prime-movies-shows-a-deep-dive-into-streaming-trends-82122a9de5ee"
            />
            <Exp_prop
              img={Article8}
              title="Blinkit E-Commerce"
              subtitle="Creating impactful charts and dashboards."
              date="August 2024"
              link="https://medium.com/@sharon4ugilbert/revolutionizing-grocery-insights-blinkit-commerce-bi-dashboard-d9af653e63cd"
            />
            <Exp_prop
              img={ReadMoreIcon}
              title="Read More"
              subtitle="Explore all my articles."
              link="https://medium.com/@sharon4ugilbert"
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
