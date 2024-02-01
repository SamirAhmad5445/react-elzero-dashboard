import { ReactSVG } from "react-svg";

const Icon = ({ name, size, className }) => {
  const styles = size && {
    "--size": `${size}px`,
  };
  return (
    <ReactSVG
      src={name}
      style={styles}
      className={`icon ${className ? className : ""}`}
    />
  );
};

export default Icon;
