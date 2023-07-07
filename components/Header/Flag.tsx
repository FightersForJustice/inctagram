import React, { useState } from 'react'
import i18next from 'i18next'

interface Language {
  code: string
  country_code: string
  name: string
}

const LanguageFlags: React.FC = () => {
  const languages: Language[] = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
    },
    {
      code: 'ru',
      country_code: 'ru',
      name: 'Russian',
    },
  ]

  const [selectedLanguage, setSelectedLanguage] = useState<string>(languages[0].code)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

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
    <div style={{ position: 'relative' }}>
      <button onClick={toggleDropdown}>{languages.find((language) => language.code === selectedLanguage)?.name}</button>
      {isDropdownOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0 }}>
          {languages.map((language) => (
            <div key={language.code}>
              <button onClick={() => changeLanguage(language.code)}>{language.name}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageFlags
