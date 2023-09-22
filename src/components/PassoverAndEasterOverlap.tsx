import Overlap from "./Overlap.tsx";

interface Props {
  overlap: boolean;
}

const PassoverAndEasterOverlap = ({ overlap }: Props) => {
  return (
    <div className="passover-and-easter-overlap">
      Passover and Easter {!overlap && "do not"} overlap
      <Overlap overlap={overlap} />
    </div>
  );
};

export default PassoverAndEasterOverlap;
