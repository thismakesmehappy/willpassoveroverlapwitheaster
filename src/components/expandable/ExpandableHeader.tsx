interface Props {
  shiftButton: (showAbout: boolean) => void;
  showAbout: boolean;
  title: string;
}

export function ExpandableHeader({ shiftButton, showAbout, title }: Props) {
  return (
    <div
      className={
        showAbout ? "header text-center" : "header header-collapsed text-center"
      }
    >
      {title}{" "}
      <button className="btn btn-link" onClick={() => shiftButton(!showAbout)}>
        {showAbout ? (
          <i className="bi bi-dash-circle-fill" />
        ) : (
          <i className="bi bi-plus-circle-fill" />
        )}
      </button>
    </div>
  );
}

export default ExpandableHeader;
