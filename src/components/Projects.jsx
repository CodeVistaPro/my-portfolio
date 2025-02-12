import Project_prop from "./Project_prop";
import {
  PowerBIProjects,
  SQLProjects,
  ExcelProjects,
  MLProjects,
  PythonProjects,
} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Power BI Projects"
            para="A collection of interactive dashboards created using Power BI."
            img={PowerBIProjects}
            link="" // Add your SQL portfolio link here
            github_link="https://github.com/CodeVistaPro/PowerBI_Portfolio" // Add your Power BI GitHub repo here
          />
          <Project_prop
            title="SQL Projects"
            para="Advanced SQL queries and database designs for data analysis."
            img={SQLProjects}
            link="" // Add your SQL portfolio link here
            github_link="https://github.com/CodeVistaPro/SQL-Projects" // Add your SQL GitHub repo here
          />
          <Project_prop
            title="Excel Projects"
            para="Data analysis and visualization using Excel dashboards."
            img={ExcelProjects}
            link="" // Add your Excel portfolio link here
            github_link="https://github.com/CodeVistaPro/Excel-Projects" // Add your Excel GitHub repo here
          />
          <Project_prop
            title="Machine Learning Projects"
            para="Implementation of ML models for predictive analytics."
            img={MLProjects}
            link="" // Add your ML portfolio link here
            github_link="https://github.com/CodeVistaPro/Machine-Learning" // Add your ML GitHub repo here
          />
          <Project_prop
            title="Python Projects"
            para="Python-based automation, data science, and scripting projects."
            img={PythonProjects}
            link="" // Add your Python portfolio link here
            github_link="https://github.com/CodeVistaPro/Python-Data-Analysis-Projects" // Add your Python GitHub repo here
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
