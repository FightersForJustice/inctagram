import React, { useState } from 'react'
import i18next from 'i18next'
import style from './Header.module.css'
import UpArrow from '@/public/img/arrow/up.svg'
import DownArrow from '@/public/img/arrow/down.svg'
import Ru from '@/public/img/flags/ru.svg'
import Gb from '@/public/img/flags/gb.svg'
interface Language {
  code: string
  country_code: string
  name: string
}

const LanguageFlags: React.FC = () => {
  const languages: Language[] = [
    {
      code: 'en',
      country_code: 'Gb',
      name: 'English',
    },
    {
      code: 'ru',
      country_code: 'Ru',
      name: 'Russian',
    },
  ]

  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem('i18next')
    return storedLanguage || languages[0].code
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const selectedLanguageObject = languages.find((language) => language.code === selectedLanguage)

  const changeLanguage = (code: string): void => {
    i18next.changeLanguage(code)
    localStorage.setItem('i18next', code)
    setSelectedLanguage(code)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = (): void => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  return (
    <div className={style.wraper}>
      <button className={style.language} onClick={toggleDropdown}>
        {selectedLanguageObject && (
          <>
            {selectedLanguageObject.country_code === 'Ru' ? <Ru className={style.arrow} /> : <Gb className={style.arrow} />}
            <div className={style.text}> {selectedLanguageObject.name}</div>
            {isDropdownOpen ? (
              <UpArrow alt="Up" className={style.arrowIcon} />
            ) : (
              <DownArrow alt="Down" className={style.arrowIcon} />
            )}
          </>
        )}
      </button>
      {isDropdownOpen && (
        <div className={style.select_container}>
          {languages
            .filter((language) => language.code !== selectedLanguage)
            .map((language) => (
              <div key={language.code}>
                <button className={style.language} onClick={() => changeLanguage(language.code)}>
                  {language.country_code === 'Ru' ? <Ru className={style.flag} /> : <Gb className={style.flag} />}
                  <div className={style.text_select}> {language.name}</div>
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default LanguageFlags
