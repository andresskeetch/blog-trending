import React from 'react';
import { Thumb } from 'components';
import "app/styles.scss"

export default {
  title: 'Components Blog/Thumb',
  component: Thumb,
  argTypes: {
    type: {
      options: ['up', 'down'],
      control: { type: 'radio' }
    },
    onClick: { action: 'clicked' },
    isSelected: { control: { type: 'boolean'}}
  },
};

const Template = (args) => <div style={{ width: '200px', height: '200px',  background: 'black', display: "flex", alignItems: "center", justifyContent: "center"}}>
  <Thumb {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  type: "up",
  onClick: () => {alert('Voto')}
};

