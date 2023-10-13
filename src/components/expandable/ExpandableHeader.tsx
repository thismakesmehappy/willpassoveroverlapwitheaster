interface Props {
  shiftButton: (showAbout: boolean) => void;
  showAbout: boolean;
  title: string;
}

export function ExpandableHeader({ shiftButton, showAbout, title }: Props) {
  return (
    <div
      className={
        showAbout
          ? "expandable-header text-center"
          : "expandable-header expandable-header-collapsed text-center"
      }
    >
      {title}{" "}
      <button className="btn btn-link" onClick={() => shiftButton(!showAbout)}>
        {showAbout ? (
          <i className="bi bi-dash-circle" />
        ) : (
          <i className="bi bi-plus-circle" />
        )}
      </button>
    </div>
  );
}

export default ExpandableHeader;
