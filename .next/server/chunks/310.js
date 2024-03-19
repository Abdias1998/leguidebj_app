"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 7309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const ApexChart = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\chart.js -> " + "react-apexcharts"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const Chart = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(ApexChart)``;


/***/ }),

/***/ 8919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SeverityPill */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);



const SeverityPillRoot = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("span")(({ theme , ownerState  })=>{
    const backgroundColor = theme.palette[ownerState.color].alpha12;
    const color = theme.palette.mode === "dark" ? theme.palette[ownerState.color].main : theme.palette[ownerState.color].dark;
    return {
        alignItems: "center",
        backgroundColor,
        borderRadius: 12,
        color,
        cursor: "default",
        display: "inline-flex",
        flexGrow: 0,
        flexShrink: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 2,
        fontWeight: 600,
        justifyContent: "center",
        letterSpacing: 0.5,
        minWidth: 20,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textTransform: "uppercase",
        whiteSpace: "nowrap"
    };
});
const SeverityPill = (props)=>{
    const { color ="primary" , children , ...other } = props;
    const ownerState = {
        color
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SeverityPillRoot, {
        ownerState: ownerState,
        ...other,
        children: children
    });
};
SeverityPill.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "secondary",
        "error",
        "info",
        "warning",
        "success"
    ])
};


/***/ }),

/***/ 2921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ DashboardTotalAdmin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid_UserCircleIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8778);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_UserCircleIcon__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, src_env_requete__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_solid_UserCircleIcon__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, src_env_requete__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";







const DashboardTotalAdmin = (props)=>{
    const [admins, setAdmins] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const { value , sx  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        (0,src_env_requete__WEBPACK_IMPORTED_MODULE_6__/* .getAdminRole */ .bF)().then((res)=>{
            setAdmins(res.data);
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
                                children: "Total Admin Principal"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h4",
                                children: admins?.countIsAdminPrincipal
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_UserCircleIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                        })
                    })
                ]
            })
        })
    });
};
DashboardTotalAdmin.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ DashboardTotalUsersBannie)
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


// import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";




const DashboardTotalUsersBannie = (props)=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { value , sx  } = props;
    const getUsers = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_5__/* .requete.admin */ .uu.admin}/users_total_order`);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getUsers().then((res)=>{
            //   console.log(data);
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
                                children: "Total Utilisateurs Bannie"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h4",
                                children: users?.bannedUserCount
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
DashboardTotalUsersBannie.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ DashboardTotalComment)
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






const DashboardTotalComment = (props)=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { value , sx  } = props;
    const getUsers = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_5__/* .requete.admin */ .uu.admin}/get_all_guides_comments`);
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
                                children: "Total Commentaire"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h4",
                                children: users?.totalComments
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
                                        d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
