import { FaArrowRight } from "react-icons/fa"
import Macbook from "../../../assets/images/MacbookPro.png"
import Button from "../../../components/ui/Button"
function SaveUp() {
    return (
        <div className="layout mt-10">
            <div className="w-full bg-Primary-100 rounded-xl flex flex-row items-center justify-center gap-96 ">
                <div className="w-96 flex flex-col items-start justify-center gap-5">
                <div className="w-44 h-10 text-base text-white font-semibold bg-Secondary-500 flex items-center justify-center rounded-xs">
                        <h3>SAVE UP TO $200.00</h3>
                    </div>
                    <h1 className="text-5xl font-semibold">Macbook Pro</h1>
                    <p className="text-lg font-normal text-gray-700">
                        Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
                    </p>
                    <Button
                        title={"Shop Now"}
                        style={
                            "bg-Primary-500 h-14 w-48 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3"
                        }
                        shape={<FaArrowRight />}
                    />
                </div>
                <div className="w-520p h-full relative">
                    <img src={Macbook} alt="Macbook" />
                    <div className="w-24 h-24 bg-Primary-200 text-2xl text-black font-medium rounded-full flex items-center justify-center border-4 border-white absolute top-10 left-0">
                        <h3>$1999</h3>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default SaveUp