import * as React from "react"
import { Toast } from "../Toast"
import { configure, mount } from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("Toast Message", () => {
  it("should render with a message", () => {
    const wrapper = mount(<Toast message={"Oh NO! ERROR"} />)
    expect(wrapper.props().message).toEqual("Oh NO! ERROR")
  })

  it("should hide without a message", () => {
    const wrapper = mount(<Toast message={""} />)
    expect(wrapper.state("show")).toEqual(false)
  })

  it("should show with message", () => {
    const wrapper = mount(<Toast message={"Oh NO! ERROR"} />)
    expect(wrapper.state("show")).toEqual(true)
  })
})
