import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', () => {
    test('Должна принимать 2 аргумента "getPokemon" и { id: 25 }, на выходе получить объект с полями pathname, protocol, host и пустой query', () => {
        const url = getUrlWithParamsConfig('getPokemon', {id: 25});

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemon/25',
            query: {}
        })
    });
});