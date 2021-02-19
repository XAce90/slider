import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SliderContent from './SliderContent';
import '../styles/slider.css';
import Arrows from './Arrows';

export default function Slider(props) {
  /**
   * When a user clicks on the right arrow, it will scroll one card in that direction.
   * If a user cannot scroll further, the right button should appear disabled.
   */
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  // If maxSlides has been passed in as a prop, render only a subset of the slides
  const slides = (props.maxSlides) ? props.slides.slice(0, props.maxSlides) : props.slides;

  const getSlideSize = () => {
    /**
     * This function determines how wide the slides should be.
     * It takes the width of the slider and divides it by the number of slides currently being displayed.
     * Don't forget to account for gutters!
     */
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    return (sliderWidth - ((props.slidesShown + 1) * props.gutterSize)) / props.slidesShown;
  }

  const nextSlide = () => {
    if(activeIndex === slides.length - 1) return false // do nothing if there are no more slides

    // setActiveIndex(activeIndex + props.slidesShown);
    setActiveIndex(activeIndex + 1);    
    setOffset(offset + slideWidth + props.gutterSize);
  }

  const prevSlide = () => {
    if(activeIndex === 0) return false // do nothing if you are already at the beginning

    setActiveIndex(activeIndex - 1);
    setOffset(offset - slideWidth - props.gutterSize);
  }

  useEffect(() => {
    setSlideWidth(getSlideSize());
  }, []);
  /* todo: resize on window resize */

  return (
    <div className="slider">
      <SliderContent
        slides={slides}
        position={offset}
        slideWidth={slideWidth}
        gutterSize={props.gutterSize}
        hasOuterGutters={props.hasOuterGutters}
      />
      {props.showArrows && (
        <Arrows
          next={nextSlide}
          prev={prevSlide}
        />
      )}
    </div>
  )
}

Slider.defaultProps = {
  slidesShown: 3,
  showArrows: true,
  gutterSize: 26,
  hasOuterGutters: true,
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  slidesShown: PropTypes.number,
  maxSlides: PropTypes.number,
  showArrows: PropTypes.bool,
  gutterSize: PropTypes.number,
  hasOuterGutters: PropTypes.bool,
}