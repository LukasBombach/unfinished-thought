import { styled } from "lib/styled";
import portrait from "public/lukasbombach.jpg";

import type { VFC } from "react";

const Container = styled("header", {
  display: "grid",
  gridTemplateColumns: "100px 1fr",
  gridTemplateRows: "50px 50px",
});

const ProfileImage = styled("img", {
  borderRadius: "50%",
  width: 100,
  height: "auto",
  gridColumn: "1 / 1",
  gridRow: "1 / 2",
});

const Headline = styled("h1", {
  gridColumn: "2 / 2",
  gridRow: "1 / 1",
});

const Subtitle = styled("p", {
  color: "$faded",
  gridColumn: "2 / 2",
  gridRow: "2 / 2",
});

export const Header: VFC = () => (
  <Container>
    <ProfileImage src={portrait.src} alt="Portrait of Lukas Bombach" />
    <Headline>Lukas Bombach</Headline>
    <Subtitle>Front-End Developer from Berlin</Subtitle>
  </Container>
);
