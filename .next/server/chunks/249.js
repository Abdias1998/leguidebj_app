"use strict";
exports.id = 249;
exports.ids = [249];
exports.modules = {

/***/ 249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eu": () => (/* binding */ useAuthContext),
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "Vo": () => (/* binding */ AuthContext),
/* harmony export */   "he": () => (/* binding */ AuthConsumer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var src_env_requete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, src_env_requete__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useReducer,
//   useRef,
// } from "react";
// import PropTypes from "prop-types";
// const HANDLERS = {
//   INITIALIZE: "INITIALIZE",
//   SIGN_IN: "SIGN_IN",
//   SIGN_OUT: "SIGN_OUT",
// };
// const initialState = {
//   isAuthenticated: false,
//   isLoading: true,
//   user: null,
// };
// const handlers = {
//   [HANDLERS.INITIALIZE]: (state, action) => {
//     const user = action.payload;
//     return {
//       ...state,
//       ...// if payload (user) is provided, then is authenticated
//       (user
//         ? {
//             isAuthenticated: true,
//             isLoading: false,
//             user,
//           }
//         : {
//             isLoading: false,
//           }),
//     };
//   },
//   [HANDLERS.SIGN_IN]: (state, action) => {
//     const user = action.payload;
//     return {
//       ...state,
//       isAuthenticated: true,
//       user,
//     };
//   },
//   [HANDLERS.SIGN_OUT]: (state) => {
//     return {
//       ...state,
//       isAuthenticated: false,
//       user: null,
//     };
//   },
// };
// const reducer = (state, action) =>
//   handlers[action.type] ? handlers[action.type](state, action) : state;
// // The role of this context is to propagate authentication state through the App tree.
// export const AuthContext = createContext({ undefined });
// export const AuthProvider = (props) => {
//   const { children } = props;
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const initialized = useRef(false);
//   const initialize = async () => {
//     // Prevent from calling twice in development mode with React.StrictMode enabled
//     if (initialized.current) {
//       return;
//     }
//     initialized.current = true;
//     let isAuthenticated = false;
//     try {
//       isAuthenticated =
//         window.sessionStorage.getItem("authenticated") === "true";
//     } catch (err) {
//       console.error(err);
//     }
//     if (isAuthenticated) {
//       const user = {
//         id: "5e86809283e28b96d2d38537",
//         avatar: "/assets/avatars/avatar-anika-visser.png",
//         name: "Anika Visser",
//         identifier: "anika.visser@devias.io",
//       };
//       dispatch({
//         type: HANDLERS.INITIALIZE,
//         payload: user,
//       });
//     } else {
//       dispatch({
//         type: HANDLERS.INITIALIZE,
//       });
//     }
//   };
//   useEffect(
//     () => {
//       initialize();
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     []
//   );
//   const signIn = async (identifier, password) => {
//     if (identifier !== "demo@devias.io" || password !== "Password123!") {
//       throw new Error("Please check your identifier and password");
//     }
//     try {
//       window.sessionStorage.setItem("authenticated", "true");
//     } catch (err) {
//       console.error(err);
//     }
//     const user = {
//       id: "5e86809283e28b96d2d38537",
//       avatar: "/assets/avatars/avatar-anika-visser.png",
//       name: "Anika Visser",
//       identifier: "anika.visser@devias.io",
//     };
//     dispatch({
//       type: HANDLERS.SIGN_IN,
//       payload: user,
//     });
//   };
//   const signUp = async (identifier, name, password) => {
//     throw new Error("Sign up is not implemented");
//   };
//   const signOut = () => {
//     dispatch({
//       type: HANDLERS.SIGN_OUT,
//     });
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         signIn,
//         signUp,
//         signOut,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };
// export const AuthConsumer = AuthContext.Consumer;
// export const useAuthContext = () => useContext(AuthContext);



 // Importez Axios ou la bibliothèque HTTP de votre choix

axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.withCredentials = true;
const HANDLERS = {
    INITIALIZE: "INITIALIZE",
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT",
    USERS: "USERS"
};
const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
};
const handlers = {
    [HANDLERS.INITIALIZE]: (state, action)=>{
        const user = action.payload;
        return {
            ...state,
            ...user ? {
                isAuthenticated: true,
                isLoading: false,
                user
            } : {
                isLoading: false
            }
        };
    },
    [HANDLERS.SIGN_IN]: (state, action)=>{
        const user = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    [HANDLERS.USERS]: (state, action)=>{
        const users = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            users
        };
    },
    [HANDLERS.SIGN_OUT]: (state)=>{
        return {
            ...state,
            isAuthenticated: false,
            user: null
        };
    }
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    undefined
});
const AuthProvider = (props)=>{
    const { children  } = props;
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const initialized = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const initialize = async ()=>{
        // Prevent from calling twice in development mode with React.StrictMode enabled
        if (initialized.current) {
            return;
        }
        initialized.current = true;
        let isAuthenticated = false;
        // try {
        //   isAuthenticated = window.sessionStorage.getItem("authenticated") === "true";
        // } catch (err) {
        //   console.error(err);
        // }
        if (isAuthenticated) {
            // Si la connexion réussit, effectuez une requête pour récupérer les données de l'utilisateur
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_4__/* .requete.admin */ .uu.admin}/admin_verify_token`);
                const userInfo = response.data;
                console.log(userInfo);
                const user = {
                    id: userInfo.admin._id,
                    avatar: "/assets/avatars/avatar-anika-visser.png",
                    name: userInfo.admin.name,
                    role: userInfo.admin.role
                };
                dispatch({
                    type: HANDLERS.INITIALIZE,
                    payload: user
                });
            // console.log(user);
            } catch (error) {
                console.error(error);
                throw new Error(error.response.data.message);
            }
        } else {
            dispatch({
                type: HANDLERS.INITIALIZE
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        initialize();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const signIn = async (identifier, password)=>{
        // if (identifier !== "demo@devias.io" || password !== "Password123!") {
        //   throw new Error("Please check your identifier and password");
        // }
        try {
            // Effectuez une requête pour vérifier les identifiants de connexion
            const login = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${src_env_requete__WEBPACK_IMPORTED_MODULE_4__/* .requete.admin */ .uu.admin}/login_admin_role`, {
                identifier,
                password
            });
            console.log(login.data);
            if (login.status === 200) {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${src_env_requete__WEBPACK_IMPORTED_MODULE_4__/* .requete.admin */ .uu.admin}/admin_verify_token`, {
                    withCredentials: true
                });
                const userInfo = await response.data;
                console.log(userInfo);
                const user = {
                    id: userInfo.admin._id,
                    avatar: "/assets/avatars/avatar-anika-visser.png",
                    name: userInfo.admin.name,
                    role: userInfo.admin.role
                };
                console.log(user);
                window.sessionStorage.setItem("authenticated", "true");
                dispatch({
                    type: HANDLERS.SIGN_IN,
                    payload: user
                });
            }
        } catch (error) {
            console.error(error);
            throw new Error(error.response.data.message);
        }
    };
    // ... Le reste de votre code reste inchangé ...
    const signUp = async (identifier, name, password)=>{
        throw new Error("Sign up is not implemented");
    };
    const signOut = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`${src_env_requete__WEBPACK_IMPORTED_MODULE_4__/* .requete.admin */ .uu.admin}/logout_admin` // Utilisez l'API pour gérer la déconnexion côté serveur
            );
            if (response.status === 200) {
                // Effacer les données d'authentification côté client
                window.sessionStorage.removeItem("authenticated");
                // Mettre à jour l'état de l'authentification
                dispatch({
                    type: HANDLERS.SIGN_OUT
                });
            } else {
                console.error("Failed to sign out:", response.data.message);
            }
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            ...state,
            signIn,
            signUp,
            signOut
        },
        children: children
    });
};
AuthProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
const AuthConsumer = AuthContext.Consumer;
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bF": () => (/* binding */ getAdminRole),
/* harmony export */   "kA": () => (/* binding */ getGuideAll),
/* harmony export */   "uu": () => (/* binding */ requete)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const requete = {
    admin: "http://localhost:7200/v1/admin"
};
const getAdminRole = async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${requete.admin}/admin_total_role`);
    return res;
};
const getGuideAll = async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${requete.admin}/get_all_guides`);
    return res;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;