import Url from 'url';
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";


async function req<T>(endpoint: string, query: object): Promise<T>{
    // console.log('####: request');
    // const uri = Url.format({
    //     protocol: 'https',
    //     host: 'zarmarathon.com',
    //     query: {
    //         name: 'Zar',
    //     }
    // })

    const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

    // console.log('####: uri', uri)
    // console.log('####: getUrlWithParamsConfig', getUrlWithParamsConfig('getPokemons'))
    return await fetch(uri).then((res) => res.json());
}

export default req;