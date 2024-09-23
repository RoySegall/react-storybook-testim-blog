import {Rating} from "../Rating";
import "./food.css";
import type {FC} from "react";

export interface FoodInterface {
    name: string,
    description: string,
    wikipediaUrl: string,
    emoji: string,
    rating: number;
}

export const Food: FC<FoodInterface> = ({name, description, wikipediaUrl, emoji, rating}) => {

    return <div className="food">
        <div className="food-header">
            <h2>{emoji} <a href={wikipediaUrl}>{name}</a></h2>

            <Rating rating={rating} />
        </div>
        <div className="food-content">
            <p>{description}</p>
        </div>

        <a href={wikipediaUrl} target='_blank' className='link-to-page'>Wikipedia page</a>
    </div>
}
