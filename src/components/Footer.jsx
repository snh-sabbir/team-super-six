// import Newsletter from "./Newsletter";
import logo from "../assets/logo-footer.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="w-full bg-[#06091a] text-white pb-12 pt-20 mt-16 relative">
      <div className="absolute z-50 -top-56 right-0 left-0 p-4 rounded-2xl border-2 border-white w-10/12 mx-auto">
        <Newsletter></Newsletter>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="w-full flex justify-center mt-4">
          <img className="" src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="w-1/3 grid gap-3">
            <h1 className="font-bold text-lg">About Us</h1>
            <p className="text-gray-500">
              We are passionate team<br></br>dedicated to providing the best
              <br></br>services to our costomers.
            </p>
          </div>
          <div className="grid gap-3 w-1/3">
            <h1>Quick Links</h1>
            <div className="grid text-gray-500 gap-2">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="w-1/3 grid gap-3">
            <h1 className="font-bold text-lg">Subscribe</h1>
            <p className="text-gray-500">
              Subscribe to our newsletter for the lastest updates.
            </p>
            <div className="flex gap-1">
              <input
                className="p-3 rounded-xl"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#f6af6e] font-bold text-black py-3 px-5 rounded-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center mt-4">
          <p className="text-gray-500">@2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
