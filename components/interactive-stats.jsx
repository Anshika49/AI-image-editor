"use client";
import Image from "next/image";
import {
  useAnimatedCounter,
  useIntersectionObserver,
} from "../hooks/use-intersection-observer";
import { useEffect } from "react";

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [count, setIsActive] = useAnimatedCounter(target, duration);

  useEffect(() => {
    if (isVisible) setIsActive(true);
  }, [isVisible, setIsActive]);

  return (
    <span
      ref={ref}
      className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const InteractiveStats = () => {
  const stats = [
    { label: "Images Processed", value: 10000, suffix: "+", image: "/icons8-picture-50.png" },
    { label: "Active Users", value: 500, suffix: "+", image: "/icons8-user-50.png" },
    { label: "AI Transformations", value: 45000, suffix: "+",image: "/icons8-human-resources-50.png" },
    { label: "User Satisfaction", value: 98, suffix: "%", image: "/icons8-ai-64.png"  },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full max-w-[360px] flex items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-200 uppercase tracking-wider text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;