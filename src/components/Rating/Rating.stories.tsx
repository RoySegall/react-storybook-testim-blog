import type { StoryObj } from '@storybook/react';
import { Rating } from './Rating';

type Story = StoryObj<typeof Rating>;

export const FirstStory: Story = {
    args: {
       rating: 4
    },
};

export default {
    component: Rating,
};

