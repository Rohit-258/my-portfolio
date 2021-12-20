import "./About.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/X7pNJ9C/clg.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <h4 className="a-desc">
          I am a hardworking and ambitious individual with a great passion for
          the technology . I am currently in my 3rd year of studying Computer
          Science And Engineering at{" "}
          <strong>NATIONAL INSTITUTE OF TECHNOLOGY ,Durgapur</strong>. I have
          excellent communication skills, enabling me to effectively communicate
          with a wide range of people. I am seeing a part-time position in the
          industry in which I can put into practice my knowledge and experience,
          ultimately benefiting the operations of the organisation that I work
          for.
        </h4>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
