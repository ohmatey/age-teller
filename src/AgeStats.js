import React from 'react'
import { compose, withPropsOnChange, branch, renderNothing, renderComponent } from 'recompose'

import calcDateDifference from './utils/calcDateDifference'

export const AgeStats = ({ date, diffedDate }) => (
  <div>
    <h2>{date}</h2>
    <h5>{diffedDate}</h5>
  </div>
)

const enhance = compose(
  withPropsOnChange(
    (props, nextProps) => props.date !== nextProps.date,
    ({ date }) => ({
      diffedDate: calcDateDifference(date)
    })
  )
)

export const enhancedAgeStats = enhance(AgeStats)

const HasDateAgeStats = branch(
  ({ date }) => !date,
  renderNothing,
  renderComponent(enhancedAgeStats)
)

export default HasDateAgeStats()
