import "../styles/ClientDashBoardStyles.css";
import NavBar from "../Components/NavBar.tsx";

function ClientDashboard() {
  return (
    <>
      <header>
        <div className="navbar-container">
          <NavBar />
        </div>
      </header>
      <main>
        <div className="main-container">
          <h1>Clientes</h1>
          <section className="search-container">
            <input placeholder="buscar cliente"></input>
            <input placeholder="filtros"></input>
          </section>
          <section className="dashboard-container">
            
          </section>
        </div>
      </main>
    </>
  );
}

export default ClientDashboard;
