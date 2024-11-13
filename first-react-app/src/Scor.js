import { useState } from "react";

export default function Scor() {
  const [Player, setPlayer] = useState({
    firstName: "sedra",
    lastName: "traibosh",
    score: 10,
  });

  function handlePlus() {
    setPlayer({
      ...Player,
      score: Player.score + 1,
    });
  }
  function handleFirst(e) {
    setPlayer({
      ...Player,
      firstName: e.target.value,
    });
  }

  function handleLast(e) {
    setPlayer({
      ...Player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        score:<b>{Player.score}</b> <button onClick={handlePlus}>+1</button>
      </label>
      <label>
        FirstName:
        <input value={Player.firstName} onChange={handleFirst} />
      </label>
      <label>
        lastName:
        <input value={Player.lastName} onChange={handleLast} />
      </label>
    </>
  );
}
