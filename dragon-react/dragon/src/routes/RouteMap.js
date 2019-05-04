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
    updatePhone: '8',
    reviewHouse: '9',
    profile: '10',
    photo: '11',
    verify: '12',
    viewProfile: '13',
    listroom: '14',
    listroomAdmin: '15'

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
                path: '/admin/list/booking'
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
            },
            {
                component: () => <PageContentWrapper type={types.updatePhone} />,
                path: '/update/phone'
            },
            {
                component: () => <PageContentWrapper type={types.reviewHouse} />,
                path: '/review/book'
            },
            {
                component: () => <PageContentWrapper type={types.profile} />,
                path: '/update/profile'
            },
            {
                component: () => <PageContentWrapper type={types.photo} />,
                path: '/update/photo'
            },
            {
                component: () => <PageContentWrapper type={types.verify} />,
                path: '/update/verify'
            },
            {
                component: () => <PageContentWrapper type={types.viewProfile} />,
                path: '/view/profile'
            },
            {
                component: () => <PageContentWrapper type={types.listroom} />,
                path: '/rooms'
            },
            {
                component: () => <PageContentWrapper type={types.listroomAdmin} />,
                path: '/admin/list/room'
            },

        ]
    }
]

export { routes, types }