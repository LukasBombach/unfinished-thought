import Highlight, { defaultProps } from "prism-react-renderer";

import type { VFC } from "react";
// import type { HighlightProps } from "prism-react-renderer";

export const CodeBlock: VFC<{ value: string }> = ({ value }) => {
  return (
    <Highlight {...defaultProps} code={value} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
