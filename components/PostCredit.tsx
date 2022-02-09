import { styled } from "stitches.config";
import portrait from "public/lukasbombach.jpg";

import type { VFC } from "react";

export interface PostCreditProps {
  date: Date;
}

const Wrapper = styled("a", {
  display: "grid",
  gap: "0 $16",
  alignItems: "center",
  gridTemplateColumns: "40px 1fr",
  gridTemplateRows: "40px",
});

const ProfileImage = styled("img", {
  borderRadius: "50%",
  width: "100%",
  height: "100%",
});

const Text = styled("p", {});

const Time = styled("time", {
  color: "$faded",
});

export const PostCredit: VFC<PostCreditProps> = ({ date }) => {
  const dateFormat = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const;
  return (
    <Wrapper href="/">
      <ProfileImage src={portrait.src} alt="Portrait of Lukas Bombach" />
      <Text>
        Lukas Bombach, <Time>{date.toLocaleDateString("en-US", dateFormat)}</Time>
      </Text>
    </Wrapper>
  );
};
