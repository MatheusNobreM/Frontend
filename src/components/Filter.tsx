import { Search } from "lucide-react";

const Filter = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <p className="font-bold text-xl  text-[#00A2F7]">
        Busque o conteúdo que deseja assistir hoje
      </p>
      <p className="text-xs text-[#00A2F7]">Conteúdo exclusivo todos os dias</p>

      <div className="flex items-center mt-2 gap-2">
        <input
          placeholder="Curso de react"
          type="text"
          className="bg-white border border-[#F2F2F2] rounded-md w-[615px] h-[35px] text-xs px-2"
        ></input>

        <div className="h-[35px] w-[35px] flex justify-center items-center rounded-sm bg-[#E1F4FF] cursor-pointer">
          <Search size={18} className="text-[#00A2F7]" />
        </div>
        <></>
      </div>
    </div>
  );
};

export default Filter;
