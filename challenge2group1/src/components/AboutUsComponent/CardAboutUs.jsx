export default function CardAboutUs({dev}){
  return (
    <section className="w-[40rem] h-[35rem] sm:h-[30rem] flex flex-col items-center bg-lunar rounded-2xl m-5 font-raleway" key={dev.id} >
      <img className="w-44 h-48 rounded-borderFull mt-10" src={`src/${dev.imgUrl}`} alt=" " />
      <div className="m-6 text-white h-28 bg-w">
        <p className="mt-2">{dev.name}, {dev.idade}, {dev.cidade}</p>
        <p>{dev.aboutMe}</p>
      </div>
        <a 
          target="_blank" 
          href="http://www.google.com"
          className="text-white font-bold w-44 h-12 rounded bg-abacate flex
          justify-center items-center self-start ml-6 mb-10 hover:ml-9 duration-500"
        >Contact</a>
    </section>
  )
}

// {dev.social} -> adicionar no backend 
// adicionar botão = check
// cor de fundo branco gelo -> bg-gelo = check
// separar em dois cards por "linha" = check