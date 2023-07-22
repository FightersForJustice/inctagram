import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.scss'

export const MainDatePicker = () => {
  return (
    <div className="UIKitDatePicker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker open showDaysOutsideCurrentMonth dayOfWeekFormatter={(day) => day} />
      </LocalizationProvider>
    </div>
  )
}
