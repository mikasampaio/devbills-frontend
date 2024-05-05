import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import dayjs from 'dayjs';
import localeBr from 'dayjs/locale/pt-br';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/formatCurrency';

dayjs.locale(localeBr);

const dataApi = [
  {
    _id: {
      year: 2023,
      month: 1,
    },
    incomes: 644566,
    expenses: 44554,
    balance: 976655,
  },
  {
    _id: {
      year: 2023,
      month: 2,
    },
    incomes: 4555689,
    expenses: 57964,
    balance: 976655,
  },
  {
    _id: {
      year: 2023,
      month: 3,
    },
    incomes: 35678,
    expenses: 345446,
    balance: 347997,
  },
  {
    _id: {
      year: 2023,
      month: 4,
    },
    incomes: 35678,
    expenses: 345446,
    balance: 347997,
  },
  {
    _id: {
      year: 2023,
      month: 5,
    },
    incomes: 35678,
    expenses: 345446,
    balance: 347997,
  },
];

type ChartProps = {
  month: string;
  Saldo: number;
  Receitas: number;
  Gastos: number;
};

export function FinancesBarChart() {
  const data = useMemo<ChartProps[]>(() => {
    const chartData = dataApi.map((data) => ({
      month: dayjs(`${data._id.year}-${data._id.month}-01`).format('MMM'),
      Saldo: data.balance,
      Receitas: data.incomes,
      Gastos: data.expenses,
    }));

    return chartData;
  }, []);

  return (
    <ResponsiveBar
      data={data}
      keys={['Saldo', 'Receitas', 'Gastos']}
      colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
      indexBy={'month'}
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 0,
        format: formatCurrency,
      }}
      margin={{ left: 90, bottom: 25, top: 50 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 12,
          color: theme.colors.neutral,
        },
        axis: {
          ticks: {
            text: { fill: theme.colors.neutral },
          },
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
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -50,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemTextColor: theme.colors.neutral,
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      valueFormat={formatCurrency}
    />
  );
}
