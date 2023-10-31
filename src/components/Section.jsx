const Section = ({ time, title, type, duration, image, isUnseen, direct }) => {
  return (
    <section>
      <div>{time}</div>
      <img src={image} alt={`image ${title}`} />
      <div>
        <h1>{title}</h1>
        <p>{type}</p>
        <span>{duration} </span>
        <span className="text-red">
          {isUnseen ? "• Inédit" : direct ? "• Direct" : ""}
        </span>
      </div>
    </section>
  );
};

export default Section;
