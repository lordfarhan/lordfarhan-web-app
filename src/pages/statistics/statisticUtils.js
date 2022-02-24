/* eslint-disable no-restricted-properties */
// eslint-disable-next-line no-unused-vars
import { measureTextWidth } from '@ant-design/plots';

const StatisticUtils = {
  renderStatistic: (containerWidth, text, style) => {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2)
        / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
  },

  timeManagementData: () => (
    [
      {
        type: 'Learn',
        value: 4,
      },
      {
        type: 'Earn',
        value: 6,
      },
      {
        type: 'Solopreneur',
        value: 3,
      },
      {
        type: 'Life',
        value: 11,
      },
    ]
  ),

  timelineData: () => (
    [
      {
        event: 'Play Group',
        values: [2003, 2006],
      },
      {
        event: 'Elementary School',
        values: [2006, 2012],
      },
      {
        event: 'Junior High School',
        values: [2012, 2015],
      },
      {
        event: 'Senior High School',
        values: [2015, 2018],
      },
      {
        event: 'College',
        values: [2018, 2022],
      },
    ]
  ),
};

export default StatisticUtils;
