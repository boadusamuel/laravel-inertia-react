/* eslint-disable @next/next/no-img-element */
'use client';
import {Button} from 'primereact/button';
import {Chart} from 'primereact/chart';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Menu} from 'primereact/menu';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {LayoutContext} from '@/Layouts/layout/context/layoutcontext';
import Layout from "@/Layouts/layout/layout.jsx";

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const [lineOptions, setLineOptions] = useState({});
    const {layoutConfig} = useContext(LayoutContext);

    const applyLightTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        // ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'GHS'
        });
    };

    return (
        <Layout>
            <div className="grid">
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Orders</span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl"/>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-500">since last visit</span>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Revenue</span>
                                <div className="text-900 font-medium text-xl">GHS 2.100</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-map-marker text-orange-500 text-xl"/>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">%52+ </span>
                        <span className="text-500">since last week</span>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Customers</span>
                                <div className="text-900 font-medium text-xl">28441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-inbox text-cyan-500 text-xl"/>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">520 </span>
                        <span className="text-500">newly registered</span>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Comments</span>
                                <div className="text-900 font-medium text-xl">152 Unread</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-comment text-purple-500 text-xl"/>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">85 </span>
                        <span className="text-500">responded</span>
                    </div>
                </div>

                <div className="col-12 xl:col-6">
                    <div className="card">
                        <h5>Sales Overview</h5>
                        <Chart type="line" data={lineData} options={lineOptions}/>
                    </div>
                </div>

                <div className="col-12 xl:col-6">
                    <div className="card">
                        <div className="flex justify-content-between align-items-center mb-5">
                            <h5>Best Selling Products</h5>
                            <div>
                                <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain"
                                        onClick={(event) => menu1.current?.toggle(event)}/>
                                <Menu
                                    ref={menu1}
                                    popup
                                    model={[
                                        {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                                        {label: 'Remove', icon: 'pi pi-fw pi-minus'}
                                    ]}
                                />
                            </div>
                        </div>
                        <ul className="list-none p-0 m-0">
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                                    <div className="mt-1 text-600">Clothing</div>
                                </div>
                                <div className="mt-2 md:mt-0 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-orange-500 h-full" style={{width: '50%'}}/>
                                    </div>
                                    <span className="text-orange-500 ml-3 font-medium">%50</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                                    <div className="mt-1 text-600">Accessories</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-cyan-500 h-full" style={{width: '16%'}}/>
                                    </div>
                                    <span className="text-cyan-500 ml-3 font-medium">%16</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                                    <div className="mt-1 text-600">Accessories</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-pink-500 h-full" style={{width: '67%'}}/>
                                    </div>
                                    <span className="text-pink-500 ml-3 font-medium">%67</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                                    <div className="mt-1 text-600">Office</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-green-500 h-full" style={{width: '35%'}}/>
                                    </div>
                                    <span className="text-green-500 ml-3 font-medium">%35</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                                    <div className="mt-1 text-600">Accessories</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-purple-500 h-full" style={{width: '75%'}}/>
                                    </div>
                                    <span className="text-purple-500 ml-3 font-medium">%75</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                                    <div className="mt-1 text-600">Clothing</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-teal-500 h-full" style={{width: '40%'}}/>
                                    </div>
                                    <span className="text-teal-500 ml-3 font-medium">%40</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;

