import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [no, setNo] = useState(false)
  const [character, setCharater] = useState(false)
  const [pass, setPass] = useState("")

  const passwordRef=useRef(null);
  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])


  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (no) str += "0123456789"
    if (character) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~"

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length)
      password += str.charAt(char)
    }

    setPass(password)
  }, [Length, no, character])

  useEffect(() => {
    passwordGenerator()
  }, [Length, no, character, passwordGenerator])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-white mb-6">
          Password Generator
        </h1>

        <div className="flex rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={pass}
            readOnly
            ref={passwordRef}
            className="w-full px-3 py-2 bg-white text-gray-800 outline-none"
          />
          <button className="bg-orange-600 text-white px-4 hover:bg-orange-700 cursor-pointer"
            onClick={copyPassword}>
            Copy
            
          </button>
        </div>

        <div className="space-y-4 text-sm text-white">
          <div className="flex items-center justify-between">
            <label>Length: {Length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={Length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-1/2 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-x-4">
            <label className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={no}
                onChange={() => setNo(prev => !prev)}
              />
              Number
            </label>

            <label className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={character}
                onChange={() => setCharater(prev => !prev)}
              />
              Special
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
