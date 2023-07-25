import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.scss'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import { useTranslation } from 'react-i18next'
import { Dispatch, useEffect, useState } from 'react'
import dayjs from 'dayjs'
// import { User } from '@/assets/api/auth/userSlice'

type DatePickerTypes = {
  value?: Date
  // setValue: Dispatch<React.SetStateAction<User>>
  setValue: Dispatch<React.SetStateAction<any>>
  isSavingToArray?: boolean
}

export const MainDatePicker = ({ value, setValue, isSavingToArray = false }: DatePickerTypes) => {
  const { t } = useTranslation()
  const [date, setDate] = useState(value ? value : null)

  const handleChange = (value: Date) => {
    setValue((prevData: any) => ({
      ...prevData,
      dateOfBirth: value,
    }))
  }

  useEffect(() => {
    if (!date) return
    if (isSavingToArray) {
      handleChange(date)
    } else {
      console.log(date)
      setValue(date)
    }
  }, [date])

  return (
    <div className="UIKitDatePicker">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('locale')}>
        <DatePicker
          showDaysOutsideCurrentMonth
          dayOfWeekFormatter={(day) => day}
          onChange={(e: any) => setDate(e.$d)}
          value={dayjs(date)}
        />
      </LocalizationProvider>
    </div>
  )
}