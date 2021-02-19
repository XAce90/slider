import PropTypes from 'prop-types';
import Card from './Card';

export default function SliderContent(props) {
  return (
    <div 
      className="slider__content"
      style={{
        transform: `translateX(-${props.position}px)`,
        columnGap: `${props.gutterSize}px`,
        padding: props.hasOuterGutters && `0 ${props.gutterSize}px`,
      }}
    >
      {props.slides.map(slide => (
        <Card
          key={slide.id}
          title={slide.title}
          subtitle={slide.subtitle}
          text={slide.text}
          // the image URL in the supplied data was not working for testing,
          // so I replaced it with a placeholder link that does
          image="https://picsum.photos/300/150/"
          width={props.slideWidth}
        />
      ))}
    </div>
  )
}

SliderContent.propTypes = {
  slides: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired,
  slideWidth: PropTypes.number,
  gutterSize: PropTypes.number,
  hasOuterGutters: PropTypes.bool,
}