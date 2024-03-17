import PropTypes from 'prop-types';
import './SingleTestimonial.css' // Import CSS for testimonial styles

const Singletestimonial = ({ element }) => {
  return (
    <div className="testimonial-card" style={{backgroundColor:'black'}}>
      <div className="testimonial-content">
        <p className="testimonial-text">“{element.review}”</p>
        <div className="testimonial-info">
          <h6 className="testimonial-name">{element.name}</h6>
          <span className="testimonial-position"><h6>{element.position}</h6></span>
        </div>
      </div>
      <div className="testimonial-avatar">
        <img src={element.image.url} className="avatar-img" alt="" />
      </div>
    </div>
  )
}

Singletestimonial.propTypes = {
  element: PropTypes.object
}

export default Singletestimonial;
