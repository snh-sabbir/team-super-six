import "./App.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import SelectedPlayerCard from "./components/SelectedPlayer";
import playersData from "./data/players.json";
import Footer from "./components/Footer";

function App() {
  const [money, setMoney] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(playersData);

  useEffect(() => {
    setAvailablePlayers(playersData);
  }, []);

  const handleCoin = () => {
    setMoney(money + 200000000);
  };

  const handlePlayerss = (player) => {
    if (money < player.price) {
      toast.warn("You do not have enough money!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (selectedPlayers.find((p) => p.id === player.id)) {
      toast("Player already selected!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("Maximum players reached!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setMoney(money - player.price);
  };

  const handleRemovePlayer = (id) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Navbar money={money} />
        <Banner handleCoin={handleCoin} />
        <ToastContainer></ToastContainer>
        <main>
          <section className="mb-20">
            <div className="flex justify-between">
              <h2 id="avail" className="mb-8 font-bold text-2xl">
                Available Players
              </h2>
              <button>
                <a className="hover:underline" href="#selected">
                  See Selected Players
                </a>
              </button>
            </div>
            <div className="grid gap-6 rounded-2xl justify-between grid-cols-3">
              {availablePlayers.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  handlePlayerss={handlePlayerss}
                />
              ))}
            </div>
          </section>
          <section className="mb-56">
            <div className="flex justify-between mb-5">
              <h2 className="font-bold text-2xl" id="selected">
                Selected Players ({selectedPlayers.length} / 6)
              </h2>
              <button>
                <a className="hover:underline" href="#avail">
                  See Available Players
                </a>
              </button>
            </div>
            <div className="flex justify-between gap-2">
              {selectedPlayers.map((player) => (
                <SelectedPlayerCard
                  key={player.id}
                  player={player}
                  handleRemovePlayerss={handleRemovePlayer}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
