"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 4359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ StatsUsersByYear)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(368);
/* harmony import */ var _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_8__]);
([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useChartOptions = ()=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    return {
        chart: {
            background: "transparent",
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: [
            theme.palette.primary.main,
            (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.25)
        ],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: "solid"
        },
        grid: {
            borderColor: theme.palette.divider,
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                columnWidth: "40px"
            }
        },
        stroke: {
            colors: [
                "orange"
            ],
            show: true,
            width: 2
        },
        theme: {
            mode: theme.palette.mode
        },
        xaxis: {
            axisBorder: {
                color: theme.palette.divider,
                show: true
            },
            axisTicks: {
                color: theme.palette.divider,
                show: true
            },
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            labels: {
                offsetY: 5,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value)=>value > 0 ? `${value}K` : `${value}`,
                offsetX: -10,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        }
    };
};
const StatsUsersByYear = (props)=>{
    const { chartSeries , sx  } = props;
    const chartOptions = useChartOptions();
    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        // Effectuez une requête pour récupérer les données du nombre de guides enregistrés par année depuis votre API
        const fetchUserData = async ()=>{
            try {
                const response = await fetch(`${src_env_requete__WEBPACK_IMPORTED_MODULE_8__/* .requete.admin */ .uu.admin}/get-users-by-year`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user statistics");
                }
                const data = await response.json();
                setUserData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching user statistics:", error);
            }
        };
        fetchUserData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    size: "small",
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                    }),
                    children: "Sync"
                }),
                title: "Stats des utilisateurs enr\xe9gistr\xe9 par ann\xe9e"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_chart__WEBPACK_IMPORTED_MODULE_6__/* .Chart */ .k, {
                    height: 350,
                    options: chartOptions,
                    series: [
                        {
                            name: "Utilisateurs enregistr\xe9s",
                            data: userData?.map((yearData)=>yearData.count)
                        }
                    ],
                    type: "bar",
                    width: "100%"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardActions, {
                sx: {
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                    }),
                    size: "small",
                    children: "Overview"
                })
            })
        ]
    });
};
StatsUsersByYear.protoTypes = {
    chartSeries: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ DashboardTotalGuideIsActive)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";






const DashboardTotalGuideIsActive = (props)=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { value , sx  } = props;
    const getUsers = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_5__/* .requete.admin */ .uu.admin}/get_all_guides_active!`);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getUsers().then((res)=>{
            setUsers(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Guide Active et D\xe9sactiver"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h4",
                                children: users?.countIsActive
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h4",
                                children: users?.countIsDiseable
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
DashboardTotalGuideIsActive.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewStatPartenaire */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(368);
/* harmony import */ var _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__]);
([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useChartOptions = ()=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    return {
        chart: {
            background: "transparent",
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: [
            theme.palette.primary.main,
            (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.25)
        ],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: "solid"
        },
        grid: {
            borderColor: theme.palette.divider,
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                columnWidth: "40px"
            }
        },
        stroke: {
            colors: [
                "green"
            ],
            show: true,
            width: 2
        },
        theme: {
            mode: theme.palette.mode
        },
        xaxis: {
            axisBorder: {
                color: theme.palette.divider,
                show: true
            },
            axisTicks: {
                color: theme.palette.divider,
                show: true
            },
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            labels: {
                offsetY: 5,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value)=>value > 0 ? `${value}K` : `${value}`,
                offsetX: -10,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        }
    };
};
const OverviewStatPartenaire = (props)=>{
    const { chartSeries , sx  } = props;
    const chartOptions = useChartOptions();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    size: "small",
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                    }),
                    children: "Sync"
                }),
                title: "Stats des partenaires enr\xe9gistr\xe9 par ann\xe9e"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_chart__WEBPACK_IMPORTED_MODULE_6__/* .Chart */ .k, {
                    height: 350,
                    options: chartOptions,
                    series: chartSeries,
                    type: "bar",
                    width: "100%"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardActions, {
                sx: {
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                    }),
                    size: "small",
                    children: "Overview"
                })
            })
        ]
    });
};
OverviewStatPartenaire.protoTypes = {
    chartSeries: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewStatDestination */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(368);
/* harmony import */ var _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__]);
([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useChartOptions = ()=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    return {
        chart: {
            background: "transparent",
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: [
            theme.palette.primary.main,
            (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, 0.25)
        ],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: "solid"
        },
        grid: {
            borderColor: theme.palette.divider,
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                columnWidth: "40px"
            }
        },
        stroke: {
            colors: [
                "orange"
            ],
            show: true,
            width: 2
        },
        theme: {
            mode: theme.palette.mode
        },
        xaxis: {
            axisBorder: {
                color: theme.palette.divider,
                show: true
            },
            axisTicks: {
                color: theme.palette.divider,
                show: true
            },
            categories: [
                "Cot",
                "Abomey",
                "Dassa",
                "Natti",
                "Avrankou",
                "Allada",
                "Ouidah",
                "Porto",
                "S\xea",
                "Plateau",
                "Mala",
                "Alobo"
            ],
            labels: {
                offsetY: 5,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (value)=>value > 0 ? `${value}K` : `${value}`,
                offsetX: -10,
                style: {
                    colors: theme.palette.text.secondary
                }
            }
        }
    };
};
const OverviewStatDestination = (props)=>{
    const { chartSeries , sx  } = props;
    const chartOptions = useChartOptions();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    size: "small",
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                    }),
                    children: "Sync"
                }),
                title: "Stats des destinations par ann\xe9e"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_chart__WEBPACK_IMPORTED_MODULE_6__/* .Chart */ .k, {
                    height: 350,
                    options: chartOptions,
                    series: chartSeries,
                    type: "bar",
                    width: "100%"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardActions, {
                sx: {
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                    }),
                    size: "small",
                    children: "Overview"
                })
            })
        ]
    });
};
OverviewStatDestination.protoTypes = {
    chartSeries: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;