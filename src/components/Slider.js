import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/slider.css';

export default function Slider(props) {
  // If maxSlides has been passed in as a prop, render only a subset of the slides
  const slides = (props.maxSlides) ? props.slides.slice(0, props.maxSlides) : props.slides;

  return (
    <div className="slider">
      {slides.map(slide => (
        <Card
          key={slide.id}
          title={slide.title}
          subtitle={slide.subtitle}
          text={slide.text}
          // the image URL in the supplied data was not working for testing,
          // so I replaced it with a placeholder link that does
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