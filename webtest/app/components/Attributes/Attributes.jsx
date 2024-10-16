import React from 'react';
import './Attributes.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const Attributes = () => {
  return (
    <div className='AttributesBox'>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Attributes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STR</td>
            <td>
              <input type="number" name="str"/>
            </td>
            <td className='modCell'>0</td>
          </tr>
          <tr>
            <td>DEX</td>
            <td>
              <input type="number" name="dex"/>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>CON</td>
            <td>
              <input type="number" name="con"/>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>
              <input type="number" name="int"/>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>WIS</td>
            <td>
              <input type="number" name="wis"/>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>CHA</td>
            <td>
              <input type="number" name="cha"/>
            </td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
