// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Main.elm":[function(require,module,exports) {
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Data$Alphabet$A = {$: 'A'};
var $author$project$Route$LetterForm = F2(
	function (a, b) {
		return {$: 'LetterForm', a: a, b: b};
	});
var $author$project$Route$Show = {$: 'Show'};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function (flags) {
	return _Utils_Tuple2(
		{
			endAt: _Utils_Tuple2(0, 0),
			moveAt: _Utils_Tuple2(0, 0),
			page: A2($author$project$Route$LetterForm, $author$project$Data$Alphabet$A, $author$project$Route$Show),
			previousPage: A2($author$project$Route$LetterForm, $author$project$Data$Alphabet$A, $author$project$Route$Show),
			startAt: _Utils_Tuple2(0, 0)
		},
		$elm$core$Platform$Cmd$none);
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Route$Nav = function (a) {
	return {$: 'Nav', a: a};
};
var $author$project$Main$SetPage = function (a) {
	return {$: 'SetPage', a: a};
};
var $author$project$Route$Drawing = F2(
	function (a, b) {
		return {$: 'Drawing', a: a, b: b};
	});
var $author$project$Data$Alphabet$defaultLetter = {letter: $author$project$Data$Alphabet$A, letterText: 'A', letterTextLowercase: 'a', number: 1, word: 'apple'};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Data$Alphabet$B = {$: 'B'};
var $author$project$Data$Alphabet$C = {$: 'C'};
var $author$project$Data$Alphabet$D = {$: 'D'};
var $author$project$Data$Alphabet$E = {$: 'E'};
var $author$project$Data$Alphabet$F = {$: 'F'};
var $author$project$Data$Alphabet$G = {$: 'G'};
var $author$project$Data$Alphabet$H = {$: 'H'};
var $author$project$Data$Alphabet$I = {$: 'I'};
var $author$project$Data$Alphabet$J = {$: 'J'};
var $author$project$Data$Alphabet$K = {$: 'K'};
var $author$project$Data$Alphabet$L = {$: 'L'};
var $author$project$Data$Alphabet$M = {$: 'M'};
var $author$project$Data$Alphabet$N = {$: 'N'};
var $author$project$Data$Alphabet$O = {$: 'O'};
var $author$project$Data$Alphabet$P = {$: 'P'};
var $author$project$Data$Alphabet$Q = {$: 'Q'};
var $author$project$Data$Alphabet$R = {$: 'R'};
var $author$project$Data$Alphabet$S = {$: 'S'};
var $author$project$Data$Alphabet$T = {$: 'T'};
var $author$project$Data$Alphabet$U = {$: 'U'};
var $author$project$Data$Alphabet$V = {$: 'V'};
var $author$project$Data$Alphabet$W = {$: 'W'};
var $author$project$Data$Alphabet$X = {$: 'X'};
var $author$project$Data$Alphabet$Y = {$: 'Y'};
var $author$project$Data$Alphabet$Z = {$: 'Z'};
var $author$project$Data$Alphabet$letterDetailsList = _List_fromArray(
	[
		{letter: $author$project$Data$Alphabet$A, letterText: 'A', letterTextLowercase: 'a', number: 1, word: 'Apple'},
		{letter: $author$project$Data$Alphabet$B, letterText: 'B', letterTextLowercase: 'b', number: 2, word: 'Banana'},
		{letter: $author$project$Data$Alphabet$C, letterText: 'C', letterTextLowercase: 'c', number: 3, word: 'Carrot'},
		{letter: $author$project$Data$Alphabet$D, letterText: 'D', letterTextLowercase: 'd', number: 4, word: 'Date'},
		{letter: $author$project$Data$Alphabet$E, letterText: 'E', letterTextLowercase: 'e', number: 5, word: 'Eggplant'},
		{letter: $author$project$Data$Alphabet$F, letterText: 'F', letterTextLowercase: 'f', number: 6, word: 'Fennel'},
		{letter: $author$project$Data$Alphabet$G, letterText: 'G', letterTextLowercase: 'g', number: 7, word: 'Guava'},
		{letter: $author$project$Data$Alphabet$H, letterText: 'H', letterTextLowercase: 'h', number: 8, word: 'Honeydew'},
		{letter: $author$project$Data$Alphabet$I, letterText: 'I', letterTextLowercase: 'i', number: 9, word: 'Ilama'},
		{letter: $author$project$Data$Alphabet$J, letterText: 'J', letterTextLowercase: 'j', number: 10, word: 'Jalapeno'},
		{letter: $author$project$Data$Alphabet$K, letterText: 'K', letterTextLowercase: 'k', number: 11, word: 'Kale'},
		{letter: $author$project$Data$Alphabet$L, letterText: 'L', letterTextLowercase: 'l', number: 12, word: 'Lime'},
		{letter: $author$project$Data$Alphabet$M, letterText: 'M', letterTextLowercase: 'm', number: 13, word: 'Mango'},
		{letter: $author$project$Data$Alphabet$N, letterText: 'N', letterTextLowercase: 'n', number: 14, word: 'Nectarine'},
		{letter: $author$project$Data$Alphabet$O, letterText: 'O', letterTextLowercase: 'o', number: 15, word: 'Orange'},
		{letter: $author$project$Data$Alphabet$P, letterText: 'P', letterTextLowercase: 'p', number: 16, word: 'Peas'},
		{letter: $author$project$Data$Alphabet$Q, letterText: 'Q', letterTextLowercase: 'q', number: 17, word: 'Quince'},
		{letter: $author$project$Data$Alphabet$R, letterText: 'R', letterTextLowercase: 'r', number: 18, word: 'Radish'},
		{letter: $author$project$Data$Alphabet$S, letterText: 'S', letterTextLowercase: 's', number: 19, word: 'Strawberry'},
		{letter: $author$project$Data$Alphabet$T, letterText: 'T', letterTextLowercase: 't', number: 20, word: 'Tomato'},
		{letter: $author$project$Data$Alphabet$U, letterText: 'U', letterTextLowercase: 'u', number: 21, word: 'Ugni'},
		{letter: $author$project$Data$Alphabet$V, letterText: 'V', letterTextLowercase: 'v', number: 22, word: 'Voavanga'},
		{letter: $author$project$Data$Alphabet$W, letterText: 'W', letterTextLowercase: 'w', number: 23, word: 'Watermelon'},
		{letter: $author$project$Data$Alphabet$X, letterText: 'X', letterTextLowercase: 'x', number: 24, word: 'Xigua'},
		{letter: $author$project$Data$Alphabet$Y, letterText: 'Y', letterTextLowercase: 'y', number: 25, word: 'Yucca'},
		{letter: $author$project$Data$Alphabet$Z, letterText: 'Z', letterTextLowercase: 'z', number: 26, word: 'Zucchini'}
	]);
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Data$Alphabet$getLetterDetailsFromLetter = function (letter) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Data$Alphabet$defaultLetter,
		$elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (ld) {
					return _Utils_eq(letter, ld.letter);
				},
				$author$project$Data$Alphabet$letterDetailsList)));
};
var $author$project$Data$Alphabet$getLetterDetailsFromNumber = function (number) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Data$Alphabet$defaultLetter,
		$elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (ld) {
					return _Utils_eq(number, ld.number);
				},
				$author$project$Data$Alphabet$letterDetailsList)));
};
var $author$project$Main$setNewPage = F4(
	function (page, currentLetter, startX, x) {
		if (_Utils_eq(startX, x)) {
			switch (page.$) {
				case 'LetterForm':
					return A2($author$project$Route$Drawing, currentLetter, $author$project$Route$Show);
				case 'Drawing':
					return A2($author$project$Route$LetterForm, currentLetter, $author$project$Route$Show);
				default:
					return $author$project$Route$Nav($author$project$Route$Show);
			}
		} else {
			if (_Utils_cmp(startX, x) > 0) {
				var currentLetterDetails = $author$project$Data$Alphabet$getLetterDetailsFromLetter(currentLetter);
				var newLetterNumber = currentLetterDetails.number + 1;
				var newLetterDetails = $author$project$Data$Alphabet$getLetterDetailsFromNumber(newLetterNumber);
				return A2($author$project$Route$LetterForm, newLetterDetails.letter, $author$project$Route$Show);
			} else {
				var currentLetterDetails = $author$project$Data$Alphabet$getLetterDetailsFromLetter(currentLetter);
				var newLetterNumber = currentLetterDetails.number - 1;
				var newLetterDetails = $author$project$Data$Alphabet$getLetterDetailsFromNumber(newLetterNumber);
				return A2($author$project$Route$LetterForm, newLetterDetails.letter, $author$project$Route$Show);
			}
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $author$project$Route$pageTransitionTime = function (page) {
	switch (page.$) {
		case 'LetterForm':
			return 350;
		case 'Drawing':
			return 250;
		default:
			return 250;
	}
};
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Route$transitionFromPage = F2(
	function (page, msg) {
		var time = $author$project$Route$pageTransitionTime(page);
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$identity,
			A2(
				$elm$core$Task$andThen,
				$elm$core$Basics$always(
					$elm$core$Task$succeed(msg)),
				$elm$core$Process$sleep(time)));
	});
var $author$project$Route$Remove = {$: 'Remove'};
var $author$project$Route$toggleTransition = function (transition) {
	if (transition.$ === 'Show') {
		return $author$project$Route$Remove;
	} else {
		return $author$project$Route$Show;
	}
};
var $author$project$Route$updatePageTransition = function (page) {
	switch (page.$) {
		case 'LetterForm':
			var letter = page.a;
			var transition = page.b;
			return A2(
				$author$project$Route$LetterForm,
				letter,
				$author$project$Route$toggleTransition(transition));
		case 'Drawing':
			var letter = page.a;
			var transition = page.b;
			return A2(
				$author$project$Route$Drawing,
				letter,
				$author$project$Route$toggleTransition(transition));
		default:
			var transition = page.a;
			return $author$project$Route$Nav(
				$author$project$Route$toggleTransition(transition));
	}
};
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'StartAt':
				var _v1 = msg.a;
				var x = _v1.a;
				var y = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							startAt: _Utils_Tuple2(x, y)
						}),
					$elm$core$Platform$Cmd$none);
			case 'MoveAt':
				var _v2 = msg.a;
				var x = _v2.a;
				var y = _v2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							moveAt: _Utils_Tuple2(x, y)
						}),
					$elm$core$Platform$Cmd$none);
			case 'EndAt':
				var _v3 = msg.a;
				var x = _v3.a;
				var y = _v3.b;
				var currentLetter = function () {
					var _v5 = model.page;
					switch (_v5.$) {
						case 'LetterForm':
							var letter = _v5.a;
							return letter;
						case 'Drawing':
							var letter = _v5.a;
							return letter;
						default:
							return $author$project$Data$Alphabet$A;
					}
				}();
				var _v4 = model.startAt;
				var startX = _v4.a;
				var newPage = A4($author$project$Main$setNewPage, model.page, currentLetter, startX, x);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							endAt: _Utils_Tuple2(x, y),
							page: $author$project$Route$updatePageTransition(model.page)
						}),
					A2(
						$author$project$Route$transitionFromPage,
						model.page,
						$author$project$Main$SetPage(newPage)));
			case 'SetPage':
				var page = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							endAt: _Utils_Tuple2(0, 0),
							moveAt: _Utils_Tuple2(0, 0),
							page: page,
							startAt: _Utils_Tuple2(0, 0)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ToggleNav':
				var newPage = function () {
					var _v6 = model.page;
					if (_v6.$ === 'Nav') {
						var transition = _v6.a;
						return model.previousPage;
					} else {
						return $author$project$Route$Nav($author$project$Route$Show);
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							page: $author$project$Route$updatePageTransition(model.page),
							previousPage: model.page
						}),
					A2(
						$author$project$Route$transitionFromPage,
						model.page,
						$author$project$Main$SetPage(newPage)));
			default:
				var ld = msg.a;
				var newPage = A2($author$project$Route$LetterForm, ld.letter, $author$project$Route$Show);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							page: $author$project$Route$updatePageTransition(model.page)
						}),
					A2(
						$author$project$Route$transitionFromPage,
						model.page,
						$author$project$Main$SetPage(newPage)));
		}
	});
