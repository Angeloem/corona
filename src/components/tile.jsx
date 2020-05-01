import React from "react";
import './styles/tiles.scss';

export const Tile = (number) => {
    // number === '' ? 'loading': number;
    return (
        <div className={'tile'}>
            <div className={"head"}>
                { number }
            </div>
            <div className="stat">
                 New Confirmed
            </div>
        </div>
    )
};

export const Tile2 = (number) => {
    return (
        <div className={'tile2'}>
            <div className={"head"}>
                { number }
            </div>
            <div className="stat">
                 Total Confirmed
            </div>
        </div>
    )
};

export const Tile3 = (number) => {
    return (
        <div className={'tile3'}>
            <div className={"head"}>
                { number }
            </div>
            <div className="stat">
                 Total Recoveries
            </div>
        </div>
    )
};

export const Tile4 = (number) => {
    return (
        <div className={'tile4'}>
            <div className={"head"}>
                { number }
            </div>
            <div className="stat">
                 Total Deaths
            </div>
        </div>
    )
};