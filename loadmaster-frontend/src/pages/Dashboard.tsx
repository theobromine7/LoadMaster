import Card from "../components/UI/card";
import {
  Truck,
  Package,
  BarChart3,
  Weight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Operations Overview
        </h1>
        <p className="mt-2 text-gray-400">
          Real-time logistics performance metrics
        </p>
      </div>

      {/* KPI Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Total Trucks"
          value={12}
          icon={<Truck size={22} />}
          gradient="from-cyan-500/20 to-blue-500/20"
        />
        <Card
          title="Active Loads"
          value={35}
          icon={<Package size={22} />}
          gradient="from-purple-500/20 to-pink-500/20"
        />
        <Card
          title="Utilization"
          value="78%"
          icon={<BarChart3 size={22} />}
          gradient="from-emerald-500/20 to-teal-500/20"
        />
        <Card
          title="Total Weight"
          value="12.4T"
          icon={<Weight size={22} />}
          gradient="from-orange-500/20 to-red-500/20"
        />
      </div>
    </div>
  );
}