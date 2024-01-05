import PropTypes from 'prop-types';


const Card = ({imageUrl, title, description }) => {
  return (
    <div className="  rounded overflow-hidden shadow-lg xs:flex xs:flex-col xs:justify-center xs:items-center xs:text-center  ">
          <img  src={imageUrl} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      );
    };


Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;