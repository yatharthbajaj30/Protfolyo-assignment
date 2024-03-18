import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import '../Portfolio.css';
import FilterListIcon from '@mui/icons-material/FilterList';

const Portfolio = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState({});
  const [selectedTech, setSelectedTech] = useState(null);
  const [uniqueTechStack, setUniqueTechStack] = useState(new Set());

  useEffect(() => {
    // Extract unique techStack values with trimmed spaces
    const techSet = new Set();
    data.projects.forEach(project => {
      project.techStack.forEach(tech => {
        const trimmedTech = tech.trim(); // Trim spaces
        techSet.add(trimmedTech);
      });
    });
    setUniqueTechStack(techSet);
  }, [data.projects]);

  const getData = (imgLink, title, subTitle, paragraphList) => {
    setTempData({ imgLink, title, subTitle, paragraphList }); // Update tempData object
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  const handleTechFilter = (tech) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  }

  const filteredProjects = selectedTech
    ? data.projects.filter(project =>
        project.techStack.some(tech => tech.trim() === selectedTech.trim())
      )
    : data.projects;

  return (
    <section>
      <div id="work" className="section work-section">
        <div className="container">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
          <div className="tech-filters">
            <span style={{marginRight:'20px',border:'2px solid white'}}><FilterListIcon/></span>
            <span className={`tech-filter ${selectedTech === null ? 'active' : ''}`} onClick={() => handleTechFilter(null)}>All</span>
            {[...uniqueTechStack].map((tech, index) => (
              <span key={index} className={`tech-filter ${tech === selectedTech ? 'active' : ''}`} onClick={() => handleTechFilter(tech)}>{tech}</span>
            ))}
          </div>
          <div className="row gy-5 lightbox-gallery" data-aos="fade-up" data-aos-duration="800">
            {filteredProjects && filteredProjects.map((element, index) => (
              <div className="col-lg-6" key={index}>
                <div className="work-box">
                  <div className="work-img" onClick={() => getData(element.image.url, element.title, element.description, element.techStack)}>
                    <img src={element.image.url} title="" alt="portfolio image" />
                  </div>
                  <div style={{ margin: 'auto' }}>
                    <a style={{ cursor: 'pointer' }} href={element.liveurl}><GitHubIcon /></a>
                    <a style={{ marginLeft: '20px', cursor: 'pointer' }} href={element.githuburl}><LanguageIcon /></a>
                  </div>
                  <div className="work-text">
                    <h6>{element.description}</h6>
                    <h4>{element.title}</h4>
                    <div className="tech-stack">
                      {element.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="btn-bar">
                      <a className="gallery-link" onClick={() => getData(element.image.url, element.title, element.description, element.techStack)}>
                        <Icon icon="bi:arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modal === true ? <Modal img={tempData.imgLink} title={tempData.title} subTitle={tempData.subTitle} paraList={tempData.paragraphList} modalClose={modalClose} /> : ""}
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.object
}

export default Portfolio;
