import { Overlap } from "components";
import { holiday1, holiday2 } from "data";

interface Props {
  overlap: boolean;
}

export const PassoverAndEasterSundayOverlap = ({ overlap }: Props) => {
  return (
    <div className="passover-and-easter-sunday-overlap">
      {holiday1} and {holiday2} {!overlap && "do not"} overlap
      <Overlap overlap={overlap} />
    </div>
  );
};
