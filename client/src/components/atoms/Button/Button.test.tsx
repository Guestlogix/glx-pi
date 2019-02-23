import * as React from "react"
import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import { Button } from "."

Enzyme.configure({ adapter: new Adapter() })

describe("Button Basic functionality", () => {
  it("should render", () => {
    const wrapper = Enzyme.shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })
})
