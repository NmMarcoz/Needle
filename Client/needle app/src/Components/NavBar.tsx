import "../Components/NavBarStyle.css";

function NavBar() {
  const changeActiveButton = (id: string) => {
    console.log(id);
    const inicio = document.getElementById("inicio");
    const clientes = document.getElementById("clientes");
    const pedidos = document.getElementById("pedidos");

    const perfil = document.getElementById("perfil");

    const activeButton = document.getElementById(id);
    console.log(activeButton?.id);

    const buttons = [inicio, clientes, pedidos, perfil];


    buttons.map((button) => {
      activeButton?.id == button?.id
        ? button?.classList.add("active-text")
        : button?.classList.remove("active-text");
    });
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-text">
            <div id="inicio">
              <a onClick={() => changeActiveButton("inicio")}>Inicio</a>
            </div>
            <div id="clientes">
              <a onClick={() => changeActiveButton("clientes")}>Clientes</a>
            </div>
            <div id="pedidos">
              <a onClick={() => changeActiveButton("pedidos")}>Pedidos</a>
            </div>
            <div id="perfil">
              <a onClick={() => changeActiveButton("perfil")}>Perfil</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
