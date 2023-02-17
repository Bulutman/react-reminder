import lessonStyle from "./lesson.module.css";

const LessonCard = ({ image, age, name }) => {
  return (
    <div className={lessonStyle["container"]}>
      <div className={lessonStyle["card-container"]}>
        <img className={lessonStyle["images"]} src={image} alt="" />
        <p className={lessonStyle["title"]}> Lesson Name: {name}</p>
        <p className={lessonStyle["title"]}>Lesson Hour: {age}</p>
      </div>
    </div>
  );
};

export default LessonCard;
