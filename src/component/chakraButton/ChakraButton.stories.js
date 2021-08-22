import React from 'react'
import { Button } from '@chakra-ui/react'

//here Button is from chakra
export default {
    title: 'Chakra/Button',
    component: Button,
}

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    colorScheme: 'green',
    children: 'Success',
   
}

export const Danger = Template.bind({})
Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
}

// for this Chakra button, you don't need to add controls, but normal button need