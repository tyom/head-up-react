import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

const LineGraph = ({ values }) => (
  <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 450 300">
    <VictoryChart
      standalone={false}
      padding={{
        left: 30,
        right: 20,
        bottom: 30,
      }}
    >
      <VictoryAxis
        style={{
          axis: { stroke: '#444' },
          ticks: { stroke: '#444', size: 5 },
          label: { fill: '#fff' },
          tickLabels: { fill: '#888' },
        }}
        tickCount={5}
        tickFormat={x =>
          new Date(x)
            .toISOString()
            .slice(5, 10)
            .split('-')
            .reverse()
            .join('/')
        }
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: '#444' },
          ticks: { stroke: '#444', size: 5 },
          label: { fill: '#fff' },
          tickLabels: { fill: '#888' },
        }}
      />
      <VictoryLine
        interpolation={'cardinal'}
        style={{
          data: { stroke: '#0f8' },
        }}
        data={values}
      />
    </VictoryChart>
  </svg>
);

export default LineGraph;

LineGraph.propTypes = {
  values: PropTypes.array,
};
