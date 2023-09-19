// npm install bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  overlap: boolean;
}

const Overlap = ({ overlap }: Props) => {
  return (
    <div className={overlap ? "tight" : "open"}>
      <i className="bi bi-circle" />
      <i className="bi bi-circle" />
    </div>
  );
};

export default Overlap;
