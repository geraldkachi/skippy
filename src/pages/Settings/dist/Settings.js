"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var Switch_1 = require("../../components/switch/Switch");
require("./settings.css");
var Settings = function () {
    // const {data} = useCreateAdminMutation()
    var _a = react_1.useState(""), firstName = _a[0], setFirstName = _a[1];
    var _b = react_1.useState(""), lastName = _b[0], setLastName = _b[1];
    var _c = react_1.useState(""), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(""), mobile = _d[0], setMobile = _d[1];
    var _e = react_1.useState("Finances and billing"), roles = _e[0], setRoles = _e[1];
    var selectSTyle = {
        display: "block",
        width: "100%",
        borderRadius: "0.25rem",
        borderWidth: "2px",
        borderOpacity: 1,
        borderColor: "rgba(229, 231, 235, 1)",
        // --tw-bg-opacity: 1,
        backgroundColor: "rgba(243, 244, 246, 1)",
        padding: "0.5rem",
        outlineOffset: "2px",
        outlineWidth: 1,
        outlineColor: "transparent",
        outlineStyle: "solid"
    };
    var navigate = react_router_dom_1.useNavigate();
    var HandleSubmit = function (e) {
        e.preventDefault();
        // setFirstName()
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "h-full px-10 mx-auto flex justify-center items-center max-w-[1000px]", onSubmit: HandleSubmit },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center justify-between my-5 " },
                    React.createElement("h1", { className: "text-[#282828] text-3xl text-semibold" }, "Create Administrator"),
                    React.createElement(react_router_dom_1.Link, { to: "", onClick: function () { return navigate(-1); }, className: "text-[#516CF5]" }, "< < Back")),
                React.createElement("div", { className: "card-settings" },
                    React.createElement("div", { className: "contactUs-form-lable" },
                        React.createElement("label", { htmlFor: "", className: "text-xs text-[#516CF5]" },
                            ("ROLE"),
                            React.createElement("p", { className: "text-[#EB0000] inline" }, "*")),
                        React.createElement("select", { 
                            // style={selectSTyle}
                            name: "", id: "", className: "bg-white text-[#949AB1] border-[#949AB1] outline-none border-2 rounded p-2 mb-3 w-full", onChange: function (e) {
                                var _a;
                                var select = e.target;
                                setRoles((_a = select.options.item(select.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText);
                            } },
                            React.createElement("option", { value: "super-admin" }, ("Super Admin")),
                            React.createElement("option", { value: "normal" }, ("Normal Admin")),
                            React.createElement("option", { value: "Manager" }, ("Regular Admin")),
                            React.createElement("option", { value: "account" }, ("Bad Admin")),
                            React.createElement("option", { value: "other" }, ("Other")))),
                    React.createElement("div", { className: "grid md:grid-cols-2 gap-x-4 " },
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            labelStyle: "", divStyel: "lable w-full", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("FIRST NAME"), name: "Firstname", placeholder: ("First Name"), value: firstName, onChange: function (e) { return setFirstName(e.target.value); } }),
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("SURNAME"), name: "surname", placeholder: ("User Name"), value: lastName, onChange: function (e) { return setLastName(e.target.value); } })),
                    React.createElement("div", { className: "" },
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("EMAIL"), name: "email", placeholder: ("admin@skippy.com"), type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); } }),
                        React.createElement(Input_1["default"]
                        // divStyel="w-[19rem]contactUs-form-lable"
                        , { 
                            // divStyel="w-[19rem]contactUs-form-lable"
                            divStyel: "contactUs-form-lable", className: "border-[#949AB1] border-1 rounded p-2 my-3 w-full", label: ("MOBILE NUMBER"), name: "mobile", placeholder: ("09039278115"), type: "tel", value: mobile, onChange: function (e) { return setMobile(e.target.value); } }),
                        React.createElement(Switch_1["default"], { label: "Activate Account" }),
                        React.createElement(Button_1["default"], { className: "mt-[2.5rem] mb-[2.36rem] capitalize", text: "Save Changes", type: "submit" })))))));
};
exports["default"] = Settings;
