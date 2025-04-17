import { useState } from "react";
import { motion } from "framer-motion";
import { Bone } from "lucide-react"; // or your own Bone icon
import toast from "react-hot-toast";

const particles = Array.from({ length: 10 });

export const ExplodingBone = ({ size = 40 }) => {
  const [explode, setExplode] = useState(false);
  const [visibilityOfBone, setVisibiltyOfBone] = useState(true);

  const triggerExplosion = () => {
    setExplode(true);
    setVisibiltyOfBone(false);
    setTimeout(() => setExplode(false), 1000); // reset after 1s
  };

  return (
    <div className="relative z-20 w-fit h-fit" onClick={triggerExplosion}>
      {/* Bone Icon */}
      {visibilityOfBone && (
        <Bone size={size} className="cursor-pointer text-gray-800" />
      )}

      {/* Particle Explosion */}
      {explode &&
        particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: getRandomColor(),
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              x: getRandomOffset(),
              y: getRandomOffset(),
              opacity: 0,
              scale: 2,
            }}
            transition={{ duration: 0.8 }}
          />
        ))}
    </div>
  );
};

// Helper functions
function getRandomOffset() {
  return Math.floor(Math.random() * 100 - 50); // between -50 to +50
}

function getRandomColor() {
  const colors = ["#f43f5e", "#f59e0b", "#10b981", "#3b82f6", "#a855f7"];
  return colors[Math.floor(Math.random() * colors.length)];
}
