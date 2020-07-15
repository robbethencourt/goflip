// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

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

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


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



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				if (!model.popout.b)
				{
					var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
					var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
					cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
					cornerCurr = cornerNext;
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = 900, h = 360, x = screen.width - w, y = screen.height - h;
	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.which === 38 && (popout.a($elm$browser$Debugger$Main$Up), event.preventDefault());
		event.which === 40 && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});
	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}



// UPLOAD


function _Debugger_upload()
{
	return _Scheduler_binding(function(callback)
	{
		var element = document.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			document.body.removeChild(element);
		});
		document.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
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



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');





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
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
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
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
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
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/union_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('union types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100%'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100% - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$browser$Debugger$Overlay$button = F2(
	function (msg, label) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick(msg),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(label)
				]));
	});
var $elm$browser$Debugger$Overlay$viewImportExport = F3(
	function (props, importMsg, exportMsg) {
		return A2(
			$elm$html$Html$div,
			props,
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Overlay$button, importMsg, 'Import'),
					$elm$html$Html$text(' / '),
					A2($elm$browser$Debugger$Overlay$button, exportMsg, 'Export')
				]));
	});
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '0'),
					A2($elm$html$Html$Attributes$style, 'right', '6px'),
					A2($elm$html$Html$Attributes$style, 'border-radius', '4px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding', '6px'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'min-width', '24ch'),
							$elm$html$Html$Events$onClick(config.open)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							'Explore History (' + ($elm$core$String$fromInt(numMsgs) + ')'))
						])),
					A3(
					$elm$browser$Debugger$Overlay$viewImportExport,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding', '4px 0'),
							A2($elm$html$Html$Attributes$style, 'font-size', '0.8em'),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
						]),
					config.importHistory,
					config.exportHistory)
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', '100%'),
							A2($elm$html$Html$Attributes$style, 'height', '100%'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
									A2($elm$html$Html$Attributes$style, 'top', 'calc(50% - 40px)'),
									A2($elm$html$Html$Attributes$style, 'font-size', '80px'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'width', '100%')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$ExpandoMsg = function (a) {
	return {$: 'ExpandoMsg', a: a};
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$length = _String_length;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$Main$resumeStyle = '\n\n.elm-debugger-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.elm-debugger-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n';
var $elm$browser$Debugger$Main$viewResumeButton = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return $elm$html$Html$text('');
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume),
					$elm$html$Html$Attributes$class('elm-debugger-resume')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('Resume'),
					A3(
					$elm$html$Html$node,
					'style',
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text($elm$browser$Debugger$Main$resumeStyle)
						]))
				]));
	}
};
var $elm$browser$Debugger$Main$viewTextButton = F2(
	function (msg, label) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick(msg),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(label)
				]));
	});
var $elm$browser$Debugger$Main$playButton = function (maybeIndex) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				$elm$browser$Debugger$Main$viewResumeButton(maybeIndex),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'width', '100%'),
						A2($elm$html$Html$Attributes$style, 'height', '24px'),
						A2($elm$html$Html$Attributes$style, 'line-height', '24px'),
						A2($elm$html$Html$Attributes$style, 'font-size', '12px')
					]),
				_List_fromArray(
					[
						A2($elm$browser$Debugger$Main$viewTextButton, $elm$browser$Debugger$Main$Import, 'Import'),
						$elm$html$Html$text(' / '),
						A2($elm$browser$Debugger$Main$viewTextButton, $elm$browser$Debugger$Main$Export, 'Export')
					]))
			]));
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index - 1,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg),
				rest));
	});
