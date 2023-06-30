import Subtitle from './Subtitle.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/Title/Subtitle',
    component: Subtitle,
};

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const SubtitleStory = {
    render: (args) => ({
        Component: Subtitle,
        props: args,
    }),
    args: {
        name: 'Hello world!',
    },
};