import ProjectImage from './ProjectImage.svelte'
import ProjectSeparator from "./ProjectSeparator.svelte";

//👇This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/svelte/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Molecules/Project/ProjectImage',
    component: ProjectImage,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/svelte/api/csf
 * to learn how to use render functions.
 */
export const ProjectSeparatorStory = {
    render: (args) => ({
        Component: ProjectImage,
        props: args,
    }),
    args: {
        //👇 The args you need here will depend on your component
        bgColor: 'bg-base-100',
    },
};