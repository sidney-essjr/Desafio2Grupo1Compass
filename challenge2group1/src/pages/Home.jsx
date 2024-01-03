import { useLoaderData } from "react-router-dom";
import HomeButton from "../components/HomeComponents/HomeButton";
import HomeCard from "../components/HomeComponents/HomeCard";
import HomeContainer from "../components/HomeComponents/HomeContainer";
import HomeItemContainer from "../components/HomeComponents/HomeItemContainer";
import SliderCards from "../components/SliderCards";

export default function Home() {
  const plants = useLoaderData();

  return (
    <main>
      <HomeContainer>
        <HomeItemContainer>
          <div className="flex w-screen justify-center pl-20 pt-20  bg-gelo">
            <div className="w-1/2 shrink ml-20">
              <div className="inline-flex justify-start align-bottom">
                <hr
                  className="text-errorred"
                  height="3px"
                  width="32px"
                  aling="left"
                />{" "}
                <p className=" font-pacifico ml-2">love for nature</p>{" "}
              </div>
              <div className="w-full">
                <h1 className="headerstyle">
                  Discover Your <span className="text-abacate">Green</span> Side
                </h1>
                <p className="pstyle">
                  We are your one-stop destination for all things green and
                  growing. Our website offers a wide array of stunning plants,
                  ranging from vibrant flowers to lush indoor foliage, allowing
                  you to create your very own green oasis.{" "}
                </p>
                <HomeButton text="Shop now" />
              </div>
              <img
                className="grayscale  -mt-44 -ml-20 -mb-48 overflow-hidden"
                src="/section-1-left-image-plant.svg"
                alt=""
              />
            </div>

            <img
              className="grayscale -mt-24 shrink h-full overflow-hidden"
              src="/section-1-right-image-plant.svg"
              alt=""
            />
          </div>
        </HomeItemContainer>
      </HomeContainer>

      <HomeContainer>
        <HomeItemContainer className="w-[400px]">
          <div className="w-[998px] flex-col mx-auto">
            <h2 className="headerstyle text-center mt-20 mb-3">
              Steps To Take Care Of Your{" "}
              <span className="text-abacate">Plants</span>
            </h2>
            <p className="pstyle">
              By following these three steps - proper watering, appropriate
              sunlight, and providing essential nutrients - you'll be well on
              your way to maintaining healthy and thriving plants.
            </p>
          </div>
        </HomeItemContainer>
        <HomeItemContainer>
          <div className="flex m-20 gap-20">
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
        <div className="flex gap-20 ml-20 ">
          <div className="flex gap-20 w-2/3">
            <img
              className="w-1/2"
              src="../../public/section-2-image-1.svg"
              alt=""
            />
            <img
              className="w-1/2"
              src="../../public/section-2-image-2.svg"
              alt=""
            />{" "}
          </div>
          <div className="w-1/3 flex-col mx-20">
            <HomeItemContainer>
              <img
                src="../../public/section-2-image-3.svg"
                className="w-full"
                alt=""
              />
              <p className="pstyle flex-wrap">
                Our website offers a wide array of stunning plants, ranging from
                vibrant flowers to lush indoor foliage, allowing you to create
                your very own green oasis. In addition to our extensive plant
                selection, we also provide gardening kits and fertilizers to
                equip you with everything you need to nurture your plants and
                achieve gardening success. But we don't stop there! We believe
                that knowledge is the key to a thriving garden, so we offer a
                wealth of information and resources on gardening techniques,
                plant care tips, and landscaping ideas. Whether you're a
                seasoned gardener or just starting your green journey, our goal
                is to inspire and support you every step of the way. Get ready
                to explore our virtual garden and discover the joys of gardening
                with us!
              </p>
              <HomeButton text="See more photos" />
            </HomeItemContainer>
          </div>
        </div>
      </HomeContainer>
      <div className=" w-screen justify-center pl-20 pt-20  bg-gelo">
        <HomeContainer>
          <h2 className="headerstyle text-center mt-20 mb-3">
            This Weeks Most Popular{" "}
            <span className="text-abacate">And Best Selling</span>
          </h2>
          <SliderCards onSale={false} plants={plants} />
        </HomeContainer>

        <HomeContainer>
          <h2 className="headerstyle text-center mt-20 mb-3">
            <span className="text-abacate">Plants in </span>Sale
          </h2>
          <SliderCards onSale={true} plants={plants} />
        </HomeContainer>
      </div>
    </main>
  );
}

export function loader() {
  return fetch("http://localhost:3000/plants");
}
