import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { setHTML, setParagraphCount } from '../redux/textSlice';

type Props = {}

function TextInput({}: Props) {
  const value = useSelector((state: RootState)=>state.text.paragraphCount);
  const dispatch = useDispatch()

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber < 1 || !e.target.value) {
      dispatch(setParagraphCount(1))
    } else {
      dispatch(setParagraphCount(e.target.valueAsNumber))
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setHTML(e.target.value))
  }

  return (
    <div className='text-input'>
      <form className="form">
        <div className='form__element'>
        <label>Paragraphs</label>
        <input className='form__element__input' type="number" required min={1} value={value} onChange={handleNumberChange} />
        </div>
        <div className='form__element'>
        <label>Include HTML</label>
        <select className='form__element__select' defaultValue="false" onChange={handleSelect} >
          <option value="true" >Yes</option>
          <option value="false" >No</option>
        </select>
        </div>
      </form>
    </div>
  )
}

export default TextInput