var $author$project$Main$EndAt = function (a) {
	return {$: 'EndAt', a: a};
};
var $author$project$Main$MoveAt = function (a) {
	return {$: 'MoveAt', a: a};
};
var $author$project$Main$StartAt = function (a) {
	return {$: 'StartAt', a: a};
};
var $author$project$Main$ToggleNav = {$: 'ToggleNav'};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Main$DisplayLetterFromNav = function (a) {
	return {$: 'DisplayLetterFromNav', a: a};
};
var $author$project$Data$Alphabet$getLetterText = function (ld) {
	return ld.letterText + (' ' + ld.letterTextLowercase);
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Main$createListElement = function (ld) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick(
				$author$project$Main$DisplayLetterFromNav(ld))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				$author$project$Data$Alphabet$getLetterText(ld))
			]));
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var $elm$svg$Svg$Attributes$strokeMiterlimit = _VirtualDom_attribute('stroke-miterlimit');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $author$project$Data$Asvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('8.804'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M203.794 174.496s-69.191-2.887-58.381-50.471c0 0-1.4-10.388-10.81-11.205 0 0 83.927-36.814 69.191 61.676z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#916E51'),
					$elm$svg$Svg$Attributes$stroke('#6D4C29'),
					$elm$svg$Svg$Attributes$strokeWidth('9'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M190.643 205.5s-3.664-50.633 42.479-57.298c24.574-3.55 17.492 22.33 6.664 24.119s-29.152 27.479-26.654 33.31c2.499 5.831-18.397-.13-18.397-.13h-4.092z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DB1414'),
					$elm$svg$Svg$Attributes$stroke('#8B0004'),
					$elm$svg$Svg$Attributes$strokeWidth('8.804'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M139.001 197.93c-58.305-8.329-158.333 14.532-77.462 191.547 57.472 125.796 131.602 54.998 131.602 54.998s110.779 57.82 150.759-70.624c39.98-128.445-9.162-195.079-78.295-183.417-69.132 11.66-126.604 7.496-126.604 7.496z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#770009'),
					$elm$svg$Svg$Attributes$d('M146.346 282.862c0 2.657-.538 5.187-1.512 7.487a19.295 19.295 0 01-10.236 10.238 19.185 19.185 0 01-7.487 1.511c-2.657 0-5.187-.538-7.489-1.511a19.309 19.309 0 01-10.236-10.238l18.461-7.487-18.461-7.487a19.303 19.303 0 0110.236-10.237 19.189 19.189 0 017.489-1.512 19.182 19.182 0 0113.601 5.634 19.257 19.257 0 014.122 6.115 19.16 19.16 0 011.512 7.487zM275.891 282.862c0 2.657-.538 5.187-1.512 7.487a19.295 19.295 0 01-10.236 10.238 19.185 19.185 0 01-7.487 1.511 19.18 19.18 0 01-7.488-1.511 19.297 19.297 0 01-10.236-10.238l18.461-7.487-18.461-7.487a19.252 19.252 0 014.122-6.115 19.184 19.184 0 0113.602-5.634 19.182 19.182 0 0113.601 5.634 19.257 19.257 0 014.122 6.115 19.16 19.16 0 011.512 7.487zM214.518 339.154c-5.181-6.319-17.568-7.263-24.493-7.263-2.213 0-3.754.096-4.147.122a64.318 64.318 0 00-4.147-.122c-6.924 0-19.313.943-24.493 7.263-2.152 2.624-2.859 5.879-2.101 9.672 3.687 18.438 29.034 24.729 30.111 24.99.097.021.195.034.293.034.096 0 .192-.012.287-.033 1.104-.26 27.101-6.548 30.791-24.991.758-3.793.051-7.048-2.101-9.672zm-.361 9.18c-3.174 15.872-25.776 22.229-28.612 22.965-35.62-29.64.236-36.774.236-36.774.065.005.13.005.193 0 .017-.002 1.629-.123 4.051-.123 5.218 0 17.861.618 22.552 6.343 1.676 2.044 2.194 4.526 1.58 7.589zM19.359 198.59c-9.783-9.783-20.969 3.182-12.076 12.075 8.004 8.004 22.678-1.474 29.084 4.934-6.406-6.407 3.071-21.081-4.933-29.084-8.892-8.894-21.857 2.292-12.075 12.075z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#770009'),
					$elm$svg$Svg$Attributes$strokeWidth('2.515'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('339.215'),
					$elm$svg$Svg$Attributes$cy('430.979'),
					$elm$svg$Svg$Attributes$r('7.021')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#770009'),
					$elm$svg$Svg$Attributes$cx('324.122'),
					$elm$svg$Svg$Attributes$cy('449.844'),
					$elm$svg$Svg$Attributes$r('5.052')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#770009'),
					$elm$svg$Svg$Attributes$d('M349.797 186.194c1.929-1.055 4.37-3.496 5.425-5.424l3.23-5.906c1.055-1.928 2.781-1.928 3.836 0l3.229 5.905c1.055 1.929 3.496 4.37 5.425 5.425l5.905 3.229c1.929 1.055 1.929 2.781 0 3.835l-5.905 3.23c-1.929 1.055-4.37 3.496-5.425 5.424l-3.229 5.905c-1.055 1.929-2.781 1.929-3.836 0l-3.23-5.906c-1.055-1.928-3.496-4.369-5.425-5.424l-5.904-3.229c-1.929-1.055-1.929-2.781 0-3.836l5.904-3.228zM392.917 212.203c-1.673.915-3.789 3.032-4.704 4.704-.915 1.673-2.411 1.673-3.326 0-.915-1.672-3.031-3.789-4.704-4.704-1.673-.915-1.673-2.412 0-3.326 1.673-.915 3.789-3.032 4.704-4.705s2.411-1.672 3.326 0 3.031 3.79 4.704 4.705c1.673.915 1.673 2.412 0 3.326zM360.121 223.614l3.56 3.56c.185-.227.378-.446.584-.653.207-.207.427-.4.654-.584l-3.56-3.56-1.238 1.237zm9.18.495c.299-.032.602-.051.909-.051.284 0 .564.015.842.042v-5.051h-1.751v5.06zm7.435 3.066l3.561-3.561-1.238-1.237-3.56 3.56c.227.185.446.378.652.584.207.207.401.426.585.654zm-14.932 5.29c0-.273.016-.542.041-.809h-4.973v1.75h4.987a8.584 8.584 0 01-.055-.941zm1.877 5.29l-3.56 3.56 1.238 1.238 3.56-3.56a8.449 8.449 0 01-.654-.585 9.014 9.014 0 01-.584-.653zm14.892-6.099c.025.267.041.536.041.809 0 .319-.021.632-.056.941h5.098v-1.75h-5.083zm-2.422 6.751a8.413 8.413 0 01-.653.585l3.561 3.56 1.238-1.238-3.561-3.561a8.247 8.247 0 01-.585.654zm-6.85 2.412v5.016h1.751v-5.007a8.265 8.265 0 01-1.751-.009z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M75.055 416.533c2.779-1.52 6.297-5.038 7.818-7.817l4.655-8.512c1.521-2.779 4.008-2.779 5.528 0l4.655 8.512c1.52 2.779 5.038 6.298 7.817 7.817l8.511 4.654c2.779 1.52 2.779 4.008 0 5.527l-8.511 4.655c-2.779 1.52-6.297 5.038-7.817 7.817l-4.655 8.513c-1.52 2.779-4.007 2.779-5.528 0l-4.655-8.513c-1.521-2.779-5.039-6.298-7.818-7.817l-8.511-4.655c-2.779-1.52-2.779-4.008 0-5.527l8.511-4.654zM108.987 445.602c1.242-.727 2.852-2.336 3.578-3.577l2.186-3.736c.726-1.241 1.852-1.207 2.502.076l1.567 3.094c.65 1.283 2.231 2.864 3.515 3.515l3.094 1.566c1.283.65 1.317 1.775.076 2.502l-3.736 2.185c-1.242.727-2.852 2.336-3.578 3.577l-2.185 3.736c-.726 1.241-1.852 1.207-2.502-.076l-1.567-3.094c-.65-1.283-2.231-2.865-3.515-3.515l-3.094-1.567c-1.283-.65-1.317-1.775-.076-2.502l3.735-2.184z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#770009'),
					$elm$svg$Svg$Attributes$d('M72.464 464.578l4.7 4.7c.243-.3.499-.59.771-.862.273-.272.563-.528.863-.771l-4.7-4.7-1.634 1.633zm21.938 4.7l4.701-4.7-1.635-1.634-4.7 4.7c.3.243.589.499.862.771.273.274.529.564.772.863zm-19.718 6.986c0-.36.021-.717.054-1.068h-6.565v2.312h6.585a11.11 11.11 0 01-.074-1.244zm9.899-11.033c.395-.043.794-.067 1.2-.067.375 0 .746.02 1.112.057v-6.668h-2.312v6.678zm9.047 18.879c-.273.272-.562.528-.862.771l4.7 4.7 1.635-1.633-4.701-4.701c-.243.301-.499.591-.772.863zm3.196-8.915c.033.352.054.708.054 1.068 0 .421-.028.835-.074 1.243h6.732v-2.312h-6.712zm-12.243 12.098v6.624h2.312v-6.612c-.366.036-.736.056-1.112.056a11.339 11.339 0 01-1.2-.068zm-7.419-4.044l-4.7 4.7 1.635 1.633 4.7-4.699c-.3-.244-.59-.499-.863-.772a11.066 11.066 0 01-.772-.862z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FFF'),
					$elm$svg$Svg$Attributes$strokeWidth('6.289'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M68.173 222.377c-20.585 18.493-22.251 41.25-22.251 59.949')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$gradientUnits = _VirtualDom_attribute('gradientUnits');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$svg$Svg$linearGradient = $elm$svg$Svg$trustedNode('linearGradient');
var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var $elm$svg$Svg$stop = $elm$svg$Svg$trustedNode('stop');
var $elm$svg$Svg$Attributes$stopColor = _VirtualDom_attribute('stop-color');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $author$project$Data$Bsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('a'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('96.509'),
					$elm$svg$Svg$Attributes$y1('173.234'),
					$elm$svg$Svg$Attributes$x2('267.547'),
					$elm$svg$Svg$Attributes$y2('469.482')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#ff0')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.607'),
							$elm$svg$Svg$Attributes$stopColor('#ff0')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.618'),
							$elm$svg$Svg$Attributes$stopColor('#e8e700')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.833'),
							$elm$svg$Svg$Attributes$stopColor('#e8e700')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.839'),
							$elm$svg$Svg$Attributes$stopColor('#d0d000')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF0'),
					$elm$svg$Svg$Attributes$stroke('#D6D000'),
					$elm$svg$Svg$Attributes$strokeWidth('8.068'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M164.53 140.194c-5.917 52.19 26.126 229.756-104.502 284.312-130.629 54.557 109.337 251.324 237.437-44.567C406.577 127.902 188.804-73.916 164.53 140.194z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#D6D000'),
					$elm$svg$Svg$Attributes$d('M263.557 229.161c-3.637-4.437-12.337-5.1-17.197-5.1-1.556 0-2.636.068-2.913.086a44.483 44.483 0 00-2.913-.086c-4.86 0-13.56.663-17.196 5.1-1.511 1.843-2.008 4.127-1.475 6.791 2.589 12.946 20.385 17.364 21.142 17.546a.892.892 0 00.405 0c.778-.181 19.032-4.597 21.622-17.546.532-2.663.035-4.948-1.475-6.791zm-.255 6.445c-2.229 11.145-18.098 15.607-20.089 16.126-25.011-20.812.165-25.822.165-25.822.046.003.091.003.137 0a41.645 41.645 0 012.845-.086c3.663 0 12.539.435 15.835 4.454 1.174 1.435 1.539 3.178 1.107 5.328zM96.229 130.539c-13.912-13.912-29.82 4.525-17.174 17.172 11.384 11.383 32.25-2.096 41.361 7.016-9.11-9.111 4.368-29.978-7.015-41.362-12.647-12.646-31.084 3.262-17.172 17.174z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#D6D000'),
					$elm$svg$Svg$Attributes$strokeWidth('1.153'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('271.646'),
					$elm$svg$Svg$Attributes$cy('473.848'),
					$elm$svg$Svg$Attributes$r('7.46')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#D6D000'),
					$elm$svg$Svg$Attributes$cx('257.765'),
					$elm$svg$Svg$Attributes$cy('489.58'),
					$elm$svg$Svg$Attributes$r('5.368')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#D6D000'),
					$elm$svg$Svg$Attributes$d('M334.214 139.159c2.548-1.394 5.771-4.617 7.165-7.165l4.267-7.799c1.394-2.547 3.673-2.547 5.066 0l4.265 7.799c1.394 2.547 4.617 5.771 7.165 7.165l7.799 4.266c2.548 1.394 2.548 3.673 0 5.066l-7.799 4.266c-2.548 1.393-5.771 4.617-7.165 7.164l-4.265 7.8c-1.394 2.547-3.673 2.547-5.066 0l-4.267-7.8c-1.394-2.547-4.617-5.771-7.165-7.164l-7.799-4.266c-2.548-1.393-2.548-3.672 0-5.066l7.799-4.266zM391.166 173.512c-2.209 1.208-5.005 4.004-6.213 6.213-1.208 2.209-3.185 2.209-4.393 0-1.209-2.209-4.005-5.005-6.214-6.213-2.209-1.208-2.209-3.186 0-4.394 2.209-1.208 5.005-4.004 6.214-6.213 1.208-2.209 3.185-2.209 4.393 0 1.208 2.209 4.004 5.004 6.213 6.213 2.209 1.208 2.209 3.185 0 4.394z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M17.249 479.178c2.547-1.394 5.771-4.617 7.165-7.165l4.266-7.799c1.394-2.548 3.673-2.548 5.066 0l4.266 7.799c1.393 2.548 4.617 5.771 7.164 7.165l7.8 4.265c2.547 1.394 2.547 3.673 0 5.066l-7.8 4.265c-2.547 1.394-5.771 4.617-7.164 7.165l-4.266 7.801c-1.393 2.548-3.672 2.548-5.065 0l-4.267-7.801c-1.393-2.548-4.617-5.771-7.164-7.165l-7.8-4.265c-2.547-1.394-2.547-3.673 0-5.066l7.799-4.265zM48.345 505.816c1.138-.666 2.613-2.141 3.279-3.278l2.002-3.424c.666-1.138 1.697-1.106 2.293.069l1.436 2.836c.596 1.176 2.045 2.625 3.221 3.22l2.835 1.437c1.176.595 1.208 1.627.07 2.292l-3.424 2.003c-1.138.665-2.613 2.141-3.278 3.278l-2.002 3.424c-.666 1.138-1.697 1.106-2.293-.069l-1.437-2.836c-.596-1.176-2.045-2.625-3.221-3.221l-2.836-1.437c-1.176-.596-1.207-1.627-.069-2.293l3.424-2.001z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#D6D000'),
					$elm$svg$Svg$Attributes$strokeWidth('1.153'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M236.872 257.197c-8.113 95.469-46.443 200.062-164.166 248.16M219.396 62.452s20.089 70.614 19.229 157.091')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FFF'),
					$elm$svg$Svg$Attributes$strokeWidth('5.763'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M195.748 77.637c-12.145 22.339-13.81 30.603-17.979 54.945')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#D6D000'),
					$elm$svg$Svg$Attributes$d('M291.203 186.092c0 2.435-.493 4.753-1.386 6.862a17.673 17.673 0 01-9.381 9.381 17.573 17.573 0 01-6.861 1.384c-2.435 0-4.753-.493-6.862-1.384a17.662 17.662 0 01-9.381-9.381l16.919-6.862-16.919-6.861a17.673 17.673 0 019.381-9.381 17.575 17.575 0 016.862-1.386 17.57 17.57 0 0112.465 5.163 17.64 17.64 0 013.777 5.604 17.552 17.552 0 011.386 6.861zM224.353 186.092c0 2.435-.493 4.753-1.386 6.862a17.684 17.684 0 01-9.381 9.381 17.573 17.573 0 01-6.861 1.384c-2.435 0-4.754-.493-6.863-1.384a17.662 17.662 0 01-9.38-9.381l16.918-6.862-16.918-6.861a17.673 17.673 0 019.38-9.381 17.58 17.58 0 016.863-1.386 17.57 17.57 0 0112.465 5.163 17.57 17.57 0 015.163 12.465zM350.071 200.272c0-.361.021-.716.054-1.068h-6.567v2.313h6.588c-.046-.41-.075-.824-.075-1.245zm-2.221-11.689l4.702 4.702c.243-.3.499-.589.771-.862.273-.273.563-.529.863-.772l-4.701-4.702-1.635 1.634zm21.946 4.703l4.702-4.702-1.636-1.635-4.701 4.702c.3.244.589.5.862.772s.529.562.773.863zm-9.821-4.049c.395-.042.794-.067 1.2-.067.375 0 .746.02 1.111.056v-6.671h-2.312v6.682zm-7.423 18.023l-4.702 4.702 1.636 1.635 4.701-4.702c-.3-.244-.59-.499-.863-.772a11.267 11.267 0 01-.772-.863zm7.423 4.047v6.626h2.312v-6.615a11.02 11.02 0 01-2.312-.011zm12.247-12.103c.033.352.054.708.054 1.068 0 .421-.028.835-.074 1.244h6.734v-2.313h-6.714zm-3.199 8.918a11.08 11.08 0 01-.863.772l4.702 4.702 1.636-1.635-4.702-4.702c-.244.301-.499.59-.773.863zM16.909 533.916c0-.331.019-.657.049-.979h-6.016v2.118h6.035a10.185 10.185 0 01-.068-1.139zm-2.035-10.709l4.308 4.308c.223-.275.457-.54.707-.79s.516-.484.791-.708l-4.307-4.307-1.499 1.497zm11.107.599c.361-.039.728-.062 1.1-.062.344 0 .684.018 1.02.052v-6.111h-2.119v6.121zm8.998 3.709l4.308-4.308-1.498-1.497-4.308 4.308c.275.223.54.457.79.707s.485.515.708.79zm2.222 5.422c.031.322.049.648.049.979 0 .386-.026.765-.067 1.139h6.168v-2.118h-6.15zm-18.019 7.38l-4.308 4.308 1.499 1.496 4.307-4.307c-.275-.223-.541-.457-.791-.707s-.484-.515-.707-.79zm15.089.79c-.25.25-.515.484-.79.707l4.307 4.307 1.498-1.496-4.308-4.308c-.222.275-.457.54-.707.79zm-8.29 2.916v6.07H28.1v-6.061c-.335.033-.675.052-1.02.052a9.74 9.74 0 01-1.099-.061z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Csvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M353.494 72.889c-6.175 0-12.004 1.693-17.169 4.685-4.638-13.826-17.099-23.73-31.751-23.73-15.713 0-28.914 11.391-32.638 26.798-13.013.888-27.663 13.83-35.781 33.014-3.717 8.782-5.537 17.634-5.614 25.609a47.04 47.04 0 00-10.63 3.701c-.418-6.474-3.253-11.829-8.179-14.061-5.712-2.587-12.731-.312-18.363 5.198-1.231-15.551-9.208-28.156-19.638-31.603-1.94-21.485-15.757-38.146-32.525-38.146-10.382 0-19.629 6.394-25.633 16.358-6.757-8.562-16.545-13.947-27.438-13.947-20.391 0-36.919 18.861-36.919 42.127 0 11.99 4.397 22.802 11.443 30.474a54.645 54.645 0 00-.368 6.304c0 22.304 13.432 40.655 30.667 42.947 4.568 16.683 19.828 28.946 37.959 28.946 16.707 0 30.972-10.123 36.687-24.81C178.223 211.117 178.588 248 178.588 248h35.072c-2.94-11-1.585-37.405 1.992-45.793 7.134 4.548 16.036 7.109 25.698 7.109 17.79 0 33.017-9.236 39.334-22.227 6.289 3.515 13.678 5.503 21.585 5.503 21.036 0 38.408-14.358 41.146-32.956a33.564 33.564 0 0010.078 1.546c21.155 0 38.305-19.768 38.305-44.147s-17.149-44.146-38.304-44.146z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9A00'),
					$elm$svg$Svg$Attributes$stroke('#C9701C'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M294 289.11c0-24.565-19.887-44.11-45.157-44.11H138.199C112.929 245 92 264.545 92 289.11v.239c0 5.009 1.117 9.818 2.683 14.311 11.585 55.736 98.744 225.166 98.744 225.166s90.534-172.197 99.212-227.828c1.035-3.714 1.361-7.617 1.361-11.649v-.239z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#C9701C'),
					$elm$svg$Svg$Attributes$d('M249.171 321.496a15.04 15.04 0 01-4.418 10.667 15.14 15.14 0 01-4.795 3.233 15.078 15.078 0 01-5.873 1.184c-2.083 0-4.066-.422-5.873-1.184a15.145 15.145 0 01-8.027-8.029l14.479-5.871-14.479-5.873a15.142 15.142 0 018.027-8.028 15.057 15.057 0 015.873-1.185c2.082 0 4.066.422 5.873 1.185a15.126 15.126 0 018.027 8.028 15.05 15.05 0 011.186 5.873zM166.575 321.496c0 2.082-.422 4.067-1.186 5.871a15.129 15.129 0 01-8.027 8.029 15.066 15.066 0 01-5.872 1.184 15.07 15.07 0 01-5.873-1.184 15.14 15.14 0 01-8.026-8.029l14.479-5.871-14.479-5.873a15.126 15.126 0 018.026-8.028 15.053 15.053 0 015.873-1.185c2.083 0 4.067.422 5.872 1.185a15.145 15.145 0 018.027 8.028 15.032 15.032 0 011.186 5.873zM219.548 363.284c-4.576-5.581-15.52-6.413-21.634-6.413-1.957 0-3.315.085-3.663.107a57.904 57.904 0 00-3.664-.107c-6.115 0-17.058.832-21.632 6.413-1.901 2.318-2.526 5.194-1.855 8.544 3.256 16.285 25.643 21.843 26.594 22.07a1.146 1.146 0 00.511.003c.976-.23 23.939-5.784 27.197-22.073.671-3.349.047-6.225-1.854-8.544zm-.32 8.109c-2.804 14.019-22.766 19.633-25.271 20.285-31.461-26.179.208-32.481.208-32.481.057.004.114.004.17 0a51.795 51.795 0 013.578-.108c4.608 0 15.775.545 19.92 5.604 1.479 1.802 1.938 3.996 1.395 6.7zM34.543 241.778c-16.823-16.823-36.059 5.471-20.766 20.765 13.765 13.764 38.997-2.534 50.013 8.482-11.017-11.017 5.282-36.249-8.482-50.013-15.293-15.292-37.587 3.943-20.765 20.766z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#C9701C'),
					$elm$svg$Svg$Attributes$strokeWidth('1.394'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M273.794 435.301c0 4.982-4.037 9.023-9.021 9.023a9.022 9.022 0 010-18.044c4.984-.001 9.021 4.04 9.021 9.021z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#C9701C'),
					$elm$svg$Svg$Attributes$cx('253.564'),
					$elm$svg$Svg$Attributes$cy('457.113'),
					$elm$svg$Svg$Attributes$r('6.491')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#C9701C'),
					$elm$svg$Svg$Attributes$d('M298.618 359.518c3.08-1.685 6.979-5.583 8.664-8.663l5.158-9.432c1.686-3.08 4.441-3.08 6.126 0l5.158 9.432c1.685 3.08 5.583 6.979 8.663 8.663l9.431 5.157c3.08 1.685 3.08 4.44 0 6.125l-9.431 5.159c-3.08 1.685-6.979 5.583-8.663 8.663l-5.158 9.431c-1.685 3.08-4.44 3.08-6.126.001l-5.158-9.433c-1.686-3.08-5.584-6.978-8.664-8.663l-9.43-5.157c-3.08-1.686-3.08-4.441 0-6.126l9.43-5.157zM364.697 338.339c-2.672 1.462-6.053 4.843-7.514 7.514-1.46 2.671-3.851 2.671-5.312 0s-4.842-6.052-7.513-7.514c-2.672-1.462-2.672-3.853 0-5.313 2.671-1.46 6.052-4.841 7.513-7.512s3.852-2.671 5.312 0c1.461 2.671 4.842 6.052 7.514 7.512 2.671 1.46 2.671 3.851 0 5.313z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M148.098 450.108c3.081-1.685 6.979-5.583 8.664-8.663l5.158-9.431c1.685-3.08 4.441-3.08 6.125 0l5.158 9.431c1.684 3.08 5.583 6.979 8.663 8.663l9.431 5.157c3.081 1.685 3.081 4.44 0 6.125l-9.432 5.159c-3.08 1.685-6.979 5.583-8.663 8.663l-5.158 9.431c-1.684 3.08-4.441 3.08-6.125 0l-5.158-9.431c-1.685-3.08-5.583-6.979-8.663-8.663l-9.432-5.159c-3.08-1.685-3.08-4.44 0-6.125l9.432-5.157zM187.277 488.047c1.398-.764 3.168-2.534 3.933-3.932l2.342-4.283c.765-1.397 2.016-1.397 2.781.001l2.342 4.281c.765 1.398 2.535 3.169 3.933 3.933l4.282 2.342c1.398.764 1.398 2.016 0 2.779l-4.282 2.342c-1.398.764-3.168 2.534-3.933 3.933l-2.342 4.281c-.765 1.398-2.016 1.398-2.781.001l-2.342-4.283c-.765-1.397-2.535-3.168-3.933-3.932l-4.282-2.342c-1.398-.764-1.398-2.016 0-2.779l4.282-2.342zM72.168 533.857c.944-.517 2.138-1.711 2.654-2.654l1.58-2.888c.516-.943 1.361-.943 1.877 0l1.58 2.888c.516.943 1.71 2.138 2.654 2.654l2.891 1.58c.944.517.944 1.36 0 1.877l-2.891 1.58c-.944.517-2.138 1.711-2.654 2.654l-1.58 2.891c-.516.943-1.361.943-1.877 0l-1.58-2.891c-.516-.943-1.71-2.138-2.654-2.654l-2.89-1.58c-.944-.517-.944-1.36 0-1.877l2.89-1.58z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#C9701C'),
					$elm$svg$Svg$Attributes$strokeWidth('3'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M94 285.5h63M94 266.5h39M215 408.5h37M225 430.5h16')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#C9701C'),
					$elm$svg$Svg$Attributes$d('M320.428 283.238l5.323 5.323c.275-.339.565-.667.874-.976.31-.309.638-.599.978-.875l-5.323-5.323-1.852 1.851zm13.724.74c.447-.048.899-.076 1.359-.076.426 0 .846.022 1.26.063v-7.551h-2.619v7.564zm-11.21 12.494c0-.409.023-.812.062-1.21h-7.435v2.618h7.457a12.84 12.84 0 01-.084-1.408zm22.329-7.911l5.322-5.323-1.85-1.851-5.323 5.323c.34.276.668.565.977.875.309.309.599.637.874.976zm-.874 16.796c-.309.309-.637.599-.976.874l5.322 5.322 1.85-1.851-5.322-5.322a11.92 11.92 0 01-.874.977zm3.621-10.096c.039.398.062.802.062 1.21 0 .477-.032.945-.084 1.407h7.623v-2.618h-7.601zm-13.866 13.701v7.501h2.619v-7.488c-.414.041-.834.063-1.26.063-.459 0-.911-.028-1.359-.076zm-8.402-4.581l-5.322 5.322 1.852 1.851 5.322-5.322c-.34-.275-.668-.565-.977-.874-.31-.309-.599-.637-.875-.977zM128.95 505.013l3.188 3.188c.165-.203.338-.4.523-.585s.382-.358.585-.523l-3.188-3.188-1.108 1.108zm8.221.445a7.555 7.555 0 011.569-.008v-4.524h-1.569v4.532zm6.661 2.743l3.188-3.188-1.108-1.107-3.188 3.188c.204.165.4.339.585.523.184.185.358.381.523.584zm-13.376 4.737c0-.243.014-.484.037-.722h-4.453v1.566h4.467a7.315 7.315 0 01-.051-.844zm12.852 5.325a7.449 7.449 0 01-.585.523l3.188 3.188 1.108-1.109-3.188-3.188c-.164.204-.338.4-.523.586zm2.168-6.046c.023.237.037.479.037.722 0 .286-.02.567-.05.845h4.567v-1.566h-4.554zm-8.305 8.205v4.494h1.569v-4.486a7.526 7.526 0 01-1.569-.008zm-5.033-2.744l-3.188 3.188 1.109 1.109 3.188-3.188a7.449 7.449 0 01-.585-.523 7.855 7.855 0 01-.524-.586z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$ellipse = $elm$svg$Svg$trustedNode('ellipse');
var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $author$project$Data$Dsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#9E6E54'),
					$elm$svg$Svg$Attributes$stroke('#775444'),
					$elm$svg$Svg$Attributes$strokeWidth('9.905'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M375.004 321.477c0 25.754-2.773 57.286-30.924 74.165-28.149 16.878-81.676 19.103-124.631 19.103-42.956 0-86.175-2.225-114.325-19.103-28.15-16.879-48.728-45.908-48.728-71.663 0-25.755 24.909-51.575 53.059-68.453 28.15-16.877 67.038-27.317 109.994-27.317 42.955 0 81.844 10.439 109.993 27.317 28.151 16.878 45.562 40.195 45.562 65.951z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('rotate(6.174 343.987 334.76)'),
					$elm$svg$Svg$Attributes$fill('#775444'),
					$elm$svg$Svg$Attributes$cx('344.099'),
					$elm$svg$Svg$Attributes$cy('334.844'),
					$elm$svg$Svg$Attributes$rx('16.868'),
					$elm$svg$Svg$Attributes$ry('39.826')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775444'),
					$elm$svg$Svg$Attributes$d('M283.669 308.127c0 2.118-.428 4.137-1.206 5.972a15.349 15.349 0 01-3.287 4.878 15.42 15.42 0 01-4.878 3.289c-1.835.775-3.854 1.205-5.973 1.205s-4.137-.43-5.974-1.205a15.39 15.39 0 01-4.876-3.289 15.37 15.37 0 01-3.289-4.878l14.728-5.972-14.728-5.973a15.386 15.386 0 018.165-8.166c1.837-.777 3.855-1.205 5.974-1.205s4.138.428 5.973 1.205a15.364 15.364 0 018.165 8.166 15.262 15.262 0 011.206 5.973zM189.154 308.127c0 2.118-.429 4.137-1.206 5.972a15.385 15.385 0 01-8.165 8.167 15.323 15.323 0 01-5.973 1.205c-2.119 0-4.137-.43-5.973-1.205a15.385 15.385 0 01-8.166-8.167l14.726-5.972-14.726-5.973a15.384 15.384 0 018.166-8.166 15.283 15.283 0 015.973-1.205 15.287 15.287 0 0110.85 4.492 15.4 15.4 0 013.288 4.879 15.28 15.28 0 011.206 5.973zM249.653 346.64c-5.137-6.266-17.423-7.201-24.289-7.201-2.196 0-3.724.094-4.113.122a61.692 61.692 0 00-4.113-.122c-6.865 0-19.151.936-24.288 7.201-2.134 2.604-2.836 5.829-2.083 9.591 3.654 18.284 28.792 24.523 29.859 24.78a1.245 1.245 0 00.575.003c1.096-.257 26.877-6.493 30.534-24.783.753-3.762.051-6.987-2.082-9.591zm-.358 9.103c-3.149 15.74-25.561 22.044-28.376 22.773-35.32-29.393.236-36.468.236-36.468.063.004.128.004.191 0 .015-.001 1.615-.123 4.018-.123 5.173 0 17.71.613 22.364 6.29 1.661 2.029 2.175 4.49 1.567 7.528zM37.062 224.362c-17.079-17.08-36.608 5.555-21.083 21.081 13.975 13.974 39.592-2.573 50.776 8.613-11.185-11.186 5.362-36.802-8.611-50.778-15.527-15.525-38.161 4.004-21.082 21.084z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#775444'),
					$elm$svg$Svg$Attributes$strokeWidth('1.415'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M389.425 391.753a9.162 9.162 0 01-11.055 6.755c-4.917-1.188-7.938-6.139-6.752-11.057 1.188-4.915 6.137-7.941 11.055-6.753 4.916 1.189 7.938 6.14 6.752 11.055z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775444'),
					$elm$svg$Svg$Attributes$cx('364.259'),
					$elm$svg$Svg$Attributes$cy('408.455'),
					$elm$svg$Svg$Attributes$r('6.591')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775444'),
					$elm$svg$Svg$Attributes$d('M306.585 250.509c3.127-1.71 7.085-5.668 8.795-8.795l5.237-9.576c1.71-3.127 4.509-3.127 6.219 0l5.237 9.576c1.71 3.127 5.668 7.085 8.795 8.795l9.575 5.237c3.127 1.71 3.127 4.509 0 6.219l-9.575 5.236c-3.127 1.71-7.085 5.668-8.795 8.795l-5.237 9.577c-1.71 3.127-4.509 3.127-6.219 0l-5.237-9.577c-1.71-3.127-5.668-7.085-8.795-8.795l-9.576-5.236c-3.127-1.71-3.127-4.509 0-6.219l9.576-5.237zM368.012 234.667c-2.713 1.483-6.146 4.916-7.629 7.627-1.482 2.712-3.91 2.712-5.393 0-1.483-2.711-4.916-6.144-7.628-7.627s-2.712-3.911 0-5.394 6.145-4.916 7.628-7.628c1.482-2.712 3.91-2.712 5.393 0 1.483 2.712 4.916 6.145 7.629 7.628 2.712 1.484 2.712 3.911 0 5.394z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M64.621 355.218c3.127-1.71 7.085-5.668 8.796-8.795l5.237-9.576c1.71-3.127 4.509-3.127 6.219 0l5.236 9.576c1.71 3.127 5.668 7.085 8.795 8.795l9.575 5.236c3.127 1.71 3.127 4.509 0 6.219l-9.576 5.237c-3.127 1.71-7.084 5.668-8.795 8.795l-5.236 9.577c-1.71 3.127-4.509 3.127-6.219 0l-5.237-9.577c-1.71-3.127-5.668-7.085-8.795-8.795l-9.576-5.237c-3.127-1.71-3.127-4.509 0-6.219l9.576-5.236zM108.643 385.245c1.42-.776 3.217-2.572 3.993-3.992l2.378-4.348c.776-1.42 2.047-1.419 2.823 0l2.377 4.348c.776 1.419 2.573 3.216 3.993 3.992l4.348 2.377c1.42.776 1.42 2.046 0 2.823l-4.349 2.377c-1.419.777-3.216 2.574-3.993 3.993l-2.377 4.348c-.776 1.419-2.047 1.42-2.823 0l-2.378-4.348c-.776-1.42-2.573-3.217-3.993-3.993l-4.348-2.377c-1.419-.776-1.419-2.047 0-2.823l4.349-2.377z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#775444'),
					$elm$svg$Svg$Attributes$strokeWidth('4.245'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M116.37 249.083c8.612 4.867 18.757 14.129 29.83 15.25 11.087 1.124 17.66-10.588 26.562-10.398 7.104.151 10.802 9.375 17.435 11.146 5.965 1.592 13.102-.691 19.176.803 8.707 2.141 23.961 11.938 28.819-1.808M353.451 387.771c-8.654 1.524-14.391 2.167-22.281.702-8.955-1.662-18.853-5.352-27.341-2.344-8.394 2.976-10.913 9.666-20.498 8.927-8.354-.646-16.529-9.65-24.525-2.601M60.783 332.07c3.782-6.094 18.26-10.037 25.349-9.371 7.501.705 11.719 6.803 18.648 8.479 7.351 1.777 13.13-2.621 19.493-.023 2.704 1.104 4.307 4.226 7.05 5.57 2.59 1.27 8.05 1.719 10.048 3.779')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775444'),
					$elm$svg$Svg$Attributes$d('M82.511 417.231c0-.245.014-.488.037-.728h-4.47v1.573h4.483a7.579 7.579 0 01-.05-.845zm6.739-7.511a7.61 7.61 0 011.574-.008v-4.539H89.25v4.547zm-8.251-.446l3.201 3.2c.166-.204.339-.4.525-.586.186-.187.383-.36.587-.526l-3.2-3.2-1.113 1.112zm14.935 3.2l3.199-3.199-1.111-1.112-3.2 3.2c.205.166.402.34.588.526.185.185.358.382.524.585zm1.651 4.03c.023.239.037.482.037.728 0 .286-.019.567-.05.846h4.582v-1.573h-4.569zm-2.176 6.069a7.468 7.468 0 01-.587.524l3.199 3.199 1.111-1.112-3.198-3.198a7.305 7.305 0 01-.525.587zm-11.211-.588l-3.2 3.199 1.113 1.112 3.199-3.199a7.476 7.476 0 01-.586-.524 7.716 7.716 0 01-.526-.588zm5.052 2.754v4.51h1.574v-4.502a7.36 7.36 0 01-1.574-.008zM318.672 178.192l5.806 5.806c.301-.37.616-.727.953-1.063.338-.338.695-.654 1.066-.956l-5.805-5.806-2.02 2.019zm2.743 14.435c0-.445.025-.884.066-1.318h-8.108v2.852h8.133a13.632 13.632 0 01-.091-1.534zm24.353-8.628l5.806-5.807-2.016-2.019-5.808 5.807c.37.301.728.617 1.063.954.337.337.654.694.955 1.065zm-12.125-5c.486-.052.979-.083 1.48-.083.464 0 .921.024 1.373.069v-8.235h-2.854v8.249zm-9.166 22.254l-5.805 5.804 2.021 2.018 5.804-5.803a13.58 13.58 0 01-1.065-.953 13.578 13.578 0 01-.955-1.066zm9.166 4.996v8.18h2.854v-8.167a13.64 13.64 0 01-2.854-.013zm15.121-14.94c.041.434.066.873.066 1.318 0 .519-.035 1.03-.091 1.534h8.313v-2.852h-8.288zm-3.951 11.01c-.336.336-.692.651-1.062.951l5.806 5.805 2.016-2.018-5.805-5.805c-.301.371-.617.729-.955 1.067z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Esvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#8651A7'),
					$elm$svg$Svg$Attributes$stroke('#381D60'),
					$elm$svg$Svg$Attributes$strokeWidth('9.068'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M316.73 358.421c-7.101-23.851-22.313-40.988-48.574-77.632-21.786-30.405-10.676-67.129-10.676-67.129l-50.234-37.535-112.131 26.87S58.468 308.71 90.388 408.988c13.958 48.683 47.977 87.01 106.563 87.01 63.965 0 128.604-41.317 126.113-104.926-.06-1.564-3.005-24.348-6.334-32.651z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('9.068'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M149.767 152.961c0 2.574 18.016-50.019 23.163-50.318s18.793 1.5 28.504 0c9.07-1.4-25.931 11.038-16.494 50.41l-35.173-.092z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('9.068'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M263.319 227.889c1.881-33.018-16.628-107.048-126.421-84.365-88.349 18.251-66.916 140.697-42.895 83.217 24.021-57.48 67.775 76.354 93.511 30.026 25.737-46.327 28.31-55.764 50.616-28.311 22.307 27.454 25.189-.567 25.189-.567z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#381D60'),
					$elm$svg$Svg$Attributes$d('M243.549 321.341c0 2.317-.469 4.523-1.319 6.529a16.813 16.813 0 01-3.596 5.334 16.821 16.821 0 01-5.332 3.596 16.725 16.725 0 01-6.53 1.316c-2.317 0-4.524-.468-6.531-1.316s-3.815-2.079-5.333-3.596a16.81 16.81 0 01-3.595-5.334l16.102-6.529-16.102-6.531a16.817 16.817 0 018.928-8.928 16.724 16.724 0 016.531-1.319c2.316 0 4.522.471 6.53 1.319a16.802 16.802 0 015.332 3.595 16.82 16.82 0 013.596 5.333 16.706 16.706 0 011.319 6.531zM155.603 321.341a16.71 16.71 0 01-1.318 6.529 16.848 16.848 0 01-8.928 8.93 16.725 16.725 0 01-6.53 1.316c-2.317 0-4.524-.468-6.532-1.316a16.821 16.821 0 01-5.332-3.596 16.778 16.778 0 01-3.595-5.334l16.102-6.529-16.102-6.531a16.801 16.801 0 013.595-5.333 16.726 16.726 0 0111.864-4.914c2.316 0 4.522.471 6.53 1.319a16.829 16.829 0 018.928 8.928 16.724 16.724 0 011.318 6.531zM209.622 365.448c-4.058-4.951-13.764-5.689-19.188-5.689-1.736 0-2.941.075-3.25.097a49.352 49.352 0 00-3.249-.097c-5.424 0-15.129.738-19.188 5.689-1.686 2.057-2.24 4.607-1.646 7.576 2.888 14.445 22.745 19.374 23.589 19.576a.946.946 0 00.454.003c.865-.204 21.232-5.131 24.122-19.579.596-2.968.043-5.519-1.644-7.576zm-.282 7.192c-2.488 12.434-20.193 17.415-22.416 17.991-27.905-23.22.185-28.809.185-28.809.051.003.102.003.151 0a44.783 44.783 0 013.174-.098c4.087 0 13.99.485 17.667 4.97 1.314 1.602 1.718 3.546 1.239 5.946zM29.992 264.084c-15.636-15.637-33.516 5.085-19.302 19.3 12.794 12.793 36.247-2.355 46.487 7.885-10.24-10.24 4.909-33.692-7.884-46.487-14.215-14.214-34.938 3.666-19.301 19.302z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#381D60'),
					$elm$svg$Svg$Attributes$strokeWidth('1.295'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('323.466'),
					$elm$svg$Svg$Attributes$cy('457.934'),
					$elm$svg$Svg$Attributes$r('8.385')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#381D60'),
					$elm$svg$Svg$Attributes$cx('309.111'),
					$elm$svg$Svg$Attributes$cy('475.64'),
					$elm$svg$Svg$Attributes$r('6.033')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#381D60'),
					$elm$svg$Svg$Attributes$d('M328.56 302.272c2.862-1.566 6.486-5.189 8.053-8.052l4.795-8.767c1.566-2.863 4.129-2.863 5.694 0l4.794 8.766c1.565 2.863 5.189 6.487 8.052 8.053l8.767 4.794c2.862 1.565 2.862 4.128 0 5.693l-8.767 4.794c-2.862 1.565-6.486 5.189-8.052 8.052l-4.794 8.769c-1.565 2.862-4.128 2.862-5.693 0l-4.797-8.769c-1.565-2.862-5.189-6.486-8.052-8.052l-8.767-4.794c-2.862-1.565-2.862-4.128 0-5.693l8.767-4.794zM389.979 282.587c-2.483 1.358-5.626 4.5-6.983 6.983-1.357 2.483-3.58 2.483-4.938 0-1.357-2.482-4.5-5.625-6.983-6.983s-2.483-3.58 0-4.938c2.483-1.358 5.626-4.5 6.983-6.983 1.357-2.482 3.58-2.482 4.938 0 1.357 2.483 4.5 5.625 6.983 6.983 2.483 1.358 2.483 3.58 0 4.938z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M92.79 427.931c2.863-1.565 6.487-5.189 8.052-8.052l4.795-8.769c1.565-2.862 4.127-2.862 5.693 0l4.794 8.769c1.566 2.862 5.189 6.486 8.052 8.052l8.766 4.794c2.863 1.565 2.863 4.128 0 5.693l-8.766 4.794c-2.863 1.565-6.487 5.189-8.052 8.052l-4.794 8.768c-1.565 2.862-4.128 2.862-5.693 0l-4.795-8.768c-1.565-2.862-5.189-6.486-8.052-8.052l-8.766-4.794c-2.863-1.565-2.863-4.128 0-5.693l8.766-4.794zM129.206 463.192c1.3-.71 2.945-2.355 3.656-3.655l2.177-3.979c.711-1.3 1.874-1.3 2.585 0l2.176 3.979c.711 1.3 2.356 2.944 3.656 3.655l3.98 2.177c1.3.711 1.3 1.874 0 2.584l-3.98 2.178c-1.3.71-2.945 2.355-3.656 3.655l-2.176 3.979c-.711 1.3-1.874 1.3-2.585 0l-2.177-3.979c-.711-1.3-2.356-2.945-3.656-3.655l-3.979-2.178c-1.3-.71-1.3-1.873 0-2.584l3.979-2.177z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#381D60'),
					$elm$svg$Svg$Attributes$d('M371.923 231.138l4.947-4.947-1.72-1.72-4.947 4.948c.315.256.62.525.907.813s.557.59.813.906zm-10.335-4.259c.415-.045.836-.071 1.263-.071.396 0 .786.021 1.172.059v-7.019h-2.435v7.031zm-12.757-.689l4.947 4.948c.257-.316.526-.621.813-.908s.592-.556.907-.812l-4.948-4.948-1.719 1.72zm2.337 12.301c0-.38.021-.754.057-1.125h-6.91v2.433h6.932a11.3 11.3 0 01-.079-1.308zm19.942 8.259c-.287.287-.592.556-.907.813l4.947 4.947 1.72-1.72-4.947-4.947c-.256.315-.526.62-.813.907zm3.367-9.384c.035.371.057.745.057 1.125 0 .443-.029.878-.078 1.308h7.085v-2.433h-7.064zm-12.889 12.735v6.972h2.435v-6.96c-.386.038-.776.059-1.172.059a11.967 11.967 0 01-1.263-.071zm-7.81-4.258l-4.947 4.947 1.72 1.72 4.948-4.948c-.315-.256-.62-.525-.907-.812s-.557-.592-.814-.907zM82.634 479.375c.249-.026.5-.042.756-.042.237 0 .471.013.702.035v-4.204h-1.458v4.211zm-7.642-.412l2.963 2.964c.154-.189.315-.372.487-.544s.354-.333.544-.486l-2.963-2.963-1.031 1.029zm13.832 2.964l2.963-2.964-1.03-1.029-2.963 2.963a6.771 6.771 0 011.03 1.03zm-12.432 4.404c0-.228.013-.451.034-.673h-4.139v1.457h4.151a7.239 7.239 0 01-.046-.784zm11.946 4.947a6.996 6.996 0 01-.544.487l2.963 2.963 1.03-1.03-2.963-2.963a6.948 6.948 0 01-.486.543zm2.016-5.62c.021.222.034.445.034.673 0 .266-.018.526-.047.784h4.244v-1.457h-4.231zm-7.72 7.628v4.176h1.458v-4.169a6.979 6.979 0 01-1.458-.007zm-4.678-2.551l-2.963 2.963 1.031 1.03 2.963-2.963c-.189-.154-.372-.315-.544-.487s-.334-.354-.487-.543z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute('opacity');
var $author$project$Data$Fsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#0F3300'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('1.366'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M12.166 143.985s10.417 12.412 20.375 23.376c10.819 11.911 51.104 16.436 62.868 7.387 11.762-9.047 53.384 21.716 51.574 47.051l15.382-8.144s-19-72.247-75.098-60.622c-56.099 11.625-57.004-16.286-57.004-16.286l-18.097 7.238z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#0F3300'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('1.366'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M126.353 67.618s-13.045 6.957-22.613 6.377c0 1.45-32.625 60.326-17.972 80.88 14.653 20.554 31.887 60.877 31.887 60.877s-26.379-104.649 8.698-148.134z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#0F3300'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M173.955 119.5h16.395s-7.468 39.666 30.508 59.621l-9.856 30.176s-24.643-12.429-45.804 20.909l.168-37.355s19.254-14.455 34.329-4.801c-.001 0-34.377-44.55-25.74-68.55z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#0F3300'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('1.366'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M279.389 158.04s-35.052-35.327-50.414-38.235c-15.366-2.908-27.145-27.542-26.328-53.348l-19.476 24.641s24.641 46.383 48.122 51.89c23.481 5.508 34.206 39.425 25.51 48.122l-33.047 1.45-2.898 20.873 51.6-1.45 6.931-53.943zM273.159 75.703c2.688-3.105 26.963-22.011 22.903-5.777-4.058 16.235-12.239 24.631 3.012 39.275 15.251 14.645-5.91 27.546-5.91 27.546s-44.066-33.235-20.005-61.044z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#0F3300'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M323.542 150.806c26.443-43.483 64.292-57.978 64.292-57.978-9.278-5.219-23.771-21.452-23.771-21.452-14.783 30.726-73.923 120.736-73.923 120.736l-34.206 84.795 29.351 35.94c-10.65-68.419 17.612-105.513 17.612-105.513 59.429 5.217 36.525-43.774 36.525-43.774 17.394-2.32 9.278 6.378 9.278 6.378s9.274 10.146 9.274 11.015c0 .87 24.641-17.683 9.856-31.598-14.783-13.913-44.288 1.451-44.288 1.451zm2.958 21.572a3.123 3.123 0 01-3.123 3.122h-8.754a3.122 3.122 0 01-3.123-3.122v-.757a3.123 3.123 0 013.123-3.122h8.754a3.122 3.122 0 013.123 3.122v.757zm.342 18.004l-6.506 4.99a3.414 3.414 0 11-4.158-5.42l6.506-4.989a3.414 3.414 0 114.158 5.419z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('b'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('307.014'),
					$elm$svg$Svg$Attributes$y1('461.682'),
					$elm$svg$Svg$Attributes$x2('86.882'),
					$elm$svg$Svg$Attributes$y2('80.403')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.363'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.4'),
							$elm$svg$Svg$Attributes$stopColor('#f1f2c4')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.449'),
							$elm$svg$Svg$Attributes$stopColor('#e0e4b5')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.504'),
							$elm$svg$Svg$Attributes$stopColor('#c4cc9d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.565'),
							$elm$svg$Svg$Attributes$stopColor('#9eab7c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.63'),
							$elm$svg$Svg$Attributes$stopColor('#6c8150')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.697'),
							$elm$svg$Svg$Attributes$stopColor('#304f1d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.731'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('c'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('185.739'),
					$elm$svg$Svg$Attributes$y1('515.545'),
					$elm$svg$Svg$Attributes$x2('185.739'),
					$elm$svg$Svg$Attributes$y2('71.038')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#b)'),
					$elm$svg$Svg$Attributes$stroke('url(#c)'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M323.542 104.34l-22.768-7.903-58.069 167.285c-7.511-4.47-15.525-7.729-23.908-9.554l41.5-164.183-34.347-8.349L182.721 253h-15.578l-5.278-176.962-28.68.689 5.352 179.033c-4.043 1.247-7.994 2.778-11.827 4.672L75.345 94.418l-27.409 8.47 54.257 175.339c-23.628 23.627-38.914 61.23-38.914 103.542 0 71.422 43.548 128.774 97.266 128.774 7.274 0 11.894-.545 21.177-.545H202.9c53.719 0 97.266-57.355 97.266-128.777 0-41.447-14.682-78.089-37.488-101.678l60.864-175.203z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('d'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('99.867'),
					$elm$svg$Svg$Attributes$y1('367.399'),
					$elm$svg$Svg$Attributes$x2('219.477'),
					$elm$svg$Svg$Attributes$y2('367.399')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#d)'),
					$elm$svg$Svg$Attributes$strokeWidth('1.533'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M100.634 467.923c0-111.124 52.812-201.047 118.076-201.047')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('e'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('122.45'),
					$elm$svg$Svg$Attributes$y1('383.641'),
					$elm$svg$Svg$Attributes$x2('233.06'),
					$elm$svg$Svg$Attributes$y2('383.641')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#e)'),
					$elm$svg$Svg$Attributes$strokeWidth('1.405'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M123.152 475.035c0-101.031 48.844-182.788 109.206-182.788')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('f'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('145.033'),
					$elm$svg$Svg$Attributes$y1('399.883'),
					$elm$svg$Svg$Attributes$x2('246.644'),
					$elm$svg$Svg$Attributes$y2('399.883')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#f)'),
					$elm$svg$Svg$Attributes$strokeWidth('1.278'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M145.672 482.148c0-90.939 44.876-164.53 100.334-164.53')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('g'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('167.615'),
					$elm$svg$Svg$Attributes$y1('416.125'),
					$elm$svg$Svg$Attributes$x2('260.229'),
					$elm$svg$Svg$Attributes$y2('416.125')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#g)'),
					$elm$svg$Svg$Attributes$strokeWidth('1.15'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M168.19 489.261c0-80.848 40.908-146.271 91.464-146.271')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('h'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('190.198'),
					$elm$svg$Svg$Attributes$y1('432.367'),
					$elm$svg$Svg$Attributes$x2('273.813'),
					$elm$svg$Svg$Attributes$y2('432.367')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#h)'),
					$elm$svg$Svg$Attributes$strokeWidth('1.022'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M190.709 496.374c0-70.756 36.941-128.013 82.593-128.013')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('i'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('212.781'),
					$elm$svg$Svg$Attributes$y1('448.609'),
					$elm$svg$Svg$Attributes$x2('287.398'),
					$elm$svg$Svg$Attributes$y2('448.609')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#i)'),
					$elm$svg$Svg$Attributes$strokeWidth('.895'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M213.229 503.486c0-60.664 32.973-109.754 73.723-109.754')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('j'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('86.639'),
					$elm$svg$Svg$Attributes$y1('346.685'),
					$elm$svg$Svg$Attributes$x2('185.909'),
					$elm$svg$Svg$Attributes$y2('346.685')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#f7f7c9')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#0f3300')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$opacity('.3'),
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#j)'),
					$elm$svg$Svg$Attributes$strokeWidth('1.254'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M87.266 427.77c0-89.637 43.838-162.169 98.017-162.169')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#244C11'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('.688'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M46.771 271.948c-12.829-12.829-27.499 4.173-15.836 15.835 10.497 10.496 29.739-1.933 38.14 6.469-8.401-8.402 4.028-27.643-6.468-38.141-11.664-11.661-28.665 3.008-15.836 15.837z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#244C11'),
					$elm$svg$Svg$Attributes$strokeWidth('1.412'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('307.261'),
					$elm$svg$Svg$Attributes$cy('458.232'),
					$elm$svg$Svg$Attributes$r('9.14')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#244C11'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('.914'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('291.613'),
					$elm$svg$Svg$Attributes$cy('477.531'),
					$elm$svg$Svg$Attributes$r('6.576')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#244C11'),
							$elm$svg$Svg$Attributes$d('M325.549 323.893c-.832 0-1.63-.62-2.246-1.747l-4.346-7.943c-1.45-2.652-4.79-5.993-7.445-7.445l-7.941-4.344c-1.128-.616-1.748-1.414-1.748-2.246s.62-1.629 1.748-2.246l7.941-4.343c2.653-1.451 5.994-4.792 7.446-7.445l4.344-7.942c.616-1.127 1.414-1.748 2.246-1.748s1.63.621 2.247 1.748l4.344 7.941c1.452 2.655 4.792 5.995 7.445 7.446l7.941 4.343c1.128.617 1.748 1.414 1.748 2.246s-.62 1.629-1.747 2.246l-7.942 4.344c-2.653 1.452-5.993 4.792-7.445 7.445l-4.344 7.942c-.616 1.127-1.414 1.748-2.246 1.748z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#0F3300'),
							$elm$svg$Svg$Attributes$d('M325.549 276.823c.677 0 1.374.565 1.913 1.55l4.344 7.941c1.481 2.708 4.89 6.116 7.597 7.597l7.941 4.343c.985.539 1.551 1.236 1.55 1.913 0 .677-.564 1.374-1.55 1.913l-7.941 4.344c-2.708 1.481-6.115 4.889-7.597 7.597l-4.344 7.942c-.539.985-1.236 1.55-1.913 1.55s-1.374-.564-1.913-1.55l-4.346-7.942c-1.479-2.707-4.888-6.115-7.597-7.597l-7.941-4.344c-.985-.539-1.55-1.236-1.55-1.913-.001-.677.564-1.374 1.55-1.913l7.941-4.343c2.708-1.48 6.116-4.888 7.598-7.596l4.344-7.942c.539-.985 1.236-1.55 1.914-1.55m-.001-.76c-.935 0-1.87.648-2.579 1.945l-4.344 7.942c-1.419 2.593-4.702 5.876-7.296 7.294l-7.941 4.343c-2.594 1.418-2.594 3.74 0 5.158l7.941 4.344c2.594 1.419 5.877 4.701 7.295 7.295l4.346 7.942c.709 1.297 1.644 1.945 2.579 1.945.935 0 1.869-.648 2.579-1.945l4.344-7.942c1.419-2.594 4.701-5.876 7.295-7.295l7.941-4.344c2.594-1.418 2.594-3.739 0-5.158l-7.941-4.343c-2.594-1.418-5.876-4.701-7.295-7.295l-4.344-7.941c-.71-1.296-1.645-1.945-2.58-1.945z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#244C11'),
							$elm$svg$Svg$Attributes$d('M358.41 283.045c-.702 0-1.378-.529-1.903-1.489-1.264-2.309-4.169-5.215-6.477-6.477-.961-.525-1.49-1.202-1.49-1.904s.529-1.378 1.49-1.904c2.309-1.263 5.214-4.168 6.477-6.477.525-.96 1.201-1.489 1.903-1.489s1.378.529 1.903 1.489c1.262 2.308 4.167 5.213 6.477 6.477.961.525 1.49 1.202 1.49 1.904 0 .703-.529 1.379-1.49 1.904-2.309 1.262-5.214 4.168-6.477 6.477-.525.961-1.201 1.489-1.903 1.489z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#0F3300'),
							$elm$svg$Svg$Attributes$d('M358.41 263.685c.549 0 1.121.471 1.57 1.292 1.291 2.362 4.265 5.335 6.628 6.627.821.449 1.292 1.022 1.292 1.571 0 .549-.471 1.122-1.292 1.571-2.363 1.292-5.336 4.265-6.628 6.628-.449.821-1.021 1.292-1.57 1.292s-1.121-.471-1.57-1.292c-1.293-2.363-4.266-5.336-6.628-6.628-.821-.449-1.292-1.022-1.292-1.571 0-.549.471-1.122 1.292-1.571 2.362-1.292 5.336-4.266 6.628-6.627.449-.821 1.021-1.292 1.57-1.292m0-.759c-.811 0-1.621.562-2.236 1.687-1.23 2.249-4.077 5.095-6.326 6.326-2.25 1.23-2.25 3.244 0 4.474 2.249 1.23 5.096 4.077 6.326 6.326.615 1.125 1.426 1.687 2.236 1.687s1.621-.562 2.236-1.687c1.229-2.249 4.076-5.096 6.326-6.326 2.25-1.23 2.25-3.244 0-4.474s-5.097-4.077-6.326-6.326c-.615-1.125-1.425-1.687-2.236-1.687z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#FFF'),
							$elm$svg$Svg$Attributes$d('M85.25 461.498c3.121-1.706 7.07-5.656 8.777-8.776l5.227-9.558c1.707-3.12 4.5-3.12 6.206 0l5.227 9.558c1.706 3.12 5.656 7.07 8.776 8.776l9.556 5.227c3.121 1.706 3.121 4.499 0 6.205l-9.555 5.226c-3.121 1.706-7.071 5.656-8.777 8.776l-5.226 9.557c-1.707 3.12-4.5 3.12-6.206 0l-5.227-9.557c-1.707-3.12-5.656-7.07-8.777-8.776l-9.555-5.226c-3.121-1.706-3.121-4.499 0-6.205l9.554-5.227z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#FFF'),
							$elm$svg$Svg$Attributes$d('M128.214 490.124c1.417-.774 3.21-2.567 3.985-3.984l2.373-4.337c.775-1.417 2.042-1.417 2.817 0l2.373 4.337c.775 1.417 2.568 3.21 3.985 3.984l4.338 2.373c1.417.774 1.417 2.042 0 2.817l-4.339 2.372c-1.417.775-3.209 2.568-3.984 3.985l-2.373 4.338c-.775 1.417-2.042 1.417-2.817 0l-2.373-4.338c-.775-1.417-2.568-3.21-3.984-3.985l-4.338-2.372c-1.417-.775-1.417-2.043 0-2.817l4.337-2.373z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#244C11'),
							$elm$svg$Svg$Attributes$d('M341.253 224.942a10.54 10.54 0 012.206-.01v-6.359h-2.205v6.369zm9.362 3.859l4.481-4.482-1.558-1.559-4.482 4.482c.286.232.563.476.823.737.261.26.504.536.736.822zm-18.802 6.661c0-.344.02-.684.052-1.019h-6.261v2.204h6.279c-.042-.389-.07-.784-.07-1.185zm-2.118-11.143l4.482 4.483c.232-.286.476-.562.736-.822.26-.26.536-.504.822-.736l-4.483-4.483-1.557 1.558zm23.234 10.124c.032.335.052.675.052 1.019 0 .401-.027.795-.07 1.185h6.418v-2.204h-6.4zm-3.049 8.502c-.261.26-.536.504-.823.736l4.482 4.482 1.558-1.558-4.481-4.482a10.84 10.84 0 01-.736.822zm-8.627 3.035v6.316h2.205v-6.306a10.535 10.535 0 01-2.205-.01zm-7.075-3.857l-4.482 4.482 1.558 1.558 4.482-4.483a10.602 10.602 0 01-.821-.735c-.262-.26-.505-.536-.737-.822z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('none'),
							$elm$svg$Svg$Attributes$stroke('#0F3300'),
							$elm$svg$Svg$Attributes$strokeWidth('.759'),
							$elm$svg$Svg$Attributes$strokeLinecap('round'),
							$elm$svg$Svg$Attributes$strokeLinejoin('round'),
							$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
							$elm$svg$Svg$Attributes$d('M341.253 224.942a10.54 10.54 0 012.206-.01v-6.359h-2.205v6.369zm9.362 3.859l4.481-4.482-1.558-1.559-4.482 4.482c.286.232.563.476.823.737.261.26.504.536.736.822zm-18.802 6.661c0-.344.02-.684.052-1.019h-6.261v2.204h6.279c-.042-.389-.07-.784-.07-1.185zm-2.118-11.143l4.482 4.483c.232-.286.476-.562.736-.822.26-.26.536-.504.822-.736l-4.483-4.483-1.557 1.558zm23.234 10.124c.032.335.052.675.052 1.019 0 .401-.027.795-.07 1.185h6.418v-2.204h-6.4zm-3.049 8.502c-.261.26-.536.504-.823.736l4.482 4.482 1.558-1.558-4.481-4.482a10.84 10.84 0 01-.736.822zm-8.627 3.035v6.316h2.205v-6.306a10.535 10.535 0 01-2.205-.01zm-7.075-3.857l-4.482 4.482 1.558 1.558 4.482-4.483a10.602 10.602 0 01-.821-.735c-.262-.26-.505-.536-.737-.822z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#244C11'),
							$elm$svg$Svg$Attributes$d('M95.191 519.047c.188-.188.386-.362.592-.529l-3.229-3.229-1.125 1.122 3.23 3.23c.169-.207.344-.407.532-.594zm4.569-2.188c.271-.029.545-.046.824-.046.258 0 .514.014.765.039v-4.584H99.76v4.591zm-6.804 7.582c0-.248.014-.492.037-.733h-4.512v1.589h4.525a8.063 8.063 0 01-.05-.856zm13.551-4.8l3.23-3.23-1.123-1.122-3.229 3.229c.206.167.405.342.592.529s.363.387.53.594zm-.53 10.193a7.854 7.854 0 01-.593.531l3.23 3.229 1.123-1.122-3.23-3.23a7.616 7.616 0 01-.53.592zm2.197-6.126c.023.241.037.485.037.733 0 .289-.02.574-.051.855h4.626v-1.589h-4.612zm-13.514 5.534l-3.23 3.23 1.125 1.122 3.229-3.229c-.206-.168-.405-.344-.593-.531s-.363-.386-.531-.592zm5.1 2.78v4.552h1.589v-4.545a7.474 7.474 0 01-1.589-.007z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('none'),
							$elm$svg$Svg$Attributes$stroke('#0F3300'),
							$elm$svg$Svg$Attributes$strokeWidth('.914'),
							$elm$svg$Svg$Attributes$strokeLinecap('round'),
							$elm$svg$Svg$Attributes$strokeLinejoin('round'),
							$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
							$elm$svg$Svg$Attributes$d('M95.191 519.047c.188-.188.386-.362.592-.529l-3.229-3.229-1.125 1.122 3.23 3.23c.169-.207.344-.407.532-.594zm4.569-2.188c.271-.029.545-.046.824-.046.258 0 .514.014.765.039v-4.584H99.76v4.591zm-6.804 7.582c0-.248.014-.492.037-.733h-4.512v1.589h4.525a8.063 8.063 0 01-.05-.856zm13.551-4.8l3.23-3.23-1.123-1.122-3.229 3.229c.206.167.405.342.592.529s.363.387.53.594zm-.53 10.193a7.854 7.854 0 01-.593.531l3.23 3.229 1.123-1.122-3.23-3.23a7.616 7.616 0 01-.53.592zm2.197-6.126c.023.241.037.485.037.733 0 .289-.02.574-.051.855h4.626v-1.589h-4.612zm-13.514 5.534l-3.23 3.23 1.125 1.122 3.229-3.229c-.206-.168-.405-.344-.593-.531s-.363-.386-.531-.592zm5.1 2.78v4.552h1.589v-4.545a7.474 7.474 0 01-1.589-.007z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#244C11'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('1.145'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M248.858 360.049c0 2.653-.536 5.18-1.51 7.477a19.356 19.356 0 01-4.117 6.109 19.299 19.299 0 01-6.108 4.116 19.165 19.165 0 01-7.476 1.508c-2.655 0-5.183-.537-7.48-1.508a19.266 19.266 0 01-10.225-10.225l18.44-7.477-18.44-7.479a19.24 19.24 0 014.118-6.106 19.154 19.154 0 0113.587-5.629 19.153 19.153 0 0113.584 5.629 19.282 19.282 0 014.117 6.106 19.113 19.113 0 011.51 7.479zM148.147 360.049c0 2.653-.538 5.18-1.51 7.477a19.287 19.287 0 01-4.116 6.109 19.317 19.317 0 01-6.107 4.116 19.18 19.18 0 01-7.479 1.508c-2.654 0-5.18-.537-7.479-1.508a19.307 19.307 0 01-6.106-4.116 19.284 19.284 0 01-4.117-6.109l18.438-7.477-18.438-7.479a19.204 19.204 0 014.117-6.106 19.16 19.16 0 0113.585-5.629 19.164 19.164 0 0113.586 5.629 19.23 19.23 0 014.116 6.106 19.13 19.13 0 011.51 7.479z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#244C11'),
					$elm$svg$Svg$Attributes$stroke('#0F3300'),
					$elm$svg$Svg$Attributes$strokeWidth('1.366'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M215.793 420.311c-5.545-6.765-18.806-7.773-26.216-7.773-2.372 0-4.019.103-4.441.131a68.48 68.48 0 00-4.439-.131c-7.411 0-20.67 1.009-26.215 7.773-2.303 2.81-3.061 6.295-2.248 10.352 3.946 19.734 31.075 26.469 32.229 26.745.104.026.208.038.314.038.102 0 .205-.012.306-.034 1.182-.278 29.008-7.01 32.957-26.749.813-4.058.056-7.543-2.247-10.352zm-.388 9.825c-3.397 16.988-27.588 23.794-30.624 24.581-38.126-31.725.252-39.36.252-39.36.069.004.139.004.206 0 .017-.003 1.744-.134 4.337-.134 5.584 0 19.113.663 24.137 6.79 1.796 2.189 2.349 4.844 1.692 8.123z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Gsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F46460'),
					$elm$svg$Svg$Attributes$stroke('#BAD616'),
					$elm$svg$Svg$Attributes$strokeWidth('10.244'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M136.894 87.62S54.007 260.618 42.89 293.072C38.105 307.037-20.103 492.71 188.257 492.71c208.361 0 143.1-211.998 139.553-224.834-11.486-41.579-83.344-161.842-76.561-180.255.001-.001-89.159 8.721-114.355-.001z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F4A6A6')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M161.759 172.295c-.816 4.182-3.964 6.566-7.031 5.327l-15.789-6.381c-3.067-1.239-4.89-5.635-4.074-9.814l.058-.297c.816-4.181 3.964-6.566 7.029-5.328l15.79 6.382c3.068 1.241 4.892 5.636 4.073 9.815l-.056.296zM148.587 255.534c-.815 4.181-3.964 6.566-7.031 5.327l-15.788-6.38c-3.068-1.24-4.891-5.635-4.075-9.815l.057-.298c.816-4.181 3.966-6.565 7.031-5.327l15.789 6.382c3.068 1.241 4.891 5.635 4.074 9.816l-.057.295zM135.417 338.772c-.815 4.179-3.964 6.566-7.031 5.326l-15.787-6.379c-3.068-1.241-4.892-5.636-4.076-9.817l.055-.298c.818-4.181 3.967-6.564 7.033-5.327l15.788 6.382c3.067 1.24 4.891 5.634 4.074 9.816l-.056.297zM122.246 422.011c-.814 4.177-3.963 6.566-7.03 5.325l-15.787-6.378c-3.069-1.242-4.892-5.636-4.076-9.818l.055-.298c.818-4.182 3.967-6.564 7.035-5.327l15.786 6.382c3.067 1.24 4.89 5.633 4.075 9.817l-.058.297z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F4A6A6')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$d('M216.873 175.143c.821 4.166 3.97 6.542 7.036 5.306l15.781-6.36c3.067-1.236 4.888-5.616 4.067-9.782l-.061-.294c-.819-4.167-3.966-6.543-7.033-5.307l-15.78 6.361c-3.067 1.237-4.889 5.614-4.067 9.78l.057.296zM230.046 258.088c.818 4.165 3.968 6.542 7.033 5.305l15.781-6.36c3.068-1.235 4.887-5.616 4.069-9.781l-.061-.295c-.819-4.166-3.967-6.543-7.033-5.308l-15.783 6.362c-3.066 1.236-4.887 5.614-4.065 9.78l.059.297zM243.216 341.031c.818 4.164 3.969 6.542 7.032 5.305l15.782-6.361c3.069-1.234 4.886-5.614 4.07-9.782l-.062-.293c-.817-4.165-3.968-6.544-7.033-5.308l-15.783 6.362c-3.068 1.235-4.887 5.614-4.065 9.78l.059.297zM256.387 423.975c.817 4.163 3.968 6.542 7.031 5.305l15.782-6.362c3.069-1.232 4.885-5.613 4.071-9.781l-.062-.295c-.817-4.163-3.969-6.544-7.033-5.308l-15.785 6.364c-3.068 1.234-4.885 5.613-4.064 9.779l.06.298z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F46460'),
					$elm$svg$Svg$Attributes$d('M30.7 179.485C16.786 165.571.876 184.01 13.525 196.659c11.384 11.383 32.253-2.096 41.365 7.017-9.112-9.113 4.368-29.981-7.015-41.365-12.65-12.649-31.089 3.26-17.175 17.174z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#F46460'),
					$elm$svg$Svg$Attributes$strokeWidth('1.531'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('342.497'),
					$elm$svg$Svg$Attributes$cy('446.592'),
					$elm$svg$Svg$Attributes$r('9.912')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#BAD616'),
					$elm$svg$Svg$Attributes$cx('325.525'),
					$elm$svg$Svg$Attributes$cy('467.522'),
					$elm$svg$Svg$Attributes$r('7.132')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#BAD616'),
					$elm$svg$Svg$Attributes$d('M326.303 194.991c2.813-1.539 6.373-5.099 7.912-7.912l4.712-8.613c1.539-2.813 4.057-2.813 5.595 0l4.711 8.612c1.538 2.813 5.099 6.374 7.911 7.912l8.613 4.71c2.813 1.539 2.813 4.056 0 5.594l-8.613 4.71c-2.813 1.538-6.373 5.099-7.911 7.912l-4.711 8.614c-1.538 2.813-4.056 2.813-5.595 0l-4.712-8.615c-1.539-2.813-5.1-6.373-7.912-7.911l-8.613-4.71c-2.813-1.538-2.813-4.056 0-5.594l8.613-4.709z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F46460'),
					$elm$svg$Svg$Attributes$d('M386.65 175.649c-2.44 1.335-5.527 4.422-6.861 6.861s-3.517 2.439-4.85 0c-1.334-2.439-4.422-5.526-6.862-6.861-2.44-1.334-2.44-3.518 0-4.853 2.44-1.334 5.528-4.421 6.862-6.86 1.333-2.439 3.516-2.439 4.85 0s4.421 5.526 6.861 6.86c2.441 1.335 2.441 3.519 0 4.853z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M56.164 434.95c3.385-1.851 7.668-6.135 9.52-9.519l5.668-10.366c1.851-3.384 4.88-3.384 6.731.001l5.667 10.364c1.851 3.385 6.134 7.669 9.519 9.52l10.363 5.668c3.385 1.851 3.385 4.88 0 6.73l-10.363 5.667c-3.385 1.851-7.668 6.135-9.519 9.52l-5.667 10.363c-1.851 3.385-4.88 3.385-6.731.001l-5.668-10.365c-1.851-3.384-6.135-7.668-9.52-9.519l-10.363-5.667c-3.385-1.851-3.385-4.88 0-6.73l10.363-5.668zM102.761 465.997c1.537-.841 3.481-2.785 4.322-4.322l2.573-4.703c.84-1.537 2.215-1.537 3.056 0l2.573 4.703c.841 1.537 2.786 3.481 4.322 4.321l4.705 2.574c1.537.84 1.537 2.215 0 3.055l-4.705 2.574c-1.537.84-3.481 2.784-4.322 4.321l-2.574 4.705c-.84 1.537-2.215 1.537-3.056 0l-2.573-4.705c-.84-1.537-2.785-3.481-4.322-4.322l-4.704-2.572c-1.537-.841-1.537-2.216 0-3.057l4.705-2.572z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#BAD616'),
					$elm$svg$Svg$Attributes$d('M346.222 120.237l4.861 4.861c.251-.311.516-.61.798-.892.282-.282.581-.546.892-.798l-4.862-4.862-1.689 1.691zm22.688 4.861l4.86-4.86-1.689-1.69-4.861 4.861c.311.251.61.516.893.798.282.281.545.581.797.891zm-20.391 7.225c0-.373.021-.741.056-1.105h-6.79v2.39h6.811c-.048-.423-.077-.85-.077-1.285zm10.237-11.41a11.521 11.521 0 012.391-.011v-6.896h-2.392v6.907zm0 22.817v6.85h2.392v-6.839a11.535 11.535 0 01-2.392-.011zm12.664-12.513c.034.364.056.732.056 1.105 0 .435-.029.862-.076 1.285h6.96v-2.39h-6.94zm-20.337 8.329l-4.861 4.861 1.688 1.689 4.861-4.861a11.81 11.81 0 01-.891-.797 11.633 11.633 0 01-.797-.892zm17.029.892c-.282.282-.582.546-.892.798l4.86 4.86 1.689-1.689-4.86-4.86a11.39 11.39 0 01-.797.891zM79.817 499.222c0-.269.015-.534.04-.796h-4.893v1.724h4.908a8.377 8.377 0 01-.055-.928zm2.424-5.851c.203-.203.419-.394.643-.575l-3.502-3.502-1.219 1.217 3.503 3.504a8.18 8.18 0 01.575-.644zm4.955-2.373c.294-.031.592-.05.894-.05.28 0 .557.015.83.042v-4.971h-1.724v4.979zm7.319 3.016l3.503-3.503-1.218-1.217-3.502 3.502c.223.182.439.372.642.575s.393.419.575.643zm-12.849 10.414l-3.504 3.504 1.219 1.217 3.503-3.503a8.36 8.36 0 01-.643-.576 8.748 8.748 0 01-.575-.642zm5.53 3.015v4.937h1.724v-4.929a8.255 8.255 0 01-1.724-.008zm9.127-9.017c.025.262.04.527.04.796 0 .313-.021.623-.055.928h5.017v-1.724h-5.002zm-2.384 6.643a8.157 8.157 0 01-.643.576l3.503 3.503 1.218-1.217-3.503-3.504a7.956 7.956 0 01-.575.642z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F4A6A6'),
					$elm$svg$Svg$Attributes$d('M244.851 294.379c0 2.141-.433 4.179-1.217 6.032a15.535 15.535 0 01-8.249 8.249 15.469 15.469 0 01-6.031 1.216 15.46 15.46 0 01-6.033-1.216 15.554 15.554 0 01-8.249-8.249l14.876-6.032-14.876-6.032a15.516 15.516 0 013.322-4.927 15.453 15.453 0 0110.96-4.54 15.464 15.464 0 0110.958 4.54 15.582 15.582 0 013.322 4.927 15.45 15.45 0 011.217 6.032zM163.61 294.379c0 2.141-.434 4.179-1.218 6.032a15.546 15.546 0 01-8.247 8.249 15.475 15.475 0 01-6.033 1.216c-2.141 0-4.179-.433-6.034-1.216a15.548 15.548 0 01-8.246-8.249l14.873-6.032-14.873-6.032a15.527 15.527 0 018.246-8.248 15.46 15.46 0 016.034-1.219c2.14 0 4.178.436 6.033 1.219a15.52 15.52 0 014.926 3.321 15.45 15.45 0 014.539 10.959zM230.8 351.553c-7.468-9.11-25.327-10.469-35.309-10.469-3.194 0-5.413.138-5.982.178-.563-.04-2.783-.178-5.978-.178-9.981 0-27.84 1.358-35.309 10.469-3.101 3.785-4.122 8.479-3.027 13.942 5.315 26.581 41.854 35.649 43.407 36.023.14.036.282.051.425.051.137 0 .274-.015.41-.048 1.593-.373 39.071-9.44 44.391-36.026 1.094-5.463.073-10.157-3.028-13.942zm-.522 13.234c-4.575 22.881-37.157 32.048-41.247 33.108-51.351-42.73.34-53.015.34-53.015.094.006.188.006.28 0 .021-.004 2.347-.18 5.84-.18 7.522 0 25.742.893 32.508 9.144 2.42 2.951 3.163 6.526 2.279 10.943z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Hsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('k'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('200'),
					$elm$svg$Svg$Attributes$y1('373.157'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('226.843')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#8fe989')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.136'),
							$elm$svg$Svg$Attributes$stopColor('#9cef8d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.388'),
							$elm$svg$Svg$Attributes$stopColor('#adf893')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.663'),
							$elm$svg$Svg$Attributes$stopColor('#b7fd97')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#baff98')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('l'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('200'),
					$elm$svg$Svg$Attributes$y1('376.657'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('223.343')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#fdd869')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.085'),
							$elm$svg$Svg$Attributes$stopColor('#f0df72')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.282'),
							$elm$svg$Svg$Attributes$stopColor('#d8ed83')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.492'),
							$elm$svg$Svg$Attributes$stopColor('#c7f78f')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.72'),
							$elm$svg$Svg$Attributes$stopColor('#bdfd96')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#baff98')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#k)'),
					$elm$svg$Svg$Attributes$stroke('url(#l)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M29.459 259.894c-10.452-28.844 45.033-36.424 49.006-31.788s16.556 20.53 23.179 22.517 7.947 5.298 9.271 9.271 9.934 0 9.934 0 4.636 6.422 11.258 7.847 12.583-3.211 19.868 4.074 11.92-4.636 17.218 0 21.339-7.739 23.915 2.422 11.847 11.486 20.456 9.499 13.246-4.395 20.53.783 8.609-3.432 13.907-8.73.662-11.459 18.543-8.047 9.934-9.457 22.517-11.301 17.881-1.181 23.179-6.479 9.271-3.311 17.219-6.623 10.595-.662 25.165 2.649 16.736-3.195 17.219 25.828c1.516 91.281-273.51 178.144-342.384-11.922z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#69C462'),
					$elm$svg$Svg$Attributes$d('M28.446 202.779c-10.451-10.451-22.401 3.399-12.901 12.9 8.551 8.55 24.226-1.575 31.07 5.271-6.844-6.845 3.281-22.52-5.27-31.071-9.501-9.501-23.35 2.449-12.899 12.9z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#69C462'),
					$elm$svg$Svg$Attributes$strokeWidth('1.5'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('354.965'),
					$elm$svg$Svg$Attributes$cy('343.862'),
					$elm$svg$Svg$Attributes$r('9.912')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FDD869'),
					$elm$svg$Svg$Attributes$d('M341.384 364.279a7.134 7.134 0 01-9.244 4.034 7.134 7.134 0 01-4.034-9.245 7.13 7.13 0 019.242-4.034 7.134 7.134 0 014.036 9.245zM356.169 218.324c1.56-.853 3.534-2.827 4.387-4.386l2.613-4.775c.853-1.56 2.249-1.56 3.102 0l2.611 4.775c.853 1.56 2.827 3.533 4.387 4.386l4.774 2.612c1.56.853 1.56 2.249 0 3.102l-4.774 2.611c-1.56.853-3.534 2.827-4.387 4.386l-2.611 4.776c-.853 1.56-2.249 1.56-3.102 0l-2.613-4.776c-.853-1.56-2.827-3.533-4.387-4.386l-4.774-2.611c-1.56-.853-1.56-2.249 0-3.102l4.774-2.612z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#69C462'),
					$elm$svg$Svg$Attributes$d('M389.627 207.601c-1.353.74-3.064 2.452-3.804 3.804-.739 1.353-1.95 1.353-2.689 0-.739-1.352-2.451-3.064-3.804-3.804-1.354-.74-1.354-1.951 0-2.69 1.353-.739 3.064-2.451 3.804-3.804.739-1.352 1.95-1.352 2.689 0 .739 1.353 2.451 3.064 3.804 3.804 1.353.739 1.353 1.95 0 2.69z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M59.164 321.95c3.385-1.851 7.668-6.135 9.52-9.519l5.668-10.366c1.851-3.384 4.88-3.384 6.731.001l5.667 10.364c1.851 3.385 6.134 7.669 9.519 9.52l10.363 5.668c3.385 1.851 3.385 4.88 0 6.73l-10.363 5.667c-3.385 1.851-7.668 6.135-9.519 9.52l-5.667 10.363c-1.851 3.385-4.88 3.385-6.731.001l-5.668-10.365c-1.851-3.384-6.135-7.668-9.52-9.519l-10.363-5.667c-3.385-1.851-3.385-4.88 0-6.73l10.363-5.668zM105.761 352.997c1.536-.841 3.481-2.785 4.321-4.322l2.573-4.703c.84-1.537 2.215-1.537 3.056 0l2.573 4.703c.841 1.537 2.786 3.481 4.322 4.321l4.705 2.574c1.537.84 1.537 2.215 0 3.055l-4.705 2.574c-1.537.84-3.481 2.784-4.322 4.321l-2.574 4.705c-.84 1.537-2.215 1.537-3.056 0l-2.573-4.705c-.84-1.537-2.785-3.481-4.321-4.322l-4.705-2.572c-1.536-.841-1.536-2.216 0-3.057l4.706-2.572z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FDD869'),
					$elm$svg$Svg$Attributes$d('M367.213 176.879l2.695 2.695c.14-.172.286-.338.442-.495s.322-.303.493-.442l-2.695-2.696-.935.938zm12.578 2.695l2.695-2.695-.937-.937-2.695 2.695a6.132 6.132 0 01.937.937zm-11.305 4.006c0-.207.012-.411.031-.613h-3.765v1.325h3.775a6.98 6.98 0 01-.041-.712zm5.676-6.326a6.418 6.418 0 011.327-.007v-3.824h-1.326v3.831zm-4.254 10.33l-2.695 2.695.936.937 2.695-2.695a6.67 6.67 0 01-.493-.442 6.492 6.492 0 01-.443-.495zm4.254 2.32v3.798h1.326v-3.792a6.418 6.418 0 01-1.326-.006zm7.021-6.938a6.212 6.212 0 01-.011 1.325h3.858v-1.325h-3.847zm-1.833 5.113a6.28 6.28 0 01-.494.442l2.694 2.695.937-.937-2.695-2.695a6.7 6.7 0 01-.442.495zM85.241 380.371c.203-.203.419-.394.643-.575l-3.502-3.502-1.219 1.217 3.503 3.504a8.18 8.18 0 01.575-.644zm12.274.643l3.503-3.503-1.218-1.217-3.502 3.502c.223.182.439.372.642.575s.393.419.575.643zm-14.698 5.208c0-.269.015-.534.04-.796h-4.893v1.724h4.908a8.377 8.377 0 01-.055-.928zm7.379-8.224c.294-.031.592-.05.894-.05.28 0 .557.015.83.042v-4.971h-1.724v4.979zm9.127 7.428c.025.262.04.527.04.796 0 .313-.021.623-.055.928h5.017v-1.724h-5.002zm-14.657 6.002l-3.504 3.504 1.219 1.217 3.503-3.503a8.36 8.36 0 01-.643-.576 8.748 8.748 0 01-.575-.642zm12.273.641a8.157 8.157 0 01-.643.576l3.503 3.503 1.218-1.217-3.503-3.504a7.956 7.956 0 01-.575.642zm-6.743 2.374v4.937h1.724v-4.929a8.255 8.255 0 01-1.724-.008z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#69C462'),
					$elm$svg$Svg$Attributes$d('M274.851 297.379c0 2.142-.433 4.18-1.217 6.032a15.535 15.535 0 01-8.249 8.249 15.469 15.469 0 01-6.031 1.216 15.46 15.46 0 01-6.033-1.216 15.554 15.554 0 01-8.249-8.249l14.876-6.032-14.876-6.031a15.516 15.516 0 013.322-4.927 15.453 15.453 0 0110.96-4.54 15.464 15.464 0 0110.958 4.54 15.44 15.44 0 014.539 10.958zM149.61 297.379c0 2.142-.434 4.18-1.218 6.032a15.546 15.546 0 01-8.247 8.249 15.475 15.475 0 01-6.033 1.216c-2.141 0-4.179-.433-6.034-1.216a15.548 15.548 0 01-8.246-8.249l14.873-6.032-14.873-6.031a15.527 15.527 0 018.246-8.248 15.46 15.46 0 016.034-1.219c2.14 0 4.178.436 6.033 1.219a15.52 15.52 0 014.926 3.321 15.441 15.441 0 014.539 10.958zM220.488 331.506c-3.706-4.521-12.568-5.195-17.521-5.195-1.585 0-2.686.068-2.968.089a43.494 43.494 0 00-2.966-.089c-4.953 0-13.814.675-17.521 5.195-1.539 1.878-2.045 4.207-1.502 6.918 2.638 13.19 20.769 17.69 21.54 17.876a.88.88 0 00.414.001c.791-.185 19.388-4.685 22.027-17.877.542-2.711.036-5.04-1.503-6.918zm-.259 6.567c-2.271 11.354-18.438 15.902-20.468 16.429-25.481-21.204.168-26.307.168-26.307.047.003.093.003.139 0 .01-.002 1.165-.09 2.897-.09 3.732 0 12.774.443 16.131 4.537 1.203 1.464 1.572 3.239 1.133 5.431z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$radialGradient = $elm$svg$Svg$trustedNode('radialGradient');
var $author$project$Data$Isvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#524260'),
					$elm$svg$Svg$Attributes$d('M210.536 184s25.323-84.829 52.171-98.836c26.847-14.007 37.547-.707 16.322 21.704C257.805 129.279 243.038 137 244.818 184h-34.282z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$radialGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('m'),
					$elm$svg$Svg$Attributes$cx('199.145'),
					$elm$svg$Svg$Attributes$cy('331.019'),
					$elm$svg$Svg$Attributes$r('172.252'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#c9b4ff')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#ebe8ff')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#m)'),
					$elm$svg$Svg$Attributes$stroke('#DAD0EF'),
					$elm$svg$Svg$Attributes$strokeWidth('9.87'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M212.982 175.29s-7.47 5.602-10.271 0c-2.802-5.603-7.471-15.875-15.875-14.007-8.404 1.868-10.271-5.603-10.271-5.603s-14.94-11.206-13.073 0c1.867 11.206 1.867 5.913-11.206 8.559-13.073 2.646-47.624 10.117-42.021 22.256 5.603 12.14-22.411 14.007-22.411 14.007s-7.469 9.337-5.602 13.073-10.272 13.073-10.272 13.073-13.073 3.735 0 21.478c13.073 17.742-44.822 45.756-32.683 72.835 12.14 27.079 3.167 64.432-1.685 68.167-4.852 3.734-2.05 17.741 10.089 28.946 12.14 11.206 40.152 20.543 36.417 38.285-3.735 17.743 13.074 14.009 17.742 16.81 4.669 2.801 2.801 7.47 8.404 8.403s23.344-1.867 41.087 13.073c17.742 14.939 20.543-6.537 51.358 12.139 30.814 18.676 67.233-26.146 67.233-26.146s6.536-7.47 14.939-.934c8.404 6.536 23.344-22.41 20.543-26.146-2.801-3.735-.932-12.941 15.875-13.475 16.808-.531 18.675-18.273 28.947-36.016s13.072-17.741 7.47-32.683c-5.603-14.94 14.94-53.226-.934-73.769-15.874-20.544-7.47-23.346-13.073-37.353-5.603-14.006-10.271-13.073-.934-19.609 9.338-6.536-5.603-12.139-12.139-14.941-6.537-2.801-16.808-13.072-14.94-30.814s-10.271-12.139-13.073-14.941c-2.802-2.801-3.734-9.338-12.139-6.536-8.405 2.801-5.604-8.404-26.146-3.735-20.54 4.67-51.356 5.604-51.356 5.604z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.41'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M138.615 199.836c5.385 13.462 12.753 15.013 32.946 6.936M251.415 194.196c5.387 13.462 12.754 15.013 32.947 6.936M189.375 228.036c5.387 13.463 12.753 15.013 32.947 6.936M87.508 315.431c8.564 11.702 16.085 11.373 33.637-1.47')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('2.492'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M241.129 253.071c16.454 19.653 29.683 18.207 59.16-6.473')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.41'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M283.91 347.599c5.148 13.556 12.486 15.236 32.819 7.514M212 446.3c5.148 13.555 12.486 15.234 32.818 7.514')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.693'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M83.688 375.799c6.183 16.28 14.995 18.297 39.412 9.024M135.858 425.149c6.184 16.28 14.996 18.297 39.413 9.024')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('2.004'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M101.852 247.521c7.656 19.135 18.126 21.338 46.826 9.858')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('124.926'),
					$elm$svg$Svg$Attributes$cy('246.958'),
					$elm$svg$Svg$Attributes$r('8.871')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('154.537'),
					$elm$svg$Svg$Attributes$cy('194.788'),
					$elm$svg$Svg$Attributes$r('8.871')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('270.158'),
					$elm$svg$Svg$Attributes$cy('191.968'),
					$elm$svg$Svg$Attributes$r('8.871')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('265.928'),
					$elm$svg$Svg$Attributes$cy('248.369'),
					$elm$svg$Svg$Attributes$r('8.871')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('230.678'),
					$elm$svg$Svg$Attributes$cy('441.541'),
					$elm$svg$Svg$Attributes$r('8.871')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('103.776'),
					$elm$svg$Svg$Attributes$cy('373.86'),
					$elm$svg$Svg$Attributes$r('5.239')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('155.947'),
					$elm$svg$Svg$Attributes$cy('424.621'),
					$elm$svg$Svg$Attributes$r('5.24')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('305.408'),
					$elm$svg$Svg$Attributes$cy('331.56'),
					$elm$svg$Svg$Attributes$r('5.24')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('103.775'),
					$elm$svg$Svg$Attributes$cy('310.409'),
					$elm$svg$Svg$Attributes$r('5.24')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('205.297'),
					$elm$svg$Svg$Attributes$cy('228.628'),
					$elm$svg$Svg$Attributes$r('5.24')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.41'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M194.801 326.827c5.148 13.555 12.486 15.234 32.819 7.514')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('210.658'),
					$elm$svg$Svg$Attributes$cy('323.479'),
					$elm$svg$Svg$Attributes$r('5.239')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DAD0EF'),
					$elm$svg$Svg$Attributes$d('M33.392 170.838c-14.736-14.736-31.586 4.793-18.19 18.189 12.057 12.056 34.159-2.22 43.81 7.432-9.65-9.652 4.626-31.753-7.43-43.811-13.398-13.396-32.926 3.454-18.19 18.19z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#524260'),
					$elm$svg$Svg$Attributes$strokeWidth('1.41'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M384.129 441.143c-2.819 7.186-10.933 10.729-18.119 7.91-7.186-2.82-10.724-10.935-7.902-18.12 2.818-7.185 10.929-10.726 18.115-7.908 7.184 2.819 10.72 10.934 7.906 18.118z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DAD0EF'),
					$elm$svg$Svg$Attributes$d('M351.969 464.827c-2.028 5.166-7.865 7.716-13.034 5.688-5.17-2.03-7.716-7.867-5.688-13.036 2.028-5.168 7.861-7.717 13.031-5.688 5.17 2.027 7.719 7.867 5.691 13.036z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#524260'),
							$elm$svg$Svg$Attributes$d('M343.206 189.937c2.199-1.203 4.982-3.986 6.186-6.185l3.684-6.733c1.203-2.199 3.172-2.199 4.374 0l3.682 6.732c1.202 2.199 3.985 4.982 6.185 6.186l6.733 3.682c2.199 1.203 2.199 3.171 0 4.374l-6.733 3.681c-2.199 1.203-4.981 3.986-6.185 6.185l-3.682 6.734c-1.203 2.199-3.171 2.199-4.374 0l-3.684-6.735c-1.203-2.199-3.986-4.982-6.186-6.185l-6.733-3.681c-2.199-1.203-2.199-3.17 0-4.374l6.733-3.681z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#DAD0EF'),
							$elm$svg$Svg$Attributes$d('M390.383 174.816c-1.907 1.043-4.321 3.457-5.363 5.363-1.043 1.907-2.75 1.907-3.793 0-1.043-1.907-3.457-4.32-5.364-5.363-1.907-1.043-1.907-2.75 0-3.793s4.321-3.457 5.364-5.363 2.75-1.907 3.793 0c1.042 1.907 3.456 4.32 5.363 5.363s1.907 2.75 0 3.793z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#FFF'),
							$elm$svg$Svg$Attributes$d('M42.865 434.753c4.772-2.609 10.812-8.649 13.422-13.422l7.994-14.616c2.61-4.772 6.88-4.772 9.49 0l7.992 14.616c2.609 4.772 8.649 10.813 13.421 13.422l14.613 7.991c4.772 2.609 4.772 6.88 0 9.49l-14.612 7.99c-4.772 2.61-10.813 8.649-13.422 13.422l-7.991 14.614c-2.61 4.772-6.88 4.772-9.491 0l-7.993-14.614c-2.61-4.772-8.65-10.812-13.423-13.422l-14.612-7.99c-4.772-2.61-4.772-6.881 0-9.49l14.612-7.991z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#FFF'),
							$elm$svg$Svg$Attributes$d('M108.568 478.528c2.167-1.185 4.909-3.927 6.093-6.094l3.628-6.632c1.185-2.167 3.124-2.167 4.309 0l3.628 6.633c1.185 2.166 3.927 4.908 6.094 6.093l6.634 3.628c2.167 1.185 2.167 3.124 0 4.309l-6.635 3.629c-2.167 1.185-4.909 3.927-6.093 6.094l-3.629 6.634c-1.185 2.167-3.124 2.167-4.309 0l-3.628-6.634c-1.185-2.167-3.927-4.909-6.093-6.094l-6.634-3.629c-2.167-1.185-2.167-3.124 0-4.309l6.635-3.628z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#524260'),
							$elm$svg$Svg$Attributes$d('M358.777 131.498l3.801 3.8a8.595 8.595 0 011.32-1.32l-3.802-3.801-1.319 1.321zm9.799.529c.318-.034.642-.054.97-.054.304 0 .604.016.9.045v-5.392h-1.87v5.401zm7.938 3.271l3.8-3.8-1.32-1.321-3.8 3.8c.242.197.477.403.697.624.219.22.426.455.623.697zm-15.941 5.648c0-.292.017-.58.044-.865h-5.308v1.869h5.323a9.238 9.238 0 01-.059-1.004zm17.903-.864c.027.285.044.573.044.865 0 .34-.022.674-.06 1.004h5.44v-1.869h-5.424zm-15.898 6.51l-3.801 3.801 1.319 1.32 3.801-3.801a8.726 8.726 0 01-1.319-1.32zm13.313.698a9.154 9.154 0 01-.697.624l3.8 3.8 1.32-1.32-3.8-3.799a9.33 9.33 0 01-.623.695zm-7.315 2.574v5.355h1.87v-5.346a9.24 9.24 0 01-.9.045c-.328 0-.651-.02-.97-.054z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#524260'),
							$elm$svg$Svg$Attributes$d('M79.634 517.127c.287-.286.59-.555.906-.811l-4.938-4.938-1.719 1.716 4.94 4.94c.256-.315.525-.62.811-.907zm19.855 7.127c.035.369.057.743.057 1.122 0 .442-.03.878-.078 1.309h7.075v-2.431h-7.054zm-23.272 1.122c0-.379.021-.753.057-1.122h-6.9v2.431h6.921a11.81 11.81 0 01-.078-1.309zm20.722-7.343l4.939-4.939-1.718-1.716-4.938 4.938c.315.256.62.524.906.811.288.287.556.591.811.906zm-10.318-4.252c.414-.044.834-.07 1.26-.07.395 0 .785.021 1.17.059v-7.009h-2.43v7.02zm9.508 19.841c-.287.287-.591.556-.907.812l4.939 4.939 1.718-1.716-4.939-4.939c-.256.314-.524.618-.811.904zm-17.306-.905l-4.94 4.94 1.719 1.716 4.939-4.939c-.315-.256-.62-.524-.906-.812a11.62 11.62 0 01-.812-.905zm7.798 4.252v6.961h2.43v-6.949c-.385.038-.775.059-1.17.059a12.182 12.182 0 01-1.26-.071z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#524260'),
					$elm$svg$Svg$Attributes$d('M289.176 299.995c0 3.02-.609 5.894-1.716 8.506a21.923 21.923 0 01-11.631 11.631 21.804 21.804 0 01-8.504 1.715c-3.02 0-5.894-.61-8.507-1.715a21.938 21.938 0 01-11.632-11.631l20.976-8.506-20.976-8.504a21.866 21.866 0 014.685-6.948 21.789 21.789 0 0115.454-6.402 21.789 21.789 0 0115.45 6.402 21.965 21.965 0 014.685 6.948 21.761 21.761 0 011.716 8.504zM171.806 299.995c0 3.02-.612 5.894-1.718 8.506a21.93 21.93 0 01-11.628 11.631 21.821 21.821 0 01-8.506 1.715c-3.019 0-5.892-.61-8.507-1.715a21.94 21.94 0 01-6.946-4.683 21.947 21.947 0 01-4.682-6.948l20.971-8.506-20.971-8.504a21.902 21.902 0 0111.628-11.631 21.8 21.8 0 018.507-1.719 21.802 21.802 0 0115.452 6.402 21.858 21.858 0 014.682 6.948 21.763 21.763 0 011.718 8.504zM229.444 359.395c-5.226-6.373-17.722-7.325-24.705-7.325a61.94 61.94 0 00-4.186.126 61.63 61.63 0 00-4.183-.126c-6.984 0-19.479.952-24.705 7.325-2.169 2.648-2.883 5.933-2.118 9.755 3.719 18.599 29.284 24.944 30.371 25.205a1.195 1.195 0 00.584.002c1.115-.261 27.336-6.605 31.059-25.207.767-3.823.053-7.107-2.117-9.755zm-.365 9.26c-3.201 16.009-25.998 22.423-28.859 23.165-35.929-29.898.237-37.094.237-37.094.066.005.132.005.196 0 .015-.002 1.643-.126 4.086-.126 5.263 0 18.012.625 22.744 6.397 1.695 2.065 2.215 4.566 1.596 7.658z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Jsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$stroke('#013A18'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$strokeWidth('10'),
							$elm$svg$Svg$Attributes$strokeLinecap('round'),
							$elm$svg$Svg$Attributes$strokeLinejoin('round'),
							$elm$svg$Svg$Attributes$d('M298 39.379v22.153s-37.572-5.533-40.089 41.467h-25.179c0 .001-8.732-76.716 65.268-63.62z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$strokeWidth('9.694'),
							$elm$svg$Svg$Attributes$strokeLinecap('round'),
							$elm$svg$Svg$Attributes$strokeLinejoin('round'),
							$elm$svg$Svg$Attributes$d('M162.231 141.604s-3.021-29.712-25.682-43.813c0 0 48.848 14.605 73.019-13.092 0 0 18.128 20.144 60.43 6.547 0 0-.505 35.755 51.365 50.358 0 0-34.746 0-31.222 47.841l-127.91-47.841z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$strokeWidth('9.694'),
							$elm$svg$Svg$Attributes$d('M128.492 130.524c-58.286 31.944-52.423 139.343-48.754 165.94 3.669 26.595 4.941 91.896-28.43 113.723-32.934 21.538-25.11 121.632 83.731 98.723 121.977-25.676 195.265-227.117 176.006-302.321-13.798-53.874-77.809-133.471-182.553-76.065z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$d('M43.132 114.588c-19.351-19.349-41.474 6.294-23.885 23.884 15.831 15.83 44.852-2.916 57.524 9.758-12.672-12.674 6.075-41.694-9.756-57.526-17.59-17.59-43.233 4.535-23.883 23.884z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#013A18'),
					$elm$svg$Svg$Attributes$strokeWidth('1.08'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M291.948 450.744c-2.594 7.918-11.12 12.24-19.042 9.648-7.921-2.597-12.234-11.124-9.64-19.043 2.594-7.919 11.117-12.238 19.038-9.647 7.921 2.596 12.234 11.124 9.644 19.042z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$d('M258.747 478.266c-1.866 5.693-7.999 8.803-13.697 6.938-5.697-1.869-8.804-8.003-6.938-13.699s7.995-8.806 13.692-6.939c5.702 1.865 8.81 8 6.943 13.7z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#013A18'),
					$elm$svg$Svg$Attributes$d('M333.521 174.793c2.551-1.396 5.78-4.625 7.177-7.176l4.273-7.813c1.396-2.551 3.68-2.551 5.075 0l4.271 7.812c1.396 2.552 4.625 5.781 7.176 7.176l7.813 4.273c2.551 1.396 2.551 3.679-.001 5.074l-7.812 4.271c-2.552 1.395-5.781 4.625-7.177 7.176l-4.271 7.813c-1.396 2.551-3.679 2.552-5.074 0l-4.275-7.814c-1.396-2.551-4.625-5.78-7.177-7.175l-7.812-4.271c-2.552-1.395-2.552-3.678-.001-5.074l7.815-4.272z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$d('M388.259 157.25c-2.213 1.21-5.014 4.011-6.224 6.223-1.209 2.213-3.189 2.213-4.4 0-1.211-2.212-4.012-5.013-6.225-6.223s-2.213-3.191 0-4.401 5.014-4.011 6.225-6.223 3.191-2.212 4.4 0c1.21 2.212 4.011 5.013 6.224 6.223 2.213 1.211 2.213 3.191 0 4.401z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M28.995 465.348c4.36-2.384 9.878-7.902 12.263-12.262l7.302-13.353c2.385-4.359 6.286-4.359 8.67 0l7.301 13.353c2.384 4.359 7.902 9.878 12.262 12.262l13.349 7.301c4.36 2.384 4.359 6.286 0 8.67l-13.348 7.3c-4.36 2.384-9.878 7.902-12.262 12.262l-7.301 13.352c-2.384 4.359-6.286 4.359-8.67 0l-7.302-13.352c-2.384-4.359-7.903-9.878-12.263-12.262l-13.349-7.3c-4.36-2.384-4.36-6.286 0-8.67l13.348-7.301zM89.019 505.34c1.979-1.082 4.484-3.587 5.567-5.566l3.314-6.06c1.083-1.979 2.854-1.979 3.937 0l3.315 6.06c1.083 1.979 3.588 4.484 5.567 5.566l6.061 3.314c1.979 1.082 1.979 2.854 0 3.936l-6.062 3.315c-1.979 1.082-4.484 3.587-5.567 5.566l-3.315 6.063c-1.083 1.979-2.854 1.979-3.936 0l-3.315-6.063c-1.082-1.979-3.587-4.484-5.566-5.567l-6.06-3.314c-1.979-1.082-1.979-2.854 0-3.936l6.06-3.314z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#013A18'),
					$elm$svg$Svg$Attributes$d('M353.672 117.953c0-.339.02-.673.051-1.003h-6.158v2.167h6.177c-.044-.383-.07-.77-.07-1.164zm-2.084-10.963l4.409 4.41c.229-.282.469-.553.725-.81.256-.255.526-.495.808-.723l-4.41-4.41-1.532 1.533zm20.579 4.408l4.408-4.408-1.532-1.533-4.408 4.409c.281.229.554.468.81.724.254.256.493.527.722.808zm-9.211-3.794c.37-.04.745-.063 1.126-.063.353 0 .701.019 1.045.053v-6.256h-2.171v6.266zm0 20.695v6.213h2.171v-6.203c-.344.034-.692.053-1.045.053-.381 0-.756-.024-1.126-.063zm11.487-11.35c.031.331.051.665.051 1.003 0 .394-.026.781-.069 1.164h6.313v-2.167h-6.295zm-2.999 8.364c-.256.256-.528.496-.81.724l4.408 4.408 1.532-1.532-4.408-4.408c-.227.281-.467.552-.722.808zm-15.447-.81l-4.409 4.41 1.531 1.532 4.41-4.41a10.645 10.645 0 01-.808-.722 10.723 10.723 0 01-.724-.81zM62.776 536.271c.276-.276.57-.535.874-.781l-4.765-4.765-1.658 1.655 4.766 4.767a11.6 11.6 0 01.783-.876zm-3.297 7.959c0-.365.021-.726.055-1.082h-6.657v2.345h6.678a10.968 10.968 0 01-.076-1.263zm10.037-11.184c.4-.043.805-.068 1.216-.068.381 0 .758.02 1.129.057v-6.764h-2.345v6.775zm9.956 4.1l4.765-4.766-1.656-1.655-4.764 4.765c.304.246.597.505.873.781s.535.571.782.875zm2.46 6.002c.034.356.055.717.055 1.082 0 .428-.029.848-.075 1.263h6.825v-2.345h-6.805zm-3.243 9.039c-.276.277-.57.536-.874.783l4.765 4.766 1.656-1.656-4.765-4.766a11.33 11.33 0 01-.782.873zm-9.173 3.227v6.717h2.345v-6.705c-.372.037-.748.057-1.129.057a11.627 11.627 0 01-1.216-.069zm-7.523-4.101l-4.766 4.767 1.658 1.656 4.765-4.766c-.304-.247-.597-.507-.874-.783s-.536-.57-.783-.874zM277.152 236.23c0 3.419-.689 6.673-1.942 9.632a24.902 24.902 0 01-5.306 7.867 24.795 24.795 0 01-7.865 5.303 24.681 24.681 0 01-9.63 1.942c-3.419 0-6.675-.691-9.634-1.942a24.765 24.765 0 01-7.867-5.303 24.813 24.813 0 01-5.304-7.867l23.752-9.632-23.752-9.63a24.745 24.745 0 015.304-7.868 24.685 24.685 0 0117.501-7.25 24.684 24.684 0 0117.495 7.25 24.855 24.855 0 015.306 7.868 24.63 24.63 0 011.942 9.63zM163.242 236.23c0 3.419-.692 6.673-1.945 9.632a24.81 24.81 0 01-13.169 13.17 24.696 24.696 0 01-9.633 1.942c-3.419 0-6.671-.691-9.633-1.942a24.865 24.865 0 01-7.867-5.303 24.84 24.84 0 01-5.302-7.867l23.748-9.632-23.748-9.63a24.773 24.773 0 015.302-7.868 24.807 24.807 0 017.867-5.304 24.691 24.691 0 019.633-1.946c3.416 0 6.671.695 9.633 1.946a24.798 24.798 0 017.866 5.304 24.764 24.764 0 015.303 7.868 24.633 24.633 0 011.945 9.63zM222.512 303.494c-5.917-7.218-20.068-8.296-27.976-8.296-2.532 0-4.289.109-4.74.144-.446-.034-2.205-.144-4.736-.144-7.907 0-22.058 1.078-27.976 8.296-2.456 2.998-3.265 6.718-2.398 11.047 4.211 21.061 33.161 28.246 34.392 28.542a1.37 1.37 0 00.662.001c1.263-.294 30.956-7.479 35.172-28.543.866-4.329.057-8.049-2.4-11.047zm-.412 10.486c-3.626 18.129-29.44 25.392-32.681 26.232-40.686-33.857.268-42.005.268-42.005.076.005.15.005.223 0 .016-.003 1.859-.143 4.626-.143 5.96 0 20.396.707 25.755 7.243 1.919 2.339 2.509 5.172 1.809 8.673z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Ksvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$stroke('#053519'),
					$elm$svg$Svg$Attributes$strokeWidth('9.467'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M140.712 145.219c4.007-7.211 20.61-5.739 22.958-20.087 2.348-14.348 18-3.652 18-4.696s15.914 1.044 18.261-16.957 21.913-2.087 27.392-1.827c5.479.261 10.436-.26 15.393-3.13 4.956-2.87 12 2.609 15.392 5.739s19.827.783 26.088-6c6.26-6.783 8.347-3.913 13.304-.261s8.608-1.826 8.608-1.826 6.523-2.087 8.089 1.826c1.564 3.913 8.087.261 8.087.261s5.738-4.695 11.217 4.696-4.695 8.158-2.608 16.731c2.087 8.573 4.174 8.052 2.087 18.226s5.999 12 7.304 14.87c1.305 2.87.782 12 6.521 18 5.74 6-1.044 6.522 0 15.913 1.045 9.392 6.261 15.392 12.001 21.914s7.042 12.522 2.087 19.565c-4.956 7.043 5.477 13.044 6.521 12.522 1.045-.521 5.741 2.348 1.566 6.261s-17.219 19.565-27.393 12.522-8.608-.055-12 1.798-19.564 4.462-24.261-6.494c-4.697-10.957-4.437 6.522-19.827-11.217s-16.173 15.131-31.043 1.565c-14.871-13.565-28.697-1.826-36.263-14.087s-13.305-2.609-20.87-17.218c-7.566-14.608-19.827-3.652-15.131-22.957s-8.086-8.87-10.174-16.436c-2.087-7.565-15.391-17.74-20.348-12.783-4.958 4.959-17.48-4.693-10.958-16.433z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$stroke('#053519'),
					$elm$svg$Svg$Attributes$strokeWidth('9.467'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M82.634 233.249c-7.645-11.644-.103-12.824 8.374-23.572 8.477-10.749 7.835-22.975 13.843-24.669 6.007-1.694 11.642 14.515 17.913 9.944 6.27-4.57 19.704-9.857 30.453-4.527 10.748 5.331 15.227 27.451 19.705 29.825 4.478 2.375 10.747 4.167 14.33 12.228s12.54 1.792 16.124 0c3.581-1.792 8.114 31.398 29.583 30.477 21.469-.92 16.99 9.828 29.529 7.141 12.539-2.687 15.229 4.479 19.706 11.644s22.39 0 23.286 0 6.271 4.207 8.957 6.133c2.687 1.927 3.582-11.779 13.435 0 9.854 11.779 7.167 19.84 15.228 35.961 8.061 16.123-14.33 12.541-17.019 35.827-2.688 23.287-4.477 1.792-12.539 0-8.062-1.791 8.061 8.979-5.374 10.76-13.435 1.779-7.164 9.863-26.869 0-19.706-9.864-13.437 4.252-21.497 4.807-8.061.556-16.122 9.297-23.287 0s-8.111 2.587-11.669 4.258c-3.557 1.672-23.263-3.702-32.219-14.45s-6.27 6.895-18.809-9.54c-12.54-16.434-16.123 1.207-17.914 0-1.791-1.208 5.374 2.375-12.539-14.643-17.914-17.019-25.078-.896-25.974-15.226-.896-14.332-17.017-13.437-12.539-8.063s-17.018-16.121-8.062-23.286c8.957-7.166-18.817-35.865-16.326-38.079 2.49-2.214 2.17-22.95 2.17-22.95z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$stroke('#053519'),
					$elm$svg$Svg$Attributes$strokeWidth('9.467'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M50.689 338.701c3.411 2.792 24.501 11.786 30.394 4.342 5.894-7.443 19.23-4.869 19.851-.729s14.267 9.104 14.267 7.552c0-1.551 14.887 13.647 15.197 21.711.311 8.064 11.165 2.171 12.716 0 1.551-2.172 21.401 6.494 22.021 8.21.62 1.715 11.477-1.386 14.268-4.488 2.791-3.102 17.058 5.892 17.988 10.234.931 4.343 17.059-2.791 23.572 5.273 6.513 8.063 18.299 9.614 29.154 6.203 10.855-3.412 13.026 14.887 36.288 11.165 23.261-3.722 33.188-21.4 37.529-14.888 4.341 6.515 23.882-7.443 26.673 5.583 2.79 13.026 13.335 19.539 17.678 18.609 4.343-.931 27.604 36.599 3.722 48.074-23.882 11.477-7.442 23.882-33.495 10.545-26.054-13.337-24.191-17.369-34.737-11.476-10.546 5.893-24.504 7.443-34.118.311-9.613-7.134-17.988 5.584-30.084 2.792-12.097-2.792-25.122 8.684-34.737 4.962-9.615-3.723-13.647-4.962-22.952-5.583s-14.578-7.337-16.128-14.679c-1.551-7.342-23.261 14.165-36.598 0s-13.026 7.234-23.882-7.032c-10.855-14.267-24.502 7.133-44.042-12.407-19.54-19.539-8.684-13.335-30.084-21.399-21.401-8.063-13.027-9.926-6.824-21.4 6.204-11.477-15.197-26.364 12.096-30.705 27.293-4.343-.62-9.615 6.824-15.198l7.443-5.582z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#053519'),
					$elm$svg$Svg$Attributes$d('M328.083 101.1S100.417 286.074 216.729 495.704l33.135 10.137c-.001 0-89.486-234.332 78.219-404.741z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$d('M78.132 120.588c-19.351-19.349-41.474 6.294-23.885 23.884 15.831 15.83 44.852-2.916 57.524 9.758-12.672-12.674 6.075-41.694-9.756-57.526-17.59-17.59-43.233 4.535-23.883 23.884z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#013A18'),
					$elm$svg$Svg$Attributes$strokeWidth('.788'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M387.477 496.343c-3.669 4.853-10.583 5.815-15.438 2.146-4.854-3.672-5.811-10.584-2.14-15.438 3.669-4.853 10.58-5.813 15.435-2.146 4.854 3.672 5.811 10.584 2.143 15.438z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$d('M358.021 507.473a7.928 7.928 0 11-12.643-9.565 7.928 7.928 0 0112.643 9.565z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#013A18'),
					$elm$svg$Svg$Attributes$d('M348.091 116.081c2.006-1.097 4.544-3.635 5.642-5.641l3.359-6.142c1.098-2.005 2.893-2.005 3.989 0l3.358 6.141c1.097 2.006 3.635 4.544 5.641 5.642l6.142 3.358c2.006 1.097 2.005 2.892-.001 3.989l-6.141 3.357c-2.005 1.097-4.544 3.635-5.641 5.641l-3.358 6.142c-1.097 2.006-2.892 2.006-3.989 0l-3.359-6.143c-1.098-2.005-3.637-4.544-5.643-5.641l-6.141-3.357c-2.006-1.097-2.007-2.892-.001-3.988l6.143-3.358z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00652D'),
					$elm$svg$Svg$Attributes$d('M391.119 102.291c-1.739.952-3.94 3.153-4.892 4.892-.951 1.74-2.508 1.74-3.46 0-.952-1.739-3.153-3.94-4.893-4.892-1.74-.952-1.74-2.508 0-3.459 1.739-.952 3.94-3.153 4.893-4.892s2.509-1.739 3.46 0 3.152 3.94 4.892 4.892c1.74.95 1.74 2.507 0 3.459z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M38.995 399.348c4.36-2.384 9.878-7.902 12.263-12.262l7.302-13.353c2.385-4.359 6.286-4.359 8.67 0l7.301 13.353c2.384 4.359 7.902 9.878 12.262 12.262l13.349 7.301c4.36 2.384 4.359 6.286 0 8.67l-13.348 7.3c-4.36 2.384-9.878 7.902-12.262 12.262l-7.301 13.352c-2.384 4.359-6.286 4.359-8.67 0l-7.302-13.352c-2.384-4.359-7.903-9.878-12.263-12.262l-13.349-7.3c-4.36-2.384-4.36-6.286 0-8.67l13.348-7.301zM99.019 439.34c1.979-1.082 4.484-3.587 5.567-5.566l3.314-6.06c1.083-1.979 2.854-1.979 3.937 0l3.315 6.06c1.083 1.979 3.588 4.484 5.567 5.566l6.061 3.314c1.979 1.082 1.979 2.854 0 3.936l-6.062 3.315c-1.979 1.082-4.484 3.587-5.567 5.566l-3.315 6.063c-1.083 1.979-2.854 1.979-3.936 0l-3.315-6.063c-1.082-1.979-3.587-4.484-5.566-5.567l-6.06-3.314c-1.979-1.082-1.979-2.854 0-3.936l6.06-3.314z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#013A18'),
					$elm$svg$Svg$Attributes$d('M363.931 71.398c0-.266.015-.529.04-.789h-4.841v1.704h4.855a8.116 8.116 0 01-.054-.915zm-1.639-8.617l3.467 3.467c.18-.222.368-.435.569-.637.201-.201.414-.389.635-.568l-3.467-3.467-1.204 1.205zm8.937.483a8.35 8.35 0 01.886-.05c.277 0 .551.015.821.042v-4.918h-1.707v4.926zm7.24 2.982l3.466-3.465-1.204-1.205-3.466 3.466c.222.18.436.368.637.569.2.201.388.414.567.635zm-.568 10.939a8.17 8.17 0 01-.636.569l3.465 3.465 1.204-1.204-3.465-3.465a8.33 8.33 0 01-.568.635zm-12.142-.637l-3.467 3.467 1.204 1.204 3.467-3.466a8.143 8.143 0 01-.635-.568 8.185 8.185 0 01-.569-.637zm14.5-5.938c.025.26.04.522.04.789 0 .31-.021.614-.055.915h4.963V70.61h-4.948zm-9.03 8.921v4.885h1.707V79.54a8.265 8.265 0 01-.821.042 8.334 8.334 0 01-.886-.051zM72.776 470.271c.276-.276.57-.535.874-.781l-4.765-4.765-1.658 1.655 4.766 4.767a11.6 11.6 0 01.783-.876zm6.74-3.225c.4-.043.805-.068 1.216-.068.381 0 .758.02 1.129.057v-6.764h-2.345v6.775zm9.956 4.1l4.765-4.766-1.656-1.655-4.764 4.765c.304.246.597.505.873.781s.535.571.782.875zm-19.993 7.084c0-.365.021-.726.055-1.082h-6.657v2.345h6.678a10.968 10.968 0 01-.076-1.263zm10.037 11.184v6.717h2.345v-6.705c-.372.037-.748.057-1.129.057a11.627 11.627 0 01-1.216-.069zm12.416-12.266c.034.356.055.717.055 1.082 0 .428-.029.848-.075 1.263h6.825v-2.345h-6.805zm-3.243 9.039c-.276.277-.57.536-.874.783l4.765 4.766 1.656-1.656-4.765-4.766a11.33 11.33 0 01-.782.873zm-16.696-.874l-4.766 4.767 1.658 1.656 4.765-4.766c-.304-.247-.597-.507-.874-.783s-.536-.57-.783-.874zM328.764 181.506c0 1.708-.344 3.334-.971 4.813a12.415 12.415 0 01-6.581 6.58 12.338 12.338 0 01-4.813.971c-1.708 0-3.335-.345-4.813-.971a12.397 12.397 0 01-6.582-6.58l11.869-4.813-11.869-4.813a12.372 12.372 0 012.65-3.932 12.328 12.328 0 018.745-3.622 12.341 12.341 0 018.743 3.622 12.397 12.397 0 012.651 3.932c.627 1.477.971 3.106.971 4.813zM246.454 178.85a12.317 12.317 0 01-3.622 8.744 12.396 12.396 0 01-3.93 2.65c-1.479.625-3.106.97-4.813.97-1.708 0-3.334-.345-4.814-.97a12.404 12.404 0 01-6.58-6.581l11.867-4.813-11.867-4.813a12.386 12.386 0 016.58-6.582 12.344 12.344 0 014.814-.972 12.339 12.339 0 018.743 3.622 12.372 12.372 0 012.65 3.932c.626 1.478.972 3.106.972 4.813zM303.131 205.352c-3.791-4.624-12.858-5.315-17.925-5.315-1.622 0-2.747.07-3.037.092a44.533 44.533 0 00-3.034-.092c-5.066 0-14.133.691-17.925 5.315-1.573 1.921-2.092 4.304-1.536 7.078 2.698 13.494 21.246 18.098 22.035 18.287a.864.864 0 00.424.001c.81-.188 19.834-4.793 22.535-18.288.556-2.774.037-5.157-1.537-7.078zm-.264 6.719c-2.324 11.615-18.863 16.269-20.939 16.808-26.068-21.693.172-26.914.172-26.914a.854.854 0 00.143 0c.01-.001 1.191-.091 2.964-.091 3.819 0 13.069.453 16.502 4.642 1.229 1.496 1.606 3.312 1.158 5.555z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Lsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00F027'),
					$elm$svg$Svg$Attributes$stroke('#006A0B'),
					$elm$svg$Svg$Attributes$strokeWidth('14.781'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M165.618 147.35s126.022 1.75 173.007 105.512 34.144 21.248 21.533 74.395c-10.638 44.835-73.217 132.079-219.668 115.438C8.158 427.656 26.196 242.905 54.904 232.92c13.747-4.782 110.714-85.57 110.714-85.57z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#B9F9BD'),
					$elm$svg$Svg$Attributes$stroke('#006A0B'),
					$elm$svg$Svg$Attributes$strokeWidth('14.953'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M278.834 292.744c-6.861 79.102-69.806 143.227-140.597 143.227-70.788 0-122.611-64.125-115.751-143.227 6.86-79.102 69.994-145.394 140.783-145.394 70.792 0 122.424 66.292 115.565 145.394z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00F027'),
					$elm$svg$Svg$Attributes$d('M33.416 141.437c-16.585-16.584-35.548 5.395-20.472 20.471 13.569 13.568 38.443-2.5 49.304 8.364-10.861-10.863 5.207-35.736-8.362-49.306-15.077-15.077-37.056 3.887-20.47 20.471z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#006A0B'),
					$elm$svg$Svg$Attributes$strokeWidth('.934'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M350.501 420.756c-2.389 5.156-8.51 7.402-13.666 5.013-5.158-2.392-7.397-8.512-5.009-13.668 2.389-5.153 8.509-7.396 13.665-5.011 5.155 2.39 7.397 8.51 5.01 13.666z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00F027'),
					$elm$svg$Svg$Attributes$d('M325.816 436.743a7.408 7.408 0 01-9.831 3.603 7.406 7.406 0 01-3.604-9.832 7.402 7.402 0 019.829-3.604 7.405 7.405 0 013.606 9.833z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006A0B'),
					$elm$svg$Svg$Attributes$d('M352.166 196.754c1.754-.959 3.974-3.178 4.933-4.932l2.938-5.37c.959-1.754 2.528-1.753 3.487 0l2.937 5.369c.959 1.754 3.178 3.974 4.932 4.933l5.37 2.937c1.754.959 1.754 2.529 0 3.487l-5.37 2.936c-1.754.959-3.973 3.179-4.932 4.933l-2.937 5.37c-.959 1.754-2.528 1.754-3.487 0l-2.938-5.371c-.959-1.754-3.179-3.973-4.933-4.932l-5.371-2.936c-1.754-.958-1.754-2.528 0-3.487l5.371-2.937z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00F027'),
					$elm$svg$Svg$Attributes$d('M389.789 184.696c-1.521.832-3.446 2.757-4.277 4.278-.832 1.521-2.193 1.521-3.025 0s-2.757-3.446-4.278-4.278-1.521-2.193 0-3.025c1.521-.832 3.446-2.756 4.278-4.277.832-1.521 2.193-1.521 3.025 0 .831 1.521 2.756 3.446 4.277 4.277 1.521.832 1.521 2.193 0 3.025z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M54.535 396.608c3.961-2.166 8.974-7.179 11.14-11.14l6.635-12.131c2.166-3.961 5.71-3.961 7.876 0l6.633 12.131c2.166 3.961 7.179 8.974 11.14 11.14l12.126 6.631c3.961 2.166 3.961 5.711 0 7.877l-12.127 6.632c-3.96 2.166-8.973 7.179-11.139 11.14l-6.633 12.129c-2.166 3.961-5.71 3.961-7.877 0l-6.634-12.129c-2.167-3.961-7.18-8.974-11.141-11.14l-12.127-6.632c-3.961-2.166-3.961-5.711 0-7.877l12.128-6.631zM109.065 432.939c1.798-.983 4.074-3.26 5.058-5.058l3.011-5.505c.983-1.799 2.593-1.799 3.576 0l3.012 5.505c.983 1.799 3.259 4.074 5.058 5.058l5.506 3.01c1.798.983 1.798 2.593 0 3.576l-5.507 3.012c-1.798.983-4.074 3.26-5.057 5.058l-3.012 5.508c-.983 1.798-2.593 1.798-3.576 0l-3.012-5.508c-.983-1.798-3.259-4.074-5.057-5.058l-5.505-3.012c-1.798-.983-1.798-2.593 0-3.576l5.505-3.01z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006A0B'),
					$elm$svg$Svg$Attributes$d('M378.728 153.181l3.03-3.03-1.053-1.054-3.031 3.031c.193.157.381.322.557.498s.339.362.497.555zm-12.712 4.505c0-.233.013-.462.035-.689h-4.232v1.489h4.245a7.056 7.056 0 01-.048-.8zm6.38-7.113c.255-.027.513-.043.774-.043.242 0 .481.013.718.036v-4.3h-1.492v4.307zm-7.813-.422l3.03 3.031c.157-.194.322-.38.498-.557.176-.176.362-.34.555-.497l-3.031-3.032-1.052 1.055zm13.647 12.594a7.09 7.09 0 01-.556.497l3.03 3.03 1.053-1.053-3.03-3.03c-.157.193-.321.38-.497.556zm-10.617-.557l-3.03 3.031 1.052 1.053 3.031-3.031a7.456 7.456 0 01-.555-.497 7.334 7.334 0 01-.498-.556zm12.679-5.192c.022.227.035.457.035.689 0 .271-.019.537-.048.8h4.339v-1.489h-4.326zm-7.896 7.8v4.271h1.492v-4.264a7.407 7.407 0 01-.718.036 6.845 6.845 0 01-.774-.043zM85.224 461.039c.251-.251.518-.485.793-.709l-4.328-4.329-1.506 1.504 4.33 4.33c.224-.277.46-.544.711-.796zm6.123-2.931a10.33 10.33 0 011.105-.062c.347 0 .688.019 1.026.052v-6.145h-2.131v6.155zm-9.118 10.163c0-.332.019-.659.05-.983h-6.047v2.131h6.066c-.043-.378-.069-.76-.069-1.148zm18.163-6.437l4.329-4.329-1.505-1.504-4.328 4.328c.276.224.542.459.793.71.252.252.487.519.711.795zm-.711 13.664c-.251.252-.518.487-.794.711l4.329 4.329 1.505-1.503-4.329-4.33c-.225.276-.46.542-.711.793zm2.946-8.211c.031.324.05.651.05.983 0 .389-.026.771-.068 1.147h6.2v-2.131h-6.182zm-11.28 11.144v6.102h2.131v-6.092c-.338.033-.68.052-1.026.052a10.612 10.612 0 01-1.105-.062zm-6.833-3.727l-4.331 4.331 1.506 1.503 4.329-4.329a10.277 10.277 0 01-.794-.711 10.286 10.286 0 01-.71-.794zM244.484 284.638a20.983 20.983 0 01-3.051 7.809 21.23 21.23 0 01-5.618 5.831 21.043 21.043 0 01-15.774 3.511 21.082 21.082 0 01-7.81-3.052 21.114 21.114 0 01-5.831-5.616 21.148 21.148 0 01-3.3-7.395l21.385-4.595-18.546-11.595a21.132 21.132 0 015.618-5.831 21.049 21.049 0 0115.777-3.514 21.06 21.06 0 017.81 3.054 21.103 21.103 0 015.827 5.618 21.131 21.131 0 013.3 7.394c.62 2.669.718 5.509.213 8.381zM106.823 255.896a21.016 21.016 0 01-3.054 7.81 21.166 21.166 0 01-5.617 5.83 21.18 21.18 0 01-7.392 3.299 21.08 21.08 0 01-8.382.212 21.059 21.059 0 01-7.811-3.052 21.17 21.17 0 01-9.128-13.009l21.38-4.597-18.542-11.594a21.175 21.175 0 0113.008-9.13 21.076 21.076 0 018.385-.216 21.059 21.059 0 017.81 3.055 21.13 21.13 0 015.828 5.617 21.132 21.132 0 013.299 7.395c.618 2.669.719 5.509.216 8.38zM182.332 317.188c-5.012-8.896-20.06-12.733-28.582-14.227-2.729-.479-4.641-.692-5.136-.741-.475-.12-2.348-.571-5.076-1.05-8.521-1.493-23.976-3.004-31.717 3.654-3.213 2.768-4.787 6.622-4.671 11.453.56 23.493 30.399 36.706 31.67 37.258a1.52 1.52 0 00.712.127c1.417-.079 34.775-2.214 43.298-24.116 1.753-4.502 1.584-8.663-.498-12.358zm-2.425 11.222c-7.334 18.853-36.525 21.802-40.177 22.096-37.449-44.176 8.227-45.219 8.227-45.219.079.021.159.034.239.042.017.001 2.031.198 5.012.722 6.425 1.125 21.849 4.615 26.388 12.674 1.627 2.88 1.727 6.046.311 9.685z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Msvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('8.263'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M225.227 94.568s44.006-47.828 71.548-11.241c0 0 8.293 5.292 14.582-.955-.001 0-24.492 82.45-86.13 12.196z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#623900'),
					$elm$svg$Svg$Attributes$stroke('#623900'),
					$elm$svg$Svg$Attributes$strokeWidth('9.614'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M193.218 150.17c2.202-28.924 19.533-64.292 16.786-87.9 0 0 9.158 9.157 21.061 7.325s-28.69 49.444-18.924 70.503l-18.923 10.072z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('n'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('60.042'),
					$elm$svg$Svg$Attributes$y1('189.905'),
					$elm$svg$Svg$Attributes$x2('301.06'),
					$elm$svg$Svg$Attributes$y2('430.923')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#ff1426')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#fbff5d')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#n)'),
					$elm$svg$Svg$Attributes$stroke('#FF9A6A'),
					$elm$svg$Svg$Attributes$strokeWidth('9.614'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M49.771 238.527c18.587-155.464 296.661-177.63 287.505 64.094C328.119 544.345 59.67 538.237 90.059 451.869c34.794-98.888-50.359-129.102-40.288-213.342z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1426'),
					$elm$svg$Svg$Attributes$d('M36.993 125.794c-17.474-17.472-37.452 5.684-21.568 21.568 14.296 14.295 40.503-2.633 51.946 8.812-11.443-11.445 5.486-37.65-8.811-51.948-15.884-15.884-39.04 4.096-21.567 21.568z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FD8541'),
					$elm$svg$Svg$Attributes$strokeWidth('1.373'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M335.29 443.287c-1.798 5.95-8.081 9.316-14.029 7.52-5.951-1.8-9.312-8.085-7.516-14.032 1.799-5.947 8.081-9.311 14.029-7.517 5.948 1.801 9.31 8.083 7.516 14.029z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1426'),
					$elm$svg$Svg$Attributes$d('M311.011 464.375a8.101 8.101 0 01-10.093 5.404 8.098 8.098 0 014.684-15.502c4.279 1.293 6.703 5.817 5.409 10.098z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FD8541'),
					$elm$svg$Svg$Attributes$d('M346.113 104.447c1.922-1.051 4.354-3.482 5.405-5.404l3.22-5.884c1.051-1.921 2.771-1.921 3.821.001l3.217 5.882c1.051 1.922 3.482 4.354 5.404 5.405l5.884 3.218c1.922 1.051 1.922 2.771 0 3.821l-5.884 3.217c-1.922 1.051-4.354 3.482-5.404 5.404l-3.217 5.883c-1.051 1.922-2.771 1.922-3.821 0l-3.22-5.884c-1.051-1.921-3.483-4.353-5.405-5.404l-5.884-3.217c-1.922-1.05-1.922-2.77 0-3.821l5.884-3.217z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1426'),
					$elm$svg$Svg$Attributes$d('M387.336 91.235c-1.666.911-3.775 3.021-4.687 4.687-.911 1.667-2.402 1.667-3.313 0-.912-1.666-3.021-3.775-4.688-4.687-1.667-.912-1.667-2.404 0-3.315 1.666-.911 3.775-3.021 4.688-4.687.911-1.666 2.402-1.666 3.313 0s3.021 3.775 4.687 4.687c1.667.912 1.667 2.404 0 3.315z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M90.011 474.31c3.31-1.81 7.498-5.998 9.308-9.307l5.542-10.135c1.81-3.309 4.772-3.309 6.582.001l5.542 10.133c1.81 3.31 5.998 7.498 9.308 9.309l10.132 5.54c3.31 1.811 3.31 4.771 0 6.582l-10.132 5.54c-3.31 1.811-7.498 5.999-9.308 9.309l-5.542 10.133c-1.81 3.31-4.771 3.31-6.582.001l-5.542-10.135c-1.81-3.309-5.999-7.497-9.308-9.307l-10.133-5.542c-3.31-1.81-3.31-4.771 0-6.58l10.133-5.542zM135.573 504.666c1.502-.822 3.404-2.724 4.226-4.226l2.516-4.6c.822-1.502 2.167-1.502 2.988 0l2.516 4.6c.822 1.502 2.724 3.403 4.226 4.226l4.602 2.516c1.502.822 1.502 2.166 0 2.988l-4.602 2.517c-1.502.821-3.404 2.724-4.226 4.226l-2.516 4.602c-.822 1.502-2.167 1.502-2.988 0l-2.517-4.602c-.821-1.502-2.723-3.404-4.225-4.226l-4.599-2.517c-1.502-.821-1.502-2.166 0-2.988l4.599-2.516z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FD8541'),
					$elm$svg$Svg$Attributes$d('M359.719 53.384l3.321 3.321c.172-.212.353-.417.546-.61.192-.192.396-.372.607-.544l-3.322-3.322-1.152 1.155zm17.214 7.5c.023.249.038.5.038.756 0 .297-.02.588-.052.876h4.752v-1.632h-4.738zm-1.715-4.18l3.32-3.32-1.153-1.155-3.321 3.321c.212.172.416.352.609.545.192.193.373.397.545.609zM361.29 61.64c0-.255.015-.507.038-.756h-4.638v1.632h4.651a8.161 8.161 0 01-.051-.876zm6.99-7.793c.279-.03.562-.048.849-.048.266 0 .527.014.786.04v-4.712h-1.635v4.72zm-5.24 12.726l-3.321 3.321 1.152 1.154 3.322-3.322a7.813 7.813 0 01-.607-.543 7.894 7.894 0 01-.546-.61zm11.633.61a7.84 7.84 0 01-.608.544l3.32 3.32 1.153-1.154-3.32-3.32a7.903 7.903 0 01-.545.61zm-6.393 2.248v4.68h1.635V69.44c-.259.025-.521.04-.786.04a8.217 8.217 0 01-.849-.049zM99.723 537.284c0-.277.016-.55.042-.82h-5.053v1.781h5.069a8.463 8.463 0 01-.058-.961zm7.619-8.489a8.503 8.503 0 011.78-.009v-5.134h-1.781v5.143zm7.557 3.112l3.617-3.617-1.258-1.255-3.615 3.615c.23.187.453.383.663.593.209.21.406.434.593.664zm-12.673-.664c.209-.209.432-.405.662-.593l-3.615-3.615-1.259 1.255 3.618 3.618c.186-.231.384-.454.594-.665zm-.595 11.418l-3.618 3.618 1.259 1.258 3.617-3.617c-.23-.188-.453-.385-.663-.595s-.407-.432-.595-.664zm12.674.664c-.21.21-.433.407-.664.595l3.616 3.617 1.258-1.258-3.617-3.617a8.474 8.474 0 01-.593.663zm2.461-6.861c.026.271.042.543.042.82 0 .325-.022.646-.058.961h5.181v-1.781h-5.165zm-9.424 9.309v5.101h1.781v-5.092a8.261 8.261 0 01-1.781-.009z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1426'),
					$elm$svg$Svg$Attributes$d('M310.037 323.845a28.783 28.783 0 01-4.979 10.381 29.218 29.218 0 01-8.293 7.412 29.021 29.021 0 01-10.462 3.755c-3.724.571-7.622.419-11.503-.565s-7.381-2.707-10.382-4.979a29.026 29.026 0 01-7.411-8.289 29.116 29.116 0 01-3.761-10.467l29.76-4.102-24.211-17.783a29.018 29.018 0 018.292-7.409 28.906 28.906 0 0110.463-3.758 28.897 28.897 0 0111.504.563 28.93 28.93 0 0110.384 4.981 28.989 28.989 0 017.403 8.292 29.051 29.051 0 013.763 10.464 28.81 28.81 0 01-.567 11.504zM194.867 296.335a28.89 28.89 0 01-5.359 10.197 29.128 29.128 0 01-19.146 10.478 28.907 28.907 0 01-11.474-.99 28.89 28.89 0 01-10.197-5.354 29.13 29.13 0 01-7.104-8.552 29.108 29.108 0 01-3.374-10.593l29.884-3.019-23.543-18.649a29.04 29.04 0 018.554-7.105 29.111 29.111 0 0110.593-3.376 28.917 28.917 0 0111.478.982 28.948 28.948 0 0110.195 5.359 29.02 29.02 0 017.1 8.555 28.908 28.908 0 012.393 22.067zM234.182 380.979c-3.078-8.225-15.352-13.477-22.397-15.875a65.769 65.769 0 00-4.264-1.309c-.389-.166-1.92-.797-4.173-1.564-7.042-2.397-19.97-5.732-27.43-1.1-3.097 1.926-4.944 4.992-5.487 9.11-2.638 20.035 20.963 35.213 21.968 35.851.09.057.187.105.29.138.094.034.197.056.3.063 1.217.121 29.836 2.729 39.978-14.751 2.088-3.592 2.493-7.148 1.215-10.563zm-3.546 9.211c-8.728 15.043-33.92 13.681-37.062 13.447-25.961-42.49 12.98-37.324 12.98-37.324.065.027.132.051.198.067.013.003 1.699.438 4.162 1.276 5.31 1.809 17.951 6.816 20.738 14.266 1.002 2.662.668 5.363-1.016 8.268z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Nsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#623900'),
					$elm$svg$Svg$Attributes$stroke('#623900'),
					$elm$svg$Svg$Attributes$strokeWidth('9.46'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M194.058 225.764c2.166-28.46 19.222-63.262 16.52-86.493 0 0 39.438-7.126 29.971 0-11.776 8.866-37.479 55.861-27.869 76.584l-18.622 9.909z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('o'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('72.752'),
					$elm$svg$Svg$Attributes$y1('192.112'),
					$elm$svg$Svg$Attributes$x2('305.182'),
					$elm$svg$Svg$Attributes$y2('424.543')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#ff5026')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.478'),
							$elm$svg$Svg$Attributes$stopColor('#c8002c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.573'),
							$elm$svg$Svg$Attributes$stopColor('#c9032d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.642'),
							$elm$svg$Svg$Attributes$stopColor('#ca0c2e')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.703'),
							$elm$svg$Svg$Attributes$stopColor('#ce1c31')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.76'),
							$elm$svg$Svg$Attributes$stopColor('#d23336')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.813'),
							$elm$svg$Svg$Attributes$stopColor('#d8503b')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.864'),
							$elm$svg$Svg$Attributes$stopColor('#df7342')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.912'),
							$elm$svg$Svg$Attributes$stopColor('#e89e4a')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.959'),
							$elm$svg$Svg$Attributes$stopColor('#f1cd53')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#fbff5d')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#o)'),
					$elm$svg$Svg$Attributes$stroke('#FFE104'),
					$elm$svg$Svg$Attributes$strokeWidth('9.46'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M343.067 234.771c60.426 114.563-58.638 224.004-101.857 235.156-41.896 10.813-88.674-17.841-110.454 7.146 0 0 9.813-10.904-52.173-44.986C-1.78 387.903.085 99.549 210.222 181.767c0 0 83.299-40.935 132.845 53.004z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFE104'),
					$elm$svg$Svg$Attributes$d('M279.549 270.389c0 3.58-.728 6.994-2.039 10.096a25.991 25.991 0 01-5.558 8.247 26.06 26.06 0 01-8.246 5.56 25.93 25.93 0 01-10.099 2.036c-3.582 0-6.992-.726-10.1-2.036a26.032 26.032 0 01-13.804-13.807l24.896-10.096-24.896-10.099a26.043 26.043 0 0113.804-13.806 25.895 25.895 0 0110.1-2.037c3.58 0 6.992.725 10.099 2.037a26.032 26.032 0 0113.804 13.806 25.891 25.891 0 012.039 10.099zM157.789 270.389c0 3.58-.725 6.994-2.039 10.096a26.03 26.03 0 01-13.806 13.807 25.908 25.908 0 01-10.097 2.036c-3.582 0-6.994-.726-10.1-2.036a26.012 26.012 0 01-8.244-5.56 25.972 25.972 0 01-5.559-8.247l24.897-10.096-24.897-10.099a26.023 26.023 0 0113.803-13.806 25.888 25.888 0 0110.1-2.037c3.581 0 6.995.725 10.097 2.037a26.014 26.014 0 0113.806 13.806 25.855 25.855 0 012.039 10.099zM227.202 348.099c-5.658-6.9-19.191-7.93-26.753-7.93-2.419 0-4.101.105-4.531.132-.429-.026-2.109-.132-4.529-.132-7.563 0-21.094 1.029-26.751 7.93-2.351 2.869-3.124 6.425-2.294 10.565 4.026 20.138 31.71 27.012 32.886 27.294a1.388 1.388 0 00.634.002c1.208-.284 29.604-7.152 33.633-27.296.828-4.141.057-7.696-2.295-10.565zm-.395 10.027c-3.468 17.334-28.152 24.279-31.251 25.084-38.905-32.372.257-40.166.257-40.166a1.5 1.5 0 00.212 0c.016-.003 1.778-.133 4.424-.133 5.698 0 19.507.674 24.634 6.93 1.827 2.23 2.395 4.943 1.724 8.285zM28.695 165.381c-14.25-14.25-30.544 4.634-17.59 17.589 11.66 11.659 33.033-2.146 42.365 7.185-9.332-9.332 4.474-30.705-7.186-42.365-12.953-12.952-31.839 3.342-17.589 17.591z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF5026'),
					$elm$svg$Svg$Attributes$strokeWidth('1.351'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M352.907 429.774c-1.545 6.555-8.106 10.619-14.663 9.075-6.555-1.544-10.615-8.111-9.071-14.665 1.543-6.552 8.109-10.617 14.663-9.072 6.556 1.544 10.613 8.112 9.071 14.662z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFE104'),
					$elm$svg$Svg$Attributes$cx('319.536'),
					$elm$svg$Svg$Attributes$cy('452.198'),
					$elm$svg$Svg$Attributes$r('8.771')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF5026'),
					$elm$svg$Svg$Attributes$d('M336.539 175.881c2.479-1.355 5.616-4.492 6.972-6.971l4.15-7.59c1.355-2.479 3.574-2.479 4.929 0l4.15 7.59c1.355 2.479 4.493 5.615 6.972 6.971l7.589 4.15c2.479 1.355 2.479 3.573.001 4.929l-7.591 4.151c-2.479 1.356-5.615 4.493-6.971 6.971l-4.149 7.589c-1.355 2.479-3.574 2.479-4.93 0l-4.15-7.589c-1.355-2.479-4.492-5.616-6.971-6.971l-7.59-4.151c-2.479-1.355-2.478-3.574.001-4.929l7.588-4.15z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFE104'),
					$elm$svg$Svg$Attributes$d('M389.709 158.84c-2.149 1.176-4.87 3.897-6.045 6.046-1.175 2.149-3.099 2.149-4.273 0-1.176-2.149-3.896-4.87-6.045-6.046-2.149-1.176-2.149-3.1 0-4.275 2.148-1.175 4.869-3.896 6.045-6.045 1.175-2.149 3.099-2.149 4.273 0 1.175 2.149 3.896 4.87 6.045 6.045 2.15 1.175 2.15 3.099 0 4.275z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M74.603 419.115c2.959-1.618 6.705-5.363 8.324-8.322l4.956-9.061c1.619-2.959 4.267-2.959 5.886.001l4.954 9.059c1.619 2.96 5.364 6.705 8.323 8.323l9.062 4.956c2.959 1.618 2.959 4.267 0 5.885l-9.062 4.956c-2.959 1.618-6.705 5.363-8.323 8.323l-4.955 9.062c-1.618 2.96-4.267 2.96-5.885 0l-4.956-9.062c-1.619-2.96-5.364-6.705-8.324-8.323l-9.062-4.956c-2.959-1.618-2.959-4.267 0-5.885l9.062-4.956zM112.244 455.566c1.344-.735 3.044-2.436 3.779-3.778l2.25-4.113c.735-1.343 1.937-1.343 2.672 0l2.25 4.113c.735 1.343 2.435 3.043 3.779 3.777l4.115 2.25c1.344.734 1.344 1.936 0 2.67l-4.115 2.25c-1.344.734-3.044 2.435-3.778 3.778l-2.25 4.115c-.734 1.344-1.937 1.344-2.671 0l-2.25-4.115c-.734-1.344-2.435-3.044-3.778-3.779l-4.114-2.248c-1.344-.735-1.344-1.937 0-2.672l4.111-2.248z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF5026'),
					$elm$svg$Svg$Attributes$d('M354.088 114.501l4.283 4.284c.223-.273.455-.537.704-.786s.513-.482.786-.704l-4.283-4.284-1.49 1.49zm11.044.597c.36-.039.725-.062 1.095-.062.342 0 .68.018 1.013.051v-6.076h-2.107v6.087zm-9.021 10.052c0-.329.019-.653.049-.974h-5.981v2.106h6a10.046 10.046 0 01-.068-1.132zm17.967-6.365l4.283-4.284-1.487-1.489-4.284 4.284c.273.222.537.455.785.703.249.249.481.513.703.786zm-15.707 12.73l-4.283 4.283 1.49 1.489 4.282-4.283c-.272-.222-.536-.455-.785-.703s-.482-.513-.704-.786zm17.918-7.339c.03.321.049.645.049.974 0 .383-.025.76-.067 1.132h6.135v-2.106h-6.117zm-11.157 11.025v6.035h2.107v-6.025a9.89 9.89 0 01-2.107-.01zm8.243-2.901c-.248.249-.512.481-.784.703l4.283 4.283 1.487-1.489-4.282-4.283c-.223.274-.455.538-.704.786zM56.206 471.865l3.064 3.063c.158-.194.324-.383.502-.561a7.28 7.28 0 01.563-.504l-3.063-3.063-1.066 1.065zm1.446 7.615c0-.234.013-.466.035-.694h-4.278v1.508h4.292a7.29 7.29 0 01-.049-.814zm6.452-7.185c.257-.027.518-.044.782-.044.245 0 .487.013.726.036v-4.347h-1.507v4.355zm6.399 2.635l3.064-3.064-1.065-1.063-3.063 3.063c.195.158.384.325.562.503s.343.365.502.561zm-11.235 9.104l-3.063 3.062 1.066 1.066 3.063-3.063c-.195-.159-.384-.326-.563-.504s-.344-.366-.503-.561zm10.732.562a7.052 7.052 0 01-.562.503l3.063 3.063 1.065-1.066-3.063-3.063a6.696 6.696 0 01-.503.563zm2.083-5.81c.022.229.035.46.035.694 0 .275-.019.546-.048.813h4.388v-1.508h-4.375zm-7.979 7.886v4.317h1.507v-4.311a7.246 7.246 0 01-1.507-.006z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Osvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('6.525'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M167.405 164.568s26.333-45.9 56.433-29.04c0 0 7.891 1.152 11.772-5.005 0 0-3.222 63.805-68.205 34.045z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('6.409'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M164.678 161.408s-45.796-22.949-59.142 8.824c0 0-5.337 5.595-11.745 2.724 0-.001 38.342 51.492 70.887-11.548z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#623900'),
					$elm$svg$Svg$Attributes$stroke('#623900'),
					$elm$svg$Svg$Attributes$strokeWidth('9.636'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M176.27 233.088c-11.667-26.628-12.976-66.083-26.518-85.679 0 0 12.412 3.791 22.084-3.431 9.669-7.223-2.117 57.255 16.439 71.293l-12.005 17.817z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF8C1A'),
					$elm$svg$Svg$Attributes$stroke('#FFB41A'),
					$elm$svg$Svg$Attributes$strokeWidth('9.636'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('203.921'),
					$elm$svg$Svg$Attributes$cy('317.234'),
					$elm$svg$Svg$Attributes$rx('148.137'),
					$elm$svg$Svg$Attributes$ry('136.286')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFB41A'),
					$elm$svg$Svg$Attributes$d('M289.982 286.036c0 3.384-.688 6.61-1.927 9.542a24.609 24.609 0 01-5.252 7.794 24.637 24.637 0 01-7.794 5.254 24.494 24.494 0 01-9.542 1.924c-3.386 0-6.608-.686-9.544-1.924a24.595 24.595 0 01-13.046-13.048l23.528-9.542-23.528-9.543a24.582 24.582 0 015.253-7.791 24.594 24.594 0 017.793-5.256 24.498 24.498 0 019.544-1.925c3.383 0 6.607.687 9.542 1.925a24.596 24.596 0 0113.046 13.047 24.447 24.447 0 011.927 9.543zM155.76 286.036c0 3.384-.685 6.61-1.926 9.542a24.578 24.578 0 01-13.046 13.048c-2.933 1.238-6.158 1.924-9.542 1.924s-6.609-.686-9.543-1.924a24.612 24.612 0 01-13.044-13.048l23.527-9.542-23.527-9.543a24.516 24.516 0 015.253-7.791 24.585 24.585 0 017.791-5.256c2.935-1.238 6.159-1.925 9.543-1.925s6.61.687 9.542 1.925a24.627 24.627 0 0113.046 13.047 24.428 24.428 0 011.926 9.543zM30.01 208.035c-14.514-14.514-31.11 4.72-17.916 17.915 11.875 11.875 33.645-2.186 43.15 7.318-9.505-9.504 4.557-31.274-7.319-43.149-13.194-13.194-32.429 3.402-17.915 17.916z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF8C1A'),
					$elm$svg$Svg$Attributes$strokeWidth('1.212'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M361.758 407.905c-1.385 5.876-7.268 9.521-13.146 8.137-5.876-1.385-9.518-7.272-8.133-13.148 1.383-5.874 7.27-9.519 13.146-8.134 5.877 1.385 9.516 7.272 8.133 13.145z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFB41A'),
					$elm$svg$Svg$Attributes$cx('331.84'),
					$elm$svg$Svg$Attributes$cy('428.011'),
					$elm$svg$Svg$Attributes$r('7.864')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF8C1A'),
					$elm$svg$Svg$Attributes$d('M346.535 208.975c2.005-1.097 4.543-3.635 5.64-5.64l3.358-6.14c1.097-2.005 2.892-2.005 3.988 0l3.358 6.14c1.097 2.005 3.635 4.543 5.64 5.64l6.141 3.358c2.006 1.097 2.006 2.892 0 3.988l-6.14 3.358c-2.006 1.097-4.544 3.635-5.641 5.64l-3.358 6.14c-1.097 2.005-2.892 2.005-3.988 0l-3.358-6.14c-1.097-2.005-3.635-4.543-5.64-5.64l-6.141-3.358c-2.005-1.097-2.005-2.892 0-3.988l6.141-3.358z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFB41A'),
					$elm$svg$Svg$Attributes$d('M389.555 195.188c-1.739.952-3.939 3.153-4.891 4.892s-2.507 1.739-3.458 0-3.152-3.94-4.892-4.892c-1.74-.952-1.74-2.508 0-3.459 1.739-.951 3.94-3.152 4.892-4.891s2.507-1.739 3.458 0 3.151 3.94 4.891 4.891c1.74.951 1.74 2.507 0 3.459z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M90.534 396.271c3.014-1.648 6.829-5.463 8.478-8.478l5.047-9.229c1.649-3.015 4.346-3.015 5.995 0l5.047 9.229c1.648 3.015 5.463 6.829 8.478 8.478l9.229 5.046c3.014 1.648 3.014 4.346 0 5.994l-9.229 5.049c-3.014 1.648-6.829 5.463-8.478 8.478l-5.047 9.229c-1.648 3.015-4.346 3.015-5.994 0l-5.048-9.229c-1.648-3.015-5.463-6.829-8.478-8.478l-9.23-5.049c-3.014-1.648-3.014-4.346 0-5.994l9.23-5.046zM128.873 433.397c1.369-.748 3.101-2.479 3.849-3.849l2.291-4.189c.749-1.369 1.973-1.369 2.722 0l2.291 4.189c.749 1.369 2.48 3.101 3.849 3.849l4.19 2.291c1.369.748 1.369 1.973 0 2.721l-4.19 2.291c-1.369.748-3.101 2.479-3.849 3.849l-2.291 4.189c-.749 1.369-1.973 1.369-2.722 0l-2.291-4.189c-.749-1.369-2.48-3.101-3.849-3.849l-4.19-2.291c-1.369-.748-1.369-1.973 0-2.721l4.19-2.291z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF8C1A'),
					$elm$svg$Svg$Attributes$d('M369.669 159.796a8.35 8.35 0 01.886-.05c.277 0 .551.015.82.042v-4.916h-1.706v4.924zm-7.298 8.134c0-.267.015-.529.04-.789h-4.841v1.705h4.855a8.39 8.39 0 01-.054-.916zm-1.638-8.617l3.466 3.466c.18-.221.368-.434.569-.635a8.22 8.22 0 01.637-.57l-3.466-3.466-1.206 1.205zm16.174 3.466l3.466-3.466-1.203-1.205-3.467 3.466c.222.18.435.368.636.569.201.202.39.416.568.636zm-.568 10.935a8.365 8.365 0 01-.635.569l3.466 3.465 1.203-1.204-3.465-3.465a8.156 8.156 0 01-.569.635zm-12.14-.635l-3.466 3.465 1.206 1.204 3.465-3.465c-.221-.179-.435-.368-.636-.569s-.389-.414-.569-.635zm14.496-5.938c.025.26.04.522.04.789 0 .31-.021.615-.055.916h4.964v-1.705h-4.949zm-9.026 8.921v4.884h1.706v-4.875a8.23 8.23 0 01-.82.042c-.3-.002-.595-.02-.886-.051zM73.269 457.756c0-.238.014-.475.036-.707h-4.357v1.534h4.371a7.272 7.272 0 01-.05-.827zm2.158-5.209c.181-.181.374-.351.572-.512l-3.119-3.119L71.795 450l3.12 3.12c.161-.199.331-.391.512-.573zm4.413-2.111c.262-.028.527-.045.796-.045.25 0 .496.013.739.037V446H79.84v4.436zm6.518 2.684l3.12-3.12-1.084-1.084-3.12 3.119c.199.161.391.331.572.512.181.182.351.374.512.573zm-6.518 11.959v4.397h1.535v-4.39a7.508 7.508 0 01-1.535-.007zm8.127-8.03c.022.232.036.469.036.707 0 .28-.019.556-.049.827h4.469v-1.534h-4.456zm-13.052 5.345l-3.12 3.119 1.085 1.086 3.12-3.12a7.156 7.156 0 01-1.085-1.085zm10.931.572a7.333 7.333 0 01-.573.513l3.12 3.12 1.084-1.086-3.12-3.119c-.16.199-.33.391-.511.572z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFB41A'),
					$elm$svg$Svg$Attributes$d('M223.856 337.426c-5.175-6.314-17.555-7.255-24.474-7.255-2.213 0-3.75.097-4.145.122a64.92 64.92 0 00-4.143-.122c-6.919 0-19.297.94-24.473 7.255-2.151 2.624-2.858 5.876-2.099 9.665 3.683 18.423 29.01 24.71 30.084 24.969a1.334 1.334 0 00.58.002c1.104-.261 27.083-6.544 30.768-24.971.759-3.789.054-7.041-2.098-9.665zm-.361 9.173c-3.173 15.858-25.754 22.21-28.589 22.948-35.591-29.617.235-36.745.235-36.745.066.004.13.004.193 0 .016-.003 1.628-.123 4.048-.123 5.213 0 17.847.616 22.536 6.34 1.673 2.039 2.19 4.522 1.577 7.58z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Psvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('p'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('44.309'),
					$elm$svg$Svg$Attributes$y1('127.303'),
					$elm$svg$Svg$Attributes$x2('374.301'),
					$elm$svg$Svg$Attributes$y2('457.296')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#00a900')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.497'),
							$elm$svg$Svg$Attributes$stopColor('#74ff72')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#00a900')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#p)'),
					$elm$svg$Svg$Attributes$stroke('#00A900'),
					$elm$svg$Svg$Attributes$strokeWidth('8.864'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M66.856 104.755s12.047 5.05 22.643 12.579c15.934 11.321 19.289 31.868 93.925 37.738s69.603 100.634 100.632 124.953c31.029 24.319 88.054 37.737 64.572 202.943 0 0-23.48-31.866-87.215-42.769s-78.829-32.706-93.085-72.959c-14.256-40.254-39.415-25.159-68.766-73.379-29.351-48.22-27.674-76.732-20.126-111.954 7.547-35.222-18.45-62.895-12.58-77.152z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#9CFF99'),
					$elm$svg$Svg$Attributes$stroke('#00A900'),
					$elm$svg$Svg$Attributes$strokeWidth('8.864'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M85.477 123.246s21.633 32.007 81.174 38.716c44.471 5.011 38.575 49.388 60.379 72.869 21.804 23.481 22.951 18.122 31.313 40.208 13.972 36.899 27.252 43.702 37.452 52.172 20.966 17.409 28.512 32.493 29.352 62.683s10.359 70.477 24.614 84.732c0 0-40.319-35.996-87.51-43.649-31.028-5.031-39.415-17.611-47.801-33.546-8.386-15.934-4.192-27.674-26.835-40.253s-39.415-33.546-41.091-58.704c-1.618-24.28-12.58-35.223-25.159-45.285-12.579-10.063-31.029-24.976-26.453-54.503 6.469-41.748-24.811-87.088-24.811-87.088l15.376 11.648z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$stroke('#2DD900'),
					$elm$svg$Svg$Attributes$strokeWidth('4.088'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('151.975'),
					$elm$svg$Svg$Attributes$cy('209.984'),
					$elm$svg$Svg$Attributes$rx('46.542'),
					$elm$svg$Svg$Attributes$ry('42.349')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$stroke('#2DD900'),
					$elm$svg$Svg$Attributes$strokeWidth('4.088'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('205.159'),
					$elm$svg$Svg$Attributes$cy('296.092'),
					$elm$svg$Svg$Attributes$rx('46.543'),
					$elm$svg$Svg$Attributes$ry('42.349')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$stroke('#2DD900'),
					$elm$svg$Svg$Attributes$strokeWidth('4.088'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('264.675'),
					$elm$svg$Svg$Attributes$cy('375.869'),
					$elm$svg$Svg$Attributes$rx('46.542'),
					$elm$svg$Svg$Attributes$ry('42.35')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00A900'),
					$elm$svg$Svg$Attributes$d('M29.938 164.031c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#00A900'),
					$elm$svg$Svg$Attributes$strokeWidth('1.266'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M391.44 425.255c2.097 7.412-2.213 15.13-9.626 17.229-7.418 2.099-15.129-2.216-17.227-9.631-2.098-7.412 2.213-15.126 9.623-17.227 7.419-2.097 15.129 2.218 17.23 9.629z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$d('M380.18 463.506c1.506 5.329-1.593 10.883-6.927 12.391-5.336 1.509-10.886-1.593-12.394-6.926-1.509-5.334 1.587-10.883 6.922-12.393 5.336-1.511 10.889 1.593 12.399 6.928zM295.5 239.061c2.54-1.389 5.755-4.604 7.145-7.143l4.254-7.778c1.39-2.54 3.663-2.54 5.052 0l4.252 7.777c1.389 2.54 4.604 5.755 7.144 7.144l7.776 4.254c2.54 1.389 2.54 3.662 0 5.05l-7.776 4.252c-2.54 1.389-5.755 4.603-7.144 7.143l-4.252 7.777c-1.389 2.54-3.662 2.54-5.052 0l-4.254-7.778c-1.39-2.54-4.604-5.754-7.145-7.143l-7.777-4.252c-2.54-1.389-2.54-3.662 0-5.05l7.777-4.253z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00A900'),
					$elm$svg$Svg$Attributes$d('M349.988 221.598c-2.203 1.205-4.99 3.992-6.195 6.195s-3.177 2.203-4.381 0c-1.205-2.203-3.993-4.99-6.196-6.195s-2.203-3.177 0-4.382c2.203-1.205 4.991-3.992 6.196-6.194 1.204-2.203 3.176-2.203 4.381 0 1.205 2.202 3.992 4.99 6.195 6.194 2.202 1.205 2.202 3.177 0 4.382z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M176.3 398.22c3.451-1.887 7.818-6.254 9.705-9.704l5.779-10.567c1.887-3.45 4.975-3.45 6.861 0l5.778 10.567c1.887 3.45 6.254 7.817 9.704 9.704l10.564 5.777c3.45 1.887 3.45 4.975 0 6.861l-10.564 5.778c-3.45 1.887-7.817 6.254-9.704 9.704l-5.778 10.566c-1.887 3.45-4.975 3.45-6.862 0l-5.778-10.566c-1.887-3.45-6.254-7.817-9.705-9.704l-10.566-5.778c-3.45-1.887-3.45-4.975 0-6.861l10.566-5.777zM223.803 429.871c1.567-.856 3.55-2.839 4.406-4.405l2.624-4.797c.856-1.566 2.259-1.566 3.115 0l2.623 4.797c.856 1.566 2.84 3.548 4.406 4.404l4.797 2.623c1.566.856 1.567 2.258.001 3.114l-4.799 2.625c-1.566.856-3.549 2.839-4.405 4.405l-2.623 4.798c-.856 1.566-2.259 1.566-3.115 0l-2.624-4.798c-.856-1.566-2.839-3.549-4.405-4.406l-4.796-2.623c-1.566-.857-1.566-2.26.001-3.116l4.794-2.621z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$d('M313.483 171.566l4.39 4.39c.228-.281.467-.551.722-.807.255-.254.524-.492.804-.719l-4.391-4.391-1.525 1.527zm11.317.612a10.387 10.387 0 012.161-.011v-6.228H324.8v6.239zm-9.241 10.301c0-.337.019-.67.051-.999h-6.13v2.158h6.147a10.562 10.562 0 01-.068-1.159zm18.41-6.525l4.388-4.388-1.524-1.526-4.389 4.389c.28.228.552.466.807.721.253.254.491.524.718.804zm-.719 13.852c-.255.255-.525.493-.806.72l4.388 4.388 1.524-1.525-4.388-4.388a9.986 9.986 0 01-.718.805zm2.984-8.326c.032.329.051.662.051.999 0 .392-.026.778-.068 1.159h6.284v-2.158h-6.267zM324.8 192.778v6.185h2.161v-6.175a10.49 10.49 0 01-1.039.053c-.38 0-.753-.024-1.122-.063zM317.873 189l-4.39 4.39 1.524 1.525 4.39-4.39a10.52 10.52 0 01-.803-.718 11.04 11.04 0 01-.721-.807z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00A900'),
					$elm$svg$Svg$Attributes$d('M207.545 470.616a9.74 9.74 0 011.03-.058c.322 0 .641.017.955.048v-5.728h-1.985v5.738zm-5.707 2.731c.233-.233.482-.452.739-.661l-4.035-4.034-1.403 1.401 4.036 4.036c.209-.259.429-.508.663-.742zm-2.793 6.74c0-.31.018-.615.046-.917h-5.637v1.986h5.655a9.664 9.664 0 01-.064-1.069zm16.931-6l4.034-4.034-1.402-1.401-4.034 4.034c.258.208.506.428.74.661.234.234.453.483.662.74zm2.084 5.083c.028.302.046.607.046.917 0 .362-.024.718-.063 1.069h5.779v-1.986h-5.762zm-16.884 6.914l-4.037 4.036 1.403 1.402 4.036-4.036a9.507 9.507 0 01-.74-.663 9.48 9.48 0 01-.662-.739zm14.137.739a9.743 9.743 0 01-.741.664l4.035 4.035 1.402-1.402-4.034-4.035a9.267 9.267 0 01-.662.738zm-7.768 2.735v5.688h1.985v-5.678a9.723 9.723 0 01-.955.048 10.013 10.013 0 01-1.03-.058zM188.717 200.343c0 2.163-.436 4.222-1.229 6.094a15.706 15.706 0 01-8.333 8.334 15.62 15.62 0 01-6.094 1.229c-2.163 0-4.223-.438-6.095-1.229a15.697 15.697 0 01-8.335-8.334l15.03-6.094-15.03-6.094a15.656 15.656 0 013.356-4.979 15.617 15.617 0 0111.074-4.587 15.613 15.613 0 0111.07 4.587 15.691 15.691 0 013.357 4.979 15.565 15.565 0 011.229 6.094zM146.537 196.979a15.61 15.61 0 01-4.586 11.073 15.723 15.723 0 01-4.976 3.355 15.622 15.622 0 01-6.096 1.229c-2.163 0-4.222-.437-6.096-1.229a15.71 15.71 0 01-8.333-8.333l15.027-6.095-15.027-6.094a15.696 15.696 0 018.333-8.335 15.628 15.628 0 016.096-1.232 15.624 15.624 0 0111.072 4.588 15.656 15.656 0 013.356 4.979 15.588 15.588 0 011.23 6.094zM167.068 223.13c-2.73-3.33-9.26-3.829-12.908-3.829a31.44 31.44 0 00-2.188.067 31.2 31.2 0 00-2.185-.067c-3.648 0-10.177.499-12.908 3.829-1.133 1.382-1.506 3.099-1.105 5.096 1.942 9.717 15.299 13.033 15.867 13.169a.63.63 0 00.305.001c.583-.136 14.283-3.451 16.228-13.17.402-1.997.028-3.713-1.106-5.096zm-.19 4.838c-1.673 8.364-13.583 11.715-15.078 12.104-18.773-15.623.124-19.382.124-19.382a.885.885 0 00.103 0c.007-.001.858-.065 2.134-.065 2.75 0 9.411.327 11.883 3.343.884 1.078 1.157 2.385.834 4zM241.901 287.718c0 2.163-.435 4.222-1.229 6.094a15.759 15.759 0 01-3.357 4.979 15.666 15.666 0 01-4.977 3.355 15.634 15.634 0 01-6.094 1.229c-2.163 0-4.224-.438-6.096-1.229a15.7 15.7 0 01-8.335-8.334l15.03-6.094-15.03-6.094a15.656 15.656 0 013.356-4.979 15.633 15.633 0 0111.075-4.588 15.6 15.6 0 016.094 1.232 15.636 15.636 0 014.977 3.356 15.691 15.691 0 013.357 4.979 15.544 15.544 0 011.229 6.094zM199.722 284.354a15.61 15.61 0 01-4.586 11.072 15.723 15.723 0 01-4.976 3.355 15.604 15.604 0 01-6.096 1.229c-2.163 0-4.222-.437-6.096-1.229a15.716 15.716 0 01-8.333-8.332l15.027-6.095-15.027-6.094a15.67 15.67 0 013.355-4.979 15.627 15.627 0 0111.074-4.587c2.162 0 4.222.44 6.096 1.231a15.676 15.676 0 014.976 3.356 15.605 15.605 0 014.586 11.073zM220.253 310.505c-2.73-3.33-9.26-3.828-12.907-3.828-1.17 0-1.979.051-2.189.066a31.433 31.433 0 00-2.184-.066c-3.648 0-10.178.498-12.908 3.828-1.133 1.384-1.506 3.1-1.105 5.097 1.942 9.717 15.3 13.033 15.866 13.17a.636.636 0 00.306 0c.584-.137 14.283-3.452 16.228-13.17.4-1.998.026-3.713-1.107-5.097zm-.19 4.839c-1.674 8.363-13.583 11.715-15.079 12.104-18.772-15.623.124-19.382.124-19.382a.902.902 0 00.104 0c.008-.001.858-.065 2.135-.065 2.75 0 9.41.326 11.881 3.342.884 1.078 1.157 2.385.835 4.001zM301.418 367.495a15.587 15.587 0 01-4.586 11.073c-1.415 1.415-3.102 2.563-4.976 3.355s-3.935 1.229-6.095 1.229a15.606 15.606 0 01-11.074-4.584 15.67 15.67 0 01-3.355-4.979l15.029-6.094-15.029-6.095a15.659 15.659 0 013.355-4.979 15.625 15.625 0 0111.074-4.587c2.16 0 4.221.44 6.095 1.231a15.643 15.643 0 014.976 3.356 15.588 15.588 0 014.586 11.074zM259.238 364.131a15.615 15.615 0 01-4.586 11.074 15.7 15.7 0 01-4.977 3.355 15.617 15.617 0 01-6.095 1.229c-2.163 0-4.222-.437-6.097-1.229a15.71 15.71 0 01-8.333-8.333l15.028-6.096-15.028-6.094a15.696 15.696 0 018.333-8.335 15.646 15.646 0 016.097-1.231c2.161 0 4.222.44 6.095 1.231a15.68 15.68 0 014.977 3.356 15.605 15.605 0 014.586 11.073zM279.77 390.282c-2.73-3.33-9.26-3.827-12.908-3.827-1.17 0-1.979.049-2.188.065a31.104 31.104 0 00-2.184-.065c-3.648 0-10.178.497-12.908 3.827-1.133 1.384-1.506 3.099-1.105 5.096 1.941 9.718 15.3 13.034 15.866 13.17a.638.638 0 00.306 0c.583-.136 14.282-3.451 16.227-13.17.399-1.997.026-3.712-1.106-5.096zm-.191 4.839c-1.675 8.363-13.583 11.714-15.079 12.103-18.772-15.622.123-19.382.123-19.382a.602.602 0 00.104 0c.007 0 .858-.065 2.134-.065 2.751 0 9.411.327 11.882 3.343.886 1.077 1.157 2.385.836 4.001z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Qsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#623900'),
					$elm$svg$Svg$Attributes$d('M191.101 124.345s8.312-41.774 31.792-53.318c23.478-11.544 24.974 6.492 3.37 22.77-11.896 8.964-20.06 27.635-14.869 29.37 5.191 1.734-20.293 1.178-20.293 1.178z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF100'),
					$elm$svg$Svg$Attributes$stroke('#FFD64E'),
					$elm$svg$Svg$Attributes$strokeWidth('10.743'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M116.866 152.298c26.22-8.098 36.59-13.214 29.475-25.409-7.114-12.196 15.247-16.262 19.312-12.196 4.065 4.064 16.262-10.164 29.475-7.115 13.213 3.05 18.295.152 30.49-.433 12.197-.584 13.213 10.596 25.41 9.58 12.196-1.017 13.213 5.644 13.213 12.986 0 7.342 8.131 14.455 34.558 22.587 26.426 8.131 107.736 26.425 56.917 140.261-50.818 113.836-21.04 45.357-52.854 134.163-30.719 85.759-153.391 54.021-165.496 48.627-11.478-5.115-41.845-26.268-56.074-105.545-14.229-79.279-102.654-174.819 35.574-217.506z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFD64E'),
					$elm$svg$Svg$Attributes$d('M31.427 129.439c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FFD64E'),
					$elm$svg$Svg$Attributes$strokeWidth('2'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M337.548 443.566c-1.011 7.637-8.025 13.016-15.664 12.006-7.643-1.012-13.013-8.027-12.001-15.667 1.01-7.637 8.024-13.012 15.66-12.005 7.642 1.013 13.012 8.03 12.005 15.666z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF100'),
					$elm$svg$Svg$Attributes$d('M312.055 474.227c-.729 5.489-5.774 9.361-11.27 8.633-5.497-.729-9.363-5.775-8.635-11.27.728-5.495 5.769-9.363 11.265-8.637 5.498.728 9.367 5.776 8.64 11.274zM331.989 125.469c2.54-1.389 5.755-4.604 7.145-7.143l4.254-7.778c1.39-2.54 3.663-2.54 5.052 0l4.252 7.777c1.389 2.54 4.604 5.755 7.144 7.144l7.776 4.254c2.54 1.389 2.54 3.662 0 5.05l-7.776 4.252c-2.54 1.389-5.755 4.603-7.144 7.143l-4.252 7.776c-1.389 2.54-3.662 2.54-5.052 0l-4.254-7.777c-1.39-2.54-4.604-5.754-7.145-7.143l-7.777-4.252c-2.54-1.389-2.54-3.662 0-5.05l7.777-4.253z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFD64E'),
					$elm$svg$Svg$Attributes$d('M386.477 108.005c-2.202 1.205-4.989 3.993-6.194 6.195s-3.177 2.203-4.382 0c-1.204-2.203-3.992-4.99-6.195-6.195s-2.203-3.177 0-4.381 4.991-3.992 6.195-6.195c1.205-2.203 3.177-2.203 4.382 0s3.992 4.99 6.194 6.195c2.203 1.205 2.203 3.176 0 4.381z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M94.789 450.628c3.451-1.887 7.818-6.254 9.705-9.704l5.779-10.567c1.887-3.45 4.975-3.45 6.861 0l5.778 10.567c1.887 3.45 6.254 7.817 9.704 9.704l10.564 5.777c3.45 1.887 3.45 4.975 0 6.861l-10.564 5.778c-3.45 1.887-7.817 6.254-9.704 9.704l-5.778 10.566c-1.887 3.45-4.975 3.45-6.862 0l-5.778-10.566c-1.887-3.45-6.254-7.817-9.705-9.704l-10.566-5.778c-3.45-1.887-3.45-4.975 0-6.861l10.566-5.777zM142.292 482.279c1.566-.856 3.549-2.839 4.406-4.405l2.624-4.797c.856-1.566 2.259-1.566 3.115 0l2.623 4.797c.856 1.566 2.839 3.548 4.406 4.404l4.797 2.623c1.567.856 1.567 2.258 0 3.114l-4.798 2.625c-1.566.856-3.549 2.839-4.406 4.406l-2.623 4.797c-.857 1.566-2.259 1.566-3.115 0l-2.624-4.798c-.856-1.566-2.839-3.549-4.405-4.406l-4.796-2.623c-1.566-.857-1.566-2.26 0-3.116l4.796-2.621z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF100'),
					$elm$svg$Svg$Attributes$d('M349.973 57.974l4.391 4.39c.227-.28.466-.551.721-.806.254-.254.524-.492.804-.719l-4.391-4.391-1.525 1.526zm2.075 10.913c0-.337.019-.67.051-.999h-6.13v2.158h6.148a10.32 10.32 0 01-.069-1.159zm9.241-10.302c.369-.04.742-.063 1.122-.063.351 0 .697.019 1.039.053v-6.229h-2.161v6.239zm9.169 3.776l4.388-4.388-1.524-1.525-4.389 4.389c.28.227.552.466.807.721.253.254.491.524.718.803zm-.719 13.853c-.255.255-.525.493-.806.721l4.388 4.388 1.524-1.524-4.388-4.388a10.69 10.69 0 01-.718.803zm2.985-8.326c.032.329.051.662.051.999 0 .393-.026.778-.069 1.159h6.285v-2.158h-6.267zm-18.361 7.52l-4.391 4.39 1.524 1.524 4.39-4.39a10.533 10.533 0 01-.803-.719 10.387 10.387 0 01-.72-.805zm6.926 3.778v6.185h2.161v-6.175a10.49 10.49 0 01-1.039.053c-.38 0-.753-.023-1.122-.063z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFD64E'),
					$elm$svg$Svg$Attributes$d('M117.535 532.495c0-.31.018-.615.046-.917h-5.637v1.986h5.655a9.426 9.426 0 01-.064-1.069zm2.792-6.74a9.87 9.87 0 01.739-.661l-4.034-4.034-1.403 1.401 4.036 4.036c.208-.259.428-.508.662-.742zm5.707-2.731a9.74 9.74 0 011.03-.058c.322 0 .641.017.955.048v-5.728h-1.985v5.738zm8.431 3.471l4.034-4.034-1.402-1.401-4.034 4.034c.257.208.505.428.74.661.234.234.453.483.662.74zm-14.8 11.997l-4.036 4.036 1.403 1.402 4.036-4.036a9.293 9.293 0 01-1.403-1.402zm6.369 3.474v5.688h1.985v-5.678a9.723 9.723 0 01-.955.048 10.013 10.013 0 01-1.03-.058zm10.514-10.388c.029.302.046.607.046.917 0 .362-.024.718-.064 1.069h5.78v-1.986h-5.762zm-2.745 7.653a9.743 9.743 0 01-.741.664l4.035 4.035 1.402-1.402-4.035-4.035a9.255 9.255 0 01-.661.738zM315.218 261.685c0 4.547-.924 8.884-2.59 12.823a33.042 33.042 0 01-17.534 17.538 32.926 32.926 0 01-12.826 2.586c-4.55 0-8.882-.922-12.828-2.586a33.092 33.092 0 01-10.474-7.062 33.023 33.023 0 01-7.06-10.476l31.622-12.823-31.622-12.827a33.077 33.077 0 0117.534-17.536 32.893 32.893 0 0112.828-2.587c4.547 0 8.881.921 12.826 2.587a33.063 33.063 0 0117.534 17.536 32.872 32.872 0 012.59 12.827zM160.563 261.685c0 4.547-.921 8.884-2.59 12.823a33.012 33.012 0 01-7.06 10.476 33.069 33.069 0 01-10.475 7.062 32.903 32.903 0 01-12.825 2.586c-4.549 0-8.884-.922-12.828-2.586a33.073 33.073 0 01-17.532-17.538l31.623-12.823-31.623-12.827a33.064 33.064 0 0117.532-17.536 32.89 32.89 0 0112.828-2.587c4.548 0 8.884.921 12.825 2.587a33.05 33.05 0 0110.475 7.063 33.016 33.016 0 017.06 10.473 32.8 32.8 0 012.59 12.827zM239.696 332.123c-6.056-8.612-20.539-9.896-28.631-9.896-2.589 0-4.389.131-4.849.164-.459-.033-2.258-.164-4.848-.164-8.094 0-22.575 1.283-28.629 9.896-2.517 3.581-3.343 8.019-2.456 13.187 4.309 25.133 33.936 33.712 35.194 34.064.114.029.23.046.345.046.111 0 .225-.013.334-.044 1.292-.354 31.683-8.927 35.994-34.066.888-5.168.063-9.606-2.454-13.187zm-.423 12.515c-3.712 21.634-30.129 30.303-33.445 31.307-41.636-40.402.275-50.13.275-50.13.076.006.153.006.227 0 .017-.004 1.903-.166 4.735-.166 6.098 0 20.876.842 26.363 8.648 1.956 2.784 2.563 6.171 1.845 10.341z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Rsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$stroke('#004E06'),
					$elm$svg$Svg$Attributes$strokeWidth('11.276'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M170.56 313.834s-3.261 23.373-7.457.303c-1.879-10.332-16.223-29.866-25.618-23.035-9.396 6.832-51.009 24.244-69.383-11.285-18.374-35.527-19.779-11.452-34.825-13.898-5.975-.971-37.372-17.02-21.774-39.823 15.598-22.802 12.058-20.644 32.005-15.813 19.946 4.831 11.653-.877 17.748-9.589 6.095-8.713 36.11-13.965 43.629 12.331 7.519 26.297 17.622 17.018 32.058 15.222 14.438-1.798 23.019 1.078 27.5 12.182 4.483 11.102-8.278 14.443 1.991 39.016 10.271 24.571 4.126 34.389 4.126 34.389z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$stroke('#004E06'),
					$elm$svg$Svg$Attributes$strokeWidth('10.33'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M183.394 323.312s-21.468-46.451-8.197-78.848c13.272-32.398-37.082-44.499-40.985-56.208-3.903-11.71 5.855-7.807-12.881-28.885-18.736-21.078-5.465-29.275-19.126-43.327-13.662-14.052-23.24-18.465-21.859-28.885 1.544-11.651 10.827-37.764 39.712-33.471 28.885 4.294 38.355 4.585 38.746 35.423.391 30.836 5.074 39.424 24.591 34.349 19.518-5.074 30.056-1.171 32.007 15.223 1.952 16.395-11.319 28.885-8.587 37.863 2.731 8.978 8.978 16.785 15.614 20.297 6.634 3.513 9.367 12.1 0 20.297-9.369 8.197-18.736 14.121-27.714 33.798-8.979 19.678-3.001 43.228-7.279 54.158-4.279 10.931 0 0 5.465 18.736s-9.507-.52-9.507-.52z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$stroke('#004E06'),
					$elm$svg$Svg$Attributes$strokeWidth('10.33'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M199.214 328.047s-19.651-56.081 9.574-60.084c29.227-4.003 57.179-24.287 50.131-60.501-7.047-36.213-12.914-38.229 14.164-58.133 27.08-19.904-7.842-85.751 36.541-69.752 0 0 9.994-35.74 52.854-23.235 42.861 12.504 2.276 37.668 2.276 37.668s-19.841 4.072 6.108 29.764c25.951 25.691-36.016 27.538-34.295 43.416 1.723 15.878-1.037 35.787-18.305 47.675-17.269 11.888-4.684 15.966-12.3 22.817-7.615 6.852-23.401-1.236-27.078 19.904-3.677 21.139-12.881 17.667-32.543 18.335-19.663.667-47.837 8.993-44.799 48.408l-2.328 3.718z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$stroke('#004E06'),
					$elm$svg$Svg$Attributes$strokeWidth('10.226'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M202.726 310.88s6.989-32.014 47.378-29.036c37.341 2.753 23.168-3.796 30.909-14.181 11.298-15.157 25.285-19.623 33.442-16.364s12.224-10.835 14.617-22.12c2.395-11.285 44.588-27.494 32.249 18.99 0 0 30.663-4.145 27.638 30.772-3.026 34.918-40.564 26.372-46.074 22.613-5.509-3.76-20.828-8.101-29.865 10.936-9.038 19.036-42.218-12.312-54.897-16.615-12.68-4.304-41.893-2.08-41.464 16.9l-13.933-1.895z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('q'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('132.333'),
					$elm$svg$Svg$Attributes$y1('348.707'),
					$elm$svg$Svg$Attributes$x2('267.861'),
					$elm$svg$Svg$Attributes$y2('484.235')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#df0005')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.24'),
							$elm$svg$Svg$Attributes$stopColor('#df0307')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.384'),
							$elm$svg$Svg$Attributes$stopColor('#e10b10')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.502'),
							$elm$svg$Svg$Attributes$stopColor('#e3191e')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.606'),
							$elm$svg$Svg$Attributes$stopColor('#e62d32')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.701'),
							$elm$svg$Svg$Attributes$stopColor('#ea484c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.79'),
							$elm$svg$Svg$Attributes$stopColor('#ee686c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.874'),
							$elm$svg$Svg$Attributes$stopColor('#f48e92')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.951'),
							$elm$svg$Svg$Attributes$stopColor('#fab9bd')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#ffd9dc')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('r'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('128.115'),
					$elm$svg$Svg$Attributes$y1('344.489'),
					$elm$svg$Svg$Attributes$x2('272.08'),
					$elm$svg$Svg$Attributes$y2('488.454')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#6d0005')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.281'),
							$elm$svg$Svg$Attributes$stopColor('#6f0005')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.444'),
							$elm$svg$Svg$Attributes$stopColor('#780105')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.576'),
							$elm$svg$Svg$Attributes$stopColor('#860304')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.692'),
							$elm$svg$Svg$Attributes$stopColor('#9a0503')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.797'),
							$elm$svg$Svg$Attributes$stopColor('#b30903')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.895'),
							$elm$svg$Svg$Attributes$stopColor('#d30d01')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.985'),
							$elm$svg$Svg$Attributes$stopColor('#f81100')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#ff1200')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#q)'),
					$elm$svg$Svg$Attributes$stroke('url(#r)'),
					$elm$svg$Svg$Attributes$strokeWidth('11.93'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M268.252 383.662a69.23 69.23 0 01-1.445 14.104 68.506 68.506 0 01-4.143 13.136c-1.799 4.186-4.001 8.163-6.556 11.887s-5.466 7.19-8.684 10.355a71.147 71.147 0 01-10.523 8.546c-3.783 2.515-23.743 9.552-23.058 27.641.656 17.311-8.696 23.303-14.126 45.391-4.64 18.871 9.929 32.063 5.019 32.063-14.25-4.697-20.404-19.432-18.136-35.302s12.309-38.865 6.154-46.963-15.37-11.118-24.663-16.957c-9.292-5.837-18.012-11.251-21.229-14.419-3.218-3.165-6.128-6.632-8.684-10.355s-4.757-7.701-6.556-11.887a68.65 68.65 0 01-4.144-13.136 69.238 69.238 0 01-1.445-14.104c0-4.831.498-9.549 1.445-14.104a68.557 68.557 0 014.144-13.136 69.46 69.46 0 016.556-11.887 70.486 70.486 0 018.684-10.356 71.352 71.352 0 0135.951-19.075 72.48 72.48 0 0114.331-1.422c4.91 0 9.702.489 14.33 1.422a71.313 71.313 0 0135.951 19.075 70.476 70.476 0 018.684 10.356 69.528 69.528 0 016.556 11.887 68.554 68.554 0 014.143 13.136 69.308 69.308 0 011.444 14.104z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M61.124 150.031c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF1200'),
					$elm$svg$Svg$Attributes$strokeWidth('1.459'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M293.604 421.435c-.737 5.57-5.854 9.493-11.426 8.757-5.574-.737-9.491-5.854-8.754-11.428.737-5.569 5.854-9.49 11.423-8.756 5.574.738 9.491 5.856 8.757 11.427z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$d('M275.009 443.798a7.327 7.327 0 01-8.221 6.297 7.324 7.324 0 011.919-14.52 7.327 7.327 0 016.302 8.223zM361.355 196.366c1.365-.747 3.094-2.474 3.84-3.839l2.288-4.181c.746-1.365 1.969-1.365 2.715 0l2.286 4.18c.746 1.365 2.475 3.093 3.84 3.84l4.18 2.287c1.365.747 1.365 1.968 0 2.715l-4.18 2.285c-1.365.747-3.094 2.475-3.84 3.84l-2.286 4.18c-.746 1.365-1.969 1.366-2.715 0l-2.288-4.181c-.746-1.365-2.475-3.093-3.84-3.839l-4.18-2.285c-1.365-.747-1.365-1.968 0-2.715l4.18-2.287z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M390.645 186.979c-1.184.648-2.683 2.146-3.33 3.33s-1.708 1.184-2.355 0-2.146-2.682-3.33-3.33-1.184-1.708 0-2.355c1.184-.648 2.683-2.146 3.33-3.33s1.708-1.184 2.355 0 2.146 2.682 3.33 3.33c1.183.647 1.183 1.707 0 2.355z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M125.453 421.957c2.784-1.522 6.308-5.047 7.83-7.831l4.663-8.525c1.522-2.784 4.014-2.784 5.536 0l4.663 8.525c1.522 2.784 5.046 6.309 7.83 7.831l8.524 4.661c2.784 1.522 2.784 4.015 0 5.537l-8.524 4.662c-2.784 1.522-6.308 5.047-7.83 7.831l-4.663 8.524c-1.522 2.784-4.014 2.784-5.537 0l-4.662-8.524c-1.523-2.784-5.046-6.309-7.831-7.831l-8.525-4.662c-2.784-1.522-2.784-4.015 0-5.537l8.526-4.661zM163.782 447.496c1.264-.691 2.864-2.291 3.555-3.555l2.117-3.87c.691-1.264 1.822-1.264 2.514 0l2.116 3.87c.691 1.264 2.291 2.863 3.555 3.554l3.871 2.116c1.264.69 1.264 1.821 0 2.513l-3.872 2.118c-1.264.691-2.863 2.291-3.555 3.555l-2.116 3.871c-.691 1.264-1.822 1.264-2.514 0l-2.117-3.871c-.691-1.264-2.291-2.863-3.555-3.555l-3.87-2.118c-1.264-.691-1.264-1.822 0-2.514l3.871-2.114z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$d('M371.022 160.086l2.359 2.359a5.266 5.266 0 01.82-.82l-2.359-2.36-.82.821zm6.083.329a5.696 5.696 0 011.162-.006v-3.348h-1.161v3.354zm-4.967 5.537c0-.181.011-.36.027-.537h-3.295v1.16h3.305a5.573 5.573 0 01-.037-.623zm9.896-3.508l2.358-2.358-.819-.82-2.358 2.359c.15.122.296.25.433.387s.264.282.386.432zm1.218 2.971a5.305 5.305 0 01-.01 1.16h3.378v-1.16h-3.368zm-1.605 4.475a5.484 5.484 0 01-.433.387l2.358 2.359.819-.82-2.358-2.358c-.121.15-.249.295-.386.432zm-4.542 1.598v3.325h1.161v-3.319a5.435 5.435 0 01-1.161-.006zm-3.723-2.031l-2.359 2.359.819.82 2.359-2.36a5.86 5.86 0 01-.432-.386 5.889 5.889 0 01-.387-.433z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M146.059 482.575c.188-.188.389-.364.596-.533l-3.255-3.255-1.132 1.131 3.256 3.256a7.78 7.78 0 01.535-.599zm-2.253 5.44c0-.25.014-.496.038-.74h-4.549v1.603h4.563a7.461 7.461 0 01-.052-.863zm6.858-7.642c.273-.029.55-.047.831-.047.26 0 .517.014.771.039v-4.622h-1.602v4.63zm6.803 2.8l3.255-3.255-1.132-1.131-3.254 3.255c.208.168.408.345.597.533.188.19.365.39.534.598zm-6.803 12.482v4.59h1.602v-4.582a7.615 7.615 0 01-1.602-.008zm-5.14-2.802l-3.257 3.257 1.132 1.132 3.256-3.257a7.774 7.774 0 01-.597-.535 7.976 7.976 0 01-.534-.597zm13.623-5.579c.023.244.038.49.038.74 0 .292-.02.579-.051.862h4.663v-1.603h-4.65zm-2.215 6.175c-.189.189-.39.367-.598.536l3.256 3.256 1.132-1.132-3.256-3.256a7.37 7.37 0 01-.534.596z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#6D0005'),
					$elm$svg$Svg$Attributes$d('M242.602 371.682a13.165 13.165 0 01-3.866 9.337 13.278 13.278 0 01-4.196 2.829 13.197 13.197 0 01-5.14 1.037c-1.824 0-3.559-.37-5.141-1.037a13.249 13.249 0 01-7.026-7.026l12.671-5.14-12.671-5.139a13.26 13.26 0 012.829-4.197 13.271 13.271 0 014.197-2.829 13.173 13.173 0 015.141-1.037c1.821 0 3.558.369 5.14 1.037a13.24 13.24 0 017.024 7.026 13.178 13.178 0 011.038 5.139zM180.631 371.682c0 1.823-.369 3.561-1.038 5.14a13.216 13.216 0 01-2.829 4.197 13.26 13.26 0 01-4.197 2.829 13.181 13.181 0 01-5.139 1.037c-1.823 0-3.561-.37-5.141-1.037a13.251 13.251 0 01-7.025-7.026l12.672-5.14-12.672-5.139a13.262 13.262 0 017.025-7.026 13.177 13.177 0 015.141-1.037 13.163 13.163 0 019.336 3.866 13.227 13.227 0 012.829 4.197 13.125 13.125 0 011.038 5.139zM212.34 399.906c-2.426-3.45-8.229-3.964-11.472-3.964-1.037 0-1.758.052-1.943.065a26.375 26.375 0 00-1.942-.065c-3.243 0-9.045.514-11.472 3.964-1.008 1.437-1.339 3.214-.984 5.285 1.727 10.071 13.599 13.508 14.103 13.65a.52.52 0 00.272 0c.518-.143 12.694-3.577 14.422-13.65.355-2.071.025-3.848-.984-5.285zm-.169 5.016c-1.488 8.668-12.073 12.143-13.402 12.545-16.683-16.189.111-20.088.111-20.088.03.003.062.003.09 0a24.01 24.01 0 011.897-.066c2.444 0 8.365.337 10.564 3.466.784 1.116 1.027 2.472.74 4.143z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$gradientTransform = _VirtualDom_attribute('gradientTransform');
var $author$project$Data$Ssvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$stroke('#004E06'),
					$elm$svg$Svg$Attributes$strokeWidth('13'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M130.179 169.5s10.788-23.757 0-50.126c-10.788-26.369-49.143-59.224 0-47.237 49.143 11.985 22.774 35.712 40.753 9.343 17.979-26.37 11.857-25.641 28.702-12.283s9.517 22.739 31.229 2.509c15.337-14.288 5.927-9.428 26.075-18.612 28.796-13.124 34.76-7.32 17.979 16.652s-34.95 32.108-14.573 29.712c20.378-2.397 25.653 4.338 7.674 15.125-17.979 10.788-21.575 44.917-5.993 54.917H130.179z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('s'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('65.575'),
					$elm$svg$Svg$Attributes$y1('165.509'),
					$elm$svg$Svg$Attributes$x2('324.777'),
					$elm$svg$Svg$Attributes$y2('424.71'),
					$elm$svg$Svg$Attributes$gradientTransform('rotate(-6.012 201.612 334.232)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#df0005')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.311'),
							$elm$svg$Svg$Attributes$stopColor('#e00307')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.496'),
							$elm$svg$Svg$Attributes$stopColor('#e30b0d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.649'),
							$elm$svg$Svg$Attributes$stopColor('#e71917')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.784'),
							$elm$svg$Svg$Attributes$stopColor('#ee2d25')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.906'),
							$elm$svg$Svg$Attributes$stopColor('#f64737')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#ff6149')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#s)'),
					$elm$svg$Svg$Attributes$stroke('#A20004'),
					$elm$svg$Svg$Attributes$strokeWidth('12.669'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M67.879 413.566c-43.924-69.972-105.922-232.58 55.132-271.204 161.053-38.625 257.768 44.348 257.702 119.861-.047 52.22-33.164 175.355-135.813 230.738-102.646 55.385-177.021-79.395-177.021-79.395z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M34.117 110.555c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF1200'),
					$elm$svg$Svg$Attributes$strokeWidth('2.021'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M366.641 434.186c-1.648 7.606-9.157 12.442-16.765 10.796-7.611-1.649-12.438-9.157-10.79-16.768 1.648-7.604 9.156-12.438 16.761-10.794 7.611 1.65 12.439 9.16 10.794 16.766z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$d('M338.438 462.952c-1.188 5.467-6.588 8.949-12.062 7.761-5.473-1.188-8.95-6.589-7.763-12.06 1.186-5.473 6.582-8.952 12.057-7.766 5.476 1.186 8.955 6.59 7.768 12.065zM333.712 126.082c2.349-1.284 5.32-4.256 6.604-6.604l3.935-7.191c1.284-2.348 3.386-2.348 4.67 0l3.933 7.19c1.284 2.348 4.256 5.32 6.604 6.604l7.189 3.933c2.349 1.284 2.349 3.386 0 4.669l-7.189 3.931c-2.349 1.284-5.32 4.256-6.604 6.604l-3.933 7.19c-1.284 2.348-3.386 2.348-4.67 0l-3.935-7.191c-1.284-2.348-4.256-5.32-6.604-6.604l-7.189-3.931c-2.349-1.284-2.349-3.385 0-4.669l7.189-3.931z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M384.089 109.937c-2.036 1.114-4.613 3.691-5.728 5.728s-2.938 2.036-4.051 0c-1.114-2.036-3.692-4.614-5.729-5.728-2.036-1.114-2.036-2.938 0-4.051s4.614-3.691 5.729-5.727c1.113-2.036 2.937-2.036 4.051 0 1.114 2.036 3.691 4.613 5.728 5.727s2.036 2.936 0 4.051z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M71.643 446.229c3.825-2.092 8.665-6.932 10.756-10.756l6.404-11.713c2.092-3.824 5.514-3.824 7.605 0l6.404 11.713c2.092 3.824 6.932 8.664 10.756 10.756l11.708 6.403c3.825 2.092 3.825 5.514 0 7.605l-11.709 6.404c-3.824 2.092-8.665 6.932-10.756 10.756l-6.404 11.712c-2.091 3.824-5.514 3.824-7.605 0l-6.404-11.712c-2.091-3.824-6.932-8.664-10.756-10.756l-11.71-6.404c-3.825-2.092-3.825-5.514 0-7.605l11.711-6.403zM124.293 481.311c1.736-.949 3.934-3.146 4.883-4.882l2.908-5.316c.95-1.735 2.503-1.735 3.453.001l2.906 5.314c.95 1.736 3.147 3.934 4.884 4.883l5.317 2.906c1.736.949 1.737 2.503 0 3.452l-5.318 2.909c-1.736.949-3.934 3.147-4.883 4.884l-2.907 5.315c-.949 1.736-2.503 1.736-3.453.001l-2.908-5.317c-.95-1.735-3.147-3.934-4.883-4.883l-5.316-2.909c-1.736-.949-1.736-2.503 0-3.452l5.317-2.906z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$d('M350.339 63.68l4.058 4.058c.211-.259.432-.51.667-.746.235-.235.484-.455.743-.665l-4.059-4.059-1.409 1.412zm18.94 4.057l4.057-4.057-1.41-1.411-4.057 4.057c.259.21.509.431.745.666.236.236.455.486.665.745zm-17.022 6.033c0-.312.018-.62.047-.924h-5.667v1.995h5.684a9.476 9.476 0 01-.064-1.071zm8.545-9.525a9.591 9.591 0 011.997-.01v-5.757h-1.997v5.767zm10.572 8.601c.029.304.047.612.047.924 0 .362-.024.719-.063 1.071h5.81v-1.995h-5.794zm-16.978 6.952l-4.058 4.058 1.409 1.41 4.059-4.058a9.576 9.576 0 01-.743-.665 9.652 9.652 0 01-.667-.745zm14.218.745a9.63 9.63 0 01-.745.667l4.057 4.057 1.41-1.41-4.057-4.057c-.21.258-.43.508-.665.743zm-7.812 2.748v5.719h1.997v-5.709a9.577 9.577 0 01-1.997-.01z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M99.948 529.497c.259-.259.534-.501.819-.731l-4.472-4.472-1.555 1.554 4.473 4.473c.231-.287.475-.563.735-.824zm15.67.822l4.471-4.472-1.555-1.554-4.471 4.471c.285.23.561.474.82.732.26.261.503.537.735.823zm-18.765 6.651c0-.344.02-.683.051-1.018h-6.248v2.201h6.268a10.267 10.267 0 01-.071-1.183zm9.42-10.498a10.605 10.605 0 012.201-.009v-6.35h-2.2v6.359zm8.61 17.963c-.26.261-.536.504-.822.736l4.473 4.473 1.555-1.555-4.472-4.473c-.231.285-.474.56-.734.819zm3.044-8.483c.032.335.051.674.051 1.018 0 .4-.027.795-.07 1.184h6.405v-2.201h-6.386zm-11.654 11.514v6.304h2.2v-6.294c-.348.035-.701.054-1.059.054a11.044 11.044 0 01-1.141-.064zm-7.06-3.851l-4.474 4.474 1.555 1.555 4.474-4.474a10.812 10.812 0 01-.821-.735 10.785 10.785 0 01-.734-.82z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A20004'),
					$elm$svg$Svg$Attributes$d('M311.27 267.658a32.972 32.972 0 01-9.682 23.379 33.27 33.27 0 01-10.507 7.084 33.045 33.045 0 01-12.869 2.597c-4.567 0-8.91-.927-12.871-2.597a33.162 33.162 0 01-17.593-17.593l31.727-12.87-31.727-12.867a33.185 33.185 0 017.084-10.509 33.232 33.232 0 0110.509-7.083 32.997 32.997 0 0112.871-2.597c4.561 0 8.909.925 12.869 2.597a33.146 33.146 0 0117.589 17.592 32.968 32.968 0 012.6 12.867zM156.102 267.658c0 4.566-.923 8.916-2.598 12.87a33.113 33.113 0 01-7.084 10.509 33.219 33.219 0 01-10.508 7.084 33.005 33.005 0 01-12.866 2.597c-4.565 0-8.916-.927-12.873-2.597a33.206 33.206 0 01-10.505-7.084 33.099 33.099 0 01-7.085-10.509l31.729-12.87-31.729-12.867a33.17 33.17 0 0117.59-17.592 33 33 0 0112.873-2.597c4.561 0 8.913.925 12.866 2.597a33.172 33.172 0 0117.592 17.592 32.913 32.913 0 012.598 12.867zM235.498 338.33c-6.075-8.639-20.606-9.925-28.727-9.925-2.598 0-4.403.128-4.865.163a66.033 66.033 0 00-4.863-.163c-8.121 0-22.648 1.286-28.724 9.925-2.524 3.597-3.353 8.047-2.463 13.232 4.323 25.217 34.05 33.822 35.312 34.18a1.333 1.333 0 00.681 0c1.296-.357 31.785-8.957 36.114-34.18.887-5.185.06-9.635-2.465-13.232zm-.423 12.558c-3.728 21.703-30.23 30.404-33.559 31.411-41.772-40.536.277-50.298.277-50.298.076.007.154.007.227 0 .017-.002 1.911-.166 4.751-.166 6.12 0 20.945.844 26.451 8.679 1.963 2.795 2.572 6.19 1.853 10.374z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Tsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#E81021'),
					$elm$svg$Svg$Attributes$stroke('#980006'),
					$elm$svg$Svg$Attributes$strokeWidth('12.405'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M375.183 354.55c-6.964 63.237-66.368 108.577-132.16 101.329l-113.628-12.518c-65.792-7.248-113.48-64.387-106.513-127.623l1.94-17.615c6.967-63.235 65.948-108.623 131.74-101.375l113.628 12.518c65.794 7.248 113.9 64.434 106.935 127.669l-1.942 17.615z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#22E200'),
					$elm$svg$Svg$Attributes$d('M224.407 197.153c1.845-10.428 1.513-27.44 2.178-38.73.886-15.063-31.901-15.063-31.901-15.063 15.006 26.822 5.381 44.215-1.166 51.84-14.88-.981-30.24-1.052-38.351 3.232-10.267 5.424-6.198 13.56 18.208 14.722 0 0-22.276 9.686-20.339 25.763 1.937 16.078 34.488 3.606 41.454-19.758 0 0 11.621 3.485 14.72 17.433s18.208 18.208 26.344 8.33-6.199-17.24-.775-25.569c5.659-8.689 25.183 9.879 32.931-6.004 5.055-10.363-23.107-14.542-43.303-16.196z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#E81021'),
					$elm$svg$Svg$Attributes$d('M41.117 167.555c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#E81021'),
					$elm$svg$Svg$Attributes$strokeWidth('2.021'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M374.407 446.056c-3.4 7.001-11.84 9.925-18.842 6.526-7.006-3.402-9.921-11.838-6.521-18.843 3.4-7 11.838-9.922 18.838-6.525 7.007 3.403 9.922 11.842 6.525 18.842z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#22E200'),
					$elm$svg$Svg$Attributes$d('M340.203 467.339c-2.447 5.031-8.518 7.138-13.555 4.689-5.036-2.448-7.139-8.519-4.691-13.554 2.446-5.037 8.513-7.142 13.551-4.694 5.039 2.447 7.142 8.519 4.695 13.559zM328.712 187.082c2.349-1.284 5.32-4.256 6.604-6.604l3.935-7.191c1.284-2.348 3.386-2.348 4.67 0l3.933 7.19c1.284 2.348 4.256 5.32 6.604 6.604l7.189 3.933c2.349 1.284 2.349 3.386 0 4.669l-7.189 3.931c-2.349 1.284-5.32 4.256-6.604 6.604l-3.933 7.19c-1.284 2.348-3.386 2.348-4.67 0l-3.935-7.191c-1.284-2.348-4.256-5.32-6.604-6.604l-7.189-3.931c-2.349-1.284-2.349-3.385 0-4.669l7.189-3.931z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#E81021'),
					$elm$svg$Svg$Attributes$d('M379.089 170.937c-2.036 1.114-4.613 3.691-5.728 5.728s-2.938 2.036-4.051 0c-1.114-2.036-3.692-4.614-5.729-5.728-2.036-1.114-2.036-2.938 0-4.051s4.614-3.691 5.729-5.727c1.113-2.036 2.937-2.036 4.051 0 1.114 2.036 3.691 4.613 5.728 5.727s2.036 2.936 0 4.051z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M40.643 400.229c3.825-2.092 8.665-6.932 10.756-10.757l6.404-11.711c2.092-3.825 5.514-3.825 7.605 0l6.404 11.711c2.092 3.825 6.932 8.665 10.756 10.757l11.708 6.403c3.825 2.092 3.825 5.514 0 7.605l-11.709 6.404c-3.824 2.092-8.665 6.932-10.756 10.756l-6.404 11.712c-2.091 3.824-5.514 3.824-7.605 0l-6.404-11.712c-2.091-3.824-6.932-8.664-10.756-10.756l-11.71-6.404c-3.825-2.092-3.825-5.514 0-7.605l11.711-6.403zM93.293 435.311c1.737-.949 3.934-3.146 4.884-4.882l2.908-5.316c.95-1.735 2.503-1.735 3.453.001l2.906 5.314c.95 1.736 3.147 3.934 4.884 4.883l5.317 2.906c1.736.949 1.737 2.503 0 3.452l-5.318 2.909c-1.736.949-3.934 3.147-4.883 4.884l-2.907 5.315c-.949 1.736-2.503 1.736-3.453.001l-2.908-5.317c-.95-1.735-3.147-3.934-4.883-4.883l-5.316-2.909c-1.736-.949-1.736-2.503.001-3.452l5.315-2.906z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#22E200'),
					$elm$svg$Svg$Attributes$d('M345.339 124.68l4.058 4.058c.211-.259.432-.51.667-.746.235-.235.484-.455.743-.665l-4.059-4.059-1.409 1.412zm1.918 10.09c0-.312.018-.62.047-.924h-5.667v1.995h5.684a9.476 9.476 0 01-.064-1.071zm8.545-9.525a9.591 9.591 0 011.997-.01v-5.757h-1.997v5.767zm8.477 3.492l4.057-4.057-1.41-1.411-4.057 4.057c.259.21.509.431.745.666.236.236.455.486.665.745zm-8.477 15.554v5.719h1.997v-5.709a9.577 9.577 0 01-1.997-.01zm10.572-10.445c.029.304.047.612.047.924 0 .362-.024.719-.063 1.071h5.81v-1.995h-5.794zm-16.978 6.952l-4.058 4.058 1.409 1.41 4.059-4.058a9.576 9.576 0 01-.743-.665 9.652 9.652 0 01-.667-.745zm14.218.745a9.63 9.63 0 01-.745.667l4.057 4.057 1.41-1.41-4.057-4.057c-.21.258-.43.508-.665.743z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#E81021'),
					$elm$svg$Svg$Attributes$d('M68.948 483.497c.259-.259.534-.501.819-.731l-4.472-4.472-1.555 1.554 4.473 4.473c.231-.287.475-.563.735-.824zm6.325-3.025a10.605 10.605 0 012.201-.009v-6.35h-2.2v6.359zm-9.42 10.498c0-.344.02-.683.051-1.018h-6.248v2.201h6.268a10.267 10.267 0 01-.071-1.183zm18.765-6.651l4.471-4.472-1.555-1.554-4.471 4.471c.285.23.561.474.82.732.26.261.503.537.735.823zm-.735 14.116c-.26.261-.536.504-.822.736l4.473 4.473 1.555-1.555-4.472-4.473c-.231.285-.474.56-.734.819zm-15.67-.82l-4.474 4.474 1.555 1.555 4.474-4.474a10.812 10.812 0 01-.821-.735 10.785 10.785 0 01-.734-.82zm18.714-7.663c.032.335.051.674.051 1.018 0 .4-.027.795-.07 1.184h6.405v-2.201h-6.386zm-11.654 11.514v6.304h2.2v-6.294c-.348.035-.701.054-1.059.054a11.044 11.044 0 01-1.141-.064z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A20004'),
					$elm$svg$Svg$Attributes$d('M307.9 315.488a32.97 32.97 0 01-4.526 12.324 33.149 33.149 0 01-8.598 9.311 33.284 33.284 0 01-11.462 5.403 33.023 33.023 0 01-13.114.608 33.034 33.034 0 01-12.327-4.522 33.293 33.293 0 01-9.31-8.6 33.165 33.165 0 01-5.403-11.465l33.315-7.895-29.401-17.542a33.166 33.166 0 0120.064-14.712 32.973 32.973 0 0113.116-.609 32.996 32.996 0 0112.325 4.524 33.139 33.139 0 0114.709 20.062 32.973 32.973 0 01.612 13.113zM155.624 304.148a32.94 32.94 0 01-4.784 12.228 33.129 33.129 0 01-8.794 9.126 33.228 33.228 0 01-11.575 5.161 33.019 33.019 0 01-13.121.332 33.053 33.053 0 01-12.23-4.782 33.213 33.213 0 01-9.122-8.794 33.113 33.113 0 01-5.161-11.576l33.476-7.19-29.026-18.159a33.132 33.132 0 018.795-9.126 33.197 33.197 0 0111.571-5.16 32.993 32.993 0 0113.127-.333 32.964 32.964 0 0112.224 4.783 33.138 33.138 0 0114.285 20.369 32.889 32.889 0 01.335 13.121zM223.256 377c-3.9-8.082-15.906-11.167-22.715-12.288a55.155 55.155 0 00-4.102-.535 55.189 55.189 0 00-4.055-.809c-6.809-1.122-19.167-2.05-25.454 4.354-2.614 2.667-3.923 6.283-3.893 10.754.142 21.741 23.878 33.063 24.887 33.536.091.037.186.067.284.083.092.016.19.02.286.011 1.137-.121 27.888-3.12 35.001-23.671 1.46-4.225 1.382-8.07-.239-11.435zm-2.089 10.471c-6.122 17.683-29.546 21.317-32.475 21.702-29.426-39.757 7.179-42.134 7.179-42.134a.98.98 0 00.189.031c.014 0 1.625.124 4.006.517 5.131.845 17.444 3.601 20.979 10.93 1.261 2.614 1.303 5.546.122 8.954z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Usvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('t'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('187.776'),
					$elm$svg$Svg$Attributes$y1('212'),
					$elm$svg$Svg$Attributes$x2('187.776'),
					$elm$svg$Svg$Attributes$y2('143.681')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#620005')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.333'),
							$elm$svg$Svg$Attributes$stopColor('#740b0d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.557'),
							$elm$svg$Svg$Attributes$stopColor('#be392d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.742'),
							$elm$svg$Svg$Attributes$stopColor('#ff6149')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#47ff6b')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#t)'),
					$elm$svg$Svg$Attributes$d('M101.596 212s29.244-13.215 10.084-28.341-33.276-35.347-20.168-29.296 23.193 35.267 91.763 35.267c68.569 0 74.768-26.802 92.919-39.818s16.294-3.771.159 13.371c-16.136 17.143-35.6 20.817-1.314 48.817H101.596z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('u'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('200'),
					$elm$svg$Svg$Attributes$y1('365.633'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('456.262')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('0'),
							$elm$svg$Svg$Attributes$stopColor('#620005')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.333'),
							$elm$svg$Svg$Attributes$stopColor('#740b0d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.557'),
							$elm$svg$Svg$Attributes$stopColor('#be392d')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.742'),
							$elm$svg$Svg$Attributes$stopColor('#ff6149')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#47ff6b')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#u)'),
					$elm$svg$Svg$Attributes$d('M84.286 366.927s41.031 47.17-5.169 49.754c0 0 14.861 8.076 32.954-7.754 18.093-15.831 23.908-31.982 24.231-7.106s-60.095 49.751-97.895 43.936c-37.801-5.815-33.276 1.938-25.846 4.846 7.431 2.909 70.107 19.043 135.692-20.999 65.584-40.041 101.769-4.2 109.524.646 7.754 4.847 87.23 45.556 134.723-5.491 0 0-37.799 18.737-74.63 12.6-36.831-6.139-60.095-30.369-56.217-36.185s20.355-14.217 38.771 5.491c18.414 19.709 23.585-5.491 23.585-5.491s-15.832 10.663-22.939-7.431c-7.108-18.093 6.785-28.108 6.785-28.108l-223.569 1.292z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#9E0039'),
					$elm$svg$Svg$Attributes$stroke('#701021'),
					$elm$svg$Svg$Attributes$strokeWidth('11'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M351.5 293.572c0 52.979-42.949 95.928-95.929 95.928H127.429c-52.98 0-95.929-42.948-95.929-95.928v-.145c0-52.979 42.949-95.928 95.929-95.928h128.143c52.979 0 95.929 42.948 95.929 95.928v.145z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#701021'),
					$elm$svg$Svg$Attributes$d('M34.117 110.555c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#701021'),
					$elm$svg$Svg$Attributes$strokeWidth('1.686'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M375.064 357.815c-1.979 6.183-8.604 9.597-14.789 7.618-6.188-1.979-9.595-8.603-7.615-14.79 1.98-6.184 8.604-9.596 14.786-7.618 6.19 1.981 9.596 8.606 7.618 14.79z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#47FF6B'),
					$elm$svg$Svg$Attributes$d('M349.335 379.44a8.463 8.463 0 01-16.12-5.161c1.424-4.449 6.185-6.906 10.637-5.481 4.451 1.424 6.908 6.191 5.483 10.642zM333.712 126.082c2.349-1.284 5.32-4.256 6.604-6.604l3.935-7.191c1.284-2.348 3.386-2.348 4.67 0l3.933 7.19c1.284 2.348 4.256 5.32 6.604 6.604l7.189 3.933c2.349 1.284 2.349 3.386 0 4.669l-7.189 3.931c-2.349 1.284-5.32 4.256-6.604 6.604l-3.933 7.19c-1.284 2.348-3.386 2.348-4.67 0l-3.935-7.191c-1.284-2.348-4.256-5.32-6.604-6.604l-7.189-3.931c-2.349-1.284-2.349-3.385 0-4.669l7.189-3.931z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#701021'),
					$elm$svg$Svg$Attributes$d('M384.089 109.937c-2.036 1.114-4.613 3.691-5.728 5.728s-2.938 2.036-4.051 0c-1.114-2.036-3.692-4.614-5.729-5.728-2.036-1.114-2.036-2.938 0-4.051s4.614-3.691 5.729-5.727c1.113-2.036 2.937-2.036 4.051 0 1.114 2.036 3.691 4.613 5.728 5.727s2.036 2.936 0 4.051z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M26.754 345.453c3.313-1.812 7.506-6.005 9.318-9.317l5.548-10.146c1.812-3.313 4.776-3.313 6.588 0l5.548 10.146c1.812 3.313 6.004 7.506 9.317 9.317L73.217 351c3.313 1.812 3.313 4.776 0 6.589l-10.143 5.547c-3.313 1.813-7.506 6.006-9.318 9.318l-5.547 10.145c-1.812 3.313-4.777 3.313-6.589 0l-5.547-10.145c-1.812-3.313-6.005-7.506-9.318-9.317l-10.145-5.549c-3.313-1.812-3.313-4.776 0-6.588l10.144-5.547zM72.364 375.843c1.504-.822 3.408-2.726 4.231-4.229l2.519-4.604c.823-1.504 2.169-1.504 2.992 0l2.518 4.604c.823 1.504 2.727 3.407 4.23 4.229l4.606 2.517c1.504.822 1.504 2.168 0 2.991l-4.607 2.52c-1.504.823-3.407 2.727-4.23 4.23l-2.518 4.605c-.823 1.504-2.168 1.504-2.991 0l-2.52-4.605c-.823-1.504-2.726-3.407-4.23-4.23l-4.604-2.52c-1.504-.823-1.504-2.169 0-2.991l4.604-2.517z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#47FF6B'),
					$elm$svg$Svg$Attributes$d('M350.339 63.68l4.058 4.058c.211-.259.432-.51.667-.746.235-.235.484-.455.743-.665l-4.059-4.059-1.409 1.412zm1.918 10.09c0-.312.018-.62.047-.924h-5.667v1.995h5.684a9.476 9.476 0 01-.064-1.071zm8.545-9.525a9.591 9.591 0 011.997-.01v-5.757h-1.997v5.767zm8.477 3.492l4.057-4.057-1.41-1.411-4.057 4.057c.259.21.509.431.745.666.236.236.455.486.665.745zm-.665 12.806a9.63 9.63 0 01-.745.667l4.057 4.057 1.41-1.41-4.057-4.057c-.21.258-.43.508-.665.743zm2.76-7.697c.029.304.047.612.047.924 0 .362-.024.719-.063 1.071h5.81v-1.995h-5.794zm-10.572 10.445v5.719h1.997v-5.709a9.577 9.577 0 01-1.997-.01zm-6.406-3.493l-4.058 4.058 1.409 1.41 4.059-4.058a9.576 9.576 0 01-.743-.665 9.652 9.652 0 01-.667-.745z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#701021'),
							$elm$svg$Svg$Attributes$d('M51.274 417.585c.225-.224.463-.435.709-.634l-3.874-3.874-1.347 1.346 3.875 3.875c.201-.248.412-.487.637-.713zm5.48-2.62c.325-.035.654-.056.989-.056.31 0 .615.017.917.046v-5.5h-1.906v5.51zm8.095 3.331l3.873-3.873-1.347-1.346-3.873 3.873c.247.2.485.41.71.635.226.226.436.464.637.711zm-16.256 5.762c0-.298.017-.591.044-.881h-5.413v1.906h5.429a9.644 9.644 0 01-.06-1.025zm15.619 6.466a8.976 8.976 0 01-.712.638l3.875 3.875 1.347-1.347-3.874-3.874a8.914 8.914 0 01-.636.708zm2.637-7.347c.028.29.044.583.044.881 0 .347-.023.688-.061 1.025h5.548v-1.906h-5.531zm-10.095 9.972v5.462h1.906v-5.452a8.994 8.994 0 01-1.906-.01zm-6.115-3.335l-3.875 3.876 1.347 1.347 3.875-3.876a8.751 8.751 0 01-1.347-1.347z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#701021'),
					$elm$svg$Svg$Attributes$d('M264.868 260.818a21.996 21.996 0 01-6.458 15.595 22.19 22.19 0 01-7.01 4.726 22.042 22.042 0 01-8.584 1.732c-3.047 0-5.944-.618-8.587-1.732a22.124 22.124 0 01-11.736-11.736l21.164-8.585-21.164-8.583a22.106 22.106 0 0111.736-11.736 22.024 22.024 0 018.587-1.732c3.042 0 5.942.617 8.584 1.732a22.171 22.171 0 017.01 4.725 22.137 22.137 0 014.725 7.011 21.997 21.997 0 011.733 8.583zM161.357 260.818a21.96 21.96 0 01-1.733 8.585 22.08 22.08 0 01-4.726 7.01 22.168 22.168 0 01-7.01 4.726 22.015 22.015 0 01-8.583 1.732c-3.045 0-5.947-.618-8.587-1.732a22.132 22.132 0 01-11.735-11.736l21.167-8.585-21.167-8.583a22.129 22.129 0 0111.735-11.736 22.02 22.02 0 018.587-1.732c3.043 0 5.946.617 8.583 1.732a22.123 22.123 0 0111.736 11.736 21.943 21.943 0 011.733 8.583zM233.879 301.037c-7.59-10.792-25.745-12.397-35.89-12.397-3.245 0-5.501.159-6.078.203-.576-.044-2.828-.203-6.075-.203-10.146 0-28.295 1.605-35.885 12.397-3.154 4.494-4.189 10.054-3.077 16.531 5.401 31.504 42.54 42.256 44.116 42.702.139.033.285.053.432.053.135 0 .28-.017.418-.053 1.619-.446 39.708-11.19 45.117-42.702 1.107-6.477.076-12.037-3.078-16.531zm-.529 15.689c-4.657 27.114-37.767 37.985-41.924 39.243-52.187-50.643.346-62.838.346-62.838.095.009.194.009.283 0 .021-.001 2.387-.208 5.935-.208 7.646 0 26.167 1.055 33.046 10.843 2.449 3.491 3.212 7.734 2.314 12.96z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Vsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC0'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M318.936 441.11C306.205 502.438 256.569 543 204.625 543h-20.257c-51.943 0-100.35-46.892-116.768-100.932-22.998-75.703-5.749-221.541 5.749-277.119C84.848 109.37 132.424 72 184.368 72h20.257c51.944 0 102.538 44.078 114.311 99.656 10.466 49.423 12.729 208.127 0 269.454z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('1.447'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M327.396 235.569s16.997 13.665 21.295 16.467c3.786 2.468-13.794 10.527-19.503 18.555l-1.792-35.022zM320.236 168.382s19.142 10.451 23.868 12.45c4.161 1.761-11.721 12.796-15.921 21.706l-7.947-34.156z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('.984'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M330.583 319.898s10.577 10.394 13.297 12.578c2.396 1.925-10.043 6.193-14.445 11.239l1.148-23.817zM303.916 123.232s14.204 4.258 17.629 4.92c3.02.584-5.991 10.164-7.532 16.681l-10.097-21.601zM259.924 84.469s14.785-1.128 18.22-1.739c3.027-.539-1.941 11.638-1.04 18.273l-17.18-16.534zM216.978 73.511s11.797-8.982 14.347-11.362c2.249-2.098 4.696 10.823 9.061 15.904l-23.408-4.542zM160.118 73.434s7.917-12.536 9.476-15.659c1.374-2.75 8.18 8.502 14.043 11.738l-23.519 3.921zM117.074 93.611s3.694-14.359 4.222-17.809c.464-3.038 10.391 5.586 16.964 6.87l-21.186 10.939zM324.409 435.713s6.992 13.077 8.935 15.975c1.714 2.551-11.434 2.911-17.142 6.413l8.207-22.388zM240.944 537.594s-6.391 13.381-7.573 16.662c-1.04 2.893-9.12-7.483-15.323-10.007l22.896-6.655zM171.227 540.355s-12.823 7.448-15.648 9.493c-2.491 1.802-3.314-11.323-7.016-16.904l22.664 7.411zM131.024 526.93s-14.402 3.534-17.689 4.701c-2.897 1.026.01-11.798-1.969-18.196l19.658 13.495zM87.773 491.429s-14.696-1.989-18.181-2.108c-3.073-.105 4.332-10.974 4.835-17.651l13.346 19.759zM62.809 436.504s-12.783-7.52-15.951-8.976c-2.793-1.287 8.239-8.444 11.287-14.409l4.664 23.385zM53.915 299.715s-10.296-10.674-12.957-12.926c-2.344-1.99 10.203-5.925 14.739-10.853l-1.782 23.779zM58.256 237.495s-10.296-10.673-12.957-12.927c-2.345-1.989 10.203-5.924 14.739-10.852l-1.782 23.779z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('1.285'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M54.292 356.287s-14.602-12.718-18.319-15.349c-3.276-2.324 12.603-8.861 17.946-15.786l.373 31.135zM70.653 168.929s-9.859-16.666-12.561-20.333c-2.378-3.234 14.751-4.445 22.001-9.338l-9.44 29.671z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('.984'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M274.085 513.741s-2.611 14.597-2.88 18.075c-.237 3.063-10.78-4.795-17.43-5.582l20.31-12.493zM327.517 390.894s10.724 10.242 13.474 12.388c2.423 1.892-9.953 6.335-14.285 11.442l.811-23.83z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('11.221'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('159.698'),
					$elm$svg$Svg$Attributes$cy('119.499'),
					$elm$svg$Svg$Attributes$r('13.005')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('11.221'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('259.539'),
					$elm$svg$Svg$Attributes$cy('126.733'),
					$elm$svg$Svg$Attributes$r('13.005')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('11.221'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('98.926'),
					$elm$svg$Svg$Attributes$cy('269.983'),
					$elm$svg$Svg$Attributes$r('13.005')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('11.221'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('197.319'),
					$elm$svg$Svg$Attributes$cy('450.852'),
					$elm$svg$Svg$Attributes$r('13.005')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('8.923'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('271.345'),
					$elm$svg$Svg$Attributes$cy('367.16'),
					$elm$svg$Svg$Attributes$r('10.341')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('8.923'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('110.732'),
					$elm$svg$Svg$Attributes$cy('390.311'),
					$elm$svg$Svg$Attributes$r('10.342')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('8.923'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('120.861'),
					$elm$svg$Svg$Attributes$cy('481.47'),
					$elm$svg$Svg$Attributes$r('10.342')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('8.923'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('274.239'),
					$elm$svg$Svg$Attributes$cy('245.616'),
					$elm$svg$Svg$Attributes$r('10.342')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('8.923'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('197.706'),
					$elm$svg$Svg$Attributes$cy('367.057'),
					$elm$svg$Svg$Attributes$r('10.342')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$d('M47.124 64.672C32.9 50.45 16.638 69.299 29.567 82.229c11.637 11.636 32.969-2.143 42.284 7.172-9.314-9.315 4.465-30.647-7.171-42.285C51.75 34.187 32.9 50.45 47.124 64.672z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('2.033'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M337.813 504.1c-2.013 6.285-8.746 9.756-15.034 7.744-6.291-2.012-9.754-8.745-7.742-15.035 2.014-6.286 8.747-9.755 15.032-7.744 6.291 2.013 9.753 8.748 7.744 15.035z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC0'),
					$elm$svg$Svg$Attributes$d('M311.656 526.083c-1.449 4.519-6.293 7.019-10.817 5.568-4.523-1.449-7.019-6.293-5.569-10.814 1.447-4.523 6.287-7.021 10.813-5.573 4.523 1.448 7.021 6.295 5.573 10.819zM320.173 84.522c2.387-1.306 5.408-4.327 6.714-6.714l3.999-7.311c1.306-2.387 3.442-2.387 4.748 0l3.997 7.31c1.306 2.387 4.327 5.409 6.714 6.714l7.31 3.998c2.387 1.306 2.387 3.442-.001 4.747l-7.308 3.996c-2.388 1.305-5.409 4.326-6.715 6.713l-3.997 7.31c-1.306 2.387-3.442 2.387-4.748 0l-3.999-7.311c-1.306-2.387-4.327-5.408-6.715-6.713l-7.308-3.996c-2.388-1.305-2.388-3.441-.001-4.747l7.31-3.996z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$d('M371.385 68.109c-2.07 1.132-4.69 3.752-5.822 5.822-1.133 2.07-2.986 2.07-4.119 0s-3.753-4.69-5.823-5.822c-2.07-1.133-2.07-2.986 0-4.118s4.69-3.752 5.823-5.822c1.133-2.07 2.986-2.07 4.119 0 1.132 2.07 3.752 4.69 5.822 5.822 2.069 1.133 2.069 2.986 0 4.118z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M73.186 489.499c3.368-1.842 7.63-6.104 9.472-9.473l5.64-10.313c1.842-3.368 4.855-3.368 6.697 0l5.641 10.314c1.842 3.367 6.104 7.63 9.472 9.472l10.31 5.639c3.368 1.842 3.368 4.855 0 6.698l-10.311 5.639c-3.368 1.843-7.63 6.105-9.472 9.473l-5.64 10.313c-1.842 3.367-4.856 3.367-6.698 0l-5.64-10.313c-1.842-3.367-6.104-7.63-9.472-9.472l-10.312-5.641c-3.368-1.842-3.368-4.855 0-6.697l10.313-5.639zM119.551 520.393c1.529-.836 3.465-2.771 4.301-4.299l2.561-4.682c.836-1.528 2.205-1.528 3.041.001l2.56 4.68c.836 1.529 2.771 3.464 4.301 4.3l4.683 2.559c1.529.836 1.529 2.204 0 3.04l-4.684 2.563c-1.529.836-3.464 2.771-4.3 4.301l-2.56 4.681c-.836 1.529-2.204 1.529-3.041.001l-2.562-4.683c-.836-1.528-2.771-3.464-4.3-4.301l-4.681-2.561c-1.529-.837-1.529-2.205 0-3.041l4.681-2.559z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC0'),
					$elm$svg$Svg$Attributes$d('M347.711 21.661a9.912 9.912 0 011.054-.059c.33 0 .655.018.977.049v-5.853h-2.03v5.863zm-10.636-.575l4.125 4.125a9.57 9.57 0 01.678-.758 9.67 9.67 0 01.755-.675l-4.126-4.125-1.432 1.433zm1.949 10.257c0-.317.018-.63.048-.939h-5.761v2.027h5.777c-.039-.357-.064-.72-.064-1.088zm17.305-6.133l4.124-4.124-1.434-1.435-4.124 4.124c.264.214.518.438.758.677.24.24.463.494.676.758zm-.676 13.019c-.24.24-.494.464-.758.677l4.124 4.124 1.434-1.434-4.124-4.124a9.733 9.733 0 01-.676.757zm2.806-7.825c.03.309.048.622.048.939 0 .368-.024.73-.064 1.088h5.905v-2.027h-5.889zM341.2 37.472l-4.125 4.125 1.432 1.434 4.126-4.125a9.683 9.683 0 01-.755-.676 10.359 10.359 0 01-.678-.758zm6.511 3.55v5.813h2.03v-5.803a9.407 9.407 0 01-2.03-.01z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$d('M98.112 562.827c.229-.228.471-.441.722-.645l-3.938-3.938-1.37 1.368 3.938 3.939c.205-.251.419-.494.648-.724zm5.571-2.663a9.287 9.287 0 011.937-.01v-5.592h-1.938v5.602zm8.229 3.386l3.938-3.938-1.369-1.368-3.937 3.938c.251.203.494.417.722.646s.442.471.646.722zm-16.525 5.857c0-.303.017-.601.045-.896H89.93v1.938h5.519a9.434 9.434 0 01-.062-1.042zm15.878 6.574a9.442 9.442 0 01-.723.648l3.938 3.938 1.369-1.369-3.938-3.938a8.673 8.673 0 01-.646.721zm2.68-7.469c.028.295.045.593.045.896 0 .353-.024.699-.062 1.042h5.64v-1.938h-5.623zm-16.479 6.748l-3.939 3.939 1.37 1.369 3.939-3.939c-.251-.204-.494-.419-.723-.647s-.444-.471-.647-.722zm6.217 3.389v5.553h1.938v-5.543a9.044 9.044 0 01-1.938-.01zM255.426 200.435a20.58 20.58 0 01-1.621 8.028 20.673 20.673 0 01-10.974 10.974 20.588 20.588 0 01-8.026 1.62 20.58 20.58 0 01-8.029-1.62 20.727 20.727 0 01-6.555-4.418 20.657 20.657 0 01-4.419-6.556l19.789-8.028-19.789-8.025a20.679 20.679 0 0110.974-10.974 20.588 20.588 0 018.029-1.62c2.844 0 5.557.577 8.026 1.62a20.694 20.694 0 0110.974 10.974 20.572 20.572 0 011.621 8.025zM158.633 200.435c0 2.848-.576 5.563-1.62 8.028a20.657 20.657 0 01-4.419 6.556 20.56 20.56 0 01-14.581 6.038 20.58 20.58 0 01-8.029-1.62 20.685 20.685 0 01-10.973-10.974l19.793-8.028-19.793-8.025a20.649 20.649 0 014.42-6.556 20.652 20.652 0 016.553-4.418 20.584 20.584 0 018.029-1.62 20.553 20.553 0 0114.581 6.038 20.679 20.679 0 014.419 6.556 20.535 20.535 0 011.62 8.025zM236.822 249.495c-8.039-11.43-27.267-13.131-38.013-13.131-3.437 0-5.827.168-6.437.214-.61-.046-2.996-.214-6.435-.214-10.745 0-29.969 1.702-38.007 13.131-3.341 4.759-4.438 10.648-3.26 17.509 5.72 33.368 45.056 44.754 46.726 45.227a1.791 1.791 0 00.9 0c1.714-.473 42.059-11.85 47.787-45.227 1.171-6.861.08-12.75-3.261-17.509zm-.559 16.616c-4.934 28.718-40.001 40.231-44.404 41.563-55.274-53.636.365-66.553.365-66.553.103.01.203.01.3 0 .021-.002 2.526-.22 6.286-.22 8.1 0 27.715 1.117 35.001 11.484 2.594 3.698 3.403 8.191 2.452 13.726z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Wsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('v'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('200'),
					$elm$svg$Svg$Attributes$y1('226.134'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('447.683')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fc6c85')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#47ff9b')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC6C85'),
					$elm$svg$Svg$Attributes$stroke('url(#v)'),
					$elm$svg$Svg$Attributes$strokeWidth('17.335'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M52.558 235.53c-69.837 0-26.619 91.314-12.437 113.652 22.959 36.163 91.84 89.832 154.024 89.832s154.979-45.776 184.638-130.921c29.657-85.145-38.1-72.648-66.801-72.648s-259.424.085-259.424.085z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('w'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('74.5'),
					$elm$svg$Svg$Attributes$y1('273.5'),
					$elm$svg$Svg$Attributes$x2('74.5'),
					$elm$svg$Svg$Attributes$y2('292.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#w)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M74.5 277v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('x'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('301.5'),
					$elm$svg$Svg$Attributes$y1('301.5'),
					$elm$svg$Svg$Attributes$x2('301.5'),
					$elm$svg$Svg$Attributes$y2('320.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#x)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M301.5 305v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('y'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('147.5'),
					$elm$svg$Svg$Attributes$y1('345.5'),
					$elm$svg$Svg$Attributes$x2('147.5'),
					$elm$svg$Svg$Attributes$y2('363.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#y)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M147.5 349v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('z'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('254.5'),
					$elm$svg$Svg$Attributes$y1('273.5'),
					$elm$svg$Svg$Attributes$x2('254.5'),
					$elm$svg$Svg$Attributes$y2('292.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#z)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M254.5 277v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('A'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('264.5'),
					$elm$svg$Svg$Attributes$y1('338.5'),
					$elm$svg$Svg$Attributes$x2('264.5'),
					$elm$svg$Svg$Attributes$y2('357.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#A)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M264.5 342v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('B'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('212.5'),
					$elm$svg$Svg$Attributes$y1('385.5'),
					$elm$svg$Svg$Attributes$x2('212.5'),
					$elm$svg$Svg$Attributes$y2('404.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#B)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M212.5 389v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('C'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('96.5'),
					$elm$svg$Svg$Attributes$y1('333.5'),
					$elm$svg$Svg$Attributes$x2('96.5'),
					$elm$svg$Svg$Attributes$y2('352.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#C)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M96.5 337v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('D'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('122.5'),
					$elm$svg$Svg$Attributes$y1('285.5'),
					$elm$svg$Svg$Attributes$x2('122.5'),
					$elm$svg$Svg$Attributes$y2('304.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#D)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M122.5 289v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('E'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('331.5'),
					$elm$svg$Svg$Attributes$y1('262.5'),
					$elm$svg$Svg$Attributes$x2('331.5'),
					$elm$svg$Svg$Attributes$y2('280.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#ff808c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#E)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M331.5 266v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4BF991'),
					$elm$svg$Svg$Attributes$d('M47.124 187.581c-14.224-14.223-30.486 4.627-17.557 17.557 11.637 11.636 32.969-2.144 42.284 7.172-9.314-9.315 4.465-30.647-7.171-42.285-12.93-12.93-31.78 3.333-17.556 17.556z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#4BF991'),
					$elm$svg$Svg$Attributes$strokeWidth('1.712'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M341.828 419.81c-2.76 4.933-8.999 6.698-13.933 3.938-4.936-2.758-6.695-8.996-3.938-13.932 2.76-4.932 9-6.695 13.932-3.938 4.937 2.761 6.695 9 3.939 13.932z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DD3163'),
					$elm$svg$Svg$Attributes$d('M316.141 433.803a7.364 7.364 0 01-12.856-7.19 7.364 7.364 0 1112.856 7.19zM332.854 191.621c1.912-1.046 4.332-3.466 5.378-5.377l3.204-5.855c1.046-1.912 2.757-1.912 3.803 0l3.202 5.854c1.046 1.912 3.466 4.332 5.378 5.378l5.854 3.202c1.912 1.046 1.912 2.757 0 3.802l-5.854 3.2c-1.912 1.045-4.332 3.465-5.378 5.377l-3.202 5.855c-1.046 1.912-2.757 1.912-3.803 0l-3.204-5.855c-1.046-1.912-3.466-4.332-5.378-5.377l-5.854-3.2c-1.912-1.045-1.912-2.756 0-3.802l5.854-3.202z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4BF991'),
					$elm$svg$Svg$Attributes$d('M373.873 178.474c-1.657.907-3.756 3.005-4.663 4.664s-2.392 1.658-3.299 0-3.006-3.757-4.664-4.664-1.658-2.391 0-3.298 3.757-3.006 4.664-4.664 2.392-1.658 3.299 0 3.006 3.756 4.663 4.664c1.658.907 1.658 2.391 0 3.298z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M53.414 388.46c2.595-1.419 5.879-4.703 7.298-7.298l4.345-7.947c1.419-2.595 3.741-2.595 5.16 0l4.346 7.947c1.419 2.595 4.703 5.879 7.298 7.298l7.944 4.344c2.595 1.419 2.595 3.741 0 5.161l-7.944 4.345c-2.595 1.42-5.879 4.704-7.298 7.299l-4.346 7.945c-1.419 2.595-3.741 2.595-5.16 0l-4.345-7.945c-1.419-2.595-4.703-5.879-7.298-7.298l-7.946-4.347c-2.595-1.419-2.595-3.741 0-5.16l7.946-4.344zM89.136 412.263c1.178-.644 2.669-2.135 3.314-3.313l1.973-3.606c.645-1.178 1.699-1.178 2.343 0l1.972 3.606c.644 1.178 2.135 2.668 3.313 3.313l3.607 1.971c1.178.645 1.178 1.698 0 2.343l-3.608 1.974c-1.178.645-2.668 2.136-3.313 3.313l-1.972 3.607c-.645 1.178-1.699 1.178-2.343 0l-1.973-3.607c-.645-1.178-2.136-2.669-3.313-3.313l-3.606-1.974c-1.178-.645-1.178-1.699 0-2.343l3.606-1.971z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DD3163'),
					$elm$svg$Svg$Attributes$d('M347.954 149.025c0-.254.015-.504.038-.752h-4.614v1.624h4.628a7.837 7.837 0 01-.052-.872zm-1.561-8.215l3.304 3.304c.172-.211.352-.416.544-.608a8.15 8.15 0 01.604-.541l-3.305-3.304-1.147 1.149zm8.519.46a7.84 7.84 0 011.626-.007v-4.688h-1.626v4.695zm6.903 2.843l3.303-3.303-1.148-1.148-3.303 3.303a7.254 7.254 0 011.148 1.148zm1.706 4.16c.023.248.038.498.038.752 0 .295-.02.585-.052.872h4.729v-1.624h-4.715zm-2.248 6.268a7.764 7.764 0 01-.606.542l3.303 3.303 1.148-1.148-3.304-3.303c-.17.211-.349.414-.541.606zm-11.576-.607l-3.305 3.304 1.147 1.148 3.305-3.305a7.62 7.62 0 01-1.147-1.147zm5.215 2.845v4.656h1.626v-4.648c-.257.026-.519.04-.782.04a8.106 8.106 0 01-.844-.048z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4BF991'),
					$elm$svg$Svg$Attributes$d('M72.618 444.957c.176-.176.363-.34.557-.497l-3.034-3.034-1.056 1.055 3.035 3.035c.157-.195.322-.382.498-.559zm-2.099 5.069c0-.232.013-.462.035-.689h-4.239v1.493h4.252a7.113 7.113 0 01-.048-.804zm12.731-4.511l3.034-3.034-1.055-1.055-3.034 3.033c.194.157.381.322.557.498.176.177.341.363.498.558zm-6.339-2.61a7.33 7.33 0 01.774-.043c.243 0 .482.013.718.036v-4.309H76.91v4.316zm0 14.243v4.277h1.493v-4.271a7.407 7.407 0 01-.718.036 6.825 6.825 0 01-.775-.042zm-4.791-2.612l-3.035 3.034 1.056 1.056 3.035-3.034a6.933 6.933 0 01-1.056-1.056zm12.697-5.199c.021.228.035.457.035.689 0 .272-.019.539-.048.804h4.346v-1.493h-4.333zm-2.065 5.756a6.933 6.933 0 01-.557.499l3.034 3.034 1.055-1.056-3.034-3.034a7.118 7.118 0 01-.498.557z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DD3163'),
					$elm$svg$Svg$Attributes$d('M264.499 257.041a17.467 17.467 0 01-5.127 12.382 17.61 17.61 0 01-5.564 3.749 17.474 17.474 0 01-6.815 1.376 17.459 17.459 0 01-12.379-5.125 17.595 17.595 0 01-3.753-5.566l16.801-6.816-16.801-6.812a17.573 17.573 0 019.317-9.317 17.445 17.445 0 016.815-1.376 17.452 17.452 0 0112.379 5.127 17.458 17.458 0 015.127 12.378zM169.594 257.041a17.43 17.43 0 01-1.375 6.816 17.548 17.548 0 01-9.317 9.315 17.45 17.45 0 01-6.814 1.376 17.464 17.464 0 01-12.379-5.125 17.526 17.526 0 01-3.752-5.566l16.804-6.816-16.804-6.812a17.52 17.52 0 013.752-5.566 17.446 17.446 0 0112.379-5.127c2.416 0 4.72.489 6.814 1.376a17.558 17.558 0 019.317 9.317 17.422 17.422 0 011.375 6.812zM248.763 310.198c-8.331-11.849-28.261-13.613-39.401-13.613-3.557 0-6.036.176-6.667.226-.633-.05-3.106-.226-6.67-.226-11.141 0-31.063 1.765-39.395 13.613-3.463 4.931-4.602 11.034-3.38 18.148 5.929 34.585 46.698 46.386 48.429 46.875.156.038.315.063.479.063.145 0 .306-.024.454-.063 1.778-.489 43.598-12.28 49.532-46.875 1.213-7.114.085-13.217-3.381-18.148zm-.577 17.221c-5.115 29.765-41.462 41.702-46.023 43.078-57.293-55.594.375-68.979.375-68.979.106.009.211.009.312 0 .023 0 2.619-.226 6.513-.226 8.399 0 28.729 1.154 36.278 11.9 2.69 3.834 3.529 8.492 2.545 14.227z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Xsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('F'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('200'),
					$elm$svg$Svg$Attributes$y1('225.688'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('448.141')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#47ff9b')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFFA50'),
					$elm$svg$Svg$Attributes$stroke('url(#F)'),
					$elm$svg$Svg$Attributes$strokeWidth('17.406'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M51.955 235.121c-70.123 0-26.728 91.688-12.487 114.117 23.053 36.311 92.215 90.199 154.653 90.199 62.439 0 155.614-45.963 185.394-131.456 29.777-85.492-38.257-72.945-67.073-72.945-28.82 0-260.487.085-260.487.085z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('G'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('74.5'),
					$elm$svg$Svg$Attributes$y1('273.5'),
					$elm$svg$Svg$Attributes$x2('74.5'),
					$elm$svg$Svg$Attributes$y2('292.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#G)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M74.5 277v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('H'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('302.5'),
					$elm$svg$Svg$Attributes$y1('301.5'),
					$elm$svg$Svg$Attributes$x2('302.5'),
					$elm$svg$Svg$Attributes$y2('319.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#H)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M302.5 305v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('I'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('147.5'),
					$elm$svg$Svg$Attributes$y1('345.5'),
					$elm$svg$Svg$Attributes$x2('147.5'),
					$elm$svg$Svg$Attributes$y2('363.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#I)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M147.5 349v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('J'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('255.5'),
					$elm$svg$Svg$Attributes$y1('273.5'),
					$elm$svg$Svg$Attributes$x2('255.5'),
					$elm$svg$Svg$Attributes$y2('292.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#J)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M255.5 277v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('K'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('265.5'),
					$elm$svg$Svg$Attributes$y1('338.5'),
					$elm$svg$Svg$Attributes$x2('265.5'),
					$elm$svg$Svg$Attributes$y2('357.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#K)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M265.5 342v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('L'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('212.5'),
					$elm$svg$Svg$Attributes$y1('385.5'),
					$elm$svg$Svg$Attributes$x2('212.5'),
					$elm$svg$Svg$Attributes$y2('404.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#L)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M212.5 389v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('M'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('96.5'),
					$elm$svg$Svg$Attributes$y1('333.5'),
					$elm$svg$Svg$Attributes$x2('96.5'),
					$elm$svg$Svg$Attributes$y2('352.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#M)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M96.5 337v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('N'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('123.5'),
					$elm$svg$Svg$Attributes$y1('285.5'),
					$elm$svg$Svg$Attributes$x2('123.5'),
					$elm$svg$Svg$Attributes$y2('303.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#N)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M123.5 289v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('O'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('332.5'),
					$elm$svg$Svg$Attributes$y1('261.5'),
					$elm$svg$Svg$Attributes$x2('332.5'),
					$elm$svg$Svg$Attributes$y2('280.5')
				]),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.177'),
							$elm$svg$Svg$Attributes$stopColor('#fffa50')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('url(#O)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M332.5 265v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4BF991'),
					$elm$svg$Svg$Attributes$d('M47.124 187.581c-14.224-14.223-30.486 4.627-17.557 17.557 11.637 11.636 32.969-2.144 42.284 7.172-9.314-9.315 4.465-30.647-7.171-42.285-12.93-12.93-31.78 3.333-17.556 17.556z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#4BF991'),
					$elm$svg$Svg$Attributes$strokeWidth('1.712'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M341.828 419.81c-2.76 4.933-8.999 6.698-13.933 3.938-4.936-2.758-6.695-8.996-3.938-13.932 2.76-4.932 9-6.695 13.932-3.938 4.937 2.761 6.695 9 3.939 13.932z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F9EC08'),
					$elm$svg$Svg$Attributes$d('M316.141 433.803a7.364 7.364 0 01-12.856-7.19 7.364 7.364 0 1112.856 7.19z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#F9EC08'),
							$elm$svg$Svg$Attributes$d('M332.854 191.621c1.912-1.046 4.332-3.466 5.378-5.377l3.204-5.855c1.046-1.912 2.757-1.912 3.803 0l3.202 5.854c1.046 1.912 3.466 4.332 5.378 5.378l5.854 3.202c1.912 1.046 1.912 2.757 0 3.802l-5.854 3.2c-1.912 1.045-4.332 3.465-5.378 5.377l-3.202 5.855c-1.046 1.912-2.757 1.912-3.803 0l-3.204-5.856c-1.046-1.912-3.466-4.332-5.378-5.377l-5.854-3.2c-1.912-1.045-1.912-2.756 0-3.802l5.854-3.201z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#4BF991'),
							$elm$svg$Svg$Attributes$d('M373.873 178.474c-1.657.907-3.756 3.005-4.663 4.664s-2.392 1.658-3.299 0-3.006-3.757-4.664-4.664-1.658-2.391 0-3.298 3.757-3.006 4.664-4.664 2.392-1.658 3.299 0 3.006 3.756 4.663 4.664c1.658.907 1.658 2.391 0 3.298z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#FFF'),
							$elm$svg$Svg$Attributes$d('M53.414 388.46c2.595-1.419 5.879-4.703 7.298-7.298l4.345-7.947c1.419-2.595 3.741-2.595 5.16 0l4.346 7.947c1.419 2.595 4.703 5.879 7.298 7.298l7.944 4.344c2.595 1.419 2.595 3.741 0 5.161l-7.944 4.345c-2.595 1.42-5.879 4.704-7.298 7.299l-4.346 7.945c-1.419 2.595-3.741 2.595-5.16 0l-4.345-7.945c-1.419-2.595-4.703-5.879-7.298-7.298l-7.946-4.347c-2.595-1.419-2.595-3.741 0-5.16l7.946-4.344z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#FFF'),
							$elm$svg$Svg$Attributes$d('M89.136 412.263c1.178-.644 2.669-2.135 3.314-3.313l1.973-3.606c.645-1.178 1.699-1.178 2.343 0l1.972 3.606c.644 1.178 2.135 2.668 3.313 3.313l3.607 1.971c1.178.645 1.178 1.698 0 2.343l-3.608 1.974c-1.178.645-2.668 2.136-3.313 3.313l-1.972 3.607c-.645 1.178-1.699 1.178-2.343 0l-1.973-3.607c-.645-1.178-2.136-2.669-3.313-3.313l-3.606-1.974c-1.178-.645-1.178-1.699 0-2.343l3.606-1.971z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#F9EC08'),
							$elm$svg$Svg$Attributes$d('M354.912 141.27a7.84 7.84 0 011.626-.007v-4.688h-1.626v4.695zm-8.519-.46l3.304 3.304c.172-.211.352-.416.544-.608a8.15 8.15 0 01.604-.541l-3.305-3.304-1.147 1.149zm15.422 3.303l3.303-3.303-1.148-1.148-3.303 3.303a7.254 7.254 0 011.148 1.148zm-13.861 4.912c0-.254.015-.504.038-.752h-4.614v1.624h4.628a7.837 7.837 0 01-.052-.872zm15.567-.752c.023.248.038.498.038.752 0 .295-.02.585-.052.872h4.729v-1.624h-4.715zm-2.248 6.268a7.764 7.764 0 01-.606.542l3.303 3.303 1.148-1.148-3.304-3.303c-.17.211-.349.414-.541.606zm-6.361 2.238v4.656h1.626v-4.648c-.257.026-.519.04-.782.04a8.106 8.106 0 01-.844-.048zm-5.215-2.845l-3.305 3.304 1.147 1.148 3.305-3.305a7.62 7.62 0 01-1.147-1.147z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('#4BF991'),
							$elm$svg$Svg$Attributes$d('M84.817 449.337c.021.228.035.457.035.689 0 .272-.019.539-.048.804h4.346v-1.493h-4.333zm-7.906-6.432a7.33 7.33 0 01.774-.043c.243 0 .482.013.718.036v-4.309H76.91v4.316zm-6.392 7.121c0-.232.013-.462.035-.689h-4.239v1.493h4.252a7.113 7.113 0 01-.048-.804zm12.731-4.511l3.034-3.034-1.055-1.055-3.034 3.033c.194.157.381.322.557.498.176.177.341.363.498.558zm-10.632-.558c.176-.176.363-.34.557-.497l-3.034-3.034-1.056 1.055 3.035 3.035c.157-.195.322-.382.498-.559zm10.134 10.136a6.933 6.933 0 01-.557.499l3.034 3.034 1.055-1.056-3.034-3.034a7.118 7.118 0 01-.498.557zm-10.632-.557l-3.035 3.034 1.056 1.056 3.035-3.034a6.933 6.933 0 01-1.056-1.056zm4.791 2.612v4.277h1.493v-4.271a7.407 7.407 0 01-.718.036 6.825 6.825 0 01-.775-.042z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F9EC08'),
					$elm$svg$Svg$Attributes$d('M264.499 257.041a17.467 17.467 0 01-5.127 12.382 17.61 17.61 0 01-5.564 3.749 17.474 17.474 0 01-6.815 1.376 17.459 17.459 0 01-12.379-5.125 17.595 17.595 0 01-3.753-5.566l16.801-6.816-16.801-6.812a17.573 17.573 0 019.317-9.317 17.445 17.445 0 016.815-1.376 17.452 17.452 0 0112.379 5.127 17.458 17.458 0 015.127 12.378zM169.594 257.041a17.43 17.43 0 01-1.375 6.816 17.548 17.548 0 01-9.317 9.315 17.45 17.45 0 01-6.814 1.376 17.464 17.464 0 01-12.379-5.125 17.526 17.526 0 01-3.752-5.566l16.804-6.816-16.804-6.812a17.52 17.52 0 013.752-5.566 17.446 17.446 0 0112.379-5.127c2.416 0 4.72.489 6.814 1.376a17.558 17.558 0 019.317 9.317 17.422 17.422 0 011.375 6.812zM248.763 310.198c-8.331-11.849-28.261-13.613-39.401-13.613-3.557 0-6.036.176-6.667.226-.633-.05-3.106-.226-6.67-.226-11.141 0-31.063 1.765-39.395 13.613-3.463 4.931-4.602 11.034-3.38 18.148 5.929 34.585 46.698 46.386 48.429 46.875.156.038.315.063.479.063.145 0 .306-.024.454-.063 1.778-.489 43.598-12.28 49.532-46.875 1.213-7.114.085-13.217-3.381-18.148zm-.577 17.221c-5.115 29.765-41.462 41.702-46.023 43.078-57.293-55.594.375-68.979.375-68.979.106.009.211.009.312 0 .023 0 2.619-.226 6.513-.226 8.399 0 28.729 1.154 36.278 11.9 2.69 3.834 3.529 8.492 2.545 14.227z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Ysvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775D52'),
					$elm$svg$Svg$Attributes$stroke('#4C311E'),
					$elm$svg$Svg$Attributes$strokeWidth('10.307'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M211.043 50.737c7.848.445 11.702 3.9 31.203 20.477s45.828 43.879 52.653 83.858c6.826 39.979 28.28 44.855 34.13 69.232 5.85 24.377 14.625 58.507 4.875 109.212-9.75 50.704-13.65 90.685-29.252 114.086-15.602 23.402-38.027 85.809-61.43 87.759-23.403 1.95-48.756 13.651-49.732-7.8-.976-21.452-58.507-51.682-68.257-78.983-9.751-27.303-37.054-83.858-56.556-104.337-19.502-20.477-9.751-116.036 0-139.438 9.751-23.402 6.826-37.053 23.402-56.556 16.577-19.502 14.627-37.053 15.602-42.903.976-5.852 17.552-59.483 103.362-54.607z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#4C311E'),
					$elm$svg$Svg$Attributes$strokeWidth('2.945'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M151.561 125.82c-12.851-8.562-29.753 7.504-44.854 2.924M208.117 139.471c16.346 1.643 48.877 18.462 60.623-.809 7.545-2.896 10.467 1.614 17.386 2.759M115.482 175.549c9.001 0 15.842-1.687 24.378-2.925 2.458-.356 8.454-.98 10.726-.019 4.216 1.784 3.949 5.705 7.537 8.057 9.457 6.201 29.544-1.7 34.392-7.063M283.201 250.631c5.833-.165 12.164 1.835 17.768.972 5.924-.912 6.96-5.019 11.701-6.679 8.084-2.831 19.026 3.628 23.186 9.608M61.813 328.64c-1.605-7.182 7.185-20.687 12.704-24.401 7.371-4.96 21.281-4.322 29.958-3.927 10.29.469 19.454 3.641 29.518 1.807 5.727-1.045 16.458-2.886 16.555-10.533M106.19 403.781c14.56-15.271 21.345-26.819 43.713-23.572-.119-1.351.552-1.178 1.142-1.781M246.146 355.942c3.244.099 6.507-.16 9.747.048 1.371.087 2.911-2.344 3.835-2.11 2.671.677 5.714 5.702 7.509 5.866 5.27.483 9.863-6.058 18.906-5.754 9.497.318 12.679 1.566 21.704-1.758 7.15-2.634 11.738-5.574 18.09-1.004 1.291 1.758 3.085 3.386 4.067 5.687M198.366 408.598c7.349-1.538 8.784-9.934 16.361-10.726 7.451-.782 17.595 3.551 25.619 3.9 8.77.382 12.855-3.154 21.185-2.73 7.69.391 17.301 4.794 24.596 3.705M153.512 465.153c8.289.07 14.895-4.615 21.502-8.526 3.445-2.042 10.312-7.563 13.579-8.073 12.676-1.978 29.627 13.993 40.977 1.973')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4C311E'),
					$elm$svg$Svg$Attributes$d('M118.947 83.227s88.196-17.864 123.299-12.013c0-.001-63.279-51.058-123.299 12.013zM193.491 527.561s2.179 14.124 14.626 12.73c12.447-1.394 55.657 1.841 58.058-23.484 0 0-31.73-3.929-47.331 0-15.601 3.927-18.528 12.702-25.353 10.754zM49.623 99.463C33.726 83.568 15.551 104.635 30 119.085c13.006 13.005 36.848-2.395 47.259 8.016-10.411-10.411 4.99-34.253-8.015-47.26-14.451-14.45-35.518 3.727-19.621 19.622z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#4C311E'),
					$elm$svg$Svg$Attributes$strokeWidth('2.945'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M359.065 442.171c-.508 8.355-7.702 14.721-16.059 14.216-8.363-.511-14.721-7.706-14.211-16.067.512-8.352 7.704-14.718 16.057-14.211 8.362.513 14.722 7.704 14.213 16.062z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775D52'),
					$elm$svg$Svg$Attributes$d('M333.782 477.358c-.37 6.007-5.541 10.591-11.558 10.222-6.012-.371-10.591-5.544-10.223-11.555.367-6.012 5.536-10.592 11.55-10.224 6.017.367 10.599 5.544 10.231 11.557zM322.383 145.389c2.296-1.256 5.203-4.162 6.459-6.458l3.848-7.032c1.256-2.296 3.312-2.296 4.567 0l3.846 7.031c1.256 2.296 4.162 5.203 6.458 6.459l7.032 3.845c2.296 1.256 2.296 3.311-.001 4.566l-7.03 3.844c-2.297 1.255-5.203 4.162-6.459 6.458l-3.846 7.032c-1.256 2.296-3.312 2.296-4.567 0l-3.848-7.033c-1.256-2.296-4.163-5.202-6.46-6.458l-7.029-3.843c-2.297-1.256-2.297-3.311-.001-4.567l7.031-3.844z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4C311E'),
					$elm$svg$Svg$Attributes$d('M371.646 129.6c-1.991 1.089-4.511 3.61-5.6 5.601-1.089 1.991-2.871 1.991-3.961 0-1.09-1.991-3.611-4.512-5.603-5.601s-1.991-2.872 0-3.961c1.991-1.09 4.513-3.61 5.603-5.602 1.09-1.991 2.872-1.991 3.961 0s3.608 4.512 5.6 5.602c1.993 1.089 1.993 2.872 0 3.961z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M106.779 452.396c3.456-1.891 7.83-6.265 9.72-9.721l5.789-10.584c1.89-3.456 4.982-3.456 6.872 0l5.789 10.584c1.89 3.456 6.264 7.83 9.72 9.721l10.581 5.785c3.456 1.891 3.456 4.983 0 6.873l-10.581 5.788c-3.456 1.89-7.83 6.265-9.72 9.72l-5.788 10.583c-1.89 3.456-4.983 3.456-6.873 0l-5.788-10.583c-1.89-3.455-6.264-7.83-9.72-9.72l-10.582-5.788c-3.456-1.89-3.456-4.982 0-6.873l10.581-5.785zM154.359 484.099c1.569-.857 3.555-2.843 4.413-4.412l2.628-4.805c.858-1.569 2.262-1.568 3.12 0l2.627 4.805c.858 1.568 2.844 3.555 4.413 4.412l4.805 2.627c1.569.857 1.569 2.262 0 3.119l-4.806 2.629c-1.569.857-3.555 2.843-4.413 4.412l-2.627 4.804c-.858 1.568-2.262 1.569-3.121 0l-2.627-4.804c-.858-1.569-2.844-3.555-4.413-4.413l-4.803-2.627c-1.569-.858-1.569-2.263 0-3.12l4.804-2.627z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#775D52'),
					$elm$svg$Svg$Attributes$d('M340.519 94.231c0-.305.018-.606.046-.903h-5.541v1.951h5.558a9.06 9.06 0 01-.063-1.048zm-1.876-9.866l3.969 3.968c.206-.254.422-.499.652-.73.23-.229.474-.445.727-.65l-3.969-3.969-1.379 1.381zm18.522 3.966l3.967-3.966-1.379-1.38-3.967 3.967c.254.206.499.421.729.652.23.229.445.474.65.727zm-8.289-3.414a9.402 9.402 0 011.95-.01v-5.63h-1.95v5.64zm10.337 8.411c.028.297.046.598.046.903 0 .354-.023.703-.063 1.047h5.682v-1.951h-5.665zm-2.697 7.527c-.23.231-.476.447-.729.652l3.967 3.967 1.379-1.379-3.967-3.967a9.767 9.767 0 01-.65.727zm-7.64 2.687v5.593h1.95v-5.583a9.38 9.38 0 01-1.95-.01zm-6.265-3.416l-3.969 3.969 1.379 1.379 3.969-3.969a9.526 9.526 0 01-.727-.65 9.604 9.604 0 01-.652-.729z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4C311E'),
					$elm$svg$Svg$Attributes$d('M138.074 524.907a9.762 9.762 0 011.032-.058c.323 0 .643.017.958.048v-5.735h-1.989v5.745zm-5.716 2.736c.234-.234.482-.453.74-.662l-4.041-4.04-1.406 1.403 4.042 4.042c.21-.258.431-.508.665-.743zm14.161.742l4.041-4.041-1.406-1.403-4.04 4.039c.258.209.506.429.741.663.235.235.455.484.664.742zm-16.957 6.01c0-.311.018-.616.046-.919h-5.646v1.988h5.664a9.44 9.44 0 01-.064-1.069zm16.293 6.747a9.527 9.527 0 01-.742.664l4.042 4.042 1.406-1.406-4.041-4.041a9.93 9.93 0 01-.665.741zm2.75-7.666c.029.303.046.608.046.919 0 .362-.024.718-.063 1.069h5.788v-1.988h-5.771zm-10.531 10.403v5.697h1.989v-5.688a9.513 9.513 0 01-1.989-.009zm-6.38-3.48l-4.042 4.042 1.406 1.406 4.042-4.043a9.522 9.522 0 01-.741-.663 9.36 9.36 0 01-.665-.742zM289.455 216.948a30.46 30.46 0 01-2.4 11.888 30.63 30.63 0 01-6.542 9.708 30.716 30.716 0 01-9.706 6.542 30.508 30.508 0 01-11.886 2.398c-4.22 0-8.229-.855-11.888-2.398a30.752 30.752 0 01-9.709-6.542 30.63 30.63 0 01-6.542-9.708l29.305-11.888-29.305-11.884a30.66 30.66 0 016.542-9.707 30.685 30.685 0 019.709-6.542 30.474 30.474 0 0111.888-2.399c4.212 0 8.229.855 11.886 2.399a30.683 30.683 0 019.706 6.542 30.66 30.66 0 016.542 9.707 30.459 30.459 0 012.4 11.884zM155.483 223.183c0 4.217-.853 8.236-2.4 11.887a30.609 30.609 0 01-16.248 16.251 30.499 30.499 0 01-11.885 2.398c-4.215 0-8.234-.855-11.888-2.398a30.683 30.683 0 01-9.703-6.543 30.578 30.578 0 01-6.545-9.708l29.307-11.887-29.307-11.884a30.607 30.607 0 016.545-9.707 30.617 30.617 0 019.703-6.543 30.477 30.477 0 0111.888-2.398c4.213 0 8.233.854 11.885 2.398a30.615 30.615 0 0116.248 16.25 30.383 30.383 0 012.4 11.884zM225.7 288.458c-5.609-7.98-19.031-9.167-26.533-9.167a62.42 62.42 0 00-4.493.149 62.275 62.275 0 00-4.493-.149c-7.5 0-20.919 1.188-26.53 9.167-2.332 3.321-3.097 7.432-2.274 12.223 3.992 23.292 31.451 31.24 32.615 31.568.103.025.211.041.318.041.102 0 .21-.011.311-.041 1.197-.328 29.358-8.272 33.356-31.568.82-4.791.058-8.902-2.277-12.223zm-.388 11.598c-3.445 20.048-27.922 28.083-30.998 29.016-38.583-37.443.255-46.46.255-46.46.071.006.144.006.21 0 .014-.002 1.766-.153 4.388-.153 5.654 0 19.349.779 24.433 8.016 1.811 2.581 2.374 5.718 1.712 9.581z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Zsvg$drawing = A2(
	$elm$svg$Svg$svg,
	_List_fromArray(
		[
			$elm$svg$Svg$Attributes$viewBox('0 0 400 600'),
			$elm$svg$Svg$Attributes$class('drawing')
		]),
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M114.035 506.521s-18.148 21.779-7.259 31.76 33.992 27.467 46.278 17.24c12.286-10.228 19.056-22.948 19.056-22.948l-58.075-26.052z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#2CFF5C'),
					$elm$svg$Svg$Attributes$stroke('#006C05'),
					$elm$svg$Svg$Attributes$strokeWidth('9.591'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M159.406 86.386s-1.681-40.506-17.241-54.445c-4.43-3.969-1.814-9.981 8.621-11.797 10.436-1.815 23.914-12.71 35.533-10.477 4.327.832 7.309 1.487 7.156 9.818-.334 18.138 2.828 31.199 7.672 45.122l-41.741 21.779z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#2CFF5C'),
					$elm$svg$Svg$Attributes$stroke('#006C05'),
					$elm$svg$Svg$Attributes$strokeWidth('9.591'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M182.092 53.719c18.481-6.493 49.003-7.259 84.391 47.186 35.389 54.445 26.315 110.706 26.315 124.317 0 13.611-3.629 78.943 10.89 156.075 14.518 77.132-61.705 169.688-111.613 167.873-49.909-1.814-117.965-38.11-104.354-90.741 13.611-52.632 36.297-56.262 46.278-83.483 9.981-27.223 36.297-107.983 10.889-192.373-25.408-84.39 3.63-117.057 37.204-128.854z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#2CFF5C'),
					$elm$svg$Svg$Attributes$stroke('#006C05'),
					$elm$svg$Svg$Attributes$strokeWidth('4.111'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M154.075 20.65s12.86 25.437 13.752 40.509M165.037 16.54s13.466 38.133 13.752 40.508M188.542 55.007s-9.589-26.841-8.595-41.907')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M165.037 62.075s-13.721 52.124 9.546 99.31 21.143 173.969 9.626 197.335C171.26 384.994 97.703 492.059 98.61 512.929l11.796 14.49s17.753-36.542 43.669-65.349c25.8-28.678 46.409-68.52 51.61-83.488C219.55 338.679 225 213.465 193.888 157.386 170.243 114.767 172.5 61.159 173.99 57.048l-8.953 5.027z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M203.433 50.756s10.506 23.734 23.804 33.153c13.298 9.418 47.082 40.401 29.354 128.493-17.729 88.093 25.482 154 16.617 191.676-8.865 37.675-33.245 67.551-61.501 80.847-28.257 13.297-62.086 33.603-54.037 58.266l-14.704-5.29s-7.72-26.017 22.753-47.624c30.472-21.607 78.672-53.359 80.89-120.953 2.217-67.593-22.161-129.73-11.081-180.148 11.081-50.418-8.864-87.026-31.026-109.188-22.162-22.163-17.097-30.717-1.069-29.232zM100.405 78.464c-11.214-11.211-24.034 3.648-13.842 13.841 9.174 9.173 25.992-1.689 33.336 5.654-7.344-7.344 3.52-24.161-5.654-33.335-10.193-10.193-25.054 2.629-13.84 13.84z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#006C05'),
					$elm$svg$Svg$Attributes$strokeWidth('1.659'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M314.171 492.879c-1.113 5.267-6.294 8.639-11.563 7.523-5.271-1.114-8.637-6.294-7.521-11.564 1.115-5.267 6.295-8.638 11.562-7.522 5.271 1.114 8.637 6.294 7.522 11.563z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#2CFF5C'),
					$elm$svg$Svg$Attributes$d('M294.754 512.877a7.018 7.018 0 11-13.731-2.912 7.018 7.018 0 0113.731 2.912zM284.418 85.674c2.271-1.242 5.146-4.116 6.388-6.387l3.804-6.954c1.242-2.271 3.275-2.271 4.517 0l3.804 6.954c1.241 2.271 4.116 5.145 6.387 6.387l6.953 3.803c2.271 1.242 2.271 3.274 0 4.516l-6.953 3.802c-2.271 1.242-5.146 4.116-6.387 6.387l-3.804 6.954c-1.241 2.271-3.274 2.271-4.517 0l-3.804-6.954c-1.242-2.271-4.117-5.145-6.388-6.387l-6.954-3.802c-2.271-1.242-2.271-3.274 0-4.516l6.954-3.803z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M333.138 70.06c-1.969 1.078-4.462 3.57-5.539 5.539-1.077 1.969-2.841 1.969-3.919 0-1.077-1.969-3.57-4.461-5.539-5.539s-1.969-2.84 0-3.918c1.969-1.077 4.462-3.569 5.539-5.539 1.078-1.969 2.842-1.969 3.919 0s3.57 4.461 5.539 5.539c1.968 1.077 1.968 2.84 0 3.918z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M76.543 514.228c2.717-1.485 6.156-4.925 7.642-7.642l4.55-8.321c1.486-2.717 3.917-2.717 5.403 0l4.55 8.321c1.486 2.717 4.925 6.156 7.642 7.642l8.318 4.55c2.717 1.485 2.717 3.917 0 5.403l-8.319 4.551c-2.717 1.486-6.156 4.925-7.642 7.643l-4.55 8.319c-1.486 2.717-3.917 2.717-5.403 0l-4.55-8.319c-1.486-2.718-4.925-6.156-7.642-7.643l-8.321-4.551c-2.717-1.486-2.717-3.918 0-5.403l8.322-4.55zM113.949 539.153c1.234-.675 2.795-2.235 3.47-3.469l2.065-3.777c.675-1.233 1.779-1.233 2.454.001l2.064 3.775c.675 1.234 2.236 2.795 3.47 3.469l3.778 2.065c1.234.674 1.234 1.777 0 2.452l-3.779 2.066c-1.233.675-2.794 2.236-3.469 3.47l-2.065 3.776c-.674 1.233-1.778 1.234-2.453 0l-2.066-3.777c-.674-1.233-2.236-2.794-3.469-3.469l-3.776-2.066c-1.233-.675-1.233-1.778 0-2.453l3.776-2.063z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#2CFF5C'),
					$elm$svg$Svg$Attributes$d('M300.497 25.325l3.925 3.924a9.17 9.17 0 01.645-.721c.228-.227.469-.44.719-.643l-3.925-3.925-1.364 1.365zm10.119.546a9.204 9.204 0 011.932-.009v-5.568h-1.932v5.577zm8.199 3.378l3.924-3.923-1.365-1.365-3.923 3.923c.25.203.492.417.721.645.227.227.44.469.643.72zm-16.463 5.834c0-.302.017-.6.045-.894h-5.48v1.929h5.497a9.06 9.06 0 01-.062-1.035zm15.82 6.551c-.229.228-.47.441-.721.645l3.923 3.923 1.365-1.363-3.924-3.924a9.732 9.732 0 01-.643.719zm-13.75-.721l-3.925 3.925 1.363 1.363 3.925-3.924a9.533 9.533 0 01-.719-.643 9.384 9.384 0 01-.644-.721zm16.419-6.724c.028.294.045.592.045.894 0 .351-.023.695-.062 1.035h5.618v-1.929h-5.601zm-10.225 10.102v5.531h1.932V44.3c-.306.03-.616.047-.93.047-.339 0-.673-.021-1.002-.056z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M94.454 578.697c0-.244.014-.484.037-.723h-4.44v1.563h4.453a7.518 7.518 0 01-.05-.84zm2.198-5.309c.184-.184.379-.356.582-.521l-3.177-3.177-1.105 1.104 3.178 3.179c.165-.204.338-.401.522-.585zm11.133.583l3.177-3.177-1.104-1.104-3.176 3.177c.203.164.398.337.583.521.183.184.356.381.52.583zm-6.638-2.733c.267-.028.537-.045.811-.045.254 0 .505.014.752.038v-4.512h-1.563v4.519zm0 14.915v4.479h1.563v-4.473a7.254 7.254 0 01-1.563-.006zm8.279-8.178c.023.238.037.479.037.723 0 .284-.019.563-.05.84h4.55v-1.563h-4.537zM107.264 584a7.414 7.414 0 01-.584.523l3.178 3.178 1.104-1.104-3.178-3.178a7.537 7.537 0 01-.52.581zm-11.133-.582l-3.179 3.18 1.105 1.104 3.178-3.179a7.408 7.408 0 01-.583-.522 7.578 7.578 0 01-.521-.583zM225.741 120.216a9.656 9.656 0 01-2.837 6.848 9.75 9.75 0 01-3.077 2.075c-1.161.489-2.434.761-3.771.761s-2.609-.271-3.771-.761a9.705 9.705 0 01-5.153-5.153l9.294-3.77-9.294-3.77a9.72 9.72 0 015.153-5.154c1.161-.49 2.434-.761 3.771-.761s2.609.271 3.771.761a9.71 9.71 0 015.152 5.154 9.656 9.656 0 01.762 3.77zM203.285 120.216a9.655 9.655 0 01-2.836 6.848 9.721 9.721 0 01-3.078 2.075c-1.158.489-2.433.761-3.77.761s-2.611-.271-3.771-.761a9.717 9.717 0 01-5.153-5.153l9.295-3.77-9.295-3.77a9.723 9.723 0 015.153-5.154c1.16-.49 2.435-.761 3.771-.761a9.662 9.662 0 016.848 2.836 9.693 9.693 0 012.075 3.079 9.637 9.637 0 01.761 3.77zM226.502 137.929c-2.677-3.807-9.08-4.373-12.658-4.373-1.145 0-1.94.056-2.144.071a28.983 28.983 0 00-2.144-.071c-3.578 0-9.979.566-12.656 4.373-1.113 1.584-1.478 3.546-1.086 5.83 1.904 11.112 15.004 14.905 15.561 15.062a.57.57 0 00.299 0c.571-.157 14.006-3.947 15.913-15.062.392-2.284.028-4.246-1.085-5.83zm-.187 5.533c-1.643 9.563-13.32 13.398-14.787 13.841-18.407-17.862.122-22.164.122-22.164a.557.557 0 00.1 0c.008 0 .843-.073 2.094-.073 2.697 0 9.229.372 11.655 3.824.864 1.232 1.134 2.728.816 4.572z')
				]),
			_List_Nil)
		]));
var $author$project$Data$Alphabet$getDrawingSvg = function (letter) {
	switch (letter.$) {
		case 'A':
			return $author$project$Data$Asvg$drawing;
		case 'B':
			return $author$project$Data$Bsvg$drawing;
		case 'C':
			return $author$project$Data$Csvg$drawing;
		case 'D':
			return $author$project$Data$Dsvg$drawing;
		case 'E':
			return $author$project$Data$Esvg$drawing;
		case 'F':
			return $author$project$Data$Fsvg$drawing;
		case 'G':
			return $author$project$Data$Gsvg$drawing;
		case 'H':
			return $author$project$Data$Hsvg$drawing;
		case 'I':
			return $author$project$Data$Isvg$drawing;
		case 'J':
			return $author$project$Data$Jsvg$drawing;
		case 'K':
			return $author$project$Data$Ksvg$drawing;
		case 'L':
			return $author$project$Data$Lsvg$drawing;
		case 'M':
			return $author$project$Data$Msvg$drawing;
		case 'N':
			return $author$project$Data$Nsvg$drawing;
		case 'O':
			return $author$project$Data$Osvg$drawing;
		case 'P':
			return $author$project$Data$Psvg$drawing;
		case 'Q':
			return $author$project$Data$Qsvg$drawing;
		case 'R':
			return $author$project$Data$Rsvg$drawing;
		case 'S':
			return $author$project$Data$Ssvg$drawing;
		case 'T':
			return $author$project$Data$Tsvg$drawing;
		case 'U':
			return $author$project$Data$Usvg$drawing;
		case 'V':
			return $author$project$Data$Vsvg$drawing;
		case 'W':
			return $author$project$Data$Wsvg$drawing;
		case 'X':
			return $author$project$Data$Xsvg$drawing;
		case 'Y':
			return $author$project$Data$Ysvg$drawing;
		default:
			return $author$project$Data$Zsvg$drawing;
	}
};
var $elm$html$Html$header = _VirtualDom_node('header');
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$defaultOptions = {preventDefault: true, stopPropagation: false};
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Event = F4(
	function (keys, changedTouches, targetTouches, touches) {
		return {changedTouches: changedTouches, keys: keys, targetTouches: targetTouches, touches: touches};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {alt: alt, ctrl: ctrl, shift: shift};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $mpizenberg$elm_pointer_events$Internal$Decode$keys = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Internal$Decode$Keys,
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Touch = F4(
	function (identifier, clientPos, pagePos, screenPos) {
		return {clientPos: clientPos, identifier: identifier, pagePos: pagePos, screenPos: screenPos};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $mpizenberg$elm_pointer_events$Internal$Decode$clientPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $mpizenberg$elm_pointer_events$Internal$Decode$pagePos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$screenPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'screenX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'screenY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder = A5(
	$elm$json$Json$Decode$map4,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Touch,
	A2($elm$json$Json$Decode$field, 'identifier', $elm$json$Json$Decode$int),
	$mpizenberg$elm_pointer_events$Internal$Decode$clientPos,
	$mpizenberg$elm_pointer_events$Internal$Decode$pagePos,
	$mpizenberg$elm_pointer_events$Internal$Decode$screenPos);
var $mpizenberg$elm_pointer_events$Internal$Decode$all = A2(
	$elm$core$List$foldr,
	$elm$json$Json$Decode$map2($elm$core$List$cons),
	$elm$json$Json$Decode$succeed(_List_Nil));
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $mpizenberg$elm_pointer_events$Internal$Decode$dynamicListOf = function (itemDecoder) {
	var decodeOne = function (n) {
		return A2(
			$elm$json$Json$Decode$field,
			$elm$core$String$fromInt(n),
			itemDecoder);
	};
	var decodeN = function (n) {
		return $mpizenberg$elm_pointer_events$Internal$Decode$all(
			A2(
				$elm$core$List$map,
				decodeOne,
				A2($elm$core$List$range, 0, n - 1)));
	};
	return A2(
		$elm$json$Json$Decode$andThen,
		decodeN,
		A2($elm$json$Json$Decode$field, 'length', $elm$json$Json$Decode$int));
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder = $mpizenberg$elm_pointer_events$Internal$Decode$dynamicListOf;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$eventDecoder = A5(
	$elm$json$Json$Decode$map4,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$Event,
	$mpizenberg$elm_pointer_events$Internal$Decode$keys,
	A2(
		$elm$json$Json$Decode$field,
		'changedTouches',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'targetTouches',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'touches',
		$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchListDecoder($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$touchDecoder)));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions = F3(
	function (event, options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						message: tag(ev),
						preventDefault: options.preventDefault,
						stopPropagation: options.stopPropagation
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onEnd = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions, 'touchend', $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$defaultOptions);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onMove = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions, 'touchmove', $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$defaultOptions);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onStart = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onWithOptions, 'touchstart', $mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$defaultOptions);
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Main$touchCoordinates = function (touchEvent) {
	return A2(
		$elm$core$Maybe$withDefault,
		_Utils_Tuple2(0, 0),
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.clientPos;
			},
			$elm$core$List$head(touchEvent.changedTouches)));
};
var $author$project$Route$transitionToString = function (transition) {
	if (transition.$ === 'Show') {
		return 'show';
	} else {
		return 'remove';
	}
};
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$header,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('nav-link'),
								$elm$html$Html$Events$onClick($author$project$Main$ToggleNav)
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('nav-icon')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('lettuce')
											]),
										_List_Nil),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('tomato')
											]),
										_List_Nil),
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('onion')
											]),
										_List_Nil)
									]))
							]))
					])),
				function () {
				var _v0 = model.page;
				switch (_v0.$) {
					case 'LetterForm':
						var letter = _v0.a;
						var transition = _v0.b;
						var letterDetails = $author$project$Data$Alphabet$getLetterDetailsFromLetter(letter);
						var _v1 = model.startAt;
						var startX = _v1.a;
						var _v2 = model.moveAt;
						var moveX = _v2.a;
						var xDiff = (!moveX) ? 0 : (((startX - moveX) < 0) ? 10 : (-10));
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'letter-container ' + $author$project$Route$transitionToString(transition)),
									$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onStart(
									A2($elm$core$Basics$composeL, $author$project$Main$StartAt, $author$project$Main$touchCoordinates)),
									$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onMove(
									A2($elm$core$Basics$composeL, $author$project$Main$MoveAt, $author$project$Main$touchCoordinates)),
									$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onEnd(
									A2($elm$core$Basics$composeL, $author$project$Main$EndAt, $author$project$Main$touchCoordinates))
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$p,
									_List_fromArray(
										[
											A2(
											$elm$html$Html$Attributes$style,
											'transform',
											'translate(' + ($elm$core$String$fromFloat(xDiff) + 'px, 0px)')),
											A2($elm$html$Html$Attributes$style, 'transition', 'transform 0.35s ease'),
											$elm$html$Html$Attributes$class('letterform')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$span,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('letterform')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(letterDetails.letterText)
												])),
											A2(
											$elm$html$Html$span,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('lowercase')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(letterDetails.letterTextLowercase)
												]))
										]))
								]));
					case 'Drawing':
						var letter = _v0.a;
						var transition = _v0.b;
						var letterDetails = $author$project$Data$Alphabet$getLetterDetailsFromLetter(letter);
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'letter-container ' + $author$project$Route$transitionToString(transition)),
									$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onStart(
									A2($elm$core$Basics$composeL, $author$project$Main$StartAt, $author$project$Main$touchCoordinates)),
									$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onMove(
									A2($elm$core$Basics$composeL, $author$project$Main$MoveAt, $author$project$Main$touchCoordinates)),
									$mpizenberg$elm_pointer_events$Html$Events$Extra$Touch$onEnd(
									A2($elm$core$Basics$composeL, $author$project$Main$EndAt, $author$project$Main$touchCoordinates))
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('drawing-word-container')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$p,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('drawing')
												]),
											_List_fromArray(
												[
													$author$project$Data$Alphabet$getDrawingSvg(letter)
												])),
											A2(
											$elm$html$Html$p,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('word')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(letterDetails.word)
												]))
										]))
								]));
					default:
						var transition = _v0.a;
						return A2(
							$elm$html$Html$nav,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									$author$project$Route$transitionToString(transition) + '-nav')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$ul,
									_List_Nil,
									A2($elm$core$List$map, $author$project$Main$createListElement, $author$project$Data$Alphabet$letterDetailsList))
								]));
				}
			}()
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{
		init: $author$project$Main$init,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: $author$project$Main$update,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));
},{}],"main.js":[function(require,module,exports) {
var _require = require("./Main.elm"),
    Elm = _require.Elm;

Elm.Main.init({
  node: document.getElementById("main")
});
},{"./Main.elm":"Main.elm"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11763" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.map