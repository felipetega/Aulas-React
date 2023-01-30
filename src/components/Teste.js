function Teste({nome,idade,foto}){
  return(
    <p>

      <div>Meu nome é {nome}</div>
      <div>Minha idade é {idade}</div>
      <img src={foto} alt={nome} height="150px" />

    </p>
  )
}

export default Teste