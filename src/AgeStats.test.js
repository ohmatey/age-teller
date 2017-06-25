import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { AgeStats } from './AgeStats'

test('AgeStats renders without props', () => {
  const component = renderer.create(
    <AgeStats />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AgeStats renders with date', () => {
  const mockDate = '22-12-2014'
  const component = renderer.create(
    <AgeStats date={mockDate} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AgeStats renders with diffedDate', () => {
  const mockDate = '22-12-2014'
  const component = renderer.create(
    <AgeStats diffedDate={mockDate} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
