import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': '687014f7efmsh6ee1d1977cb2ff8p1579b0jsn69a07092b24f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com';

const createRequest =(url) =>({
    url,headers:cryptoApiHeaders
})

export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (bulider) => ({
        getCryptos: bulider.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoDetails: bulider.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: bulider.query({
            query: ({coinId,timeperiod}) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
}= cryptoApi;