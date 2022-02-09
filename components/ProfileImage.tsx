import { styled } from "stitches.config";
import portrait from "public/lukasbombach.jpg";

import type { VFC } from "react";

const Img = styled("img", {
  borderRadius: "50%",
  width: 58,
  "@tablet": { width: 100 },
  height: "auto",
  gridColumn: "1 / 1",
  gridRow: "1 / 2",
});

export const ProfileImage: VFC = () => <Img src={portrait.src} alt="Portrait of Lukas Bombach" />;
