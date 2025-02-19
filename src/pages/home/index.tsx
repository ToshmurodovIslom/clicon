import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/ui/Button";
import Xbox from "../../../assets/images/Image.png";
import Google from "../../../assets/images/image 5.png";
import FlipBuds from "../../../assets/images/image 4.png";

function Home() {
  return (
    <div className="layout my-6 h-520p flex flex-row items-center justify-between">
      <div className="w-2/3 h-full bg-gray-100 rounded-xl flex flex-row items-center justify-center gap-9">
        <div className="w-96 flex flex-col items-start justify-center gap-1.5">
          <span className="text-sm text-Secondary-600 font-semibold">
            THE BEST PLACE TO PLAY
          </span>
          <h1 className="text-5xl font-semibold">Xbox Consoles</h1>
          <p className="text-lg font-normal text-gray-700">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
          <Button
            title={"Shop Now"}
            style={
              "bg-Primary-500 h-14 w-48 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3"
            }
            shape={<FaArrowRight />}
          />
        </div>
        <div className="w-368p h-408p relative">
          <img src={Xbox} alt="Xbox" />
          <div className="w-24 h-24 bg-Secondary-500 text-2xl text-white font-medium rounded-full flex items-center justify-center border-4 border-white absolute top-0 right-0">
            <h3>$299</h3>
          </div>
        </div>
      </div>
      <div className="h-full w-3/10 flex flex-col items-center justify-between ">
        <div className="h-6/13 w-full bg-gray-900 rounded-xl flex items-center justify-start relative">
          <div className="w-40 ml-5">
            <span className="text-sm text-Warning-500">Summer Sales</span>
            <h3 className="text-white text-2xl">New Google Pixel 6 Pro</h3>
            <Button
              title={"Shop Now"}
              style={
                "bg-Primary-500 h-12 w-40 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3"
              }
              shape={<FaArrowRight />}
            />
          </div>
          <div className=" absolute bottom-0 right-0">
            <img src={Google} alt="New Google Pixel 6 Pro" />
            <div className=" absolute  w-24 h-10 text-base font-semibold bg-Warning-500 flex items-center justify-center rounded-xs top-0 right-5">
              <h3>29% OFF</h3>
            </div>
          </div>
        </div>
        <div className="h-6/13 w-full bg-gray-100 rounded-xl flex flex-row items-center justify-center gap-3">
          <img src={FlipBuds} alt="Xiaomi FlipBuds Pro" />
          <div className="w-40 ml-5 flex flex-col items-start gap-3 ">
            <h3 className="text-black text-2xl">Xiaomi FlipBuds Pro</h3>
            <span className="text-lg text-Secondary-500">$299 USD</span>
            <Button
              title={"Shop Now"}
              style={
                "bg-Primary-500 h-12 w-40 rounded-md text-white font-semibold flex flex-row items-center justify-center gap-3"
              }
              shape={<FaArrowRight />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;