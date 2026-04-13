import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.set}>
      <div>
        <div className={css.flex}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.flex}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>

      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
