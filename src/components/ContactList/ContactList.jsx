import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactBook } from 'components/ContactList/ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactBook>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteContact}
        />
      ))}
    </ContactBook>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
