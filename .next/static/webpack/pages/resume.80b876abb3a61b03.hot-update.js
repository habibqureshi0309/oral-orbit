"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./src/components/fileUpload.js":
/*!**************************************!*\
  !*** ./src/components/fileUpload.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/main.module.css */ \"./src/styles/main.module.css\");\n/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ \"./src/components/text.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FileUpload = (param)=>{\n    let { onFileRemove } = param;\n    _s();\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onDrop = (acceptedFiles)=>{\n        const newFiles = acceptedFiles.map((file)=>({\n                file,\n                preview: URL.createObjectURL(file),\n                size: file.size\n            }));\n        setUploadedFiles((prevFiles)=>[\n                ...prevFiles,\n                ...newFiles\n            ]);\n    };\n    const removeFile = (index)=>{\n        const updatedFiles = [\n            ...uploadedFiles\n        ];\n        updatedFiles.splice(index, 1);\n        setUploadedFiles(updatedFiles);\n        if (onFileRemove) {\n            onFileRemove(uploadedFiles[index]);\n        }\n    };\n    const filesContainerStyle = {\n        display: \"flex\",\n        marginTop: \"20px\",\n        padding: \"10px\",\n        borderRadius: \"20px\",\n        border: (uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.length) ? \"0.25px solid var(--Primary-Purple, lightgray)\" : \"0\",\n        background: (uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.length) ? \"#F5F5FA\" : \"\",\n        boxShadow: (uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.length) ? \"-10px -10px 20px 0px #FFF inset, 10px 5px 21px 0px rgba(170, 170, 204, 0.20) inset\" : \"\",\n        justifyContent: \"center\"\n    };\n    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone)({\n        onDrop\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ...getRootProps(),\n                style: dropzoneStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...getInputProps()\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Upload your resume\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().textCenter), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().mt20), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().w40), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().marginAuto), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().displayBlock)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: \"You can either upload your resume here or use the information you have currently entered\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: filesContainerStyle,\n                children: uploadedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: fileContainerStyle,\n                        className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().displayFlex),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/assets/file.svg\",\n                                alt: \"File \".concat(index),\n                                className: \"\".concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().filePreviewStyle), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().marginAuto)),\n                                layout: \"fill\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().ml10),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: file === null || file === void 0 ? void 0 : file.preview,\n                                        style: {\n                                            whiteSpace: \"nowrap\",\n                                            fontSize: \"16px\",\n                                            lineHeight: \"15px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"\".concat(file === null || file === void 0 ? void 0 : file.size, \"KB\"),\n                                        style: {\n                                            fontSize: \"12px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FileUpload, \"YUVBaZnyjcPRfpsSO/DeyLi+cz0=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone\n    ];\n});\n_c = FileUpload;\nconst dropzoneStyle = {\n    border: \"2px dashed #cccccc\",\n    borderRadius: \"4px\",\n    padding: \"20px\",\n    textAlign: \"center\",\n    cursor: \"pointer\"\n};\nconst fileContainerStyle = {\n    marginRight: \"10px\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileUpload);\nvar _c;\n$RefreshReg$(_c, \"FileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0I7SUFDbEJULFFBQVE7SUFDUkQsY0FBYztJQUNkRCxTQUFTO0lBQ1RnQyxXQUFXO0lBQ1hDLFFBQVE7QUFDWjtBQUVBLE1BQU1aLHFCQUFxQjtJQUN2QmEsYUFBYTtBQUNqQjtBQUVBLCtEQUFldkQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9maWxlVXBsb2FkLmpzPzc1MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9tYWluLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKHsgb25GaWxlUmVtb3ZlIH0pID0+IHtcclxuICAgIGNvbnN0IFt1cGxvYWRlZEZpbGVzLCBzZXRVcGxvYWRlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkRyb3AgPSAoYWNjZXB0ZWRGaWxlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gYWNjZXB0ZWRGaWxlcy5tYXAoKGZpbGUpID0+ICh7XHJcbiAgICAgICAgICAgIGZpbGUsXHJcbiAgICAgICAgICAgIHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXHJcbiAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlcygocHJldkZpbGVzKSA9PiBbLi4ucHJldkZpbGVzLCAuLi5uZXdGaWxlc10pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVGaWxlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpbGVzID0gWy4uLnVwbG9hZGVkRmlsZXNdO1xyXG4gICAgICAgIHVwZGF0ZWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNldFVwbG9hZGVkRmlsZXModXBkYXRlZEZpbGVzKTtcclxuICAgICAgICBpZiAob25GaWxlUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIG9uRmlsZVJlbW92ZSh1cGxvYWRlZEZpbGVzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmaWxlc0NvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgYm9yZGVyOiB1cGxvYWRlZEZpbGVzPy5sZW5ndGggPyAnMC4yNXB4IHNvbGlkIHZhcigtLVByaW1hcnktUHVycGxlLCBsaWdodGdyYXkpJyA6ICcwJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cGxvYWRlZEZpbGVzPy5sZW5ndGggPyAnI0Y1RjVGQScgOiAnJyxcclxuICAgICAgICBib3hTaGFkb3c6IHVwbG9hZGVkRmlsZXM/Lmxlbmd0aCA/ICctMTBweCAtMTBweCAyMHB4IDBweCAjRkZGIGluc2V0LCAxMHB4IDVweCAyMXB4IDBweCByZ2JhKDE3MCwgMTcwLCAyMDQsIDAuMjApIGluc2V0JyA6ICcnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoeyBvbkRyb3AgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0gc3R5bGU9e2Ryb3B6b25lU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8cD5VcGxvYWQgeW91ciByZXN1bWU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRleHRDZW50ZXJ9ICR7c3R5bGVzLm10MjB9ICR7c3R5bGVzLnc0MH0gJHtzdHlsZXMubWFyZ2luQXV0b30gJHtzdHlsZXMuZGlzcGxheUJsb2NrfWB9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dD1cIllvdSBjYW4gZWl0aGVyIHVwbG9hZCB5b3VyIHJlc3VtZSBoZXJlIG9yIHVzZSB0aGUgaW5mb3JtYXRpb24geW91IGhhdmUgY3VycmVudGx5IGVudGVyZWRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmlsZXNDb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7dXBsb2FkZWRGaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17ZmlsZUNvbnRhaW5lclN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5RmxleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9maWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BGaWxlICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZpbGVQcmV2aWV3U3R5bGV9ICR7c3R5bGVzLm1hcmdpbkF1dG99YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tbDEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9e2ZpbGU/LnByZXZpZXd9IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCBmb250U2l6ZTogJzE2cHgnLCBsaW5lSGVpZ2h0OiAnMTVweCcgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dD17YCR7ZmlsZT8uc2l6ZX1LQmB9IHN0eWxlPXt7Zm9udFNpemU6ICcxMnB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfT5SZW1vdmU8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgZHJvcHpvbmVTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzJweCBkYXNoZWQgI2NjY2NjYycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG59O1xyXG5cclxuY29uc3QgZmlsZUNvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZURyb3B6b25lIiwic3R5bGVzIiwiSW1hZ2UiLCJUZXh0IiwiRmlsZVVwbG9hZCIsIm9uRmlsZVJlbW92ZSIsInVwbG9hZGVkRmlsZXMiLCJzZXRVcGxvYWRlZEZpbGVzIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsIm5ld0ZpbGVzIiwibWFwIiwiZmlsZSIsInByZXZpZXciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzaXplIiwicHJldkZpbGVzIiwicmVtb3ZlRmlsZSIsImluZGV4IiwidXBkYXRlZEZpbGVzIiwic3BsaWNlIiwiZmlsZXNDb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwibGVuZ3RoIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsImp1c3RpZnlDb250ZW50IiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImRpdiIsInN0eWxlIiwiZHJvcHpvbmVTdHlsZSIsImlucHV0IiwicCIsImNsYXNzTmFtZSIsInRleHRDZW50ZXIiLCJtdDIwIiwidzQwIiwibWFyZ2luQXV0byIsImRpc3BsYXlCbG9jayIsInRleHQiLCJmaWxlQ29udGFpbmVyU3R5bGUiLCJkaXNwbGF5RmxleCIsInNyYyIsImFsdCIsImZpbGVQcmV2aWV3U3R5bGUiLCJsYXlvdXQiLCJwcmlvcml0eSIsIm1sMTAiLCJ3aGl0ZVNwYWNlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/fileUpload.js\n"));

/***/ })

});