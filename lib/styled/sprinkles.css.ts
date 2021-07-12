import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

const fonts = {
  sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
};

const colors = {
  "dark-blue": "#3A4655",
};

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const responsiveStyles = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
  },
  defaultCondition: "mobile",
  properties: {
    fontFamily: fonts,
    position: ["relative", "absolute"],
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    inset: [0],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
  },
});

export const atoms = createAtomsFn(responsiveStyles, colorStyles);

export type Atoms = Parameters<typeof atoms>[0];
