import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
const [aberto, setAberto]  = useState(false);

function mudarMenu(){
  setAberto(!aberto);
}

  return (
    <header className="bg-black px-5 md:px-30 p-5 flex justify-between text-white shadow-md">
      <h1>Checkpoint 4 - Frontend</h1>
      <div className="hidden md:flex gap-5">
        <a href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Produtos</a>
      </div>
      <Menu onClick={( )=> mudarMenu ()} className="flex md:hidden"/>

      <div className={`absolute bg-black flex md:hidden flex-col py-5 w-full top-[63px] left-0 text-center gap-5 shadow-md ${aberto ? "flex" : "hidden"}`}>
        <a href="">Início</a>
        <a href="">Sobre</a>
        <a href="">Produtos</a>
      </div>

    </header>
  );
}
