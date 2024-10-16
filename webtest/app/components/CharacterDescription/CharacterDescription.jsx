import React, { useState } from 'react';
import './CharacterDescription.css'; // Ensure this is the correct path for your CSS
import '../standard.css'; // Import global CSS if needed

const CharacterDescription = () => {
  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState('Description');

  // State to manage input fields for description
  const [descriptionData, setDescriptionData] = useState({
    alignment: '',
    gender: '',
    eyes: '',
    size: '',
    height: '',
    faith: '',
    hair: '',
    skin: '',
    age: '',
    weight: '',
  });

  // State to manage input fields for character traits
  const [traitsData, setTraitsData] = useState({
    traits: '',
    ideals: '',
    bonds: '',
    flaws: '',
  });

  // Function to handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle input changes for description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDescriptionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle input changes for character traits
  const handleTraitsInputChange = (e) => {
    const { name, value } = e.target;
    setTraitsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="cd-CharacterDescriptionBox">
      {/* Header with buttons for tabs */}
      <div className="cd-header">
        <button onClick={() => handleTabChange('Description')}>Description</button>
        <button onClick={() => handleTabChange('Backstory')}>Backstory</button>
        <button onClick={() => handleTabChange('Character Traits')}>Character Traits</button>
      </div>

      {/* Display content based on the active tab */}
      <div className="cd-content">
        {activeTab === 'Description' && (
          <table className="description-table">
            <tbody>
              <tr>
                <td>Alignment:</td>
                <td>Gender:</td>
                <td>Eyes:</td>
                <td>Size:</td>
                <td>Height:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="alignment"
                    value={descriptionData.alignment}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="gender"
                    value={descriptionData.gender}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="eyes"
                    value={descriptionData.eyes}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="size"
                    value={descriptionData.size}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="height"
                    value={descriptionData.height}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Faith:</td>
                <td>Hair:</td>
                <td>Skin:</td>
                <td>Age:</td>
                <td>Weight:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="faith"
                    value={descriptionData.faith}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="hair"
                    value={descriptionData.hair}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="skin"
                    value={descriptionData.skin}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="age"
                    value={descriptionData.age}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="weight"
                    value={descriptionData.weight}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === 'Backstory' && (
          <div>
            <div className="cd-backstory-box">
              <p>Soldier: You have served in a military force, gaining skills and discipline.</p>
            </div>
            <textarea className="cd-backstory-textarea" placeholder="Write your backstory here..."></textarea>
          </div>
        )}
        {activeTab === 'Character Traits' && (
          <table className="traits-table">
            <tbody>
              <tr>
                <td>Traits:</td>
                <td colSpan={3}>
                  <input
                    type="text"
                    name="traits"
                    value={traitsData.traits}
                    onChange={handleTraitsInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Ideals:</td>
                <td colSpan={3}>
                  <input
                    type="text"
                    name="ideals"
                    value={traitsData.ideals}
                    onChange={handleTraitsInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Bonds:</td>
                <td colSpan={3}>
                  <input
                    type="text"
                    name="bonds"
                    value={traitsData.bonds}
                    onChange={handleTraitsInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Flaws:</td>
                <td colSpan={3}>
                  <input
                    type="text"
                    name="flaws"
                    value={traitsData.flaws}
                    onChange={handleTraitsInputChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CharacterDescription;