import { FunctionComponent } from "react";
import Image1 from "./Image1";

export type DoneModalType = {
  onClose?: () => void;
};

const DoneModal: FunctionComponent<DoneModalType> = ({ onClose }) => {
  return (
    <div className="flex flex-row items-start justify-start relative gap-[10px] text-center text-29xl text-aqua-deep font-body-tiny-400">
      <Image1 />
      <div className="w-[147px] !m-[0] absolute bottom-[0px] left-[1px] h-[78px] flex flex-row items-center justify-center p-2.5 box-border z-[1]">
        <div className="w-[127px] absolute !m-[0] bottom-[10px] left-[10px] leading-[120%] font-semibold inline-block z-[0]">
          Done
        </div>
      </div>
    </div>
  );
};

export default DoneModal;
