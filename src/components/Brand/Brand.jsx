import PropTypes from 'prop-types';
const Brand = ({ brandLogo }) => {
  return (
    <div className="brand-box">
      <img src={brandLogo} title="" alt="" style={{height:'100px',width:'200px'}} />
    </div>
  )
}
Brand.propTypes = {
  brandLogo: PropTypes.object
}

export default Brand;
