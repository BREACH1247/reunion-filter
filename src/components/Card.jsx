import React, { useState } from 'react'
import { useEffect } from 'react';
import JSONDATA from '../data.json'
const Card = () => {
    const [city, setCity] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [area, setArea] = useState(0);
    const [estate, setEstate] = useState([]);
    useEffect(() => {
        setEstate(JSONDATA);
    }, [])

    const handleSearch = () => {
        const newData = JSONDATA.filter(x => x.city === (city === '' ? x.city : city.toLowerCase()))
        .filter(y => y.type === (type === '' ? y.type : type))
        .filter(z => z.price < (price === "" ? z.price : price ))
        .filter(c => c.area < (area === "" ? c.area : area ));
        setEstate(newData);
    }
    return (
        <div>
            <div className="">
                <div className="flex justify-around mb-4">
                    <div className=""><input className="rounded-lg  bg-[#7063f4] placeholder:text-white" type="text" placeholder="Enter city..." onChange={(e) => setCity(e.target.value)}></input></div>
                    <div className="bg-[#7063f4] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">House Type&nbsp;&nbsp;<select onChange={(e) => setType(e.target.value)}>
                        <option className="text-white bg-[#7063f4]" value="">-Select-</option>
                        <option className="text-white bg-[#7063f4]" value="villa">VILLA</option>
                        <option className="text-white bg-[#7063f4]" value="bunglow">BUNGLOW</option>
                        <option className="text-white bg-[#7063f4]" value="flat">FLAT</option>
                    </select>
                    </div>
                    <div className="bg-[#7063f4] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">Price&nbsp;&nbsp;<select onChange={(e) => setPrice(e.target.value)}>
                        <option className="text-white bg-[#7063f4]" value={300000}>-Select-</option>
                        <option className="text-white bg-[#7063f4]" value={10000}>LESS THAN 10000</option>
                        <option className="text-white bg-[#7063f4]" value={20000}>LESS THAN 20000</option>
                        <option className="text-white bg-[#7063f4]" value={30000}>LESS THAN 30000</option>
                    </select>
                    </div>
                    <div className="bg-[#7063f4] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">Area&nbsp;&nbsp;<select onChange={(e) => setArea(e.target.value)}>
                        <option className="text-white bg-[#7063f4]" value={6000}>-Select-</option>
                        <option className="text-white bg-[#7063f4]" value={3000}>LESS THAN 3000</option>
                        <option className="text-white bg-[#7063f4]" value={4000}>LESS THAN 4000</option>
                        <option className="text-white bg-[#7063f4]" value={5000}>LESS THAN 5000</option>
                    </select>
                    </div>
                    
                </div>
                <div className="flex justify-center mb-4">
                        <button className="block py-2 pr-4 pl-3 text-white bg-[#7063f4] rounded"onClick={() => handleSearch()}>Search</button>
                </div>

            </div>
            <div className="flex flex-wrap justify-center">
                {estate.map((val, key) => {
                    return <div class="max-w-sm mr-4 mb-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={val.id}>
                        <a href="#">
                            <img class="rounded-t-lg h-[150px] w-[250px]" src={val.image} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold diacking-tight dark:text-white">Price: {val.price}</h5>
                            </a>
                            <p class="mb-3 font-normal text-white">City: {val.city}</p>
                            <a href="#">
                                <h5 class="mb-2 font-bold diacking-tight dark:text-white">Type: {val.type}</h5>
                            </a>
                            <p class="mb-3 font-normal text-white">Area(in sq.feet) {val.area}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card