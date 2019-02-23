import * as React from "react"
import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import { Toast } from "."

Enzyme.configure({ adapter: new Adapter() })

describe("Snapshot for Toast", () => {
  it("Snapshot", () => {
    const wrapper = Enzyme.shallow(<Toast message={"ERROR"} />)
    expect(wrapper).toMatchSnapshot()
  })
})
