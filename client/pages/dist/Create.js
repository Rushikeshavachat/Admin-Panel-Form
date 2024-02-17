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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var firebase_1 = require("../lib/firebase");
var CreatePage = function () {
    var _a = react_1.useState({
        name: '',
        contact: '',
        id: "",
        address: ''
    }), formData = _a[0], setFormData = _a[1];
    var router = router_1.useRouter();
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var docRef, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, firebase_1.firestore.collection('data').add(formData)];
                case 2:
                    docRef = _a.sent();
                    console.log('Document written with ID: ', docRef.id);
                    router.push('/');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error adding document: ', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "container mx-auto mt-8 w-full max-w-lg relative" },
        React.createElement("h1", { className: "text-2xl font-bold mb-4 text-center text-sky-600 leading-10 underline md:underline-offset-8 md:text-sky-800" }, "User Registration Admin Panel Form"),
        React.createElement("form", { className: "bg-white shadow-md rounded px-8 py-8  pt-6 pb-8 mb-4", onSubmit: handleSubmit },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "name", className: "block mt-6 font-extrabold text-2xl" }, "Name"),
                React.createElement("input", { type: "text", id: "name", value: formData.name, className: "border border-gray-300 rounded px-3 py-2 w-full", required: true, onChange: handleChange }),
                errors.name && React.createElement("p", { className: "text-red-500" }, errors.name)),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "id", className: "block mt-6 font-extrabold text-2xl" }, "ID"),
                React.createElement("input", { type: "text", id: "id", value: formData.id, className: "border border-gray-300 rounded px-3 py-2 w-full", required: true, onChange: handleChange }),
                errors.id && React.createElement("p", { className: "text-red-500" }, errors.id)),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "contact", className: "block mt-6 font-extrabold text-2xl" }, "Contact"),
                React.createElement("input", { type: "text", id: "contact", value: formData.contact, className: "border border-gray-300 rounded px-3 py-2 w-full", required: true, onChange: handleChange })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "address", className: "block mt-6 font-extrabold text-2xl " }, "Address"),
                React.createElement("input", { type: "text", id: "address", value: formData.address, className: "border border-gray-300 rounded px-3 py-2 w-full", required: true, onChange: handleChange }),
                errors.address && React.createElement("p", { className: "text-red-500" }, errors.address)),
            React.createElement("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10" }, "Submit"))));
};
exports["default"] = CreatePage;
