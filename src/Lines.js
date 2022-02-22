import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import { evolution } from './data-utils';

export default function Lines({ poke }) {
  console.log(poke);
  const data = evolution(poke);
  console.log(data);
  return (
    <div>
      <VictoryChart>
        <VictoryAxis
          label={'Evolution of Pokemon'}
          style={{
            tickLabels: {
              fontSize: 10,
              padding: 5,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={'Weight in Kilograms'}
          style={{ axisLabel: { fontSize: 10, padding: 40 } }}
        />
        <VictoryLine data={data} />
      </VictoryChart>
    </div>
  );
}
