import { Link } from "react-router-dom";
import HomeButton from "../components/HomeComponents/HomeButton";
import HomeCard from "../components/HomeComponents/HomeCard";
import HomeContainer from "../components/HomeComponents/HomeContainer";
import HomeItemContainer from "../components/HomeComponents/HomeItemContainer";
import SliderCards from "../components/SliderCards";
import { fetchPlants, queryClient } from "../data/https";
import { dynamicPageTitle } from "../util/util";

export default function Home() {
  dynamicPageTitle(window.location.pathname);
  return (
    <main>
      <HomeContainer>
        <HomeItemContainer>
          <div className="flex w-full grow  justify-center bg-gelo ">
            <div className="md:mt-40 md:ml-20 w-1/2">
              <div className="inline-flex justify-start align-bottom">
                <img className="ml-1" src="rectangle.svg" alt="a" />
                <p className=" font-pacifico ml-2">love for nature</p>{" "}
              </div>
              <div className="w-full">
                <h1 className="header-style text-left">
                  Discover Your <span className="text-abacate">Green</span> Side
                </h1>
                <p className="p-style">
                  We are your one-stop destination for all things green and
                  growing. Our website offers a wide array of stunning plants,
                  ranging from vibrant flowers to lush indoor foliage, allowing
                  you to create your very own green oasis.{" "}
                </p>
                <Link to="products">
                  <HomeButton text="Shop now" />
                </Link>
              </div>
              <img
                className="grayscale hover:grayscale-0  -ml-[70px] md:mt-12 "
                src="/leftPlant.svg"
                alt=""
              />
            </div>

            <img
              className="grayscale hover:grayscale-0 hidden md:flex -mt-20 overflow-hidden"
              src="/section-1-right-image-plant.svg"
              alt="various plants"
            />
          </div>
        </HomeItemContainer>
      </HomeContainer>

      <HomeContainer>
        <HomeItemContainer>
          <div className=" flex-col mx-5">
            <h2 className="header-style text-center w-[100%] mt-5 md:mt-20 mb-3 ">
              Steps To Take Care Of Your{" "}
              <span className="text-abacate">Plants</span>
            </h2>
            <p className="p-style text-center">
              By following these three steps - proper watering, appropriate
              sunlight, and providing essential nutrients - you'll be well on
              your way to maintaining healthy and thriving plants.
            </p>
          </div>
        </HomeItemContainer>
        <HomeItemContainer>
          <div className="flex flex-col text-center md:flex-row md:m-20 mx-5 mt-10 md:gap-20">
            <HomeCard
              image="/section-2-water-image.svg"
              imageDescription="water-image"
              title="Watering"
              text="water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration."
            />
            <HomeCard
              image="/section-2-sun-image.svg"
              imageDescription="sun-img"
              title="Sunlight"
              text="Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs"
            />
            <HomeCard
              image="/section-2-fertilizing-image.svg"
              imageDescription="Fertilizing"
              title="Nutrients and Fertilizing"
              text="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula."
            />
          </div>
        </HomeItemContainer>
      </HomeContainer>

      <HomeContainer>
        <div className="flex flex-col md:flex-row gap-20 w-fit mx-auto  items-start mb-10 md:mb-40 justify-between">
          {/* <div className="flex flex-col h-[857px] md:flex-row gap-5 md:gap-20 md:w-2/3 items-center"> */}
          <img
            className="w-1/4 hidden md:flex max-w-[440px] al"
            src="section-2-image-1.svg"
            alt=""
          />
          <img
            className="w-1/4 hidden md:flex max-w-[440px] shrink"
            src="section-2-image-2.svg"
            alt=""
          />{" "}
          <div className="md:w-1/2 flex-col max-w-[440px] grow">
            <img
              src="section-2-image-3.svg"
              className=" w-11/12 md:w-full mx-auto mt-10 md:mt-0 mb-5"
              alt=""
            />
            <p className="p-style mx-2 md:mx-0 flex-wrap">
              Our website offers a wide array of stunning plants, ranging from
              vibrant flowers to lush indoor foliage, allowing you to create
              your very own green oasis. In addition to our extensive plant
              selection, we also provide gardening kits and fertilizers to equip
              you with everything you need to nurture your plants and achieve
              gardening success. But we don't stop there! We believe that
              knowledge is the key to a thriving garden, so we offer a wealth of
              information and resources on gardening techniques, plant care
              tips, and landscaping ideas. Whether you're a seasoned gardener or
              just starting your green journey, our goal is to inspire and
              support you every step of the way. Get ready to explore our
              virtual garden and discover the joys of gardening with us!
            </p>
            <Link to="products">
              <HomeButton text="See more photos" />
            </Link>
          </div>
        </div>
      </HomeContainer>
      <div className=" w-screen justify-center bg-gelo  ">
        <HomeContainer>
          <h2 className="header-style text-center pt-10 md:pt-12 mb-3 max-w-[912px] mx-auto md:mb-10">
            This Weeks Most Popular{" "}
            <span className="text-abacate">And Best Selling</span>
          </h2>
          <SliderCards onSale={false} />
        </HomeContainer>

        <HomeContainer>
          <div className="pb-10 ">
            <h2 className="header-style text-center mt-10 mb-3">
              <span className="text-abacate">Plants in </span>Sale
            </h2>
            <SliderCards onSale={true} />
          </div>
        </HomeContainer>
      </div>
    </main>
  );
}

export async function loader() {
  return queryClient.fetchQuery({
    queryKey: ["plants"],
    queryFn: () => fetchPlants(),
  });
}
