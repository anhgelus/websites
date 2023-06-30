import Title3 from './Title3.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/Title/Title3',
    component: Title3,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const Title3Story = {
    render: (args) => ({
        Component: Title3,
        props: args,
    }),
    args: {
        //👇 The args you need here will depend on your component
        name: 'Hello world 3!',
    },
};