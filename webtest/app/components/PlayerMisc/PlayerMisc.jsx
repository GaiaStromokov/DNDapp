import React, { useState } from 'react';
import './PlayerMisc.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const PlayerMisc = () => {
  const [isInspirationSelected, setIsInspirationSelected] = useState(false);

  const toggleInspiration = () => {
    setIsInspirationSelected(!isInspirationSelected);
  };

  return (
    <div className='PlayerMiscBox'>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Passives</th>
            <th colSpan="2">General</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stealth</td>
            <td className='modCell'>1</td>
            <td>AC</td>
            <td className='modCell'>1</td>
          </tr>
          <tr>
            <td>Investigation</td>
            <td className='modCell'>1</td>
            <td>Speed</td>
            <td className='modCell'>1</td>
          </tr>
          <tr>
            <td>Perception</td>
            <td className='modCell'>1</td>
            <td>Inspiration</td>
            <td>
              <button
                className={`inspirationButton ${isInspirationSelected ? 'selected' : 'off'}`}
                onClick={toggleInspiration}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlayerMisc;