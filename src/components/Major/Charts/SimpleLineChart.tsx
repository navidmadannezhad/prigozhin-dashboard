import { FC } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material/styles";

interface SimpleLineChartProps{};

const SimpleLineChart: FC<SimpleLineChartProps> = (props) => {
  const theme = useTheme();

  return (
    <div style={{ width: "100%" }}>
      <LineChart
        xAxis={[{ 
          data: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
          ] 
        }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        // width={500}
        height={300}
        sx={{
          "& .MuiAreaElement-root":{
            fill: "url('#myGradient')"
          }
        }}
      >
        <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor={theme.palette.success.main} />
          <stop offset="95%" stopColor="rgba(0,0,0,0.1)" />
        </linearGradient>
      </defs>
      </LineChart>
    </div>
  );
}

export default SimpleLineChart;