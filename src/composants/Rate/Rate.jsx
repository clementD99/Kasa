import starActive from "../../images/rating/starActive.svg";
import starInactive from "../../images/rating/starInactive.svg";
import "../../composants/Rate/rate.scss";

const Rate = ({ rating }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= rating ? starActive : starInactive}
          alt={star <= rating ? "starActive" : "starInactive"}
          className="star"
        />
      ))}
    </div>
  );
};

export default Rate;
