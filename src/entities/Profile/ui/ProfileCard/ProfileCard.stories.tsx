import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Mirjahon',
        lastname: 'Ulmasov',
        age: 24,
        country: Country.Uzbekistan,
        currency: Currency.USD,
        username: 'mirjahon',
        avatar: AvatarImg,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'Error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
