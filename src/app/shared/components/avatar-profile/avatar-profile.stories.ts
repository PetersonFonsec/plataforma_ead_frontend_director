import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarProfileComponent } from './avatar-profile.component';

type AvatarStory = AvatarProfileComponent & { label?: string };

const meta: Meta<AvatarStory> = {
  component: AvatarProfileComponent,
};

export default meta;

type Story = StoryObj<AvatarStory>;

export const Primary: Story = {
  args: {
    src: "https://dummyimage.com/600x400/000/fff&text=test",
    name: "Peterson F. Simião"
  },
};
