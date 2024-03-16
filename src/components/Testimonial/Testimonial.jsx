
import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

const Testimonial = ({ data }) => {
 
  const brandInfo={
    "useFor": "brand",
    "settings": {
      "infinite": true,
      "speed": 1000,
      "autoplay": true,
      "autoplaySpeed": 3000,
      "slidesToShow": 5,
      "slidesToScroll": 1,
      "arrows": false,
      "responsive": [
        {
          "breakpoint": 991,
          "settings": {
            "slidesToShow": 4
          }
        },
        {
          "breakpoint": 767,
          "settings": {
            "slidesToShow": 3
          }
        }
      ]
    },
    "info": [
      {
        "imgLink": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      },
      {
        "imgLink": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      },
      {
        "imgLink": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      },
      {
        "imgLink": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      },
      {
        "imgLink": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      },
      {
        "imgLink": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png"
      }
    ]
  }

  return (
    <section className="section testimonials-section bg-g">
      <div className="container">
        <SectionHeading title="What they says" subTitle="Testimonial" />
        <div className="testimonials">
          <Carousel data={data} />
        </div>
        <div className="testimonials-brand">
          
          <Carousel data={brandInfo}/>
     
        </div>
      </div>
    </section >
  )
}
Testimonial.propTypes = {
  data: PropTypes.object
}

export default Testimonial
