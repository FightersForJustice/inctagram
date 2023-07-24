import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.scss'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const MainDatePicker = () => {
  const { t } = useTranslation()
  const [date, setDate] = useState()
  return (
    <div className="UIKitDatePicker">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('locale')}>
        <DatePicker
          showDaysOutsideCurrentMonth
          dayOfWeekFormatter={(day) => day}
          onChange={(e: any) => setDate(e.$d)}
          value={date}
        />
      </LocalizationProvider>
    </div>
  )
}
