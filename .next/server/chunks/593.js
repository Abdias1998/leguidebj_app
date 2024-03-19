"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 7474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(521);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2779);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2377);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, src_env_requete__WEBPACK_IMPORTED_MODULE_5__]);
([_heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__, src_env_requete__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const itemsPerPageOptions = [
    5,
    10,
    25,
    50,
    100,
    150,
    200,
    300
];
const AdminPagination = ()=>{
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(itemsPerPageOptions[1]);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [videoToDelete, setVideoToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isInfoModalOpen, setIsInfoModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [infoMessage, setInfoMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [videoToEdit, setVideoToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isEditSuccess, setIsEditSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getAdmins();
    }, []);
    const getAdmins = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_5__/* .requete.admin */ .uu.admin}/retrieve_all_admin`);
            setData(res.data);
            setFilteredData(res.data);
            setInfoMessage("Requ\xeate r\xe9ussie !");
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setInfoMessage("Erreur lors de la requ\xeate.");
            setIsSuccess(false);
        } finally{
        // setIsInfoModalOpen(true);
        }
    };
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleSearch = (e)=>{
        const searchValue = e.target.value;
        setSearchTerm(searchValue);
        const filtered = data.filter((admin)=>{
            if (admin.name && typeof admin.name === "string") {
                return admin.name.toLowerCase().includes(searchValue.toLowerCase());
            }
            return false;
        });
        setFilteredData(filtered);
    };
    const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    const handleDeleteAdmin = (admin)=>{
        setVideoToDelete(admin);
        setIsDeleteModalOpen(true);
    };
    const confirmDelete = async ()=>{
        if (videoToDelete) {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"]["delete"](`${src_env_requete__WEBPACK_IMPORTED_MODULE_5__/* .requete.admin */ .uu.admin}/delete_admin/${videoToDelete._id}`);
                if (response.status === 200) {
                    setInfoMessage("Suppression r\xe9ussie.");
                    setIsSuccess(true);
                } else {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                sx: {
                    p: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.OutlinedInput, {
                        fullWidth: true,
                        value: searchTerm,
                        onChange: handleSearch,
                        placeholder: "Rechercher Admin (Nom)",
                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputAdornment, {
                            position: "start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {
                                color: "action",
                                fontSize: "small",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                            })
                        }),
                        sx: {
                            maxWidth: 500,
                            marginRight: 2
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "contained",
                        onClick: getAdmins,
                        children: "Recherche"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_6__/* .Scrollbar */ .L, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                    style: {
                        overflowX: "auto"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                children: "Nom"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                children: "Tel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                children: "Role"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                children: "Supprimer"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
                                    children: paginatedData.map((admin)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                    children: admin.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                    children: admin.email
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                    children: admin.tel
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                    children: admin.role
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                        variant: "contained",
                                                        onClick: ()=>handleDeleteAdmin(admin),
                                                        color: "error",
                                                        children: "Supprimer"
                                                    })
                                                })
                                            ]
                                        }, admin._id))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TablePagination, {
                            component: "div",
                            count: filteredData.length,
                            page: page,
                            onPageChange: handleChangePage,
                            rowsPerPage: rowsPerPage,
                            onRowsPerPageChange: handleChangeRowsPerPage,
                            rowsPerPageOptions: itemsPerPageOptions
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                open: isDeleteModalOpen,
                onClose: cancelDelete,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
                        children: "Confirmer la suppression"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
                        children: "\xcates-vous s\xfbr de vouloir supprimer cet administrateur ?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogActions, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: cancelDelete,
                                color: "primary",
                                children: "Annuler"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: confirmDelete,
                                color: "error",
                                children: "Supprimer"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                open: isInfoModalOpen,
                onClose: closeInfoModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
                        children: isSuccess ? "Succ\xe8s" : "Erreur"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
                        children: infoMessage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.DialogActions, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            onClick: closeInfoModal,
                            color: "primary",
                            children: "OK"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPagination);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export CompaniesSearch */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(521);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_1__]);
_heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CompaniesSearch = ()=>/*#__PURE__*/ _jsx(Card, {
        sx: {
            p: 2
        },
        children: /*#__PURE__*/ _jsx(OutlinedInput, {
            defaultValue: "",
            fullWidth: true,
            placeholder: "Search company",
            startAdornment: /*#__PURE__*/ _jsx(InputAdornment, {
                position: "start",
                children: /*#__PURE__*/ _jsx(SvgIcon, {
                    color: "action",
                    fontSize: "small",
                    children: /*#__PURE__*/ _jsx(MagnifyingGlassIcon, {})
                })
            }),
            sx: {
                maxWidth: 500
            }
        })
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;