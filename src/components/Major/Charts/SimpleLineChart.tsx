import { FC } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from "@mui/material/styles";
import { enToFaNum } from "@utils/commonUtils";
import { useSelector } from "react-redux";

interface SimpleLineChartProps{};

const SimpleLineChart: FC<SimpleLineChartProps> = (props) => {
  const theme = useTheme();
  const themeState = useSelector((state: any) => state.common.themeState);

  return (
    <div style={{ width: "100%" }}>
      <LineChart 
        className="simple-line-chart"
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
          ],
          scaleType: "point"
        }]}
        yAxis={[{ 
          valueFormatter: (v) => enToFaNum(v)
        }]}
        series={[
          {
            data: [58, 200, 260, 146, 153, 50, 10, 125, 45, 86, 34, 175],
            area: true,
          },
        ]}
        height={300}
        sx={{
          "& .MuiAreaElement-root":{
            fill: "url('#myGradient')"
          },
          "& .MuiChartsAxis-line, & .MuiChartsAxis-tick":{
            stroke: theme => `${theme.palette.secondary.light}!important`
          }
        }}
      >
        <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor={theme.palette.success.main} />
          <stop offset="95%" stopColor={themeState == "dark" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"} />
        </linearGradient>
      </defs>
      </LineChart>
    </div>
  );
}

export default SimpleLineChart;