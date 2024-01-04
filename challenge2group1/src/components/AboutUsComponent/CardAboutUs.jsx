export default function CardAboutUs({dev}){
  return (
    <section className="w-[40rem] h-[38rem] lg-[35rem] sm:h-[30rem] flex flex-col items-center bg-lunar rounded-2xl m-5 font-raleway shadow-strongShadow" key={dev.id} >
      <img className="w-44 h-48 rounded-borderFull mt-10 shadow-strongShadow" src={`src/${dev.imgUrl}`} alt=" " />
      <div className="m-6 text-white h-28 bg-w">
        <p className="mt-2">{dev.name}, {dev.idade}, {dev.cidade}</p>
        <p>{dev.aboutMe}</p>
      </div>
        <a 
          target="_blank" 
          href={dev.social}
          className="text-white font-bold w-44 h-12 sm:mt-0 mt-28 rounded bg-abacate flex
          justify-center items-center self-start ml-6  hover:ml-9 duration-500 shadow-strongShadow"
        >Contact</a>
    </section>
  )
}

// {dev.social} -> adicionar no backend = check
// adicionar botão = check
// cor de fundo branco gelo -> bg-gelo = check
// separar em dois cards por "linha" = check