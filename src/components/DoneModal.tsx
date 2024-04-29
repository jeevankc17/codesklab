import { FunctionComponent } from "react";

export type DoneModalType = {
  onClose?: () => void;
};

const DoneModal: FunctionComponent<DoneModalType> = ({ onClose }) => {
  return (
    <div className="flex flex-row items-start justify-start relative gap-[10px] text-center text-29xl text-aqua-deep font-body-tiny-400">
      <div className="w-[297px] relative rounded-mini bg-gray1-100 h-[298px] max-w-full max-h-full overflow-auto z-[0]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/saly21@2x.png"
        />
      </div>
      <div className="w-[147px] !m-[0] absolute bottom-[0px] left-[1px] h-[78px] flex flex-row items-center justify-center p-2.5 box-border z-[1]">
        <div className="w-[127px] absolute !m-[0] bottom-[10px] left-[10px] leading-[120%] font-semibold inline-block z-[0]">
          Done
        </div>
      </div>
    </div>
  );
};

export default DoneModal;
