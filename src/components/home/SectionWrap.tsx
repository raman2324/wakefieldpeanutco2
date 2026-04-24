import { motion, type HTMLMotionProps } from "framer-motion";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<
  Omit<HTMLMotionProps<"section">, "ref"> & { id?: string }
>;

export function SectionWrap({ children, className = "", ...rest }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export function GoldDivider() {
  return (
    <div className="mx-auto my-6 h-px w-[120px] bg-gold/40" aria-hidden />
  );
}