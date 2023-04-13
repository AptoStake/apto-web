import React from "react";
import { motion } from "framer-motion";

const GoodBye = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-[80vh] p-5 flex flex-col justify-center items-center max-w-7xl mx-auto"
    >
      <h2 className="text-5xl w-[60%] text-center leading-none p-6 font-semibold">
        Say goodbye to old collecting methodologies
      </h2>

      <p className="w-[80%] text-center text-lg">
        Get started with AptoStake's way of dealing with your finances.
      </p>
    </motion.div>
  );
};

export default GoodBye;
