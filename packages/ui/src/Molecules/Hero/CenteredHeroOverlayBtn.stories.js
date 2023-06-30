import CenteredHeroOverlayBtn from './CenteredHeroOverlayBtn.svelte'

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Molecules/Hero/CenteredHeroOverlayBtn',
    component: CenteredHeroOverlayBtn,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const CenteredHeroOverlayBtnStory = {
    render: (args) => ({
        Component: CenteredHeroOverlayBtn,
        props: args,
    }),
    args: {
        //👇 The args you need here will depend on your component
        title: 'Centered Hero',
        description: 'Hey doa!',
        btn: 'Get Started!',
        btnHref: '/',
        image: 'https://via.placeholder.com/500',
    },
};