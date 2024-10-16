import React from 'react';
import './Weapons.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const Weapons = () => {
  return (
    <div className='WeaponsBox'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ATK</th>
            <th>DMG</th>
            <th>Type</th>
            <th>Prop</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" placeholder="Name" /></td>
            <td>+1</td>
            <td>2d8+1</td>
            <td>S</td>
            <td>Finesse</td>
            <td>M</td>
          </tr>
          <tr>
            <td><input type="text" placeholder="Name" /></td>
            <td>+1</td>
            <td>2d8+1</td>
            <td>Type</td>
            <td>Prop</td>
            <td>Range</td>
          </tr>
          <tr>
            <td><input type="text" placeholder="Name" /></td>
            <td>+1</td>
            <td>2d8+1</td>
            <td>Type</td>
            <td>Prop</td>
            <td>Range</td>
          </tr>
          <tr>
            <td><input type="text" placeholder="Name" /></td>
            <td>+1</td>
            <td>2d8+1</td>
            <td>Type</td>
            <td>Prop</td>
            <td>Range</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Weapons;