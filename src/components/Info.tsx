const Info = () => {
  return (
    <div className="mt-2 flex w-full justify-between ">
      <div className="flex flex-col gap-2">
        <p className="text-[#00A2F7] font-bold">Pratique com projetos reais</p>
        <p className="text-[#00A2F7] w-[700px] text-sm">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <button className="text-white bg-[#00A2F7] w-[150px] h-8 rounded-md cursor-pointer">
          Ver biblioteca
        </button>
      </div>
      <div className="flex flex-col bg-white rounded-md">
        <p className="text-[#00A2F7] font-bold">Curso rápido</p>
        <p className="text-[#00A2F7]">Cursos práticos de curta duração</p>
        <button className="text-[#00A2F7] border border-[#42B3F4] w-[150px] h-8 rounded-md cursor-pointer">
          Assistir
        </button>
      </div>
    </div>
  );
};

export default Info;
