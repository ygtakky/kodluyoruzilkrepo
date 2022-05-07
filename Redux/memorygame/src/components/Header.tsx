import React from 'react'
import Score from './Score'
import "./Header.css";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { resetGame } from '../redux/cardSlice';

type Props = {}

function Header({}: Props) {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame())
  }

  return (
    <div className='Header'>
      <h4>Memory Game</h4>
      <div className='d-flex justify-content-evenly align-items-center w-50'>
        <Score />
        <Button variant="info" onClick={handleReset}><div className="fw-bold">Reset</div></Button>
      </div>
    </div>
  )
}

export default Header