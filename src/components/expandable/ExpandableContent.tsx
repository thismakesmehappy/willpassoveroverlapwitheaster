interface Props {
  children: any;
}

export const ExpandableContent = ({ children }: Props) => {
  return <p className="expandable-content">{children}</p>;
};

export default ExpandableContent;
