import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

export const parameters = {
  //configuration files for the stories
  actions: { argTypesRegex: "^on[A-Z].*" },
  //sort the story by name
  viewport: {
    viewports: INITIAL_VIEWPORTS,
   
  },
// .storybook/preview.js
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box m='4'>
        <Story />
      </Box>
    </ChakraProvider>
  )
]