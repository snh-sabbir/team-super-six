/* eslint-disable react/prop-types */
// src/components/Navbar.js
const Navbar = ({ money }) => {
  return (
    <nav className="flex justify-between my-12">
      <img src="../assets/logo.png" alt="" />
      <div className="flex gap-6">
        <div className="flex gap-6 items-center">
          <a className="hover:underline rounded-3xl p-2" href="#">Home</a>
          <a className="hover:underline rounded-3xl p-2" href="#">Fixture</a>
          <a className="hover:underline rounded-3xl p-2" href="#">Team</a>
          <a className="hover:underline rounded-3xl p-2" href="#">Schedules</a>
        </div>
        <div className="flex gap-1 font-bold items-center">{money} Coin <img className="w-[30px]" src="https://img.icons8.com/?size=48&id=OFHwDWASQWmX&format=png" alt="" /></div>
      </div>
    </nav>
  );
};

export default Navbar;
