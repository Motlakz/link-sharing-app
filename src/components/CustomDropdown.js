import React, { useEffect, useRef, useState } from 'react';

const CustomDropdown = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    { value: 'person', label: 'Recommended', icon: 'bi bi-asterisk' },
    { value: 'book', label: 'Popular', icon: 'bi bi-emoji-laughing' },
  ];

  const handleOptionClick = (e) => {
    if (!e.target.classList.contains('selected')) {
      const customOptions = selectRef.current.querySelectorAll('.custom-option');

      customOptions.forEach(otherOption => otherOption.classList.remove('selected'));
      e.target.classList.add('selected');

      const iconHTML = e.target.querySelector('.icon').innerHTML;
      const contentHTML = (
        <span>
          <span className="icon">{iconHTML}</span> {e.target.textContent}
        </span>
      );

      const selectTrigger = selectRef.current.querySelector('.select__trigger');
      selectTrigger.innerHTML = contentHTML;

      const appendedIcon = selectTrigger.querySelector('.icon');
      const appendedText = selectTrigger.querySelector('span:not(.icon)');

      if (appendedIcon && appendedText) {
        appendedIcon.style.cssText = 'color: red; font-size: 20px; text-shadow: 1px 1px 1px maroon;';
        appendedText.style.cssText = 'font-weight: bold; color: blueviolet; font-size: 20px; text-shadow: 1px 1px 1px purple;';
      }
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!selectRef.current.contains(e.target)) {
        setSelectOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="inputs flex gap-4">
      <div className="select-wrapper first" data-select="select" ref={selectRef}>
        <div className={`select${selectOpen ? ' open' : ''}`} onClick={() => setSelectOpen(!selectOpen)}>
          <div className="select__trigger">
            <span>Most Recent</span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            {options.map((option, index) => (
              <span key={index} className="custom-option" data-value={option.value} onClick={handleOptionClick}>
                <span className="icon"><i className={option.icon}></i></span> {option.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
