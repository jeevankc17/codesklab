import { FunctionComponent } from "react";

export type Image1Type = {
  onClose?: () => void;
};

const Image1: FunctionComponent<Image1Type> = ({ onClose }) => {
  return (
    <div className="w-[297px] relative rounded-mini bg-gray1-100 h-[298px] max-w-full max-h-full overflow-auto">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/saly21@2x.png"
      />
    </div>
  );
};

export default Image1;
