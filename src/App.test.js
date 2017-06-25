import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { App } from './App'

test('App component renders without props', () => {
  const component = renderer.create(
    <App />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('App component renders with date', () => {
  const component = renderer.create(
    <App date={'24-11-2015'} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('App renders date', () => {
  const mockBirthDate = '24-11-2015'
  const component = shallow(
    <App birthDate={mockBirthDate} />
  )

  expect(component.find('FormControl').props().value).toEqual(mockBirthDate)
})

test('App renders date', () => {
  const mockBirthDate = '24-11-2015'
  const component = shallow(
    <App birthDate={mockBirthDate} />
  )

  expect(component.find('FormControl').props().value).toEqual(mockBirthDate)
})

test('App handleDateChange works', () => {
  const mockHandleChange = jest.fn()
  const component = shallow(
    <App handleDateChange={mockHandleChange} />
  )

  component.instance().props.handleDateChange()
  expect(mockHandleChange).toHaveBeenCalled()
})
