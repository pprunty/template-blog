import { ReactNode } from "react";
import { withHeadingId } from "./utils";

interface HeadingProps {
  children?: ReactNode; // Ensures children can be any valid React element
}

export function H3({ children }: HeadingProps) {
  return (
    <h3 className="group font-bold text-lg my-8 relative">
      {withHeadingId(children)}
    </h3>
  );
}
