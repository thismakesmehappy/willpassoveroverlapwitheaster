// npm install bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  overlap: boolean;
}

export const Overlap = ({ overlap }: Props) => {
  return (
    <div className={overlap ? "overlap tight" : "overlap open"}>
      <i className="bi bi-circle" />
      <i className="bi bi-circle" />
    </div>
  );
};
