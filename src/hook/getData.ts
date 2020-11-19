import {useEffect, useState} from "react";
import req from "../utils/request";

const useData = (endpoint: string, query: object, deps: any[] = []) => {
    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async() => {
            setIsLoading(true);
            // const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname }`;
            // console.log('####: url', url);
            try {
                // const response = await fetch(url);
                const result = await req(endpoint, query);
                // const result = await response.json();

                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }

            getData();
        }

    }, deps);

    return {
        data,
        isLoading,
        isError,
    }
}

export default useData;