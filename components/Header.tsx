import { styled } from "stitches.config";
import portrait from "public/lukasbombach.jpg";

import type { VFC } from "react";

const Container = styled("header", {
  display: "grid",
  gap: "0 $16",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "30px 30px",
  "@tablet": {
    gap: "8px $16",
    gridTemplateRows: "50px 50px",
  },
});

const ProfileImage = styled("img", {
  borderRadius: "50%",
  width: 58,
  "@tablet": { width: 100 },
  height: "auto",
  gridColumn: "1 / 1",
  gridRow: "1 / 2",
});

const Headline = styled("h1", {
  gridColumn: "2 / 2",
  gridRow: "1 / 1",
  alignSelf: "end",
  fontSize: "$22",
  "@tablet": { fontSize: "40px" },
});

const Subtitle = styled("p", {
  color: "$faded",
  gridColumn: "2 / 2",
  gridRow: "2 / 2",
  fontSize: "$18",
  "@tablet": { fontSize: "$20" },
});

export const Header: VFC = () => (
  <Container>
    <ProfileImage src={portrait.src} alt="Portrait of Lukas Bombach" />
    <Headline>Lukas Bombach</Headline>
    <Subtitle>Front-End Developer from Berlin</Subtitle>
  </Container>
);
