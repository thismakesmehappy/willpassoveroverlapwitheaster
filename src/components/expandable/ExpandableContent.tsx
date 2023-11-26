interface Props {
  children: any;
}

export const ExpandableContent = ({ children }: Props) => {
  return <div className="expandable-content">{children}</div>;
};
