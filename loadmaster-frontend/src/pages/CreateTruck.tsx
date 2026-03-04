import { useState } from "react";
import api from "../api/axios";

export default function CreateTruck() {
  const [name, setName] = useState("");
  const [maxWeight, setMaxWeight] = useState("");

  const submit = async () => {
    await api.post("/trucks", {
      name,
      maxWeight,
      dimensions: {
        length: 300,
        width: 200,
        height: 200,
      },
    });

    alert("Truck created");
  };

  return (
    <div>
      <h2>Create Truck</h2>
      <input placeholder="Truck name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Max weight" onChange={(e) => setMaxWeight(e.target.value)} />
      <button onClick={submit}>Create</button>
    </div>
  );
}
