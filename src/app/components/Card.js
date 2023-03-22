// import Image from "next/image";

const Card = (props) => {
  const { key, title, image, width, height } = props;

  return (
    <div
      key={key}
      className={`relative bg-red-500 inline-block self-center overflow-visible`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: width,
        height: height,
        flexShrink: 0,
      }}
    >
      <div
        className="absolute bottom-0 w-full py-4 text-xl text-center text-white self-end font-poppins font-extralight"
        style={{
          backgroundColor: "rgb(98, 144, 203, 0.8)",
        }}
      >
        <p className="opacity-100">{title}</p>
      </div>
    </div>
  );
};

export default Card;
