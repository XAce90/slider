import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SliderContent from './SliderContent';
import '../styles/slider.css';
import Arrows from './Arrows';

export default function Slider(props) {
  /**
   * When a user clicks on the right arrow, it will scroll one card in that direction.
   * If a user cannot scroll further, the right button should appear disabled.
   */
  const $slider = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  // If maxSlides has been passed in as a prop, render only a subset of the slides
  const slides = (props.maxSlides) ? props.slides.slice(0, props.maxSlides) : props.slides;

  const nextSlide = () => {
    if(activeIndex === slides.length - props.slidesShown) return false // do nothing if there are no more slides
        
    setActiveIndex(prevIndex => prevIndex + 1);
    setOffset(offset + cardWidth + props.gutterSize);
  }

  const prevSlide = () => {
    if(activeIndex === 0) return false // do nothing if you are already at the beginning

    setActiveIndex(prevIndex => prevIndex - 1);
    setOffset(offset - cardWidth - props.gutterSize);
  }

  const handleSizing = () => {
    // get the size of the slider! it should fire on page load and on page resize
    setSliderWidth($slider.current.offsetWidth);
  }

  useEffect(() => {
    // size elements on load
    handleSizing();

    // set & remove event listeners
    window.addEventListener('resize', handleSizing);
    return () => {
      window.removeEventListener('resize', handleSizing);
    }
  }, []);

  useEffect(() => {
    /**
     * This function determines how wide the slides should be, and it fires every time the slider width changes.
     * It takes the width of the slider and divides it by the number of slides currently being displayed.
     * Don't forget to account for gutters!
     */
    const cardSize = (sliderWidth - ((props.slidesShown + 1) * props.gutterSize)) / props.slidesShown;
    setCardWidth(cardSize);

    /**
     * When the slider width changes, we need to calculate a new offset, based on the active index.
     * Note that this doesn't need to fire if the active index IS zero.
     */
    if(activeIndex > 0) {
      setOffset((cardSize + props.gutterSize) * (activeIndex));
    }
  }, [sliderWidth, props.slidesShown, props.gutterSize]);
  /**
   * todo: change number of slides shown based on width of viewport
   * for example, the cardWidths should never drop below a certain width
   * (or above a certain width)
   * if they do, snap to fewer (or greater slides)
   * 
   * todo: make this configurable
   */

  return (
    <div className="slider" ref={$slider}>
      <SliderContent
        slides={slides}
        position={offset}
        slideWidth={cardWidth}
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
  slideMinWidth: 290,
  slideMaxWidth: 430,
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  slidesShown: PropTypes.number,
  maxSlides: PropTypes.number,
  showArrows: PropTypes.bool,
  gutterSize: PropTypes.number,
  hasOuterGutters: PropTypes.bool,
  slideMaxWidth: PropTypes.number, // not in use yet
  slideMinWidth: PropTypes.number, // not in use yet
}