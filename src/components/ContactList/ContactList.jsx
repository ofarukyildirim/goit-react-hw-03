import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ concats, onDelete }) => {
  return (
    <ul className={css.set}>
      {concats.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
