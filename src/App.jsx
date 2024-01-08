import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [password, setPassword] = useState("")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  const [copyText, setCopyText] = useState("Copiar")

  const passwordSize = showInput ? customSize : 8

  function generatePassword() {
    const newPassword = Math.random().toString(36).slice(-passwordSize);
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="customSize">Tamanho: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      )}
      <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>Sua senha segura: {password}</div>
    </div>
  )
}

export default App