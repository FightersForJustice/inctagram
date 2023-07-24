import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.scss'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import { useTranslation } from 'react-i18next'

export const MainDatePicker = () => {
  const { t } = useTranslation()

  return (
    <div className="UIKitDatePicker">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('locale')}>
        <DatePicker open showDaysOutsideCurrentMonth dayOfWeekFormatter={(day) => day} />
      </LocalizationProvider>
    </div>
  )
}
