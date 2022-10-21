import DeskItem from './DeskItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component/DeskItem',
  component: DeskItem,
};

const Template = (args) => <DeskItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  deskDetails: {
    name: 'Desk',
  },
  onShowDetails: action('Details are toggled'),
};

export const Selected = Template.bind({});

Selected.args = {
  ...Default.args,
  currentHighlightedDesk: 'Desk',
};
