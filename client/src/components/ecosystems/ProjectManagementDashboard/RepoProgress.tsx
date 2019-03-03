import * as React from "react"
import { ResponsiveBar } from "@nivo/bar"
import { palette } from "styled-theme"

interface IProps {
  value: string
}

export const RepoProgress: React.StatelessComponent<IProps> = props => {
  return (
    <ResponsiveBar
      margin={{ top: 10, right: 0, bottom: 10, left: 50 }}
      data={[
        {
          repo: "ios",
          "issues complete": 0.4,
        },
        {
          repo: "android",
          "issues complete": 0.7,
        },
        {
          repo: "api",
          "issues complete": 0.67,
        },
        {
          repo: "mc",
          "issues complete": 0.84,
        },
      ]}
      colors={`${palette("grayscale", 3)()}`}
      indexBy="repo"
      padding={0.5}
      keys={["issues complete"]}
      labelTextColor={palette("grayscale", 3)}
      labelSkipWidth={16}
      labelSkipHeight={16}
      groupMode="grouped"
      layout="horizontal"
      enableGridY={false}
      enableGridX={false}
      maxValue={1}
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
