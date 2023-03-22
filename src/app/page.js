"use client";
import Card from "./components/Card";
import ImageSlider1 from "./components/ImageSlider1";

export default function Home() {
  const modifiedSports = [
    {
      key: 1,
      title: "Biking",
      image:
        "https://images.wallpaperscraft.com/image/single/bike_cyclist_spray_194016_1600x900.jpg",
      width: 284,
      height: 284,
    },
    {
      key: 2,
      title: "Hiking & Trekking",
      image:
        "https://www.muchbetteradventures.com/magazine/content/images/2019/11/22103350/iStock-1064061082.jpg",
      width: 284,
      height: 284,
    },
    {
      key: 3,
      title: "Surfing",
      image:
        "https://img.redbull.com/images/c_crop,x_1204,y_0,h_1999,w_1200/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2015/03/25/1331713225971_13/bringing-out-the-a-game",
      width: 284,
      height: 400,
    },
    {
      key: 4,
      title: "Polar Expeditions",
      image:
        "https://www.thermarest.com/blog/wp-content/uploads/2018/08/LDNP17-02953.jpg",
      width: 284,
      height: 284,
    },
    {
      key: 5,
      title: "Tennis",
      image:
        "https://www2.pictures.zimbio.com/gi/2017+Australian+Open+Day+3+9MZoVaJiU0Nx.jpg",
      width: 284,
      height: 284,
    },
    {
      key: 6,
      title: "Skiing",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_518,q_80,w_640,x_1922,y_699/v1/clients/saltlake/SkiShootout08_GrantGunderson_G_19527_24b3240f-10ed-4292-a5d0-bc8263f5e6dd.jpg",
      width: 350,
      height: 284,
    },
    {
      key: 7,
      title: "Sky Diving",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/211201173613-restricted-uspa-national-championships-speed-skydivers-file.jpg?q=h_1333,w_2000,x_0,y_0",
      width: 284,
      height: 600,
    },
  ];

  return (
    <div className="justify-center h-screen whitespace-nowrap flex">
      <div className="w-2/3 flex items-center justify-center">
        <ImageSlider1
          slides={modifiedSports}
          title={"Image Slider demo to Industri Kreatif Bali"}
        >
          {modifiedSports.map((sport) => {
            return (
              <Card
                key={sport.key}
                title={sport.title}
                image={sport.image}
                width={sport.width}
                height={sport.height}
              />
            );
          })}
        </ImageSlider1>
      </div>
    </div>
  );
}
