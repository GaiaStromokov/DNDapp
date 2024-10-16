import React from 'react';
import './SavingThrows.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const SavingThrows = () => {
  return (
    <div className='SavingThrowsBox'>
      <table>
        <thead>
          <tr>
            <th colSpan="6">Saving Throws</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STR</td>
            <td className='modCell'>1</td>
            <td>INT</td>
            <td className='modCell'>1</td>
          </tr>
          <tr>
            <td>DEX</td>
            <td className='modCell'>1</td>
            <td>WIS</td>
            <td className='modCell'>1</td>
          </tr>
          <tr>
            <td>CON</td>
            <td className='modCell'>1</td>
            <td>CHA</td>
            <td className='modCell'>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SavingThrows;
