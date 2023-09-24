import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './DatePicker.scss'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import { useTranslation } from 'react-i18next'
import { Dispatch, useEffect, useState } from 'react'
import classNames from 'classnames'
import { DateValidationError } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import style from './DatePicker.module.scss'

type DatePickerTypes = {
  value?: string
  setValue?: Dispatch<React.SetStateAction<any>>
  setError?: Dispatch<React.SetStateAction<boolean>>
  disabled?: boolean
  id?: string
  disableFuture?: boolean
  label?: string
}

export const saveToArray = (setValue: Dispatch<React.SetStateAction<any>>, name = 'date') => {
  return (value: string) => {
    setValue((prevData: any) => ({
      ...prevData,
      [name]: value,
    }))
  }
}

export const MainDatePicker = (props: DatePickerTypes) => {
  const { value, disabled, id, disableFuture, label } = props
  let { setValue } = props
  const { t } = useTranslation()
  const [date, setDate] = useState(null)
  const [pickerState, setPickerState] = useState('UIKitDatePicker--close')
  const [error, setError] = useState<DateValidationError>()
  useEffect(() => {
    if (!setValue) return
    setValue = setDate
  }, [])

  useEffect(() => {
    if (!props.setError) return
    props.setError(!!error)
  }, [error])

  return (
    <>
      {label && (
        <label htmlFor={id} className={classNames(style.label, { [style.labelDisabled]: disabled })}>
          {label}
        </label>
      )}
      <div className={classNames('UIKitDatePicker', pickerState)}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('locale')}>
          <DatePicker
            disabled={disabled}
            onOpen={() => setPickerState('UIKitDatePicker--open')}
            onClose={() => setPickerState('UIKitDatePicker--close')}
            showDaysOutsideCurrentMonth
            dayOfWeekFormatter={(day) => day}
            onChange={(e: any) => {
              setValue && setValue(e.$d)
            }}
            orientation="portrait"
            disableFuture={disableFuture}
            value={value ? dayjs(value) : null}
            onError={(newError) => setError(newError)}
            slotProps={{
              textField: {
                id: id ? id : '',
                helperText: error && 'Error!',
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  )
}
