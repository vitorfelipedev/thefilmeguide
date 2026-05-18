import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';
import Search from '../assets/search.svg?react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${search}`);
  }

  function handleChange({ target }) {
    setSearch(target.value);
  }
  return (
    <header className={`${styles.header} container`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo do site The Movie Guide." />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieTvSearch"
          id="movieTvSearch"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" aria-label="Search">
          <Search />
        </button>
      </form>
    </header>
  );
};

export default Header;
