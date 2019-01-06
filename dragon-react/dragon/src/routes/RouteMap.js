import React from 'react'
import App from '../App'

import PageContentWrapper from '../containers/PageContentWrapper'

const types = {
    home: '1',
    detailHouse: '2',
    listOfBooking: '3',
    transactionHistory: '4',
    accountSetting: '5',
    pastTrip: '6',
    today: '7',

}

const routes = [
    {
        component: App,
        routes: [
            {
                component: () => <PageContentWrapper type={types.home} />,
                exact: true,
                path: '/'
            },
            {
                component: () => <PageContentWrapper type={types.detailHouse} />,
                path: '/detail/house'
            },
            {
                component: () => <PageContentWrapper type={types.listOfBooking} />,
                path: '/list/booking'
            },
            {
                component: () => <PageContentWrapper type={types.transactionHistory} />,
                path: '/transaction/history'
            },
            {
                component: () => <PageContentWrapper type={types.accountSetting} />,
                path: '/account/setting'
            },
            {
                component: () => <PageContentWrapper type={types.pastTrip} />,
                path: '/pasttrip'
            },
            {
                component: () => <PageContentWrapper type={types.today} />,
                path: '/today'
            }
        ]
    }
]   

export { routes, types }