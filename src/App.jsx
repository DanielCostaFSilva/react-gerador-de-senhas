import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generatePassword() {
    const newPassword = Math.random().toString(36).slice(-10);
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClioboard(){
    navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de Senha</h1>
      <button onClick={generatePassword}>Gerar!</button>
      <button onClick={copyToClioboard}>{copyText}</button>
      <div>{password}</div>
    </div>

  )
}

export default App
