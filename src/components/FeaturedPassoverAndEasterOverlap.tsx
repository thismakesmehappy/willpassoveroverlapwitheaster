import Overlap from "./Overlap.tsx";

interface Props {
  overlap: boolean;
}

const FeaturedPassoverAndEasterOverlap = ({ overlap }: Props) => {
  return (
    <div>
      Passover and Easter {!overlap && "do not"} overlap
      <Overlap overlap={overlap} />
    </div>
  );
};

export default FeaturedPassoverAndEasterOverlap;
