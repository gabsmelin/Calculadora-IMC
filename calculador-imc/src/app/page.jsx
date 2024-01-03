export default function Home() {
  return (
    <div>
      <div className="formulario">
        <form action="">
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="Nome" placeholder="João"/>
          </div>

          <div>
            <label htmlFor="peso">Peso:</label>
            <input type="text" id="peso" name="Peso" placeholder="68.5"/>
          </div>

          <div>
            <label htmlFor="altura">Altura:</label>
            <input type="text" id="altura" name="Altura"/>
          </div>
        </form>
      </div>
      <div className="resposta">
        <p></p>
      </div>
    </div>
  )
}
