import calcDateDifference from './calcDateDifference'

test('calcDateDifference function returns expected string of date values', () => {
  expect(calcDateDifference('2017-06-28')).toMatchSnapshot()
})
