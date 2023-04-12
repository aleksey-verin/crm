import React, { useEffect, useRef, useState } from 'react';
import ImgClose from '../images/ImgClose';
import ImgSearch from '../images/ImgSearch';

const defaultValue = '';

const Search = ({ type = '', text = '' }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    setValue(defaultValue);
  };

  const clearInput = () => {
    setValue(defaultValue);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const hideForm = (e: any) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (value) return;
    document.addEventListener('mousedown', hideForm);
    return () => {
      document.removeEventListener('mousedown', hideForm);
    };
  }, [formRef, value]);

  return (
    <div className="search-block">
      {open ? (
        <form ref={formRef} onSubmit={handleForm} className={`search-open ${type}`}>
          <div className="search-open__pic">
            <ImgSearch />
          </div>
          <input
            ref={inputRef}
            onChange={handleInputValue}
            value={value}
            type="tel"
            placeholder="Найти.."
          />
          {value ? (
            <div className="search-open__close" onClick={clearInput}>
              <ImgClose />
            </div>
          ) : null}
        </form>
      ) : (
        <div className={`search-hide ${type}`}>
          <div className="search-hide__pic" onClick={handleOpen}>
            <ImgSearch />
          </div>
          {text ? (
            <div className="search-hide__text" onClick={handleOpen}>
              {text}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Search;