DashboardTotalComment.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ DashboardTotalManager)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_solid_BriefcaseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3529);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_BriefcaseIcon__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__]);
([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_BriefcaseIcon__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";








const DashboardTotalManager = (props)=>{
    const [admins, setAdmins] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { value , sx  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        (0,src_env_requete__WEBPACK_IMPORTED_MODULE_7__/* .getAdminRole */ .bF)().then((res)=>{
            setAdmins(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Total Manager"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                children: admins?.countIsManager
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_BriefcaseIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                        })
                    })
                ]
            })
        })
    });
};
DashboardTotalManager.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ DashboardTaskProgress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(579);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const DashboardTaskProgress = (props)=>{
    const { value , sx  } = props;
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const getUsers = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_6__/* .requete.admin */ .uu.admin}/get_all_users`);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getUsers().then((res)=>{
            //   console.log(data);
            setUsers(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        sx: sx,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    alignItems: "flex-start",
                    direction: "row",
                    justifyContent: "space-between",
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    variant: "overline",
                                    children: "Objectif utilisateur progression"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "h4",
                                    children: [
                                        users?.length / 100,
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                            sx: {
                                backgroundColor: "warning.main",
                                height: 56,
                                width: 56
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ListBulletIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        mt: 3
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.LinearProgress, {
                        value: users?.length,
                        variant: "determinate"
                    })
                })
            ]
        })
    });
};
DashboardTaskProgress.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ DashboardTotalGuide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, src_env_requete__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, src_env_requete__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";




// import BanIcon from "@heroicons/react/24/solid/BanIcon";



const DashboardTotalGuide = (props)=>{
    const [guides, setGuides] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { value , sx  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        (0,src_env_requete__WEBPACK_IMPORTED_MODULE_6__/* .getGuideAll */ .kA)().then((res)=>{
            //   console.log(data);
            setGuides(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Total Guide"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                children: guides?.length
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
DashboardTotalGuide.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ DashboardTotalUsers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_solid_UserIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8356);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2779);
/* harmony import */ var src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(249);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_UserIcon__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__, src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__]);
([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_UserIcon__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__, src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";









const DashboardTotalUsers = (props)=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const authContext = (0,src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__/* .useAuthContext */ .Eu)();
    const user = authContext.user;
    const { value , sx  } = props;
    const getUsers = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_7__/* .requete.admin */ .uu.admin}/get_all_users`);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        getUsers().then((res)=>{
            //   console.log(data);
            setUsers(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Total Utilisateurs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                children: users?.length
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
DashboardTotalUsers.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ StatsGuideByYear)
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
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2779);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__]);
([_heroicons_react_24_solid_ArrowPathIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









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
                "transparent"
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
const StatsGuideByYear = (props)=>{
    const { chartSeries , sx  } = props;
    const chartOptions = useChartOptions();
    const [guideData, setGuideData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        // Effectuez une requête pour récupérer les données du nombre de guides enregistrés par année depuis votre API
        const fetchGuideData = async ()=>{
            try {
                const response = await fetch(`${src_env_requete__WEBPACK_IMPORTED_MODULE_7__/* .requete.admin */ .uu.admin}/get-guides-by-year`);
                if (!response.ok) {
                    throw new Error("Failed to fetch guide statistics");
                }
                const data = await response.json();
                setGuideData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching guide statistics:", error);
            }
        };
        fetchGuideData();
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
                title: "Stats des guides enr\xe9gistr\xe9 par ann\xe9e"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_chart__WEBPACK_IMPORTED_MODULE_6__/* .Chart */ .k, {
                    height: 350,
                    options: chartOptions,
                    series: [
                        {
                            name: "Guides enregistr\xe9s",
                            data: guideData?.map((yearData)=>yearData.count)
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
StatsGuideByYear.protoTypes = {
    chartSeries: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewBudget */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2017);
/* harmony import */ var _heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7162);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1386);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_4__]);
([_heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const OverviewBudget = (props)=>{
    const { difference , positive =false , sx , value  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
        sx: sx,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    alignItems: "flex-start",
                    direction: "row",
                    justifyContent: "space-between",
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    color: "text.secondary",
                                    variant: "overline",
                                    children: "Nombre de vid\xe9o"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    variant: "h4",
                                    children: value
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
                            sx: {
                                backgroundColor: "error.main",
                                height: 56,
                                width: 56
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                            })
                        })
                    ]
                }),
                difference && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    alignItems: "center",
                    direction: "row",
                    spacing: 2,
                    sx: {
                        mt: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            alignItems: "center",
                            direction: "row",
                            spacing: 0.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
                                    color: positive ? "success" : "error",
                                    fontSize: "small",
                                    children: positive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    color: positive ? "success.main" : "error.main",
                                    variant: "body2",
                                    children: [
                                        difference,
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            color: "text.secondary",
                            variant: "caption",
                            children: "Since last month"
                        })
                    ]
                })
            ]
        })
    });
};
OverviewBudget.prototypes = {
    difference: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    positive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewLatestOrders */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2377);
