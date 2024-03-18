import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import Brand from '../Brand/Brand';



const Carousel = ({ data }) => {
  const { useFor,info} = data;
  if (!useFor ) {
    const settings={
      "infinite": true,
      "speed": 1500,
      "autoplay": true,
      "autoplaySpeed": 5000,
      "slidesToShow": 2,
      "slidesToScroll": 1,
      "arrows": false,
      "dots": true,
      "responsive": [
        {
          "breakpoint": 991,
          "settings": {
            "slidesToShow": 1,
            "autoplay": true
          }
        }
      ]
    }
    return (
      <Slider {...settings}>
        {
          data.testimonials.map((element, index) => (
            <Singletestimonial element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else if (useFor === "brand") {
    const settings={
      "infinite": true,
      "speed": 1500,
      "autoplay": true,
      "autoplaySpeed": 5000,
      "slidesToShow": 4,
      "slidesToScroll": 1,
      "arrows": false,
      "dots": true,
      "responsive": [
        {
          "breakpoint": 991,
          "settings": {
            "slidesToShow": 1,
            "autoplay": true
          }
        }
      ]
    }
    return (
      
      <Slider {...settings}>
        {
          info.map((element, index) => (
           
            <Brand key={index} brandLogo={element.imgLink}  />
           
          ))
        }
      </Slider>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}


export default Carousel
