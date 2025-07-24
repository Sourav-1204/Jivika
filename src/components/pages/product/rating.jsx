import { MdStarRate } from "react-icons/md";

const Star = ({ filled }) => (
  <span style={{ position: "relative", display: "inline-block" }}>
    <MdStarRate size={22} color="gray" />
    {filled > 0 && (
      <span
        style={{
          position: "absolute",
          overflow: "hidden",
          width: `${filled * 100}%`,
          color: "#E36918",
          top: 0,
          left: 0,
        }}
      >
        <MdStarRate size={22} />
      </span>
    )}
  </span>
);

const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star key={i} filled={Math.min(1, Math.max(0, rating - (i - 1)))} />
    );
  }

  return <div>{stars}</div>;
};

export default RatingStars;
