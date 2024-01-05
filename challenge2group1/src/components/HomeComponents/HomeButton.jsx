export default function HomeButton({ text }) {
  return (
    <button className="flex justify-start bg-lunar text-white py-2 md:py-3 px-10 md:px-14 mt-5 md:mt-10 ml-2 md:ml-0">
       {/* ml-5 mb-5 md:mb-20  */}
      {text}
    </button>
  );
}
