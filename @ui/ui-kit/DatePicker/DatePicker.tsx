import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.scss'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import { useTranslation } from 'react-i18next'
import { Dispatch, useEffect, useState } from 'react'
import classNames from 'classnames'

type DatePickerTypes = {
  value?: Date
  setValue?: Dispatch<React.SetStateAction<any>>
}

export const saveToArray = (setValue: Dispatch<React.SetStateAction<any>>, name = 'date') => {
  return (value: Date) => {
    setValue((prevData: any) => ({
      ...prevData,
      [name]: value,
    }))
  }
}

export const MainDatePicker = ({ value, setValue }: DatePickerTypes) => {
  const { t } = useTranslation()
  const [date, setDate] = useState(null)
  const [pickerState, setPickerState] = useState('UIKitDatePicker--close')
  useEffect(() => {
    if (!setValue) return
    setValue = setDate
  }, [])
  return (
    <div className={classNames('UIKitDatePicker', pickerState)}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('locale')}>
        <DatePicker
          onOpen={() => setPickerState('UIKitDatePicker--open')}
          onClose={() => setPickerState('UIKitDatePicker--close')}
          showDaysOutsideCurrentMonth
          dayOfWeekFormatter={(day) => day}
          onChange={(e: any) => setValue && setValue(e.$d)}
          value={value ? value : null}
        />
      </LocalizationProvider>
    </div>
  )
}

// export const TestComp = () => {
//   const [test, setTest] = useState<{date?: Date}>({})
//   return <div>
//     <MainDatePicker value={test.date} setValue={saveToArray(setTest, 'dateOfBirth')} />
//     <button onClick={() => console.log(test)}>test</button>
//   </div>
// }
