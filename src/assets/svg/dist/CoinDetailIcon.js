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
var React = require("react");
var CoinDetailIcon = function (props) { return (React.createElement("svg", __assign({ width: 33, height: 28, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.915 5.44c-.08-2.644-4.128-4.774-9.108-4.774-4.998 0-9.051 2.145-9.108 4.801v2.738c.01.604.305 1.178.825 1.694l-.074-.02a9.541 9.541 0 0 0-2.503-.332C4.855 9.547.71 13.537.71 18.44c0 4.854 4.062 8.814 9.085 8.892l.152.002h.058a9.425 9.425 0 0 0 5.339-1.681c1.57.587 3.58.939 5.77.939 5.03 0 9.109-1.857 9.109-4.147v-2.126l.041-.022c1.369-.725 2.196-1.669 2.196-2.7v-2.689c-.007-.62-.237-1.215-.646-1.76l.003-.043c.003-.043.005-.086.005-.129v-2.686c-.014-1.107-.724-2.125-1.906-2.939V5.52l-.001-.08Zm-24.67 8.537a6.78 6.78 0 0 1 4.702-1.875c1.763 0 3.454.675 4.701 1.875a6.283 6.283 0 0 1 1.948 4.527c0 1.697-.7 3.325-1.947 4.525a6.781 6.781 0 0 1-4.701 1.876 6.78 6.78 0 0 1-4.702-1.875A6.283 6.283 0 0 1 3.3 18.504c0-1.698.7-3.326 1.947-4.527Zm4.519-.838a.406.406 0 0 1 .284.102.377.377 0 0 1 .124.25l.001.017v.014c.157.006.313.019.468.038l.067.009v-.014a.381.381 0 0 1 .175-.238.409.409 0 0 1 .3-.05c.348.076.69.184 1.017.323.196.083.287.3.208.49l-.005.014a.01.01 0 0 1-.003.003l-.002.005c.139.07.274.147.406.23l.056.036c.003-.001.004-.003.005-.004v-.002a.408.408 0 0 1 .557-.064c.28.215.538.455.77.717a.373.373 0 0 1-.03.527l-.013.01h-.004c.093.123.18.249.26.378l.035.056a.403.403 0 0 1 .525.18c.157.31.281.634.372.967a.38.38 0 0 1-.282.467c.033.17.056.341.07.514a.39.39 0 0 1 .396.368v.024c0 .345-.034.688-.102 1.026a.393.393 0 0 1-.464.302c-.042.146-.09.29-.146.432l-.025.06h.004c.196.092.28.32.185.51-.156.31-.342.605-.556.881a.404.404 0 0 1-.54.087l-.015-.01-.005-.003c-.118.13-.243.254-.374.372a.372.372 0 0 1-.058.54c-.28.215-.58.404-.897.564a.41.41 0 0 1-.302.026.393.393 0 0 1-.225-.173l-.008-.015-.004-.008a5.157 5.157 0 0 1-.505.177.381.381 0 0 1-.295.468 5.75 5.75 0 0 1-.995.129l-.067.002h-.013a.39.39 0 0 1-.396-.385 5.32 5.32 0 0 1-.467-.04l-.067-.01v.017a.393.393 0 0 1-.474.288 5.696 5.696 0 0 1-1.017-.324.387.387 0 0 1-.21-.212.368.368 0 0 1 .008-.292l.002-.004.005-.008a.015.015 0 0 0 .003-.007 5.088 5.088 0 0 1-.457-.268.407.407 0 0 1-.57.079 5.532 5.532 0 0 1-.77-.717.373.373 0 0 1 .03-.527l.014-.011.021-.016a5.078 5.078 0 0 1-.257-.376l-.033-.055-.026.013a.413.413 0 0 1-.173.038.398.398 0 0 1-.356-.215 5.202 5.202 0 0 1-.372-.968.38.38 0 0 1 .272-.46l.014-.003.002-.001a.108.108 0 0 1 .028-.005 4.697 4.697 0 0 1-.06-.448l-.006-.065h-.031a.39.39 0 0 1-.396-.368v-.02c0-.34.033-.682.1-1.017a.395.395 0 0 1 .449-.305l.013.002.03.007c.041-.145.09-.288.144-.429l.024-.06-.028-.01a.376.376 0 0 1-.191-.497l.006-.013a5.35 5.35 0 0 1 .555-.882.409.409 0 0 1 .575-.061c.103-.113.21-.222.323-.327l.048-.044-.017-.019a.372.372 0 0 1 .062-.536c.279-.216.579-.404.896-.564a.404.404 0 0 1 .544.179c.164-.069.332-.129.502-.18 0-.004-.002-.006-.003-.009a.369.369 0 0 1 .047-.298.396.396 0 0 1 .248-.169 5.84 5.84 0 0 1 1.062-.132Zm8.183 9.742a8.7 8.7 0 0 0 .789-1.708c1.353.364 2.93.573 4.615.573 1.638 0 3.175-.197 4.503-.542-1.182 1.186-3.755 2.008-6.74 2.008a14.79 14.79 0 0 1-3.168-.331Zm12.838-7.985c-1.523 1.324-4.566 2.226-8.072 2.226a18.746 18.746 0 0 1-3.695-.356c.066.329.112.66.138.994 1.174.376 2.59.6 4.117.606h.078c4.103 0 7.43-1.553 7.434-3.47Zm-1.087-5.819.002-.002.021.028c.277.364.429.755.429 1.163 0 1.919-3.329 3.475-7.434 3.475-2.604 0-4.894-.626-6.222-1.573a9.865 9.865 0 0 0-.55-.49c1.407.405 3.076.64 4.865.64 4.347.002 7.983-1.385 8.89-3.24Zm-8.891-7.083c-4.106 0-7.434 1.555-7.434 3.473 0 1.919 3.328 3.474 7.434 3.474s7.434-1.555 7.434-3.474c0-1.918-3.329-3.473-7.434-3.473Zm.405.995c-.338-.008-.68-.007-1.009.005l-.014.001a.387.387 0 0 0-.366.396v.007l-.105.006c-.14.01-.277.021-.412.035v-.006a.394.394 0 0 0-.445-.328c-.347.045-.684.102-1.001.17a.382.382 0 0 0-.301.455v.008l-.065.017c-.15.04-.295.08-.433.125l-.004-.01-.007-.016a.39.39 0 0 0-.206-.193.41.41 0 0 0-.303-.002 4.445 4.445 0 0 0-.95.493.372.372 0 0 0-.085.534l.025.027-.021.021c-.108.114-.19.249-.24.396a.397.397 0 0 0-.35.174.371.371 0 0 0-.054.288c.08.35.327.673.735.96l.015.01a.409.409 0 0 0 .539-.093l.005-.007a.203.203 0 0 0 .01-.014c.15.08.307.152.467.215l-.001.004-.004.007c-.072.2.038.417.245.486.325.106.656.195.991.266a.394.394 0 0 0 .473-.29v-.008l.083.014c.14.023.283.045.43.065v.005l-.002.018a.372.372 0 0 0 .087.263.4.4 0 0 0 .266.14c.33.033.667.057 1.008.069H20.242a.39.39 0 0 0 .382-.368V7.33h.262c.085 0 .171-.001.257-.005a.03.03 0 0 0 0 .006v.014a.39.39 0 0 0 .396.35h.022l.113-.007c.303-.017.603-.042.893-.075a.385.385 0 0 0 .347-.425v-.006L23 7.168c.145-.022.287-.046.424-.073v.008l.004.014a.395.395 0 0 0 .474.268c.336-.076.667-.17.991-.285a.378.378 0 0 0 .233-.491l-.003-.006-.003-.006a4.22 4.22 0 0 0 .458-.233.407.407 0 0 0 .577.07c.295-.24.453-.48.533-.692l.012-.034c.016-.045.028-.089.037-.131l.006-.031.003-.016.005-.03.004-.03.001-.014.003-.029v-.014l.002-.027.001-.04v-.031a.39.39 0 0 0-.396-.36h-.008l-.02.001a.404.404 0 0 0-.075.012 1.373 1.373 0 0 0-.32-.382l.012-.014.006-.008a.373.373 0 0 0-.12-.528 5.125 5.125 0 0 0-.959-.445.41.41 0 0 0-.303.01.387.387 0 0 0-.207.215c0 .004 0 .007-.003.01a9.766 9.766 0 0 0-.5-.132v-.007l.003-.018a.368.368 0 0 0-.061-.27.397.397 0 0 0-.252-.163c-.32-.063-.657-.115-1.003-.155l-.018-.001a.409.409 0 0 0-.274.08.38.38 0 0 0-.148.255v.006l-.103-.008c-.137-.011-.275-.02-.415-.028v-.021a.375.375 0 0 0-.108-.256.403.403 0 0 0-.278-.12Z", fill: "url(#a)" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "a", x1: -6.845, y1: 0.797, x2: -2.499, y2: 30.157, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { stopColor: "#FFF6AF" }),
            React.createElement("stop", { offset: 1, stopColor: "#FFCD56" }))))); };
exports["default"] = CoinDetailIcon;