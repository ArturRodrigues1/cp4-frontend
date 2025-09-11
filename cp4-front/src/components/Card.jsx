export default function Card() {
  return (
    <div className="flex flex-col text-center p-5 shadow-xl rounded-xl gap-5 bg-gray-300">
      <img src="/imgs/download.jpg" alt="" />
      <h1 className="font-bold">Tênis branco</h1>
      <button className="bg-gray-500 text-white p-2 rounded-xl shadow-md cursor-pointer">
        Adicionar ao carrinho
      </button>
    </div>
  );
}
