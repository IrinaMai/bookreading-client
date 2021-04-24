import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { useWindowWidth } from '@react-hook/window-size';
import ChartStyled from './ChartStyled';

const data = [
  {
    name: '22.04.2021',
    pagesTotal: (400 / 7) * 1,
    pagesRead: 40,
  },
  {
    name: '23.04.2021',
    pagesTotal: (400 / 7) * 2,
    pagesRead: 100,
  },
  {
    name: '24.04.2021',
    pagesTotal: (400 / 7) * 3,
    pagesRead: 190,
  },
  {
    name: '25.04.2021',
    pagesTotal: (400 / 7) * 4,
    pagesRead: 210,
  },
  {
    name: '26.04.2021',
    pagesTotal: (400 / 7) * 5,
    pagesRead: 250,
  },
  {
    name: '27.04.2021',
    pagesTotal: (400 / 7) * 6,
    pagesRead: 320,
  },
  {
    name: '28.04.2021',
    pagesTotal: (400 / 7) * 7,
    pagesRead: 400,
  },
];

const Chart = () => {
  const onlyWidth = useWindowWidth();
  const config = {};
  switch (true) {
    case onlyWidth >= 768:
      config.width = 600;
      config.height = 340;
      break;
    case onlyWidth >= 1280:
      config.width = 700;
      config.height = 380;
      break;
    default:
      config.width = 280;
      config.height = 200;
      break;
  }
  return (
    <ChartStyled>
      <p className="pagesAverage">
        Кількість сторінок / день <span className="pagesAverage-amount">34</span>
      </p>
      <LineChart
        width={config.width}
        height={config.height}
        data={data}
        margin={{
          top: 25,
          right: 36,
          left: 36,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="0" horizontal={false} stroke="#B1B5C2" />
        <XAxis dataKey="name" tickLine={false} tick={<></>}>
          <Label value="ЧАС" offset={0} position="insideBottomRight" />
        </XAxis>
        <YAxis tickLine={false} tick={false} />
        <Tooltip />
        <Legend align="right" verticalAlign="middle" iconSize={0} />
        <Line type="monotone" dataKey="pagesRead" name="Факт" stroke="#FF6B08" strokeWidth={2} activeDot={{ r: 8 }} dot={{ strokeWidth: 6 }} />
        <Line type="monotone" dataKey="pagesTotal" name="План" stroke="#091E3F" strokeWidth={2} activeDot={{ r: 8 }} dot={{ strokeWidth: 6 }} />
      </LineChart>
    </ChartStyled>
  );
};

export default Chart;
