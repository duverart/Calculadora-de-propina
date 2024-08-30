import { FaCalculator, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
      <h1 className="text-3xl font-bold">Calculadora de Propinas y Consumo</h1>
      
      <div className="flex flex-col items-end justify-end gap-2">
        <a 
          href="https://github.com/duverart" 
          className="flex items-center text-lg font-bold hover:underline hover:text-gray-300 transition duration-300"
        >
          <FaGithub className="mr-2 text-2xl" /> GitHub
        </a>
        
      </div>
    </header>
  );
}

export default Header;
