import type { Meta, StoryObj } from '@storybook/angular';

import { SelectComponent } from './select.component';
import { argsToTemplate } from '@storybook/angular';

type SelectStory = SelectComponent;

const meta: Meta<SelectStory> = {
  component: SelectComponent,
};

export default meta;

type Story = StoryObj<SelectStory>;

export const Default: Story = {
  args: {
    options: Array(4).fill({ value: 0, label: "teste" }),
  },
};