var $elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var $elm$html$Html$Lazy$lazy2 = $elm$virtual_dom$VirtualDom$lazy2;
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$browser$Debugger$History$maxSnapshotSize = 64;
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (currentIndex, index, _v0) {
		var messages = _v0.messages;
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consMsg(currentIndex),
				_Utils_Tuple2(index - 1, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (currentIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index - $elm$browser$Debugger$History$maxSnapshotSize;
		var currentIndexHelp = ((_Utils_cmp(nextIndex, currentIndex) < 1) && (_Utils_cmp(currentIndex, index) < 0)) ? currentIndex : (-1);
		return _Utils_Tuple2(
			index - $elm$browser$Debugger$History$maxSnapshotSize,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, currentIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$browser$Debugger$History$viewSnapshots = F2(
	function (currentIndex, snapshots) {
		var highIndex = $elm$browser$Debugger$History$maxSnapshotSize * $elm$core$Array$length(snapshots);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consSnapshot(currentIndex),
				_Utils_Tuple2(highIndex, _List_Nil),
				snapshots).b);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = function () {
			if (maybeIndex.$ === 'Nothing') {
				return _Utils_Tuple2(-1, 'calc(100% - 24px)');
			} else {
				var i = maybeIndex.a;
				return _Utils_Tuple2(i, 'calc(100% - 54px)');
			}
		}();
		var index = _v1.a;
		var height = _v1.b;
		var newStuff = A3(
			$elm$core$List$foldl,
			$elm$browser$Debugger$History$consMsg(index),
			_Utils_Tuple2(numMessages - 1, _List_Nil),
			recent.messages).b;
		var oldStuff = A3($elm$html$Html$Lazy$lazy2, $elm$browser$Debugger$History$viewSnapshots, index, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', height)
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2($elm$core$List$cons, oldStuff, newStuff)));
	});
var $elm$browser$Debugger$Main$viewSidebar = F2(
	function (state, history) {
		var maybeIndex = function () {
			if (state.$ === 'Running') {
				return $elm$core$Maybe$Nothing;
			} else {
				var index = state.a;
				return $elm$core$Maybe$Just(index);
			}
		}();
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'float', 'left'),
					A2($elm$html$Html$Attributes$style, 'width', '30ch'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					$elm$browser$Debugger$Main$playButton(maybeIndex)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (_v0) {
	var history = _v0.history;
	var state = _v0.state;
	var expando = _v0.expando;
	return A3(
		$elm$html$Html$node,
		'body',
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '0'),
				A2($elm$html$Html$Attributes$style, 'padding', '0'),
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%'),
				A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
				A2($elm$html$Html$Attributes$style, 'overflow', 'auto')
			]),
		_List_fromArray(
			[
				A2($elm$browser$Debugger$Main$viewSidebar, state, history),
				A2(
				$elm$html$Html$map,
				$elm$browser$Debugger$Main$ExpandoMsg,
				A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'display', 'block'),
							A2($elm$html$Html$Attributes$style, 'float', 'left'),
							A2($elm$html$Html$Attributes$style, 'height', '100%'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 30ch)'),
							A2($elm$html$Html$Attributes$style, 'margin', '0'),
							A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'default')
						]),
					_List_fromArray(
						[
							A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expando)
						])))
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expando: $elm$browser$Debugger$Expando$init(userModel),
				history: $elm$browser$Debugger$History$empty(userModel),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Paused = F3(
	function (a, b, c) {
		return {$: 'Paused', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = _Debugger_unsafeCoerce;
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
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
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var json = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'metadata',
					$elm$browser$Debugger$Metadata$encode(metadata)),
					_Utils_Tuple2(
					'history',
					$elm$browser$Debugger$History$encode(history))
				]));
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(_Debugger_download, historyLength, json));
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$jsToElm = _Debugger_unsafeCoerce;
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expando: $elm$browser$Debugger$Expando$init(latestUserModel),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = A2(
	$elm$core$Task$perform,
	$elm$browser$Debugger$Main$Upload,
	_Debugger_upload(_Utils_Tuple0));
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expando: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expando),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A3($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel)
								}),
							commands);
					}
				case 'ExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expando: A2($elm$browser$Debugger$Expando$update, eMsg, model.expando)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expando: A2($elm$browser$Debugger$Expando$merge, userModel, model.expando),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					var _v4 = A3($elm$browser$Debugger$History$get, update, index, model.history);
					var indexModel = _v4.a;
					var indexMsg = _v4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expando: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expando),
								state: A3(
									$elm$browser$Debugger$Main$Paused,
									index,
									indexModel,
									$elm$browser$Debugger$Main$getLatestModel(model.state))
							}),
						$elm$core$Platform$Cmd$none);
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							function (_v5) {
								return $elm$browser$Debugger$Main$NoOp;
							},
							_Debugger_open(model.popout)));
				case 'Up':
					var index = function () {
						var _v6 = model.state;
						if (_v6.$ === 'Paused') {
							var i = _v6.a;
							return i;
						} else {
							return $elm$browser$Debugger$History$size(model.history);
						}
					}();
					if (index > 0) {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(index - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				case 'Down':
					var _v7 = model.state;
					if (_v7.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var index = _v7.a;
						var userModel = _v7.c;
						if (_Utils_eq(
							index,
							$elm$browser$Debugger$History$size(model.history) - 1)) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Jump(index + 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v8) {
							return _Utils_Tuple2(model, $elm$browser$Debugger$Main$upload);
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v9 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v9.$ === 'Err') {
								var newOverlay = _v9.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v9.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				default:
					var overlayMsg = msg.a;
					var _v10 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v10.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v10.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
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
var $elm$browser$Browser$element = _Browser_element;
var $author$project$Data$Alphabet$A = {$: 'A'};
var $author$project$Route$LetterForm = F2(
	function (a, b) {
		return {$: 'LetterForm', a: a, b: b};
	});
var $author$project$Route$Show = {$: 'Show'};
var $author$project$Main$init = function (_v0) {
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
var $author$project$Main$DisplayLetterFromNav = function (a) {
	return {$: 'DisplayLetterFromNav', a: a};
};
var $author$project$Data$Alphabet$getLetterText = function (ld) {
	return ld.letterText + (' ' + ld.letterTextLowercase);
};
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
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
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
					$elm$svg$Svg$Attributes$strokeWidth('9.325'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M223.985 182.741s-73.285-3.058-61.835-53.457c0 0-1.483-11.002-11.45-11.868.001.001 88.893-38.991 73.285 65.325z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#916E51'),
					$elm$svg$Svg$Attributes$stroke('#6D4C29'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M210.056 216s-3.881-53.838 44.991-60.897c26.028-3.76 18.527 23.545 7.059 25.44s-30.877 29.263-28.231 35.438c2.647 6.175-19.485.02-19.485.02h-4.334z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DB1414'),
					$elm$svg$Svg$Attributes$stroke('#8B0004'),
					$elm$svg$Svg$Attributes$strokeWidth('9.325'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M155.36 207.562c-61.754-8.822-167.7 15.392-82.044 202.878 60.872 133.238 139.386 58.252 139.386 58.252s117.333 61.239 159.679-74.803c42.346-136.043-9.704-206.619-82.927-194.268-73.224 12.351-134.094 7.941-134.094 7.941z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#770009'),
					$elm$svg$Svg$Attributes$d('M163.139 297.518c0 2.814-.57 5.494-1.601 7.93s-2.523 4.633-4.366 6.478a20.467 20.467 0 01-6.476 4.365 20.33 20.33 0 01-7.93 1.6c-2.814 0-5.494-.569-7.932-1.6a20.426 20.426 0 01-10.841-10.843l19.553-7.93-19.553-7.93a20.399 20.399 0 014.365-6.477 20.453 20.453 0 016.476-4.366 20.315 20.315 0 017.932-1.601 20.31 20.31 0 0114.406 5.967 20.31 20.31 0 015.967 14.407zM300.347 297.518a20.28 20.28 0 01-1.601 7.93 20.428 20.428 0 01-10.843 10.843 20.326 20.326 0 01-7.93 1.6c-2.814 0-5.493-.569-7.932-1.6a20.444 20.444 0 01-10.842-10.843l19.554-7.93-19.554-7.93a20.43 20.43 0 0110.842-10.843 20.312 20.312 0 017.932-1.601 20.31 20.31 0 0114.407 5.967 20.305 20.305 0 015.967 14.407zM235.343 357.14c-5.486-6.693-18.607-7.692-25.941-7.692-2.344 0-3.977.102-4.393.129a68.662 68.662 0 00-4.393-.129c-7.333 0-20.455.999-25.942 7.692-2.28 2.779-3.028 6.227-2.225 10.244 3.904 19.528 30.75 26.192 31.891 26.469a1.5 1.5 0 00.312.036c.102 0 .203-.013.303-.035 1.17-.275 28.705-6.936 32.613-26.47.804-4.018.055-7.465-2.225-10.244zm-.381 9.722c-3.362 16.812-27.302 23.545-30.306 24.323-37.727-31.393.25-38.949.25-38.949.069.005.139.005.204 0 .018-.003 1.726-.131 4.291-.131 5.526 0 18.918.654 23.887 6.718 1.775 2.166 2.323 4.796 1.674 8.039zM28.64 208.26c-10.361-10.362-22.209 3.37-12.79 12.79 8.478 8.478 24.019-1.561 30.805 5.226-6.786-6.786 3.253-22.328-5.225-30.805-9.42-9.42-23.151 2.427-12.79 12.789z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FFF'),
					$elm$svg$Svg$Attributes$strokeWidth('6.661'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M80.341 233.455c-21.803 19.587-23.567 43.69-23.567 63.495')
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
					$elm$svg$Svg$Attributes$strokeWidth('9.138'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M195.027 124.045c-6.701 59.113 11.131 227.47-118.364 322.023-116.25 84.882 97.566 278.962 242.657-56.178 123.586-285.466-96.799-508.354-124.293-265.845z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#D6D000'),
					$elm$svg$Svg$Attributes$d('M307.189 224.813c-4.119-5.025-13.974-5.776-19.479-5.776-1.762 0-2.985.077-3.3.098a50.596 50.596 0 00-3.299-.098c-5.506 0-15.358.75-19.478 5.776-1.711 2.087-2.274 4.675-1.67 7.691 2.932 14.663 23.088 19.667 23.945 19.873a.965.965 0 00.459.001c.882-.206 21.557-5.207 24.49-19.874.606-3.016.043-5.604-1.668-7.691zm-.289 7.299c-2.524 12.623-20.498 17.678-22.754 18.265-28.328-23.572.188-29.247.188-29.247a.99.99 0 00.154 0c.014-.001 1.296-.098 3.223-.098 4.148 0 14.202.492 17.936 5.044 1.33 1.627 1.744 3.601 1.253 6.036zM117.667 113.109c-15.757-15.757-33.776 5.125-19.452 19.45 12.894 12.893 36.528-2.374 46.847 7.946-10.318-10.32 4.948-33.955-7.945-46.848-14.325-14.324-35.208 3.695-19.45 19.452z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#D6D000'),
					$elm$svg$Svg$Attributes$strokeWidth('1.306'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M276.965 256.567c-9.189 108.132-52.603 226.599-185.941 281.076M257.172 35.991s22.753 79.98 21.778 177.928')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FFF'),
					$elm$svg$Svg$Attributes$strokeWidth('6.527'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M230.387 53.19c-13.757 25.302-15.643 34.662-20.363 62.233')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#D6D000'),
					$elm$svg$Svg$Attributes$d('M338.503 176.031a19.904 19.904 0 01-5.848 14.12 19.909 19.909 0 01-14.118 5.846c-2.758 0-5.384-.558-7.773-1.568a20.048 20.048 0 01-6.347-4.278 20.002 20.002 0 01-4.278-6.348l19.163-7.772-19.163-7.771a20.009 20.009 0 0110.625-10.625 19.902 19.902 0 017.773-1.57c2.756 0 5.382.559 7.771 1.57a19.992 19.992 0 016.347 4.278 19.906 19.906 0 015.848 14.118zM262.785 176.031a19.904 19.904 0 01-5.847 14.12 19.909 19.909 0 01-14.119 5.846c-2.758 0-5.385-.558-7.774-1.568a20.054 20.054 0 01-6.346-4.278 20.002 20.002 0 01-4.278-6.348l19.162-7.772-19.162-7.771a20.009 20.009 0 0110.624-10.625 19.907 19.907 0 017.774-1.57c2.756 0 5.382.559 7.771 1.57a20.019 20.019 0 0110.626 10.625 19.884 19.884 0 011.569 7.771z')
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
					$elm$svg$Svg$Attributes$fill('#FFF'),
					$elm$svg$Svg$Attributes$d('M72.168 533.857c.944-.517 2.138-1.711 2.654-2.654l1.58-2.888c.516-.943 1.361-.943 1.877 0l1.58 2.888c.516.943 1.71 2.138 2.654 2.654l2.891 1.58c.944.517.944 1.36 0 1.877l-2.891 1.58c-.944.517-2.138 1.711-2.654 2.654l-1.58 2.891c-.516.943-1.361.943-1.877 0l-1.58-2.891c-.516-.943-1.71-2.138-2.654-2.654l-2.89-1.58c-.944-.517-.944-1.36 0-1.877l2.89-1.58z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#12FF39'),
					$elm$svg$Svg$Attributes$stroke('#004E06'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M342.445 81.554c-6.175 0-12.004 1.693-17.169 4.686-4.638-13.826-17.099-23.73-31.751-23.73-15.713 0-28.914 11.391-32.638 26.798-13.013.888-27.663 13.83-35.781 33.015-3.717 8.782-5.537 17.634-5.614 25.609a47.037 47.037 0 00-10.63 3.7c-.418-6.474-3.253-11.829-8.179-14.061-5.712-2.587-12.731-.312-18.363 5.198-1.231-15.551-9.208-28.155-19.638-31.603-1.94-21.485-15.757-38.146-32.525-38.146-10.382 0-19.629 6.394-25.633 16.358-6.757-8.562-16.545-13.947-27.438-13.947-20.391 0-36.919 18.861-36.919 42.128 0 11.989 4.397 22.802 11.443 30.474a54.645 54.645 0 00-.368 6.304c0 22.304 13.432 40.655 30.667 42.947 4.568 16.683 19.828 28.946 37.959 28.946 16.707 0 30.972-9.956 36.687-24.642C167.174 219.95 167.539 257 167.539 257h35.072c-2.94-11-1.585-37.573 1.992-45.961 7.134 4.548 16.036 7.026 25.698 7.026 17.79 0 33.017-9.278 39.334-22.27 6.289 3.515 13.678 5.483 21.585 5.483 21.036 0 38.408-14.369 41.146-32.967a33.53 33.53 0 0010.078 1.542c21.155 0 38.305-19.771 38.305-44.15.001-24.379-17.148-44.149-38.304-44.149z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC751A'),
					$elm$svg$Svg$Attributes$stroke('#C15105'),
					$elm$svg$Svg$Attributes$strokeWidth('10'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M283 297.774C283 273.21 263.064 254 237.794 254H127.15C101.88 254 81 273.21 81 297.774v.239c0 5.009 1.092 9.818 2.658 14.312 11.585 55.736 98.732 225.166 98.732 225.166s90.552-172.197 99.23-227.828c1.035-3.714 1.38-7.617 1.38-11.649v-.24z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#C15105'),
					$elm$svg$Svg$Attributes$d('M238.122 330.161a15.04 15.04 0 01-4.418 10.667 15.14 15.14 0 01-4.795 3.233 15.078 15.078 0 01-5.873 1.184c-2.083 0-4.066-.422-5.873-1.184a15.145 15.145 0 01-8.027-8.029l14.479-5.871-14.479-5.873a15.142 15.142 0 018.027-8.028 15.057 15.057 0 015.873-1.185c2.082 0 4.066.422 5.873 1.185a15.126 15.126 0 018.027 8.028 15.05 15.05 0 011.186 5.873zM155.526 330.161c0 2.082-.422 4.067-1.186 5.871a15.129 15.129 0 01-8.027 8.029 15.066 15.066 0 01-5.872 1.184 15.07 15.07 0 01-5.873-1.184 15.14 15.14 0 01-8.026-8.029l14.479-5.871-14.479-5.873a15.126 15.126 0 018.026-8.028 15.053 15.053 0 015.873-1.185c2.083 0 4.067.422 5.872 1.185a15.145 15.145 0 018.027 8.028 15.032 15.032 0 011.186 5.873zM208.499 371.949c-4.576-5.581-15.52-6.413-21.634-6.413-1.957 0-3.315.085-3.663.107a57.904 57.904 0 00-3.664-.107c-6.115 0-17.058.832-21.632 6.413-1.901 2.318-2.526 5.194-1.855 8.544 3.256 16.285 25.643 21.843 26.594 22.07a1.146 1.146 0 00.511.003c.976-.23 23.939-5.784 27.197-22.073.671-3.349.047-6.225-1.854-8.544zm-.32 8.109c-2.804 14.019-22.766 19.633-25.271 20.285-31.461-26.179.208-32.481.208-32.481.057.004.114.004.17 0a51.795 51.795 0 013.578-.108c4.608 0 15.775.545 19.92 5.604 1.479 1.802 1.938 3.996 1.395 6.7z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC751A'),
					$elm$svg$Svg$Attributes$d('M39.467 241.071c-12.911-12.911-27.674 4.199-15.938 15.937 10.564 10.563 29.929-1.944 38.384 6.51-8.455-8.454 4.054-27.819-6.51-38.384-11.737-11.737-28.847 3.026-15.936 15.937z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#C15105'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M83 295.5h63M83 276.5h39M205 418.5h37M214 440.5h16')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
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
					$elm$svg$Svg$Attributes$fill('#9E6E78'),
					$elm$svg$Svg$Attributes$stroke('#664949'),
					$elm$svg$Svg$Attributes$strokeWidth('11.535'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M390.996 303.84c0 29.992-3.23 66.715-36.014 86.372-32.783 19.656-95.119 22.247-145.145 22.247-50.027 0-100.359-2.591-133.142-22.247-32.783-19.657-56.749-53.465-56.749-83.459s29.008-60.063 61.792-79.719c32.784-19.655 78.072-31.813 128.099-31.813 50.025 0 95.314 12.158 128.098 31.813 32.784 19.655 53.061 46.81 53.061 76.806z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('rotate(6.174 354.84 319.278)'),
					$elm$svg$Svg$Attributes$fill('#66494C'),
					$elm$svg$Svg$Attributes$cx('355.004'),
					$elm$svg$Svg$Attributes$cy('319.407'),
					$elm$svg$Svg$Attributes$rx('19.644'),
					$elm$svg$Svg$Attributes$ry('46.381')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#66494C'),
					$elm$svg$Svg$Attributes$d('M284.628 288.292a17.76 17.76 0 01-1.405 6.955 17.881 17.881 0 01-3.828 5.681 17.983 17.983 0 01-5.681 3.831c-2.137.902-4.488 1.403-6.955 1.403s-4.818-.501-6.957-1.403a17.947 17.947 0 01-9.509-9.512l17.151-6.955-17.151-6.956a17.934 17.934 0 019.509-9.511c2.139-.905 4.49-1.403 6.957-1.403a17.812 17.812 0 0112.636 5.231 17.89 17.89 0 013.828 5.683 17.764 17.764 0 011.405 6.956zM174.556 288.292c0 2.467-.499 4.818-1.404 6.955a17.92 17.92 0 01-3.83 5.681 17.979 17.979 0 01-5.68 3.831 17.86 17.86 0 01-6.956 1.403c-2.468 0-4.818-.501-6.956-1.403a17.917 17.917 0 01-9.51-9.512l17.15-6.955-17.15-6.956a17.925 17.925 0 019.51-9.511 17.795 17.795 0 016.956-1.403c2.467 0 4.817.499 6.956 1.403a17.932 17.932 0 019.51 9.511 17.8 17.8 0 011.404 6.956zM245.014 333.145c-5.982-7.297-20.291-8.387-28.287-8.387-2.558 0-4.337.109-4.791.143-.453-.033-2.229-.143-4.79-.143-7.995 0-22.303 1.09-28.286 8.387-2.485 3.033-3.303 6.788-2.425 11.169 4.256 21.294 33.53 28.561 34.773 28.859a1.442 1.442 0 00.67.003c1.276-.299 31.301-7.562 35.56-28.862.876-4.381.059-8.136-2.424-11.169zm-.418 10.601c-3.668 18.331-29.768 25.673-33.047 26.521-41.133-34.23.275-42.47.275-42.47.074.005.149.005.224 0 .017-.001 1.881-.144 4.679-.144 6.024 0 20.625.715 26.045 7.325 1.933 2.364 2.533 5.23 1.824 8.768zM28.097 206.636c-12.193-12.194-26.136 3.965-15.052 15.05 9.978 9.977 28.266-1.837 36.251 6.148-7.985-7.985 3.828-26.273-6.148-36.251-11.085-11.083-27.244 2.859-15.051 15.053z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#66494C'),
					$elm$svg$Svg$Attributes$strokeWidth('4.944'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M89.792 219.53c10.029 5.667 21.845 16.455 34.74 17.76 12.912 1.308 20.566-12.331 30.933-12.11 8.273.176 12.581 10.919 20.304 12.981 6.947 1.854 15.258-.805 22.332.935 10.141 2.493 27.905 13.902 33.563-2.105M365.896 381.045c-10.078 1.775-16.759 2.523-25.948.818-10.43-1.937-21.956-6.232-31.841-2.729-9.775 3.465-12.71 11.257-23.872 10.396-9.729-.752-19.25-11.238-28.563-3.028M25.055 316.177c4.404-7.097 21.266-11.689 29.521-10.913 8.736.821 13.647 7.922 21.718 9.874 8.561 2.069 15.291-3.053 22.702-.027 3.149 1.286 5.016 4.921 8.211 6.487 3.017 1.479 9.375 2.001 11.702 4.401')
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
					$elm$svg$Svg$Attributes$strokeWidth('10.747'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M374.529 370.105c-8.415-28.267-26.445-48.577-57.567-92.005-25.82-36.034-12.652-79.558-12.652-79.558l-59.535-44.485-132.892 31.845s-43.432 125.288-5.602 244.131c16.542 57.696 56.859 103.119 126.293 103.119 75.808 0 152.415-48.967 149.463-124.353-.073-1.851-3.563-28.854-7.508-38.694z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('10.747'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M176.653 126.605c0 3.05 21.352-59.279 27.452-59.634 6.099-.355 22.272 1.777 33.781 0 10.749-1.66-30.731 13.081-19.547 59.743l-41.686-.109z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('10.747'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M311.229 215.406c2.229-39.131-19.707-126.868-149.828-99.985-104.707 21.63-79.306 166.747-50.836 98.625 28.468-68.122 80.323 90.491 110.824 35.586 30.502-54.905 33.551-66.089 59.987-33.553 26.437 32.536 29.853-.673 29.853-.673z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#381D60'),
					$elm$svg$Svg$Attributes$d('M326.235 361.161c0 4.074-.824 7.954-2.319 11.48a29.571 29.571 0 01-6.322 9.378 29.57 29.57 0 01-9.374 6.322c-3.531 1.492-7.409 2.313-11.483 2.313s-7.954-.821-11.483-2.313a29.58 29.58 0 01-15.696-15.7l28.31-11.48-28.31-11.483a29.518 29.518 0 016.32-9.376 29.42 29.42 0 0120.859-8.641c4.074 0 7.952.828 11.483 2.32a29.535 29.535 0 019.374 6.321 29.54 29.54 0 016.322 9.376 29.372 29.372 0 012.319 11.483zM191.606 361.161c0 4.074-.824 7.954-2.318 11.48a29.59 29.59 0 01-15.696 15.7 29.42 29.42 0 01-11.482 2.313c-4.075 0-7.955-.821-11.484-2.313a29.575 29.575 0 01-9.375-6.322 29.538 29.538 0 01-6.322-9.378l28.311-11.48-28.311-11.483a29.507 29.507 0 016.322-9.376 29.517 29.517 0 019.375-6.321 29.424 29.424 0 0111.484-2.32c4.072 0 7.952.828 11.482 2.32a29.543 29.543 0 019.376 6.321 29.485 29.485 0 016.32 9.376 29.371 29.371 0 012.318 11.483zM260.663 418.859c-4.372-5.334-14.831-6.13-20.677-6.13a53.19 53.19 0 00-3.501.104 53.88 53.88 0 00-3.501-.104c-5.845 0-16.303.796-20.676 6.13-1.816 2.217-2.414 4.966-1.773 8.165 3.112 15.564 24.51 20.876 25.419 21.094.082.021.165.03.248.03.079 0 .161-.01.241-.026.932-.221 22.879-5.529 25.993-21.098.642-3.199.044-5.948-1.773-8.165zm-.304 7.75c-2.682 13.398-21.761 18.766-24.154 19.387-30.069-25.021.199-31.044.199-31.044.055.004.109.004.163 0a48.66 48.66 0 013.419-.105c4.405 0 15.077.524 19.038 5.356 1.416 1.725 1.852 3.821 1.335 6.406zM37.704 261.305c-12.659-12.66-27.134 4.117-15.627 15.625 10.359 10.357 29.346-1.907 37.636 6.383-8.291-8.29 3.975-27.277-6.383-37.636-11.509-11.508-28.286 2.968-15.626 15.628z')
				]),
			_List_Nil)
		]));
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
					$elm$svg$Svg$Attributes$d('M12.166 157s10.417 12.412 20.375 23.376c10.819 11.911 51.104 16.436 62.868 7.387 11.762-9.047 53.384 21.716 51.574 47.051l15.382-8.144s-19-72.247-75.098-60.622c-56.099 11.625-57.004-16.286-57.004-16.286L12.166 157z')
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
					$elm$svg$Svg$Attributes$d('M126.353 80.633s-13.045 6.957-22.613 6.377c0 1.45-32.625 60.326-17.972 80.88 14.653 20.554 31.887 60.877 31.887 60.877s-26.379-104.65 8.698-148.134z')
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
					$elm$svg$Svg$Attributes$d('M173.955 132.5h16.395s-7.468 39.673 30.508 59.628l-9.856 30.179s-24.643-12.427-45.804 20.911l.168-37.354s19.254-14.462 34.329-4.808c-.001.001-34.377-44.556-25.74-68.556z')
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
					$elm$svg$Svg$Attributes$d('M279.389 171.055s-35.052-35.327-50.414-38.235c-15.366-2.908-27.145-27.542-26.328-53.348l-19.476 24.641s24.641 46.383 48.122 51.89c23.481 5.508 34.206 39.425 25.51 48.122l-33.047 1.45-2.898 20.873 51.6-1.45 6.931-53.943zM273.159 88.718c2.688-3.105 26.963-22.011 22.903-5.777-4.058 16.235-12.239 24.631 3.012 39.275 15.251 14.645-5.91 27.546-5.91 27.546s-44.066-33.236-20.005-61.044z')
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
					$elm$svg$Svg$Attributes$d('M323.542 163.821c26.443-43.483 64.292-57.978 64.292-57.978-9.278-5.219-23.771-21.452-23.771-21.452-14.783 30.726-73.923 120.736-73.923 120.736l-34.206 84.795 29.351 35.94c-10.65-68.419 17.612-105.513 17.612-105.513 59.429 5.217 36.525-43.774 36.525-43.774 17.394-2.32 9.278 6.378 9.278 6.378s9.274 10.146 9.274 11.015c0 .87 24.641-17.683 9.856-31.598-14.783-13.913-44.288 1.451-44.288 1.451zm2.958 21.557a3.123 3.123 0 01-3.123 3.122h-8.754a3.122 3.122 0 01-3.123-3.122v-.757a3.123 3.123 0 013.123-3.122h8.754a3.122 3.122 0 013.123 3.122v.757zm.342 18.018l-6.506 4.99a3.414 3.414 0 11-4.158-5.42l6.506-4.989a3.414 3.414 0 114.158 5.419z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('b'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('307.009'),
					$elm$svg$Svg$Attributes$y1('474.687'),
					$elm$svg$Svg$Attributes$x2('86.883'),
					$elm$svg$Svg$Attributes$y2('93.418')
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
					$elm$svg$Svg$Attributes$y1('528.553'),
					$elm$svg$Svg$Attributes$x2('185.739'),
					$elm$svg$Svg$Attributes$y2('84.045')
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
					$elm$svg$Svg$Attributes$d('M323.542 117.354l-22.768-7.903-58.069 167.285c-7.511-4.47-15.525-7.729-23.908-9.554L260.297 103l-34.347-8.356L182.721 266h-15.578l-5.278-176.955-28.68.693 5.352 179.035c-4.043 1.247-7.994 2.779-11.827 4.673L75.345 107.433l-27.409 8.471 54.257 175.339c-23.628 23.627-38.914 61.23-38.914 103.542 0 71.422 43.548 128.768 97.266 128.768 7.274 0 11.894-.553 21.177-.553H202.9c53.719 0 97.266-57.348 97.266-128.77 0-41.447-14.682-78.086-37.488-101.675l60.864-175.201z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('d'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('99.867'),
					$elm$svg$Svg$Attributes$y1('380.414'),
					$elm$svg$Svg$Attributes$x2('219.477'),
					$elm$svg$Svg$Attributes$y2('380.414')
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
					$elm$svg$Svg$Attributes$d('M100.634 480.938c0-111.124 52.812-201.047 118.076-201.047')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('e'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('122.45'),
					$elm$svg$Svg$Attributes$y1('396.656'),
					$elm$svg$Svg$Attributes$x2('233.06'),
					$elm$svg$Svg$Attributes$y2('396.656')
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
					$elm$svg$Svg$Attributes$d('M123.152 488.051c0-101.033 48.844-182.789 109.206-182.789')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('f'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('145.033'),
					$elm$svg$Svg$Attributes$y1('412.898'),
					$elm$svg$Svg$Attributes$x2('246.644'),
					$elm$svg$Svg$Attributes$y2('412.898')
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
					$elm$svg$Svg$Attributes$d('M145.672 495.163c0-90.94 44.876-164.53 100.334-164.53')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('g'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('167.615'),
					$elm$svg$Svg$Attributes$y1('429.14'),
					$elm$svg$Svg$Attributes$x2('260.229'),
					$elm$svg$Svg$Attributes$y2('429.14')
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
					$elm$svg$Svg$Attributes$d('M168.19 502.275c0-80.848 40.908-146.271 91.464-146.271')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('h'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('190.198'),
					$elm$svg$Svg$Attributes$y1('445.383'),
					$elm$svg$Svg$Attributes$x2('273.813'),
					$elm$svg$Svg$Attributes$y2('445.383')
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
					$elm$svg$Svg$Attributes$d('M190.709 509.389c0-70.756 36.941-128.013 82.593-128.013')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('i'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('212.781'),
					$elm$svg$Svg$Attributes$y1('461.624'),
					$elm$svg$Svg$Attributes$x2('287.398'),
					$elm$svg$Svg$Attributes$y2('461.624')
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
					$elm$svg$Svg$Attributes$d('M213.229 516.501c0-60.664 32.973-109.754 73.723-109.754')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('j'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('86.639'),
					$elm$svg$Svg$Attributes$y1('359.699'),
					$elm$svg$Svg$Attributes$x2('185.909'),
					$elm$svg$Svg$Attributes$y2('359.699')
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
					$elm$svg$Svg$Attributes$d('M87.266 440.784c0-89.637 43.838-162.169 98.017-162.169')
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
					$elm$svg$Svg$Attributes$d('M46.771 284.963c-12.829-12.829-27.499 4.173-15.836 15.835 10.497 10.496 29.739-1.933 38.14 6.47-8.401-8.402 4.028-27.644-6.468-38.141-11.664-11.662-28.665 3.007-15.836 15.836z')
				]),
			_List_Nil),
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
					$elm$svg$Svg$Attributes$d('M248.858 373.063c0 2.653-.536 5.18-1.51 7.477a19.356 19.356 0 01-4.117 6.109 19.299 19.299 0 01-6.108 4.116 19.165 19.165 0 01-7.476 1.508c-2.655 0-5.183-.537-7.48-1.508a19.266 19.266 0 01-10.225-10.225l18.44-7.477-18.44-7.479a19.24 19.24 0 014.118-6.106 19.154 19.154 0 0113.587-5.629 19.153 19.153 0 0113.584 5.629 19.282 19.282 0 014.117 6.106 19.116 19.116 0 011.51 7.479zM148.147 373.063c0 2.653-.538 5.18-1.51 7.477a19.287 19.287 0 01-4.116 6.109 19.317 19.317 0 01-6.107 4.116 19.18 19.18 0 01-7.479 1.508c-2.654 0-5.18-.537-7.479-1.508a19.307 19.307 0 01-6.106-4.116 19.284 19.284 0 01-4.117-6.109l18.438-7.477-18.438-7.479a19.204 19.204 0 014.117-6.106 19.16 19.16 0 0113.585-5.629 19.164 19.164 0 0113.586 5.629 19.23 19.23 0 014.116 6.106 19.134 19.134 0 011.51 7.479z')
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
					$elm$svg$Svg$Attributes$d('M215.793 433.325c-5.545-6.765-18.806-7.773-26.216-7.773-2.372 0-4.019.103-4.441.131a68.48 68.48 0 00-4.439-.131c-7.411 0-20.67 1.009-26.215 7.773-2.303 2.81-3.061 6.295-2.248 10.352 3.946 19.734 31.075 26.469 32.229 26.745.104.026.208.038.314.038.102 0 .205-.012.306-.034 1.182-.278 29.008-7.01 32.957-26.749.813-4.057.056-7.542-2.247-10.352zm-.388 9.825c-3.397 16.988-27.588 23.794-30.624 24.581-38.126-31.725.252-39.36.252-39.36.069.004.139.004.206 0 .017-.003 1.744-.134 4.337-.134 5.584 0 19.113.663 24.137 6.79 1.796 2.19 2.349 4.845 1.692 8.123z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
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
					$elm$svg$Svg$Attributes$strokeWidth('11.449'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M153.892 73.612S61.248 266.975 48.822 303.25c-5.347 15.608-70.407 223.138 162.48 223.138 232.888 0 159.944-236.953 155.98-251.301-12.839-46.474-93.155-180.893-85.573-201.474 0-.001-99.655 9.747-127.817-.001z')
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
							$elm$svg$Svg$Attributes$d('M181.685 168.254c-.912 4.673-4.432 7.338-7.859 5.953l-17.648-7.132c-3.428-1.385-5.465-6.298-4.554-10.969l.065-.333c.913-4.673 4.432-7.339 7.856-5.955l17.649 7.132c3.43 1.388 5.468 6.3 4.554 10.972l-.063.332zM166.962 261.293c-.911 4.671-4.431 7.338-7.859 5.952l-17.646-7.131c-3.429-1.386-5.466-6.299-4.555-10.971l.063-.333c.914-4.673 4.433-7.338 7.859-5.955l17.647 7.132c3.43 1.388 5.467 6.299 4.553 10.973l-.062.333zM152.24 354.329c-.91 4.671-4.43 7.34-7.858 5.953l-17.646-7.131c-3.43-1.387-5.467-6.299-4.555-10.972l.062-.333c.913-4.674 4.434-7.338 7.861-5.955l17.646 7.134c3.429 1.387 5.466 6.297 4.553 10.973l-.063.331zM137.52 447.366c-.91 4.668-4.43 7.34-7.858 5.953l-17.643-7.131c-3.432-1.388-5.47-6.3-4.557-10.974l.061-.332c.915-4.674 4.436-7.338 7.863-5.957l17.645 7.135c3.428 1.387 5.465 6.296 4.553 10.975l-.064.331z')
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
							$elm$svg$Svg$Attributes$d('M243.282 171.437c.917 4.657 4.438 7.313 7.865 5.931l17.639-7.108c3.429-1.382 5.464-6.277 4.547-10.933l-.067-.329c-.917-4.657-4.431-7.313-7.861-5.933l-17.638 7.109c-3.43 1.382-5.465 6.275-4.546 10.932l.061.331zM258.004 264.144c.914 4.655 4.436 7.312 7.862 5.929l17.639-7.109c3.431-1.379 5.463-6.275 4.548-10.932l-.067-.33c-.915-4.654-4.433-7.312-7.861-5.932l-17.64 7.11c-3.43 1.381-5.463 6.274-4.544 10.932l.063.332zM272.723 356.848c.913 4.654 4.434 7.313 7.859 5.93l17.641-7.111c3.43-1.378 5.461-6.272 4.548-10.931l-.067-.33c-.915-4.653-4.436-7.312-7.861-5.932l-17.642 7.112c-3.43 1.38-5.461 6.273-4.543 10.932l.065.33zM287.441 449.553c.911 4.653 4.432 7.313 7.856 5.928l17.642-7.11c3.431-1.377 5.459-6.271 4.549-10.931l-.066-.331c-.915-4.651-4.438-7.313-7.862-5.931l-17.645 7.112c-3.429 1.379-5.459 6.273-4.541 10.932l.067.331z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F46460'),
					$elm$svg$Svg$Attributes$d('M37.163 178.257c-11.706-11.707-25.092 3.807-14.45 14.449 9.578 9.577 27.135-1.764 34.801 5.904-7.666-7.667 3.676-25.225-5.902-34.803-10.643-10.641-26.155 2.743-14.449 14.45z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F4A6A6'),
					$elm$svg$Svg$Attributes$d('M293.062 304.711c0 3.106-.627 6.064-1.766 8.753a22.672 22.672 0 01-4.82 7.15 22.57 22.57 0 01-7.149 4.819 22.443 22.443 0 01-8.752 1.766 22.45 22.45 0 01-8.755-1.766 22.572 22.572 0 01-11.969-11.969l21.586-8.753-21.586-8.753a22.528 22.528 0 014.82-7.149 22.42 22.42 0 017.149-4.819 22.41 22.41 0 018.755-1.77c3.104 0 6.063.632 8.752 1.77a22.504 22.504 0 017.149 4.819 22.595 22.595 0 014.82 7.149 22.387 22.387 0 011.766 8.753zM175.175 304.711c0 3.106-.63 6.064-1.768 8.753a22.57 22.57 0 01-11.967 11.969 22.457 22.457 0 01-8.754 1.766c-3.107 0-6.063-.63-8.756-1.766a22.616 22.616 0 01-7.148-4.819 22.58 22.58 0 01-4.817-7.15l21.582-8.753-21.582-8.753a22.52 22.52 0 014.817-7.149 22.43 22.43 0 0115.904-6.589 22.423 22.423 0 0115.902 6.589 22.493 22.493 0 014.819 7.149 22.406 22.406 0 011.768 8.753zM238.785 378.226c-4.718-5.756-15.999-6.614-22.305-6.614-2.018 0-3.419.087-3.778.112a57.14 57.14 0 00-3.776-.112c-6.306 0-17.586.858-22.305 6.614-1.958 2.39-2.604 5.355-1.912 8.807 3.357 16.791 26.438 22.52 27.42 22.756.088.022.178.031.269.031.086 0 .174-.009.259-.03 1.007-.236 24.682-5.963 28.041-22.757.691-3.452.046-6.418-1.913-8.807zm-.33 8.359c-2.89 14.453-23.472 20.244-26.055 20.914-32.438-26.993.214-33.489.214-33.489.06.004.12.004.178 0 .013-.003 1.482-.114 3.688-.114 4.752 0 16.261.564 20.535 5.776 1.529 1.863 1.999 4.123 1.44 6.913z')
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
					$elm$svg$Svg$Attributes$x1('206.818'),
					$elm$svg$Svg$Attributes$y1('398.659'),
					$elm$svg$Svg$Attributes$x2('206.818'),
					$elm$svg$Svg$Attributes$y2('241.194')
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
					$elm$svg$Svg$Attributes$x1('206.818'),
					$elm$svg$Svg$Attributes$y1('402.426'),
					$elm$svg$Svg$Attributes$x2('206.818'),
					$elm$svg$Svg$Attributes$y2('237.427')
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
					$elm$svg$Svg$Attributes$strokeWidth('7.534'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M23.281 276.764c-11.249-31.042 48.465-39.199 52.742-34.211 4.276 4.989 17.817 22.095 24.945 24.233 7.127 2.138 8.552 5.702 9.979 9.978 1.425 4.276 10.691 0 10.691 0s4.989 6.912 12.116 8.444c7.127 1.534 13.542-3.456 21.382 4.384 7.84 7.841 12.829-4.988 18.53 0 5.702 4.989 22.965-8.329 25.737 2.606 2.772 10.935 12.749 12.361 22.015 10.223s14.255-4.729 22.095.843c7.84 5.57 9.266-3.694 14.968-9.396 5.702-5.702.712-12.333 19.955-8.661 19.244 3.672 10.691-10.178 24.233-12.162s19.243-1.271 24.944-6.973c5.703-5.702 9.979-3.563 18.53-7.127 8.554-3.564 11.404-.713 27.085 2.851 15.68 3.563 18.012-3.439 18.53 27.795 1.632 98.241-294.354 191.723-368.477-12.827z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#69C462'),
					$elm$svg$Svg$Attributes$d('M23.091 216.196c-9.487-9.487-20.335 3.086-11.711 11.71 7.762 7.762 21.993-1.43 28.205 4.785-6.212-6.215 2.979-20.443-4.784-28.206-8.625-8.623-21.197 2.224-11.71 11.711zM287.375 317.106c0 2.304-.467 4.497-1.311 6.491a16.85 16.85 0 01-3.574 5.303 16.745 16.745 0 01-5.304 3.575 16.638 16.638 0 01-6.491 1.308c-2.305 0-4.498-.465-6.492-1.308a16.703 16.703 0 01-5.302-3.575 16.722 16.722 0 01-3.576-5.303l16.01-6.491-16.01-6.491a16.682 16.682 0 013.576-5.304 16.651 16.651 0 0111.794-4.886c2.302 0 4.496.468 6.491 1.312a16.693 16.693 0 015.304 3.574 16.792 16.792 0 013.574 5.304 16.615 16.615 0 011.311 6.491zM152.589 317.106c0 2.304-.467 4.497-1.311 6.491a16.733 16.733 0 01-8.876 8.878 16.652 16.652 0 01-6.493 1.308c-2.304 0-4.497-.465-6.494-1.308a16.77 16.77 0 01-5.302-3.575 16.747 16.747 0 01-3.573-5.303l16.007-6.491-16.007-6.491a16.707 16.707 0 018.875-8.878 16.656 16.656 0 016.494-1.312 16.637 16.637 0 0111.795 4.886 16.71 16.71 0 013.574 5.304 16.597 16.597 0 011.311 6.491zM228.868 353.833c-3.988-4.865-13.525-5.591-18.856-5.591-1.706 0-2.891.073-3.193.095a48.282 48.282 0 00-3.193-.095c-5.331 0-14.867.726-18.856 5.591-1.655 2.022-2.201 4.527-1.616 7.445 2.838 14.196 22.351 19.039 23.18 19.238a.906.906 0 00.446.001c.853-.198 20.866-5.041 23.707-19.239.582-2.918.038-5.423-1.619-7.445zm-.277 7.068c-2.444 12.219-19.845 17.114-22.029 17.681-27.421-22.82.183-28.312.183-28.312.051.003.1.003.149 0a43.639 43.639 0 013.118-.097c4.018 0 13.748.477 17.36 4.883 1.292 1.577 1.69 3.487 1.219 5.845z')
				]),
			_List_Nil)
		]));
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
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
					$elm$svg$Svg$Attributes$d('M212.614 177s28.042-94.113 57.772-109.625c29.73-15.511 41.579-.694 18.075 24.122C264.958 116.315 248.606 125 250.577 177h-37.963z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$radialGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('m'),
					$elm$svg$Svg$Attributes$cx('200'),
					$elm$svg$Svg$Attributes$cy('339.455'),
					$elm$svg$Svg$Attributes$r('190.749'),
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
					$elm$svg$Svg$Attributes$strokeWidth('10.93'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M215.323 167.004s-8.272 6.204-11.375 0c-3.102-6.204-8.272-17.579-17.579-15.511-9.307 2.069-11.375-6.204-11.375-6.204s-16.544-12.41-14.477 0c2.068 12.409 2.068 6.547-12.409 9.478s-52.737 11.203-46.533 24.646c6.205 13.443-24.818 15.511-24.818 15.511s-8.271 10.34-6.204 14.477c2.068 4.137-11.375 14.477-11.375 14.477s-14.477 4.137 0 23.784-49.635 50.669-36.192 80.657c13.443 29.986 3.507 71.351-1.865 75.487-5.373 4.135-2.271 19.646 11.172 32.055 13.443 12.409 44.464 22.749 40.328 42.396-4.135 19.648 14.479 15.513 19.649 18.614 5.17 3.102 3.102 8.271 9.306 9.306s25.851-2.067 45.499 14.478c19.647 16.543 22.749-7.239 56.873 13.441 34.124 20.682 74.453-28.953 74.453-28.953s7.238-8.271 16.544-1.033c9.307 7.237 25.851-24.817 22.749-28.954s-1.031-14.332 17.58-14.922c18.612-.589 20.68-20.236 32.056-39.884 11.375-19.647 14.476-19.646 8.271-36.191-6.204-16.545 16.545-58.941-1.033-81.69-17.579-22.751-8.272-25.853-14.478-41.364-6.204-15.511-11.373-14.477-1.034-21.715 10.341-7.238-6.204-13.443-13.441-16.545-7.239-3.102-18.613-14.476-16.545-34.124 2.067-19.647-11.374-13.443-14.478-16.545-3.103-3.102-4.136-10.34-13.442-7.238-9.308 3.102-6.205-9.306-28.954-4.137-22.749 5.169-56.873 6.203-56.873 6.203z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.561'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M132.97 194.186c5.963 14.908 14.122 16.625 36.483 7.68M257.883 187.94c5.965 14.908 14.123 16.625 36.485 7.681M189.18 225.415c5.965 14.909 14.123 16.625 36.484 7.681M76.375 322.194c9.484 12.958 17.813 12.594 37.249-1.628')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('2.76'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M246.492 253.138c18.221 21.764 32.87 20.162 65.513-7.168')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.561'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M293.867 357.816c5.701 15.011 13.827 16.872 36.344 8.32M214.235 467.116c5.701 15.011 13.827 16.871 36.342 8.321')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.875'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M72.145 389.045c6.847 18.028 16.605 20.262 43.645 9.993M129.917 443.695c6.848 18.028 16.606 20.262 43.645 9.993')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('2.219'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M92.259 246.992c8.478 21.189 20.072 23.629 51.854 10.917')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('117.811'),
					$elm$svg$Svg$Attributes$cy('246.369'),
					$elm$svg$Svg$Attributes$r('9.824')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('150.601'),
					$elm$svg$Svg$Attributes$cy('188.596'),
					$elm$svg$Svg$Attributes$r('9.824')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('278.638'),
					$elm$svg$Svg$Attributes$cy('185.473'),
					$elm$svg$Svg$Attributes$r('9.824')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('273.954'),
					$elm$svg$Svg$Attributes$cy('247.93'),
					$elm$svg$Svg$Attributes$r('9.824')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('234.918'),
					$elm$svg$Svg$Attributes$cy('461.847'),
					$elm$svg$Svg$Attributes$r('9.824')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('94.39'),
					$elm$svg$Svg$Attributes$cy('386.898'),
					$elm$svg$Svg$Attributes$r('5.802')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('152.163'),
					$elm$svg$Svg$Attributes$cy('443.109'),
					$elm$svg$Svg$Attributes$r('5.802')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('317.673'),
					$elm$svg$Svg$Attributes$cy('340.055'),
					$elm$svg$Svg$Attributes$r('5.802')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('94.389'),
					$elm$svg$Svg$Attributes$cy('316.633'),
					$elm$svg$Svg$Attributes$r('5.802')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('206.812'),
					$elm$svg$Svg$Attributes$cy('226.07'),
					$elm$svg$Svg$Attributes$r('5.802')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#A658D7'),
					$elm$svg$Svg$Attributes$strokeWidth('1.561'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M195.19 334.814c5.701 15.01 13.826 16.87 36.342 8.32')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A658D7'),
					$elm$svg$Svg$Attributes$cx('212.749'),
					$elm$svg$Svg$Attributes$cy('331.106'),
					$elm$svg$Svg$Attributes$r('5.802')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DAD0EF'),
					$elm$svg$Svg$Attributes$d('M48.504 154.266c-12.099-12.099-25.932 3.935-14.934 14.932 9.898 9.898 28.044-1.823 35.966 6.101-7.922-7.924 3.798-26.068-6.1-35.967-10.998-10.998-27.03 2.835-14.932 14.934z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#524260'),
					$elm$svg$Svg$Attributes$d('M299.698 305.101c0 3.344-.675 6.526-1.9 9.42a24.37 24.37 0 01-5.188 7.694 24.266 24.266 0 01-7.692 5.186 24.137 24.137 0 01-9.417 1.898c-3.344 0-6.526-.676-9.42-1.898a24.298 24.298 0 01-12.881-12.88l23.228-9.42-23.228-9.417a24.204 24.204 0 015.188-7.694 24.122 24.122 0 0117.113-7.089 24.14 24.14 0 0117.109 7.089 24.32 24.32 0 015.188 7.694 24.091 24.091 0 011.9 9.417zM169.725 305.101c0 3.344-.677 6.526-1.902 9.42a24.279 24.279 0 01-12.877 12.88 24.155 24.155 0 01-9.42 1.898c-3.343 0-6.524-.676-9.421-1.898a24.334 24.334 0 01-7.692-5.186 24.323 24.323 0 01-5.185-7.694l23.223-9.42-23.223-9.417a24.267 24.267 0 0112.877-12.88 24.138 24.138 0 019.421-1.903c3.341 0 6.523.68 9.42 1.903a24.245 24.245 0 017.692 5.186 24.212 24.212 0 015.185 7.694 24.11 24.11 0 011.902 9.417zM252.92 376.059c-8.229-10.036-27.909-11.536-38.908-11.536-3.521 0-5.965.152-6.592.198-.621-.046-3.067-.198-6.587-.198-10.999 0-30.676 1.5-38.908 11.536-3.416 4.172-4.541 9.344-3.335 15.363 5.857 29.29 46.12 39.284 47.831 39.695.154.04.31.057.469.057.149 0 .301-.017.451-.054 1.755-.411 43.052-10.403 48.914-39.698 1.206-6.02.082-11.192-3.335-15.363zm-.575 14.585c-5.042 25.212-40.944 35.313-45.45 36.482-56.583-47.086.374-58.419.374-58.419.104.008.207.008.309 0 .024-.003 2.586-.197 6.435-.197 8.288 0 28.366.983 35.819 10.074 2.667 3.25 3.487 7.19 2.513 12.06z')
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
							$elm$svg$Svg$Attributes$strokeWidth('11'),
							$elm$svg$Svg$Attributes$strokeLinecap('round'),
							$elm$svg$Svg$Attributes$strokeLinejoin('round'),
							$elm$svg$Svg$Attributes$d('M335.5 42.48v24.172s-41.254-6.153-43.999 45.847h-27.475c0 .001-9.526-84.309 71.474-70.019z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$strokeWidth('10.578'),
							$elm$svg$Svg$Attributes$strokeLinecap('round'),
							$elm$svg$Svg$Attributes$strokeLinejoin('round'),
							$elm$svg$Svg$Attributes$d('M187.099 154.024s-3.297-32.42-28.023-47.806c0 0 53.301 15.936 79.676-14.286 0 0 19.78 21.981 65.938 7.144 0 0-.551 39.014 56.047 54.949 0 0-37.913 0-34.067 52.202l-139.571-52.203z')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$path,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$strokeWidth('10.578'),
							$elm$svg$Svg$Attributes$d('M150.283 141.934C86.684 176.79 93.081 293.979 97.085 323c4.003 29.02 6.732 101.723-40.961 138.576-36.937 28.541-17.46 118.233 101.303 93.236 133.097-28.016 213.065-247.82 192.052-329.88-15.056-58.785-84.902-145.638-199.196-82.998z')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#013A18'),
					$elm$svg$Svg$Attributes$d('M89.029 125.878c-12.101-12.099-25.936 3.937-14.937 14.937 9.901 9.898 28.049-1.823 35.974 6.102-7.925-7.925 3.798-26.072-6.102-35.974-11-11-27.036 2.836-14.935 14.935zM287.266 222.358a21.19 21.19 0 01-1.672 8.281 21.345 21.345 0 01-11.324 11.323 21.221 21.221 0 01-8.279 1.67c-2.938 0-5.736-.595-8.281-1.67a21.368 21.368 0 01-11.324-11.323l20.42-8.281-20.42-8.28a21.285 21.285 0 014.56-6.763 21.289 21.289 0 016.764-4.56 21.237 21.237 0 018.281-1.673 21.22 21.22 0 0115.042 6.233 21.191 21.191 0 016.233 15.043zM189.334 222.358a21.19 21.19 0 01-1.672 8.281 21.365 21.365 0 01-11.321 11.323 21.243 21.243 0 01-8.282 1.67c-2.939 0-5.735-.595-8.281-1.67a21.346 21.346 0 01-11.321-11.323l20.416-8.281-20.416-8.28a21.351 21.351 0 0111.321-11.323 21.233 21.233 0 018.281-1.673c2.937 0 5.735.598 8.282 1.673a21.314 21.314 0 016.762 4.56 21.298 21.298 0 014.559 6.763 21.191 21.191 0 011.672 8.28zM269.15 284.824c-10.585-12.912-35.898-14.839-50.044-14.839-4.528 0-7.672.195-8.479.257-.798-.062-3.943-.257-8.472-.257-14.146 0-39.459 1.928-50.045 14.839-4.393 5.363-5.84 12.018-4.29 19.761 7.533 37.674 59.321 50.526 61.522 51.056.197.052.398.074.603.074.193 0 .389-.022.581-.071 2.259-.525 55.375-13.38 62.916-51.059 1.553-7.744.104-14.398-4.292-19.761zm-.738 18.758c-6.484 32.43-52.663 45.421-58.461 46.927-72.779-60.567.48-75.141.48-75.141.136.008.268.008.399 0 .028-.005 3.325-.256 8.275-.256 10.66 0 36.485 1.266 46.07 12.957 3.435 4.182 4.491 9.251 3.237 15.513z')
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
					$elm$svg$Svg$Attributes$d('M90.347 134.803c-13.06-13.059-27.992 4.248-16.12 16.12 10.685 10.684 30.271-1.968 38.825 6.586-8.553-8.554 4.1-28.14-6.585-38.826-11.872-11.872-29.18 3.061-16.12 16.12z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#013A18'),
					$elm$svg$Svg$Attributes$d('M328.764 181.506c0 1.708-.344 3.334-.971 4.813a12.415 12.415 0 01-6.581 6.58 12.338 12.338 0 01-4.813.971c-1.708 0-3.335-.345-4.813-.971a12.397 12.397 0 01-6.582-6.58l11.869-4.813-11.869-4.813a12.372 12.372 0 012.65-3.932 12.328 12.328 0 018.745-3.622 12.341 12.341 0 018.743 3.622 12.397 12.397 0 012.651 3.932c.627 1.477.971 3.106.971 4.813zM246.454 178.85a12.317 12.317 0 01-3.622 8.744 12.396 12.396 0 01-3.93 2.65c-1.479.625-3.106.97-4.813.97-1.708 0-3.334-.345-4.814-.97a12.404 12.404 0 01-6.58-6.581l11.867-4.813-11.867-4.813a12.386 12.386 0 016.58-6.582 12.344 12.344 0 014.814-.972 12.339 12.339 0 018.743 3.622 12.372 12.372 0 012.65 3.932c.626 1.478.972 3.106.972 4.813zM303.131 205.352c-3.791-4.624-12.858-5.315-17.925-5.315-1.622 0-2.747.07-3.037.092a44.533 44.533 0 00-3.034-.092c-5.066 0-14.133.691-17.925 5.315-1.573 1.921-2.092 4.304-1.536 7.078 2.698 13.494 21.246 18.098 22.035 18.287a.864.864 0 00.424.001c.81-.188 19.834-4.793 22.535-18.288.556-2.774.037-5.157-1.537-7.078zm-.264 6.719c-2.324 11.615-18.863 16.269-20.939 16.808-26.068-21.693.172-26.914.172-26.914a.854.854 0 00.143 0c.01-.001 1.191-.091 2.964-.091 3.819 0 13.069.453 16.502 4.642 1.229 1.496 1.606 3.312 1.158 5.555z')
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
					$elm$svg$Svg$Attributes$strokeWidth('15.283'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M168.182 152.253s130.303 1.809 178.884 109.096c48.582 107.287 35.305 21.97 22.265 76.921-10.998 46.358-75.704 136.566-227.13 119.359C5.373 442.082 24.024 251.055 53.707 240.73c14.215-4.944 114.475-88.477 114.475-88.477z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#B9F9BD'),
					$elm$svg$Svg$Attributes$stroke('#006A0B'),
					$elm$svg$Svg$Attributes$strokeWidth('15.461'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M285.244 302.587c-7.095 81.788-72.176 148.092-145.373 148.092-73.193 0-126.776-66.304-119.684-148.092 7.093-81.79 72.372-150.334 145.566-150.334 73.196 0 126.583 68.544 119.491 150.334z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00F027'),
					$elm$svg$Svg$Attributes$d('M40.917 156.567c-10.442-10.44-22.38 3.396-12.889 12.889 8.543 8.542 24.203-1.574 31.042 5.266-6.839-6.839 3.278-22.499-5.265-31.042-9.492-9.493-23.33 2.446-12.888 12.887z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006A0B'),
					$elm$svg$Svg$Attributes$d('M249.728 294.205a21.644 21.644 0 01-3.154 8.073 21.909 21.909 0 01-13.453 9.437 21.75 21.75 0 01-8.665.222 21.778 21.778 0 01-8.076-3.155 21.83 21.83 0 01-6.028-5.807 21.898 21.898 0 01-3.413-7.646l22.111-4.751-19.175-11.989a21.866 21.866 0 015.809-6.029 21.775 21.775 0 0116.313-3.633 21.795 21.795 0 018.074 3.157 21.827 21.827 0 016.026 5.809 21.877 21.877 0 013.411 7.645c.639 2.761.743 5.698.22 8.667zM107.39 264.487a21.75 21.75 0 01-8.966 14.103 21.892 21.892 0 01-7.643 3.411c-2.763.636-5.698.74-8.667.219a21.793 21.793 0 01-8.077-3.155 21.888 21.888 0 01-9.437-13.451l22.107-4.753-19.172-11.988a21.906 21.906 0 0113.45-9.441c2.766-.636 5.7-.744 8.67-.223a21.8 21.8 0 018.075 3.159 21.876 21.876 0 016.026 5.807 21.87 21.87 0 013.411 7.646c.639 2.761.743 5.698.223 8.666zM185.464 327.86c-5.182-9.197-20.741-13.166-29.553-14.71-2.821-.494-4.798-.716-5.31-.767-.491-.124-2.427-.59-5.249-1.085-8.811-1.544-24.79-3.106-32.795 3.778-3.322 2.861-4.95 6.847-4.83 11.842.579 24.292 31.432 37.953 32.746 38.523.117.053.241.089.367.111.121.021.246.028.37.021 1.466-.082 35.957-2.289 44.77-24.936 1.812-4.654 1.637-8.955-.516-12.777zm-2.507 11.604c-7.583 19.493-37.766 22.543-41.542 22.847-38.721-45.677 8.506-46.755 8.506-46.755.082.022.165.035.248.044.017.001 2.1.204 5.183.746 6.643 1.163 22.591 4.771 27.284 13.104 1.682 2.979 1.785 6.251.321 10.014z')
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
					$elm$svg$Svg$Attributes$d('M57.905 129.707c-11.776-11.775-25.24 3.83-14.535 14.535 9.635 9.634 27.296-1.774 35.008 5.938-7.712-7.713 3.697-25.373-5.938-35.009-10.705-10.704-26.311 2.761-14.535 14.536zM310.037 323.845a28.783 28.783 0 01-4.979 10.381 29.218 29.218 0 01-8.293 7.412 29.021 29.021 0 01-10.462 3.755c-3.724.571-7.622.419-11.503-.565s-7.381-2.707-10.382-4.979a29.026 29.026 0 01-7.411-8.289 29.116 29.116 0 01-3.761-10.467l29.76-4.102-24.211-17.783a29.018 29.018 0 018.292-7.409 28.906 28.906 0 0110.463-3.758 28.897 28.897 0 0111.504.563 28.93 28.93 0 0110.384 4.981 28.989 28.989 0 017.403 8.292 29.051 29.051 0 013.763 10.464 28.81 28.81 0 01-.567 11.504zM194.867 296.335a28.89 28.89 0 01-5.359 10.197 29.128 29.128 0 01-19.146 10.478 28.907 28.907 0 01-11.474-.99 28.89 28.89 0 01-10.197-5.354 29.13 29.13 0 01-7.104-8.552 29.108 29.108 0 01-3.374-10.593l29.884-3.019-23.543-18.649a29.04 29.04 0 018.554-7.105 29.111 29.111 0 0110.593-3.376 28.917 28.917 0 0111.478.982 28.948 28.948 0 0110.195 5.359 29.02 29.02 0 017.1 8.555 28.908 28.908 0 012.393 22.067zM249.71 369.872c-3.975-10.62-19.822-17.401-28.921-20.499-2.909-.989-4.972-1.551-5.505-1.689-.502-.215-2.479-1.029-5.389-2.021-9.092-3.096-25.786-7.401-35.418-1.42-3.999 2.487-6.384 6.446-7.084 11.764-3.406 25.87 27.068 45.469 28.366 46.292.116.073.241.136.374.178.122.044.255.072.387.082 1.572.156 38.526 3.523 51.622-19.047 2.695-4.638 3.218-9.231 1.568-13.64zm-4.579 11.895c-11.269 19.424-43.799 17.665-47.855 17.363-33.522-54.865 16.761-48.194 16.761-48.194.084.035.17.065.256.087.017.004 2.194.565 5.374 1.648 6.856 2.335 23.18 8.802 26.778 18.42 1.292 3.436.862 6.924-1.314 10.676z')
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
					$elm$svg$Svg$Attributes$strokeWidth('10.085'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M205.307 213.834c2.309-30.341 20.491-67.443 17.61-92.208 0 0 42.044-7.598 31.951 0-12.554 9.451-39.956 59.552-29.71 81.645l-19.851 10.563z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('o'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('75.985'),
					$elm$svg$Svg$Attributes$y1('177.959'),
					$elm$svg$Svg$Attributes$x2('323.775'),
					$elm$svg$Svg$Attributes$y2('425.75')
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
							$elm$svg$Svg$Attributes$offset('.012'),
							$elm$svg$Svg$Attributes$stopColor('#fe4f26')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.478'),
							$elm$svg$Svg$Attributes$stopColor('#da322c')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.54'),
							$elm$svg$Svg$Attributes$stopColor('#dc3a2f')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.634'),
							$elm$svg$Svg$Attributes$stopColor('#e04f39')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.75'),
							$elm$svg$Svg$Attributes$stopColor('#e77248')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('.881'),
							$elm$svg$Svg$Attributes$stopColor('#f1a15e')
						]),
					_List_Nil),
					A2(
					$elm$svg$Svg$stop,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$offset('1'),
							$elm$svg$Svg$Attributes$stopColor('#fbd374')
						]),
					_List_Nil)
				])),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('url(#o)'),
					$elm$svg$Svg$Attributes$stroke('#FFEE41'),
					$elm$svg$Svg$Attributes$strokeWidth('10.085'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M364.163 223.438c64.418 122.134-62.513 238.807-108.588 250.695-44.665 11.528-94.534-19.02-117.753 7.617 0 0 10.462-11.623-55.62-47.958C-3.472 386.688-1.484 79.279 222.538 166.93c0 0 88.805-43.639 141.625 56.508z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFEE41'),
					$elm$svg$Svg$Attributes$d('M322.437 313.489a37.575 37.575 0 01-4.643 14.227 37.812 37.812 0 01-9.407 10.966 37.85 37.85 0 01-12.836 6.634 37.67 37.67 0 01-14.915 1.238 37.659 37.659 0 01-14.231-4.639 37.803 37.803 0 01-17.595-22.247l37.625-10.378-34.226-18.764a37.884 37.884 0 019.408-10.963 37.854 37.854 0 0112.836-6.636 37.615 37.615 0 0114.916-1.239 37.627 37.627 0 0114.229 4.64 37.812 37.812 0 0117.597 22.245 37.646 37.646 0 011.242 14.916zM159.439 294.476a37.535 37.535 0 01-4.643 14.226 37.745 37.745 0 01-9.409 10.966 37.817 37.817 0 01-12.835 6.634c-4.697 1.368-9.747 1.842-14.914 1.239s-9.97-2.225-14.23-4.638a37.812 37.812 0 01-10.961-9.411 37.699 37.699 0 01-6.633-12.837l37.626-10.378-34.228-18.764a37.752 37.752 0 019.41-10.962 37.813 37.813 0 0112.833-6.636 37.62 37.62 0 0114.917-1.239 37.608 37.608 0 0114.229 4.639 37.797 37.797 0 0110.963 9.412 37.757 37.757 0 016.633 12.834 37.528 37.528 0 011.242 14.915zM219.618 371.248c-3.941-7.119-15.91-10.269-22.694-11.515a65.438 65.438 0 00-4.085-.626 63.518 63.518 0 00-4.041-.863c-6.784-1.244-19.092-2.546-25.301 2.713-2.581 2.187-3.859 5.25-3.797 9.101.299 18.729 24.002 29.446 25.011 29.894a1.317 1.317 0 00.568.106c1.13-.056 27.734-1.547 34.659-18.953 1.425-3.58 1.32-6.895-.32-9.857zm-2.005 8.931c-5.963 14.979-29.246 17.149-32.159 17.361-29.576-35.439 6.838-35.988 6.838-35.988.063.017.126.026.19.034.014 0 1.617.173 3.989.607 5.112.938 17.389 3.814 20.959 10.27 1.274 2.301 1.338 4.828.183 7.716zM35.365 155.811c-11.114-11.114-23.822 3.614-13.719 13.719 9.094 9.093 25.763-1.674 33.042 5.604-7.279-7.278 3.489-23.948-5.605-33.042-10.102-10.104-24.832 2.605-13.718 13.719z')
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
					$elm$svg$Svg$Attributes$strokeWidth('7.673'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M168.671 150.111s30.969-53.979 66.366-34.152c0 0 9.28 1.354 13.845-5.886 0 0-3.79 75.036-80.211 40.038z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00FF4E'),
					$elm$svg$Svg$Attributes$stroke('#009A4F'),
					$elm$svg$Svg$Attributes$strokeWidth('7.537'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M165.463 146.394s-53.858-26.989-69.553 10.377c0 0-6.276 6.58-13.813 3.203.001 0 45.093 60.558 83.366-13.58z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#623900'),
					$elm$svg$Svg$Attributes$stroke('#623900'),
					$elm$svg$Svg$Attributes$strokeWidth('11.332'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M179.096 230.692c-13.72-31.315-15.26-77.715-31.186-100.761 0 0 14.597 4.458 25.971-4.035 11.371-8.494-2.49 67.333 19.333 83.842l-14.118 20.954z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF7E09'),
					$elm$svg$Svg$Attributes$stroke('#FFC83B'),
					$elm$svg$Svg$Attributes$strokeWidth('11.332'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('211.615'),
					$elm$svg$Svg$Attributes$cy('329.651'),
					$elm$svg$Svg$Attributes$rx('174.213'),
					$elm$svg$Svg$Attributes$ry('160.274')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFC83B'),
					$elm$svg$Svg$Attributes$d('M315.177 314.129c0 3.98-.809 7.772-2.266 11.22a28.926 28.926 0 01-15.342 15.346 28.788 28.788 0 01-11.222 2.263c-3.982 0-7.772-.806-11.225-2.263a28.928 28.928 0 01-15.342-15.346l27.67-11.22-27.67-11.224a28.96 28.96 0 0115.342-15.344 28.807 28.807 0 0111.225-2.264c3.978 0 7.771.808 11.222 2.264a28.96 28.96 0 0115.342 15.344 28.778 28.778 0 012.266 11.224zM157.328 314.129c0 3.98-.806 7.772-2.265 11.22a28.895 28.895 0 01-6.178 9.167 28.961 28.961 0 01-9.165 6.179c-3.449 1.457-7.242 2.263-11.222 2.263s-7.772-.806-11.224-2.263a28.932 28.932 0 01-15.34-15.346l27.668-11.22-27.668-11.224a28.835 28.835 0 016.178-9.162 28.94 28.94 0 019.162-6.182c3.451-1.456 7.244-2.264 11.224-2.264s7.773.808 11.222 2.264a28.948 28.948 0 0115.343 15.344 28.741 28.741 0 012.265 11.224zM34.029 203.472c-12.681-12.681-27.181 4.124-15.654 15.653 10.376 10.375 29.396-1.91 37.701 6.394-8.305-8.303 3.982-27.325-6.395-37.7-11.527-11.528-28.332 2.972-15.652 15.653zM237.521 375.828c-5.519-6.734-18.721-7.738-26.1-7.738-2.36 0-3.999.104-4.42.131a68.66 68.66 0 00-4.418-.131c-7.379 0-20.58 1.004-26.099 7.738-2.293 2.798-3.048 6.267-2.239 10.307 3.928 19.648 30.938 26.353 32.083 26.628.106.023.212.037.314.037.101 0 .204-.012.305-.034 1.179-.278 28.882-6.979 32.812-26.631.808-4.04.057-7.509-2.238-10.307zm-.384 9.78c-3.384 16.915-27.466 23.687-30.489 24.475-37.956-31.586.251-39.186.251-39.186.07.004.14.004.206 0 .018-.003 1.736-.132 4.317-.132 5.56 0 19.032.657 24.032 6.761 1.784 2.175 2.336 4.824 1.683 8.082z')
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
					$elm$svg$Svg$Attributes$x1('37.773'),
					$elm$svg$Svg$Attributes$y1('115.942'),
					$elm$svg$Svg$Attributes$x2('402.435'),
					$elm$svg$Svg$Attributes$y2('480.604')
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
					$elm$svg$Svg$Attributes$strokeWidth('9.795'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M62.689 91.026s13.313 5.581 25.022 13.901c17.607 12.511 21.315 35.215 103.792 41.702 82.478 6.487 76.915 111.207 111.204 138.081 34.289 26.873 97.305 41.701 71.356 224.264 0 0-25.947-35.214-96.378-47.262s-87.11-36.142-102.865-80.624c-15.754-44.482-43.555-27.803-75.991-81.088-32.432-53.286-30.579-84.794-22.239-123.716 8.341-38.923-20.387-69.504-13.901-85.258z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#9CFF99'),
					$elm$svg$Svg$Attributes$stroke('#00A900'),
					$elm$svg$Svg$Attributes$strokeWidth('9.795'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M83.267 111.46s23.906 35.37 89.703 42.784c49.143 5.537 42.627 54.577 66.722 80.524 24.095 25.948 25.362 20.025 34.604 44.432 15.439 40.775 30.115 48.293 41.387 57.653 23.168 19.238 31.508 35.907 32.436 69.269s11.447 77.881 27.199 93.635c0 0-44.555-39.778-96.703-48.235-34.287-5.56-43.556-19.462-52.822-37.07-9.267-17.606-4.633-30.581-29.655-44.481-25.021-13.9-43.555-37.07-45.408-64.871-1.789-26.831-13.901-38.923-27.802-50.043-13.9-11.121-34.289-27.601-29.232-60.229 7.149-46.134-27.417-96.237-27.417-96.237l16.988 12.869z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$stroke('#2DD900'),
					$elm$svg$Svg$Attributes$strokeWidth('4.517'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('156.751'),
					$elm$svg$Svg$Attributes$cy('207.311'),
					$elm$svg$Svg$Attributes$rx('51.432'),
					$elm$svg$Svg$Attributes$ry('46.798')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$stroke('#2DD900'),
					$elm$svg$Svg$Attributes$strokeWidth('4.517'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('215.523'),
					$elm$svg$Svg$Attributes$cy('302.465'),
					$elm$svg$Svg$Attributes$rx('51.433'),
					$elm$svg$Svg$Attributes$ry('46.799')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$ellipse,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#90FF72'),
					$elm$svg$Svg$Attributes$stroke('#2DD900'),
					$elm$svg$Svg$Attributes$strokeWidth('4.517'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('281.292'),
					$elm$svg$Svg$Attributes$cy('390.624'),
					$elm$svg$Svg$Attributes$rx('51.432'),
					$elm$svg$Svg$Attributes$ry('46.799')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#00A900'),
					$elm$svg$Svg$Attributes$d('M37.339 158.716c-11.184-11.183-23.971 3.639-13.805 13.805 9.15 9.15 25.924-1.685 33.248 5.64-7.324-7.325 3.512-24.098-5.638-33.249-10.167-10.166-24.989 2.621-13.805 13.804zM197.354 196.657c0 2.39-.481 4.666-1.358 6.735a17.385 17.385 0 01-9.209 9.209 17.26 17.26 0 01-6.734 1.358c-2.39 0-4.667-.483-6.736-1.358a17.323 17.323 0 01-5.501-3.708 17.388 17.388 0 01-3.709-5.501l16.61-6.735-16.61-6.734a17.31 17.31 0 013.709-5.501 17.272 17.272 0 0112.237-5.07 17.24 17.24 0 0112.233 5.07 17.33 17.33 0 013.71 5.501 17.202 17.202 0 011.358 6.734zM150.742 192.939a17.22 17.22 0 01-1.36 6.736 17.359 17.359 0 01-9.208 9.207 17.244 17.244 0 01-6.736 1.358c-2.39 0-4.666-.482-6.737-1.358a17.417 17.417 0 01-5.5-3.707 17.367 17.367 0 01-3.707-5.5l16.606-6.736-16.606-6.734a17.337 17.337 0 019.207-9.21 17.269 17.269 0 016.737-1.361c2.389 0 4.666.487 6.736 1.361a17.348 17.348 0 019.208 9.21 17.214 17.214 0 011.36 6.734zM173.431 221.838c-3.018-3.68-10.233-4.231-14.264-4.231-1.292 0-2.187.056-2.417.074a34.296 34.296 0 00-2.415-.074c-4.031 0-11.247.551-14.264 4.231-1.252 1.527-1.665 3.425-1.222 5.631 2.146 10.738 16.907 14.402 17.534 14.553a.667.667 0 00.338.001c.645-.149 15.784-3.813 17.933-14.554.442-2.206.029-4.104-1.223-5.631zm-.211 5.347c-1.849 9.242-15.01 12.946-16.663 13.375-20.745-17.264.137-21.418.137-21.418a.71.71 0 00.113 0c.008-.001.948-.072 2.359-.072 3.039 0 10.399.361 13.131 3.693.979 1.192 1.28 2.636.923 4.422zM256.125 293.211c0 2.39-.48 4.666-1.357 6.735a17.427 17.427 0 01-3.711 5.501 17.297 17.297 0 01-5.498 3.707 17.281 17.281 0 01-6.734 1.358c-2.391 0-4.667-.484-6.736-1.358a17.304 17.304 0 01-5.501-3.707 17.402 17.402 0 01-3.71-5.501l16.609-6.735-16.609-6.734a17.306 17.306 0 013.71-5.502 17.241 17.241 0 015.501-3.708 17.239 17.239 0 016.736-1.361 17.243 17.243 0 0112.232 5.069 17.342 17.342 0 013.711 5.502 17.201 17.201 0 011.357 6.734zM209.514 289.494a17.241 17.241 0 01-5.067 12.236 17.254 17.254 0 01-12.236 5.066 17.245 17.245 0 01-12.236-5.066 17.37 17.37 0 01-3.708-5.5l16.606-6.736-16.606-6.734a17.356 17.356 0 019.208-9.21 17.271 17.271 0 016.736-1.361c2.389 0 4.666.487 6.737 1.361a17.33 17.33 0 015.499 3.709 17.25 17.25 0 015.067 12.235zM232.202 318.392c-3.018-3.679-10.232-4.229-14.263-4.229a35.57 35.57 0 00-2.42.073 34.484 34.484 0 00-2.413-.073c-4.032 0-11.247.551-14.264 4.229-1.251 1.53-1.665 3.426-1.221 5.633 2.146 10.737 16.906 14.402 17.533 14.554a.763.763 0 00.339 0c.645-.151 15.782-3.815 17.932-14.554.442-2.208.029-4.103-1.223-5.633zm-.211 5.347c-1.85 9.242-15.01 12.945-16.662 13.375-20.745-17.264.137-21.418.137-21.418a.723.723 0 00.114 0c.008-.001.948-.072 2.359-.072 3.039 0 10.398.36 13.128 3.692.98 1.194 1.281 2.637.924 4.423zM321.895 381.37c0 2.389-.481 4.665-1.359 6.733a17.379 17.379 0 01-9.207 9.21 17.271 17.271 0 01-6.735 1.357 17.245 17.245 0 01-12.238-5.065 17.356 17.356 0 01-3.708-5.502l16.608-6.733-16.608-6.735a17.334 17.334 0 013.708-5.502 17.269 17.269 0 0112.238-5.069c2.387 0 4.664.486 6.735 1.36a17.293 17.293 0 015.497 3.709 17.356 17.356 0 013.71 5.502 17.203 17.203 0 011.359 6.735zM275.283 377.652c0 2.392-.484 4.665-1.359 6.736a17.353 17.353 0 01-9.209 9.208 17.256 17.256 0 01-6.735 1.357c-2.39 0-4.665-.482-6.736-1.357a17.356 17.356 0 01-9.208-9.208l16.606-6.736-16.606-6.734a17.369 17.369 0 019.208-9.211 17.303 17.303 0 016.736-1.36c2.389 0 4.666.487 6.735 1.36a17.342 17.342 0 015.5 3.71 17.25 17.25 0 015.068 12.235zM297.972 406.551c-3.018-3.68-10.232-4.229-14.265-4.229-1.293 0-2.187.054-2.418.072a34.187 34.187 0 00-2.413-.072c-4.032 0-11.247.549-14.265 4.229-1.251 1.529-1.663 3.424-1.222 5.631 2.146 10.739 16.907 14.403 17.534 14.555a.707.707 0 00.338 0c.645-.151 15.782-3.814 17.932-14.555.443-2.207.031-4.102-1.221-5.631zm-.211 5.347c-1.851 9.241-15.01 12.944-16.662 13.374-20.745-17.264.136-21.419.136-21.419a.553.553 0 00.115 0c.007 0 .948-.072 2.357-.072 3.041 0 10.4.362 13.13 3.694.979 1.192 1.279 2.637.924 4.423z')
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
					$elm$svg$Svg$Attributes$d('M187.609 133.647s9.09-45.688 34.771-58.313c25.677-12.625 27.313 7.101 3.686 24.903-13.011 9.804-21.938 30.224-16.262 32.122 5.677 1.897-22.195 1.288-22.195 1.288z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FFF100'),
					$elm$svg$Svg$Attributes$stroke('#FC0'),
					$elm$svg$Svg$Attributes$strokeWidth('11.75'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M106.42 164.219c28.677-8.856 40.018-14.452 32.236-27.79-7.781-13.339 16.676-17.785 21.122-13.339 4.446 4.445 17.785-11.116 32.236-7.782 14.451 3.335 20.009.167 33.347-.473 13.34-.639 14.45 11.588 27.79 10.478 13.339-1.112 14.451 6.172 14.451 14.203 0 8.029 8.893 15.809 37.795 24.703 28.901 8.893 117.83 28.9 62.249 153.402-55.579 124.5-23.011 49.606-57.805 146.731-33.597 93.794-167.762 59.082-181.001 53.183-12.553-5.594-45.765-28.729-61.327-115.433-15.562-86.705-112.271-191.196 38.907-237.883z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FC0'),
					$elm$svg$Svg$Attributes$d('M32.427 151.014c-11.483-11.482-24.613 3.736-14.174 14.175 9.395 9.394 26.617-1.73 34.137 5.79-7.52-7.52 3.605-24.743-5.789-34.138-10.439-10.439-25.657 2.691-14.174 14.173zM302.104 283.853a22.926 22.926 0 01-6.734 16.262 23.086 23.086 0 01-7.312 4.929 22.977 22.977 0 01-8.953 1.806 22.97 22.97 0 01-8.953-1.806 23.074 23.074 0 01-12.239-12.241l22.071-8.95-22.071-8.953a23.099 23.099 0 014.927-7.31 23.094 23.094 0 017.312-4.93 22.95 22.95 0 018.953-1.805c3.174 0 6.199.643 8.953 1.805a23.127 23.127 0 017.312 4.93 23.11 23.11 0 014.927 7.31 22.923 22.923 0 011.807 8.953zM150.41 283.853a22.89 22.89 0 01-1.808 8.95 23.052 23.052 0 01-12.24 12.241 22.956 22.956 0 01-8.951 1.806c-3.175 0-6.201-.644-8.954-1.806a23.05 23.05 0 01-7.309-4.929 23.01 23.01 0 01-4.928-7.312l22.073-8.95-22.073-8.953a23.052 23.052 0 014.928-7.31 23.07 23.07 0 017.309-4.93 22.956 22.956 0 018.954-1.805c3.174 0 6.2.643 8.951 1.805a23.083 23.083 0 0112.24 12.24 22.888 22.888 0 011.808 8.953zM267.493 345.958c-11.46-16.297-38.865-18.726-54.177-18.726-4.9 0-8.305.248-9.175.312-.869-.063-4.272-.312-9.173-.312-15.316 0-42.719 2.429-54.173 18.726-4.762 6.776-6.327 15.173-4.646 24.952 8.153 47.557 64.216 63.791 66.596 64.459.217.055.437.088.652.088.21 0 .425-.024.632-.085 2.444-.671 59.951-16.892 68.11-64.462 1.677-9.779.116-18.176-4.646-24.952zm-.801 23.681c-7.023 40.937-57.012 57.341-63.287 59.24-78.786-76.452.522-94.859.522-94.859.144.012.289.012.428 0 .032-.006 3.602-.313 8.961-.313 11.537 0 39.502 1.592 49.887 16.364 3.698 5.269 4.848 11.677 3.489 19.568z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FFF'),
					$elm$svg$Svg$Attributes$strokeWidth('11.75'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M44.16 249.433c-3.668-30.607 28.424-59.576 71.751-64.768')
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
					$elm$svg$Svg$Attributes$d('M172.374 313.834s-3.261 23.373-7.457.303c-1.879-10.332-16.223-29.866-25.618-23.035-9.396 6.832-51.009 24.244-69.383-11.285-18.374-35.527-19.779-11.452-34.825-13.898-5.975-.971-37.372-17.02-21.774-39.823 15.598-22.802 12.058-20.644 32.005-15.813 19.946 4.831 11.653-.877 17.748-9.589 6.095-8.713 36.11-13.965 43.629 12.331 7.519 26.297 17.622 17.018 32.058 15.222 14.438-1.798 23.019 1.078 27.5 12.182 4.483 11.102-8.278 14.443 1.991 39.016 10.271 24.571 4.126 34.389 4.126 34.389z')
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
					$elm$svg$Svg$Attributes$d('M185.208 323.312s-21.468-46.451-8.197-78.848c13.272-32.398-37.082-44.499-40.985-56.208-3.903-11.71 5.855-7.807-12.881-28.885-18.736-21.078-5.465-29.275-19.126-43.327-13.662-14.052-23.24-18.465-21.859-28.885 1.544-11.651 10.827-37.764 39.712-33.471 28.885 4.294 38.355 4.585 38.746 35.423.391 30.836 5.074 39.424 24.591 34.349 19.518-5.074 30.056-1.171 32.007 15.223 1.952 16.395-11.319 28.885-8.587 37.863 2.731 8.978 8.978 16.785 15.614 20.297 6.634 3.513 9.367 12.1 0 20.297-9.369 8.197-18.736 14.121-27.714 33.798-8.979 19.678-3.001 43.228-7.279 54.158-4.279 10.931 0 0 5.465 18.736s-9.507-.52-9.507-.52z')
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
					$elm$svg$Svg$Attributes$d('M201.028 328.047s-19.651-56.081 9.574-60.084c29.227-4.003 57.179-24.287 50.131-60.501-7.047-36.213-12.914-38.229 14.164-58.133 27.08-19.904-7.842-85.751 36.541-69.752 0 0 9.994-35.74 52.854-23.235 42.861 12.504 2.276 37.668 2.276 37.668s-19.841 4.072 6.108 29.764c25.951 25.691-36.016 27.538-34.295 43.416 1.723 15.878-1.037 35.787-18.305 47.675-17.269 11.888-4.684 15.966-12.3 22.817-7.615 6.852-23.401-1.236-27.078 19.904-3.677 21.139-12.881 17.667-32.543 18.335-19.663.667-47.838 8.993-44.799 48.408l-2.328 3.718z')
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
					$elm$svg$Svg$Attributes$d('M204.54 310.88s6.989-32.014 47.378-29.036c37.341 2.753 23.168-3.796 30.909-14.181 11.298-15.157 25.285-19.623 33.442-16.364s12.224-10.835 14.617-22.12c2.395-11.285 44.588-27.494 32.249 18.99 0 0 30.663-4.145 27.638 30.772-3.026 34.918-40.564 26.372-46.074 22.613-5.509-3.76-20.828-8.101-29.865 10.936-9.038 19.036-42.218-12.312-54.897-16.615-12.68-4.304-41.893-2.08-41.464 16.9l-13.933-1.895z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('q'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('134.147'),
					$elm$svg$Svg$Attributes$y1('348.707'),
					$elm$svg$Svg$Attributes$x2('269.675'),
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
					$elm$svg$Svg$Attributes$x1('129.929'),
					$elm$svg$Svg$Attributes$y1('344.488'),
					$elm$svg$Svg$Attributes$x2('273.894'),
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
					$elm$svg$Svg$Attributes$d('M270.066 383.662a69.23 69.23 0 01-1.445 14.104 68.506 68.506 0 01-4.143 13.136c-1.799 4.186-4.001 8.163-6.556 11.887s-5.466 7.19-8.684 10.355a71.147 71.147 0 01-10.523 8.546c-3.783 2.515-23.743 9.552-23.058 27.641.656 17.311-8.696 23.303-14.127 45.391-4.64 18.871 9.93 32.063 5.02 32.063-14.25-4.697-20.404-19.432-18.137-35.302s12.309-38.865 6.154-46.963-15.37-11.118-24.663-16.957c-9.292-5.837-18.012-11.251-21.229-14.419-3.218-3.165-6.128-6.632-8.684-10.355s-4.757-7.701-6.556-11.887a68.65 68.65 0 01-4.144-13.136 69.238 69.238 0 01-1.445-14.104c0-4.831.498-9.549 1.445-14.104a68.557 68.557 0 014.144-13.136 69.46 69.46 0 016.556-11.887 70.486 70.486 0 018.684-10.356 71.352 71.352 0 0135.951-19.075 72.48 72.48 0 0114.331-1.422c4.91 0 9.702.489 14.33 1.422a71.313 71.313 0 0135.951 19.075 70.476 70.476 0 018.684 10.356 69.528 69.528 0 016.556 11.887 68.554 68.554 0 014.143 13.136 69.238 69.238 0 011.445 14.104z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M65.144 152.238c-9.675-9.674-20.737 3.147-11.942 11.942 7.916 7.915 22.426-1.458 28.762 4.878-6.336-6.336 3.037-20.847-4.878-28.762-8.796-8.795-21.617 2.267-11.942 11.942z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#6D0005'),
					$elm$svg$Svg$Attributes$d('M244.416 371.682a13.165 13.165 0 01-3.866 9.337 13.278 13.278 0 01-4.196 2.829 13.197 13.197 0 01-5.14 1.037c-1.824 0-3.559-.37-5.141-1.037a13.249 13.249 0 01-7.026-7.026l12.671-5.14-12.671-5.139a13.26 13.26 0 012.829-4.197 13.271 13.271 0 014.197-2.829 13.173 13.173 0 015.141-1.037c1.821 0 3.558.369 5.14 1.037a13.24 13.24 0 017.024 7.026 13.16 13.16 0 011.038 5.139zM182.445 371.682c0 1.823-.369 3.561-1.038 5.14a13.216 13.216 0 01-2.829 4.197 13.26 13.26 0 01-4.197 2.829 13.181 13.181 0 01-5.139 1.037c-1.823 0-3.561-.37-5.141-1.037a13.251 13.251 0 01-7.025-7.026l12.672-5.14-12.672-5.139a13.262 13.262 0 017.025-7.026 13.177 13.177 0 015.141-1.037 13.163 13.163 0 019.336 3.866 13.227 13.227 0 012.829 4.197 13.125 13.125 0 011.038 5.139zM222.129 399.455c-3.868-5.501-13.121-6.32-18.292-6.32-1.653 0-2.804.082-3.099.104a42.14 42.14 0 00-3.097-.104c-5.17 0-14.422.819-18.29 6.32-1.608 2.291-2.136 5.125-1.569 8.427 2.753 16.058 21.683 21.537 22.487 21.765a.89.89 0 00.433 0c.825-.228 20.239-5.704 22.996-21.765.565-3.302.039-6.136-1.569-8.427zm-.27 7.997c-2.373 13.819-19.25 19.36-21.369 20.002-26.6-25.813.176-32.029.176-32.029a.586.586 0 00.145 0 38.699 38.699 0 013.026-.105c3.897 0 13.337.538 16.843 5.525 1.248 1.78 1.636 3.943 1.179 6.607z')
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
					$elm$svg$Svg$Attributes$d('M130.179 193.5s10.788-23.896 0-50.265-49.143-59.292 0-47.306c49.143 11.985 22.774 35.678 40.753 9.308 17.979-26.37 11.857-25.659 28.702-12.301s9.517 22.73 31.229 2.501c15.337-14.288 5.927-9.432 26.075-18.616 28.796-13.124 34.76-7.323 17.979 16.649s-34.95 32.107-14.573 29.711c20.378-2.397 25.653 4.476 7.674 15.263-17.979 10.788-21.575 45.055-5.993 55.055H130.179z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('s'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('63.095'),
					$elm$svg$Svg$Attributes$y1('189.102'),
					$elm$svg$Svg$Attributes$x2('322.298'),
					$elm$svg$Svg$Attributes$y2('448.304'),
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
					$elm$svg$Svg$Attributes$d('M67.879 437.289c-43.924-69.972-105.922-232.58 55.132-271.203 161.053-38.625 257.768 44.348 257.702 119.861-.047 52.219-33.164 175.355-135.813 230.738-102.646 55.383-177.021-79.396-177.021-79.396z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF1200'),
					$elm$svg$Svg$Attributes$d('M42.196 158.358c-9.924-9.923-21.27 3.228-12.249 12.249 8.119 8.118 23.002-1.496 29.501 5.003-6.499-6.499 3.115-21.382-5.003-29.501-9.021-9.021-22.173 2.326-12.249 12.249z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A20004'),
					$elm$svg$Svg$Attributes$d('M311.27 305.381a32.976 32.976 0 01-9.682 23.379 33.287 33.287 0 01-10.507 7.084 33.045 33.045 0 01-12.869 2.596c-4.567 0-8.91-.926-12.871-2.596a33.162 33.162 0 01-17.593-17.593l31.727-12.87-31.727-12.867a33.185 33.185 0 017.084-10.509 33.232 33.232 0 0110.509-7.083 32.997 32.997 0 0112.871-2.597c4.561 0 8.909.925 12.869 2.597a33.146 33.146 0 0117.589 17.592 32.968 32.968 0 012.6 12.867zM156.102 305.381a32.92 32.92 0 01-2.598 12.87 33.113 33.113 0 01-7.084 10.509 33.235 33.235 0 01-10.508 7.084 33.004 33.004 0 01-12.866 2.596c-4.565 0-8.916-.926-12.873-2.596a33.222 33.222 0 01-10.505-7.084 33.099 33.099 0 01-7.085-10.509l31.729-12.87-31.729-12.867a33.17 33.17 0 0117.59-17.592 33 33 0 0112.873-2.597c4.561 0 8.913.925 12.866 2.597a33.172 33.172 0 0117.592 17.592 32.913 32.913 0 012.598 12.867zM243.063 371.826c-7.443-10.584-25.248-12.16-35.196-12.16-3.184 0-5.396.156-5.962.2-.564-.044-2.773-.2-5.958-.2-9.949 0-27.75 1.576-35.193 12.16-3.093 4.407-4.108 9.859-3.018 16.213 5.296 30.896 41.719 41.44 43.265 41.878.138.032.28.053.424.053.134 0 .275-.017.41-.053 1.588-.438 38.944-10.975 44.249-41.878 1.086-6.353.074-11.806-3.021-16.213zm-.518 15.386c-4.566 26.592-37.039 37.253-41.116 38.486-51.181-49.666.339-61.627.339-61.627.094.009.189.009.278 0 .021-.002 2.342-.203 5.821-.203 7.498 0 25.662 1.034 32.408 10.634 2.405 3.424 3.151 7.584 2.27 12.71z')
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
					$elm$svg$Svg$Attributes$strokeWidth('12.775'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M380.402 356.175c-7.171 65.122-68.346 111.813-136.098 104.349L127.29 447.633c-67.753-7.464-116.862-66.305-109.687-131.426l1.998-18.14c7.174-65.119 67.913-111.859 135.666-104.395l117.014 12.891c67.754 7.464 117.294 66.354 110.121 131.474l-2 18.138z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#22E200'),
					$elm$svg$Svg$Attributes$d('M225.135 194.089c1.899-10.739 1.558-28.258 2.242-39.884.912-15.512-32.851-15.512-32.851-15.512 15.454 27.622 5.541 45.533-1.201 53.385-15.324-1.011-31.141-1.084-39.493 3.328-10.572 5.585-6.383 13.963 18.75 15.16 0 0-22.94 9.974-20.945 26.531 1.995 16.557 35.516 3.714 42.689-20.346 0 0 11.966 3.589 15.159 17.952 3.192 14.363 18.751 18.751 27.129 8.578s-6.384-17.753-.799-26.332c5.828-8.948 25.934 10.174 33.912-6.183 5.206-10.671-23.795-14.974-44.592-16.677z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#E81021'),
					$elm$svg$Svg$Attributes$d('M51.324 181.639c-9.355-9.354-20.052 3.043-11.548 11.547 7.654 7.653 21.685-1.41 27.811 4.717-6.126-6.127 2.937-20.158-4.716-27.812-8.505-8.503-20.903 2.194-11.547 11.548z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#A20004'),
					$elm$svg$Svg$Attributes$d('M320.629 316.919a36.835 36.835 0 01-5.059 13.773 37.034 37.034 0 01-9.608 10.406 37.223 37.223 0 01-12.811 6.039 36.923 36.923 0 01-14.656.68 36.859 36.859 0 01-13.776-5.055 37.224 37.224 0 01-10.405-9.611 37.064 37.064 0 01-6.039-12.813l37.234-8.823-32.859-19.605a37.082 37.082 0 019.611-10.405 37.154 37.154 0 0112.812-6.038 36.858 36.858 0 0114.659-.681 36.86 36.86 0 0113.774 5.056 37.064 37.064 0 0116.439 22.422 36.873 36.873 0 01.684 14.655zM150.443 304.246a36.788 36.788 0 01-5.347 13.666 37.042 37.042 0 01-9.829 10.198 37.146 37.146 0 01-12.936 5.769 36.9 36.9 0 01-14.665.371 36.93 36.93 0 01-13.668-5.345 37.113 37.113 0 01-10.195-9.828 36.997 36.997 0 01-5.768-12.938l37.414-8.036-32.44-20.294a37.076 37.076 0 0122.762-15.966 36.88 36.88 0 0114.672-.372 36.829 36.829 0 0113.661 5.345 37.072 37.072 0 0115.966 22.765 36.79 36.79 0 01.373 14.665zM223.949 379.294c-4.017-8.322-16.381-11.499-23.392-12.653a56.894 56.894 0 00-4.224-.552 56.1 56.1 0 00-4.176-.832c-7.011-1.156-19.738-2.111-26.212 4.483-2.692 2.747-4.04 6.471-4.009 11.075.146 22.389 24.59 34.047 25.628 34.535.094.038.191.069.292.085.095.017.196.021.295.012 1.17-.125 28.719-3.214 36.044-24.377 1.503-4.351 1.423-8.31-.246-11.776zm-2.151 10.783c-6.305 18.21-30.426 21.952-33.442 22.349-30.303-40.941 7.393-43.389 7.393-43.389.064.017.132.027.195.031.014 0 1.674.128 4.125.532 5.284.87 17.964 3.708 21.604 11.256 1.298 2.693 1.341 5.711.125 9.221z')
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
					$elm$svg$Svg$Attributes$d('M45.676 191.114c-8.985-8.984-19.257 2.923-11.09 11.09 7.351 7.351 20.826-1.354 26.71 4.53-5.884-5.884 2.82-19.359-4.53-26.71-8.168-8.167-20.075 2.106-11.09 11.09zM264.868 260.818a21.996 21.996 0 01-6.458 15.595 22.19 22.19 0 01-7.01 4.726 22.042 22.042 0 01-8.584 1.732c-3.047 0-5.944-.618-8.587-1.732a22.124 22.124 0 01-11.736-11.736l21.164-8.585-21.164-8.583a22.106 22.106 0 0111.736-11.736 22.024 22.024 0 018.587-1.732c3.042 0 5.942.617 8.584 1.732a22.171 22.171 0 017.01 4.725 22.137 22.137 0 014.725 7.011 21.997 21.997 0 011.733 8.583zM161.357 260.818a21.96 21.96 0 01-1.733 8.585 22.08 22.08 0 01-4.726 7.01 22.168 22.168 0 01-7.01 4.726 22.015 22.015 0 01-8.583 1.732c-3.045 0-5.947-.618-8.587-1.732a22.132 22.132 0 01-11.735-11.736l21.167-8.585-21.167-8.583a22.129 22.129 0 0111.735-11.736 22.02 22.02 0 018.587-1.732c3.043 0 5.946.617 8.583 1.732a22.123 22.123 0 0111.736 11.736 21.943 21.943 0 011.733 8.583zM233.879 301.037c-7.59-10.792-25.745-12.397-35.89-12.397-3.245 0-5.501.159-6.078.203-.576-.044-2.828-.203-6.075-.203-10.146 0-28.295 1.605-35.885 12.397-3.154 4.494-4.189 10.054-3.077 16.531 5.401 31.504 42.54 42.256 44.116 42.702.139.033.285.053.432.053.135 0 .28-.017.418-.053 1.619-.446 39.708-11.19 45.117-42.702 1.107-6.477.076-12.037-3.078-16.531zm-.529 15.689c-4.657 27.114-37.767 37.985-41.924 39.243-52.187-50.643.346-62.838.346-62.838.095.009.194.009.283 0 .021-.001 2.387-.208 5.935-.208 7.646 0 26.167 1.055 33.046 10.843 2.449 3.491 3.212 7.734 2.314 12.96z')
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
					$elm$svg$Svg$Attributes$strokeWidth('11'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M339.702 449.057C325.65 516.752 270.859 561.5 213.521 561.5H191.16c-57.338 0-110.771-51.734-128.894-111.387-25.387-83.566-6.346-244.605 6.346-305.955C81.306 82.808 133.822 41.5 191.16 41.5h22.361c57.338 0 113.186 48.712 126.181 110.062 11.554 54.555 14.052 229.797 0 297.495z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('1.597'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M349.042 222.196s18.763 15.084 23.507 18.177c4.179 2.724-15.227 11.62-21.528 20.481l-1.979-38.658zM341.139 148.032s21.129 11.536 26.347 13.743c4.593 1.944-12.938 14.125-17.574 23.959l-8.773-37.702z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('1.086'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M352.56 315.282s11.676 11.474 14.678 13.885c2.646 2.124-11.086 6.836-15.945 12.406l1.267-26.291zM323.123 98.193s15.68 4.7 19.46 5.431c3.333.645-6.613 11.22-8.314 18.414l-11.146-23.845zM274.563 55.404s16.32-1.245 20.111-1.92c3.342-.595-2.143 12.847-1.147 20.171l-18.964-18.251zM227.156 43.308s13.022-9.916 15.837-12.542c2.482-2.315 5.184 11.947 10.001 17.556l-25.838-5.014zM164.392 43.224s8.74-13.838 10.46-17.285c1.516-3.036 9.029 9.385 15.501 12.958l-25.961 4.327zM116.878 65.496s4.078-15.85 4.66-19.659c.512-3.353 11.47 6.167 18.726 7.583l-23.386 12.076zM345.744 443.124s7.719 14.436 9.863 17.634c1.892 2.815-12.621 3.213-18.922 7.079l9.059-24.713zM253.612 555.585s-7.055 14.771-8.36 18.393c-1.147 3.192-10.066-8.261-16.914-11.046l25.274-7.347zM176.655 558.634s-14.154 8.222-17.273 10.479c-2.75 1.989-3.659-12.499-7.744-18.659l25.017 8.18zM132.277 543.813s-15.898 3.901-19.527 5.189c-3.198 1.133.011-13.023-2.173-20.086l21.7 14.897zM84.535 504.626s-16.222-2.196-20.069-2.327c-3.392-.117 4.782-12.113 5.338-19.484l14.731 21.811zM56.978 443.997s-14.11-8.301-17.607-9.907c-3.083-1.421 9.095-9.321 12.459-15.906l5.148 25.813zM47.16 293.003s-11.365-11.782-14.303-14.269c-2.587-2.196 11.263-6.54 16.27-11.98l-1.967 26.249zM51.952 224.322S40.587 212.54 37.65 210.053c-2.588-2.196 11.263-6.539 16.27-11.979l-1.968 26.248z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('1.418'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M47.576 355.45s-16.118-14.039-20.222-16.942c-3.616-2.566 13.911-9.782 19.81-17.426l.412 34.368zM65.637 148.635s-10.883-18.396-13.865-22.445c-2.625-3.57 16.283-4.907 24.286-10.308l-10.421 32.753z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('1.086'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M290.194 529.256s-2.883 16.112-3.179 19.952c-.263 3.381-11.9-5.293-19.24-6.162l22.419-13.79zM349.175 393.65s11.837 11.306 14.873 13.674c2.674 2.088-10.987 6.993-15.769 12.631l.896-26.305z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('12.386'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('163.929'),
					$elm$svg$Svg$Attributes$cy('94.072'),
					$elm$svg$Svg$Attributes$r('14.355')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('12.386'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('274.137'),
					$elm$svg$Svg$Attributes$cy('102.058'),
					$elm$svg$Svg$Attributes$r('14.356')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('12.386'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('96.845'),
					$elm$svg$Svg$Attributes$cy('260.184'),
					$elm$svg$Svg$Attributes$r('14.356')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('12.386'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('205.456'),
					$elm$svg$Svg$Attributes$cy('459.835'),
					$elm$svg$Svg$Attributes$r('14.355')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('9.85'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('287.17'),
					$elm$svg$Svg$Attributes$cy('367.452'),
					$elm$svg$Svg$Attributes$r('11.415')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('9.85'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('109.878'),
					$elm$svg$Svg$Attributes$cy('393.007'),
					$elm$svg$Svg$Attributes$r('11.417')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('9.85'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('121.059'),
					$elm$svg$Svg$Attributes$cy('493.633'),
					$elm$svg$Svg$Attributes$r('11.416')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('9.85'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('290.365'),
					$elm$svg$Svg$Attributes$cy('233.286'),
					$elm$svg$Svg$Attributes$r('11.416')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('9.85'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('205.884'),
					$elm$svg$Svg$Attributes$cy('367.338'),
					$elm$svg$Svg$Attributes$r('11.416')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$circle,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#FF9D00'),
					$elm$svg$Svg$Attributes$strokeWidth('7.727'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$cx('278.737'),
					$elm$svg$Svg$Attributes$cy('467.788'),
					$elm$svg$Svg$Attributes$r('11.417')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#FF9D00'),
					$elm$svg$Svg$Attributes$d('M59.818 60.33C48.996 49.508 36.623 63.851 46.46 73.688c8.854 8.854 25.085-1.631 32.173 5.457-7.087-7.088 3.397-23.319-5.456-32.173-9.839-9.838-24.181 2.536-13.359 13.358zM268.803 170.167a20.796 20.796 0 01-6.109 14.749 20.789 20.789 0 01-14.745 6.106c-2.881 0-5.621-.583-8.12-1.639a20.917 20.917 0 01-11.097-11.097l20.012-8.119-20.012-8.116a20.91 20.91 0 0111.097-11.097 20.815 20.815 0 018.12-1.639 20.789 20.789 0 0114.745 6.106 20.789 20.789 0 016.109 14.746zM170.918 170.167a20.777 20.777 0 01-6.107 14.749 20.95 20.95 0 01-6.629 4.467 20.77 20.77 0 01-8.116 1.639 20.794 20.794 0 01-14.747-6.106 20.89 20.89 0 01-4.47-6.63l20.017-8.119-20.017-8.116a20.901 20.901 0 014.47-6.63 20.868 20.868 0 016.627-4.467 20.812 20.812 0 018.12-1.639c2.878 0 5.622.583 8.116 1.639a20.921 20.921 0 0111.098 11.097 20.77 20.77 0 011.638 8.116zM262.497 225.682c-11.386-16.189-38.622-18.6-53.844-18.6-4.868 0-8.252.238-9.117.304-.865-.066-4.244-.304-9.115-.304-15.22 0-42.449 2.411-53.835 18.6-4.732 6.741-6.285 15.083-4.618 24.802 8.103 47.263 63.82 63.392 66.186 64.06a2.497 2.497 0 001.275 0c2.428-.668 59.575-16.783 67.688-64.06 1.656-9.719.112-18.061-4.62-24.802zm-.793 23.537c-6.988 40.679-56.66 56.986-62.896 58.873-78.293-75.975.517-94.271.517-94.271.146.014.288.014.426 0 .031-.002 3.579-.312 8.903-.312 11.474 0 39.257 1.582 49.578 16.267 3.674 5.238 4.82 11.602 3.472 19.443z')
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
					$elm$svg$Svg$Attributes$y1('213.676'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('435.224')
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
					$elm$svg$Svg$Attributes$d('M52.558 223.072c-69.837 0-26.619 91.314-12.437 113.652 22.959 36.163 91.84 89.832 154.024 89.832s154.979-45.776 184.638-130.92c29.657-85.145-38.1-72.648-66.801-72.648s-259.424.084-259.424.084z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('w'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('74.5'),
					$elm$svg$Svg$Attributes$y1('261.5'),
					$elm$svg$Svg$Attributes$x2('74.5'),
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
					$elm$svg$Svg$Attributes$stroke('url(#w)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M74.5 265v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('x'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('301.5'),
					$elm$svg$Svg$Attributes$y1('289.5'),
					$elm$svg$Svg$Attributes$x2('301.5'),
					$elm$svg$Svg$Attributes$y2('308.5')
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
					$elm$svg$Svg$Attributes$d('M301.5 293v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('y'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('147.5'),
					$elm$svg$Svg$Attributes$y1('333.5'),
					$elm$svg$Svg$Attributes$x2('147.5'),
					$elm$svg$Svg$Attributes$y2('351.5')
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
					$elm$svg$Svg$Attributes$d('M147.5 337v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('z'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('254.5'),
					$elm$svg$Svg$Attributes$y1('261.5'),
					$elm$svg$Svg$Attributes$x2('254.5'),
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
					$elm$svg$Svg$Attributes$stroke('url(#z)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M254.5 265v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('A'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('264.5'),
					$elm$svg$Svg$Attributes$y1('326.5'),
					$elm$svg$Svg$Attributes$x2('264.5'),
					$elm$svg$Svg$Attributes$y2('345.5')
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
					$elm$svg$Svg$Attributes$d('M264.5 330v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('B'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('212.5'),
					$elm$svg$Svg$Attributes$y1('373.5'),
					$elm$svg$Svg$Attributes$x2('212.5'),
					$elm$svg$Svg$Attributes$y2('392.5')
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
					$elm$svg$Svg$Attributes$d('M212.5 377v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('C'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('96.5'),
					$elm$svg$Svg$Attributes$y1('321.5'),
					$elm$svg$Svg$Attributes$x2('96.5'),
					$elm$svg$Svg$Attributes$y2('340.5')
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
					$elm$svg$Svg$Attributes$d('M96.5 325v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('D'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('122.5'),
					$elm$svg$Svg$Attributes$y1('273.5'),
					$elm$svg$Svg$Attributes$x2('122.5'),
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
					$elm$svg$Svg$Attributes$stroke('url(#D)'),
					$elm$svg$Svg$Attributes$strokeWidth('7'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M122.5 277v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('E'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('331.5'),
					$elm$svg$Svg$Attributes$y1('250.5'),
					$elm$svg$Svg$Attributes$x2('331.5'),
					$elm$svg$Svg$Attributes$y2('268.5')
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
					$elm$svg$Svg$Attributes$d('M331.5 254v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4BF991'),
					$elm$svg$Svg$Attributes$d('M26.977 186.976c-8.642-8.642-18.522 2.811-10.667 10.667C23.38 204.712 36.341 196.34 42 202c-5.659-5.66 2.713-18.621-4.357-25.691-7.856-7.856-19.309 2.025-10.666 10.667z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#DD3163'),
					$elm$svg$Svg$Attributes$d('M264.499 244.583a17.467 17.467 0 01-5.127 12.382 17.61 17.61 0 01-5.564 3.749 17.474 17.474 0 01-6.815 1.376 17.459 17.459 0 01-12.379-5.125 17.595 17.595 0 01-3.753-5.566l16.801-6.816-16.801-6.812a17.573 17.573 0 019.317-9.317 17.445 17.445 0 016.815-1.376 17.452 17.452 0 0112.379 5.127 17.458 17.458 0 015.127 12.378zM169.594 244.583a17.43 17.43 0 01-1.375 6.816 17.548 17.548 0 01-9.317 9.315 17.45 17.45 0 01-6.814 1.376 17.464 17.464 0 01-12.379-5.125 17.526 17.526 0 01-3.752-5.566l16.804-6.816-16.804-6.812a17.52 17.52 0 013.752-5.566 17.446 17.446 0 0112.379-5.127c2.416 0 4.72.489 6.814 1.376a17.558 17.558 0 019.317 9.317 17.422 17.422 0 011.375 6.812zM248.763 297.74c-8.331-11.849-28.261-13.613-39.401-13.613-3.557 0-6.036.176-6.667.226-.633-.05-3.106-.226-6.67-.226-11.141 0-31.063 1.765-39.395 13.613-3.463 4.93-4.602 11.034-3.38 18.148 5.929 34.585 46.698 46.386 48.429 46.875.156.038.315.063.479.063.145 0 .306-.024.454-.063 1.778-.489 43.598-12.28 49.532-46.875 1.213-7.115.085-13.218-3.381-18.148zm-.577 17.22c-5.115 29.765-41.462 41.702-46.023 43.078-57.293-55.594.375-68.979.375-68.979.106.009.211.009.312 0 .023 0 2.619-.226 6.513-.226 8.399 0 28.729 1.154 36.278 11.9 2.69 3.834 3.529 8.492 2.545 14.227z')
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
					$elm$svg$Svg$Attributes$y1('212.688'),
					$elm$svg$Svg$Attributes$x2('200'),
					$elm$svg$Svg$Attributes$y2('435.141')
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
					$elm$svg$Svg$Attributes$d('M51.955 222.121c-70.123 0-26.728 91.688-12.487 114.117 23.053 36.311 92.215 90.199 154.653 90.199 62.439 0 155.614-45.963 185.394-131.456 29.777-85.492-38.257-72.945-67.073-72.945-28.82 0-260.487.085-260.487.085z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('G'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('74.5'),
					$elm$svg$Svg$Attributes$y1('260.5'),
					$elm$svg$Svg$Attributes$x2('74.5'),
					$elm$svg$Svg$Attributes$y2('279.5')
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
					$elm$svg$Svg$Attributes$d('M74.5 264v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('H'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('302.5'),
					$elm$svg$Svg$Attributes$y1('288.5'),
					$elm$svg$Svg$Attributes$x2('302.5'),
					$elm$svg$Svg$Attributes$y2('306.5')
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
					$elm$svg$Svg$Attributes$d('M302.5 292v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('I'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('147.5'),
					$elm$svg$Svg$Attributes$y1('332.5'),
					$elm$svg$Svg$Attributes$x2('147.5'),
					$elm$svg$Svg$Attributes$y2('350.5')
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
					$elm$svg$Svg$Attributes$d('M147.5 336v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('J'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('255.5'),
					$elm$svg$Svg$Attributes$y1('260.5'),
					$elm$svg$Svg$Attributes$x2('255.5'),
					$elm$svg$Svg$Attributes$y2('279.5')
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
					$elm$svg$Svg$Attributes$d('M255.5 264v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('K'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('265.5'),
					$elm$svg$Svg$Attributes$y1('325.5'),
					$elm$svg$Svg$Attributes$x2('265.5'),
					$elm$svg$Svg$Attributes$y2('344.5')
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
					$elm$svg$Svg$Attributes$d('M265.5 329v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('L'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('212.5'),
					$elm$svg$Svg$Attributes$y1('372.5'),
					$elm$svg$Svg$Attributes$x2('212.5'),
					$elm$svg$Svg$Attributes$y2('391.5')
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
					$elm$svg$Svg$Attributes$d('M212.5 376v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('M'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('96.5'),
					$elm$svg$Svg$Attributes$y1('320.5'),
					$elm$svg$Svg$Attributes$x2('96.5'),
					$elm$svg$Svg$Attributes$y2('339.5')
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
					$elm$svg$Svg$Attributes$d('M96.5 324v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('N'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('123.5'),
					$elm$svg$Svg$Attributes$y1('272.5'),
					$elm$svg$Svg$Attributes$x2('123.5'),
					$elm$svg$Svg$Attributes$y2('290.5')
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
					$elm$svg$Svg$Attributes$d('M123.5 276v11')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$linearGradient,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$id('O'),
					$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse'),
					$elm$svg$Svg$Attributes$x1('332.5'),
					$elm$svg$Svg$Attributes$y1('248.5'),
					$elm$svg$Svg$Attributes$x2('332.5'),
					$elm$svg$Svg$Attributes$y2('267.5')
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
					$elm$svg$Svg$Attributes$d('M332.5 252v12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4BF991'),
					$elm$svg$Svg$Attributes$d('M27.478 187.936c-7.661-7.66-16.419 2.492-9.456 9.456 6.268 6.267 17.757-1.155 22.773 3.862-5.017-5.017 2.405-16.506-3.862-22.774-6.964-6.964-17.116 1.795-9.455 9.456z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#F9EC08'),
					$elm$svg$Svg$Attributes$d('M264.499 244.041a17.467 17.467 0 01-5.127 12.382 17.61 17.61 0 01-5.564 3.749 17.474 17.474 0 01-6.815 1.376 17.459 17.459 0 01-12.379-5.125 17.595 17.595 0 01-3.753-5.566l16.801-6.816-16.801-6.812a17.573 17.573 0 019.317-9.317 17.445 17.445 0 016.815-1.376 17.452 17.452 0 0112.379 5.127 17.458 17.458 0 015.127 12.378zM169.594 244.041a17.43 17.43 0 01-1.375 6.816 17.548 17.548 0 01-9.317 9.315 17.45 17.45 0 01-6.814 1.376 17.464 17.464 0 01-12.379-5.125 17.526 17.526 0 01-3.752-5.566l16.804-6.816-16.804-6.812a17.52 17.52 0 013.752-5.566 17.446 17.446 0 0112.379-5.127c2.416 0 4.72.489 6.814 1.376a17.558 17.558 0 019.317 9.317 17.422 17.422 0 011.375 6.812zM248.763 297.198c-8.331-11.849-28.261-13.613-39.401-13.613-3.557 0-6.036.176-6.667.226-.633-.05-3.106-.226-6.67-.226-11.141 0-31.063 1.765-39.395 13.613-3.463 4.931-4.602 11.034-3.38 18.148 5.929 34.585 46.698 46.386 48.429 46.875.156.038.315.063.479.063.145 0 .306-.024.454-.063 1.778-.489 43.598-12.28 49.532-46.875 1.213-7.114.085-13.217-3.381-18.148zm-.577 17.221c-5.115 29.765-41.462 41.702-46.023 43.078-57.293-55.594.375-68.979.375-68.979.106.009.211.009.312 0 .023 0 2.619-.226 6.513-.226 8.399 0 28.729 1.154 36.278 11.9 2.69 3.834 3.529 8.492 2.545 14.227z')
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
					$elm$svg$Svg$Attributes$fill('#9E8161'),
					$elm$svg$Svg$Attributes$stroke('#4C311E'),
					$elm$svg$Svg$Attributes$strokeWidth('11.7'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M222.664 22.261c8.909.505 13.284 4.427 35.421 23.244s52.021 49.81 59.771 95.193 32.102 50.918 38.742 78.59c6.64 27.672 16.602 66.416 5.533 123.973-11.067 57.558-15.495 102.941-33.205 129.506-17.711 26.565-43.168 97.407-69.732 99.621-26.566 2.214-55.346 15.496-56.454-8.854-1.107-24.352-66.415-58.667-77.483-89.659-11.069-30.993-42.062-95.193-64.2-118.439-22.138-23.244-11.07-131.72 0-158.285 11.069-26.565 7.748-42.062 26.565-64.2s16.604-42.061 17.711-48.703c1.106-6.643 19.923-67.522 117.331-61.987z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('none'),
					$elm$svg$Svg$Attributes$stroke('#4C311E'),
					$elm$svg$Svg$Attributes$strokeWidth('3.343'),
					$elm$svg$Svg$Attributes$strokeLinecap('round'),
					$elm$svg$Svg$Attributes$strokeLinejoin('round'),
					$elm$svg$Svg$Attributes$strokeMiterlimit('10'),
					$elm$svg$Svg$Attributes$d('M155.142 107.492c-14.588-9.719-33.774 8.519-50.916 3.319M219.344 122.988c18.555 1.865 55.481 20.958 68.815-.918 8.564-3.288 11.882 1.833 19.737 3.132M114.187 163.943c10.218 0 17.983-1.915 27.673-3.32 2.791-.405 9.597-1.113 12.176-.021 4.786 2.025 4.483 6.476 8.556 9.146 10.735 7.039 33.538-1.929 39.041-8.018M304.575 249.174c6.622-.187 13.808 2.083 20.169 1.103 6.725-1.036 7.901-5.697 13.282-7.582 9.177-3.214 21.6 4.119 26.319 10.907M53.264 337.726c-1.823-8.152 8.155-23.482 14.42-27.7 8.368-5.63 24.157-4.906 34.007-4.457 11.681.532 22.083 4.133 33.508 2.051 6.5-1.187 18.682-3.275 18.792-11.957M103.639 423.023c16.527-17.336 24.23-30.444 49.621-26.759-.135-1.532.627-1.337 1.296-2.021M262.513 368.719c3.682.111 7.387-.182 11.064.054 1.557.099 3.304-2.66 4.353-2.396 3.033.769 6.487 6.473 8.524 6.659 5.982.549 11.196-6.876 21.462-6.531 10.779.361 14.392 1.778 24.637-1.995 8.117-2.99 13.325-6.328 20.535-1.14 1.465 1.995 3.503 3.843 4.618 6.455M208.273 428.491c8.343-1.746 9.972-11.276 18.572-12.176 8.459-.888 19.974 4.031 29.082 4.428 9.954.434 14.592-3.581 24.048-3.1 8.729.443 19.64 5.442 27.921 4.206M157.356 492.69c9.41.08 16.908-5.238 24.408-9.679 3.911-2.317 11.706-8.584 15.414-9.164 14.391-2.245 33.633 15.885 46.517 2.239')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#4C311E'),
					$elm$svg$Svg$Attributes$d('M118.12 59.142s100.118-20.278 139.965-13.637c0 0-71.833-57.959-139.965 13.637zM202.739 563.533s2.474 16.033 16.604 14.451c14.129-1.582 63.18 2.09 65.904-26.658 0 0-36.02-4.46-53.729 0-17.707 4.458-21.03 14.419-28.779 12.207zM52.477 99.705c-12.5-12.498-26.791 4.067-15.429 15.43 10.227 10.225 28.974-1.883 37.16 6.303-8.186-8.187 3.924-26.934-6.302-37.161-11.364-11.362-27.929 2.93-15.429 15.428zM311.674 210.938c0 4.788-.971 9.35-2.725 13.495a34.769 34.769 0 01-7.425 11.02 34.919 34.919 0 01-11.02 7.427 34.634 34.634 0 01-13.491 2.723c-4.791 0-9.343-.971-13.494-2.723a34.873 34.873 0 01-11.021-7.427 34.76 34.76 0 01-7.426-11.02l33.266-13.495-33.266-13.491a34.79 34.79 0 017.426-11.019 34.843 34.843 0 0111.021-7.426 34.577 34.577 0 0113.494-2.724c4.78 0 9.341.971 13.491 2.724a34.866 34.866 0 0111.02 7.426 34.776 34.776 0 017.425 11.019 34.556 34.556 0 012.725 13.491zM159.595 218.016c0 4.787-.968 9.349-2.724 13.494a34.747 34.747 0 01-7.427 11.02 34.874 34.874 0 01-11.018 7.428 34.613 34.613 0 01-13.492 2.722c-4.785 0-9.347-.971-13.495-2.722a34.838 34.838 0 01-11.015-7.428 34.71 34.71 0 01-7.43-11.02l33.269-13.494-33.269-13.491a34.74 34.74 0 017.43-11.019 34.736 34.736 0 0111.015-7.427 34.592 34.592 0 0113.495-2.723c4.783 0 9.346.969 13.492 2.723a34.77 34.77 0 0118.445 18.446 34.512 34.512 0 012.724 13.491zM239.303 292.113c-6.367-9.059-21.604-10.407-30.119-10.407-2.722 0-4.617.134-5.101.169a70.856 70.856 0 00-5.101-.169c-8.514 0-23.747 1.348-30.116 10.407-2.647 3.77-3.516 8.437-2.582 13.874 4.531 26.44 35.702 35.463 37.023 35.835.117.029.241.047.361.047.115 0 .238-.012.354-.047 1.357-.372 33.326-9.391 37.864-35.835.932-5.437.067-10.104-2.583-13.874zm-.442 13.165c-3.911 22.757-31.696 31.878-35.188 32.938-43.798-42.504.29-52.74.29-52.74.081.007.163.007.238 0 .016-.002 2.005-.174 4.981-.174 6.418 0 21.964.884 27.734 9.1 2.059 2.93 2.697 6.492 1.945 10.876z')
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
					$elm$svg$Svg$Attributes$d('M119.864 522.525s-18.148 21.779-7.259 31.76 33.992 27.467 46.278 17.24c12.286-10.228 19.056-22.948 19.056-22.948l-58.075-26.052z')
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
					$elm$svg$Svg$Attributes$d('M165.235 102.39s-1.681-40.506-17.241-54.445c-4.43-3.969-1.814-9.981 8.621-11.797 10.436-1.815 23.914-12.71 35.533-10.477 4.327.832 7.309 1.487 7.156 9.818-.334 18.138 2.828 31.199 7.672 45.122l-41.741 21.779z')
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
					$elm$svg$Svg$Attributes$d('M187.921 69.723c18.481-6.493 49.003-7.259 84.391 47.186 35.389 54.445 26.315 110.706 26.315 124.317 0 13.611-3.629 78.943 10.89 156.075 14.518 77.132-61.705 169.688-111.613 167.873-49.909-1.814-117.965-38.11-104.354-90.741 13.611-52.632 36.297-56.262 46.278-83.483 9.981-27.223 36.297-107.983 10.889-192.373-25.407-84.39 3.63-117.057 37.204-128.854z')
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
					$elm$svg$Svg$Attributes$d('M159.904 36.654s12.86 25.437 13.752 40.509M170.866 32.544s13.466 38.133 13.752 40.508M194.371 71.011s-9.589-26.841-8.595-41.907')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M170.866 78.079s-13.721 52.124 9.546 99.31 21.143 173.969 9.626 197.335c-12.949 26.273-86.506 133.338-85.599 154.208l11.796 14.49s17.753-36.542 43.669-65.349c25.8-28.678 46.409-68.52 51.61-83.488 13.865-39.903 19.315-165.117-11.797-221.196-23.645-42.619-21.388-96.227-19.898-100.338l-8.953 5.028z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M209.262 66.76s10.506 23.734 23.804 33.153c13.298 9.418 47.082 40.401 29.354 128.493-17.729 88.093 25.482 154 16.617 191.676-8.865 37.675-33.245 67.551-61.501 80.847-28.257 13.297-62.086 33.603-54.037 58.266l-14.704-5.29s-7.72-26.017 22.753-47.624c30.472-21.607 78.672-53.359 80.89-120.953 2.217-67.593-22.161-129.73-11.081-180.148 11.081-50.418-8.864-87.026-31.026-109.188-22.162-22.163-17.097-30.717-1.069-29.232zM106.234 94.468C95.021 83.257 82.2 98.117 92.393 108.31c9.174 9.173 25.992-1.689 33.336 5.654-7.344-7.344 3.52-24.161-5.654-33.335-10.194-10.194-25.054 2.628-13.841 13.839z')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$fill('#006C05'),
					$elm$svg$Svg$Attributes$d('M231.57 136.22a9.656 9.656 0 01-2.837 6.848 9.75 9.75 0 01-3.077 2.075c-1.161.489-2.434.761-3.771.761s-2.609-.271-3.771-.761a9.705 9.705 0 01-5.153-5.153l9.294-3.77-9.294-3.77a9.72 9.72 0 015.153-5.154c1.161-.49 2.434-.761 3.771-.761s2.609.271 3.771.761a9.71 9.71 0 015.152 5.154 9.656 9.656 0 01.762 3.77zM209.114 136.22a9.655 9.655 0 01-2.836 6.848 9.721 9.721 0 01-3.078 2.075c-1.158.489-2.433.761-3.77.761s-2.611-.271-3.771-.761a9.717 9.717 0 01-5.153-5.153l9.295-3.77-9.295-3.77a9.723 9.723 0 015.153-5.154c1.16-.49 2.435-.761 3.771-.761a9.662 9.662 0 016.848 2.836 9.693 9.693 0 012.075 3.079 9.637 9.637 0 01.761 3.77zM232.331 153.933c-2.677-3.807-9.08-4.373-12.658-4.373-1.145 0-1.94.056-2.144.071a28.983 28.983 0 00-2.144-.071c-3.578 0-9.979.566-12.656 4.373-1.113 1.584-1.478 3.546-1.086 5.83 1.904 11.112 15.004 14.905 15.561 15.062a.57.57 0 00.299 0c.571-.157 14.006-3.947 15.913-15.062.392-2.284.028-4.246-1.085-5.83zm-.186 5.533c-1.643 9.563-13.32 13.398-14.787 13.841-18.407-17.862.122-22.164.122-22.164a.557.557 0 00.1 0c.008 0 .843-.073 2.094-.073 2.697 0 9.229.372 11.655 3.824.863 1.232 1.133 2.728.816 4.572z')
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
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {alt: alt, ctrl: ctrl, shift: shift};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
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
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))({"versions":{"elm":"0.19.1"},"types":{"message":"Main.Msg","aliases":{"Data.Alphabet.LetterDetails":{"args":[],"type":"{ letterText : Data.Alphabet.LetterText, letterTextLowercase : Data.Alphabet.LetterText, word : Data.Alphabet.Word, number : Basics.Int, letter : Data.Alphabet.Letter }"},"Data.Alphabet.LetterText":{"args":[],"type":"String.String"},"Data.Alphabet.Word":{"args":[],"type":"String.String"}},"unions":{"Main.Msg":{"args":[],"tags":{"StartAt":["( Basics.Float, Basics.Float )"],"MoveAt":["( Basics.Float, Basics.Float )"],"EndAt":["( Basics.Float, Basics.Float )"],"SetPage":["Route.Page"],"ToggleNav":[],"DisplayLetterFromNav":["Data.Alphabet.LetterDetails"]}},"Basics.Float":{"args":[],"tags":{"Float":[]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"Data.Alphabet.Letter":{"args":[],"tags":{"A":[],"B":[],"C":[],"D":[],"E":[],"F":[],"G":[],"H":[],"I":[],"J":[],"K":[],"L":[],"M":[],"N":[],"O":[],"P":[],"Q":[],"R":[],"S":[],"T":[],"U":[],"V":[],"W":[],"X":[],"Y":[],"Z":[]}},"Route.Page":{"args":[],"tags":{"LetterForm":["Data.Alphabet.Letter","Route.Transition"],"Drawing":["Data.Alphabet.Letter","Route.Transition"],"Nav":["Route.Transition"]}},"String.String":{"args":[],"tags":{"String":[]}},"Route.Transition":{"args":[],"tags":{"Show":[],"Remove":[]}}}}})}});

//////////////////// HMR BEGIN ////////////////////

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/

/*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */

if (module.hot) {
    (function () {
        "use strict";

        //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                target = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                }
                return target;
            };
        }

        // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
        // and we check for `Maybe.Just` because we expect it to be present in all Elm programs.
        var elmVersion;
        if (typeof elm$core$Maybe$Just !== 'undefined')
            elmVersion = '0.19.0';
        else if (typeof $elm$core$Maybe$Just !== 'undefined')
            elmVersion = '0.19.1';
        else
            throw new Error("Could not determine Elm version");

        function elmSymbol(symbol) {
            try {
                switch (elmVersion) {
                    case '0.19.0':
                        return eval(symbol);
                    case '0.19.1':
                        return eval('$' + symbol);
                    default:
                        throw new Error('Cannot resolve ' + symbol + '. Elm version unknown!')
                }
            } catch (e) {
                if (e instanceof ReferenceError) {
                    return undefined;
                } else {
                    throw e;
                }
            }
        }

        var instances = module.hot.data
            ? module.hot.data.instances || {}
            : {};
        var uid = module.hot.data
            ? module.hot.data.uid || 0
            : 0;

        if (Object.keys(instances).length === 0) {
            log("[elm-hot] Enabled");
        }

        var cancellers = [];

        // These 2 variables act as dynamically-scoped variables which are set only when the
        // Elm module's hooked init function is called.
        var initializingInstance = null;
        var swappingInstance = null;

        module.hot.accept();
        module.hot.dispose(function (data) {
            data.instances = instances;
            data.uid = uid;

            // Cleanup pending async tasks

            // First, make sure that no new tasks can be started until we finish replacing the code
            _Scheduler_binding = function () {
                return _Scheduler_fail(new Error('[elm-hot] Inactive Elm instance.'))
            };

            // Second, kill pending tasks belonging to the old instance
            if (cancellers.length) {
                log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
                try {
                    cancellers.forEach(function (cancel) {
                        cancel();
                    });
                } catch (e) {
                    console.warn('[elm-hot] Kill process error: ' + e.message);
                }
            }
        });

        function log(message) {
            if (module.hot.verbose) {
                console.log(message)
            }
        }

        function getId() {
            return ++uid;
        }

        function findPublicModules(parent, path) {
            var modules = [];
            for (var key in parent) {
                var child = parent[key];
                var currentPath = path ? path + '.' + key : key;
                if ('init' in child) {
                    modules.push({
                        path: currentPath,
                        module: child
                    });
                } else {
                    modules = modules.concat(findPublicModules(child, currentPath));
                }
            }
            return modules;
        }

        function registerInstance(domNode, flags, path, portSubscribes, portSends) {
            var id = getId();

            var instance = {
                id: id,
                path: path,
                domNode: domNode,
                flags: flags,
                portSubscribes: portSubscribes,
                portSends: portSends,
                lastState: null // last Elm app state (root model)
            };

            return instances[id] = instance
        }

        function isFullscreenApp() {
            // Returns true if the Elm app will take over the entire DOM body.
            return typeof elmSymbol("elm$browser$Browser$application") !== 'undefined'
                || typeof elmSymbol("elm$browser$Browser$document") !== 'undefined';
        }

        function wrapDomNode(node) {
            // When embedding an Elm app into a specific DOM node, Elm will replace the provided
            // DOM node with the Elm app's content. When the Elm app is compiled normally, the
            // original DOM node is reused (its attributes and content changes, but the object
            // in memory remains the same). But when compiled using `--debug`, Elm will completely
            // destroy the original DOM node and instead replace it with 2 brand new nodes: one
            // for your Elm app's content and the other for the Elm debugger UI. In this case,
            // if you held a reference to the DOM node provided for embedding, it would be orphaned
            // after Elm module initialization.
            //
            // So in order to make both cases consistent and isolate us from changes in how Elm
            // does this, we will insert a dummy node to wrap the node for embedding and hold
            // a reference to the dummy node.
            //
            // We will also put a tag on the dummy node so that the Elm developer knows who went
            // behind their back and rudely put stuff in their DOM.
            var dummyNode = document.createElement("div");
            dummyNode.setAttribute("data-elm-hot", "true");
            dummyNode.style.height = "inherit";
            var parentNode = node.parentNode;
            parentNode.replaceChild(dummyNode, node);
            dummyNode.appendChild(node);
            return dummyNode;
        }

        function wrapPublicModule(path, module) {
            var originalInit = module.init;
            if (originalInit) {
                module.init = function (args) {
                    var elm;
                    var portSubscribes = {};
                    var portSends = {};
                    var domNode = null;
                    var flags = null;
                    if (typeof args !== 'undefined') {
                        // normal case
                        domNode = args['node'] && !isFullscreenApp()
                            ? wrapDomNode(args['node'])
                            : document.body;
                        flags = args['flags'];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode = document.body;
                        flags = undefined
                    }
                    initializingInstance = registerInstance(domNode, flags, path, portSubscribes, portSends);
                    elm = originalInit(args);
                    wrapPorts(elm, portSubscribes, portSends);
                    initializingInstance = null;
                    return elm;
                };
            } else {
                console.error("Could not find a public module to wrap at path " + path)
            }
        }

        function swap(Elm, instance) {
            log('[elm-hot] Hot-swapping module: ' + instance.path);

            swappingInstance = instance;

            // remove from the DOM everything that had been created by the old Elm app
            var containerNode = instance.domNode;
            while (containerNode.lastChild) {
                containerNode.removeChild(containerNode.lastChild);
            }

            var m = getAt(instance.path.split('.'), Elm);
            var elm;
            if (m) {
                // prepare to initialize the new Elm module
                var args = {flags: instance.flags};
                if (containerNode === document.body) {
                    // fullscreen case: no additional args needed
                } else {
                    // embed case: provide a new node for Elm to use
                    var nodeForEmbed = document.createElement("div");
                    containerNode.appendChild(nodeForEmbed);
                    args['node'] = nodeForEmbed;
                }

                elm = m.init(args);

                Object.keys(instance.portSubscribes).forEach(function (portName) {
                    if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
                        var handlers = instance.portSubscribes[portName];
                        if (!handlers.length) {
                            return;
                        }
                        log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \''
                            + portName + '\' (' + instance.path + ').');
                        handlers.forEach(function (handler) {
                            elm.ports[portName].subscribe(handler);
                        });
                    } else {
                        delete instance.portSubscribes[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });

                Object.keys(instance.portSends).forEach(function (portName) {
                    if (portName in elm.ports && 'send' in elm.ports[portName]) {
                        log('[elm-hot] Replace old port send with the new send');
                        instance.portSends[portName] = elm.ports[portName].send;
                    } else {
                        delete instance.portSends[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });
            } else {
                log('[elm-hot] Module was removed: ' + instance.path);
            }

            swappingInstance = null;
        }

        function wrapPorts(elm, portSubscribes, portSends) {
            var portNames = Object.keys(elm.ports || {});
            //hook ports
            if (portNames.length) {
                // hook outgoing ports
                portNames
                    .filter(function (name) {
                        return 'subscribe' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        var subscribe = port.subscribe;
                        var unsubscribe = port.unsubscribe;
                        elm.ports[portName] = Object.assign(port, {
                            subscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.subscribe called.');
                                if (!portSubscribes[portName]) {
                                    portSubscribes[portName] = [handler];
                                } else {
                                    //TODO handle subscribing to single handler more than once?
                                    portSubscribes[portName].push(handler);
                                }
                                return subscribe.call(port, handler);
                            },
                            unsubscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                                var list = portSubscribes[portName];
                                if (list && list.indexOf(handler) !== -1) {
                                    list.splice(list.lastIndexOf(handler), 1);
                                } else {
                                    console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                                }
                                return unsubscribe.call(port, handler);
                            }
                        });
                    });

                // hook incoming ports
                portNames
                    .filter(function (name) {
                        return 'send' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        portSends[portName] = port.send;
                        elm.ports[portName] = Object.assign(port, {
                            send: function (val) {
                                return portSends[portName].call(port, val);
                            }
                        });
                    });
            }
            return portSubscribes;
        }

        /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */
        function findNavKey(rootModel) {
            var queue = [];
            if (isDebuggerModel(rootModel)) {
                /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */
                queue.push({value: rootModel['state'], keypath: ['state']});
            } else {
                queue.push({value: rootModel, keypath: []});
            }

            while (queue.length !== 0) {
                var item = queue.shift();

                if (typeof item.value === "undefined" || item.value === null) {
                    continue;
                }

                // The nav key is identified by a runtime tag added by the elm-hot injector.
                if (item.value.hasOwnProperty("elm-hot-nav-key")) {
                    // found it!
                    return item;
                }

                if (typeof item.value !== "object") {
                    continue;
                }

                for (var propName in item.value) {
                    if (!item.value.hasOwnProperty(propName)) continue;
                    var newKeypath = item.keypath.slice();
                    newKeypath.push(propName);
                    queue.push({value: item.value[propName], keypath: newKeypath})
                }
            }

            return null;
        }


        function isDebuggerModel(model) {
            // Up until elm/browser 1.0.2, the Elm debugger could be identified by a
            // property named "expando". But in version 1.0.2 that was renamed to "expandoModel"
            return model
                && (model.hasOwnProperty("expando") || model.hasOwnProperty("expandoModel"))
                && model.hasOwnProperty("state");
        }

        function getAt(keyPath, obj) {
            return keyPath.reduce(function (xs, x) {
                return (xs && xs[x]) ? xs[x] : null
            }, obj)
        }

        function removeNavKeyListeners(navKey) {
            window.removeEventListener('popstate', navKey.value);
            window.navigator.userAgent.indexOf('Trident') < 0 || window.removeEventListener('hashchange', navKey.value);
        }

        // hook program creation
        var initialize = _Platform_initialize;
        _Platform_initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
            var instance = initializingInstance || swappingInstance;
            var tryFirstRender = !!swappingInstance;

            var hookedInit = function (args) {
                var initialStateTuple = init(args);
                if (swappingInstance) {
                    var oldModel = swappingInstance.lastState;
                    var newModel = initialStateTuple.a;

                    if (typeof elmSymbol("elm$browser$Browser$application") !== 'undefined') {
                        var oldKeyLoc = findNavKey(oldModel);

                        // attempt to find the Browser.Navigation.Key in the newly-constructed model
                        // and bring it along with the rest of the old data.
                        var newKeyLoc = findNavKey(newModel);
                        var error = null;
                        if (newKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the new app model";
                        } else if (oldKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the old app model.";
                        } else if (newKeyLoc.keypath.toString() !== oldKeyLoc.keypath.toString()) {
                            error = "the location of the Browser.Navigation.Key in the model has changed.";
                        } else {
                            // remove event listeners attached to the old nav key
                            removeNavKeyListeners(oldKeyLoc.value);

                            // insert the new nav key into the old model in the exact same location
                            var parentKeyPath = oldKeyLoc.keypath.slice(0, -1);
                            var lastSegment = oldKeyLoc.keypath.slice(-1)[0];
                            var oldParent = getAt(parentKeyPath, oldModel);
                            oldParent[lastSegment] = newKeyLoc.value;
                        }

                        if (error !== null) {
                            console.error("[elm-hot] Hot-swapping " + instance.path + " not possible: " + error);
                            oldModel = newModel;
                        }
                    }

                    // the heart of the app state hot-swap
                    initialStateTuple.a = oldModel;

                    // ignore any Cmds returned by the init during hot-swap
                    initialStateTuple.b = elmSymbol("elm$core$Platform$Cmd$none");
                } else {
                    // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple.a;
                }

                return initialStateTuple
            };

            var hookedStepperBuilder = function (sendToApp, model) {
                var result;
                // first render may fail if shape of model changed too much
                if (tryFirstRender) {
                    tryFirstRender = false;
                    try {
                        result = stepperBuilder(sendToApp, model)
                    } catch (e) {
                        throw new Error('[elm-hot] Hot-swapping ' + instance.path +
                            ' is not possible, please reload page. Error: ' + e.message)
                    }
                } else {
                    result = stepperBuilder(sendToApp, model)
                }

                return function (nextModel, isSync) {
                    if (instance) {
                        // capture the state after every step so that later we can restore from it during a hot-swap
                        instance.lastState = nextModel
                    }
                    return result(nextModel, isSync)
                }
            };

            return initialize(flagDecoder, args, hookedInit, update, subscriptions, hookedStepperBuilder)
        };

        // hook process creation
        var originalBinding = _Scheduler_binding;
        _Scheduler_binding = function (originalCallback) {
            return originalBinding(function () {
                // start the scheduled process, which may return a cancellation function.
                var cancel = originalCallback.apply(this, arguments);
                if (cancel) {
                    cancellers.push(cancel);
                    return function () {
                        cancellers.splice(cancellers.indexOf(cancel), 1);
                        return cancel();
                    };
                }
                return cancel;
            });
        };

        scope['_elm_hot_loader_init'] = function (Elm) {
            // swap instances
            var removedInstances = [];
            for (var id in instances) {
                var instance = instances[id];
                if (instance.domNode.parentNode) {
                    swap(Elm, instance);
                } else {
                    removedInstances.push(id);
                }
            }

            removedInstances.forEach(function (id) {
                delete instance[id];
            });

            // wrap all public modules
            var publicModules = findPublicModules(Elm);
            publicModules.forEach(function (m) {
                wrapPublicModule(m.path, m.module);
            });
        }
    })();

    scope['_elm_hot_loader_init'](scope['Elm']);
}
//////////////////// HMR END ////////////////////


}(this));
},{}],"main.js":[function(require,module,exports) {
var _require = require("./Main.elm"),
    Elm = _require.Elm;

Elm.Main.init({
  node: document.getElementById("main")
});
},{"./Main.elm":"Main.elm"}],"../../../../.npm/_npx/88467/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50810" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../../../../.npm/_npx/88467/lib/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map