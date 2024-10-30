/* eslint-disable react/prop-types */
const PlayerCard = ({ player, handlePlayerss }) => {
  return (
    <div className="w-full grid gap-3 border border-gray-300 p-4 rounded-2xl">
      <img
        className="w-full h-[300px] rounded-2xl"
        src={player.player_img}
        alt={player.name}
      />
      <div className="flex gap-2 items-center text-center">
        <img
          className="w-[25px]"
          src="https://img.icons8.com/ios11/30/user-male.png"
          alt=""
        />
        <h3 className="font-bold text-lg">{player.name}</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src="https://img.icons8.com/?size=24&id=94733&format=png"
            alt=""
          />
          <p>{player.country}</p>
        </div>
        <p className="text-gray-400">{player.position}</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>Price: ${player.price}</p>
        <button className="bg-gray-200 p-3 rounded-xl" onClick={() => handlePlayerss(player)}>Choose Player</button>
      </div>
    </div>
  );
};

export default PlayerCard;
