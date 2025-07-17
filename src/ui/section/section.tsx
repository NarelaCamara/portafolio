import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";

export default function LandingPage({ children }: any) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{
            opacity: 1,
            x: [-50, 0],
            transition: { duration: 2, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
