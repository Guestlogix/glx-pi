import * as React from "react"
import { ResponsiveLine } from "@nivo/line"
import { palette } from "styled-theme"

interface IProps {
  value: string
}

export const Burndown: React.StatelessComponent<IProps> = props => {
  return (
    <ResponsiveLine
      colors={`${palette("grayscale", 3)()}`}
      data={[
        {
          id: "japan",
          color: "hsl(292, 70%, 50%)",
          data: [
            { x: "2018-01-01", y: 7 },
            { x: "2018-01-02", y: 5 },
            { x: "2018-01-03", y: 11 },
          ],
        },
      ]}
      margin={{
        top: 50,
        right: 110,
        bottom: 50,
        left: 60,
      }}
      yScale={{
        type: "linear",
        stacked: true,
        min: "auto",
        max: "auto",
      }}
      curve="step"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={null}
      dotSize={10}
      dotColor="inherit:darker(0.3)"
      dotBorderWidth={2}
      dotBorderColor="#ffffff"
      enableDotLabel={true}
      enableGridX={false}
      enableGridY={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        axis: {
          ticks: {
            line: {
              stroke: "white",
            },
            text: {
              fill: "white",
            },
          },
        },
      }}
    />
  )
}
