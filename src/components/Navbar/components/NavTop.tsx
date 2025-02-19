import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function NavTop() {
  return (
    <div className="layout h-52p bg-Secondary-700 border border-gray-500 flex flex-row items-center justify-between text-white">
      <h3 className="text-sm">Welcome to Clicon online eCommerce store.</h3>
      <div className="h-7 flex flex-row items-center justify-end">
        <div className="h-full flex flex-row items-center gap-3 pr-4 border-r border-gray-500">
          <span>Follow us:</span>
          <FaTwitter />
          <FaFacebook />
          <FaPinterestP />
          <FaReddit />
          <FaYoutube />
          <FaInstagram />
        </div>
        <div className="h-full flex flex-row items-center gap-4 border-l border-gray-500 pl-4">
          <select className="bg-Secondary-700" name="" id="">
            <option value="eng">Eng</option>
            <option value="rus">Rus</option>
            <option value="uz">O'zbek</option>
          </select>
          <select className="bg-Secondary-700" name="" id="">
            <option value="usd">USD</option>
            <option value="rub">RUB</option>
            <option value="uzs">UZS</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
