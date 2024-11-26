import { Outlet } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";

export function Layout() {
  return (
    <>
      <Cabecalho/>
      <Conteudo>
        <Outlet/>
      </Conteudo>
    </>
  );
}

export default Layout;

