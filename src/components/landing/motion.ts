import type { Variants } from "framer-motion";

export const easeLuxury = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.45, 0, 0.25, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeLuxury } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease: easeInOut } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease: easeInOut } },
};

export const zoomSoft: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: easeLuxury } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: easeLuxury } },
};