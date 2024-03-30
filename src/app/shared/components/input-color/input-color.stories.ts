import type { Meta, StoryObj } from '@storybook/angular';

import { InputColorComponent } from './input-color.component';
import { argsToTemplate } from '@storybook/angular';

type InputColorStory = InputColorComponent;


const meta: Meta<InputColorStory> = {
  component: InputColorComponent,
  render: ({ ...args }) => ({
    props: args,
    template: `
    <app-input-color ${argsToTemplate(args)}>
    </app-input-color>`,
  }),

};

export default meta;

type Story = StoryObj<InputColorStory>;

export const Primary: Story = {
  args: {
    label: "Peterson",
  },
};
