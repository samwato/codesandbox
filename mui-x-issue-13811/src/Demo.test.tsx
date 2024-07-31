import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Demo from './Demo.tsx'

test('Sanity', () => {
  render(<Demo/>);
})

test('Set focus cell fails test', () => {
  render(<Demo setFocus/>)
})
