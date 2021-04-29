import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { useWindowWidth } from '@react-hook/window-size';
import { DateTime } from 'luxon'
import { useSelector } from 'react-redux';
import { getActiveTraining } from '../../redux/selectors/trainingSelectors';
import ChartStyled from './ChartStyled';



const Chart = () => {
  const training = useSelector(getActiveTraining)  
  const onlyWidth = useWindowWidth();
  const start = DateTime.fromISO(training.startDate);
  const finish = DateTime.fromISO(training.finishDate);
  const duration = finish.diff(start, 'days').toObject()?.days + 1;
  const average = Math.ceil(training.pagesTotal/duration) || 0;
  const sortedProgress = training?.progress?.slice().sort((a, b) => DateTime.fromISO(a.date).ts - DateTime.fromISO(b.date).ts)
  const data = sortedProgress?.map((el, idx) => {
    return {
    date: el.date,
    pagesTotal: Math.min(((idx + 1) * average), training.pagesTotal),
    pagesRead: sortedProgress.reduce((acc, value, index) => acc + (index < idx + 1 ? value.pages : 0), 0),
    }
  })  
  
  const config = {};
  switch (true) {
    case onlyWidth >= 1280:
      config.width = 800;
      config.height = 250;
      break;
    case onlyWidth >= 768:
      config.width = 610;
      config.height = 250;      
      break;
    default:
      config.width = 227;
      config.height = 210;     
      break;
  }
  return (
    <ChartStyled>
      <p className="pagesAverage">
        Кількість сторінок / день <span className="pagesAverage-amount">{average}</span>
      </p>
      <LineChart
        width={config.width}
        height={config.height}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -53,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0" horizontal={false} stroke="#B1B5C2" />
        <XAxis dataKey="date" tickLine={false} tick={onlyWidth >= 768 && <></>}>
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
