import { FiPhoneCall } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
import { PiArrowsCounterClockwiseLight, PiCaretDownBold, PiHeadphones, PiMapPinLine } from "react-icons/pi";

function NavBottom() {
  return (
    <div className="layout h-20 border border-gray-500 flex items-center flex-row justify-between">
      <div className="flex flex-row items-center justify-start gap-6">
        <button className="flex w-40 h-12 flex-row items-center justify-center bg-gray-100 rounded-lg gap-1.5 cursor-pointer">
          <span>All Category</span>
          <PiCaretDownBold />
        </button>
        <div className="flex flex-row items-center gap-1.5 cursor-pointer text-gray-600">
          <PiMapPinLine />
          <span>Track Order</span>
        </div>
        <div className="flex flex-row items-center gap-1.5 cursor-pointer text-gray-600">
          <PiArrowsCounterClockwiseLight />
          <span>Compare</span>
        </div>
        <div className="flex flex-row items-center gap-1.5 cursor-pointer text-gray-600">
          <PiHeadphones />
          <span>Customer Support</span>
        </div>
        <div className="flex flex-row items-center gap-1.5 cursor-pointer text-gray-600">
          <GoInfo />
          <span>Need Help</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1.5 cursor-pointer">
        <FiPhoneCall />
        <span>+1-202-555-0104</span>
      </div>
    </div>
  );
}

export default NavBottom;
