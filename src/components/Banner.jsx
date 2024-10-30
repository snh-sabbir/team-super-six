/* eslint-disable react/prop-types */
// src/components/Banner.js
const Banner = ({ handleCoin }) => {
  return (
    <div className="mb-12 bg-[url('../assets/bg-shadow.png')] bg-black bg-cover text-white grid gap-4 items-center justify-center py-12 rounded-2xl">
      <div className="flex justify-center">
        <img src="../assets/banner-main.png" alt="" />
      </div>
      <h1 className="font-bold text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="text-center text-xl text-gray-400">Beyond Boundaries Beyond Limits</p>
      <div className="flex justify-center border border-[#e2f928] p-1 w-5/11 rounded-2xl mx-auto">
        <button
          onClick={handleCoin}
          className="bg-[#e2f928] text-black font-bold py-2 px-6 rounded-xl"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
