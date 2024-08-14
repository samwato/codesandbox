import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'

const PAGE_TITLE_ID = 'page-title'
const DESCRIPTION_ID = 'description'

const exampleAriaAttributes: React.AriaAttributes = {
  /**
   * aria-label and aria-labelledby
   * Both attributes are used to provide a label for the grid.
   */
  'aria-label': 'Customers',
  'aria-labelledby': PAGE_TITLE_ID,
  /** aria-description and aria-describedby
   * Both attributes are used to provide a description for the grid
   * and are necessary to provide a summary of the grid.
   * See https://www.w3.org/WAI/tutorials/tables/caption-summary/#using-aria-describedby-to-provide-a-table-summary
   */
  'aria-description': "Here is a list of customers.",
  'aria-describedby': DESCRIPTION_ID,
  /**
   * aria-busy is an example of other aria attributes that can be used.
   */
  'aria-busy': 'false',
}

export default function Playground() {
  const rows = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' } ]
  const columns = [{ field: 'id' }, { field: 'name' }]

  return (
    <div>
      <h1 id={PAGE_TITLE_ID}>Customers</h1>
      <p id={DESCRIPTION_ID}>Here is a list of customers.</p>

      <DataGrid
        {...exampleAriaAttributes}
        data-field="Data attributes should still work"
        columns={columns}
        rows={rows}
      />
    </div>
  );
}
