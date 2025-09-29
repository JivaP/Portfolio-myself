"use client"

import * as React from "react"
import {
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer,
  TableFooter as MuiTableFooter,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  Paper,
 
  TableCellProps,
} from "@mui/material"

type TableProps = React.ComponentProps<typeof MuiTable> & {
  containerClassName?: string
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, containerClassName, ...props }, ref) => {
    return (
      <TableContainer component={Paper} className={containerClassName}>
        <MuiTable ref={ref} size="small" {...props}>
          {children}
        </MuiTable>
      </TableContainer>
    )
  }
)
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => <MuiTableHead ref={ref} {...props} />
)
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => <MuiTableBody ref={ref} {...props} />
)
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => <MuiTableFooter ref={ref} {...props} />
)
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => <MuiTableRow ref={ref} hover {...props} />
)
TableRow.displayName = "TableRow"
type TableCellWrapperProps = Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "align"> & {
  align?: TableCellProps["align"]
  component?: TableCellProps["component"]
}
const TableHead = React.forwardRef<HTMLTableCellElement, TableCellWrapperProps>(
  ({ align, ...props }, ref) => {
    return <MuiTableCell ref={ref} component="th" scope="col" align={align} {...props} />
  }
)

TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellWrapperProps>(
  ({ align = "left", component = "td", ...props }, ref) => {
    return <MuiTableCell ref={ref} align={align} component={component} {...props} />
  }
)
TableCell.displayName = "TableBodyCell"

// const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
//   ({ children, ...props }, ref) => <MuiTableCaption ref={ref} {...props}>{children}</MuiTableCaption>
// )
// TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  // TableCaption,
}
