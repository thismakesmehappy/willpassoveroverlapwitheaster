import Overlap from "components/commonYears/Overlap.tsx";
import { holiday1, holiday2 } from "data/constants.ts";

interface Props {
  overlap: boolean;
}

const PassoverAndEasterSundayOverlap = ({ overlap }: Props) => {
  return (
    <div className="passover-and-easter-sunday-overlap">
      {holiday1} and {holiday2} {!overlap && "do not"} overlap
      <Overlap overlap={overlap} />
    </div>
  );
};

export default PassoverAndEasterSundayOverlap;
