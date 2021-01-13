import React,{useState} from 'react'

const useLocalStorage = (key, initialValue) => {
  console.log(key , initialValue)

  const [storedValue, setStoredValue] = useState(() => {

    if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key))
    }

    localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
  })

  const setValue = value => {
    setStoredValue(value)
    localStorage.setItem(key, value)
  }

  console.log(storedValue, setValue)

  return [storedValue, setValue]

}

export default useLocalStorage