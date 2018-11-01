var xlLib;
(function (xlLib) {
    /**
     * @private
     */
    var getDefinitionByNameCache = {};
    function getDefinitionByName(name) {
        if (!name)
            return null;
        var definition = getDefinitionByNameCache[name];
        if (definition) {
            return definition;
        }
        var paths = name.split(".");
        var length = paths.length;
        definition = __uglobal;
        for (var i = 0; i < length; i++) {
            var path = paths[i];
            definition = definition[path];
            if (!definition) {
                return null;
            }
        }
        getDefinitionByNameCache[name] = definition;
        return definition;
    }
    xlLib.getDefinitionByName = getDefinitionByName;
    function test(name) {
        var regstr = "^" + name + ".";
        for (var i in getDefinitionByNameCache) {
            if (i.match(regstr)) {
                console.error("匹配成功:" + i);
            }
        }
    }
    xlLib.test = test;
    function delDefinitionByName(name) {
        if (!name)
            return null;
        var regstr = "^" + name + ".";
        if (name.indexOf(".") == -1) {
            for (var i in getDefinitionByNameCache) {
                if (i.match(regstr)) {
                    getDefinitionByNameCache[i] = null;
                    delete getDefinitionByNameCache[i];
                }
            }
        }
        else {
            getDefinitionByNameCache[name] = null;
            delete getDefinitionByNameCache[name];
        }
    }
    xlLib.delDefinitionByName = delDefinitionByName;
    function getQualifiedSuperclassName(value) {
        if (!value || (typeof value != "object" && !value.prototype)) {
            return null;
        }
        var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
        var superProto = Object.getPrototypeOf(prototype);
        if (!superProto) {
            return null;
        }
        var superClass = getQualifiedClassName(superProto.constructor);
        if (!superClass) {
            return null;
        }
        return superClass;
    }
    xlLib.getQualifiedSuperclassName = getQualifiedSuperclassName;
    function getQualifiedClassName(value) {
        var type = typeof value;
        if (!value || (type != "object" && !value.prototype)) {
            return type;
        }
        var prototype = value.prototype ? value.prototype : Object.getPrototypeOf(value);
        if (prototype.hasOwnProperty("__class__")) {
            return prototype["__class__"];
        }
        var constructorString = prototype.constructor.toString().trim();
        var index = constructorString.indexOf("(");
        var className = constructorString.substring(9, index);
        Object.defineProperty(prototype, "__class__", {
            value: className,
            enumerable: false,
            writable: true
        });
        return className;
    }
    xlLib.getQualifiedClassName = getQualifiedClassName;
})(xlLib || (xlLib = {}));
var __uglobal = __uglobal || this;
//# sourceMappingURL=DefinitionUtils.js.map