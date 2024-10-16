import React, { useState } from 'react';
import './Skills.css'; // Import the regular CSS file
import '../standard.css'; // Import the global CSS file

const Skills = () => {
  const [selectedButtons, setSelectedButtons] = useState({});

  const toggleSelected = (skill) => {
    setSelectedButtons((prevSelected) => ({
      ...prevSelected,
      [skill]: !prevSelected[skill],
    }));
  };

  const skills = [
    'Acrobatics', 'Animal-Handle', 'Arcana', 'Athletics', 'Deception',
    'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine',
    'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion',
    'Sl-of-Hand', 'Stealth', 'Survival'
  ];

  return (
    <div className='SkillsBox'>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Skills</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill}>
              <td>{skill}</td>
              <td>
                <button
                  className={`skillButton ${selectedButtons[skill] ? 'selected' : ''}`}
                  onClick={() => toggleSelected(skill)}
                ></button>
              </td>
              <td className='modCell'>1</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;