import React from 'react';
import { Card } from 'components';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import "app/styles.scss"

TimeAgo.addDefaultLocale(en);

export default {
  title: 'Components Blog/Card',
  component: Card,
  argTypes: {
    type: {
      options: ['grid', 'list'],
      control: { type: 'radio' }
    },
    onVote: { action: 'clicked add vote' }
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "grid",
  data: {
    "name": "Kanye West",
    "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    "category": "entertainment",
    "picture": "kanye.png",
    "lastUpdated": "2020-03-10T23:08:57.892Z",
    "votes": {
        "positive": 23,
        "negative": 36
    }
  },
  onVote: (name, type) => {alert('Voto', name, type)}
};

