import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { compose, withState, withHandlers } from 'recompose'

import "./App.css"
import AgeStats from './AgeStats'

export const App = ({ handleDateChange, birthDate }) => (
  <div className="App">
    <h1>Enter your birthday!</h1>
    <Form inline>
      <FormControl
        type="date"
        onChange={handleDateChange}
        value={birthDate}
      />
    </Form>
    <AgeStats date={birthDate} />
  </div>
)

const enhance = compose(
  withState('birthDate', 'changeDate', ''),
  withHandlers({
    handleDateChange: ({ changeDate }) => e => changeDate(e.target.value)
  })
)

export default enhance(App)
