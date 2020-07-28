import React from "react";
import "./Search.css";
import ItemIMG from "./item.png";

function Search() {

    return (
        <div className="search">
            <div className="search_filter">
                <h2>Filter Box</h2>
                <input className="input_filter" type="text" placeholder="Filter by hotel name"/>
                <h4>Filter by rating</h4>
                <div>
                    <input type="checkbox"/>
                    <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className="stars">&#9733;&#9734;&#9734;&#9734;&#9734;</span>
                </div>
                <button> FILTER </button>

            </div>
            <div className="search_item">
                <div className="item">
                    <img src={ItemIMG} alt=""/>
                    <div className="item_text">
                        <p className="normal">yyyyyyyyyyyy</p>
                        <span className="stars">&#9733;&#9734;&#9734;&#9734;&#9734;</span>
                        <p className="light">yyyyyyyyyyyy</p>
                    </div>
                </div>
                <div className="item">
                    <img src={ItemIMG} alt=""/>
                    <div className="item_text">
                        <p className="normal">yyyyyyyyyyyy</p>
                        <span className="stars">&#9733;&#9734;&#9734;&#9734;&#9734;</span>
                        <p className="light">yyyyyyyyyyyy</p>
                    </div>
                </div>
                <div className="item">
                    <img src={ItemIMG} alt=""/>
                    <div className="item_text">
                        <p className="normal">yyyyyyyyyyyy</p>
                        <span className="stars">&#9733;&#9734;&#9734;&#9734;&#9734;</span>
                        <p className="light">yyyyyyyyyyyy</p>
                    </div>
                </div>
            </div>
            <div className="disabled">

            </div>
        </div>

    );
}

export default Search;