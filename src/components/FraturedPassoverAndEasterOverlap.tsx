import Overlap from "./Overlap.tsx";

interface Props {
  year: number;
  overlap: boolean;
}

const FraturedPassoverAndEasterOverlap = ({ year, overlap }: Props) => {
  return (
    <div className={"text-center col-12 h1 p-4"}>
      Passover and Easter {!overlap && "do not"} overlap
      <Overlap overlap={overlap} />
    </div>
  );
};

export default FraturedPassoverAndEasterOverlap;
