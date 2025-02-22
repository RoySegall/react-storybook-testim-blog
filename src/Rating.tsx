import "./rating.css";
import {useState, useCallback} from "react";
import type {FC} from 'react';

export const Rating: FC<{rating: number}> = ({rating}) => {
    const [currentRating, setCurrentRating] = useState(rating);

    const incrementRating = useCallback(() => {
      setCurrentRating((prevRating) => (prevRating < 5 ? prevRating + 1 : prevRating));
    }, []);

    // Function to decrement rating, memoized using useCallback
    const decrementRating = useCallback(() => {
      setCurrentRating((prevRating) => (prevRating > 0 ? prevRating - 1 : prevRating));
    }, []);

    return <div className='rating-container'>
      <div className="buttons">
          <button className="btn" onClick={decrementRating}>👎</button>
          <div className="stars">{currentRating === 0 ? <>No rating</> :  Array.from({length: currentRating}).map(() => <div className='star'>⭐</div>)}</div>

          <button className="btn" onClick={incrementRating}>👍</button>
        </div>
    </div>
}