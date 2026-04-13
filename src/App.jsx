import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

const starterContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-5", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [concats, setConcats] = useState(() => {
    const saved = localStorage.getItem("concats");
    return saved ? JSON.parse(saved) : starterContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("concats", JSON.stringify(concats));
  }, [concats]);
  const filteredContacts = concats.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const addContact = (name, number) => {
    const newContact = {
      id: `id-${nanoid()}`,
      name,
      number,
    };
    setConcats((prevConcats) => [...prevConcats, newContact]);
  };

  const deleteContact = (id) => {
    setConcats((prevConcats) =>
      prevConcats.filter((contact) => contact.id !== id),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList concats={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
