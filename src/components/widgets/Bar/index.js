import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';
import format from 'date-fns/format';

const Bar = ({ values }) => {
  const axisStyles = {
    axis: { stroke: '#444' },
    ticks: { stroke: '#444', size: 5 },
    label: { fill: '#fff' },
    tickLabels: { fill: '#888' },
  };

  return (
    <svg viewBox="0 0 450 300">
      <VictoryChart
        standalone={false}
        padding={{ left: 55, top: 30, right: 10, bottom: 10 }}
        domainPadding={{ x: 10 }}
        style={{
          parent: {
            border: '1px solid red',
          },
        }}
      >
        <VictoryAxis
          style={axisStyles}
          orientation="top"
          offsetY={30}
          tickCount={4}
          scale="time"
          tickFormat={x => format(x, 'DD MMM')}
        />
        <VictoryAxis
          style={{
            ...axisStyles,
            grid: { stroke: 'rgba(255, 255, 255, .07)' },
          }}
          dependentAxis
          tickFormat={x => `${x}°C`}
        />
        <VictoryBar
          style={{
            data: {
              fill: '#fff',
            },
            labels: {
              fill: '#fff',
              color: '#fff',
            },
          }}
          barRatio={1}
          data={values}
        />
      </VictoryChart>
    </svg>
  );
};

export default Bar;

Bar.propTypes = {
  values: PropTypes.array,
};
