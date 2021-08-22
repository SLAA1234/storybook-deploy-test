module.exports = {
  //indiccates all files within the source
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewpoint",
    "@storybook/addon-a11y"

  ]
}
// controls addon: allow you change the arguments. For React, means you change props here