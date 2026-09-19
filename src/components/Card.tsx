type CardProps = {
  title: string;
  img: string;
};

const Card = ({ title, img }: CardProps) => {
  return (
    <div className="border w-full p-4 rounded-md border-[#00A2F7] flex flex-col">
      <div className="flex flex-1 justify-center items-center">
        <img src={img} className="w-32 mx-auto"></img>
      </div>
      <p className="text-[#00A2F7] font-bold text-sm mt-2">{title}</p>
      <p className="text-[#00A2F7] text-sm mt-1">9h</p>
      <button className="bg-[#00A2F7] text-white w-full text-sm py-1 rounded-sm cursor-pointer mt-1">
        Inscreva-se
      </button>
    </div>
  );
};

export default Card;
