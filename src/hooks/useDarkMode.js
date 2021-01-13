import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
  const [storedValue , setStoredValue] = useLocalStorage('darkMode')
  const bodyEl = document.querySelector('body')

  useEffect(() => {
    storedValue ? bodyEl.classList.add('dark-mode') : bodyEl.classList.remove('dark-mode')
  },[storedValue])

  return [storedValue, setStoredValue]

}

export default useDarkMode