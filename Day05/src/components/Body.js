import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return(
        <div className="body">

            <div className="search-container">
                <button className="filter-btn"
                 onClick={()=>{
                    const filterRestaurent = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                    setListOfRestaurants(filterRestaurent);
                    console.log(setListOfRestaurants);
                }
                }>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                { listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                )
                )}
            </div>

        </div>

    );  
};

export default Body;

