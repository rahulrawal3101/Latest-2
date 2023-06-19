import { Box, Grid, Typography } from '@mui/material'
import React from 'react'


const api = {
    outerTitle: 'Knowledge base',
    contents: [
        {
            title: 'Generar Enquiry',
            elements: [
                {
                    myhead: 'Pickrr Customer Support',
                    question: [

                        { q: 'How to raise an issue?' },
                        { q: 'What are all the Pickrr shipment statuses and t' },
                        { q: 'Do I have the option to adjust labels as per my' },
                        { q: 'What are the subscription plans offered by Pickr' },
                        { q: 'What is the minimum wallet recharge amount f' }

                    ]
                },
                {
                    myhead: 'Packaging',
                    question: [
                        {
                            q: 'What is a Multi Package Shipment Service?'
                        }
                    ]
                },
                {
                    myhead: 'Shipping Zones',
                    question: [

                        { q: 'Do I have the option to adjust labels as per my' },
                        { q: 'What are the subscription plans offered by Pickr' },
                        { q: 'What is the minimum wallet recharge amount f' }

                    ]
                },
                {
                    myhead: 'Other',
                    question: [
                        {
                            q: 'What is a Multi Package Shipment Service?'
                        }
                    ]
                },
            ]
        },
        {
            title: 'Order',
            elements: [
                {
                    myhead: 'Create Order',
                    question: [

                        { q: 'How to raise an issue?' },
                        { q: 'What are all the Pickrr shipment statuses and t' },
                        { q: 'Do I have the option to adjust labels as per my' },
                        { q: 'What are the subscription plans offered by Pickr' },
                        { q: 'What is the minimum wallet recharge amount f' }

                    ]
                },
                {
                    myhead: 'Cancel Order',
                    question: [
                        {
                            q: 'What is a Multi Package Shipment Service?'
                        }
                    ]
                },
                {
                    myhead: 'Order Tracking ',
                    question: [

                        { q: 'Do I have the option to adjust labels as per my' },
                        { q: 'What are the subscription plans offered by Pickr' },
                        { q: 'What is the minimum wallet recharge amount f' }

                    ]
                },
            ]
        },
        {
            title: 'RTO',
            elements: [
                {
                    myhead: 'RTO Shipment',
                    question: [

                        { q: 'What are the possible reasons for RTO?' },
                        { q: 'Where can I check RTO orders on the Pickrr’s Sell' },
                        { q: 'How can Pickrr help reduce RTO in shipping? If it' },
                        { q: 'How does Fulfilment work in RTO Shipments?' }

                    ]
                },

            ]
        },

    ]
}

const HomePages = () => {
    return (
        <>
            <Grid container sx={{ bgcolor: 'red' }}>
                <Grid item xs={12}>
                    <Typography fontSize={40}>
                        {api.outerTitle}
                    </Typography>
                </Grid>
                {
                    api.contents.map((ele) => {
                        console.log(ele);
                        return (
                            <Grid item xs={12} sx={{ bgcolor: 'blue' }}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Box><Typography sx={{ fontWeight: '800', color: 'white' }}>{ele.title}</Typography></Box>
                                    </Grid>
                                    <Grid container>
                                        {
                                            ele.elements.map((ele1) => {
                                                return (
                                                    <Grid item xs={6}>
                                                        <div><b>{ele1.myhead}</b></div>
                                                        <Grid container>
                                                            {
                                                                ele1.question.map((ele2, i) => {
                                                                    return (
                                                                        <Grid item xs={12}>{i + 1}={ele2.q}</Grid>
                                                                    )
                                                                })
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default HomePages