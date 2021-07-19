import { styled } from "lib/styled";

import type { VFC } from "react";

const Container = styled("header", {});

const Headline = styled("h1", {});

export const Header: VFC = () => (
  <Container>
    <Headline>Unfinished Thought</Headline>
  </Container>
);
