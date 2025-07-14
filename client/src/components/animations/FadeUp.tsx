// components/animations/FadeUp.tsx
import { Animate } from "../Animate";
import { fadeUp } from "../../utils/animations";

export const FadeUp = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Animate variants={fadeUp} className={className}>
    {children}
  </Animate>
);
