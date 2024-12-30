import "./tag.scss";

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <p>{name}</p>
    </div>
  );
};

export default Tag;