import React from 'react';
import './CharacterInfo.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const CharacterInfo = () => {
  return (
    <div className='CharacterInfoBox'> {/* Use the class name directly */}
      <table>
        <thead>
          <tr>
            <th colSpan="4">Character Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level</td>
            <td colSpan="2">
              <input 
                type="number" 
                name="level"
              />
            </td>
            <td colSpan="2">
              PB: <span id="proficiency-bonus">2</span>
            </td>
          </tr>
          <tr>
            <td>Class</td>
            <td colSpan="4">
              <select name="class">
                <option>Cleric</option>
                <option>Fighter</option>
                <option>Rogue</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Subclass</td>
            <td colSpan="4">
              <select name="subclass">
                {/* Add subclass options here */}
              </select>
            </td>
          </tr>
          <tr>
            <td>Race</td>
            <td colSpan="4">
              <select name="race">
                <option>Dwarf</option>
                <option>Elf</option>
                <option>Human</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Subrace</td>
            <td colSpan="4">
              <select name="subrace">
                {/* Add subrace options here */}
              </select>
            </td>
          </tr>
          <tr>
            <td>Background</td>
            <td colSpan="4">
              <select name="background">
                <option value="acolyte">Acolyte</option>
                <option value="charlatan">Charlatan</option>
                <option value="criminal">Criminal</option>
                <option value="entertainer">Entertainer</option>
                <option value="folk-hero">Folk Hero</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharacterInfo;
