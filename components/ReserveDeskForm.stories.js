import ReserveDeskForm from './ReserveDeskForm';

export default {
  title: 'Component/ReserveDeskForm',
  component: ReserveDeskForm,
  decorators: [
    (Story) => (
      <div style={{ width: '18.75rem' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ReserveDeskForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  selectedRoomId: '1',
  selectedDesk: {
    name: 'Desk 1',
  },
};
