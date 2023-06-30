import ImageLink from './ImageLink.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/Image/ImageLink',
    component: ImageLink,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const ImageLinkStory = {
    render: (args) => ({
        Component: ImageLink,
        props: args,
    }),
    args: {
        //👇 The args you need here will depend on your component
        src: 'https://placekitten.com/400/400',
        alt: 'Kitten',
        customClass: 'rounded-md',
        href: '',
        isBlank: false,
        customLinkClass: '',
    },
};