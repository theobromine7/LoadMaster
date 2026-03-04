import { useState } from "react";
import api from "../api/axios";

export default function CreateLoad() {
  const [truckId, setTruckId] = useState("");

  const submit = async () => {
    await api.post("/load/create", {
      truckId,
      items: [
        {
          name: "Box",
          length: 50,
          width: 50,
          height: 50,
          weight: 20,
          fragile: false,
          stackable: true,
        },
      ],
    });

    alert("Load created");
  };

  return (
    <div>
      <h2>Create Load</h2>
      <input placeholder="Truck ID" onChange={(e) => setTruckId(e.target.value)} />
      <button onClick={submit}>Create Load</button>
    </div>
  );
}
