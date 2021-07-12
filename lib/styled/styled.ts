import { createElement } from "react";
import { atoms } from "./sprinkles.css";

import type { FC } from "react";
import type { Atoms } from "./sprinkles.css";

type Tag = keyof JSX.IntrinsicElements;

export function styled(tag: Tag, styles: Atoms): FC {
  const className = atoms(styles);
  return ({ children }) => createElement(tag, { className }, children);
}
