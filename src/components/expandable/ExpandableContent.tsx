interface Props {
  children: any;
}

export const ExpandableContent = ({ children }: Props) => {
  return <div className="about-content">{children}</div>;
};

export default ExpandableContent;
