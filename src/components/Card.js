import PropTypes from 'prop-types';
import '../styles/card.css';

export default function Card(props) {
  return (
    <div className="card" style={{ minWidth: `${props.width}px` }}>
      <img className="card__image" src={props.image} alt={props.altText || ''} />
      <div className="card__content">
        <div className="card__header">
          <img className="card__icon" src="/icon-384x384.png" alt="" />
          <h3 className="card__title">{props.title}</h3>
          <h4 className="card__subtitle">{props.subtitle}</h4>
        </div>
        
        <p className="card__excerpt" dangerouslySetInnerHTML={{ __html: props.text }}>
          {/* dangerously setting the HTML allows for styles like <strong> and <em> to be used and show up */}
        </p>
        <a href="/" className="card__link">Learn More</a>
        {/* todo: align to bottom of card? */}
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
  width: PropTypes.number,
}