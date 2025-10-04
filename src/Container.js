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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var Container = function (_a) {
    var label = _a.label, heading = _a.heading;
    var getResponsiveFontSize = function (text) {
        var baseSize = 42;
        var minSize = 8;
        var containerWidth = 290;
        var words = text.split(/\s+/);
        var longestWord = words.reduce(function (a, b) { return (a.length > b.length ? a : b); }, "");
        var charWidth = baseSize * 0.6;
        var longestWordWidth = longestWord.length * charWidth;
        if (longestWordWidth <= containerWidth) {
            return baseSize;
        }
        var calculatedSize = containerWidth / longestWord.length / 0.6;
        var finalSize = Math.max(minSize, Math.min(baseSize, calculatedSize));
        return "clamp(" + minSize + "px, " + finalSize + "px, " + baseSize + "px)";
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "label" }, { children: label }), void 0), (0, jsx_runtime_1.jsx)("h1", __assign({ style: { fontSize: getResponsiveFontSize(heading) } }, { children: heading }), void 0)] }), void 0));
};
exports["default"] = Container;
