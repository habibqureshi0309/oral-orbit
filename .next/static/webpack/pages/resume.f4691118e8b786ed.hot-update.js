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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/main.module.css */ \"./src/styles/main.module.css\");\n/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ \"./src/components/text.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FileUpload = (param)=>{\n    let { onFileRemove } = param;\n    _s();\n    const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onDrop = (acceptedFiles)=>{\n        const newFiles = acceptedFiles.map((file)=>({\n                file,\n                preview: URL.createObjectURL(file),\n                size: file.size\n            }));\n        setUploadedFiles((prevFiles)=>[\n                ...prevFiles,\n                ...newFiles\n            ]);\n    };\n    const removeFile = (index)=>{\n        const updatedFiles = [\n            ...uploadedFiles\n        ];\n        updatedFiles.splice(index, 1);\n        setUploadedFiles(updatedFiles);\n        if (onFileRemove) {\n            onFileRemove(uploadedFiles[index]);\n        }\n    };\n    const filesContainerStyle = {\n        display: \"flex\",\n        marginTop: \"20px\",\n        padding: \"10px\",\n        borderRadius: \"20px\",\n        border: (uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.length) ? \"0.25px solid var(--Primary-Purple, lightgray)\" : \"0\",\n        background: (uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.length) ? \"#F5F5FA\" : \"\",\n        boxShadow: (uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.length) ? \"-10px -10px 20px 0px #FFF inset, 10px 5px 21px 0px rgba(170, 170, 204, 0.20) inset\" : \"\",\n        justifyContent: \"center\"\n    };\n    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone)({\n        onDrop\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ...getRootProps(),\n                style: dropzoneStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...getInputProps()\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Upload your resume\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().textCenter), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().mt50), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().w40), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().marginAuto), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().displayBlock)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: \"You can either upload your resume here or use the information you have currently entered\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: filesContainerStyle,\n                className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().mt50),\n                children: uploadedFiles.map((file, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: fileContainerStyle,\n                        className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().displayFlex),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/assets/file.svg\",\n                                alt: \"File \".concat(index),\n                                className: \"\".concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().filePreviewStyle), \" \").concat((_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().marginAuto)),\n                                layout: \"fill\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_5___default().ml10),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: file === null || file === void 0 ? void 0 : file.preview,\n                                        style: {\n                                            whiteSpace: \"nowrap\",\n                                            fontSize: \"16px\",\n                                            lineHeight: \"15px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        text: \"\".concat(file === null || file === void 0 ? void 0 : file.size, \"KB\"),\n                                        style: {\n                                            fontSize: \"12px\",\n                                            lineHeight: \"12px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\oral-orbit\\\\src\\\\components\\\\fileUpload.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FileUpload, \"YUVBaZnyjcPRfpsSO/DeyLi+cz0=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone\n    ];\n});\n_c = FileUpload;\nconst dropzoneStyle = {\n    border: \"2px dashed #cccccc\",\n    borderRadius: \"4px\",\n    padding: \"20px\",\n    textAlign: \"center\",\n    cursor: \"pointer\"\n};\nconst fileContainerStyle = {\n    marginRight: \"10px\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileUpload);\nvar _c;\n$RefreshReg$(_c, \"FileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQVdBOzs7S0FqQ2pESTtBQWtFTixNQUFNZ0MsZ0JBQWdCO0lBQ2xCVCxRQUFRO0lBQ1JELGNBQWM7SUFDZEQsU0FBUztJQUNUZ0MsV0FBVztJQUNYQyxRQUFRO0FBQ1o7QUFFQSxNQUFNWixxQkFBcUI7SUFDdkJhLGFBQWE7QUFDakI7QUFFQSwrREFBZXZELFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmlsZVVwbG9hZC5qcz83NTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvbWFpbi5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xyXG5cclxuY29uc3QgRmlsZVVwbG9hZCA9ICh7IG9uRmlsZVJlbW92ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbdXBsb2FkZWRGaWxlcywgc2V0VXBsb2FkZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Ecm9wID0gKGFjY2VwdGVkRmlsZXMpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdGaWxlcyA9IGFjY2VwdGVkRmlsZXMubWFwKChmaWxlKSA9PiAoe1xyXG4gICAgICAgICAgICBmaWxlLFxyXG4gICAgICAgICAgICBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxyXG4gICAgICAgICAgICBzaXplOiBmaWxlLnNpemVcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHNldFVwbG9hZGVkRmlsZXMoKHByZXZGaWxlcykgPT4gWy4uLnByZXZGaWxlcywgLi4ubmV3RmlsZXNdKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRmlsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWxlcyA9IFsuLi51cGxvYWRlZEZpbGVzXTtcclxuICAgICAgICB1cGRhdGVkRmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRVcGxvYWRlZEZpbGVzKHVwZGF0ZWRGaWxlcyk7XHJcbiAgICAgICAgaWYgKG9uRmlsZVJlbW92ZSkge1xyXG4gICAgICAgICAgICBvbkZpbGVSZW1vdmUodXBsb2FkZWRGaWxlc1tpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmlsZXNDb250YWluZXJTdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogdXBsb2FkZWRGaWxlcz8ubGVuZ3RoID8gJzAuMjVweCBzb2xpZCB2YXIoLS1QcmltYXJ5LVB1cnBsZSwgbGlnaHRncmF5KScgOiAnMCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogdXBsb2FkZWRGaWxlcz8ubGVuZ3RoID8gJyNGNUY1RkEnIDogJycsXHJcbiAgICAgICAgYm94U2hhZG93OiB1cGxvYWRlZEZpbGVzPy5sZW5ndGggPyAnLTEwcHggLTEwcHggMjBweCAwcHggI0ZGRiBpbnNldCwgMTBweCA1cHggMjFweCAwcHggcmdiYSgxNzAsIDE3MCwgMjA0LCAwLjIwKSBpbnNldCcgOiAnJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMgfSA9IHVzZURyb3B6b25lKHsgb25Ecm9wIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9IHN0eWxlPXtkcm9wem9uZVN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VXBsb2FkIHlvdXIgcmVzdW1lPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50ZXh0Q2VudGVyfSAke3N0eWxlcy5tdDUwfSAke3N0eWxlcy53NDB9ICR7c3R5bGVzLm1hcmdpbkF1dG99ICR7c3R5bGVzLmRpc3BsYXlCbG9ja31gfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9XCJZb3UgY2FuIGVpdGhlciB1cGxvYWQgeW91ciByZXN1bWUgaGVyZSBvciB1c2UgdGhlIGluZm9ybWF0aW9uIHlvdSBoYXZlIGN1cnJlbnRseSBlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpbGVzQ29udGFpbmVyU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLm10NTB9PlxyXG4gICAgICAgICAgICAgICAge3VwbG9hZGVkRmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e2ZpbGVDb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheUZsZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvZmlsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgRmlsZSAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5maWxlUHJldmlld1N0eWxlfSAke3N0eWxlcy5tYXJnaW5BdXRvfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWwxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0PXtmaWxlPy5wcmV2aWV3fSBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJywgZm9udFNpemU6ICcxNnB4JywgbGluZUhlaWdodDogJzE1cHgnIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9e2Ake2ZpbGU/LnNpemV9S0JgfSBzdHlsZT17e2ZvbnRTaXplOiAnMTJweCcsIGxpbmVIZWlnaHQ6ICcxMnB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfT5SZW1vdmU8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgZHJvcHpvbmVTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzJweCBkYXNoZWQgI2NjY2NjYycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG59O1xyXG5cclxuY29uc3QgZmlsZUNvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZURyb3B6b25lIiwic3R5bGVzIiwiSW1hZ2UiLCJUZXh0IiwiRmlsZVVwbG9hZCIsIm9uRmlsZVJlbW92ZSIsInVwbG9hZGVkRmlsZXMiLCJzZXRVcGxvYWRlZEZpbGVzIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsIm5ld0ZpbGVzIiwibWFwIiwiZmlsZSIsInByZXZpZXciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzaXplIiwicHJldkZpbGVzIiwicmVtb3ZlRmlsZSIsImluZGV4IiwidXBkYXRlZEZpbGVzIiwic3BsaWNlIiwiZmlsZXNDb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwibGVuZ3RoIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsImp1c3RpZnlDb250ZW50IiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImRpdiIsInN0eWxlIiwiZHJvcHpvbmVTdHlsZSIsImlucHV0IiwicCIsImNsYXNzTmFtZSIsInRleHRDZW50ZXIiLCJtdDUwIiwidzQwIiwibWFyZ2luQXV0byIsImRpc3BsYXlCbG9jayIsInRleHQiLCJmaWxlQ29udGFpbmVyU3R5bGUiLCJkaXNwbGF5RmxleCIsInNyYyIsImFsdCIsImZpbGVQcmV2aWV3U3R5bGUiLCJsYXlvdXQiLCJwcmlvcml0eSIsIm1sMTAiLCJ3aGl0ZVNwYWNlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/fileUpload.js\n"));

/***/ })

});