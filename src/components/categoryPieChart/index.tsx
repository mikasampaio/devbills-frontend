import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/formatCurrency';

const dataApi = [
  {
    _id: 1,
    title: 'Alimentação',
    amount: 30000,
    color: '#fffb00',
  },
  {
    _id: 2,
    title: 'Roupas',
    amount: 30000,
    color: '#e601e6',
  },
  {
    _id: 3,
    title: 'Plano de sáude',
    amount: 30000,
    color: '#27c8dd',
  },
];

type ChartProps = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export function CategoriesPieChart() {
  const data = useMemo<ChartProps[]>(() => {
    const chartData = dataApi.map((data) => ({
      id: data.title,
      label: data.title,
      externalId: data._id.toString(),
      value: data.amount,
      color: data.color,
    }));

    return chartData;
  }, []);

  return (
    <ResponsivePie
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 8 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 12,
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      valueFormat={formatCurrency}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: -50,
          translateY: -10,
          itemsSpacing: 0,
          itemWidth: 120,
          itemHeight: 20,
          itemTextColor: theme.colors.neutral,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: 'square',
        },
      ]}
    />
  );
}
