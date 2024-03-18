import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";


const Experience = ({ data ,fetched}) => {
  const { text, experience, resumeCv } = data;
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
 // Output: January 2024
  
  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" style={{margin:'auto'}}>{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <ul className="resume-box">
              <h3 style={{textDecoration:'underline'}}>INDUSTRY EXPERIENCE</h3>
              { fetched.timeline.map((element, index) => (
                  !element.forEducation&&(
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>-{formatDate(element.startDate)} - {formatDate(element.endDate)}</span>
                    <label>-{element.company_name}</label>
                  </div>
                  <h5>{element.jobTitle}</h5>
                  <p>{element.summary}</p>
                </li>
                  )
              ))}
              <h3 style={{marginTop:'50px',textDecoration:'underline'}}>EDUCATIONAL BOOTCAMPS</h3>
              { fetched.timeline.map((element, index) => (
                  element.forEducation&&(
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>-{formatDate(element.startDate)} - {formatDate(element.endDate)}</span>
                    <label>-{element.company_name}</label>
                  </div>
                  <h5>{element.jobTitle}</h5>
                  <p>{element.summary}</p>
                </li>
                  )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Experience.propTypes = {
  data: PropTypes.object
}

export default Experience;
