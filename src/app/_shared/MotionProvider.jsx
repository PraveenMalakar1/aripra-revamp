'use client';

import { MotionConfig } from 'motion/react';

// Honour the OS "reduce motion" setting for every Motion animation below:
// transforms are skipped, opacity fades still run.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
