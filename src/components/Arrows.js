import PropTypes from 'prop-types';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function Arrows(props) {
  return (
    <div className="slider__arrows">
      <MdKeyboardArrowLeft 
        className="slider__left-arrow"
        onClick={props.prev}
      />
      <MdKeyboardArrowRight
        className="slider__right-arrow"
        onClick={props.next}
      />
    </div>
  )
}

Arrows.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
}