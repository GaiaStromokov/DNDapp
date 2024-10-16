import React from 'react';
import './Abilities.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const Abilities = () => {
  return (
    <div className='AbilitiesBox'>
      <table className='abilitiesTable'>
        <tbody>
          <tr>
            <th>Race</th>
          </tr>
          <tr>
            <td className='largeCell'>
              <ul>
                <li><strong>Keen Senses:</strong> Proficiency in Perception.</li>
                <li><strong>Fey Ancestry:</strong> Advantage on saving throws against being charmed, and magic can't put you to sleep.</li>
                <li><strong>Trance:</strong> Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <table className='abilitiesTable'>
        <tbody>
          <tr>
            <th>Class</th>
          </tr>
          <tr>
            <td className='largeCell'>
              <ul>
                <li><strong>Spellcasting:</strong> Ability to cast spells from the Wizard spell list.</li>
                <li><strong>Arcane Recovery:</strong> Once per day, recover some spell slots after a short rest.</li>
                <li><strong>Arcane Tradition:</strong> Choose a school of magic to specialize in.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <table className='abilitiesTable'>
        <tbody>
          <tr>
            <th>Feats</th>
          </tr>
          <tr>
            <td className='largeCell'>
              <ul>
                <li><strong>Alert:</strong> Always on the lookout for danger. Gain a +5 bonus to initiative.</li>
                <li><strong>War Caster:</strong> Advantage on Constitution saving throws to maintain concentration on a spell.</li>
                <li><strong>Resilient:</strong> Increase one ability score by 1 and gain proficiency in saving throws using that ability.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <table className='abilitiesTable'>
        <tbody>
          <tr>
            <th>Misc</th>
          </tr>
          <tr>
            <td className='largeCell'>
              {/* Misc content can be added here if needed */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Abilities;