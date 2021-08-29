import React from 'react';
import { useHistory } from 'react-router';

const HouseFilter = ({allHouses}) => {
    const country=allHouses ? Array.from(new Set(allHouses.map((h)=>
        h.country
    ))) : [];

    const history=useHistory();
    country.unshift(null);

    const onSearchChange= (e) =>{
        const country=e.target.value;
        history.push(`searchresults/${country}`)
    };

    return (
        <div className="row mt-3">
            <div className="col-md-4 offset-md-2">
                Select a country
            </div>
            <div className="col-md-4">
                <select className="form-select" onChange={onSearchChange}>
                    {country.map((c)=>
                    <option value={c} key={c}>
                        {c}
                    </option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default HouseFilter;