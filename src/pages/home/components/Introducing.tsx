import { FaArrowRight } from "react-icons/fa"
import Apple from "../../../assets/images/Apple.png";
import Xiaomi from "../../../assets/images/Xiaomi.png";
import Button from "../../../components/ui/Button";

function Introducing() {
    return (
        <div className="layout flex flex-row items-center justify-between">
            <div className="h-80 w-15/31 bg-gray-100 rounded-xl flex items-center flex-row justify-center gap-10">
                <div className="w-72 ml-5 flex flex-col items-start justify-center gap-3">
                    <div className="w-32 h-10 text-base text-white font-semibold bg-Secondary-500 flex items-center justify-center rounded-xs">
                        <h3>INTRODUCING</h3>
                    </div>
                    <h3 className="text-gray-900 text-3xl font-semibold">New Apple Homepod Mini</h3>
                    <p className="text-sm text-gray-700">Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
                    <Button
                        title={"Shop Now"}
                        style={
                            "bg-Primary-500 h-12 w-40 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3"
                        }
                        shape={<FaArrowRight />}
                    />
                </div>
                <div className="">
                    <img src={Apple} alt="New Google Pixel 6 Pro" />

                </div>
            </div>
            <div className="h-80 w-15/31 bg-gray-900 rounded-xl flex items-center flex-row justify-start gap-10 relative">
                <div className="w-72 ml-12 flex flex-col items-start justify-center gap-3">
                    <div className="w-44 h-10 text-base text-white font-semibold bg-Warning-500 flex items-center justify-center rounded-xs">
                        <h3>INTRODUCING NEW</h3>
                    </div>
                    <h3 className="text-white text-3xl font-semibold">Xiaomi Mi 11 Ultra 12GB+256GB</h3>
                    <p className="text-sm text-gray-300">*Data provided by internal laboratories. Industry measurment.</p>
                    <Button
                        title={"Shop Now"}
                        style={
                            "bg-Primary-500 h-12 w-40 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3"
                        }
                        shape={<FaArrowRight />}
                    />
                </div>
                <div className=" absolute bottom-0 right-0">
                    <img src={Xiaomi} alt="New Google Pixel 6 Pro" />
                    <div className="w-24 h-24 bg-Secondary-500 text-2xl text-white font-medium rounded-full flex items-center justify-center border-4 border-white absolute top-0 right-8">
                        <h3>$590</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Introducing
