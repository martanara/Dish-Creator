import React, { useState } from 'react';

import axios from 'axios';

import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';

import { formatMinutes } from '../../utils/formatMinutes';

import styles from './Form.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [preparation_time, setPreparation_time] = useState('');
  const [no_of_slices, setNo_of_slices] = useState('');
  const [diameter, setDiameter] = useState('');
  const [spiciness_scale, setSpiciness_scale] = useState('');
  const [slices_of_bread, setSlices_of_bread] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const addDishRequest = (newDish) => {
    axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', newDish)
      .then((response) => {
        if (response.status === 200) setSuccess(true);
        console.log(response);
      })
      .catch((error) => {
        if (error) {
          setErrorMessage(error.message);
          setError(true);
        } 
      });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(type === 'pizza' && name && preparation_time >= 5 && no_of_slices >= 1 && diameter >= 10) {
      const newDish = {name, type, preparation_time: formatMinutes(preparation_time), no_of_slices: parseInt(no_of_slices), diameter: parseInt(diameter)};
      addDishRequest(newDish);
    } else if (type === 'soup' && name && preparation_time >= 5 && spiciness_scale >= 0 && spiciness_scale <= 10) {
      const newDish = {name, type, preparation_time: formatMinutes(preparation_time), spiciness_scale: parseInt(spiciness_scale)};
      addDishRequest(newDish);
    } else if (type === 'sandwich' && name && preparation_time >= 5 && slices_of_bread >= 1) {
      const newDish = {name, type, preparation_time: formatMinutes(preparation_time), slices_of_bread: parseInt(slices_of_bread)};
      addDishRequest(newDish);
    } else if (!type) {
      setErrorMessage('Please select type of dish');
      setError(true);
    } else {
      setErrorMessage('Something went wrong... Please try again.');
      setError(true);
    }
  };

  const clearForm = () => {
    setName('');
    setType('');
    setPreparation_time('');
    setNo_of_slices('');
    setDiameter('');
    setSpiciness_scale('');
    setSlices_of_bread('');
    setError(false);
    setSuccess(false);
  };

  return (
    <section>
      {error && (<div className={styles.errorMessage}>{errorMessage}</div>)}
      {success && (<div className={styles.successMessage}>New dish was added successfully!</div>)}
      <form onSubmit={handleSubmit} className={styles.dishForm}>
        <label>Dish name</label>
        <InputField
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Preparation time in minutes</label>
        <InputField
          type="number"
          value={preparation_time}
          placeholder="5"
          min="5"
          max="120"
          onChange={(e) => setPreparation_time(e.target.value)}
        />
        <label>Type of dish</label>
        <SelectField
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={['', 'pizza', 'soup', 'sandwich']}
        />
        {type === 'pizza' && 
          (
            <div className={styles.formElements}>
              <label>Number of slices</label>
              <InputField
                type="number"
                value={no_of_slices}
                placeholder="1"
                onChange={(e) => setNo_of_slices(e.target.value)}
                min="1"
                max="50"
              />
              <label >Diameter in inches</label>
              <InputField
                type="number"
                value={diameter}
                placeholder="10.5"
                onChange={(e) => setDiameter(e.target.value)}
                min="10.5"
                max="50"
                step="0.1"
              />
            </div>
          )
        }
        {type === 'soup' && 
          (
            <div className={styles.formElements}>
              <label>Spiciness Scale</label>
              <InputField
                type="number"
                value={spiciness_scale}
                placeholder="1"
                min="1"
                max="10"
                onChange={(e) => setSpiciness_scale(e.target.value)}
              />
            </div>
          )
        }
        {type === 'sandwich' && 
          (
            <div className={styles.formElements}>
              <label>Slices of bread</label>
              <InputField
                type="number"
                value={slices_of_bread}
                placeholder="1"
                onChange={(e) => setSlices_of_bread(e.target.value)}
                min="1"
                max="10"
              />
            </div>
          )
        }
        <Button type="submit">Add dish</Button>
        <Button type="button" onClick={clearForm}>Clear Form</Button>
      </form>
    </section>
  );
};

export default Form;
