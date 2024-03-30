import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

type AvatarStory = AvatarComponent & { label?: string };

const meta: Meta<AvatarStory> = {
  component: AvatarComponent,
};

export default meta;

type Story = StoryObj<AvatarStory>;

export const Primary: Story = {
  args: {
    src: "https://dummyimage.com/600x400/000/fff&text=test",
  },
};
