import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    height: 100,
};
export const NormalCircle = Template.bind({});
Normal.args = {
    height: 100,
    width: 100,
    border: '50%',
};

export const Dark = Template.bind({});
Dark.args = {
    height: 100,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    height: 100,
    width: 100,
    border: '50%',
};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];
