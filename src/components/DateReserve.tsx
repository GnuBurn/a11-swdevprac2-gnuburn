'use client'

import { MenuItem, Select, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function DateReserve() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid grid-cols-1 gap-7 rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:grid-cols-2 sm:p-8">
        <DatePicker label="Date" slotProps={{ textField: { fullWidth: true } }} />
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          fullWidth
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          fullWidth
        />
        <Select
          id="venue"
          defaultValue=""
          variant="standard"
          displayEmpty
          fullWidth
        >
          <MenuItem value="" disabled>
            Select venue
          </MenuItem>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </div>
    </LocalizationProvider>
  )
}