/* harmony import */ var src_components_severity_pill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8919);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2779);
/* harmony import */ var src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(249);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_8__, src_env_requete__WEBPACK_IMPORTED_MODULE_9__, src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_10__]);
([_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_8__, src_env_requete__WEBPACK_IMPORTED_MODULE_9__, src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";











const statusMap = {
    pending: "warning",
    delivered: "success",
    refunded: "error"
};
const OverviewLatestOrders = (props)=>{
    const [data, setDatas] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const authContext = (0,src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_10__/* .useAuthContext */ .Eu)();
    const user = authContext.user;
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [videoToDelete, setVideoToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [isInfoModalOpen, setIsInfoModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // État pour le modal d'informations
    const [infoMessage, setInfoMessage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // Pour gérer le style du message d'informations
    const handleDeleteVideo = (video)=>{
        setVideoToDelete(video);
        setIsDeleteModalOpen(true);
    };
    const confirmDelete = async ()=>{
        if (videoToDelete) {
            try {
                // Envoyer une requête de suppression
                const response = await axios__WEBPACK_IMPORTED_MODULE_8__["default"]["delete"](`${src_env_requete__WEBPACK_IMPORTED_MODULE_9__/* .requete.admin */ .uu.admin}/delete_admin/${videoToDelete._id}`);
                if (response.status === 200) {
                    // Suppression réussie
                    setInfoMessage("Suppression r\xe9ussie.");
                    setIsSuccess(true);
                } else {
                    // Erreur de suppression
                    setInfoMessage("Erreur lors de la suppression.");
                    setIsSuccess(false);
                }
            } catch (error) {
                console.error(error);
                setInfoMessage("Erreur lors de la suppression.");
                setIsSuccess(false);
            } finally{
                setIsInfoModalOpen(true);
                setIsDeleteModalOpen(false);
            }
        }
    };
    const cancelDelete = ()=>{
        setIsDeleteModalOpen(false);
    };
    const closeInfoModal = ()=>{
        setIsInfoModalOpen(false);
    };
    const getAdmins = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_9__/* .requete.admin */ .uu.admin}/retrieve_all_admin`);
        setDatas(res.data);
        console.log("data", data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        getAdmins();
    }, []);
    const { sx  } = props;
    // const { orders = [], sx } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
            sx: sx,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                    title: "Liste des admins"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* .Scrollbar */ .L, {
                    sx: {
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        sx: {
                            minWidth: 800
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: "Nom"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: "Tel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: "Supprimer admin"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                sortDirection: "desc",
                                                children: "Role"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
                                    children: data?.map((order)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                            hover: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                    children: order.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                    children: order.email
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                    children: order.tel
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                    children: order.role
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                        variant: "contained",
                                                        onClick: ()=>handleDeleteVideo(order),
                                                        color: "error",
                                                        children: "Supprimer"
                                                    })
                                                })
                                            ]
                                        }, order._id);
                                    })
                                })
                            ]
                        })
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
                        variant: "text",
                        children: "View all"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                    open: isDeleteModalOpen,
                    onClose: cancelDelete,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, {
                            children: "Confirmer la suppression"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
                            children: "\xcates-vous s\xfbr de vouloir supprimer ce manager ?"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogActions, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    onClick: cancelDelete,
                                    color: "primary",
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    onClick: confirmDelete,
                                    color: "error",
                                    children: "Delete"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                    open: isInfoModalOpen,
                    onClose: closeInfoModal,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, {
                            children: isSuccess ? "Succ\xe8s" : "Erreur"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {
                            children: infoMessage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogActions, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                onClick: closeInfoModal,
                                color: "primary",
                                children: "OK"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
OverviewLatestOrders.prototype = {
    orders: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewLatestProducts */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5677);
/* harmony import */ var _heroicons_react_24_solid_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__]);
([_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const OverviewLatestProducts = (props)=>{
    const { products =[] , sx  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {
                title: "Latest Products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {
                children: products.map((product, index)=>{
                    const hasDivider = index < products.length - 1;
                    const ago = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.formatDistanceToNow)(product.updatedAt);
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
                        divider: hasDivider,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemAvatar, {
                                children: product.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                    component: "img",
                                    src: product.image,
                                    sx: {
                                        borderRadius: 1,
                                        height: 48,
                                        width: 48
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                    sx: {
                                        borderRadius: 1,
                                        backgroundColor: "neutral.200",
                                        height: 48,
                                        width: 48
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
                                primary: product.name,
                                primaryTypographyProps: {
                                    variant: "subtitle1"
                                },
                                secondary: `Updated ${ago} ago`,
                                secondaryTypographyProps: {
                                    variant: "body2"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
                                edge: "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                                })
                            })
                        ]
                    }, product.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardActions, {
                sx: {
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
                        fontSize: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                    }),
                    size: "small",
                    variant: "text",
                    children: "View all"
                })
            })
        ]
    });
};
OverviewLatestProducts.propTypes = {
    products: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6302:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewTotalRatings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_solid_StarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(480);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_StarIcon__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__]);
([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_StarIcon__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";








const OverviewTotalRatings = (props)=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const { value , sx  } = props;
    const getUsers = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_7__/* .requete.user */ .uu.user}/all-ratings`);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        getUsers().then((res)=>{
            setUsers(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Total Note Vid\xe9o"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                children: users?.totalRatings
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_StarIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                        })
                    })
                ]
            })
        })
    });
};
OverviewTotalRatings.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewTotalCustomers */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2017);
/* harmony import */ var _heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7162);
/* harmony import */ var _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1950);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_4__]);
([_heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const OverviewTotalCustomers = (props)=>{
    const { difference , positive =false , sx , value  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
        sx: sx,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    alignItems: "flex-start",
                    direction: "row",
                    justifyContent: "space-between",
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            spacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    color: "text.secondary",
                                    variant: "overline",
                                    children: "Total Customers"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    variant: "h4",
                                    children: value
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
                            sx: {
                                backgroundColor: "success.main",
                                height: 56,
                                width: 56
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                            })
                        })
                    ]
                }),
                difference && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    alignItems: "center",
                    direction: "row",
                    spacing: 2,
                    sx: {
                        mt: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            alignItems: "center",
                            direction: "row",
                            spacing: 0.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
                                    color: positive ? "success" : "error",
                                    fontSize: "small",
                                    children: positive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                    color: positive ? "success.main" : "error.main",
                                    variant: "body2",
                                    children: [
                                        difference,
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            color: "text.secondary",
                            variant: "caption",
                            children: "Since last month"
                        })
                    ]
                })
            ]
        })
    });
};
OverviewTotalCustomers.propTypes = {
    difference: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    positive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewTotalProfit */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__]);
