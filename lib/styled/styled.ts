import { createElement } from "react";
import { atoms } from "./sprinkles.css";

import type { FC } from "react";
import type { Atoms } from "./sprinkles.css";

type Tag = keyof JSX.IntrinsicElements;
export type TagProps<T extends Tag> = JSX.IntrinsicElements[T];

export function styled<T extends Tag>(
  tag: T,
  styles: Atoms | string
): FC<TagProps<T>> {
  return ({ children, className, ...props }) =>
    createElement(
      tag,
      {
        ...props,
        className: [className, atoms(styles)].join(" "),
      },
      children
    );
}
