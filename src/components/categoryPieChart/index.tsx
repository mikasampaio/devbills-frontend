import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { Category } from '../../services/category-requests';
import { Expense } from '../../services/transaction-request';
import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/formatCurrency';

type ChartProps = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

type CategoriesPieChartProps = {
  onClick: (category: Category) => void;
  expenses?: Expense[];
};

export function CategoriesPieChart({
  onClick,
  expenses,
}: CategoriesPieChartProps) {
  const data = useMemo<ChartProps[]>(() => {
    if (expenses?.length) {
      const chartData: ChartProps[] = expenses.map((data) => ({
        id: data.title,
        label: data.title,
        externalId: data._id.toString(),
        value: data.amount,
        color: data.color,
      }));

      return chartData;
    }
    return [];
  }, [expenses]);

  return (
    <ResponsivePie
      onClick={({ data }) => {
        onClick({
          _id: data.externalId,
          title: data.label,
          color: data.color,
        });
      }}
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
