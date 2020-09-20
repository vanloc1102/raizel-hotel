import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";
import "./RoomFilter.scss";

//get all unique values
const getUnique = (items, value) => {
    return [
        ...new Set(
            items.map((item) => {
                return item[value];
            })
        ),
    ];
};
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;
    //get unique types
    let types = getUnique(rooms, "type");
    //add all
    types = ["all", ...types];
    //map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });
    return (
        <div>
            <section className="booking">
                <div className="container">
                    <form className="form book-form">
                        <div className="form-group">
                            <label htmlFor="type" className="input-label">
                                Room Type
                            </label>
                            <select
                                name="type"
                                id="type"
                                className="options"
                                value={type}
                                onChange={handleChange}
                            >
                                {types}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="capacity" className="input-label">
                                Guests
                            </label>
                            <select
                                name="capacity"
                                id="capacity"
                                className="options"
                                value={capacity}
                                onChange={handleChange}
                            >
                                {people}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price" className="input-label">
                                Room Price {price}$
                            </label>
                            <input
                                className="input"
                                type="range"
                                name="price"
                                id="price"
                                min={minPrice}
                                max={maxPrice}
                                value={price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size" className="input-label">
                                Room Size
                            </label>
                            <div className="size-inputs">
                                <input
                                    type="number"
                                    className="input"
                                    name="minSize"
                                    id="size"
                                    value={minSize}
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    className="input"
                                    name="maxSize"
                                    id="size"
                                    value={maxSize}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="single-extra">
                                <label htmlFor="breakfast">breakfast</label>
                                <input
                                    className="input-check"
                                    type="checkbox"
                                    name="breakfast"
                                    id="breakfast"
                                    checked={breakfast}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="single-extra">
                                <label htmlFor="pets">pets</label>
                                <input
                                    type="checkbox"
                                    name="pets"
                                    id="pets"
                                    className="input-check"
                                    checked={pets}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
