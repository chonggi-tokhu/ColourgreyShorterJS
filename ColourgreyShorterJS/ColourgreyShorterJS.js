var ColourgreyShorterJS = (function (parameter) { var { Arr, Str, Doc } = parameter; (typeof document == 'undefined') ? (function () { var document = new Doc(); })() : (function () { document = new Doc(); })(); globalThis['document'] = document; return { Arrtest: [0, ['a', 1], 'b'], StrTest: "Hello World!", newDoc: document, }; })((function () {
    function returnAllInAnArr(arr) {
        var rtv = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > 0) {
                var aderr = returnAllInAnArr(arr[i]);
                for (var ijk = 0; ijk < aderr.length; ijk++) {
                    rtv[rtv.length] = aderr[ijk];
                };
            } else {
                if (!Array.isArray(arr[i])) {
                    rtv[rtv.length] = arr[i];
                };
            };
        };
        return rtv;
    };
    Array.prototype.returnAllInOneArr = function () {
        var rtv = [];
        for (var i = 0; i < this.length; i++) {
            if (Array.isArray(this[i])) {
                if (this[i].length > 0) {
                    var aderr = this.returnAllInAnArr(arr[i]);
                    for (var ijk = 0; ijk < aderr.length; ijk++) {
                        rtv[rtv.length] = aderr[ijk];
                    };
                } else {
                    rtv[rtv.length] = null;
                };
            } else {
                rtv[rtv.length] = arr[i];
            };
        };
        return rtv;
    };
    String.prototype.splitByIdx = function (idx) {
        if (typeof idx == 'number' && !isNaN(idx)) {
            var rtv = [
                this.slice(0, idx - 1),
                this.slice(idx, this.length - 1),
            ];
            return rtv;
        };
        return this;
    };
    String.prototype.insertOn = function (texttoinsert, idx) {
        if (typeof idx == 'number' && !isNaN(idx)) {
            var rtv = this.slice(0, idx) + texttoinsert + this.slice(idx, this.length);
            return rtv;
        };
    };
    NodeList.prototype.toArray = function () {
        var rtv = [];
        for (var i = 0; i < this.length; i++) {
            rtv[rtv.length] = this.item(i);
        };
        return rtv;
    };
    HTMLCollection.prototype.toArray = function () {
        var rtv = [];
        for (var i = 0; i < this.length; i++) {
            rtv[rtv.length] = this.item(i);
        };
        return rtv;
    };
    HTMLElement.prototype.getElementsByAttrValue = function (attr, value) {
        var rtv = [];
        for (var i = 0; i < this.children.length; i++) {
            if (this.children.item(i).getAttribute(attr) == value) {
                rtv[rtv.length] = this.children.item(i);
            };
            if (this.children.item(i).children.length > 0) {
                rtv[rtv.length] = this.children.item(i).getElementsByAttrValue(attr, value);
            };
        };
        var rtv2 = returnAllInAnArr(rtv);
        return rtv2;
    };
    Document.prototype.getElementsByAttrValue = function (attr, value) {
        var rtv = [];
        for (var i = 0; i < this.children.length; i++) {
            if (this.children.item(i).getAttribute(attr) == value) {
                rtv[rtv.length] = this.children.item(i);

            };
            if (this.children.item(i).children.length > 0) {
                rtv[rtv.length] = this.children.item(i).getElementsByAttrValue(attr, value);
            };
        };
        var rtv2 = returnAllInAnArr(rtv);
        return rtv2;
    };
    HTMLElement.prototype.getElementById = function (IdParam) {
        if (typeof IdParam == 'string') {
            return this.getElementsByAttrValue("id", IdParam);
        } else {
            return null;
        };
    };
    HTMLElement.prototype.getEl_Id = function (IdParam) {
        var id = (typeof IdParam == 'string') ? IdParam : false;
        return (id != false) ? this.getElementById(IdParam) : null;
    };
    Document.prototype.getEl_Id = function (IdParam) {
        var id = (typeof IdParam == 'string') ? IdParam : false;
        return (id != false) ? this.getElementById(IdParam) : null;
    };
    HTMLElement.prototype.getEl_Class = function (classNameParam) {
        var className = (typeof classNameParam == 'string') ? classNameParam : false;
        return (className != false) ? this.getElementsByClassName(className) : null;
    };
    Document.prototype.getEl_Class = function (classNameParam) {
        var className = (typeof classNameParam == 'string') ? classNameParam : false;
        return (className != false) ? this.getElementsByClassName(className) : null;
    };
    HTMLElement.prototype.getEl_TagName = function (tagNameParam) {
        var tagName = (typeof tagNameParam == 'string') ? tagNameParam : false;
        return (tagName != false) ? this.getElementsByTagName(tagName) : null;
    };
    Document.prototype.getEl_TagName = function (tagNameParam) {
        var tagName = (typeof tagNameParam == 'string') ? tagNameParam : false;
        return (tagName != false) ? this.getElementsByTagName(tagName) : null;
    };
    HTMLElement.prototype.getEl_CSS_Selector = function (selectorParam) {
        var selector = (typeof selectorParam == 'string') ? selectorParam : false;
        return (selector != false) ? this.querySelectorAll(selectorParam) : null;
    };
    Document.prototype.getEl_CSS_Selector = function (selectorParam) {
        var selector = (typeof selectorParam == 'string') ? selectorParam : false;
        return (selector != false) ? this.querySelectorAll(selectorParam) : null;
    };
    HTMLElement.prototype.getEl_CSS = function (selectorParam) {
        var newnodelist = (typeof selectorParam == 'string') ? this.getEl_CSS_Selector(selectorParam) : null;
        if (newnodelist != null) {
            var convertedFromNodeListToHTMLCollection = {
                length: newnodelist.length,
                item: function (idx) {
                    if (typeof idx == 'number' && !isNaN(idx)) {
                        return newnodelist.item(idx);
                    } else {
                        return null;
                    };
                },
                namedItem: function (idorname) {
                    for (var i = 0; i < newnodelist.length; i++) {
                        if (newnodelist.item(i).id == idorname) {
                            return newnodelist.item(i);
                        };
                        if (newnodelist.item(i).name == idorname) {
                            return newnodelist.item(i);
                        };
                    };
                    return null;
                },
            };
            return convertedFromNodeListToHTMLCollection;
        };
    };
    Document.prototype.getEl_CSS = function (selectorParam) {
        var newnodelist = (typeof selectorParam == 'string') ? this.getEl_CSS_Selector(selectorParam) : null;
        if (newnodelist != null) {
            var convertedFromNodeListToHTMLCollection = {
                length: newnodelist.length,
                item: function (idx) {
                    if (typeof idx == 'number' && !isNaN(idx)) {
                        return newnodelist.item(idx);
                    } else {
                        return null;
                    };
                },
                namedItem: function (idorname) {
                    for (var i = 0; i < newnodelist.length; i++) {
                        if (newnodelist.item(i).id == idorname) {
                            return newnodelist.item(i);
                        };
                        if (newnodelist.item(i).name == idorname) {
                            return newnodelist.item(i);
                        };
                    };
                    return null;
                },
                toArray: function () {
                    var rtv = [];
                    for (var i = 0; i < this.length; i++) {
                        rtv[rtv.length] = this.item(i);
                    };
                    return rtv;
                },
            };
            return convertedFromNodeListToHTMLCollection;
        };
    };
    return { Arr: Array, Str: String, Doc: Document };
})());