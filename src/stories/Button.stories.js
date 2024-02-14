import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4lHmV4jigJuNiIODkKA6K8/Chromatic-component?type=design&node-id=100-2&mode=design&t=NuVIdHnXkgKyNHQ0-4',
      
    }
  }
  
};

export const button= () => <button>Hello</button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
    variant: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    variant: 'small',
  },
};


