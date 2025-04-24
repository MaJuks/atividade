import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Requests } from "../components/Requests";

export function Tailwind(){
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const handleSubmit = () => {
    setSubmittedUsername(username);
  }
    const navigate = useNavigate();
    const goToMain = () => {
      navigate('/');
    };

    return(
        <>
        <div className="bg-[#ffeaf4] flex items-center justify-center p-10 rounded-[24px] font-[Comic_Sans_MS] flex-col">
            <div className="bg-[#fff0f7] p-10 rounded-[24px] shadow-[0px_10px_20px_rgba(255,182,193,0.4)] text-center">
                <h1 className="text-[#d06fa8] mb-5 text-2xl">Procure uma conta no github!</h1>
                <input
                className="px-[15px] py-[10px] border-2 border-[#f7c6d9] rounded-[12px] outline-none text-base mb-2 w-4/5 bg-white text-[#d06fa8]" type="text"placeholder="Digite o nome de usuário..."  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <button className="mt-2 px-5 py-2.5 bg-[#f9a8c4] border-none rounded-[12px] text-white text-base font-bold cursor-pointer transition-all duration-300 hover:bg-[#f77da4] "  onClick={handleSubmit}>
                Enviar
                </button >
            </div>
            <br />
        </div>
        {submittedUsername && <Requests username={submittedUsername} />}
        
        <br />
        <button onClick={goToMain} className="mt-2 px-5 py-2.5 bg-[#f9a8c4] border-none rounded-[12px] text-white text-base font-bold cursor-pointer transition-all duration-300 hover:bg-[#f77da4]">Voltar</button>
        </>
    
    )
}