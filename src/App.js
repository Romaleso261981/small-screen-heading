"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.scss");
var Container_1 = __importDefault(require("./Container"));
var mocData_1 = require("./mocData");
var InterviewTask = function () {
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "desc" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Interview Test Task" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "info" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Challenge:" }, void 0), " Both containers are 320px wide and contain h1 headings with font-size: 42px."] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Your task:" }, void 0), " Create a flexible solution that would prevent the heading from causing horizontal overflow while keeping the font size as large as possible. The text should be resized to fit within the container."] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Current state:" }, void 0), " Container 2 and 3 have horizontal scroll due to long words."] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("strong", { children: "Requirements:" }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Each container is 320px wide" }, void 0), (0, jsx_runtime_1.jsx)("li", { children: "No horizontal scrolling should occur" }, void 0), (0, jsx_runtime_1.jsxs)("li", { children: ["Do not use ", (0, jsx_runtime_1.jsx)("code", { children: "word-wrap: break-word" }, void 0), " or", " ", (0, jsx_runtime_1.jsx)("code", { children: "overflow-wrap: break-word" }, void 0), " or any CSS that would make the word break"] }, void 0)] }, void 0)] }), void 0), mocData_1.containers.map(function (_a) {
                var label = _a.label, heading = _a.heading;
                return ((0, jsx_runtime_1.jsx)(Container_1["default"], { label: label, heading: heading }, label));
            })] }, void 0));
};
exports["default"] = InterviewTask;
