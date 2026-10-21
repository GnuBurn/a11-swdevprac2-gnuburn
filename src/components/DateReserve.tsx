'use client'

import { MenuItem, Select, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

export default function DateReserve({ bookDate, nameLastname, tel, venue,
  onDateChange, onNameChange, onTelChange, onVenueChange }: {
  bookDate: Dayjs | null,
  nameLastname: string,
  tel: string,
  venue: string,
  onDateChange: (value: Dayjs | null) => void,
  onNameChange: (value: string) => void,
  onTelChange: (value: string) => void,
  onVenueChange: (value: string) => void
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid grid-cols-1 gap-7 rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:grid-cols-2 sm:p-8">
        <DatePicker label="Date" value={bookDate} onChange={(value) => onDateChange(value)}
          slotProps={{ textField: { fullWidth: true } }} />
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          fullWidth
          value={nameLastname}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          fullWidth
          value={tel}
          onChange={(e) => onTelChange(e.target.value)}
        />
        <Select
          id="venue"
          variant="standard"
          displayEmpty
          fullWidth
          value={venue}
          onChange={(e) => onVenueChange(e.target.value)}
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
