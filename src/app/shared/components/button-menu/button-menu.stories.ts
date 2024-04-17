import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonMenuComponent } from './button-menu.component';
import { argsToTemplate } from '@storybook/angular';

type ButtonStory = ButtonMenuComponent & { label?: string };


const meta: Meta<ButtonStory> = {
  component: ButtonMenuComponent,
  render: ({ label, ...args }) => ({
    props: args,
    template: `
    <app-button-menu ${argsToTemplate(args)}>
    </app-button-menu>`,
  }),

};

export default meta;

type Story = StoryObj<ButtonStory>;

export const Primary: Story = {};
