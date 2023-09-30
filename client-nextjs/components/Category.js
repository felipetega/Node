const Category = () => {
  return (
<div className="flex items-center justify-center mb-8">
  <div className="dropdown dropdown-bottom">
    <label tabIndex={0} className="btn m-1">Categorias</label>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Roupas</a></li>
      <li><a>Calçados</a></li>
    </ul>
  </div>
</div>

  )
}

export default Category