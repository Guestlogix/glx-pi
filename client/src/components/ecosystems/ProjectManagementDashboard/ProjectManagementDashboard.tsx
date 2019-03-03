import * as React from "react"
import { FigureCell } from "../../organisms"
import { Dashboard, DashboardCell } from "../../molecules"
import { RepoProgress, Burndown } from "."

interface IState {
  firstname?: string
}

export class ProjectManagementDashboard extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      firstname: "hank",
    }
  }

  public render() {
    return (
      <Dashboard title="Project Management" rows={3} columns={4}>
        <DashboardCell
          title="Total Progress"
          x={0}
          y={0}
          colspan={1}
          rowspan={1}
        >
          <FigureCell value={"12%"} />
        </DashboardCell>
        <DashboardCell
          title="Total Progress"
          x={1}
          y={0}
          colspan={3}
          rowspan={1}
        >
          <RepoProgress value={"12%"} />
        </DashboardCell>
        <DashboardCell title="Burndown" x={0} y={1} colspan={4} rowspan={1}>
          <Burndown value={"12%"} />
        </DashboardCell>
      </Dashboard>
    )
  }
}
