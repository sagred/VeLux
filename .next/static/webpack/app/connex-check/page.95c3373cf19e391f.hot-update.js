"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/connex-check/page",{

/***/ "(app-pages-browser)/./app/connex-check/page.tsx":
/*!***********************************!*\
  !*** ./app/connex-check/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleComponentWithConnex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vechain_connex_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vechain/connex-driver */ \"(app-pages-browser)/./node_modules/@vechain/connex-driver/esm/simple-net.js\");\n/* harmony import */ var _vechain_connex_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vechain/connex-driver */ \"(app-pages-browser)/./node_modules/@vechain/connex-driver/esm/driver.js\");\n/* harmony import */ var _vechain_connex_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vechain/connex-framework */ \"(app-pages-browser)/./node_modules/@vechain/connex-framework/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst abi = [\n    {\n        inputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"constructor\"\n    },\n    {\n        anonymous: false,\n        inputs: [\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"owner\",\n                type: \"address\"\n            },\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"approved\",\n                type: \"address\"\n            },\n            {\n                indexed: true,\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"Approval\",\n        type: \"event\"\n    },\n    {\n        anonymous: false,\n        inputs: [\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"owner\",\n                type: \"address\"\n            },\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"operator\",\n                type: \"address\"\n            },\n            {\n                indexed: false,\n                internalType: \"bool\",\n                name: \"approved\",\n                type: \"bool\"\n            }\n        ],\n        name: \"ApprovalForAll\",\n        type: \"event\"\n    },\n    {\n        anonymous: false,\n        inputs: [\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"from\",\n                type: \"address\"\n            },\n            {\n                indexed: true,\n                internalType: \"address\",\n                name: \"to\",\n                type: \"address\"\n            },\n            {\n                indexed: true,\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"Transfer\",\n        type: \"event\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"to\",\n                type: \"address\"\n            },\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"approve\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"owner\",\n                type: \"address\"\n            }\n        ],\n        name: \"balanceOf\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"burn\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"string\",\n                name: \"tokenURI\",\n                type: \"string\"\n            }\n        ],\n        name: \"createToken\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"getApproved\",\n        outputs: [\n            {\n                internalType: \"address\",\n                name: \"\",\n                type: \"address\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"owner\",\n                type: \"address\"\n            },\n            {\n                internalType: \"address\",\n                name: \"operator\",\n                type: \"address\"\n            }\n        ],\n        name: \"isApprovedForAll\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"name\",\n        outputs: [\n            {\n                internalType: \"string\",\n                name: \"\",\n                type: \"string\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"ownerOf\",\n        outputs: [\n            {\n                internalType: \"address\",\n                name: \"\",\n                type: \"address\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"from\",\n                type: \"address\"\n            },\n            {\n                internalType: \"address\",\n                name: \"to\",\n                type: \"address\"\n            },\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"safeTransferFrom\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"from\",\n                type: \"address\"\n            },\n            {\n                internalType: \"address\",\n                name: \"to\",\n                type: \"address\"\n            },\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            },\n            {\n                internalType: \"bytes\",\n                name: \"data\",\n                type: \"bytes\"\n            }\n        ],\n        name: \"safeTransferFrom\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"operator\",\n                type: \"address\"\n            },\n            {\n                internalType: \"bool\",\n                name: \"approved\",\n                type: \"bool\"\n            }\n        ],\n        name: \"setApprovalForAll\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"bytes4\",\n                name: \"interfaceId\",\n                type: \"bytes4\"\n            }\n        ],\n        name: \"supportsInterface\",\n        outputs: [\n            {\n                internalType: \"bool\",\n                name: \"\",\n                type: \"bool\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"symbol\",\n        outputs: [\n            {\n                internalType: \"string\",\n                name: \"\",\n                type: \"string\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"tokenCounter\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"tokenURI\",\n        outputs: [\n            {\n                internalType: \"string\",\n                name: \"\",\n                type: \"string\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"tokenURIs\",\n        outputs: [\n            {\n                internalType: \"string\",\n                name: \"\",\n                type: \"string\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [\n            {\n                internalType: \"address\",\n                name: \"from\",\n                type: \"address\"\n            },\n            {\n                internalType: \"address\",\n                name: \"to\",\n                type: \"address\"\n            },\n            {\n                internalType: \"uint256\",\n                name: \"tokenId\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"transferFrom\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    }\n];\nfunction SimpleComponentWithConnex() {\n    _s();\n    const [connexInstance, setConnexInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function setupConnex() {\n        const network = new _vechain_connex_driver__WEBPACK_IMPORTED_MODULE_2__.SimpleNet(\"https://vethor-node-test.vechaindev.com/\");\n        const driver = await _vechain_connex_driver__WEBPACK_IMPORTED_MODULE_3__.Driver.connect(network);\n        const connex = new _vechain_connex_framework__WEBPACK_IMPORTED_MODULE_4__.Framework(driver);\n        setConnexInstance(connex);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setupConnex().then(()=>{\n            var _connexInstance;\n            console.log(\"Connex is ready\");\n            setAccount((_connexInstance = connexInstance) === null || _connexInstance === void 0 ? void 0 : _connexInstance.thor.account(\"0x3c897d3b12a828A33CD0467a131459DB9b5548A1\"));\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"hello\"\n            }, void 0, false, {\n                fileName: \"/Users/eswar/Desktop/vechain-hack/VeLux/app/connex-check/page.tsx\",\n                lineNumber: 436,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/eswar/Desktop/vechain-hack/VeLux/app/connex-check/page.tsx\",\n            lineNumber: 435,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(SimpleComponentWithConnex, \"K5BSTXdh/hdtSoris9KJ27Ui/VM=\");\n_c = SimpleComponentWithConnex;\nvar _c;\n$RefreshReg$(_c, \"SimpleComponentWithConnex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb25uZXgtY2hlY2svcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS3FEO0FBQ007QUFDTDtBQUV0RCxNQUFNSyxNQUFNO0lBQ1Y7UUFDRUMsUUFBUSxFQUFFO1FBQ1ZDLGlCQUFpQjtRQUNqQkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUMsV0FBVztRQUNYSCxRQUFRO1lBQ047Z0JBQ0VJLFNBQVM7Z0JBQ1RDLGNBQWM7Z0JBQ2RDLE1BQU07Z0JBQ05KLE1BQU07WUFDUjtZQUNBO2dCQUNFRSxTQUFTO2dCQUNUQyxjQUFjO2dCQUNkQyxNQUFNO2dCQUNOSixNQUFNO1lBQ1I7WUFDQTtnQkFDRUUsU0FBUztnQkFDVEMsY0FBYztnQkFDZEMsTUFBTTtnQkFDTkosTUFBTTtZQUNSO1NBQ0Q7UUFDREksTUFBTTtRQUNOSixNQUFNO0lBQ1I7SUFDQTtRQUNFQyxXQUFXO1FBQ1hILFFBQVE7WUFDTjtnQkFDRUksU0FBUztnQkFDVEMsY0FBYztnQkFDZEMsTUFBTTtnQkFDTkosTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VFLFNBQVM7Z0JBQ1RDLGNBQWM7Z0JBQ2RDLE1BQU07Z0JBQ05KLE1BQU07WUFDUjtZQUNBO2dCQUNFRSxTQUFTO2dCQUNUQyxjQUFjO2dCQUNkQyxNQUFNO2dCQUNOSixNQUFNO1lBQ1I7U0FDRDtRQUNESSxNQUFNO1FBQ05KLE1BQU07SUFDUjtJQUNBO1FBQ0VDLFdBQVc7UUFDWEgsUUFBUTtZQUNOO2dCQUNFSSxTQUFTO2dCQUNUQyxjQUFjO2dCQUNkQyxNQUFNO2dCQUNOSixNQUFNO1lBQ1I7WUFDQTtnQkFDRUUsU0FBUztnQkFDVEMsY0FBYztnQkFDZEMsTUFBTTtnQkFDTkosTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VFLFNBQVM7Z0JBQ1RDLGNBQWM7Z0JBQ2RDLE1BQU07Z0JBQ05KLE1BQU07WUFDUjtTQUNEO1FBQ0RJLE1BQU07UUFDTkosTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUTtZQUNOO2dC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QTtRQUNFRixRQUFRO1lBQ047Z0JBQ0VLLGNBQWM7Z0JBQ2RDLE1BQU07Z0JBQ05KLE1BQU07WUFDUjtZQUNBO2dCQUNFRyxjQUFjO2dCQUNkQyxNQUFNO2dCQUNOSixNQUFNO1lBQ1I7WUFDQTtnQkFDRUcsY0FBYztnQkFDZEMsTUFBTTtnQkFDTkosTUFBTTtZQUNSO1NBQ0Q7UUFDREksTUFBTTtRQUNOQyxTQUFTLEVBQUU7UUFDWE4saUJBQWlCO1FBQ2pCQyxNQUFNO0lBQ1I7Q0FDRDtBQUVjLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQTtJQUNwRCxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUE7SUFDdEMsZUFBZWtCO1FBQ2IsTUFBTUMsVUFBVSxJQUFJakIsNkRBQVNBLENBQUM7UUFDOUIsTUFBTWtCLFNBQVMsTUFBTW5CLDBEQUFNQSxDQUFDb0IsT0FBTyxDQUFDRjtRQUNwQyxNQUFNRyxTQUFTLElBQUluQixnRUFBU0EsQ0FBQ2lCO1FBQzdCTCxrQkFBa0JPO0lBQ3BCO0lBRUF2QixnREFBU0EsQ0FBQztRQUNSbUIsY0FBY0ssSUFBSSxDQUFDO2dCQUdmVDtZQUZGVSxRQUFRQyxHQUFHLENBQUM7WUFDWlIsWUFDRUgsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCWSxJQUFJLENBQUNWLE9BQU8sQ0FDMUI7UUFHTjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDVztzQkFDQyw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7OztBQUlYO0dBNUJ3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Nvbm5leC1jaGVjay9wYWdlLnRzeD8xNzJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUHJvdmlkZXJXZWIzIH0gZnJvbSBcIkB2ZWNoYWluL3dlYjMtcHJvdmlkZXJzLWNvbm5leFwiO1xuaW1wb3J0IHsgV2ViMyB9IGZyb20gXCJ3ZWIzXCI7XG5cbmltcG9ydCB7IENvbm5leCB9IGZyb20gXCJAdmVjaGFpbi9jb25uZXhcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyaXZlciwgU2ltcGxlTmV0IH0gZnJvbSBcIkB2ZWNoYWluL2Nvbm5leC1kcml2ZXJcIjtcbmltcG9ydCB7IEZyYW1ld29yayB9IGZyb20gXCJAdmVjaGFpbi9jb25uZXgtZnJhbWV3b3JrXCI7XG5cbmNvbnN0IGFiaSA9IFtcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImNvbnN0cnVjdG9yXCIsXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcIm93bmVyXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJhcHByb3ZlZFwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwidG9rZW5JZFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcIkFwcHJvdmFsXCIsXG4gICAgdHlwZTogXCJldmVudFwiLFxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJvd25lclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwib3BlcmF0b3JcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJvb2xcIixcbiAgICAgICAgbmFtZTogXCJhcHByb3ZlZFwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcIkFwcHJvdmFsRm9yQWxsXCIsXG4gICAgdHlwZTogXCJldmVudFwiLFxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJmcm9tXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJ0b1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwidG9rZW5JZFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcIlRyYW5zZmVyXCIsXG4gICAgdHlwZTogXCJldmVudFwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwidG9cIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcInRva2VuSWRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJhcHByb3ZlXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJvd25lclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcImJhbGFuY2VPZlwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJ0b2tlbklkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwiYnVyblwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbmFtZTogXCJ0b2tlblVSSVwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwiY3JlYXRlVG9rZW5cIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwidG9rZW5JZFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcImdldEFwcHJvdmVkXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcIm93bmVyXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJvcGVyYXRvclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcImlzQXBwcm92ZWRGb3JBbGxcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJib29sXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYm9vbFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcIm5hbWVcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcInRva2VuSWRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJvd25lck9mXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcImZyb21cIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcInRvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJ0b2tlbklkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwic2FmZVRyYW5zZmVyRnJvbVwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiZnJvbVwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwidG9cIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcInRva2VuSWRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXNcIixcbiAgICAgICAgbmFtZTogXCJkYXRhXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcInNhZmVUcmFuc2ZlckZyb21cIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJvb2xcIixcbiAgICAgICAgbmFtZTogXCJhcHByb3ZlZFwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcInNldEFwcHJvdmFsRm9yQWxsXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzNFwiLFxuICAgICAgICBuYW1lOiBcImludGVyZmFjZUlkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXM0XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJzdXBwb3J0c0ludGVyZmFjZVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJvb2xcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJib29sXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwic3ltYm9sXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwidG9rZW5Db3VudGVyXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcInRva2VuSWRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbmFtZTogXCJ0b2tlblVSSVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5hbWU6IFwidG9rZW5VUklzXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJmcm9tXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJ0b1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwidG9rZW5JZFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiBcInRyYW5zZmVyRnJvbVwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlQ29tcG9uZW50V2l0aENvbm5leCgpIHtcbiAgY29uc3QgW2Nvbm5leEluc3RhbmNlLCBzZXRDb25uZXhJbnN0YW5jZV0gPSB1c2VTdGF0ZTxDb25uZXg+KCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgYXN5bmMgZnVuY3Rpb24gc2V0dXBDb25uZXgoKSB7XG4gICAgY29uc3QgbmV0d29yayA9IG5ldyBTaW1wbGVOZXQoXCJodHRwczovL3ZldGhvci1ub2RlLXRlc3QudmVjaGFpbmRldi5jb20vXCIpO1xuICAgIGNvbnN0IGRyaXZlciA9IGF3YWl0IERyaXZlci5jb25uZWN0KG5ldHdvcmspO1xuICAgIGNvbnN0IGNvbm5leCA9IG5ldyBGcmFtZXdvcmsoZHJpdmVyKTtcbiAgICBzZXRDb25uZXhJbnN0YW5jZShjb25uZXgpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXR1cENvbm5leCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJDb25uZXggaXMgcmVhZHlcIik7XG4gICAgICBzZXRBY2NvdW50KFxuICAgICAgICBjb25uZXhJbnN0YW5jZT8udGhvci5hY2NvdW50KFxuICAgICAgICAgIFwiMHgzYzg5N2QzYjEyYTgyOEEzM0NEMDQ2N2ExMzE0NTlEQjliNTU0OEExXCIsXG4gICAgICAgICksXG4gICAgICApO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+aGVsbG88L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyaXZlciIsIlNpbXBsZU5ldCIsIkZyYW1ld29yayIsImFiaSIsImlucHV0cyIsInN0YXRlTXV0YWJpbGl0eSIsInR5cGUiLCJhbm9ueW1vdXMiLCJpbmRleGVkIiwiaW50ZXJuYWxUeXBlIiwibmFtZSIsIm91dHB1dHMiLCJTaW1wbGVDb21wb25lbnRXaXRoQ29ubmV4IiwiY29ubmV4SW5zdGFuY2UiLCJzZXRDb25uZXhJbnN0YW5jZSIsImFjY291bnQiLCJzZXRBY2NvdW50Iiwic2V0dXBDb25uZXgiLCJuZXR3b3JrIiwiZHJpdmVyIiwiY29ubmVjdCIsImNvbm5leCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwidGhvciIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/connex-check/page.tsx\n"));

/***/ })

});