_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const OverviewTotalProfit = (props)=>{
    const { value , sx  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Total Profit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                children: value
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                        })
                    })
                ]
            })
        })
    });
};
OverviewTotalProfit.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewTraffic */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_ComputerDesktopIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4372);
/* harmony import */ var _heroicons_react_24_solid_DeviceTabletIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_solid_PhoneIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3490);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_ComputerDesktopIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_DeviceTabletIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_PhoneIcon__WEBPACK_IMPORTED_MODULE_4__]);
([_heroicons_react_24_solid_ComputerDesktopIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_DeviceTabletIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_PhoneIcon__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useChartOptions = (labels)=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    return {
        chart: {
            background: "transparent"
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: "none"
                }
            },
            hover: {
                filter: {
                    type: "none"
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};
const iconMap = {
    Desktop: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_ComputerDesktopIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }),
    Tablet: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_DeviceTabletIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }),
    Phone: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_PhoneIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    })
};
const OverviewTraffic = (props)=>{
    const { chartSeries , labels , sx  } = props;
    const chartOptions = useChartOptions(labels);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {
                title: "Traffic Source"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_chart__WEBPACK_IMPORTED_MODULE_6__/* .Chart */ .k, {
                        height: 300,
                        options: chartOptions,
                        series: chartSeries,
                        type: "donut",
                        width: "100%"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                        alignItems: "center",
                        direction: "row",
                        justifyContent: "center",
                        spacing: 2,
                        sx: {
                            mt: 2
                        },
                        children: chartSeries.map((item, index)=>{
                            const label = labels[index];
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: [
                                    iconMap[label],
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                        sx: {
                                            my: 1
                                        },
                                        variant: "h6",
                                        children: label
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                        color: "text.secondary",
                                        variant: "subtitle2",
                                        children: [
                                            item,
                                            "%"
                                        ]
                                    })
                                ]
                            }, label);
                        })
                    })
                ]
            })
        ]
    });
};
OverviewTraffic.propTypes = {
    chartSeries: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    labels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export OverviewTotalVideos */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var _heroicons_react_24_solid_FilmIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3589);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_FilmIcon__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_6__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__]);
([_heroicons_react_24_solid_CurrencyDollarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_FilmIcon__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_6__, src_env_requete__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
"use-client";



 // Remplacez FilmIcon par le nom de l'icône appropriée




const OverviewTotalVideos = (props)=>{
    const [videos, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { value , sx  } = props;
    const getVideo = async ()=>{
        const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_7__/* .requete.video */ .uu.video}/read`);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        getVideo().then((res)=>{
            //   console.log(data);
            setVideo(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                alignItems: "flex-start",
                direction: "row",
                justifyContent: "space-between",
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                color: "text.secondary",
                                variant: "overline",
                                children: "Total Vid\xe9os"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h4",
                                children: videos?.length
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                        sx: {
                            backgroundColor: "primary.main",
                            height: 56,
                            width: 56
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_FilmIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                        })
                    })
                ]
            })
        })
    });
};
OverviewTotalVideos.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;