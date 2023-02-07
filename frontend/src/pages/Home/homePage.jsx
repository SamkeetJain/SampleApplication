import "./home.less";
import {LineChart, Search} from "../../components";
import {useEffect, useState} from "react";

import {SeriesService} from '../../services/dist/';
const { seriesList } = SeriesService;


const HomePage = () => {

    const [searchValue, setSearchValue] = useState([])
    const [response, setResponse] = useState([])

    useEffect( () => {
            getSeriesList(searchValue.join(',')).then(setResponse)
        }, [searchValue]
    )

    const getSeriesList = async (params) => {
        try {
            return await seriesList(params)
        } catch (error) {
            throw new Error(error);
        }
    };

    return(
        <div>
            <Search setSearchValue={setSearchValue}/>
            <LineChart response={response}/>
        </div>
    )
}

export default HomePage;