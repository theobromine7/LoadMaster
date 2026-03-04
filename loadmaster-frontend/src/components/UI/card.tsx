import type { ReactNode } from "react";

type CardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  gradient?: string;
};

export default function Card({
  title,
  value,
  icon,
  gradient = "from-indigo-500/20 to-purple-500/20",
}: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]
        transition-all duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.6)]
      `}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-wide text-gray-400">
            {title}
          </p>
          {icon && (
            <div className="text-gray-300 opacity-80">
              {icon}
            </div>
          )}
        </div>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          {value}
        </h2>
      </div>
    </div>
  );
}