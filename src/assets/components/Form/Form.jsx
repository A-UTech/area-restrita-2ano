import './form.css'

const Form = () => {
  return (
    <form>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
        <p>Esqueceu sua senha? Redefinir</p>
    </form>
  )
}

export default Form