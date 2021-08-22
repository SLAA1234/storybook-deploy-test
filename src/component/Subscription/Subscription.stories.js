import React from 'react'
import { PrimaryA } from '../button/Button.stories'
import { Large } from '../input/Input.stories'

export default {
    title: 'Form/Subscription'
}
export const PrimarySubscription = () => {
   return (
    <>
            <Large />
            <PrimaryA />
        </>
    )
}

//advantages of write stories in stories
//1. reduce the amount of the code
//2. if make change in other stories, it will reflected in this story as well

//disadvantages
//1. won'te be able to take full advantage of the args mechanism.
//      args advantages:
        //    from version 6, each story is considered to be a component with a set of arguments. 
        //    eg. props are considered as arguments
        //    create a template, can reuse the tempalte, and part of other args
        //      can create args at story level, so will be applied to all the component, and overwrite the component level
        // another advantage will stated in add-on lessons