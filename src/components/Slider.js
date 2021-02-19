import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/slider.css';

export default function Slider(props) {
  return (
    <div className="slider">
      {/* todo: max slides */}
      {props.slides.map(slide => (
        <Card
          key={slide.id}
          title={slide.title}
          subtitle={slide.subtitle}
          text={slide.text}
          image="https://picsum.photos/300/150/"
        />
      ))}
      {/* todo arrows */}
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