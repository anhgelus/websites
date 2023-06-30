import CardImageOverlay from './CardImageOverlay.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Molecules/SimpleCard/CardImageOverlay',
    component: CardImageOverlay,
};

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const CardImageOverlayStory = {
    render: (args) => ({
        Component: CardImageOverlay,
        props: args,
    }),
    args: {
        title: 'SimpleCard Title',
        content: ["SimpleCard Description"],
        btn: 'Click on me!',
        btnLink: 'https://placekitten.com/200/300',
        isBtnPrimary: false,
        image: 'https://placekitten.com/200/300',
        alt: 'SimpleCard Image'
    },
};