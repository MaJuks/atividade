import { useNavigate } from "react-router-dom";


export function Main(){
  const navigate = useNavigate(); // Usando hook para navegar
  const goToStyled = () => {
      navigate('/styled'); // Navega para a página Main
    };
  const goToTailwind = () => {
      navigate('/tailwind'); // Navega para a página Main
    };
    return(
        <div className="bg-[#ffeaf4] flex items-center justify-center p-10 rounded-[24px] font-[Comic_Sans_MS] flex-col " >
          <div className="bg-[#fff0f7] p-10 rounded-[24px] shadow-[0px_10px_20px_rgba(255,182,193,0.4)] text-center m-10">
            <h1 className="text-[#d06fa8] mb-5 text-2xl">Tela com styled component</h1>
            <button className="mt-2 px-5 py-2.5 bg-[#f9a8c4] border-none rounded-[12px] text-white text-base font-bold cursor-pointer transition-all duration-300 hover:bg-[#f77da4]" onClick={goToStyled}>Acessar</button>
          </div>

          <div className="bg-[#fff0f7] p-10 rounded-[24px] shadow-[0px_10px_20px_rgba(255,182,193,0.4)] text-center m-10">
            <h1 className="text-[#d06fa8] mb-5 text-2xl">Tela com tailwind</h1>
            <button className="mt-2 px-5 py-2.5 bg-[#f9a8c4] border-none rounded-[12px] text-white text-base font-bold cursor-pointer transition-all duration-300 hover:bg-[#f77da4]" onClick={goToTailwind}>Acessar</button>
          </div>
        </div>
    )
}