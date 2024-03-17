import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const Service = ({ data }) => {
  return (
    <section id="services" className="section services-section bg-dark">
      <div className="container">
        <SectionHeading title="My Specialties" subTitle="My Service" />
        <div className="accordion accordion-flush" id="accordion_services">
          {data.services.map((element, index) => (
            <div
              className="accordion-item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#accordion_item_${index}`}
                  aria-expanded="false"
                  aria-controls={`accordion_item_${index}`}
                >
                  <span className="services-title">{element.name}</span>
                  <span className="services-small-desc">{element.desc}</span>
                  <span><LocalOfferIcon/>{element.charge}</span>
                  <span className="accordion-icon" />

                </button>
              </div>
              <div
                id={`accordion_item_${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordion_services"
              >
                <div className="accordion-body">
                  <div className="row gy-4">
                    <div className="col-sm-6 col-md-4">
                      <div className="s-img">
                        <img
                          src={element.image.url}
                          title=""
                          alt="Service Image"
   
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <h3>{element.name}</h3>
                      <div className="s-text">{element.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Service;
