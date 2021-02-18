import PropTypes from 'prop-types';
import '../styles/card.css';

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__image" src={props.image} alt={props.altText || ''} />
      <div className="card__content">
        <div className="card__header">
          <img className="card__icon" src="/icon-384x384.png" alt="" />
          <h3 className="card__title">{props.title}</h3>
          <h4 className="card__subtitle">{props.subtitle}</h4>
        </div>
        
        <p className="card__excerpt">{props.text}</p>
        <a href="/" className="card__link">Learn More</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string,
  altText: PropTypes.string,
}