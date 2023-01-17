import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';
import mockNotes from '../mockData';
import NoteItem from '../components/NoteItem';

const Notes = () => {
  return (
    <section>
      {/* Header */}
      <header className='notes__header'>
        <h2>Notes</h2>
        <input type='text' placeholder='Find notes...' autoFocus />
        <button className='btn'>
          <FiSearch />
        </button>
      </header>
      {/* Notes  */}
      <div className='notes__container'>
        {mockNotes.map((note) => (
          <NoteItem key={note.id} />
        ))}
      </div>
      {/* Add Note button */}
      <Link className='btn add__btn'>
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
