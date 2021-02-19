import PropTypes from 'prop-types';
import SliderContent from './SliderContent';
import '../styles/slider.css';
import Arrows from './Arrows';

export default function Slider(props) {
  // If maxSlides has been passed in as a prop, render only a subset of the slides
  const slides = (props.maxSlides) ? props.slides.slice(0, props.maxSlides) : props.slides;

  return (
    <div className="slider">
      <SliderContent slides={slides} />
      {props.showArrows && (
        <Arrows />
      )}
    </div>
  )
}

Slider.defaultProps = {
  slidesShown: 3,
  showArrows: true,
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  slidesShown: PropTypes.number,
  maxSlides: PropTypes.number,
  showArrows: PropTypes.bool,
}