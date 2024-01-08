import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generatePassword() {
    const newPassword = Math.random().toString(36).slice(-passwordSize);
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClioboard() {
    navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de Senha</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev)=> setPasswordSize(ev.target.value) }
        />
      </div>
      <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToClioboard}>{copyText}</button>
      <div>Sua senha segura: {password}</div>
    </div>

  )
}

export default App
