import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {}

const Score = (props: Props) => {
  const score = useSelector((state: RootState) => state.card.score);
  return (
    <div className='Score'>
      <strong>Score: {score}</strong>
    </div>
  )
}

export default Score