import RoomItem from './RoomItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Component/RoomItem',
  component: RoomItem,
};

const Template = (args) => <RoomItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  roomData: {
    id: '1',
    name: 'Room X',
  },
};
