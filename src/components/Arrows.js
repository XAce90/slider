import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function Arrows(props) {
  return (
    <div className="slider__arrows">
      <MdKeyboardArrowLeft className="slider__left-arrow" />
      <MdKeyboardArrowRight className="slider__right-arrow" />
    </div>
  )
}