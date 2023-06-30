import ButtonPrimary from './ButtonPrimary.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/Button/ButtonPrimary',
    component: ButtonPrimary,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const ButtonPrimaryStory = {
    render: (args) => ({
        Component: ButtonPrimary,
        props: args,
    }),
    args: {
        //👇 The args you need here will depend on your component
        name: "I'm a button",
        href: "https://placekitten.com/200/300",
        isBlank: false,
        isDisabled: false,
    },
};