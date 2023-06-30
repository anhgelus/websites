import ParagraphImage from './ParagraphImage.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Organisms/Contents/ParagraphImage',
    component: ParagraphImage,
};

/*
 *👇 Render functions are a framework specific feature to allow you to control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const ParagraphImageStory = {
    render: (args) => ({
        Component: ParagraphImage,
        props: args,
    }),
    args: {
        contents: [
            {
                "file": "home.presentation",
                "image": "https://picsum.photos/1920/1080",
                "alt": "Image"
            },
            {
                "file": "home.website-content",
                "image": "https://picsum.photos/900/600",
                "alt": "Image"
            }
        ]
    },
};