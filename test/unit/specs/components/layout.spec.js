import { mount } from '@vue/test-utils'
import hd from 'heredocument'
import Layout from '@/components/layout'

describe('Layout', () => {
  const subject = Layout

  it('renders a Markdown table', () => {
    const input = hd`
      Color,Role
      Gold,Ruling class
      Blue,Pilots
      Red,Manual labor
    `.trim()

    const expected = hd`
      | Color | Role         |
      | ----- | ------------ |
      | Gold  | Ruling class |
      | Blue  | Pilots       |
      | Red   | Manual labor |
    `.trim()

    const wrapper = mount(subject)
    wrapper.find('textarea').setValue(input)
    const output = wrapper.find('code').text()
    expect(output).toEqual(expected)
  })
})
