import React, { useState, useEffect, useRef } from 'react';
import './Proficiencies.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const Proficiencies = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProficiencies, setSelectedProficiencies] = useState({
    Weapons: [],
    Armor: [],
    Tools: [],
    Languages: []
  });
  const [currentCategory, setCurrentCategory] = useState('');
  const popupRef = useRef(null);

  const handleButtonClick = (category) => {
    setCurrentCategory(category);
    setShowPopup(prevState => !prevState);
  };

  const handleSelection = (category, proficiency) => {
    setSelectedProficiencies(prevState => ({
      ...prevState,
      [category]: prevState[category].includes(proficiency)
        ? prevState[category].filter(item => item !== proficiency)
        : [...prevState[category], proficiency]
    }));
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const proficiencyOptions = {
    Weapons: ['Martial', 'Simple'],
    Armor: ['Light', 'Medium', 'Heavy'],
    Tools: ['Smith’s tools', 'Brewer’s supplies', 'Mason’s tools', 'Thieves’ tools', 'Herbalism kit', 'Navigator’s tools', 'Poisoner’s kit'],
    Languages: ['Common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc', 'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon']
  };

  return (
    <div className='ProficienciesBox'>
      <table>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '80%' }} />
        </colgroup>
        <thead>
          <tr>
            <th colSpan="2">Proficiencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="bfw" onClick={() => handleButtonClick('Weapons')}>Weapons</button></td>
            <td className="scrollable-cell">{selectedProficiencies.Weapons.join(', ')}</td>
          </tr>
          <tr>
            <td><button className="bfw" onClick={() => handleButtonClick('Armor')}>Armor</button></td>
            <td className="scrollable-cell">{selectedProficiencies.Armor.join(', ')}</td>
          </tr>
          <tr>
            <td><button className="bfw" onClick={() => handleButtonClick('Tools')}>Tools</button></td>
            <td className="scrollable-cell">{selectedProficiencies.Tools.join(', ')}</td>
          </tr>
          <tr>
            <td><button className="bfw" onClick={() => handleButtonClick('Languages')}>Languages</button></td>
            <td className="scrollable-cell">{selectedProficiencies.Languages.join(', ')}</td>
          </tr>
        </tbody>
      </table>

      {showPopup && (
        <div className="popup" ref={popupRef}>
          {proficiencyOptions[currentCategory].map(option => (
            <button
              key={option}
              className={`bfw ${selectedProficiencies[currentCategory].includes(option) ? 'selected' : ''}`}
              onClick={() => handleSelection(currentCategory, option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Proficiencies;