/* eslint-disable react/prop-types */
const SelectedPlayerCard = ({ player, handleRemovePlayerss }) => {
  return (
    <div className="w-1/6">
      <img
        className="rounded-xl w-full h-[200px]"
        src={player.player_img}
        alt={player.name}
      />
      <h3>{player.name}</h3>
      <p>
        <small>{player.country}</small>
      </p>
      <div className="flex justify-center">
        <button
          className="text-red-500 hover:bg-slate-300 p-2 rounded-lg"
          onClick={() => handleRemovePlayerss(player.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
