import { ReactNode } from "react";

interface ULProps {
  children: ReactNode;
}

export function UL({ children }: ULProps) {
  return <ul className="my-5 list-none list-inside">{children}</ul>;
}
