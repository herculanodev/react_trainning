import { NavLink } from "react-router-dom";

export function Menu() {
  const opcoes = [
    { rota: "/home", texto: "Home" },
    { rota: "/perfil/1", texto: "Perfil" },
    { rota: "/", texto: "Sair" },
  ];

  return (
    <nav>
      <ul>
        {opcoes.map((opcao) => (
          <li key={opcao.rota}>
            <NavLink
              to={opcao.rota}
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-label={`Navegar para ${opcao.texto}`}
            >
              {opcao.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
