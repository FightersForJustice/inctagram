import React from 'react'
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

  const changeLanguage = (code: string): void => {
    i18next.changeLanguage(code)
    localStorage.setItem('i18next', code)
    console.log('Value of "i18next" in localStorage:', localStorage.getItem('i18next'))
  }

  return (
    <div>
      {languages.map((language) => (
        <button key={language.code} onClick={() => changeLanguage(language.code)}>
          {language.name}
        </button>
      ))}
    </div>
  )
}

export default LanguageFlags
