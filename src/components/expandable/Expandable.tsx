import { ReactNode, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ExpandableHeader from "./ExpandableHeader.tsx";
import { ExpandableContent } from "./ExpandableContent.tsx";

interface Props {
  title: string;
  children: ReactNode | string;
  id?: string;
  className?: string;
  classNameExpanded?: string;
  classNameCollapsed?: string;
}

export function Expandable({
  title,
  children,
  id,
  classNameExpanded = "",
  classNameCollapsed = "",
  className = "",
}: Props) {
  const [showAbout, setShowAbout] = useState(false);
  const classNameInner = showAbout
    ? className + classNameExpanded
    : className + classNameCollapsed;
  return (
    <div id={id} className={classNameInner}>
      <ExpandableHeader
        title={title}
        shiftButton={setShowAbout}
        showAbout={showAbout}
      />
      {showAbout && <ExpandableContent>{children}</ExpandableContent>}
    </div>
  );
}

export default Expandable;
