import React, { useState } from 'react';
import './BackPack.css'; // Ensure this is the correct path for your CSS
import '../standard.css'; // Import global CSS if needed

const BackPack = () => {
  const [activeTab, setActiveTab] = useState('Inventory');
  const [coinPurse, setCoinPurse] = useState({
    copper: '',
    silver: '',
    electrum: '',
    gold: '',
    platinum: '',
  });
  const [inventoryText, setInventoryText] = useState('');
  const [spellSlots, setSpellSlots] = useState({
    level1: 0,
    level2: 0,
    level3: 0,
    level4: 0,
    level5: 0,
    level6: 0,
    level7: 0,
    level8: 0,
    level9: 0,
  });
  const [spellDetails, setSpellDetails] = useState({
    attackBonus: '',
    saveDC: '',
  });

  // Initialize spell names array
  const [spellNames, setSpellNames] = useState({
    cantrips: ['', '', '', '', ''], // 5 cantrips
    level1: ['', '', '', '', '', ''], // 6 level 1 spells
    level2: ['', '', '', '', '', ''], // 6 level 2 spells
    level3: ['', '', '', '', '', ''], // 6 level 3 spells
    level4: ['', '', '', '', ''], // 5 level 4 spells
    level5: ['', '', '', '', ''], // 5 level 5 spells
    level6: ['', '', '', '', ''], // 5 level 6 spells
    level7: ['', '', '', ''], // 4 level 7 spells
    level8: ['', '', ''], // 3 level 8 spells
    level9: ['', '', ''], // 3 level 9 spells
  });

  const handleTabChange = (tab) => setActiveTab(tab);
  const handleCoinPurseChange = (e) => {
    const { name, value } = e.target;
    setCoinPurse((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleInventoryTextChange = (e) => setInventoryText(e.target.value);
  const incrementSpellSlot = (level) => {
    setSpellSlots((prevState) => ({ ...prevState, [level]: prevState[level] + 1 }));
  };

  const handleSpellNameChange = (level, index, value) => {
    setSpellNames((prevState) => {
      const newLevelSpells = [...prevState[level]];
      newLevelSpells[index] = value; // Update the specific spell name
      return { ...prevState, [level]: newLevelSpells };
    });
  };

  const handleSpellDetailsChange = (e) => {
    const { name, value } = e.target;
    setSpellDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="BackPackBox">
      <div className="header">
        <button onClick={() => handleTabChange('Inventory')}>Inventory</button>
        <button onClick={() => handleTabChange('Spell Book')}>Spell Book</button>
        <button onClick={() => handleTabChange('Admin')}>Admin</button>
      </div>
      <div className="content">
        {activeTab === 'Inventory' && (
          <div>
            <table className="coin-purse-table">
              <tbody>
                <tr>
                  {['copper', 'silver', 'electrum', 'gold', 'platinum'].map((coin) => (
                    <td key={coin}>
                      <label>{coin.charAt(0).toUpperCase() + coin.slice(1)}:</label>
                      <input
                        type="number"
                        name={coin}
                        value={coinPurse[coin]}
                        onChange={handleCoinPurseChange}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <textarea
              className="inventory-textarea"
              value={inventoryText}
              onChange={handleInventoryTextChange}
              placeholder="Enter your inventory items here..."
            />
          </div>
        )}
        {activeTab === 'Spell Book' && (
          <div className="spell-content">
            <div className="spell-left">
              <table className="spell-slots-table">
                <tbody>
                  {Object.keys(spellSlots).map((level) => (
                    <tr key={level}>
                      <td>{level.replace('level', 'Lvl ')}</td>
                      <td className='lvlnum'>{spellSlots[level]}</td>
                      <td>
                        <button onClick={() => incrementSpellSlot(level)} className="increment-button">+</button>
                      </td>
                    </tr>
                  ))}
                  <tr className="spell-atk-row">
                    <td>Spell ATK</td>
                    <td colSpan="2">
                      <input
                        type="number"
                        name="attackBonus"
                        value={spellDetails.attackBonus}
                        onChange={handleSpellDetailsChange}
                        className="spell-input"
                      />
                    </td>
                  </tr>
                  <tr className="spell-save-row">
                    <td>Spell Save</td>
                    <td colSpan="2">
                      <input
                        type="number"
                        name="saveDC"
                        value={spellDetails.saveDC}
                        onChange={handleSpellDetailsChange}
                        className="spell-input"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="spell-right">
              <table className="spell-list-table">
                <tbody>
                  {Object.keys(spellNames).map((level) => (
                    <React.Fragment key={level}>
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center' }}>
                          <h4>{level.charAt(0).toUpperCase() + level.slice(1).replace(/\d+/, ' $&')}</h4>
                        </td>
                      </tr>
                      {spellNames[level].map((spell, index) => (
                        <tr key={`${level}-${index}`}>
                          <td colSpan="4">
                            <input
                              type="text"
                              value={spell}
                              onChange={(e) => handleSpellNameChange(level, index, e.target.value)}
                              placeholder={`Spell ${index + 1}`}
                              style={{ width: '100%' }}
                            />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'Admin' && <p>This is Admin content.</p>}
      </div>
    </div>
  );
};

export default BackPack;