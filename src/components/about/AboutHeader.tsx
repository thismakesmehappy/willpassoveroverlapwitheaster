interface Props {
  shiftButton: (showAbout: boolean) => void;
  showAbout: boolean;
}

export function AboutHeader({ shiftButton, showAbout }: Props) {
  return (
    <div className="about-header text-center">
      About{" "}
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

export default AboutHeader;
