import React from 'react'
import Button from './Button'
import { action, actions } from '@storybook/addon-actions'

//title will show in the menu
export default {
    title: 'form/Button',
    component: Button,
    argTypes: {
        children: { control: 'text'},                     
    }
}

//onClick={action('Click handler')} only can use in this way, not in the args
/* export const Primary = () => <Button variant='primary' onClick={action('Click handler')} >Primary</Button>
export const Secondary = () => <Button variant='secondary' {...actions('onClick', 'onMouseOver')}>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button> */

//verion 6, args mechanism
// create template, bind empty object, then feed args
//disabled: color doesn't change, but can't click, no click event
const Template = (args) => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args', 
    disabled:true   
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Lisa Secondary 3 Args',   
}

export const CustomButton = Template.bind({})
CustomButton.args = {
    ...PrimaryA.args,
    children: 'Lisa Button',
    disabled:false,
    variant: 'danger'
  
}

/* export const Log = () => {
    return <Button colorScheme='yellow' onClick = { () => console.log('Button clicked')} > Log</Button>
} */