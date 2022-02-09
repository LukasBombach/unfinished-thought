const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [require("@mapbox/rehype-prism")],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});
