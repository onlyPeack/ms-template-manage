(function() {
	var aa = '" style="background-image:url(',
		ba = "-disabled",
		ca = "-document.getElementById('",
		da = "/translate_a/t",
		ea = "/translate_suggestion?client=",
		fa = '</button></div></div></td></tr><tr id="',
		ha = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
		ia = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
		ja = "Component already rendered",
		f = "DIV",
		ka = "Edge",
		la = "Google Website Translator",
		ma = "IFRAME",
		oa = "INPUT",
		pa = "INTERNAL_SERVER_ERROR",
		qa = "OPTION",
		ra = "Opera",
		sa = "POST",
		ta = "SCRIPT",
		ua = "SPAN",
		va = "TEXTAREA",
		wa = "TITLE",
		xa = "Unable to set parent component",
		ya = "[goog.net.IframeIo] Unable to send, already active.",
		za = "about:blank",
		Aa = "about:invalid#zSoyz",
		Ba = "absolute",
		Ca = "action",
		Da = "activedescendant",
		Ea = "activity-form-container",
		Fa = "alt-edited",
		Ga = "array",
		Ha = "auto",
		Ia = "backgroundImage",
		Ja = "backgroundPosition",
		Ka = "blur",
		La = "border-box",
		Ma = "button",
		Na = "cancelled",
		Oa = "change",
		Pa = "character",
		Qa = "checked",
		Ra = "chg_tgt_lang",
		Sa = "click",
		Ta = "clk_no_ap_site",
		Ua = "complete",
		Va = "container",
		Wa = "contextmenu",
		Xa = "dblclick",
		Ya = "deactivate",
		Za = "direction",
		$a = "div",
		ab = "finish",
		bb = "finishSourceLang",
		cb = "finishTargetLang",
		db = "focus",
		eb = "focusin",
		fb = "focusout",
		p = "function",
		gb = "goog-float-bottom",
		hb = "goog-float-top",
		ib = "goog-inline-block ",
		jb = "goog-menuheader",
		kb = "goog-menuseparator",
		lb = "goog-option",
		mb = "goog-option-selected",
		nb = "goog-te-menu-value",
		ob = "goog-te-menu2-item-selected",
		pb = "goog-te-spinner-animation-show",
		qb = "goog-te-spinner-pos-show",
		rb = "hidden",
		sb = "hide",
		tb = "horizontal",
		ub = "https://translate.google.com",
		vb = "a.gif",//https://www.google.com/images/cleardot.gif
		wb = "javascript:void(0)",
		xb = "keydown",
		yb = "keypress",
		zb = "keyup",
		Ab = "load",
		Bb = "mousedown",
		Cb = "mousemove",
		Db = "mouseout",
		Eb = "mouseover",
		Fb = "mouseup",
		Gb = "move_offscreen",
		q = "none",
		Hb = "number",
		Ib = "object",
		Jb = "opacity 1s linear",
		Kb = "paddingLeft",
		Lb = "paddingRight",
		Mb = "position",
		Nb = "progressSection",
		Ob = "promptSourceLang",
		Pb = "promptTargetLang",
		Qb = "ready",
		Rb = "readystatechange",
		Sb = "rtl",
		Tb = "selected",
		Ub = "skiptranslate",
		Vb = "status-message",
		Wb = "string",
		Xb = "submitted",
		Yb = "targetLanguage",
		Zb = "textarea-placeholder-input",
		$b = "toggle_display",
		ac = "trans-target-empty",
		bc = "trans-target-highlight",
		cc = "transition",
		dc = "translate",
		ec = "vertical",
		fc = "visible",
		gc = "withCredentials";

	function hc() {
		return function() {}
	}

	function ic(a) {
		return function(b) {
			this[a] = b
		}
	}

	function r(a) {
		return function() {
			return this[a]
		}
	}

	function u(a) {
		return function() {
			return a
		}
	}
	var v, jc = typeof Object.create == p ? Object.create : function(a) {
			function b() {}
			b.prototype = a;
			return new b
		},
		kc;
	if(typeof Object.setPrototypeOf == p) kc = Object.setPrototypeOf;
	else {
		var lc;
		a: {
			var mc = {
					Jh: !0
				},
				nc = {};
			try {
				nc.__proto__ = mc;
				lc = nc.Jh;
				break a
			} catch(a) {}
			lc = !1
		}
		kc = lc ? function(a, b) {
			a.__proto__ = b;
			if(a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var oc = kc;

	function pc(a, b) {
		a.prototype = jc(b.prototype);
		a.prototype.constructor = a;
		if(oc) oc(a, b);
		else
			for(var c in b)
				if("prototype" != c)
					if(Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d)
					} else a[c] = b[c];
		a.m = b.prototype
	}
	var qc = typeof Object.defineProperties == p ? Object.defineProperty : function(a, b, c) {
			a != Array.prototype && a != Object.prototype && (a[b] = c.value)
		},
		rc = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

	function sc(a) {
		if(a) {
			for(var b = rc, c = ["Math", "log10"], d = 0; d < c.length - 1; d++) {
				var e = c[d];
				e in b || (b[e] = {});
				b = b[e]
			}
			c = c[c.length - 1];
			d = b[c];
			a = a(d);
			a != d && null != a && qc(b, c, {
				configurable: !0,
				writable: !0,
				value: a
			})
		}
	}
	sc(function(a) {
		return a ? a : function(a) {
			return Math.log(a) / Math.LN10
		}
	});
	var tc = tc || {},
		w = this;

	function x(a) {
		return void 0 !== a
	}

	function z(a) {
		return typeof a == Wb
	}

	function uc(a) {
		return typeof a == Hb
	}
	var vc = /^[\w+/_-]+[=]{0,2}$/,
		wc = null;

	function A() {}

	function xc(a) {
		a.Xe = void 0;
		a.Y = function() {
			return a.Xe ? a.Xe : a.Xe = new a
		}
	}

	function B(a) {
		var b = typeof a;
		if(b == Ib)
			if(a) {
				if(a instanceof Array) return Ga;
				if(a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if("[object Window]" == c) return Ib;
				if("[object Array]" == c || typeof a.length == Hb && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return Ga;
				if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return p
			} else return "null";
		else if(b == p && "undefined" == typeof a.call) return Ib;
		return b
	}

	function C(a) {
		return B(a) == Ga
	}

	function yc(a) {
		var b = B(a);
		return b == Ga || b == Ib && typeof a.length == Hb
	}

	function zc(a) {
		return B(a) == p
	}

	function Ac(a) {
		var b = typeof a;
		return b == Ib && null != a || b == p
	}

	function Bc(a) {
		return a[Cc] || (a[Cc] = ++Dc)
	}
	var Cc = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Dc = 0;

	function Ec(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function Fc(a, b, c) {
		if(!a) throw Error();
		if(2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	}

	function D(a, b, c) {
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? D = Ec : D = Fc;
		return D.apply(null, arguments)
	}

	function Gc(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var b = c.slice();
			b.push.apply(b, arguments);
			return a.apply(this, b)
		}
	}
	var Hc = Date.now || function() {
		return +new Date
	};

	function Ic(a, b) {
		a = a.split(".");
		var c = w;
		a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
		for(var d; a.length && (d = a.shift());) !a.length && x(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
	}

	function E(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.m = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.Rn = function(a, c, g) {
			for(var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
			return b.prototype[c].apply(a, d)
		}
	};

	function Jc(a) {
		if(Error.captureStackTrace) Error.captureStackTrace(this, Jc);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	}
	E(Jc, Error);
	Jc.prototype.name = "CustomError";
	var Kc, Lc = {
		kl: 1,
		ik: 2,
		Bh: 3,
		wk: 4,
		ol: 5,
		nl: 6,
		Mm: 7,
		Ak: 8,
		Pk: 9,
		Rk: 10,
		Qk: 11,
		rm: 12
	};

	function Mc(a) {
		return a[a.length - 1]
	}
	var Nc = Array.prototype.indexOf ? function(a, b) {
			return Array.prototype.indexOf.call(a, b, void 0)
		} : function(a, b) {
			if(z(a)) return z(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
			for(var c = 0; c < a.length; c++)
				if(c in a && a[c] === b) return c;
			return -1
		},
		Oc = Array.prototype.forEach ? function(a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		} : function(a, b, c) {
			for(var d = a.length, e = z(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
		},
		Pc = Array.prototype.filter ? function(a, b) {
			return Array.prototype.filter.call(a, b, void 0)
		} : function(a, b) {
			for(var c =
					a.length, d = [], e = 0, g = z(a) ? a.split("") : a, h = 0; h < c; h++)
				if(h in g) {
					var k = g[h];
					b.call(void 0, k, h, a) && (d[e++] = k)
				}
			return d
		},
		Qc = Array.prototype.map ? function(a, b) {
			return Array.prototype.map.call(a, b, void 0)
		} : function(a, b) {
			for(var c = a.length, d = Array(c), e = z(a) ? a.split("") : a, g = 0; g < c; g++) g in e && (d[g] = b.call(void 0, e[g], g, a));
			return d
		},
		Rc = Array.prototype.some ? function(a, b) {
			return Array.prototype.some.call(a, b, void 0)
		} : function(a, b) {
			for(var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
				if(e in d && b.call(void 0, d[e],
						e, a)) return !0;
			return !1
		},
		Sc = Array.prototype.every ? function(a, b) {
			return Array.prototype.every.call(a, b, void 0)
		} : function(a, b) {
			for(var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
				if(e in d && !b.call(void 0, d[e], e, a)) return !1;
			return !0
		};

	function Tc(a, b) {
		a: {
			for(var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
				if(e in d && b.call(void 0, d[e], e, a)) {
					b = e;
					break a
				}
			b = -1
		}
		return 0 > b ? null : z(a) ? a.charAt(b) : a[b]
	}

	function Uc(a, b) {
		return 0 <= Nc(a, b)
	}

	function Vc(a, b) {
		b = Nc(a, b);
		var c;
		(c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
		return c
	}

	function Wc(a) {
		return Array.prototype.concat.apply([], arguments)
	}

	function Xc(a) {
		var b = a.length;
		if(0 < b) {
			for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	}

	function Yc(a, b, c, d) {
		Array.prototype.splice.apply(a, Zc(arguments, 1))
	}

	function Zc(a, b, c) {
		return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
	};

	function $c(a) {
		return a.replace(/\xa0|[ \t]+/g, " ")
	}

	function ad(a) {
		return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
	}
	var bd = String.prototype.trim ? function(a) {
		return a.trim()
	} : function(a) {
		return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
	};

	function cd(a) {
		return a.replace(/^[\s\xa0]+/, "")
	}

	function dd(a) {
		return a.replace(/[\s\xa0]+$/, "")
	}

	function ed(a) {
		return encodeURIComponent(String(a))
	}

	function fd(a) {
		return decodeURIComponent(a.replace(/\+/g, " "))
	}

	function gd(a) {
		if(!hd.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(id, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(jd, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(kd, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ld, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(md, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(nd, "&#0;"));
		return a
	}
	var id = /&/g,
		jd = /</g,
		kd = />/g,
		ld = /"/g,
		md = /'/g,
		nd = /\x00/g,
		hd = /[\x00&<>"']/;

	function od(a) {
		return -1 != a.indexOf("&") ? "document" in w ? pd(a) : qd(a) : a
	}

	function pd(a) {
		var b = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": '"'
		};
		var c = w.document.createElement($a);
		return a.replace(rd, function(a, e) {
			var d = b[a];
			if(d) return d;
			"#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
			d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
			return b[a] = d
		})
	}

	function qd(a) {
		return a.replace(/&([^;]+);/g, function(a, c) {
			switch(c) {
				case "amp":
					return "&";
				case "lt":
					return "<";
				case "gt":
					return ">";
				case "quot":
					return '"';
				default:
					return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
			}
		})
	}
	var rd = /&([^;\s<&]+);?/g;

	function sd(a, b) {
		var c = 0;
		a = bd(String(a)).split(".");
		b = bd(String(b)).split(".");
		for(var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
			var g = a[e] || "",
				h = b[e] || "";
			do {
				g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
				h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
				if(0 == g[0].length && 0 == h[0].length) break;
				c = td(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || td(0 == g[2].length, 0 == h[2].length) || td(g[2], h[2]);
				g = g[3];
				h = h[3]
			} while (0 == c)
		}
		return c
	}

	function td(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	}

	function ud(a) {
		return String(a).replace(/\-([a-z])/g, function(a, c) {
			return c.toUpperCase()
		})
	}

	function vd(a) {
		var b = z(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
		return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
			return b + e.toUpperCase()
		})
	};
	var wd;
	a: {
		var xd = w.navigator;
		if(xd) {
			var yd = xd.userAgent;
			if(yd) {
				wd = yd;
				break a
			}
		}
		wd = ""
	}

	function F(a) {
		return -1 != wd.indexOf(a)
	}

	function zd(a) {
		for(var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
		return c
	};

	function Ad(a, b, c) {
		for(var d in a) b.call(c, a[d], d, a)
	}

	function Bd(a, b) {
		for(var c in a)
			if(b.call(void 0, a[c], c, a)) return !0;
		return !1
	}

	function Cd(a) {
		var b = [],
			c = 0,
			d;
		for(d in a) b[c++] = d;
		return b
	}

	function Dd(a, b) {
		return null !== a && b in a
	}

	function Ed() {
		var a = Fd,
			b;
		for(b in a) return !1;
		return !0
	}

	function Gd(a, b, c) {
		if(null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
		a[b] = c
	}

	function Hd(a) {
		var b = {},
			c;
		for(c in a) b[c] = a[c];
		return b
	}
	var Id = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

	function Jd(a, b) {
		for(var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for(c in d) a[c] = d[c];
			for(var g = 0; g < Id.length; g++) c = Id[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	}

	function Kd(a) {
		var b = arguments.length;
		if(1 == b && C(arguments[0])) return Kd.apply(null, arguments[0]);
		for(var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
		return c
	};

	function Ld() {
		return F("Trident") || F("MSIE")
	}

	function Md() {
		return(F("Chrome") || F("CriOS")) && !F(ka)
	}

	function Nd() {
		function a(a) {
			a = Tc(a, d);
			return c[a] || ""
		}
		var b = wd;
		if(!Ld()) {
			b = zd(b);
			var c = {};
			Oc(b, function(a) {
				c[a[0]] = a[1]
			});
			var d = Gc(Dd, c);
			F(ra) ? a(["Version", ra]) : F(ka) ? a([ka]) : Md() && a(["Chrome", "CriOS"])
		}
	};

	function Od() {
		return F("iPhone") && !F("iPod") && !F("iPad")
	}

	function Pd() {
		return Od() || F("iPad") || F("iPod")
	};

	function Qd(a) {
		Qd[" "](a);
		return a
	}
	Qd[" "] = A;

	function Rd(a, b) {
		try {
			return Qd(a[b]), !0
		} catch(c) {}
		return !1
	}

	function Sd(a, b) {
		var c = Td;
		return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
	};
	var Ud = F(ra),
		G = Ld(),
		Vd = F(ka),
		Wd = Vd || G,
		H = F("Gecko") && !(-1 != wd.toLowerCase().indexOf("webkit") && !F(ka)) && !(F("Trident") || F("MSIE")) && !F(ka),
		I = -1 != wd.toLowerCase().indexOf("webkit") && !F(ka),
		Xd = I && F("Mobile"),
		Yd = F("Macintosh"),
		Zd = F("Windows"),
		$d = F("Android"),
		ae = Od(),
		be = F("iPad"),
		ce = F("iPod"),
		de = Pd();

	function ee() {
		var a = w.document;
		return a ? a.documentMode : void 0
	}
	var fe;
	a: {
		var ge = "",
			he = function() {
				var a = wd;
				if(H) return /rv:([^\);]+)(\)|;)/.exec(a);
				if(Vd) return /Edge\/([\d\.]+)/.exec(a);
				if(G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if(I) return /WebKit\/(\S+)/.exec(a);
				if(Ud) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();he && (ge = he ? he[1] : "");
		if(G) {
			var ie = ee();
			if(null != ie && ie > parseFloat(ge)) {
				fe = String(ie);
				break a
			}
		}
		fe = ge
	}
	var je = fe,
		Td = {};

	function J(a) {
		return Sd(a, function() {
			return 0 <= sd(je, a)
		})
	}

	function ke(a) {
		return Number(le) >= a
	}
	var me;
	var ne = w.document;
	me = ne && G ? ee() || ("CSS1Compat" == ne.compatMode ? parseInt(je, 10) : 5) : void 0;
	var le = me;
	var oe = F("Firefox"),
		pe = Od() || F("iPod"),
		qe = F("iPad"),
		re = F("Android") && !(Md() || F("Firefox") || F(ra) || F("Silk")),
		se = Md(),
		te = F("Safari") && !(Md() || F("Coast") || F(ra) || F(ka) || F("Silk") || F("Android")) && !Pd();
	var ue = null,
		ve = null,
		we = H || I && !te || Ud || !te && !G && typeof w.atob == p;

	function xe(a) {
		if(we) return w.atob(a);
		var b = "";
		ye(a, function(a) {
			b += String.fromCharCode(a)
		});
		return b
	}

	function ye(a, b) {
		function c(b) {
			for(; d < a.length;) {
				var c = a.charAt(d++),
					e = ve[c];
				if(null != e) return e;
				if(!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
			}
			return b
		}
		ze();
		for(var d = 0;;) {
			var e = c(-1),
				g = c(0),
				h = c(64),
				k = c(64);
			if(64 === k && -1 === e) break;
			b(e << 2 | g >> 4);
			64 != h && (b(g << 4 & 240 | h >> 2), 64 != k && b(h << 6 & 192 | k))
		}
	}

	function ze() {
		if(!ue) {
			ue = {};
			ve = {};
			for(var a = 0; 65 > a; a++) ue[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ve[ue[a]] = a, 62 <= a && (ve["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
		}
	};

	function Ae() {}
	var Be = typeof Uint8Array == p;

	function Ce(a, b, c) {
		a.b = null;
		b || (b = []);
		a.l = void 0;
		a.f = -1;
		a.a = b;
		a: {
			if(b = a.a.length) {
				--b;
				var d = a.a[b];
				if(!(null === d || typeof d != Ib || C(d) || Be && d instanceof Uint8Array)) {
					a.g = b - a.f;
					a.c = d;
					break a
				}
			}
			a.g = Number.MAX_VALUE
		}
		a.h = {};
		if(c)
			for(b = 0; b < c.length; b++) d = c[b], d < a.g ? (d += a.f, a.a[d] = a.a[d] || De) : (Ee(a), a.c[d] = a.c[d] || De)
	}
	var De = [];

	function Ee(a) {
		var b = a.g + a.f;
		a.a[b] || (a.c = a.a[b] = {})
	}

	function Fe(a, b) {
		if(b < a.g) {
			b += a.f;
			var c = a.a[b];
			return c === De ? a.a[b] = [] : c
		}
		if(a.c) return c = a.c[b], c === De ? a.c[b] = [] : c
	}

	function Ge(a, b) {
		if(b < a.g) {
			b += a.f;
			var c = a.a[b];
			return c === De ? a.a[b] = [] : c
		}
		c = a.c[b];
		return c === De ? a.c[b] = [] : c
	}

	function He(a, b, c) {
		b < a.g ? a.a[b + a.f] = c : (Ee(a), a.c[b] = c)
	}

	function Ie(a, b, c) {
		a.b || (a.b = {});
		var d = c ? c.Eb() : c;
		a.b[b] = c;
		He(a, b, d)
	}

	function Je(a, b, c) {
		a.b || (a.b = {});
		if(!a.b[b]) {
			for(var d = Ge(a, b), e = [], g = 0; g < d.length; g++) e[g] = new c(d[g]);
			a.b[b] = e
		}(d = a.b[b]) || (d = a.b[b] = []);
		c = new c;
		a = Ge(a, b);
		d.push(c);
		a.push(c.Eb());
		return c
	}

	function Ke(a) {
		if(a.b)
			for(var b in a.b) {
				var c = a.b[b];
				if(C(c))
					for(var d = 0; d < c.length; d++) c[d] && c[d].Eb();
				else c && c.Eb()
			}
	}
	Ae.prototype.Eb = function() {
		Ke(this);
		return this.a
	};
	Ae.prototype.toString = function() {
		Ke(this);
		return this.a.toString()
	};

	function Le(a) {
		if(a.classList) return a.classList;
		a = a.className;
		return z(a) && a.match(/\S+/g) || []
	}

	function Me(a, b) {
		return a.classList ? a.classList.contains(b) : Uc(Le(a), b)
	}

	function K(a, b) {
		a.classList ? a.classList.add(b) : Me(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
	}

	function Ne(a, b) {
		if(a.classList) Oc(b, function(b) {
			K(a, b)
		});
		else {
			var c = {};
			Oc(Le(a), function(a) {
				c[a] = !0
			});
			Oc(b, function(a) {
				c[a] = !0
			});
			a.className = "";
			for(var d in c) a.className += 0 < a.className.length ? " " + d : d
		}
	}

	function Oe(a, b) {
		a.classList ? a.classList.remove(b) : Me(a, b) && (a.className = Pc(Le(a), function(a) {
			return a != b
		}).join(" "))
	}

	function Pe(a, b) {
		a.classList ? Oc(b, function(b) {
			Oe(a, b)
		}) : a.className = Pc(Le(a), function(a) {
			return !Uc(b, a)
		}).join(" ")
	};
	var Qe = !G || ke(9),
		Re = !H && !G || G && ke(9) || H && J("1.9.1"),
		Se = G && !J("9"),
		Te = G || Ud || I,
		Ue = G && !ke(9);

	function Ve(a) {
		var b = !1,
			c;
		return function() {
			b || (c = a(), b = !0);
			return c
		}
	};
	var We = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};

	function Xe(a, b) {
		this.a = a === Ye && b || "";
		this.b = Ze
	}
	Xe.prototype.ob = !0;
	Xe.prototype.Ra = r("a");
	Xe.prototype.toString = function() {
		return "Const{" + this.a + "}"
	};

	function $e(a) {
		return a instanceof Xe && a.constructor === Xe && a.b === Ze ? a.a : "type_error:Const"
	}
	var Ze = {},
		Ye = {};
	var af = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

	function bf() {
		this.a = "";
		this.b = cf
	}
	bf.prototype.ob = !0;
	bf.prototype.Ra = r("a");
	bf.prototype.Ue = !0;
	bf.prototype.Wb = u(1);

	function df(a) {
		if(a instanceof bf && a.constructor === bf && a.b === cf) return a.a;
		B(a);
		return "type_error:TrustedResourceUrl"
	}
	var ef = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		cf = {};

	function ff(a) {
		var b = new bf;
		b.a = a;
		return b
	}

	function gf(a, b, c) {
		if(null == c) return b;
		if(z(c)) return a + encodeURIComponent(c);
		for(var d in c) {
			var e = c[d];
			e = C(e) ? e : [e];
			for(var g = 0; g < e.length; g++) {
				var h = e[g];
				null != h && (b += (b ? "&" : a) + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
			}
		}
		return b
	};

	function hf() {
		this.a = "";
		this.b = jf
	}
	hf.prototype.ob = !0;
	hf.prototype.Ra = r("a");
	hf.prototype.Ue = !0;
	hf.prototype.Wb = u(1);

	function kf(a) {
		if(a instanceof hf && a.constructor === hf && a.b === jf) return a.a;
		B(a);
		return "type_error:SafeUrl"
	}
	var lf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

	function mf(a) {
		if(a instanceof hf) return a;
		a = typeof a == Ib && a.ob ? a.Ra() : String(a);
		lf.test(a) || (a = "about:invalid#zClosurez");
		return nf(a)
	}
	var jf = {};

	function nf(a) {
		var b = new hf;
		b.a = a;
		return b
	}
	nf(za);

	function of () {
		this.a = "";
		this.b = pf
	} of .prototype.ob = !0;
	var pf = {}; of .prototype.Ra = r("a");

	function qf(a) {
		if(a instanceof of && a.constructor === of && a.b === pf) return a.a;
		B(a);
		return "type_error:SafeStyle"
	}

	function rf(a) {
		var b = new of ;
		b.a = a;
		return b
	}
	var sf = rf("");

	function tf(a) {
		if(a instanceof hf) a = 'url("' + kf(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
		else if(a instanceof Xe) a = $e(a);
		else {
			a = String(a);
			var b = a.replace(uf, "$1").replace(uf, "$1").replace(vf, "url");
			if(wf.test(b)) {
				if(b = !xf.test(a)) {
					for(var c = b = !0, d = 0; d < a.length; d++) {
						var e = a.charAt(d);
						"'" == e && c ? b = !b : '"' == e && b && (c = !c)
					}
					b = b && c && yf(a)
				}
				a = b ? zf(a) : "zClosurez"
			} else a = "zClosurez"
		}
		return a
	}

	function yf(a) {
		for(var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
			var e = a.charAt(d);
			if("]" == e) {
				if(b) return !1;
				b = !0
			} else if("[" == e) {
				if(!b) return !1;
				b = !1
			} else if(!b && !c.test(e)) return !1
		}
		return b
	}
	var wf = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
		vf = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
		uf = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
		xf = /\/\*/;

	function zf(a) {
		return a.replace(vf, function(a, c, d, e) {
			var b = "";
			d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
				b = c;
				return d
			});
			a = mf(d).Ra();
			return c + b + a + b + e
		})
	};

	function Af() {
		this.a = "";
		this.b = Bf
	}
	Af.prototype.ob = !0;
	var Bf = {};
	Af.prototype.Ra = r("a");

	function Cf(a) {
		if(a instanceof Af && a.constructor === Af && a.b === Bf) return a.a;
		B(a);
		return "type_error:SafeStyleSheet"
	}

	function Df(a) {
		var b = new Af;
		b.a = a;
		return b
	}
	Df("");

	function Ef() {
		this.a = "";
		this.c = Ff;
		this.b = null
	}
	Ef.prototype.Ue = !0;
	Ef.prototype.Wb = r("b");
	Ef.prototype.ob = !0;
	Ef.prototype.Ra = r("a");

	function Gf(a) {
		if(a instanceof Ef && a.constructor === Ef && a.c === Ff) return a.a;
		B(a);
		return "type_error:SafeHtml"
	}
	var Hf = /^[a-zA-Z0-9-]+$/,
		If = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		Jf = {
			APPLET: !0,
			BASE: !0,
			EMBED: !0,
			IFRAME: !0,
			LINK: !0,
			MATH: !0,
			META: !0,
			OBJECT: !0,
			SCRIPT: !0,
			STYLE: !0,
			SVG: !0,
			TEMPLATE: !0
		};

	function Kf(a, b) {
		var c = String(a);
		if(!Hf.test(c)) throw Error("Invalid tag name <" + c + ">.");
		if(c.toUpperCase() in Jf) throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
		a = String(a);
		c = null;
		var d = "<" + a,
			e = "";
		if(b)
			for(n in b) {
				if(!Hf.test(n)) throw Error('Invalid attribute name "' + n + '".');
				var g = b[n];
				if(null != g) {
					var h = a;
					var k = n;
					var l = g;
					if(l instanceof Xe) l = $e(l);
					else if("style" == k.toLowerCase()) {
						g = void 0;
						h = l;
						if(!Ac(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
							typeof h + " given: " + h);
						if(!(h instanceof of )) {
							l = "";
							for(g in h) {
								if(!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
								var m = h[g];
								null != m && (m = C(m) ? Qc(m, tf).join(" ") : tf(m), l += g + ":" + m + ";")
							}
							h = l ? rf(l) : sf
						}
						l = qf(h)
					} else {
						if(/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
						if(k.toLowerCase() in If)
							if(l instanceof bf) l = df(l);
							else if(l instanceof hf) l = kf(l);
						else if(z(l)) l = mf(l).Ra();
						else throw Error('Attribute "' + k + '" on tag "' + h +
							'" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
					}
					l.ob && (l = l.Ra());
					k = k + '="' + gd(String(l)) + '"';
					e += " " + k
				}
			}
		var n = d + e;
		d = void 0;
		null != d ? C(d) || (d = [d]) : d = [];
		!0 === We[a.toLowerCase()] ? n += ">" : (c = Lf(d), n += ">" + Gf(c) + "</" + a + ">", c = c.Wb());
		(b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
		return Mf(n, c)
	}

	function Lf(a) {
		function b(a) {
			if(C(a)) Oc(a, b);
			else {
				if(a instanceof Ef) var e = a;
				else {
					var h = typeof a == Ib;
					e = null;
					h && a.Ue && (e = a.Wb());
					a = gd(h && a.ob ? a.Ra() : String(a));
					e = Mf(a, e)
				}
				d += Gf(e);
				e = e.Wb();
				0 == c ? c = e : 0 != e && c != e && (c = null)
			}
		}
		var c = 0,
			d = "";
		Oc(arguments, b);
		return Mf(d, c)
	}
	var Ff = {};

	function Mf(a, b) {
		var c = new Ef;
		c.a = a;
		c.b = b;
		return c
	}
	Mf("<!DOCTYPE html>", 0);
	Mf("", 0);
	var Nf = Mf("<br>", 0);
	var Of = Ve(function() {
		var a = document.createElement($a);
		a.innerHTML = "<div><div></div></div>";
		var b = a.firstChild.firstChild;
		a.innerHTML = "";
		return !b.parentElement
	});

	function Pf(a, b) {
		if(Of())
			for(; a.lastChild;) a.removeChild(a.lastChild);
		a.innerHTML = b
	}

	function Qf(a, b) {
		a.src = df(b);
		if(null === wc) {
			a: {
				b = w.document;
				if((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && vc.test(b)) break a;b = null
			}
			wc = b || ""
		}(b = wc) && a.setAttribute("nonce", b)
	};

	function L(a, b) {
		this.x = x(a) ? a : 0;
		this.y = x(b) ? b : 0
	}

	function Rf(a) {
		return new L(a.x, a.y)
	}

	function Sf(a, b) {
		return new L(a.x - b.x, a.y - b.y)
	}
	L.prototype.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	L.prototype.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	L.prototype.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	L.prototype.translate = function(a, b) {
		a instanceof L ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), uc(b) && (this.y += b));
		return this
	};

	function Tf(a, b) {
		this.width = a;
		this.height = b
	}
	Tf.prototype.aspectRatio = function() {
		return this.width / this.height
	};
	Tf.prototype.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	Tf.prototype.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	Tf.prototype.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};

	function Uf(a) {
		return a ? new Vf(N(a)) : Kc || (Kc = new Vf)
	}

	function Wf(a, b) {
		return z(b) ? a.getElementById(b) : b
	}

	function Xf(a, b) {
		return(b || document).getElementsByTagName(String(a))
	}

	function Yf() {
		var a = document;
		return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Zf(document, "*", Fa, void 0)
	}

	function $f(a, b) {
		var c = b || document;
		if(c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
		else {
			c = document;
			var d = b || c;
			a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Zf(c, "*", a, b)[0] || null
		}
		return a || null
	}

	function Zf(a, b, c, d) {
		a = d || a;
		b = b && "*" != b ? String(b).toUpperCase() : "";
		if(a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
		if(c && a.getElementsByClassName) {
			a = a.getElementsByClassName(c);
			if(b) {
				d = {};
				for(var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
				d.length = e;
				return d
			}
			return a
		}
		a = a.getElementsByTagName(b || "*");
		if(c) {
			d = {};
			for(g = e = 0; h = a[g]; g++) b = h.className, typeof b.split == p && Uc(b.split(/\s+/), c) && (d[e++] = h);
			d.length = e;
			return d
		}
		return a
	}

	function ag(a, b) {
		Ad(b, function(b, d) {
			b && typeof b == Ib && b.ob && (b = b.Ra());
			"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : bg.hasOwnProperty(d) ? a.setAttribute(bg[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
		})
	}
	var bg = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		nonce: "nonce",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width"
	};

	function cg(a) {
		a = a.document;
		a = dg(a) ? a.documentElement : a.body;
		return new Tf(a.clientWidth, a.clientHeight)
	}

	function eg(a) {
		var b = fg(a);
		a = a.parentWindow || a.defaultView;
		return G && J("10") && a.pageYOffset != b.scrollTop ? new L(b.scrollLeft, b.scrollTop) : new L(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
	}

	function fg(a) {
		return a.scrollingElement ? a.scrollingElement : !I && dg(a) ? a.documentElement : a.body || a.documentElement
	}

	function gg(a) {
		return a ? a.parentWindow || a.defaultView : window
	}

	function hg(a, b, c) {
		return ig(document, arguments)
	}

	function ig(a, b) {
		var c = String(b[0]),
			d = b[1];
		if(!Qe && d && (d.name || d.type)) {
			c = ["<", c];
			d.name && c.push(' name="', gd(d.name), '"');
			if(d.type) {
				c.push(' type="', gd(d.type), '"');
				var e = {};
				Jd(e, d);
				delete e.type;
				d = e
			}
			c.push(">");
			c = c.join("")
		}
		c = a.createElement(c);
		d && (z(d) ? c.className = d : C(d) ? c.className = d.join(" ") : ag(c, d));
		2 < b.length && jg(a, c, b, 2);
		return c
	}

	function jg(a, b, c, d) {
		function e(c) {
			c && b.appendChild(z(c) ? a.createTextNode(c) : c)
		}
		for(; d < c.length; d++) {
			var g = c[d];
			!yc(g) || Ac(g) && 0 < g.nodeType ? e(g) : Oc(kg(g) ? Xc(g) : g, e)
		}
	}

	function lg() {
		var a = Kf("WBR"),
			b = document,
			c = b.createElement(f);
		G ? (a = Lf(Nf, a), Pf(c, Gf(a)), c.removeChild(c.firstChild)) : Pf(c, Gf(a));
		if(1 == c.childNodes.length) c = c.removeChild(c.firstChild);
		else {
			for(b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
			c = b
		}
		return c
	}

	function dg(a) {
		return "CSS1Compat" == a.compatMode
	}

	function mg(a) {
		if(1 != a.nodeType) return !1;
		switch(a.tagName) {
			case "APPLET":
			case "AREA":
			case "BASE":
			case "BR":
			case "COL":
			case "COMMAND":
			case "EMBED":
			case "FRAME":
			case "HR":
			case "IMG":
			case oa:
			case ma:
			case "ISINDEX":
			case "KEYGEN":
			case "LINK":
			case "NOFRAMES":
			case "NOSCRIPT":
			case "META":
			case "OBJECT":
			case "PARAM":
			case ta:
			case "SOURCE":
			case "STYLE":
			case "TRACK":
			case "WBR":
				return !1
		}
		return !0
	}

	function ng(a, b) {
		jg(N(a), a, arguments, 1)
	}

	function og(a) {
		for(var b; b = a.firstChild;) a.removeChild(b)
	}

	function pg(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b)
	}

	function qg(a, b) {
		b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
	}

	function rg(a) {
		a && a.parentNode && a.parentNode.removeChild(a)
	}

	function sg(a) {
		return Re && void 0 != a.children ? a.children : Pc(a.childNodes, function(a) {
			return 1 == a.nodeType
		})
	}

	function tg(a) {
		return x(a.firstElementChild) ? a.firstElementChild : ug(a.firstChild, !0)
	}

	function ug(a, b) {
		for(; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
		return a
	}

	function vg(a) {
		return Ac(a) && 1 == a.nodeType
	}

	function wg(a, b) {
		if(!a || !b) return !1;
		if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
		for(; b && a != b;) b = b.parentNode;
		return b == a
	}

	function xg(a, b) {
		if(a == b) return 0;
		if(a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
		if(G && !ke(9)) {
			if(9 == a.nodeType) return -1;
			if(9 == b.nodeType) return 1
		}
		if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
			var c = 1 == a.nodeType,
				d = 1 == b.nodeType;
			if(c && d) return a.sourceIndex - b.sourceIndex;
			var e = a.parentNode,
				g = b.parentNode;
			return e == g ? yg(a, b) : !c && wg(e, b) ? -1 * zg(a, b) : !d && wg(g, a) ? zg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
		}
		d = N(a);
		c = d.createRange();
		c.selectNode(a);
		c.collapse(!0);
		a = d.createRange();
		a.selectNode(b);
		a.collapse(!0);
		return c.compareBoundaryPoints(w.Range.START_TO_END, a)
	}

	function zg(a, b) {
		var c = a.parentNode;
		if(c == b) return -1;
		for(; b.parentNode != c;) b = b.parentNode;
		return yg(b, a)
	}

	function yg(a, b) {
		for(; b = b.previousSibling;)
			if(b == a) return -1;
		return 1
	}

	function Ag(a) {
		var b, c = arguments.length;
		if(!c) return null;
		if(1 == c) return arguments[0];
		var d = [],
			e = Infinity;
		for(b = 0; b < c; b++) {
			for(var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
			d.push(g);
			e = Math.min(e, g.length)
		}
		g = null;
		for(b = 0; b < e; b++) {
			h = d[0][b];
			for(var k = 1; k < c; k++)
				if(h != d[k][b]) return g;
			g = h
		}
		return g
	}

	function N(a) {
		return 9 == a.nodeType ? a : a.ownerDocument || a.document
	}

	function Bg(a) {
		return a.contentDocument || a.contentWindow.document
	}

	function Cg(a) {
		try {
			return a.contentWindow || (a.contentDocument ? gg(a.contentDocument) : null)
		} catch(b) {}
		return null
	}

	function Dg(a, b) {
		if("textContent" in a) a.textContent = b;
		else if(3 == a.nodeType) a.data = String(b);
		else if(a.firstChild && 3 == a.firstChild.nodeType) {
			for(; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
			a.firstChild.data = String(b)
		} else og(a), a.appendChild(N(a).createTextNode(String(b)))
	}
	var Eg = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		},
		Fg = {
			IMG: " ",
			BR: "\n"
		};

	function Gg(a, b) {
		b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
	}

	function Hg(a) {
		return G && !J("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
	}

	function Ig(a) {
		a = a.tabIndex;
		return uc(a) && 0 <= a && 32768 > a
	}

	function Jg(a) {
		if(Se && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
		else {
			var b = [];
			Kg(a, b, !0);
			a = b.join("")
		}
		a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		a = a.replace(/\u200B/g, "");
		Se || (a = a.replace(/ +/g, " "));
		" " != a && (a = a.replace(/^\s*/, ""));
		return a
	}

	function Lg(a) {
		var b = [];
		Kg(a, b, !1);
		return b.join("")
	}

	function Kg(a, b, c) {
		if(!(a.nodeName in Eg))
			if(3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if(a.nodeName in Fg) b.push(Fg[a.nodeName]);
		else
			for(a = a.firstChild; a;) Kg(a, b, c), a = a.nextSibling
	}

	function kg(a) {
		if(a && typeof a.length == Hb) {
			if(Ac(a)) return typeof a.item == p || typeof a.item == Wb;
			if(zc(a)) return typeof a.item == p
		}
		return !1
	}

	function Vf(a) {
		this.a = a || w.document || document
	}
	v = Vf.prototype;
	v.j = function(a) {
		return Wf(this.a, a)
	};
	v.D = function(a, b, c) {
		return ig(this.a, arguments)
	};

	function Mg(a, b) {
		return a.a.createElement(String(b))
	}

	function Ng(a) {
		a = a.a;
		return a.parentWindow || a.defaultView
	}
	v.appendChild = function(a, b) {
		a.appendChild(b)
	};
	v.Tc = og;
	v.di = sg;
	v.eg = tg;
	v.contains = wg;
	v.fb = Dg;
	v.gg = Jg;

	function Og(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d
	}
	v = Og.prototype;
	v.contains = function(a) {
		return this && a ? a instanceof Og ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
	};
	v.ceil = function() {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this
	};
	v.floor = function() {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this
	};
	v.round = function() {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this
	};
	v.translate = function(a, b) {
		a instanceof L ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, uc(b) && (this.top += b, this.bottom += b));
		return this
	};

	function Pg(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	}
	v = Pg.prototype;
	v.contains = function(a) {
		return a instanceof L ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
	};
	v.ceil = function() {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	v.floor = function() {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	v.round = function() {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	v.translate = function(a, b) {
		a instanceof L ? (this.left += a.x, this.top += a.y) : (this.left += a, uc(b) && (this.top += b));
		return this
	};

	function O(a, b, c) {
		if(z(b))(b = Qg(a, b)) && (a.style[b] = c);
		else
			for(var d in b) {
				c = a;
				var e = b[d],
					g = Qg(c, d);
				g && (c.style[g] = e)
			}
	}
	var Rg = {};

	function Qg(a, b) {
		var c = Rg[b];
		if(!c) {
			var d = ud(b);
			c = d;
			void 0 === a.style[d] && (d = (I ? "Webkit" : H ? "Moz" : G ? "ms" : Ud ? "O" : null) + vd(d), void 0 !== a.style[d] && (c = d));
			Rg[b] = c
		}
		return c
	}

	function Sg(a, b) {
		var c = N(a);
		return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
	}

	function Tg(a, b) {
		return Sg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
	}

	function Ug(a, b, c) {
		if(b instanceof L) {
			var d = b.x;
			b = b.y
		} else d = b, b = c;
		a.style.left = Vg(d);
		a.style.top = Vg(b)
	}

	function Wg(a) {
		a = a ? N(a) : document;
		return !G || ke(9) || dg(Uf(a).a) ? a.documentElement : a.body
	}

	function Xg(a) {
		try {
			var b = a.getBoundingClientRect()
		} catch(c) {
			return {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			}
		}
		G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
		return b
	}

	function Yg(a) {
		if(G && !ke(8)) return a.offsetParent;
		var b = N(a),
			c = Tg(a, Mb),
			d = "fixed" == c || c == Ba;
		for(a = a.parentNode; a && a != b; a = a.parentNode)
			if(11 == a.nodeType && a.host && (a = a.host), c = Tg(a, Mb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ba || "relative" == c)) return a;
		return null
	}

	function Zg(a) {
		for(var b = new Og(0, Infinity, Infinity, 0), c = Uf(a), d = c.a.body, e = c.a.documentElement, g = fg(c.a); a = Yg(a);)
			if(!(G && 0 == a.clientWidth || I && 0 == a.clientHeight && a == d) && a != d && a != e && Tg(a, "overflow") != fc) {
				var h = $g(a),
					k = new L(a.clientLeft, a.clientTop);
				h.x += k.x;
				h.y += k.y;
				b.top = Math.max(b.top, h.y);
				b.right = Math.min(b.right, h.x + a.clientWidth);
				b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
				b.left = Math.max(b.left, h.x)
			}
		d = g.scrollLeft;
		g = g.scrollTop;
		b.left = Math.max(b.left, d);
		b.top = Math.max(b.top, g);
		c = cg(Ng(c) ||
			window);
		b.right = Math.min(b.right, d + c.width);
		b.bottom = Math.min(b.bottom, g + c.height);
		return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
	}

	function $g(a) {
		var b = N(a),
			c = new L(0, 0),
			d = Wg(b);
		if(a == d) return c;
		a = Xg(a);
		b = eg(Uf(b).a);
		c.x = a.left + b.x;
		c.y = a.top + b.y;
		return c
	}

	function ah(a, b) {
		var c = new L(0, 0),
			d = gg(N(a));
		if(!Rd(d, "parent")) return c;
		do {
			if(d == b) var e = $g(a);
			else e = Xg(a), e = new L(e.left, e.top);
			c.x += e.x;
			c.y += e.y
		} while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
		return c
	}

	function Vg(a) {
		typeof a == Hb && (a += "px");
		return a
	}

	function bh(a) {
		var b = ch;
		if(Tg(a, "display") != q) return b(a);
		var c = a.style,
			d = c.display,
			e = c.visibility,
			g = c.position;
		c.visibility = rb;
		c.position = Ba;
		c.display = "inline";
		a = b(a);
		c.display = d;
		c.position = g;
		c.visibility = e;
		return a
	}

	function ch(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight,
			d = I && !b && !c;
		return x(b) && !d || !a.getBoundingClientRect ? new Tf(b, c) : (a = Xg(a), new Tf(a.right - a.left, a.bottom - a.top))
	}

	function P(a, b) {
		a.style.display = b ? "" : q
	}

	function dh(a, b) {
		b = Uf(b);
		var c = b.a;
		if(G && c.createStyleSheet) b = c.createStyleSheet(), eh(b, a);
		else {
			c = Zf(b.a, "HEAD", void 0, void 0)[0];
			if(!c) {
				var d = Zf(b.a, "BODY", void 0, void 0)[0];
				c = b.D("HEAD");
				d.parentNode.insertBefore(c, d)
			}
			d = b.D("STYLE");
			eh(d, a);
			b.appendChild(c, d)
		}
	}

	function eh(a, b) {
		b = Cf(b);
		G && x(a.cssText) ? a.cssText = b : a.innerHTML = b
	}

	function fh(a) {
		return Sb == Tg(a, Za)
	}
	var gh = H ? "MozUserSelect" : I || Vd ? "WebkitUserSelect" : null;

	function hh(a, b, c) {
		c = c ? null : a.getElementsByTagName("*");
		if(gh) {
			if(b = b ? q : "", a.style && (a.style[gh] = b), c) {
				a = 0;
				for(var d; d = c[a]; a++) d.style && (d.style[gh] = b)
			}
		} else if(G || Ud)
			if(b = b ? "on" : "", a.setAttribute("unselectable", b), c)
				for(a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
	}

	function ih(a) {
		return new Tf(a.offsetWidth, a.offsetHeight)
	}

	function jh(a, b) {
		var c = dg(Uf(N(a)).a);
		if(!G || J("10") || c && J("8")) kh(a, b, "content-box");
		else {
			var d = a.style;
			c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = lh(a), a = mh(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
		}
	}

	function kh(a, b, c) {
		a = a.style;
		H ? a.MozBoxSizing = c : I ? a.WebkitBoxSizing = c : a.boxSizing = c;
		a.width = Math.max(b.width, 0) + "px";
		a.height = Math.max(b.height, 0) + "px"
	}

	function nh(a, b, c, d) {
		if(/^\d+px?$/.test(b)) return parseInt(b, 10);
		var e = a.style[c],
			g = a.runtimeStyle[c];
		a.runtimeStyle[c] = a.currentStyle[c];
		a.style[c] = b;
		b = a.style[d];
		a.style[c] = e;
		a.runtimeStyle[c] = g;
		return +b
	}

	function oh(a, b) {
		return(b = a.currentStyle ? a.currentStyle[b] : null) ? nh(a, b, "left", "pixelLeft") : 0
	}

	function lh(a) {
		if(G) {
			var b = oh(a, Kb),
				c = oh(a, Lb),
				d = oh(a, "paddingTop");
			a = oh(a, "paddingBottom");
			return new Og(d, c, a, b)
		}
		b = Sg(a, Kb);
		c = Sg(a, Lb);
		d = Sg(a, "paddingTop");
		a = Sg(a, "paddingBottom");
		return new Og(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
	}
	var ph = {
		thin: 2,
		medium: 4,
		thick: 6
	};

	function qh(a, b) {
		if((a.currentStyle ? a.currentStyle[b + "Style"] : null) == q) return 0;
		b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
		return b in ph ? ph[b] : nh(a, b, "left", "pixelLeft")
	}

	function mh(a) {
		if(G && !ke(9)) {
			var b = qh(a, "borderLeft"),
				c = qh(a, "borderRight"),
				d = qh(a, "borderTop");
			a = qh(a, "borderBottom");
			return new Og(d, c, a, b)
		}
		b = Sg(a, "borderLeftWidth");
		c = Sg(a, "borderRightWidth");
		d = Sg(a, "borderTopWidth");
		a = Sg(a, "borderBottomWidth");
		return new Og(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
	};
	var rh;
	Kd(["A", "AREA", "BUTTON", "HEAD", oa, "LINK", "MENU", "META", "OPTGROUP", qa, "PROGRESS", "STYLE", "SELECT", "SOURCE", va, wa, "TRACK"]);

	function sh(a, b) {
		b ? a.setAttribute("role", b) : a.removeAttribute("role")
	}

	function th(a, b, c) {
		C(c) && (c = c.join(" "));
		var d = "aria-" + b;
		"" === c || void 0 == c ? (rh || (rh = {
			atomic: !1,
			autocomplete: q,
			dropeffect: q,
			haspopup: !1,
			live: "off",
			multiline: !1,
			multiselectable: !1,
			orientation: ec,
			readonly: !1,
			relevant: "additions text",
			required: !1,
			sort: q,
			busy: !1,
			disabled: !1,
			hidden: !1,
			invalid: "false"
		}), c = rh, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
	};

	function Q() {
		this.sb = this.sb;
		this.xa = this.xa
	}
	Q.prototype.sb = !1;
	Q.prototype.M = function() {
		this.sb || (this.sb = !0, this.F())
	};

	function uh(a, b) {
		a.sb ? x(void 0) ? b.call(void 0) : b() : (a.xa || (a.xa = []), a.xa.push(x(void 0) ? D(b, void 0) : b))
	}
	Q.prototype.F = function() {
		if(this.xa)
			for(; this.xa.length;) this.xa.shift()()
	};

	function vh(a) {
		a && typeof a.M == p && a.M()
	};
	var wh = !G || ke(9),
		xh = !G || ke(9),
		yh = G && !J("9"),
		zh = function() {
			if(!w.addEventListener || !Object.defineProperty) return !1;
			var a = !1,
				b = Object.defineProperty({}, "passive", {
					get: function() {
						a = !0
					}
				});
			try {
				w.addEventListener("test", A, b), w.removeEventListener("test", A, b)
			} catch(c) {}
			return a
		}();

	function Ah(a, b) {
		this.type = a;
		this.currentTarget = this.target = b;
		this.c = !1;
		this.Yg = !0
	}
	Ah.prototype.stopPropagation = function() {
		this.c = !0
	};
	Ah.prototype.b = function() {
		this.Yg = !1
	};

	function Bh(a) {
		return I ? "webkit" + a : Ud ? "o" + a.toLowerCase() : a.toLowerCase()
	}
	var Ch = {
		yk: Sa,
		Tm: "rightclick",
		Kk: Xa,
		rc: Bb,
		sc: Fb,
		$l: Eb,
		Zl: Db,
		Yl: Cb,
		Wl: "mouseenter",
		Xl: "mouseleave",
		qc: "mousecancel",
		Ym: "selectionchange",
		Zm: "selectstart",
		On: "wheel",
		Hl: yb,
		Gl: xb,
		Il: zb,
		rk: Ka,
		wl: db,
		Lk: Ya,
		xl: eb,
		yl: fb,
		xk: Oa,
		Qm: "reset",
		Xm: "select",
		pn: "submit",
		El: "input",
		Nm: "propertychange",
		el: "dragstart",
		$k: "drag",
		bl: "dragenter",
		dl: "dragover",
		cl: "dragleave",
		il: "drop",
		al: "dragend",
		yn: "touchstart",
		xn: "touchmove",
		wn: "touchend",
		vn: "touchcancel",
		qk: "beforeunload",
		Fk: "consolemessage",
		Gk: Wa,
		Mk: "devicechange",
		Nk: "devicemotion",
		Ok: "deviceorientation",
		Uk: "DOMContentLoaded",
		pl: "error",
		Cl: "help",
		Jl: Ab,
		Rl: "losecapture",
		um: "orientationchange",
		Pm: Rb,
		Rm: "resize",
		Um: "scroll",
		En: "unload",
		uk: "canplay",
		vk: "canplaythrough",
		jl: "durationchange",
		ll: "emptied",
		ml: "ended",
		Ml: "loadeddata",
		Nl: "loadedmetadata",
		Am: "pause",
		Bm: "play",
		Cm: "playing",
		Om: "ratechange",
		Vm: "seeked",
		Wm: "seeking",
		mn: "stalled",
		qn: "suspend",
		sn: "timeupdate",
		Mn: "volumechange",
		Nn: "waiting",
		jn: "sourceopen",
		hn: "sourceended",
		gn: "sourceclosed",
		Zj: "abort",
		Gn: "update",
		Jn: "updatestart",
		Hn: "updateend",
		Bl: "hashchange",
		wm: "pagehide",
		xm: "pageshow",
		Lm: "popstate",
		Ik: "copy",
		zm: "paste",
		Jk: "cut",
		jk: "beforecopy",
		kk: "beforecut",
		nk: "beforepaste",
		tm: "online",
		sm: "offline",
		Ul: "message",
		Ek: "connect",
		Fl: "install",
		$j: "activate",
		vl: "fetch",
		zl: "foreignfetch",
		Vl: "messageerror",
		nn: "statechange",
		In: "updatefound",
		Hk: "controllerchange",
		gk: Bh("AnimationStart"),
		ek: Bh("AnimationEnd"),
		fk: Bh("AnimationIteration"),
		zn: Bh("TransitionEnd"),
		Em: "pointerdown",
		Km: "pointerup",
		Dm: "pointercancel",
		Hm: "pointermove",
		Jm: "pointerover",
		Im: "pointerout",
		Fm: "pointerenter",
		Gm: "pointerleave",
		Al: "gotpointercapture",
		Sl: "lostpointercapture",
		am: "MSGestureChange",
		bm: "MSGestureEnd",
		cm: "MSGestureHold",
		dm: "MSGestureStart",
		em: "MSGestureTap",
		fm: "MSGotPointerCapture",
		gm: "MSInertiaStart",
		hm: "MSLostPointerCapture",
		im: "MSPointerCancel",
		jm: "MSPointerDown",
		km: "MSPointerEnter",
		lm: "MSPointerHover",
		mm: "MSPointerLeave",
		nm: "MSPointerMove",
		om: "MSPointerOut",
		pm: "MSPointerOver",
		qm: "MSPointerUp",
		Bh: "text",
		rn: G ? "textinput" : "textInput",
		Ck: "compositionstart",
		Dk: "compositionupdate",
		Bk: "compositionend",
		lk: "beforeinput",
		ul: "exit",
		Kl: "loadabort",
		Ll: "loadcommit",
		Ol: "loadredirect",
		Pl: "loadstart",
		Ql: "loadstop",
		Sm: "responsive",
		fn: "sizechanged",
		Fn: "unresponsive",
		Ln: "visibilitychange",
		on: "storage",
		Zk: "DOMSubtreeModified",
		Vk: "DOMNodeInserted",
		Xk: "DOMNodeRemoved",
		Yk: "DOMNodeRemovedFromDocument",
		Wk: "DOMNodeInsertedIntoDocument",
		Sk: "DOMAttrModified",
		Tk: "DOMCharacterDataModified",
		pk: "beforeprint",
		ak: "afterprint",
		mk: "beforeinstallprompt",
		hk: "appinstalled"
	};

	function Dh(a, b) {
		Ah.call(this, a ? a.type : "");
		this.relatedTarget = this.currentTarget = this.target = null;
		this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
		this.key = "";
		this.keyCode = 0;
		this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.pointerId = 0;
		this.pointerType = "";
		this.a = null;
		if(a) {
			var c = this.type = a.type,
				d = a.changedTouches ? a.changedTouches[0] : null;
			this.target = a.target || a.srcElement;
			this.currentTarget = b;
			(b = a.relatedTarget) ? H && (Rd(b, "nodeName") || (b = null)): c == Eb ? b = a.fromElement :
				c == Db && (b = a.toElement);
			this.relatedTarget = b;
			null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
			this.button = a.button;
			this.keyCode = a.keyCode || 0;
			this.key = a.key || "";
			this.ctrlKey = a.ctrlKey;
			this.altKey = a.altKey;
			this.shiftKey = a.shiftKey;
			this.metaKey =
				a.metaKey;
			this.f = Yd ? a.metaKey : a.ctrlKey;
			this.pointerId = a.pointerId || 0;
			this.pointerType = z(a.pointerType) ? a.pointerType : Eh[a.pointerType] || "";
			this.a = a;
			a.defaultPrevented && this.b()
		}
	}
	E(Dh, Ah);
	var Fh = [1, 4, 2],
		Eh = {
			2: "touch",
			3: "pen",
			4: "mouse"
		};

	function Gh(a) {
		return wh ? 0 == a.a.button : a.type == Sa ? !0 : !!(a.a.button & Fh[0])
	}
	Dh.prototype.stopPropagation = function() {
		Dh.m.stopPropagation.call(this);
		this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
	};
	Dh.prototype.b = function() {
		Dh.m.b.call(this);
		var a = this.a;
		if(a.preventDefault) a.preventDefault();
		else if(a.returnValue = !1, yh) try {
			if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
		} catch(b) {}
	};
	var Hh = "closure_listenable_" + (1E6 * Math.random() | 0);

	function Ih(a) {
		return !(!a || !a[Hh])
	}
	var Jh = 0;

	function Kh(a, b, c, d, e) {
		this.listener = a;
		this.a = null;
		this.src = b;
		this.type = c;
		this.capture = !!d;
		this.Kd = e;
		this.key = ++Jh;
		this.nc = this.gd = !1
	}

	function Lh(a) {
		a.nc = !0;
		a.listener = null;
		a.a = null;
		a.src = null;
		a.Kd = null
	};

	function Mh(a) {
		this.src = a;
		this.a = {};
		this.b = 0
	}
	Mh.prototype.add = function(a, b, c, d, e) {
		var g = a.toString();
		a = this.a[g];
		a || (a = this.a[g] = [], this.b++);
		var h = Nh(a, b, d, e); - 1 < h ? (b = a[h], c || (b.gd = !1)) : (b = new Kh(b, this.src, g, !!d, e), b.gd = c, a.push(b));
		return b
	};
	Mh.prototype.remove = function(a, b, c, d) {
		a = a.toString();
		if(!(a in this.a)) return !1;
		var e = this.a[a];
		b = Nh(e, b, c, d);
		return -1 < b ? (Lh(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
	};

	function Oh(a, b) {
		var c = b.type;
		if(!(c in a.a)) return !1;
		var d = Vc(a.a[c], b);
		d && (Lh(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
		return d
	}

	function Ph(a, b) {
		b = b && b.toString();
		var c = 0,
			d;
		for(d in a.a)
			if(!b || d == b) {
				for(var e = a.a[d], g = 0; g < e.length; g++) ++c, Lh(e[g]);
				delete a.a[d];
				a.b--
			}
		return c
	}
	Mh.prototype.Gc = function(a, b, c, d) {
		a = this.a[a.toString()];
		var e = -1;
		a && (e = Nh(a, b, c, d));
		return -1 < e ? a[e] : null
	};
	Mh.prototype.hasListener = function(a, b) {
		var c = x(a),
			d = c ? a.toString() : "",
			e = x(b);
		return Bd(this.a, function(a) {
			for(var g = 0; g < a.length; ++g)
				if(!(c && a[g].type != d || e && a[g].capture != b)) return !0;
			return !1
		})
	};

	function Nh(a, b, c, d) {
		for(var e = 0; e < a.length; ++e) {
			var g = a[e];
			if(!g.nc && g.listener == b && g.capture == !!c && g.Kd == d) return e
		}
		return -1
	};
	var Qh = "closure_lm_" + (1E6 * Math.random() | 0),
		Rh = {},
		Sh = 0;

	function S(a, b, c, d, e) {
		if(d && d.once) return Th(a, b, c, d, e);
		if(C(b)) {
			for(var g = 0; g < b.length; g++) S(a, b[g], c, d, e);
			return null
		}
		c = Uh(c);
		return Ih(a) ? a.w(b, c, Ac(d) ? !!d.capture : !!d, e) : Vh(a, b, c, !1, d, e)
	}

	function Vh(a, b, c, d, e, g) {
		if(!b) throw Error("Invalid event type");
		var h = Ac(e) ? !!e.capture : !!e,
			k = Wh(a);
		k || (a[Qh] = k = new Mh(a));
		c = k.add(b, c, d, h, g);
		if(c.a) return c;
		d = Xh();
		c.a = d;
		d.src = a;
		d.listener = c;
		if(a.addEventListener) zh || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
		else if(a.attachEvent) a.attachEvent(Yh(b.toString()), d);
		else if(a.addListener && a.removeListener) a.addListener(d);
		else throw Error("addEventListener and attachEvent are unavailable.");
		Sh++;
		return c
	}

	function Xh() {
		var a = Zh,
			b = xh ? function(c) {
				return a.call(b.src, b.listener, c)
			} : function(c) {
				c = a.call(b.src, b.listener, c);
				if(!c) return c
			};
		return b
	}

	function Th(a, b, c, d, e) {
		if(C(b)) {
			for(var g = 0; g < b.length; g++) Th(a, b[g], c, d, e);
			return null
		}
		c = Uh(c);
		return Ih(a) ? a.zb(b, c, Ac(d) ? !!d.capture : !!d, e) : Vh(a, b, c, !0, d, e)
	}

	function $h(a, b, c, d, e) {
		if(C(b))
			for(var g = 0; g < b.length; g++) $h(a, b[g], c, d, e);
		else d = Ac(d) ? !!d.capture : !!d, c = Uh(c), Ih(a) ? a.ca(b, c, d, e) : a && (a = Wh(a)) && (b = a.Gc(b, c, d, e)) && ai(b)
	}

	function ai(a) {
		if(uc(a) || !a || a.nc) return !1;
		var b = a.src;
		if(Ih(b)) return Oh(b.Ka, a);
		var c = a.type,
			d = a.a;
		b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Yh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
		Sh--;
		(c = Wh(b)) ? (Oh(c, a), 0 == c.b && (c.src = null, b[Qh] = null)) : Lh(a);
		return !0
	}

	function bi(a, b) {
		if(!a) return 0;
		if(Ih(a)) return a.Ka ? Ph(a.Ka, b) : 0;
		a = Wh(a);
		if(!a) return 0;
		var c = 0;
		b = b && b.toString();
		for(var d in a.a)
			if(!b || d == b)
				for(var e = a.a[d].concat(), g = 0; g < e.length; ++g) ai(e[g]) && ++c;
		return c
	}

	function Yh(a) {
		return a in Rh ? Rh[a] : Rh[a] = "on" + a
	}

	function ci(a, b, c, d) {
		var e = !0;
		if(a = Wh(a))
			if(b = a.a[b.toString()])
				for(b = b.concat(), a = 0; a < b.length; a++) {
					var g = b[a];
					g && g.capture == c && !g.nc && (g = di(g, d), e = e && !1 !== g)
				}
		return e
	}

	function di(a, b) {
		var c = a.listener,
			d = a.Kd || a.src;
		a.gd && ai(a);
		return c.call(d, b)
	}

	function Zh(a, b) {
		if(a.nc) return !0;
		if(!xh) {
			if(!b) a: {
				b = ["window", "event"];
				for(var c = w, d = 0; d < b.length; d++)
					if(c = c[b[d]], null == c) {
						b = null;
						break a
					}
				b = c
			}
			d = b;
			b = new Dh(d, this);
			c = !0;
			if(!(0 > d.keyCode || void 0 != d.returnValue)) {
				a: {
					var e = !1;
					if(0 == d.keyCode) try {
						d.keyCode = -1;
						break a
					} catch(h) {
						e = !0
					}
					if(e || void 0 == d.returnValue) d.returnValue = !0
				}
				d = [];
				for(e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
				for(e = d.length - 1; !b.c && 0 <= e; e--) {
					b.currentTarget = d[e];
					var g = ci(d[e], a, !0, b);
					c = c && g
				}
				for(e = 0; !b.c && e < d.length; e++) b.currentTarget =
					d[e],
				g = ci(d[e], a, !1, b),
				c = c && g
			}
			return c
		}
		return di(a, new Dh(b, this))
	}

	function Wh(a) {
		a = a[Qh];
		return a instanceof Mh ? a : null
	}
	var ei = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

	function Uh(a) {
		if(zc(a)) return a;
		a[ei] || (a[ei] = function(b) {
			return a.handleEvent(b)
		});
		return a[ei]
	};

	function fi(a) {
		Q.call(this);
		this.b = a;
		this.a = {}
	}
	E(fi, Q);
	var gi = [];
	v = fi.prototype;
	v.w = function(a, b, c, d) {
		return hi(this, a, b, c, d)
	};

	function ii(a, b, c, d) {
		hi(a, b, Sa, c, !1, d)
	}

	function hi(a, b, c, d, e, g) {
		C(c) || (c && (gi[0] = c.toString()), c = gi);
		for(var h = 0; h < c.length; h++) {
			var k = S(b, c[h], d || a.handleEvent, e || !1, g || a.b || a);
			if(!k) break;
			a.a[k.key] = k
		}
		return a
	}
	v.zb = function(a, b, c, d) {
		return ji(this, a, b, c, d)
	};

	function ji(a, b, c, d, e, g) {
		if(C(c))
			for(var h = 0; h < c.length; h++) ji(a, b, c[h], d, e, g);
		else {
			b = Th(b, c, d || a.handleEvent, e, g || a.b || a);
			if(!b) return a;
			a.a[b.key] = b
		}
		return a
	}
	v.ca = function(a, b, c, d, e) {
		if(C(b))
			for(var g = 0; g < b.length; g++) this.ca(a, b[g], c, d, e);
		else c = c || this.handleEvent, d = Ac(d) ? !!d.capture : !!d, e = e || this.b || this, c = Uh(c), d = !!d, b = Ih(a) ? a.Gc(b, c, d, e) : a ? (a = Wh(a)) ? a.Gc(b, c, d, e) : null : null, b && (ai(b), delete this.a[b.key]);
		return this
	};

	function ki(a) {
		Ad(a.a, function(a, c) {
			this.a.hasOwnProperty(c) && ai(a)
		}, a);
		a.a = {}
	}
	v.F = function() {
		fi.m.F.call(this);
		ki(this)
	};
	v.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};

	function li() {
		Q.call(this);
		this.Ka = new Mh(this);
		this.Lh = this;
		this.qf = null
	}
	E(li, Q);
	li.prototype[Hh] = !0;
	v = li.prototype;
	v.pd = r("qf");
	v.xf = ic("qf");
	v.addEventListener = function(a, b, c, d) {
		S(this, a, b, c, d)
	};
	v.removeEventListener = function(a, b, c, d) {
		$h(this, a, b, c, d)
	};
	v.dispatchEvent = function(a) {
		var b = this.pd();
		if(b) {
			var c = [];
			for(var d = 1; b; b = b.pd()) c.push(b), ++d
		}
		b = this.Lh;
		d = a.type || a;
		if(z(a)) a = new Ah(a, b);
		else if(a instanceof Ah) a.target = a.target || b;
		else {
			var e = a;
			a = new Ah(d, b);
			Jd(a, e)
		}
		e = !0;
		if(c)
			for(var g = c.length - 1; !a.c && 0 <= g; g--) {
				var h = a.currentTarget = c[g];
				e = mi(h, d, !0, a) && e
			}
		a.c || (h = a.currentTarget = b, e = mi(h, d, !0, a) && e, a.c || (e = mi(h, d, !1, a) && e));
		if(c)
			for(g = 0; !a.c && g < c.length; g++) h = a.currentTarget = c[g], e = mi(h, d, !1, a) && e;
		return e
	};
	v.F = function() {
		li.m.F.call(this);
		this.Ka && Ph(this.Ka, void 0);
		this.qf = null
	};
	v.w = function(a, b, c, d) {
		return this.Ka.add(String(a), b, !1, c, d)
	};
	v.zb = function(a, b, c, d) {
		return this.Ka.add(String(a), b, !0, c, d)
	};
	v.ca = function(a, b, c, d) {
		return this.Ka.remove(String(a), b, c, d)
	};

	function mi(a, b, c, d) {
		b = a.Ka.a[String(b)];
		if(!b) return !0;
		b = b.concat();
		for(var e = !0, g = 0; g < b.length; ++g) {
			var h = b[g];
			if(h && !h.nc && h.capture == c) {
				var k = h.listener,
					l = h.Kd || h.src;
				h.gd && Oh(a.Ka, h);
				e = !1 !== k.call(l, d) && e
			}
		}
		return e && 0 != d.Yg
	}
	v.Gc = function(a, b, c, d) {
		return this.Ka.Gc(String(a), b, c, d)
	};
	v.hasListener = function(a, b) {
		return this.Ka.hasListener(x(a) ? String(a) : void 0, b)
	};

	function ni() {}
	xc(ni);
	ni.prototype.a = 0;

	function T(a) {
		li.call(this);
		this.b = a || Uf();
		this.ia = oi;
		this.ka = null;
		this.V = !1;
		this.A = null;
		this.I = void 0;
		this.G = this.s = this.B = this.qa = null;
		this.gb = !1
	}
	E(T, li);
	T.prototype.rb = ni.Y();
	var oi = null;

	function pi(a, b) {
		switch(a) {
			case 1:
				return b ? "disable" : "enable";
			case 2:
				return b ? "highlight" : "unhighlight";
			case 4:
				return b ? "activate" : Ya;
			case 8:
				return b ? "select" : "unselect";
			case 16:
				return b ? "check" : "uncheck";
			case 32:
				return b ? db : Ka;
			case 64:
				return b ? "open" : "close"
		}
		throw Error("Invalid component state");
	}

	function qi(a) {
		return a.ka || (a.ka = ":" + (a.rb.a++).toString(36))
	}

	function ri(a, b) {
		if(a.B && a.B.G) {
			var c = a.B.G,
				d = a.ka;
			d in c && delete c[d];
			Gd(a.B.G, b, a)
		}
		a.ka = b
	}
	v = T.prototype;
	v.j = r("A");

	function si(a, b) {
		return a.A ? $f(b, a.A || a.b.a) : null
	}

	function U(a) {
		a.I || (a.I = new fi(a));
		return a.I
	}

	function ti(a, b) {
		if(a == b) throw Error(xa);
		if(b && a.B && a.ka && ui(a.B, a.ka) && a.B != b) throw Error(xa);
		a.B = b;
		T.m.xf.call(a, b)
	}
	v.ub = r("B");
	v.xf = function(a) {
		if(this.B && this.B != a) throw Error("Method not supported");
		T.m.xf.call(this, a)
	};
	v.D = function() {
		this.A = Mg(this.b, f)
	};
	v.ga = function(a) {
		vi(this, a)
	};

	function vi(a, b, c) {
		if(a.V) throw Error(ja);
		a.A || a.D();
		b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
		a.B && !a.B.V || a.P()
	}

	function wi(a, b) {
		if(a.V) throw Error(ja);
		if(b && a.Fe(b)) {
			a.gb = !0;
			var c = N(b);
			a.b && a.b.a == c || (a.b = Uf(b));
			a.T(b);
			a.P()
		} else throw Error("Invalid element to decorate");
	}
	v.Fe = u(!0);
	v.T = ic("A");
	v.P = function() {
		this.V = !0;
		xi(this, function(a) {
			!a.V && a.j() && a.P()
		})
	};
	v.$ = function() {
		xi(this, function(a) {
			a.V && a.$()
		});
		this.I && ki(this.I);
		this.V = !1
	};
	v.F = function() {
		this.V && this.$();
		this.I && (this.I.M(), delete this.I);
		xi(this, function(a) {
			a.M()
		});
		!this.gb && this.A && rg(this.A);
		this.B = this.qa = this.A = this.G = this.s = null;
		T.m.F.call(this)
	};

	function V(a, b) {
		return qi(a) + "." + b
	}
	v.uc = function(a, b) {
		this.je(a, yi(this), b)
	};
	v.je = function(a, b, c) {
		if(a.V && (c || !this.V)) throw Error(ja);
		if(0 > b || b > yi(this)) throw Error("Child component index out of bounds");
		this.G && this.s || (this.G = {}, this.s = []);
		if(a.ub() == this) {
			var d = qi(a);
			this.G[d] = a;
			Vc(this.s, a)
		} else Gd(this.G, qi(a), a);
		ti(a, this);
		Yc(this.s, b, 0, a);
		a.V && this.V && a.ub() == this ? (c = this.wd(), b = c.childNodes[b] || null, b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(), b = zi(this, b + 1), vi(a, this.wd(), b ? b.A : null)) : this.V && !a.V && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.P()
	};
	v.wd = r("A");

	function Ai(a) {
		null == a.ia && (a.ia = fh(a.V ? a.A : a.b.a.body));
		return a.ia
	}

	function yi(a) {
		return a.s ? a.s.length : 0
	}

	function ui(a, b) {
		a.G && b ? (a = a.G, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
		return b
	}

	function zi(a, b) {
		return a.s ? a.s[b] || null : null
	}

	function xi(a, b, c) {
		a.s && Oc(a.s, b, c)
	}

	function Bi(a, b) {
		return a.s && b ? Nc(a.s, b) : -1
	}
	v.removeChild = function(a, b) {
		if(a) {
			var c = z(a) ? a : qi(a);
			a = ui(this, c);
			if(c && a) {
				var d = this.G;
				c in d && delete d[c];
				Vc(this.s, a);
				b && (a.$(), a.A && rg(a.A));
				ti(a, null)
			}
		}
		if(!a) throw Error("Child is not in parent component");
		return a
	};
	v.Tc = function(a) {
		for(var b = []; this.s && 0 != this.s.length;) b.push(this.removeChild(zi(this, 0), a));
		return b
	};

	function Ci() {}
	var Fi;
	xc(Ci);
	var Gi = {
		button: "pressed",
		checkbox: Qa,
		menuitem: Tb,
		menuitemcheckbox: Qa,
		menuitemradio: Qa,
		radio: Qa,
		tab: Tb,
		treeitem: Tb
	};
	v = Ci.prototype;
	v.Zb = hc();
	v.D = function(a) {
		return a.b.D(f, Hi(this, a).join(" "), a.da())
	};
	v.xb = function(a) {
		return a
	};

	function Ii(a, b, c) {
		if(a = a.j ? a.j() : a) {
			var d = [b];
			G && !J("7") && (d = Ji(Le(a), b), d.push(b));
			(c ? Ne : Pe)(a, d)
		}
	}
	v.zd = u(!0);
	v.Na = function(a, b) {
		b.id && ri(a, b.id);
		var c = this.xb(b);
		c && c.firstChild ? Ki(a, c.firstChild.nextSibling ? Xc(c.childNodes) : c.firstChild) : a.Lb = null;
		var d = 0,
			e = this.ea(),
			g = this.ea(),
			h = !1,
			k = !1,
			l = !1,
			m = Xc(Le(b));
		Oc(m, function(a) {
			h || a != e ? k || a != g ? d |= this.rd(a) : k = !0 : (h = !0, g == e && (k = !0));
			1 == this.rd(a) && Hg(c) && Ig(c) && Gg(c, !1)
		}, this);
		a.W = d;
		h || (m.push(e), g == e && (k = !0));
		k || m.push(g);
		(a = a.ye) && m.push.apply(m, a);
		if(G && !J("7")) {
			var n = Ji(m);
			0 < n.length && (m.push.apply(m, n), l = !0)
		}
		if(!h || !k || a || l) b.className = m.join(" ");
		return b
	};
	v.jg = function(a) {
		Ai(a) && this.Ke(a.j(), !0);
		a.isEnabled() && this.$b(a, a.N())
	};

	function Li(a, b, c) {
		if(a = c || a.Zb()) c = b.getAttribute("role") || null, a != c && sh(b, a)
	}

	function Mi(a, b, c) {
		b.N() || th(c, rb, !b.N());
		b.isEnabled() || a.Va(c, 1, !b.isEnabled());
		b.ba & 8 && a.Va(c, 8, !!(b.W & 8));
		b.ba & 16 && a.Va(c, 16, !!(b.W & 16));
		b.ba & 64 && a.Va(c, 64, !!(b.W & 64))
	}
	v.Ad = function(a, b) {
		hh(a, !b, !G && !Ud)
	};
	v.Ke = function(a, b) {
		Ii(a, this.ea() + "-rtl", b)
	};
	v.Je = function(a) {
		var b;
		return a.ba & 32 && (b = a.j()) ? Hg(b) && Ig(b) : !1
	};
	v.$b = function(a, b) {
		var c;
		if(a.ba & 32 && (c = a.j())) {
			if(!b && a.W & 32) {
				try {
					c.blur()
				} catch(d) {}
				a.W & 32 && a.kg(null)
			}(Hg(c) && Ig(c)) != b && Gg(c, b)
		}
	};
	v.J = function(a, b) {
		P(a, b);
		a && th(a, rb, !b)
	};
	v.Lc = function(a, b, c) {
		var d = a.j();
		if(d) {
			var e = this.Fc(b);
			e && Ii(a, e, c);
			this.Va(d, b, c)
		}
	};
	v.Va = function(a, b, c) {
		Fi || (Fi = {
			1: "disabled",
			8: Tb,
			16: Qa,
			64: "expanded"
		});
		b = Fi[b];
		var d = a.getAttribute("role") || null;
		d && (d = Gi[d] || b, b = b == Qa || b == Tb ? d : b);
		b && th(a, b, c)
	};
	v.Kc = function(a, b) {
		var c = this.xb(a);
		c && (og(c), b && (z(b) ? Dg(c, b) : (a = function(a) {
			if(a) {
				var b = N(c);
				c.appendChild(z(a) ? b.createTextNode(a) : a)
			}
		}, C(b) ? Oc(b, a) : !yc(b) || "nodeType" in b ? a(b) : Oc(Xc(b), a))))
	};
	v.ea = u("goog-control");

	function Hi(a, b) {
		var c = a.ea(),
			d = [c],
			e = a.ea();
		e != c && d.push(e);
		c = b.W;
		for(e = []; c;) {
			var g = c & -c;
			e.push(a.Fc(g));
			c &= ~g
		}
		d.push.apply(d, e);
		(a = b.ye) && d.push.apply(d, a);
		G && !J("7") && d.push.apply(d, Ji(d));
		return d
	}

	function Ji(a, b) {
		var c = [];
		b && (a = Wc(a, [b]));
		Oc([], function(d) {
			!Sc(d, Gc(Uc, a)) || b && !Uc(d, b) || c.push(d.join("_"))
		});
		return c
	}
	v.Fc = function(a) {
		this.a || Ni(this);
		return this.a[a]
	};
	v.rd = function(a) {
		if(!this.c) {
			this.a || Ni(this);
			var b = this.a,
				c = {},
				d;
			for(d in b) c[b[d]] = d;
			this.c = c
		}
		a = parseInt(this.c[a], 10);
		return isNaN(a) ? 0 : a
	};

	function Ni(a) {
		var b = a.ea();
		b.replace(/\xa0|\s/g, " ");
		a.a = {
			1: b + ba,
			2: b + "-hover",
			4: b + "-active",
			8: b + "-selected",
			16: b + "-checked",
			32: b + "-focused",
			64: b + "-open"
		}
	};

	function Oi() {}
	E(Oi, Ci);
	xc(Oi);
	v = Oi.prototype;
	v.Zb = u(Ma);
	v.Va = function(a, b, c) {
		switch(b) {
			case 8:
			case 16:
				th(a, "pressed", c);
				break;
			default:
			case 64:
			case 1:
				Oi.m.Va.call(this, a, b, c)
		}
	};
	v.D = function(a) {
		var b = Oi.m.D.call(this, a),
			c = a.l;
		b && (c ? b.title = c : b.removeAttribute("title"));
		(c = a.Ba()) && this.za(b, c);
		a.ba & 16 && this.Va(b, 16, !!(a.W & 16));
		return b
	};
	v.Na = function(a, b) {
		b = Oi.m.Na.call(this, a, b);
		var c = this.Ba(b);
		a.g = c;
		a.l = b.title;
		a.ba & 16 && this.Va(b, 16, !!(a.W & 16));
		return b
	};
	v.Ba = A;
	v.za = A;
	v.ea = u("goog-button");

	function Pi(a) {
		if(a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
		switch(a.keyCode) {
			case 18:
			case 20:
			case 93:
			case 17:
			case 40:
			case 35:
			case 27:
			case 36:
			case 45:
			case 37:
			case 224:
			case 91:
			case 144:
			case 12:
			case 34:
			case 33:
			case 19:
			case 255:
			case 44:
			case 39:
			case 145:
			case 16:
			case 38:
			case 252:
			case 224:
			case 92:
				return !1;
			case 0:
				return !H;
			default:
				return 166 > a.keyCode || 183 < a.keyCode
		}
	}

	function Qi(a, b, c, d, e, g) {
		if(I && !J("525")) return !0;
		if(Yd && e) return Ri(a);
		if(e && !d) return !1;
		if(!H) {
			uc(b) && (b = Si(b));
			var h = 17 == b || 18 == b || Yd && 91 == b;
			if((!c || Yd) && h || Yd && 16 == b && (d || g)) return !1
		}
		if((I || Vd) && d && c) switch(a) {
			case 220:
			case 219:
			case 221:
			case 192:
			case 186:
			case 189:
			case 187:
			case 188:
			case 190:
			case 191:
			case 192:
			case 222:
				return !1
		}
		if(G && d && b == a) return !1;
		switch(a) {
			case 13:
				return H ? g || e ? !1 : !(c && d) : !0;
			case 27:
				return !(I || Vd || H)
		}
		return H && (d || e || g) ? !1 : Ri(a)
	}

	function Ri(a) {
		if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (I || Vd) && 0 == a) return !0;
		switch(a) {
			case 32:
			case 43:
			case 63:
			case 64:
			case 107:
			case 109:
			case 110:
			case 111:
			case 186:
			case 59:
			case 189:
			case 187:
			case 61:
			case 188:
			case 190:
			case 191:
			case 192:
			case 222:
			case 219:
			case 220:
			case 221:
			case 163:
				return !0;
			default:
				return !1
		}
	}

	function Si(a) {
		if(H) a = Ti(a);
		else if(Yd && I) switch(a) {
			case 93:
				a = 91
		}
		return a
	}

	function Ti(a) {
		switch(a) {
			case 61:
				return 187;
			case 59:
				return 186;
			case 173:
				return 189;
			case 224:
				return 91;
			case 0:
				return 224;
			default:
				return a
		}
	};

	function Ui(a, b) {
		li.call(this);
		a && Vi(this, a, b)
	}
	E(Ui, li);
	v = Ui.prototype;
	v.A = null;
	v.Pd = null;
	v.Ze = null;
	v.Qd = null;
	v.Fa = -1;
	v.yb = -1;
	v.me = !1;
	var Wi = {
			3: 13,
			12: 144,
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63236: 112,
			63237: 113,
			63238: 114,
			63239: 115,
			63240: 116,
			63241: 117,
			63242: 118,
			63243: 119,
			63244: 120,
			63245: 121,
			63246: 122,
			63247: 123,
			63248: 44,
			63272: 46,
			63273: 36,
			63275: 35,
			63276: 33,
			63277: 34,
			63289: 144,
			63302: 45
		},
		Xi = {
			Up: 38,
			Down: 40,
			Left: 37,
			Right: 39,
			Enter: 13,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			"U+007F": 46,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45
		},
		Yi = !I || J("525"),
		Zi = Yd && H;
	v = Ui.prototype;
	v.yi = function(a) {
		if(I || Vd)
			if(17 == this.Fa && !a.ctrlKey || 18 == this.Fa && !a.altKey || Yd && 91 == this.Fa && !a.metaKey) this.yb = this.Fa = -1; - 1 == this.Fa && (a.ctrlKey && 17 != a.keyCode ? this.Fa = 17 : a.altKey && 18 != a.keyCode ? this.Fa = 18 : a.metaKey && 91 != a.keyCode && (this.Fa = 91));
		Yi && !Qi(a.keyCode, this.Fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.yb = Si(a.keyCode), Zi && (this.me = a.altKey))
	};
	v.zi = function(a) {
		this.yb = this.Fa = -1;
		this.me = a.altKey
	};
	v.handleEvent = function(a) {
		var b = a.a,
			c = b.altKey;
		if(G && a.type == yb) {
			var d = this.yb;
			var e = 13 != d && 27 != d ? b.keyCode : 0
		} else(I || Vd) && a.type == yb ? (d = this.yb, e = 0 <= b.charCode && 63232 > b.charCode && Ri(d) ? b.charCode : 0) : Ud && !I ? (d = this.yb, e = Ri(d) ? b.keyCode : 0) : (d = b.keyCode || this.yb, e = b.charCode || 0, Zi && a.type == yb && (c = this.me), Yd && 63 == e && 224 == d && (d = 191));
		var g = d = Si(d);
		d ? 63232 <= d && d in Wi ? g = Wi[d] : 25 == d && a.shiftKey && (g = 9) : b.keyIdentifier && b.keyIdentifier in Xi && (g = Xi[b.keyIdentifier]);
		H && Yi && a.type == yb && !Qi(g, this.Fa, a.shiftKey,
			a.ctrlKey, c, a.metaKey) || (a = g == this.Fa, this.Fa = g, b = new $i(g, e, a, b), b.altKey = c, this.dispatchEvent(b))
	};
	v.j = r("A");

	function Vi(a, b, c) {
		a.Qd && aj(a);
		a.A = b;
		a.Pd = S(a.A, yb, a, c);
		a.Ze = S(a.A, xb, a.yi, c, a);
		a.Qd = S(a.A, zb, a.zi, c, a)
	}

	function aj(a) {
		a.Pd && (ai(a.Pd), ai(a.Ze), ai(a.Qd), a.Pd = null, a.Ze = null, a.Qd = null);
		a.A = null;
		a.Fa = -1;
		a.yb = -1
	}
	v.F = function() {
		Ui.m.F.call(this);
		aj(this)
	};

	function $i(a, b, c, d) {
		Dh.call(this, d);
		this.type = "key";
		this.keyCode = a;
		this.repeat = c
	}
	E($i, Dh);

	function bj(a, b) {
		if(!a) throw Error("Invalid class name " + a);
		if(!zc(b)) throw Error("Invalid decorator function " + b);
		cj[a] = b
	}
	var dj = {},
		cj = {};

	function W(a, b, c) {
		T.call(this, c);
		if(!b) {
			b = this.constructor;
			for(var d; b;) {
				d = Bc(b);
				if(d = dj[d]) break;
				b = b.m ? b.m.constructor : null
			}
			b = d ? zc(d.Y) ? d.Y() : new d : null
		}
		this.a = b;
		this.Lb = x(a) ? a : null
	}
	E(W, T);
	v = W.prototype;
	v.Lb = null;
	v.W = 0;
	v.ba = 39;
	v.hb = 255;
	v.Xc = 0;
	v.ha = !0;
	v.ye = null;
	v.Re = !0;
	v.cd = !1;

	function ej(a, b) {
		a.V && b != a.Re && fj(a, b);
		a.Re = b
	}
	v.D = function() {
		var a = this.a.D(this);
		this.A = a;
		Li(this.a, a, this.Hc());
		this.cd || this.a.Ad(a, !1);
		this.N() || this.a.J(a, !1)
	};
	v.Hc = u(null);
	v.wd = function() {
		return this.a.xb(this.j())
	};
	v.Fe = function(a) {
		return this.a.zd(a)
	};
	v.T = function(a) {
		this.A = a = this.a.Na(this, a);
		Li(this.a, a, this.Hc());
		this.cd || this.a.Ad(a, !1);
		this.ha = a.style.display != q
	};
	v.P = function() {
		W.m.P.call(this);
		Mi(this.a, this, this.A);
		this.a.jg(this);
		if(this.ba & -2 && (this.Re && fj(this, !0), this.ba & 32)) {
			var a = this.j();
			if(a) {
				var b = this.f || (this.f = new Ui);
				Vi(b, a);
				U(this).w(b, "key", this.Ga).w(a, db, this.hi).w(a, Ka, this.kg)
			}
		}
	};

	function fj(a, b) {
		var c = U(a),
			d = a.j();
		b ? (c.w(d, Ch.rc, a.Nc).w(d, [Ch.sc, Ch.qc], a.cc).w(d, Eb, a.Le).w(d, Db, a.Se), a.Pc != A && c.w(d, Wa, a.Pc), G && (J(9) || c.w(d, Xa, a.og), a.h || (a.h = new gj(a), uh(a, Gc(vh, a.h))))) : (c.ca(d, Ch.rc, a.Nc).ca(d, [Ch.sc, Ch.qc], a.cc).ca(d, Eb, a.Le).ca(d, Db, a.Se), a.Pc != A && c.ca(d, Wa, a.Pc), G && (J(9) || c.ca(d, Xa, a.og), vh(a.h), a.h = null))
	}
	v.$ = function() {
		W.m.$.call(this);
		this.f && aj(this.f);
		this.N() && this.isEnabled() && this.a.$b(this, !1)
	};
	v.F = function() {
		W.m.F.call(this);
		this.f && (this.f.M(), delete this.f);
		delete this.a;
		this.h = this.ye = this.Lb = null
	};
	v.da = r("Lb");
	v.Mb = function(a) {
		this.a.Kc(this.j(), a);
		this.Lb = a
	};

	function Ki(a, b) {
		a.Lb = b
	}
	v.ab = function() {
		var a = this.da();
		if(!a) return "";
		a = z(a) ? a : C(a) ? Qc(a, Lg).join("") : Jg(a);
		return ad(a)
	};
	v.bh = function(a) {
		this.Mb(a)
	};
	v.N = r("ha");
	v.J = function(a, b) {
		return b || this.ha != a && this.dispatchEvent(a ? "show" : sb) ? ((b = this.j()) && this.a.J(b, a), this.isEnabled() && this.a.$b(this, a), this.ha = a, !0) : !1
	};
	v.isEnabled = function() {
		return !(this.W & 1)
	};
	v.ma = function(a) {
		var b = this.ub();
		b && typeof b.isEnabled == p && !b.isEnabled() || !hj(this, 1, !a) || (a || (ij(this, !1), jj(this, !1)), this.N() && this.a.$b(this, a), kj(this, 1, !a, !0))
	};

	function jj(a, b) {
		hj(a, 2, b) && kj(a, 2, b)
	}
	v.ec = function() {
		return !!(this.W & 4)
	};

	function ij(a, b) {
		hj(a, 4, b) && kj(a, 4, b)
	}

	function lj(a, b) {
		hj(a, 64, b) && kj(a, 64, b)
	}

	function kj(a, b, c, d) {
		d || 1 != b ? a.ba & b && c != !!(a.W & b) && (a.a.Lc(a, b, c), a.W = c ? a.W | b : a.W & ~b) : a.ma(!c)
	}
	v.ta = function(a, b) {
		if(this.V && this.W & a && !b) throw Error(ja);
		!b && this.W & a && kj(this, a, !1);
		this.ba = b ? this.ba | a : this.ba & ~a
	};

	function mj(a, b) {
		return !!(a.hb & b) && !!(a.ba & b)
	}

	function hj(a, b, c) {
		return !!(a.ba & b) && !!(a.W & b) != c && (!(a.Xc & b) || a.dispatchEvent(pi(b, c))) && !a.sb
	}
	v.Le = function(a) {
		(!a.relatedTarget || !wg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && mj(this, 2) && jj(this, !0)
	};
	v.Se = function(a) {
		a.relatedTarget && wg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (mj(this, 4) && ij(this, !1), mj(this, 2) && jj(this, !1))
	};
	v.Pc = A;
	v.Nc = function(a) {
		this.isEnabled() && (mj(this, 2) && jj(this, !0), !Gh(a) || I && Yd && a.ctrlKey || (mj(this, 4) && ij(this, !0), this.a && this.a.Je(this) && this.j().focus()));
		this.cd || !Gh(a) || I && Yd && a.ctrlKey || a.b()
	};
	v.cc = function(a) {
		this.isEnabled() && (mj(this, 2) && jj(this, !0), this.ec() && this.lc(a) && mj(this, 4) && ij(this, !1))
	};
	v.og = function(a) {
		this.isEnabled() && this.lc(a)
	};
	v.lc = function(a) {
		if(mj(this, 16)) {
			var b = !(this.W & 16);
			hj(this, 16, b) && kj(this, 16, b)
		}
		mj(this, 8) && hj(this, 8, !0) && kj(this, 8, !0);
		mj(this, 64) && lj(this, !(this.W & 64));
		b = new Ah(Ca, this);
		a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.f = a.f);
		return this.dispatchEvent(b)
	};
	v.hi = function() {
		mj(this, 32) && hj(this, 32, !0) && kj(this, 32, !0)
	};
	v.kg = function() {
		mj(this, 4) && ij(this, !1);
		mj(this, 32) && hj(this, 32, !1) && kj(this, 32, !1)
	};
	v.Ga = function(a) {
		return this.N() && this.isEnabled() && this.Mc(a) ? (a.b(), a.stopPropagation(), !0) : !1
	};
	v.Mc = function(a) {
		return 13 == a.keyCode && this.lc(a)
	};
	if(!zc(W)) throw Error("Invalid component class " + W);
	if(!zc(Ci)) throw Error("Invalid renderer class " + Ci);
	var nj = Bc(W);
	dj[nj] = Ci;
	bj("goog-control", function() {
		return new W(null)
	});

	function gj(a) {
		Q.call(this);
		this.b = a;
		this.a = !1;
		this.c = new fi(this);
		uh(this, Gc(vh, this.c));
		a = this.b.A;
		this.c.w(a, Bb, this.g).w(a, Fb, this.h).w(a, Sa, this.f)
	}
	E(gj, Q);
	var oj = !G || ke(9);
	gj.prototype.g = function() {
		this.a = !1
	};
	gj.prototype.h = function() {
		this.a = !0
	};

	function pj(a, b) {
		if(!oj) return a.button = 0, a.type = b, a;
		var c = document.createEvent("MouseEvents");
		c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
		return c
	}
	gj.prototype.f = function(a) {
		if(this.a) this.a = !1;
		else {
			var b = a.a,
				c = b.button,
				d = b.type,
				e = pj(b, Bb);
			this.b.Nc(new Dh(e, a.currentTarget));
			e = pj(b, Fb);
			this.b.cc(new Dh(e, a.currentTarget));
			oj || (b.button = c, b.type = d)
		}
	};
	gj.prototype.F = function() {
		this.b = null;
		gj.m.F.call(this)
	};

	function qj() {}
	E(qj, Oi);
	xc(qj);
	v = qj.prototype;
	v.Zb = hc();
	v.D = function(a) {
		ej(a, !1);
		a.hb &= -256;
		a.ta(32, !1);
		return a.b.D("BUTTON", {
			"class": Hi(this, a).join(" "),
			disabled: !a.isEnabled(),
			title: a.l || "",
			value: a.Ba() || ""
		}, a.ab() || "")
	};
	v.zd = function(a) {
		return "BUTTON" == a.tagName || a.tagName == oa && (a.type == Ma || "submit" == a.type || "reset" == a.type)
	};
	v.Na = function(a, b) {
		ej(a, !1);
		a.hb &= -256;
		a.ta(32, !1);
		if(b.disabled) {
			var c = this.Fc(1);
			K(b, c)
		}
		return qj.m.Na.call(this, a, b)
	};
	v.jg = function(a) {
		U(a).w(a.j(), Sa, a.lc)
	};
	v.Ad = A;
	v.Ke = A;
	v.Je = function(a) {
		return a.isEnabled()
	};
	v.$b = A;
	v.Lc = function(a, b, c) {
		qj.m.Lc.call(this, a, b, c);
		(a = a.j()) && 1 == b && (a.disabled = c)
	};
	v.Ba = function(a) {
		return a.value
	};
	v.za = function(a, b) {
		a && (a.value = b)
	};
	v.Va = A;

	function rj(a, b, c) {
		W.call(this, a, b || qj.Y(), c)
	}
	E(rj, W);
	v = rj.prototype;
	v.Ba = r("g");
	v.za = function(a) {
		this.g = a;
		this.a.za(this.j(), a)
	};
	v.F = function() {
		rj.m.F.call(this);
		delete this.g;
		delete this.l
	};
	v.P = function() {
		rj.m.P.call(this);
		if(this.ba & 32) {
			var a = this.j();
			a && U(this).w(a, zb, this.Mc)
		}
	};
	v.Mc = function(a) {
		return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && a.type == zb ? this.lc(a) : 32 == a.keyCode
	};
	bj("goog-button", function() {
		return new rj(null)
	});

	function sj() {}
	E(sj, Oi);
	xc(sj);
	v = sj.prototype;
	v.D = function(a) {
		var b = Hi(this, a);
		b = a.b.D(f, ib + b.join(" "), tj(this, a.da(), a.b));
		a = a.l;
		b && (a ? b.title = a : b.removeAttribute("title"));
		return b
	};
	v.Zb = u(Ma);
	v.xb = function(a) {
		return a && a.firstChild && a.firstChild.firstChild
	};

	function tj(a, b, c) {
		return c.D(f, ib + (a.ea() + "-outer-box"), c.D(f, ib + (a.ea() + "-inner-box"), b))
	}
	v.zd = function(a) {
		return a.tagName == f
	};
	v.Na = function(a, b) {
		uj(b, !0);
		uj(b, !1);
		a: {
			var c = a.b.eg(b);
			var d = this.ea() + "-outer-box";
			if(c && Me(c, d) && (c = a.b.eg(c), d = this.ea() + "-inner-box", c && Me(c, d))) {
				c = !0;
				break a
			}
			c = !1
		}
		c || b.appendChild(tj(this, b.childNodes, a.b));
		Ne(b, ["goog-inline-block", this.ea()]);
		return sj.m.Na.call(this, a, b)
	};
	v.ea = u("goog-custom-button");

	function uj(a, b) {
		if(a)
			for(var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
				d = b ? c.nextSibling : c.previousSibling;
				if(3 == c.nodeType) {
					var e = c.nodeValue;
					if("" == bd(e)) a.removeChild(c);
					else {
						c.nodeValue = b ? cd(e) : dd(e);
						break
					}
				} else break;
				c = d
			}
	};

	function vj(a, b, c) {
		rj.call(this, a, b || sj.Y(), c);
		this.ta(16, !0)
	}
	E(vj, rj);
	bj("goog-toggle-button", function() {
		return new vj(null)
	});
	var wj = "StopIteration" in w ? w.StopIteration : {
		message: "StopIteration",
		stack: ""
	};

	function xj() {}
	xj.prototype.next = function() {
		throw wj;
	};
	xj.prototype.Ja = function() {
		return this
	};

	function yj(a) {
		if(a instanceof xj) return a;
		if(typeof a.Ja == p) return a.Ja(!1);
		if(yc(a)) {
			var b = 0,
				c = new xj;
			c.next = function() {
				for(;;) {
					if(b >= a.length) throw wj;
					if(b in a) return a[b++];
					b++
				}
			};
			return c
		}
		throw Error("Not implemented");
	}

	function zj(a, b, c) {
		a = yj(a);
		try {
			for(; b.call(c, a.next(), void 0, a););
		} catch(d) {
			if(d !== wj) throw d;
		}
	};

	function Aj(a, b) {
		this.b = {};
		this.a = [];
		this.f = this.c = 0;
		var c = arguments.length;
		if(1 < c) {
			if(c % 2) throw Error("Uneven number of arguments");
			for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if(a)
			if(a instanceof Aj)
				for(c = a.Qa(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
			else
				for(d in a) this.set(d, a[d])
	}
	v = Aj.prototype;
	v.Ea = function() {
		Bj(this);
		for(var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
		return a
	};
	v.Qa = function() {
		Bj(this);
		return this.a.concat()
	};

	function Cj(a, b) {
		return Dj(a.b, b)
	}

	function Ej(a) {
		a.b = {};
		a.a.length = 0;
		a.c = 0;
		a.f = 0
	}
	v.remove = function(a) {
		return Dj(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && Bj(this), !0) : !1
	};

	function Bj(a) {
		if(a.c != a.a.length) {
			for(var b = 0, c = 0; b < a.a.length;) {
				var d = a.a[b];
				Dj(a.b, d) && (a.a[c++] = d);
				b++
			}
			a.a.length = c
		}
		if(a.c != a.a.length) {
			var e = {};
			for(c = b = 0; b < a.a.length;) d = a.a[b], Dj(e, d) || (a.a[c++] = d, e[d] = 1), b++;
			a.a.length = c
		}
	}
	v.get = function(a, b) {
		return Dj(this.b, a) ? this.b[a] : b
	};
	v.set = function(a, b) {
		Dj(this.b, a) || (this.c++, this.a.push(a), this.f++);
		this.b[a] = b
	};
	v.forEach = function(a, b) {
		for(var c = this.Qa(), d = 0; d < c.length; d++) {
			var e = c[d],
				g = this.get(e);
			a.call(b, g, e, this)
		}
	};
	v.Ja = function(a) {
		Bj(this);
		var b = 0,
			c = this.f,
			d = this,
			e = new xj;
		e.next = function() {
			if(c != d.f) throw Error("The map has changed since the iterator was created");
			if(b >= d.a.length) throw wj;
			var e = d.a[b++];
			return a ? e : d.b[e]
		};
		return e
	};

	function Dj(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};

	function Fj(a) {
		if(a.Ea && typeof a.Ea == p) return a.Ea();
		if(z(a)) return a.split("");
		if(yc(a)) {
			for(var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		b = [];
		c = 0;
		for(d in a) b[c++] = a[d];
		return b
	}

	function Gj(a, b, c) {
		if(a.forEach && typeof a.forEach == p) a.forEach(b, c);
		else if(yc(a) || z(a)) Oc(a, b, c);
		else {
			if(a.Qa && typeof a.Qa == p) var d = a.Qa();
			else if(a.Ea && typeof a.Ea == p) d = void 0;
			else if(yc(a) || z(a)) {
				d = [];
				for(var e = a.length, g = 0; g < e; g++) d.push(g)
			} else d = Cd(a);
			e = Fj(a);
			g = e.length;
			for(var h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
		}
	};
	var Hj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

	function Ij(a, b) {
		if(a) {
			a = a.split("&");
			for(var c = 0; c < a.length; c++) {
				var d = a[c].indexOf("="),
					e = null;
				if(0 <= d) {
					var g = a[c].substring(0, d);
					e = a[c].substring(d + 1)
				} else g = a[c];
				b(g, e ? fd(e) : "")
			}
		}
	};

	function Jj(a) {
		this.f = this.s = this.c = "";
		this.l = null;
		this.g = this.h = "";
		this.b = !1;
		if(a instanceof Jj) {
			this.b = x(void 0) ? void 0 : a.b;
			Kj(this, a.c);
			this.s = a.s;
			this.f = a.f;
			Lj(this, a.l);
			this.h = a.h;
			var b = a.a;
			var c = new Mj;
			c.c = b.c;
			b.a && (c.a = new Aj(b.a), c.b = b.b);
			Nj(this, c);
			this.g = a.g
		} else a && (b = String(a).match(Hj)) ? (this.b = !1, Kj(this, b[1] || "", !0), this.s = Oj(b[2] || ""), this.f = Oj(b[3] || "", !0), Lj(this, b[4]), this.h = Oj(b[5] || "", !0), Nj(this, b[6] || "", !0), this.g = Oj(b[7] || "")) : (this.b = !1, this.a = new Mj(null, this.b))
	}
	Jj.prototype.toString = function() {
		var a = [],
			b = this.c;
		b && a.push(Pj(b, Qj, !0), ":");
		var c = this.f;
		if(c || "file" == b) a.push("//"), (b = this.s) && a.push(Pj(b, Qj, !0), "@"), a.push(ed(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
		if(c = this.h) this.f && "/" != c.charAt(0) && a.push("/"), a.push(Pj(c, "/" == c.charAt(0) ? Rj : Sj, !0));
		(c = this.a.toString()) && a.push("?", c);
		(c = this.g) && a.push("#", Pj(c, Tj));
		return a.join("")
	};

	function Kj(a, b, c) {
		a.c = c ? Oj(b, !0) : b;
		a.c && (a.c = a.c.replace(/:$/, ""))
	}

	function Lj(a, b) {
		if(b) {
			b = Number(b);
			if(isNaN(b) || 0 > b) throw Error("Bad port number " + b);
			a.l = b
		} else a.l = null
	}

	function Nj(a, b, c) {
		b instanceof Mj ? (a.a = b, Uj(a.a, a.b)) : (c || (b = Pj(b, Vj)), a.a = new Mj(b, a.b))
	}

	function Oj(a, b) {
		return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
	}

	function Pj(a, b, c) {
		return z(a) ? (a = encodeURI(a).replace(b, Wj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
	}

	function Wj(a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
	}
	var Qj = /[#\/\?@]/g,
		Sj = /[#\?:]/g,
		Rj = /[#\?]/g,
		Vj = /[#\?@]/g,
		Tj = /#/g;

	function Mj(a, b) {
		this.b = this.a = null;
		this.c = a || null;
		this.f = !!b
	}

	function Xj(a) {
		a.a || (a.a = new Aj, a.b = 0, a.c && Ij(a.c, function(b, c) {
			a.add(fd(b), c)
		}))
	}
	v = Mj.prototype;
	v.add = function(a, b) {
		Xj(this);
		this.c = null;
		a = Yj(this, a);
		var c = this.a.get(a);
		c || this.a.set(a, c = []);
		c.push(b);
		this.b = this.b + 1;
		return this
	};
	v.remove = function(a) {
		Xj(this);
		a = Yj(this, a);
		return Cj(this.a, a) ? (this.c = null, this.b = this.b - this.a.get(a).length, this.a.remove(a)) : !1
	};

	function Zj(a, b) {
		Xj(a);
		b = Yj(a, b);
		return Cj(a.a, b)
	}
	v.forEach = function(a, b) {
		Xj(this);
		this.a.forEach(function(c, d) {
			Oc(c, function(c) {
				a.call(b, c, d, this)
			}, this)
		}, this)
	};
	v.Qa = function() {
		Xj(this);
		for(var a = this.a.Ea(), b = this.a.Qa(), c = [], d = 0; d < b.length; d++)
			for(var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
		return c
	};
	v.Ea = function(a) {
		Xj(this);
		var b = [];
		if(z(a)) Zj(this, a) && (b = Wc(b, this.a.get(Yj(this, a))));
		else {
			a = this.a.Ea();
			for(var c = 0; c < a.length; c++) b = Wc(b, a[c])
		}
		return b
	};
	v.set = function(a, b) {
		Xj(this);
		this.c = null;
		a = Yj(this, a);
		Zj(this, a) && (this.b = this.b - this.a.get(a).length);
		this.a.set(a, [b]);
		this.b = this.b + 1;
		return this
	};
	v.get = function(a, b) {
		if(!a) return b;
		a = this.Ea(a);
		return 0 < a.length ? String(a[0]) : b
	};

	function ak(a, b, c) {
		a.remove(b);
		0 < c.length && (a.c = null, a.a.set(Yj(a, b), Xc(c)), a.b = a.b + c.length)
	}
	v.toString = function() {
		if(this.c) return this.c;
		if(!this.a) return "";
		for(var a = [], b = this.a.Qa(), c = 0; c < b.length; c++) {
			var d = b[c],
				e = ed(d);
			d = this.Ea(d);
			for(var g = 0; g < d.length; g++) {
				var h = e;
				"" !== d[g] && (h += "=" + ed(d[g]));
				a.push(h)
			}
		}
		return this.c = a.join("&")
	};

	function Yj(a, b) {
		b = String(b);
		a.f && (b = b.toLowerCase());
		return b
	}

	function Uj(a, b) {
		b && !a.f && (Xj(a), a.c = null, a.a.forEach(function(a, b) {
			var c = b.toLowerCase();
			b != c && (this.remove(b), ak(this, c, a))
		}, a));
		a.f = b
	}
	v.fg = function(a) {
		for(var b = 0; b < arguments.length; b++) Gj(arguments[b], function(a, b) {
			this.add(b, a)
		}, this)
	};
	var bk = {},
		ck = {},
		dk = {},
		ek = {},
		fk = {};

	function gk() {
		throw Error("Do not instantiate directly");
	}
	gk.prototype.re = null;
	gk.prototype.da = r("a");
	gk.prototype.toString = r("a");

	function hk() {
		gk.call(this)
	}
	E(hk, gk);
	hk.prototype.Hb = bk;

	function ik() {
		gk.call(this)
	}
	E(ik, gk);
	ik.prototype.Hb = ek;
	ik.prototype.re = 1;

	function jk(a, b) {
		b = a(b || kk, void 0, void 0);
		a = Mg(Uf(), f);
		b = lk(b);
		Pf(a, b);
		1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
		return a
	}

	function lk(a) {
		if(!Ac(a)) return String(a);
		if(a instanceof gk) {
			if(a.Hb === bk) return a.da();
			if(a.Hb === fk) return gd(a.da())
		}
		return "zSoyz"
	}
	var kk = {};

	function mk(a, b) {
		return null != a && a.Hb === b
	}

	function nk(a) {
		if(null != a) switch(a.re) {
			case 1:
				return 1;
			case -1:
				return -1;
			case 0:
				return 0
		}
		return null
	}

	function ok(a) {
		return null != a && a.Hb === bk ? a : a instanceof Ef ? pk(Gf(a), a.Wb()) : pk(gd(String(String(a))), nk(a))
	}
	var pk = function(a) {
			function b(a) {
				this.a = a
			}
			b.prototype = a.prototype;
			return function(a, d) {
				a = new b(String(a));
				void 0 !== d && (a.re = d);
				return a
			}
		}(hk),
		qk = function(a) {
			function b(a) {
				this.a = a
			}
			b.prototype = a.prototype;
			return function(a) {
				return new b(String(a))
			}
		}(ik);

	function rk(a) {
		return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
	}

	function X(a) {
		return mk(a, bk) ? String(String(a.da()).replace(sk, "").replace(tk, "&lt;")).replace(uk, vk) : gd(String(a))
	}

	function wk(a) {
		mk(a, ck) || mk(a, dk) ? a = xk(a) : a instanceof hf ? a = xk(kf(a)) : a instanceof bf ? a = xk(df(a)) : (a = String(a), a = yk.test(a) ? a.replace(zk, Ak) : Aa);
		return a
	}

	function Bk(a) {
		mk(a, ck) || mk(a, dk) ? a = xk(a) : a instanceof hf ? a = xk(kf(a)) : a instanceof bf ? a = xk(df(a)) : (a = String(a), a = Ck.test(a) ? a.replace(zk, Ak) : Aa);
		return a
	}

	function Dk(a) {
		mk(a, ek) ? a = rk(a.da()) : null == a ? a = "" : a instanceof of ? a = rk(qf(a)) : a instanceof Af ? a = rk(Cf(a)) : (a = String(a), a = Ek.test(a) ? a : "zSoyz");
		return a
	}
	var Fk = {
		"\x00": "&#0;",
		"\t": "&#9;",
		"\n": "&#10;",
		"\x0B": "&#11;",
		"\f": "&#12;",
		"\r": "&#13;",
		" ": "&#32;",
		'"': "&quot;",
		"&": "&amp;",
		"'": "&#39;",
		"-": "&#45;",
		"/": "&#47;",
		"<": "&lt;",
		"=": "&#61;",
		">": "&gt;",
		"`": "&#96;",
		"\u0085": "&#133;",
		"\u00a0": "&#160;",
		"\u2028": "&#8232;",
		"\u2029": "&#8233;"
	};

	function vk(a) {
		return Fk[a]
	}
	var Gk = {
		"\x00": "\\0 ",
		"\b": "\\8 ",
		"\t": "\\9 ",
		"\n": "\\a ",
		"\x0B": "\\b ",
		"\f": "\\c ",
		"\r": "\\d ",
		'"': "\\22 ",
		"&": "\\26 ",
		"'": "\\27 ",
		"(": "\\28 ",
		")": "\\29 ",
		"*": "\\2a ",
		"/": "\\2f ",
		":": "\\3a ",
		";": "\\3b ",
		"<": "\\3c ",
		"=": "\\3d ",
		">": "\\3e ",
		"@": "\\40 ",
		"\\": "\\5c ",
		"{": "\\7b ",
		"}": "\\7d ",
		"\u0085": "\\85 ",
		"\u00a0": "\\a0 ",
		"\u2028": "\\2028 ",
		"\u2029": "\\2029 "
	};

	function Hk(a) {
		return Gk[a]
	}
	var Ik = {
		"\x00": "%00",
		"\u0001": "%01",
		"\u0002": "%02",
		"\u0003": "%03",
		"\u0004": "%04",
		"\u0005": "%05",
		"\u0006": "%06",
		"\u0007": "%07",
		"\b": "%08",
		"\t": "%09",
		"\n": "%0A",
		"\x0B": "%0B",
		"\f": "%0C",
		"\r": "%0D",
		"\u000e": "%0E",
		"\u000f": "%0F",
		"\u0010": "%10",
		"\u0011": "%11",
		"\u0012": "%12",
		"\u0013": "%13",
		"\u0014": "%14",
		"\u0015": "%15",
		"\u0016": "%16",
		"\u0017": "%17",
		"\u0018": "%18",
		"\u0019": "%19",
		"\u001a": "%1A",
		"\u001b": "%1B",
		"\u001c": "%1C",
		"\u001d": "%1D",
		"\u001e": "%1E",
		"\u001f": "%1F",
		" ": "%20",
		'"': "%22",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"<": "%3C",
		">": "%3E",
		"\\": "%5C",
		"{": "%7B",
		"}": "%7D",
		"\u007f": "%7F",
		"\u0085": "%C2%85",
		"\u00a0": "%C2%A0",
		"\u2028": "%E2%80%A8",
		"\u2029": "%E2%80%A9",
		"\uff01": "%EF%BC%81",
		"\uff03": "%EF%BC%83",
		"\uff04": "%EF%BC%84",
		"\uff06": "%EF%BC%86",
		"\uff07": "%EF%BC%87",
		"\uff08": "%EF%BC%88",
		"\uff09": "%EF%BC%89",
		"\uff0a": "%EF%BC%8A",
		"\uff0b": "%EF%BC%8B",
		"\uff0c": "%EF%BC%8C",
		"\uff0f": "%EF%BC%8F",
		"\uff1a": "%EF%BC%9A",
		"\uff1b": "%EF%BC%9B",
		"\uff1d": "%EF%BC%9D",
		"\uff1f": "%EF%BC%9F",
		"\uff20": "%EF%BC%A0",
		"\uff3b": "%EF%BC%BB",
		"\uff3d": "%EF%BC%BD"
	};

	function Ak(a) {
		return Ik[a]
	}
	var uk = /[\x00\x22\x27\x3c\x3e]/g,
		Jk = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
		zk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
		Ek = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i,
		yk = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
		Ck = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

	function xk(a) {
		return String(a).replace(zk, Ak)
	}
	var sk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
		tk = /</g;

	function Kk(a, b) {
		this.c = a;
		this.f = b;
		this.b = 0;
		this.a = null
	}
	Kk.prototype.get = function() {
		if(0 < this.b) {
			this.b--;
			var a = this.a;
			this.a = a.next;
			a.next = null
		} else a = this.c();
		return a
	};

	function Lk(a, b) {
		a.f(b);
		100 > a.b && (a.b++, b.next = a.a, a.a = b)
	};

	function Mk(a) {
		w.setTimeout(function() {
			throw a;
		}, 0)
	}
	var Nk;

	function Ok() {
		var a = w.MessageChannel;
		"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
			var a = document.createElement(ma);
			a.style.display = q;
			a.src = "";
			document.documentElement.appendChild(a);
			var b = a.contentWindow;
			a = b.document;
			a.open();
			a.write("");
			a.close();
			var c = "callImmediate" + Math.random(),
				d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
			a = D(function(a) {
					if(("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
				},
				this);
			b.addEventListener("message", a, !1);
			this.port1 = {};
			this.port2 = {
				postMessage: function() {
					b.postMessage(c, d)
				}
			}
		});
		if("undefined" !== typeof a && !Ld()) {
			var b = new a,
				c = {},
				d = c;
			b.port1.onmessage = function() {
				if(x(c.next)) {
					c = c.next;
					var a = c.Uf;
					c.Uf = null;
					a()
				}
			};
			return function(a) {
				d.next = {
					Uf: a
				};
				d = d.next;
				b.port2.postMessage(0)
			}
		}
		return "undefined" !== typeof document && "onreadystatechange" in document.createElement(ta) ? function(a) {
			var b = document.createElement(ta);
			b.onreadystatechange = function() {
				b.onreadystatechange = null;
				b.parentNode.removeChild(b);
				b = null;
				a();
				a = null
			};
			document.documentElement.appendChild(b)
		} : function(a) {
			w.setTimeout(a, 0)
		}
	};

	function Pk() {
		this.b = this.a = null
	}
	var Rk = new Kk(function() {
		return new Qk
	}, function(a) {
		a.reset()
	});
	Pk.prototype.add = function(a, b) {
		var c = Rk.get();
		c.set(a, b);
		this.b ? this.b.next = c : this.a = c;
		this.b = c
	};
	Pk.prototype.remove = function() {
		var a = null;
		this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
		return a
	};

	function Qk() {
		this.next = this.b = this.a = null
	}
	Qk.prototype.set = function(a, b) {
		this.a = a;
		this.b = b;
		this.next = null
	};
	Qk.prototype.reset = function() {
		this.next = this.b = this.a = null
	};

	function Sk(a, b) {
		Tk || Uk();
		Vk || (Tk(), Vk = !0);
		Wk.add(a, b)
	}
	var Tk;

	function Uk() {
		if(w.Promise && w.Promise.resolve) {
			var a = w.Promise.resolve(void 0);
			Tk = function() {
				a.then(Xk)
			}
		} else Tk = function() {
			var a = Xk;
			!zc(w.setImmediate) || w.Window && w.Window.prototype && !F(ka) && w.Window.prototype.setImmediate == w.setImmediate ? (Nk || (Nk = Ok()), Nk(a)) : w.setImmediate(a)
		}
	}
	var Vk = !1,
		Wk = new Pk;

	function Xk() {
		for(var a; a = Wk.remove();) {
			try {
				a.a.call(a.b)
			} catch(b) {
				Mk(b)
			}
			Lk(Rk, a)
		}
		Vk = !1
	};

	function Yk(a) {
		a.prototype.then = a.prototype.then;
		a.prototype.$goog_Thenable = !0
	}

	function Zk(a) {
		if(!a) return !1;
		try {
			return !!a.$goog_Thenable
		} catch(b) {
			return !1
		}
	};

	function $k(a, b) {
		this.a = 0;
		this.l = void 0;
		this.f = this.b = this.c = null;
		this.g = this.h = !1;
		if(a != A) try {
			var c = this;
			a.call(b, function(a) {
				al(c, 2, a)
			}, function(a) {
				al(c, 3, a)
			})
		} catch(d) {
			al(this, 3, d)
		}
	}

	function bl() {
		this.next = this.c = this.b = this.f = this.a = null;
		this.g = !1
	}
	bl.prototype.reset = function() {
		this.c = this.b = this.f = this.a = null;
		this.g = !1
	};
	var cl = new Kk(function() {
		return new bl
	}, function(a) {
		a.reset()
	});

	function dl(a, b, c) {
		var d = cl.get();
		d.f = a;
		d.b = b;
		d.c = c;
		return d
	}

	function el(a) {
		if(a instanceof $k) return a;
		var b = new $k(A);
		al(b, 2, a);
		return b
	}

	function fl() {
		var a = gl[5];
		return new $k(function(b, c) {
			c(a)
		})
	}
	$k.prototype.then = function(a, b, c) {
		return hl(this, zc(a) ? a : null, zc(b) ? b : null, c)
	};
	Yk($k);
	$k.prototype.cancel = function(a) {
		0 == this.a && Sk(function() {
			var b = new il(a);
			jl(this, b)
		}, this)
	};

	function jl(a, b) {
		if(0 == a.a)
			if(a.c) {
				var c = a.c;
				if(c.b) {
					for(var d = 0, e = null, g = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) e || (g = h);
					e && (0 == c.a && 1 == d ? jl(c, b) : (g ? (d = g, d.next == c.f && (c.f = d), d.next = d.next.next) : kl(c), ll(c, e, 3, b)))
				}
				a.c = null
			} else al(a, 3, b)
	}

	function ml(a, b) {
		a.b || 2 != a.a && 3 != a.a || nl(a);
		a.f ? a.f.next = b : a.b = b;
		a.f = b
	}

	function hl(a, b, c, d) {
		var e = dl(null, null, null);
		e.a = new $k(function(a, h) {
			e.f = b ? function(c) {
				try {
					var e = b.call(d, c);
					a(e)
				} catch(m) {
					h(m)
				}
			} : a;
			e.b = c ? function(b) {
				try {
					var e = c.call(d, b);
					!x(e) && b instanceof il ? h(b) : a(e)
				} catch(m) {
					h(m)
				}
			} : h
		});
		e.a.c = a;
		ml(a, e);
		return e.a
	}
	$k.prototype.o = function(a) {
		this.a = 0;
		al(this, 2, a)
	};
	$k.prototype.B = function(a) {
		this.a = 0;
		al(this, 3, a)
	};

	function al(a, b, c) {
		if(0 == a.a) {
			a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
			a.a = 1;
			a: {
				var d = c,
					e = a.o,
					g = a.B;
				if(d instanceof $k) {
					ml(d, dl(e || A, g || null, a));
					var h = !0
				} else if(Zk(d)) d.then(e, g, a),
				h = !0;
				else {
					if(Ac(d)) try {
						var k = d.then;
						if(zc(k)) {
							ol(d, k, e, g, a);
							h = !0;
							break a
						}
					} catch(l) {
						g.call(a, l);
						h = !0;
						break a
					}
					h = !1
				}
			}
			h || (a.l = c, a.a = b, a.c = null, nl(a), 3 != b || c instanceof il || pl(a, c))
		}
	}

	function ol(a, b, c, d, e) {
		function g(a) {
			k || (k = !0, d.call(e, a))
		}

		function h(a) {
			k || (k = !0, c.call(e, a))
		}
		var k = !1;
		try {
			b.call(a, h, g)
		} catch(l) {
			g(l)
		}
	}

	function nl(a) {
		a.h || (a.h = !0, Sk(a.s, a))
	}

	function kl(a) {
		var b = null;
		a.b && (b = a.b, a.b = b.next, b.next = null);
		a.b || (a.f = null);
		return b
	}
	$k.prototype.s = function() {
		for(var a; a = kl(this);) ll(this, a, this.a, this.l);
		this.h = !1
	};

	function ll(a, b, c, d) {
		if(3 == c && b.b && !b.g)
			for(; a && a.g; a = a.c) a.g = !1;
		if(b.a) b.a.c = null, ql(b, c, d);
		else try {
			b.g ? b.f.call(b.c) : ql(b, c, d)
		} catch(e) {
			rl.call(null, e)
		}
		Lk(cl, b)
	}

	function ql(a, b, c) {
		2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
	}

	function pl(a, b) {
		a.g = !0;
		Sk(function() {
			a.g && rl.call(null, b)
		})
	}
	var rl = Mk;

	function il(a) {
		Jc.call(this, a)
	}
	E(il, Jc);
	il.prototype.name = "cancel";

	function sl(a, b, c) {
		if(zc(a)) c && (a = D(a, c));
		else if(a && typeof a.handleEvent == p) a = D(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < Number(b) ? -1 : w.setTimeout(a, b || 0)
	}

	function tl(a) {
		w.clearTimeout(a)
	};

	function ul(a, b, c) {
		Q.call(this);
		this.b = a;
		this.f = b || 0;
		this.c = c;
		this.a = D(this.fi, this)
	}
	E(ul, Q);
	v = ul.prototype;
	v.ka = 0;
	v.F = function() {
		ul.m.F.call(this);
		this.stop();
		delete this.b;
		delete this.c
	};
	v.start = function(a) {
		this.stop();
		this.ka = sl(this.a, x(a) ? a : this.f)
	};
	v.stop = function() {
		this.ec() && tl(this.ka);
		this.ka = 0
	};
	v.ec = function() {
		return 0 != this.ka
	};
	v.fi = function() {
		this.ka = 0;
		this.b && this.b.call(this.c)
	};
	var vl = function() {
		if(Zd) {
			var a = /Windows NT ([0-9.]+)/;
			return(a = a.exec(wd)) ? a[1] : "0"
		}
		return Yd ? (a = /10[_.][0-9_.]+/, (a = a.exec(wd)) ? a[0].replace(/_/g, ".") : "10") : $d ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(wd)) ? a[1] : "") : ae || be || ce ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(wd)) ? a[1].replace(/_/g, ".") : "") : ""
	}();

	function wl(a) {
		return(a = a.exec(wd)) ? a[1] : ""
	}
	var xl = function() {
		if(oe) return wl(/Firefox\/([0-9.]+)/);
		if(G || Vd || Ud) return je;
		if(se) return Pd() ? wl(/CriOS\/([0-9.]+)/) : wl(/Chrome\/([0-9.]+)/);
		if(te && !Pd()) return wl(/Version\/([0-9.]+)/);
		if(pe || qe) {
			var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(wd);
			if(a) return a[1] + "." + a[2]
		} else if(re) return(a = wl(/Android\s+([0-9.]+)/)) ? a : wl(/Version\/([0-9.]+)/);
		return ""
	}();

	function yl(a, b, c, d, e, g, h, k, l) {
		var m = zl(c);
		var n = $g(a);
		var t = bh(a);
		n = new Pg(n.x, n.y, t.width, t.height);
		if(t = Zg(a)) {
			var y = new Pg(t.left, t.top, t.right - t.left, t.bottom - t.top);
			t = Math.max(n.left, y.left);
			var M = Math.min(n.left + n.width, y.left + y.width);
			if(t <= M) {
				var R = Math.max(n.top, y.top);
				y = Math.min(n.top + n.height, y.top + y.height);
				R <= y && (n.left = t, n.top = R, n.width = M - t, n.height = y - R)
			}
		}
		t = Uf(a);
		R = Uf(c);
		t.a != R.a && (M = t.a.body, R = ah(M, Ng(R)), R = Sf(R, $g(M)), !G || ke(9) || dg(t.a) || (R = Sf(R, eg(t.a))), n.left += R.x, n.top += R.y);
		a = Al(a, b);
		b = n.left;
		a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
		b = new L(b, n.top + (a & 1 ? n.height : 0));
		b = Sf(b, m);
		e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
		if(h)
			if(l) var na = l;
			else if(na = Zg(c)) na.top -= m.y, na.right -= m.x, na.bottom -= m.y, na.left -= m.x;
		return Bl(b, c, d, g, na, h, k)
	}

	function zl(a) {
		if(a = a.offsetParent) {
			var b = "HTML" == a.tagName || "BODY" == a.tagName;
			if(!b || "static" != Tg(a, Mb)) {
				var c = $g(a);
				if(!b) {
					b = fh(a);
					var d;
					if(d = b) {
						d = te && 0 <= sd(xl, 10);
						var e;
						if(e = de) e = 0 <= sd(vl, 10);
						d = H || d || e
					}
					b = d ? -a.scrollLeft : !b || Wd && J("8") || Tg(a, "overflowX") == fc ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
					c = Sf(c, new L(b, a.scrollTop))
				}
			}
		}
		return c || new L
	}

	function Bl(a, b, c, d, e, g, h) {
		a = Rf(a);
		var k = Al(b, c);
		c = bh(b);
		h = h ? new Tf(h.width, h.height) : new Tf(c.width, c.height);
		a = Rf(a);
		h = new Tf(h.width, h.height);
		var l = 0;
		if(d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
		if(g) {
			if(e) {
				d = a;
				k = h;
				l = 0;
				65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
				132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
				d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
				if(g & 16) {
					var m = d.x;
					d.x < e.left && (d.x = e.left, l |= 4);
					d.x + k.width > e.right &&
						(k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
				}
				d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
				g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
				d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
				g & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
				d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
				g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height >
					e.bottom ? 128 : 0));
				e = l
			} else e = 256;
			l = e
		}
		g = new Pg(0, 0, 0, 0);
		g.left = a.x;
		g.top = a.y;
		g.width = h.width;
		g.height = h.height;
		e = l;
		if(e & 496) return e;
		Ug(b, new L(g.left, g.top));
		h = new Tf(g.width, g.height);
		c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = dg(Uf(N(b)).a), !G || J("10") || a && J("8") ? kh(b, c, La) : (h = b.style, a ? (a = lh(b), b = mh(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
		return e
	}

	function Al(a, b) {
		return(b & 8 && fh(a) ? b ^ 4 : b) & -9
	};

	function Cl() {}
	Cl.prototype.b = hc();

	function Dl() {}
	Dl.prototype.a = null;

	function El(a) {
		var b;
		(b = a.a) || (b = {}, Fl(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
		return b
	};
	var Gl;

	function Il() {}
	E(Il, Dl);

	function Jl(a) {
		return(a = Fl(a)) ? new ActiveXObject(a) : new XMLHttpRequest
	}

	function Fl(a) {
		if(!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
			for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
				var d = b[c];
				try {
					return new ActiveXObject(d), a.b = d
				} catch(e) {}
			}
			throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
		}
		return a.b
	}
	Gl = new Il;

	function Kl(a) {
		li.call(this);
		this.headers = new Aj;
		this.he = a || null;
		this.na = !1;
		this.ge = this.O = null;
		this.pb = "";
		this.Ha = 0;
		this.Pb = this.Ve = this.Md = this.we = !1;
		this.de = 0;
		this.ce = null;
		this.Xg = "";
		this.Gf = this.qh = !1
	}
	E(Kl, li);
	Kl.prototype.va = null;
	var Ll = /^https?$/i,
		Ml = [sa, "PUT"],
		Nl = [];

	function Ol(a, b, c, d, e) {
		var g = new Kl;
		Nl.push(g);
		b && g.w(Ua, b);
		g.zb(Qb, g.Ph);
		e && (g.de = Math.max(0, e));
		g.send(a, c, d, void 0)
	}
	v = Kl.prototype;
	v.Ph = function() {
		this.M();
		Vc(Nl, this)
	};
	v.send = function(a, b, c, d) {
		if(this.O) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.pb + "; newUri=" + a);
		b = b ? b.toUpperCase() : "GET";
		this.pb = a;
		this.Ha = 0;
		this.we = !1;
		this.na = !0;
		this.O = this.he ? Jl(this.he) : Jl(Gl);
		this.ge = this.he ? El(this.he) : El(Gl);
		this.O.onreadystatechange = D(this.Pg, this);
		try {
			this.Ve = !0, this.O.open(b, String(a), !0), this.Ve = !1
		} catch(g) {
			this.ld(5, g);
			return
		}
		a = c || "";
		var e = new Aj(this.headers);
		d && Gj(d, function(a, b) {
			e.set(b, a)
		});
		d = Tc(e.Qa(), Pl);
		c = w.FormData && a instanceof
		w.FormData;
		!Uc(Ml, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		e.forEach(function(a, b) {
			this.O.setRequestHeader(b, a)
		}, this);
		this.Xg && (this.O.responseType = this.Xg);
		gc in this.O && this.O.withCredentials !== this.qh && (this.O.withCredentials = this.qh);
		try {
			Ql(this), 0 < this.de && ((this.Gf = Rl(this.O)) ? (this.O.timeout = this.de, this.O.ontimeout = D(this.Db, this)) : this.ce = sl(this.Db, this.de, this)), this.Md = !0, this.O.send(a), this.Md = !1
		} catch(g) {
			this.ld(5, g)
		}
	};

	function Rl(a) {
		return G && J(9) && uc(a.timeout) && x(a.ontimeout)
	}

	function Pl(a) {
		return "content-type" == a.toLowerCase()
	}
	v.Db = function() {
		"undefined" != typeof tc && this.O && (this.Ha = 8, this.dispatchEvent("timeout"), this.abort(8))
	};
	v.ld = function(a) {
		this.na = !1;
		this.O && (this.Pb = !0, this.O.abort(), this.Pb = !1);
		this.Ha = a;
		Sl(this);
		Tl(this)
	};

	function Sl(a) {
		a.we || (a.we = !0, a.dispatchEvent(Ua), a.dispatchEvent("error"))
	}
	v.abort = function(a) {
		this.O && this.na && (this.na = !1, this.Pb = !0, this.O.abort(), this.Pb = !1, this.Ha = a || 7, this.dispatchEvent(Ua), this.dispatchEvent("abort"), Tl(this))
	};
	v.F = function() {
		this.O && (this.na && (this.na = !1, this.Pb = !0, this.O.abort(), this.Pb = !1), Tl(this, !0));
		Kl.m.F.call(this)
	};
	v.Pg = function() {
		this.sb || (this.Ve || this.Md || this.Pb ? Ul(this) : this.nj())
	};
	v.nj = function() {
		Ul(this)
	};

	function Ul(a) {
		if(a.na && "undefined" != typeof tc && (!a.ge[1] || 4 != (a.O ? a.O.readyState : 0) || 2 != a.Xb()))
			if(a.Md && 4 == (a.O ? a.O.readyState : 0)) sl(a.Pg, 0, a);
			else if(a.dispatchEvent(Rb), a.Od()) {
			a.na = !1;
			try {
				a.Sc() ? (a.dispatchEvent(Ua), a.dispatchEvent("success")) : (a.Ha = 6, Sl(a))
			} finally {
				Tl(a)
			}
		}
	}

	function Tl(a, b) {
		if(a.O) {
			Ql(a);
			var c = a.O,
				d = a.ge[0] ? A : null;
			a.O = null;
			a.ge = null;
			b || a.dispatchEvent(Qb);
			try {
				c.onreadystatechange = d
			} catch(e) {}
		}
	}

	function Ql(a) {
		a.O && a.Gf && (a.O.ontimeout = null);
		a.ce && (tl(a.ce), a.ce = null)
	}
	v.ec = function() {
		return !!this.O
	};
	v.Od = function() {
		return 4 == (this.O ? this.O.readyState : 0)
	};
	v.Sc = function() {
		var a = this.Xb();
		a: switch(a) {
			case 200:
			case 201:
			case 202:
			case 204:
			case 206:
			case 304:
			case 1223:
				var b = !0;
				break a;
			default:
				b = !1
		}
		if(!b) {
			if(a = 0 === a) a = String(this.pb).match(Hj)[1] || null, !a && w.self && w.self.location && (a = w.self.location.protocol, a = a.substr(0, a.length - 1)), a = !Ll.test(a ? a.toLowerCase() : "");
			b = a
		}
		return b
	};
	v.Xb = function() {
		try {
			return 2 < (this.O ? this.O.readyState : 0) ? this.O.status : -1
		} catch(a) {
			return -1
		}
	};
	v.De = function() {
		return String(this.pb)
	};
	v.Kb = function() {
		try {
			return this.O ? this.O.responseText : ""
		} catch(a) {
			return ""
		}
	};
	v.getResponseHeader = function(a) {
		if(this.O && this.Od()) return a = this.O.getResponseHeader(a), null === a ? void 0 : a
	};
	v.getAllResponseHeaders = function() {
		return this.O && this.Od() ? this.O.getAllResponseHeaders() || "" : ""
	};
	v.Ce = r("Ha");
	var Vl = !1;

	function Wl(a) {
		if(a = a.match(/[\d]+/g)) a.length = 3
	}
	(function() {
		if(navigator.plugins && navigator.plugins.length) {
			var a = navigator.plugins["Shockwave Flash"];
			if(a && (Vl = !0, a.description)) {
				Wl(a.description);
				return
			}
			if(navigator.plugins["Shockwave Flash 2.0"]) {
				Vl = !0;
				return
			}
		}
		if(navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Vl = !(!a || !a.enabledPlugin))) {
			Wl(a.enabledPlugin.description);
			return
		}
		if("undefined" != typeof ActiveXObject) {
			try {
				var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
				Vl = !0;
				Wl(b.GetVariable("$version"));
				return
			} catch(c) {}
			try {
				b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				Vl = !0;
				return
			} catch(c) {}
			try {
				b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Vl = !0, Wl(b.GetVariable("$version"))
			} catch(c) {}
		}
	})();

	function Xl() {
		this.b = [];
		this.a = {};
		this.c = !1;
		this.B = 1;
		this.g = {};
		this.f = null;
		this.s = "";
		S(window, "beforeunload", this.o, !1, this)
	}
	xc(Xl);

	function Yl(a, b, c) {
		if(null == b) return "1";
		switch(B(b)) {
			case Wb:
				return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), ed(a);
			case Hb:
				return "" + b;
			case "boolean":
				return b ? "1" : "0";
			case Ga:
				var d = [],
					e;
				for(e in b) d.push(Yl(a, b[e], c));
				return d.join(",");
			case Ib:
				d = [];
				for(e in b) d.push(Zl(a, e, b[e], c));
				return d.join(",");
			default:
				return ""
		}
	}

	function Zl(a, b, c, d) {
		return [ed(b), Yl(a, c, d || "smtalt" == b)].join("=")
	}
	Xl.prototype.log = function(a, b) {
		this.b.push([a, b]);
		this.c || (this.c = !0, sl(this.h, 0, this))
	};
	Xl.prototype.h = function() {
		for(var a = 0; a < this.b.length; a++) {
			var b = this.b[a];
			$l(this, b[0], b[1])
		}
		this.b = [];
		this.c = !1
	};

	function $l(a, b, c) {
		am(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + Zl(a, b, c))
	}

	function am(a, b) {
		var c = new Image,
			d = a.B++;
		a.g[d] = c;
		c.onload = c.onerror = function() {
			delete Xl.Y().g[d]
		};
		c.src = b;
		c = null
	}

	function bm(a, b) {
		var c = 0,
			d = null;
		b in a.a && (d = a.a[b], c = d[0], d = d[1]);
		if(B(1) == Ib) {
			B(d) != Ib && (d = {});
			for(var e in 1) d[e] = cm(e in d ? d[e] : null, 1[e])
		} else d = cm(d, 1);
		a.a[b] = [c, d];
		tl(a.a[b][0]);
		c = sl(D(a.l, a, b), 2E3);
		a.a[b][0] = c
	}
	Xl.prototype.l = function(a) {
		$l(this, a, this.a[a][1]);
		a in this.a && (tl(this.a[a][0]), delete this.a[a])
	};

	function cm(a, b) {
		null != b || (b = 1);
		isNaN(a) && (a = parseInt(a, 10));
		isNaN(b) && (b = parseInt(b, 10));
		return a + b
	}
	Xl.prototype.o = function() {
		this.h();
		for(var a in this.a) 0 != this.a[a] && this.l(a)
	};

	function dm() {}
	xc(dm);

	function em(a) {
		Ce(this, a, fm)
	}
	E(em, Ae);

	function gm(a) {
		Ce(this, a, hm)
	}
	E(gm, Ae);

	function im(a) {
		Ce(this, a, jm)
	}
	E(im, Ae);

	function km(a) {
		Ce(this, a, lm)
	}
	E(km, Ae);

	function mm(a) {
		Ce(this, a, null)
	}
	E(mm, Ae);
	var fm = [3, 4],
		hm = [3],
		jm = [2],
		lm = [26, 80];
	km.prototype.bb = function() {
		return Fe(this, 16)
	};
	km.prototype.Sb = function(a) {
		He(this, 16, a)
	};
	km.prototype.oa = function() {
		return Fe(this, 1)
	};
	km.prototype.ua = function(a) {
		He(this, 1, a)
	};

	function nm() {
		this.c = this.a = "";
		dm.Y()
	}
	xc(nm);
	nm.prototype.Sb = ic("a");
	nm.prototype.ua = ic("c");
	nm.prototype.store = function(a) {
		He(a, 65, 0);
		a.Sb(this.a);
		He(a, 14, "");
		a.ua(this.c);
		He(a, 50, "");
		He(a, 52, "");
		He(a, 32, 0)
	};

	function om() {
		this.b = nm.Y()
	}
	E(om, Q);
	xc(om);
	om.prototype.a = function() {
		pm(this, 25)
	};

	function pm(a, b) {
		var c = new km;
		a.b.store(c);
		He(c, 31, b);
		return c
	};

	function qm() {
		this.a = []
	}
	qm.prototype.add = function(a) {
		this.a.push(a)
	};

	function rm() {
		this.a = []
	}
	E(rm, qm);
	xc(rm);
	rm.prototype.add = function(a) {
		if(a)
			for(; a(););
	};

	function sm(a) {
		this.a = [];
		this.b = .5;
		tm(this, a);
		this.f = 0;
		this.c = !0;
		this.g = D(this.h, this)
	}
	E(sm, qm);

	function tm(a, b) {
		1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
	}
	sm.prototype.add = function(a) {
		sm.m.add.call(this, a);
		this.c && um(this)
	};

	function um(a) {
		a.c = !1;
		window.setTimeout(a.g, Math.min(a.f, 5E3))
	}
	sm.prototype.h = function() {
		var a = (new Date).getTime();
		do {
			this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
			var b = !!this.a.length;
			var c = 95 * this.b + 5;
			var d = (new Date).getTime() - a
		} while (b && d < c);
		this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
		b ? um(this) : this.c = !0
	};

	function vm(a, b) {
		this.o = a || null;
		this.C = b || rm.Y();
		this.l = this.h = this.G = null;
		this.f = this.c = !1;
		this.g = null;
		this.a = [];
		this.b = 0
	}

	function wm() {}

	function xm() {}

	function ym(a, b) {
		a.c || (a.G = b)
	}

	function zm(a, b, c) {
		a.h = c ? D(b, c) : b
	}

	function Am(a, b, c) {
		a.l = c ? D(b, c) : b
	}

	function Bm(a, b) {
		a.c || (a.c = !0, a.B = b, a.b++, a.g = a.G, a.s())
	}
	vm.prototype.stop = function() {
		this.b++;
		this.c = !1;
		this.a = []
	};

	function Cm(a) {
		if(!a.c) return null;
		for(var b = !1, c = 0; c < a.a.length; ++c)
			if(a.a[c].target === a) {
				a.a[c].ready = !1;
				a.a[c].oh = a.b + 1;
				b = !0;
				break
			}
		b || a.a.push({
			target: a,
			ready: !1,
			oh: a.b + 1
		});
		return D(a.s, a, a, a.b + 1)
	}

	function Dm(a) {
		if(!a.c) return !0;
		for(var b = 0; b < a.a.length; ++b)
			if(a.a[b].target === a && a.a[b].oh == a.b) return a.a[b].ready;
		return !0
	}
	vm.prototype.s = function(a, b) {
		if(this.c) {
			if(a)
				for(var c = 0; c < this.a.length; ++c)
					if(this.a[c].target === a) {
						this.a[c].ready = !0;
						break
					}
			this.f || this.C.add(D(this.I, this, b || this.b))
		}
	};
	vm.prototype.I = function(a) {
		if(this.b != a) return !1;
		a = this.g;
		if(a == xm) return this.stop(), this.h && this.h.call(this.o, this, this.B), !1;
		this.f = !0;
		try {
			var b = a.call(this.o, this, this.B);
			if(!b) throw Error();
		} catch(c) {
			this.stop();
			a = c;
			if(this.l) this.l.call(this.o, a, this, this.B);
			else throw a;
			return !1
		} finally {
			this.f = !1
		}
		b != wm && (this.g = b, this.b++, this.s());
		return !1
	};

	function Em() {
		li.call(this);
		this.a = 0;
		this.endTime = this.b = null
	}
	E(Em, li);
	Em.prototype.c = function() {
		this.Pa("begin")
	};
	Em.prototype.f = function() {
		this.Pa("end")
	};
	Em.prototype.Ab = function() {
		this.Pa("stop")
	};
	Em.prototype.Pa = function(a) {
		this.dispatchEvent(a)
	};

	function Fm(a, b) {
		C(b) || (b = [b]);
		b = Qc(b, function(a) {
			return z(a) ? a : a.Vn + " " + a.duration + "s " + a.timing + " " + a.delay + "s"
		});
		O(a, cc, b.join(","))
	}
	var Gm = Ve(function() {
		if(G) return J("10.0");
		var a = document.createElement(f),
			b = I ? "-webkit" : H ? "-moz" : G ? "-ms" : Ud ? "-o" : null,
			c = {
				transition: Jb
			};
		b && (c[b + "-transition"] = Jb);
		b = Kf($a, {
			style: c
		});
		Pf(a, Gf(b));
		a = a.firstChild;
		b = a.style[ud(cc)];
		return "" != ("undefined" !== typeof b ? b : a.style[Qg(a, cc)] || "")
	});

	function Hm(a, b, c, d, e) {
		Em.call(this);
		this.A = a;
		this.l = b;
		this.s = c;
		this.g = d;
		this.o = C(e) ? e : [e]
	}
	E(Hm, Em);
	v = Hm.prototype;
	v.play = function() {
		if(1 == this.a) return !1;
		this.c();
		this.Pa("play");
		this.b = Hc();
		this.a = 1;
		if(Gm()) return O(this.A, this.s), this.h = sl(this.tj, void 0, this), !0;
		this.Df(!1);
		return !1
	};
	v.tj = function() {
		bh(this.A);
		Fm(this.A, this.o);
		O(this.A, this.g);
		this.h = sl(D(this.Df, this, !1), 1E3 * this.l)
	};
	v.stop = function() {
		1 == this.a && this.Df(!0)
	};
	v.Df = function(a) {
		O(this.A, cc, "");
		tl(this.h);
		O(this.A, this.g);
		this.endTime = Hc();
		this.a = 0;
		a ? this.Ab() : this.Pa(ab);
		this.f()
	};
	v.F = function() {
		this.stop();
		Hm.m.F.call(this)
	};

	function Im(a, b) {
		li.call(this);
		this.h = new fi(this);
		this.ac(a || null);
		b && (this.pc = b)
	}
	E(Im, li);
	v = Im.prototype;
	v.A = null;
	v.vc = !0;
	v.Sf = null;
	v.gc = !1;
	v.af = -1;
	v.pc = $b;
	v.j = r("A");
	v.ac = function(a) {
		Jm(this);
		this.A = a
	};
	v.Vc = function(a) {
		Jm(this);
		this.vc = a
	};

	function Jm(a) {
		if(a.gc) throw Error("Can not change this state of the popup while showing.");
	}
	v.N = r("gc");
	v.J = function(a) {
		this.ya && this.ya.stop();
		this.qa && this.qa.stop();
		if(a) {
			if(!this.gc && this.Me()) {
				if(!this.A) throw Error("Caller must call setElement before trying to show the popup");
				this.lb();
				a = N(this.A);
				if(this.vc)
					if(this.h.w(a, Bb, this.lf, !0), G) {
						try {
							var b = a.activeElement
						} catch(d) {}
						for(; b && b.nodeName == ma;) {
							try {
								var c = Bg(b)
							} catch(d) {
								break
							}
							a = c;
							b = a.activeElement
						}
						this.h.w(a, Bb, this.lf, !0);
						this.h.w(a, Ya, this.Og)
					} else this.h.w(a, Ka, this.Og);
				this.pc == $b ? (this.A.style.visibility = fc, P(this.A, !0)) : this.pc == Gb &&
					this.lb();
				this.gc = !0;
				this.af = Hc();
				this.ya ? (Th(this.ya, "end", this.Qg, !1, this), this.ya.play()) : this.Qg()
			}
		} else Km(this)
	};
	v.lb = A;

	function Km(a, b) {
		a.gc && a.dispatchEvent({
			type: "beforehide",
			target: b
		}) && (a.h && ki(a.h), a.gc = !1, Hc(), a.qa ? (Th(a.qa, "end", Gc(a.Vf, b), !1, a), a.qa.play()) : a.Vf(b))
	}
	v.Vf = function(a) {
		this.pc == $b ? this.Qi() : this.pc == Gb && (this.A.style.top = "-10000px");
		this.mf(a)
	};
	v.Qi = function() {
		this.A.style.visibility = rb;
		P(this.A, !1)
	};
	v.Me = function() {
		return this.dispatchEvent("beforeshow")
	};
	v.Qg = function() {
		this.dispatchEvent("show")
	};
	v.mf = function(a) {
		this.dispatchEvent({
			type: sb,
			target: a
		})
	};
	v.lf = function(a) {
		a = a.target;
		wg(this.A, a) || Lm(this, a) || 150 > Hc() - this.af || Km(this, a)
	};
	v.Og = function(a) {
		var b = N(this.A);
		if("undefined" != typeof document.activeElement) {
			if(a = b.activeElement, !a || wg(this.A, a) || "BODY" == a.tagName) return
		} else if(a.target != b) return;
		150 > Hc() - this.af || Km(this)
	};

	function Lm(a, b) {
		return Rc(a.Sf || [], function(a) {
			return b === a || wg(a, b)
		})
	}
	v.F = function() {
		Im.m.F.call(this);
		this.h.M();
		vh(this.ya);
		vh(this.qa);
		delete this.A;
		delete this.h;
		delete this.Sf
	};

	function Mm(a, b) {
		this.s = b || void 0;
		Im.call(this, a)
	}
	E(Mm, Im);
	Mm.prototype.lb = function() {
		if(this.s) {
			var a = !this.N() && this.pc != Gb,
				b = this.j();
			a && (b.style.visibility = rb, P(b, !0));
			this.s.b(b, 8, this.ef);
			a && P(b, !1)
		}
	};

	function Nm(a, b) {
		Mm.call(this, a);
		this.c = b;
		this.a = 0;
		this.b = null;
		this.f = 0;
		this.J(!0);
		this.J(!1);
		K(this.j(), "round-trip-popup");
		K(this.c, "round-trip-content")
	}
	E(Nm, Mm);
	Nm.prototype.o = function() {
		tl(this.f);
		1 == this.a ? Th(this.b, ab, D(this.o, this)) : 0 == this.a && (this.f = sl(D(this.l, this, -1), 200))
	};
	Nm.prototype.l = function(a) {
		if(this.a != a && (0 != this.a || !(this.N() && 1 == a || !this.N() && -1 == a))) {
			var b = this.N();
			this.J(!0);
			var c = -Math.ceil(bh(this.c).width);
			fh(this.j()) && (c = -c);
			var d = 1 == a ? c : 0;
			c = 1 == a ? 0 : c;
			this.J(b);
			if(Gm()) {
				b = .2;
				if(0 != this.a) {
					var e = parseInt(Sg(this.c, "left"), 10);
					this.g();
					b *= (c - e) / (c - d);
					d = e
				}
				this.a = a;
				this.b = new Hm(this.c, b, {
					left: d + "px"
				}, {
					left: c + "px"
				}, "left " + b + "s");
				this.b.play();
				Th(this.b, ab, D(this.g, this)); - 1 == a ? Th(this.b, ab, D(this.J, this, !1)) : this.J(!0)
			} else O(this.c, "left", c + "px"), this.J(1 ==
				a ? !0 : !1)
		}
	};
	Nm.prototype.g = function() {
		0 != this.a && (this.b.stop(), sl(D(bi, this, this.b)), this.a = 0, this.b = null)
	};

	function Om(a, b) {
		if(null == a || null == b) return null == a == (null == b);
		if(a.constructor != Array && a.constructor != Object) throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
		if(a === b) return !0;
		if(a.constructor != b.constructor) return !1;
		for(var c in a)
			if(!(c in b && Pm(a[c], b[c]))) return !1;
		for(var d in b)
			if(!(d in a)) return !1;
		return !0
	}

	function Pm(a, b) {
		if(a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
		if(a instanceof Object && b instanceof Object) {
			if(!Om(a, b)) return !1
		} else return !1;
		return !0
	};

	function Qm(a) {
		this.data = a || []
	}

	function Rm(a, b, c) {
		a = a.data[b];
		return null != a ? a : c
	}

	function Sm(a, b) {
		return !!Rm(a, b, void 0)
	}

	function Tm(a, b) {
		return Rm(a, b, 0)
	}

	function Um(a, b) {
		return Rm(a, b, "")
	}

	function Vm(a, b, c) {
		a = a.data;
		a[b] || (a[b] = []);
		return a[b][c]
	}

	function Y(a, b) {
		return a.data[b] ? a.data[b].length : 0
	}
	Qm.prototype.Eb = r("data");
	Qm.prototype.Lj = function(a) {
		var b = this.data;
		this.data = a.data;
		a.data = b
	};

	function Wm(a) {
		this.data = a || []
	}
	E(Wm, Qm);

	function Xm(a) {
		this.data = a || []
	}
	E(Xm, Qm);

	function Ym(a) {
		this.data = a || []
	}
	E(Ym, Qm);

	function Zm(a) {
		this.data = a || []
	}
	E(Zm, Qm);

	function $m(a) {
		this.data = a || []
	}
	E($m, Qm);

	function an(a, b) {
		return new Xm(Vm(a, 2, b))
	}

	function bn(a, b) {
		return new Wm(Vm(a, 5, b))
	};

	function cn() {
		this.A = null;
		this.a = hg(f, "gt-hl-layer", document.createTextNode(""));
		this.b = null;
		this.A && (pg(this.a, this.A), dn(this))
	}

	function en(a, b, c, d, e) {
		var g = d || "gt-hl-text";
		d = a.A && (a.A.value || Jg(a.A));
		dn(a);
		og(a.a);
		if(b != c || e) {
			if(0 < b) {
				var h = d.substring(0, b);
				fn(a.a, h, 0, e)
			}
			b < c && (h = d.substring(b, c), g = hg(ua, g), fn(g, h, b, e), a.a.appendChild(g));
			c < d.length && (h = d.substring(c), fn(a.a, h, c, e))
		}
	}

	function dn(a) {
		var b = a.A;
		var c = N(b),
			d = G && b.currentStyle;
		d && dg(Uf(c).a) && d.width != Ha && d.height != Ha && !d.boxSizing ? (c = nh(b, d.width, "width", "pixelWidth"), b = nh(b, d.height, "height", "pixelHeight"), b = new Tf(c, b)) : (d = ih(b), c = lh(b), b = mh(b), b = new Tf(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
		jh(a.a, b);
		c = $g(a.A);
		b = a.a;
		d = c.x;
		c = c.y;
		var e = $g(b);
		d instanceof L && (c = d.y, d = d.x);
		Ug(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
		b = lh(a.A);
		O(a.a, Kb, b.left + "px");
		O(a.a, Lb, b.right +
			"px");
		a.a.dir = a.A.dir
	}

	function fn(a, b, c, d) {
		d = d || [];
		for(var e = 0, g; g = d[e]; e++)
			if(!(0 > g.Dc - c)) {
				if(g.Dc - c >= b.length) break;
				if(0 < g.Dc - c) {
					var h = b.substring(0, g.Dc - c);
					gn(a, h)
				}
				var k = g.className || "gt-hl-text";
				h = b.substring(g.Dc - c, g.Ef - c);
				k = hg(ua, k);
				gn(k, h);
				a.appendChild(k);
				b = b.substring(g.Ef - c);
				c = g.Ef
			}
		b && gn(a, b)
	}

	function gn(a, b) {
		b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
		for(var c = 0, d = b.length; c < d; c++) {
			if(0 < c) {
				var e = hg("BR");
				a.appendChild(e)
			}
			a.appendChild(document.createTextNode(String(b[c])))
		}
	};

	function hn(a, b, c, d, e) {
		this.g = !!b;
		this.node = null;
		this.c = 0;
		this.B = !1;
		this.I = !c;
		a && jn(this, a, d);
		this.f = void 0 != e ? e : this.c || 0;
		this.g && (this.f *= -1)
	}
	E(hn, xj);

	function jn(a, b, c, d) {
		if(a.node = b) a.c = uc(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
		uc(d) && (a.f = d)
	}
	hn.prototype.h = function() {
		var a = this.g ? -1 : 1;
		this.c == a && (this.c = -1 * a, this.f += this.c * (this.g ? -1 : 1))
	};
	hn.prototype.next = function() {
		if(this.B) {
			if(!this.node || this.I && 0 == this.f) throw wj;
			var a = this.node;
			var b = this.g ? -1 : 1;
			if(this.c == b) {
				var c = this.g ? a.lastChild : a.firstChild;
				c ? jn(this, c) : jn(this, a, -1 * b)
			} else(c = this.g ? a.previousSibling : a.nextSibling) ? jn(this, c) : jn(this, a.parentNode, -1 * b);
			this.f += this.c * (this.g ? -1 : 1)
		} else this.B = !0;
		a = this.node;
		if(!this.node) throw wj;
		return a
	};
	hn.prototype.splice = function(a) {
		var b = this.node,
			c = this.g ? 1 : -1;
		this.c == c && (this.c = -1 * c, this.f += this.c * (this.g ? -1 : 1));
		this.g = !this.g;
		hn.prototype.next.call(this);
		this.g = !this.g;
		c = yc(arguments[0]) ? arguments[0] : arguments;
		for(var d = c.length - 1; 0 <= d; d--) qg(c[d], b);
		rg(b)
	};

	function kn() {}

	function ln(a) {
		if(a.getSelection) return a.getSelection();
		a = a.document;
		var b = a.selection;
		if(b) {
			try {
				var c = b.createRange();
				if(c.parentElement) {
					if(c.parentElement().document != a) return null
				} else if(!c.length || c.item(0).document != a) return null
			} catch(d) {
				return null
			}
			return b
		}
		return null
	}

	function mn(a) {
		for(var b = [], c = 0, d = a.Ic(); c < d; c++) b.push(a.Yb(c));
		return b
	}

	function nn(a) {
		return a.Ye() ? a.La() : a.cb()
	}
	kn.prototype.Ye = u(!1);

	function on(a, b) {
		hn.call(this, a, b, !0)
	}
	E(on, hn);

	function pn(a, b, c, d, e) {
		this.b = this.a = null;
		this.G = this.C = 0;
		this.l = !!e;
		if(a) {
			this.a = a;
			this.C = b;
			this.b = c;
			this.G = d;
			if(1 == a.nodeType && "BR" != a.tagName)
				if(a = a.childNodes, b = a[b]) this.a = b, this.C = 0;
				else {
					a.length && (this.a = Mc(a));
					var g = !0
				}
			1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.G = 0 : this.b = c)
		}
		hn.call(this, this.l ? this.b : this.a, this.l, !0);
		if(g) try {
			this.next()
		} catch(h) {
			if(h != wj) throw h;
		}
	}
	E(pn, on);
	pn.prototype.o = r("a");
	pn.prototype.s = function() {
		return this.B && (this.node != (this.l ? this.a : this.b) ? !1 : this.l ? this.C ? -1 != this.c : 1 == this.c : !this.G || 1 != this.c)
	};
	pn.prototype.next = function() {
		if(this.s()) throw wj;
		return pn.m.next.call(this)
	};
	pn.prototype.h = function() {
		pn.m.h.apply(this);
		if(wg(this.node, this.l ? this.a : this.b)) throw wj;
	};

	function qn() {}

	function rn(a, b) {
		b = b.Ec();
		try {
			return 0 <= a.$a(b, 0, 0) && 0 >= a.$a(b, 1, 1)
		} catch(c) {
			if(!G) throw c;
			return !1
		}
	}
	qn.prototype.Ja = function() {
		return new pn(this.Sa(), this.kb(), this.jb(), this.tb())
	};

	function sn(a) {
		this.a = a
	}
	E(sn, qn);

	function tn(a) {
		var b = N(a).createRange();
		if(3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
		else if(un(a)) {
			for(var c, d = a;
				(c = d.firstChild) && un(c);) d = c;
			b.setStart(d, 0);
			for(d = a;
				(c = d.lastChild) && un(c);) d = c;
			b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
		} else c = a.parentNode, a = Nc(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
		return b
	}

	function vn(a, b, c, d) {
		var e = N(a).createRange();
		e.setStart(a, b);
		e.setEnd(c, d);
		return e
	}
	v = sn.prototype;
	v.Ec = r("a");
	v.Ee = function() {
		return this.a.commonAncestorContainer
	};
	v.Sa = function() {
		return this.a.startContainer
	};
	v.kb = function() {
		return this.a.startOffset
	};
	v.jb = function() {
		return this.a.endContainer
	};
	v.tb = function() {
		return this.a.endOffset
	};
	v.$a = function(a, b, c) {
		return this.a.compareBoundaryPoints(1 == c ? 1 == b ? w.Range.START_TO_START : w.Range.START_TO_END : 1 == b ? w.Range.END_TO_START : w.Range.END_TO_END, a)
	};
	v.Ta = function() {
		return this.a.collapsed
	};
	v.hg = function() {
		return this.a.toString()
	};
	v.select = function(a) {
		var b = gg(N(this.Sa()));
		this.Uc(b.getSelection(), a)
	};
	v.Uc = function(a) {
		a.removeAllRanges();
		a.addRange(this.a)
	};

	function wn(a) {
		this.a = a
	}
	E(wn, sn);
	wn.prototype.Uc = function(a, b) {
		!b || this.Ta() ? wn.m.Uc.call(this, a, b) : (a.collapse(this.jb(), this.tb()), a.extend(this.Sa(), this.kb()))
	};

	function xn(a) {
		this.b = this.a = this.h = null;
		this.g = this.f = -1;
		this.c = a
	}
	E(xn, qn);

	function yn(a) {
		var b = N(a).body.createTextRange();
		if(1 == a.nodeType) b.moveToElementText(a), un(a) && !a.childNodes.length && b.collapse(!1);
		else {
			for(var c = 0, d = a; d = d.previousSibling;) {
				var e = d.nodeType;
				if(3 == e) c += d.length;
				else if(1 == e) {
					b.moveToElementText(d);
					break
				}
			}
			d || b.moveToElementText(a.parentNode);
			b.collapse(!d);
			c && b.move(Pa, c);
			b.moveEnd(Pa, a.length)
		}
		return b
	}
	v = xn.prototype;
	v.Ec = r("c");
	v.Ee = function() {
		if(!this.h) {
			var a = this.c.text,
				b = this.c.duplicate(),
				c = a.replace(/ +$/, "");
			(c = a.length - c.length) && b.moveEnd(Pa, -c);
			c = b.parentElement();
			b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
			if(this.Ta() && 0 < b) return this.h = c;
			for(; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
			for(; 1 == c.childNodes.length && c.innerText == zn(c.firstChild) && un(c.firstChild);) c = c.firstChild;
			0 == a.length && (c = An(this, c));
			this.h = c
		}
		return this.h
	};

	function An(a, b) {
		for(var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
			var g = c[d];
			if(un(g)) {
				var h = yn(g),
					k = h.htmlText != g.outerHTML;
				if(a.Ta() && k ? 0 <= a.$a(h, 1, 1) && 0 >= a.$a(h, 1, 0) : a.c.inRange(h)) return An(a, g)
			}
		}
		return b
	}
	v.Sa = function() {
		this.a || (this.a = Bn(this, 1), this.Ta() && (this.b = this.a));
		return this.a
	};
	v.kb = function() {
		0 > this.f && (this.f = Cn(this, 1), this.Ta() && (this.g = this.f));
		return this.f
	};
	v.jb = function() {
		if(this.Ta()) return this.Sa();
		this.b || (this.b = Bn(this, 0));
		return this.b
	};
	v.tb = function() {
		if(this.Ta()) return this.kb();
		0 > this.g && (this.g = Cn(this, 0), this.Ta() && (this.f = this.g));
		return this.g
	};
	v.$a = function(a, b, c) {
		return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
	};

	function Bn(a, b, c) {
		c = c || a.Ee();
		if(!c || !c.firstChild) return c;
		for(var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
			var h = d ? e : g - e - 1,
				k = c.childNodes[h];
			try {
				var l = Dn(k)
			} catch(n) {
				continue
			}
			var m = l.Ec();
			if(a.Ta())
				if(!un(k)) {
					if(0 == a.$a(m, 1, 1)) {
						a.f = a.g = h;
						break
					}
				} else {
					if(rn(l, a)) return Bn(a, b, k)
				}
			else {
				if(rn(a, l)) {
					if(!un(k)) {
						d ? a.f = h : a.g = h + 1;
						break
					}
					return Bn(a, b, k)
				}
				if(0 > a.$a(m, 1, 0) && 0 < a.$a(m, 0, 1)) return Bn(a, b, k)
			}
		}
		return c
	}

	function Cn(a, b) {
		var c = 1 == b,
			d = c ? a.Sa() : a.jb();
		if(1 == d.nodeType) {
			d = d.childNodes;
			for(var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
				var k = d[h];
				if(!un(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Dn(k).Ec())) return c ? h : h + 1
			}
			return -1 == h ? 0 : h
		}
		a = a.c.duplicate();
		b = yn(d);
		a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
		a = a.text.length;
		return c ? d.length - a : a
	}

	function zn(a) {
		return 3 == a.nodeType ? a.nodeValue : a.innerText
	}
	v.Ta = function() {
		return 0 == this.c.compareEndPoints("StartToEnd", this.c)
	};
	v.hg = function() {
		return this.c.text
	};
	v.select = function() {
		this.c.select()
	};

	function En(a) {
		this.a = a
	}
	E(En, sn);
	En.prototype.Uc = function(a) {
		a.collapse(this.Sa(), this.kb());
		this.jb() == this.Sa() && this.tb() == this.kb() || a.extend(this.jb(), this.tb());
		0 == a.rangeCount && a.addRange(this.a)
	};

	function Fn(a) {
		this.a = a
	}
	E(Fn, sn);
	Fn.prototype.$a = function(a, b, c) {
		return J("528") ? Fn.m.$a.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? w.Range.START_TO_START : w.Range.END_TO_START : 1 == b ? w.Range.START_TO_END : w.Range.END_TO_END, a)
	};
	Fn.prototype.Uc = function(a, b) {
		b ? a.setBaseAndExtent(this.jb(), this.tb(), this.Sa(), this.kb()) : a.setBaseAndExtent(this.Sa(), this.kb(), this.jb(), this.tb())
	};

	function Gn(a) {
		return Ue ? new xn(a, N(a.parentElement())) : I ? new Fn(a) : H ? new wn(a) : Ud ? new En(a) : new sn(a)
	}

	function Dn(a) {
		if(G && !ke(9)) {
			var b = new xn(yn(a), N(a));
			if(un(a)) {
				for(var c, d = a;
					(c = d.firstChild) && un(c);) d = c;
				b.a = d;
				b.f = 0;
				for(d = a;
					(c = d.lastChild) && un(c);) d = c;
				b.b = d;
				b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
				b.h = a
			} else b.a = b.b = b.h = a.parentNode, b.f = Nc(b.h.childNodes, a), b.g = b.f + 1;
			a = b
		} else a = I ? new Fn(tn(a)) : H ? new wn(tn(a)) : Ud ? new En(tn(a)) : new sn(tn(a));
		return a
	}

	function un(a) {
		return mg(a) || 3 == a.nodeType
	};

	function Hn() {
		this.c = this.b = this.g = this.a = this.h = null;
		this.f = !1
	}
	E(Hn, kn);

	function In(a, b) {
		var c = new Hn;
		c.h = a;
		c.f = !!b;
		return c
	}
	v = Hn.prototype;
	v.Ae = function() {
		return Jn(this).Ec()
	};
	v.Ic = u(1);
	v.Yb = function() {
		return this
	};

	function Jn(a) {
		var b;
		if(!(b = a.h)) {
			b = a.La();
			var c = a.Ma(),
				d = a.cb(),
				e = a.eb();
			if(G && !ke(9)) {
				var g = b,
					h = c,
					k = d,
					l = e,
					m = !1;
				1 == g.nodeType && (h = g.childNodes[h], m = !h, g = h || g.lastChild || g, h = 0);
				var n = yn(g);
				h && n.move(Pa, h);
				g == k && h == l ? n.collapse(!0) : (m && n.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), g = yn(k), g.collapse(!m), l && g.moveEnd(Pa, l), n.setEndPoint("EndToEnd", g));
				l = new xn(n, N(b));
				l.a = b;
				l.f = c;
				l.b = d;
				l.g = e;
				b = l
			} else b = I ? new Fn(vn(b, c, d, e)) : H ? new wn(vn(b, c, d, e)) : Ud ? new En(vn(b,
				c, d, e)) : new sn(vn(b, c, d, e));
			b = a.h = b
		}
		return b
	}
	v.td = function() {
		return Jn(this).Ee()
	};
	v.La = function() {
		return this.a || (this.a = Jn(this).Sa())
	};
	v.Ma = function() {
		return null != this.g ? this.g : this.g = Jn(this).kb()
	};
	v.cb = function() {
		return this.b || (this.b = Jn(this).jb())
	};
	v.eb = function() {
		return null != this.c ? this.c : this.c = Jn(this).tb()
	};
	v.Ye = r("f");
	v.vd = function() {
		return Jn(this).Ta()
	};
	v.ud = function() {
		return Jn(this).hg()
	};
	v.Ja = function() {
		return new pn(this.La(), this.Ma(), this.cb(), this.eb())
	};
	v.select = function() {
		Jn(this).select(this.f)
	};

	function Kn() {}
	E(Kn, kn);

	function Ln() {
		this.c = this.b = this.a = null
	}
	E(Ln, Kn);
	v = Ln.prototype;
	v.Ae = function() {
		return this.a || document.body.createControlRange()
	};
	v.Ic = function() {
		return this.a ? this.a.length : 0
	};
	v.Yb = function(a) {
		a = this.a.item(a);
		return In(Dn(a), void 0)
	};
	v.td = function() {
		return Ag.apply(null, Mn(this))
	};
	v.La = function() {
		return Nn(this)[0]
	};
	v.Ma = u(0);
	v.cb = function() {
		var a = Nn(this),
			b = Mc(a);
		return Tc(a, function(a) {
			return wg(a, b)
		})
	};
	v.eb = function() {
		return this.cb().childNodes.length
	};

	function Mn(a) {
		if(!a.b && (a.b = [], a.a))
			for(var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
		return a.b
	}

	function Nn(a) {
		a.c || (a.c = Mn(a).concat(), a.c.sort(function(a, c) {
			return a.sourceIndex - c.sourceIndex
		}));
		return a.c
	}
	v.vd = function() {
		return !this.a || !this.a.length
	};
	v.ud = u("");
	v.Ja = function() {
		return new On(this)
	};
	v.select = function() {
		this.a && this.a.select()
	};

	function On(a) {
		this.l = this.b = this.a = null;
		a && (this.l = Nn(a), this.a = this.l.shift(), this.b = Mc(this.l) || this.a);
		hn.call(this, this.a, !1, !0)
	}
	E(On, on);
	On.prototype.o = r("a");
	On.prototype.s = function() {
		return !this.f && !this.l.length
	};
	On.prototype.next = function() {
		if(this.s()) throw wj;
		if(!this.f) {
			var a = this.l.shift();
			jn(this, a, 1, 1);
			return a
		}
		return On.m.next.call(this)
	};

	function Pn() {
		this.va = null;
		this.a = [];
		this.f = [];
		this.c = this.b = null
	}
	E(Pn, Kn);
	v = Pn.prototype;
	v.Ae = function() {
		return this.a[0]
	};
	v.Ic = function() {
		return this.a.length
	};
	v.Yb = function(a) {
		this.f[a] || (this.f[a] = In(Gn(this.a[a]), void 0));
		return this.f[a]
	};
	v.td = function() {
		if(!this.c) {
			for(var a = [], b = 0, c = this.Ic(); b < c; b++) a.push(this.Yb(b).td());
			this.c = Ag.apply(null, a)
		}
		return this.c
	};

	function Qn(a) {
		a.b || (a.b = mn(a), a.b.sort(function(a, c) {
			var b = a.La();
			a = a.Ma();
			var e = c.La();
			c = c.Ma();
			return b == e && a == c ? 0 : Rn(b, a, e, c) ? 1 : -1
		}));
		return a.b
	}
	v.La = function() {
		return Qn(this)[0].La()
	};
	v.Ma = function() {
		return Qn(this)[0].Ma()
	};
	v.cb = function() {
		return Mc(Qn(this)).cb()
	};
	v.eb = function() {
		return Mc(Qn(this)).eb()
	};
	v.vd = function() {
		return 0 == this.a.length || 1 == this.a.length && this.Yb(0).vd()
	};
	v.ud = function() {
		return Qc(mn(this), function(a) {
			return a.ud()
		}).join("")
	};
	v.Ja = function() {
		return new Sn(this)
	};
	v.select = function() {
		var a = ln(gg(N(G ? this.td() : this.La())));
		a.removeAllRanges();
		for(var b = 0, c = this.Ic(); b < c; b++) a.addRange(this.Yb(b).Ae())
	};

	function Sn(a) {
		this.a = null;
		this.b = 0;
		a && (this.a = Qc(Qn(a), function(a) {
			return yj(a)
		}));
		hn.call(this, a ? this.o() : null, !1, !0)
	}
	E(Sn, on);
	Sn.prototype.o = function() {
		return this.a[0].o()
	};
	Sn.prototype.s = function() {
		return this.a[this.b].s()
	};
	Sn.prototype.next = function() {
		try {
			var a = this.a[this.b],
				b = a.next();
			jn(this, a.node, a.c, a.f);
			return b
		} catch(c) {
			if(c !== wj || this.a.length - 1 == this.b) throw c;
			this.b++;
			return this.next()
		}
	};

	function Tn() {
		var a = ln(window);
		return a && Un(a)
	}

	function Un(a) {
		var b = !1;
		if(a.createRange) try {
			var c = a.createRange()
		} catch(e) {
			return null
		} else if(a.rangeCount) {
			if(1 < a.rangeCount) {
				b = new Pn;
				c = 0;
				for(var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
				return b
			}
			c = a.getRangeAt(0);
			b = Rn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
		} else return null;
		(a = c) && a.addElement ? (b = new Ln, b.a = a, a = b) : a = In(Gn(a), b);
		return a
	}

	function Rn(a, b, c, d) {
		if(a == c) return d < b;
		var e;
		if(1 == a.nodeType && b)
			if(e = a.childNodes[b]) a = e, b = 0;
			else if(wg(a, c)) return !0;
		if(1 == c.nodeType && d)
			if(e = c.childNodes[d]) c = e, d = 0;
			else if(wg(c, a)) return !1;
		return 0 < (xg(a, c) || b - d)
	};

	function Vn() {
		var a = Tn();
		return null != a && !a.vd() && 0 < a.ud().length
	};

	function Wn() {
		this.b = []
	}
	E(Wn, Ci);
	xc(Wn);

	function Xn(a, b) {
		var c = a.b[b];
		if(!c) {
			switch(b) {
				case 0:
					c = a.ea() + "-highlight";
					break;
				case 1:
					c = a.ea() + "-checkbox";
					break;
				case 2:
					c = a.ea() + "-content"
			}
			a.b[b] = c
		}
		return c
	}
	v = Wn.prototype;
	v.Zb = u("menuitem");
	v.D = function(a) {
		var b = a.b.D(f, Hi(this, a).join(" "), Yn(this, a.da(), a.b));
		Zn(this, a, b, !!(a.ba & 8) || !!(a.ba & 16));
		return b
	};
	v.xb = function(a) {
		return a && a.firstChild
	};
	v.Na = function(a, b) {
		var c = tg(b),
			d = Xn(this, 2);
		c && Me(c, d) || b.appendChild(Yn(this, b.childNodes, a.b));
		Me(b, lb) && (a.ta(16, !0), a && b && Zn(this, a, b, !0));
		return Wn.m.Na.call(this, a, b)
	};
	v.Kc = function(a, b) {
		var c = this.xb(a),
			d = $n(this, a) ? c.firstChild : null;
		Wn.m.Kc.call(this, a, b);
		d && !$n(this, a) && c.insertBefore(d, c.firstChild || null)
	};

	function Yn(a, b, c) {
		a = Xn(a, 2);
		return c.D(f, a, b)
	}

	function $n(a, b) {
		return(b = a.xb(b)) ? (b = b.firstChild, a = Xn(a, 1), !!b && vg(b) && Me(b, a)) : !1
	}

	function Zn(a, b, c, d) {
		Li(a, c, b.Hc());
		Mi(a, b, c);
		d != $n(a, c) && (d ? K(c, lb) : Oe(c, lb), c = a.xb(c), d ? (a = Xn(a, 1), c.insertBefore(b.b.D(f, a), c.firstChild || null)) : c.removeChild(c.firstChild))
	}
	v.Fc = function(a) {
		switch(a) {
			case 2:
				return Xn(this, 0);
			case 16:
			case 8:
				return mb;
			default:
				return Wn.m.Fc.call(this, a)
		}
	};
	v.rd = function(a) {
		var b = Xn(this, 0);
		switch(a) {
			case mb:
				return 16;
			case b:
				return 2;
			default:
				return Wn.m.rd.call(this, a)
		}
	};
	v.ea = u("goog-menuitem");

	function ao(a, b, c, d) {
		W.call(this, a, d || Wn.Y(), c);
		this.za(b)
	}
	E(ao, W);
	v = ao.prototype;
	v.Ba = function() {
		var a = this.qa;
		return null != a ? a : this.ab()
	};
	v.za = ic("qa");
	v.ta = function(a, b) {
		ao.m.ta.call(this, a, b);
		switch(a) {
			case 8:
				this.W & 16 && !b && hj(this, 16, !1) && kj(this, 16, !1);
				(a = this.j()) && this && a && Zn(this.a, this, a, b);
				break;
			case 16:
				(a = this.j()) && this && a && Zn(this.a, this, a, b)
		}
	};
	v.ab = function() {
		var a = this.da();
		return C(a) ? (a = Qc(a, function(a) {
			return vg(a) && (Me(a, "goog-menuitem-accel") || Me(a, "goog-menuitem-mnemonic-separator")) ? "" : Lg(a)
		}).join(""), ad(a)) : ao.m.ab.call(this)
	};
	v.cc = function(a) {
		var b = this.ub();
		if(b) {
			var c = b.K;
			b.K = null;
			if(b = c && uc(a.clientX)) b = new L(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
			if(b) return
		}
		ao.m.cc.call(this, a)
	};
	v.Mc = function(a) {
		return a.keyCode == this.Mg && this.lc(a) ? !0 : ao.m.Mc.call(this, a)
	};
	v.ei = r("Mg");
	bj("goog-menuitem", function() {
		return new ao(null)
	});
	ao.prototype.Hc = function() {
		return this.ba & 16 ? "menuitemcheckbox" : this.ba & 8 ? "menuitemradio" : ao.m.Hc.call(this)
	};
	ao.prototype.ub = function() {
		return W.prototype.ub.call(this)
	};
	ao.prototype.pd = function() {
		return W.prototype.pd.call(this)
	};

	function bo(a) {
		this.a = a
	}
	xc(bo);

	function co(a, b) {
		a && (a.tabIndex = b ? 0 : -1)
	}
	v = bo.prototype;
	v.D = function(a) {
		return a.b.D(f, eo(this, a).join(" "))
	};
	v.Ge = function(a) {
		return a.tagName == f
	};

	function fo(a, b, c) {
		c.id && ri(b, c.id);
		var d = a.xd(),
			e = !1,
			g = Le(c);
		g && Oc(g, function(a) {
			a == d ? e = !0 : a && (a == d + ba ? b.ma(!1) : a == d + "-horizontal" ? go(b, tb) : a == d + "-vertical" && go(b, ec))
		}, a);
		e || K(c, d);
		ho(a, b, c);
		return c
	}

	function ho(a, b, c) {
		if(c)
			for(var d = c.firstChild, e; d && d.parentNode == c;) {
				e = d.nextSibling;
				if(1 == d.nodeType) {
					var g = a.Be(d);
					g && (g.A = d, b.isEnabled() || g.ma(!1), b.uc(g), wi(g, d))
				} else d.nodeValue && "" != bd(d.nodeValue) || c.removeChild(d);
				d = e
			}
	}
	v.Be = function(a) {
		a: {
			a = Le(a);
			for(var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				if(d = d in cj ? cj[d]() : null) {
					a = d;
					break a
				}
			}
			a = null
		}
		return a
	};
	v.He = function(a) {
		a = a.j();
		hh(a, !0, H);
		G && (a.hideFocus = !0);
		var b = this.a;
		b && sh(a, b)
	};
	v.xd = u("goog-container");

	function eo(a, b) {
		a = a.xd();
		var c = [a, b.Rb == tb ? a + "-horizontal" : a + "-vertical"];
		b.isEnabled() || c.push(a + ba);
		return c
	};

	function io() {}
	E(io, Ci);
	xc(io);
	io.prototype.D = function(a) {
		return a.b.D(f, this.ea())
	};
	io.prototype.Na = function(a, b) {
		b.id && ri(a, b.id);
		if("HR" == b.tagName) {
			var c = b;
			b = this.D(a);
			pg(b, c);
			rg(c)
		} else K(b, this.ea());
		return b
	};
	io.prototype.Kc = hc();
	io.prototype.ea = u(kb);

	function jo(a, b) {
		W.call(this, null, a || io.Y(), b);
		this.ta(1, !1);
		this.ta(2, !1);
		this.ta(4, !1);
		this.ta(32, !1);
		this.W = 1
	}
	E(jo, W);
	jo.prototype.P = function() {
		jo.m.P.call(this);
		sh(this.j(), "separator")
	};
	bj(kb, function() {
		return new jo
	});

	function ko(a) {
		this.a = a || "menu"
	}
	E(ko, bo);
	xc(ko);
	v = ko.prototype;
	v.Ge = function(a) {
		return "UL" == a.tagName || ko.m.Ge.call(this, a)
	};
	v.Be = function(a) {
		return "HR" == a.tagName ? new jo : ko.m.Be.call(this, a)
	};
	v.zc = function(a, b) {
		return wg(a.j(), b)
	};
	v.xd = u("goog-menu");
	v.He = function(a) {
		ko.m.He.call(this, a);
		th(a.j(), "haspopup", "true")
	};

	function lo(a, b, c) {
		this.c = a;
		this.f = b;
		this.s = c
	}
	E(lo, Cl);
	lo.prototype.b = function(a, b, c) {
		yl(this.c, this.f, a, b, void 0, c, this.s)
	};

	function mo(a, b, c, d) {
		lo.call(this, a, b);
		this.l = c ? 5 : 0;
		this.g = d || void 0
	}
	E(mo, lo);
	mo.prototype.h = ic("l");
	mo.prototype.b = function(a, b, c) {
		var d = yl(this.c, this.f, a, b, null, c, 10, void 0, this.g);
		if(d & 496) {
			var e = no(d, this.f);
			b = no(d, b);
			d = yl(this.c, e, a, b, null, c, 10, void 0, this.g);
			d & 496 && (e = no(d, e), b = no(d, b), yl(this.c, e, a, b, null, c, this.l, void 0, this.g))
		}
	};

	function no(a, b) {
		a & 48 && (b ^= 4);
		a & 192 && (b ^= 1);
		return b
	};

	function oo(a, b) {
		this.a = a instanceof L ? a : new L(a, b)
	}
	E(oo, Cl);
	oo.prototype.b = function(a, b, c) {
		var d = N(a);
		var e = d.body;
		d = d.documentElement;
		d = new L(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
		e = this.a.x + d.x;
		d = this.a.y + d.y;
		var g = zl(a);
		e -= g.x;
		d -= g.y;
		Bl(new L(e, d), a, b, c, null, null, void 0)
	};

	function po(a, b) {
		oo.call(this, a, b)
	}
	E(po, oo);
	po.prototype.c = 0;
	po.prototype.h = ic("c");
	po.prototype.b = function(a, b, c) {
		var d = Wg(a);
		d = Zg(d);
		var e = fg(Uf(a).a);
		e = new L(this.a.x + e.scrollLeft, this.a.y + e.scrollTop);
		var g = b,
			h = Bl(e, a, g, c, d, 10, void 0);
		if(0 != (h & 496)) {
			if(h & 16 || h & 32) g ^= 4;
			if(h & 64 || h & 128) g ^= 1;
			h = Bl(e, a, g, c, d, 10, void 0);
			0 != (h & 496) && Bl(e, a, b, c, d, this.c, void 0)
		}
	};

	function qo(a, b, c) {
		T.call(this, c);
		this.wb = b || bo.Y();
		this.Rb = a || ec
	}
	E(qo, T);
	v = qo.prototype;
	v.hc = null;
	v.Jc = null;
	v.wb = null;
	v.Rb = null;
	v.ha = !0;
	v.vb = !0;
	v.Ib = !0;
	v.ja = -1;
	v.pa = null;
	v.ic = !1;
	v.ib = null;

	function ro(a) {
		return a.hc || a.j()
	}

	function so(a, b) {
		if(a.Ib) {
			var c = ro(a),
				d = a.V;
			a.hc = b;
			var e = ro(a);
			d && (a.hc = c, to(a, !1), a.hc = b, Vi(uo(a), e), to(a, !0))
		} else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
	}

	function uo(a) {
		return a.Jc || (a.Jc = new Ui(ro(a)))
	}
	v.D = function() {
		this.A = this.wb.D(this)
	};
	v.wd = function() {
		return this.j()
	};
	v.Fe = function(a) {
		return this.wb.Ge(a)
	};
	v.T = function(a) {
		this.A = fo(this.wb, this, a);
		a.style.display == q && (this.ha = !1)
	};
	v.P = function() {
		qo.m.P.call(this);
		xi(this, function(a) {
			a.V && vo(this, a)
		}, this);
		var a = this.j();
		this.wb.He(this);
		this.J(this.ha, !0);
		U(this).w(this, "enter", this.Pe).w(this, "highlight", this.Qc).w(this, "unhighlight", this.Te).w(this, "open", this.Ci).w(this, "close", this.pi).w(a, Ch.rc, this.gi).w(N(a), [Ch.sc, Ch.qc], this.si).w(a, [Ch.rc, Ch.sc, Ch.qc, Eb, Db, Wa], this.ni);
		this.Ib && to(this, !0)
	};

	function to(a, b) {
		var c = U(a),
			d = ro(a);
		b ? c.w(d, db, a.ig).w(d, Ka, a.yd).w(uo(a), "key", a.Ga) : c.ca(d, db, a.ig).ca(d, Ka, a.yd).ca(uo(a), "key", a.Ga)
	}
	v.$ = function() {
		this.Bb(-1);
		this.pa && lj(this.pa, !1);
		this.ic = !1;
		qo.m.$.call(this)
	};
	v.F = function() {
		qo.m.F.call(this);
		this.Jc && (this.Jc.M(), this.Jc = null);
		this.wb = this.pa = this.ib = this.hc = null
	};
	v.Pe = u(!0);
	v.Qc = function(a) {
		var b = Bi(this, a.target);
		if(-1 < b && b != this.ja) {
			var c = wo(this);
			c && jj(c, !1);
			this.ja = b;
			c = wo(this);
			this.ic && ij(c, !0);
			this.pa && c != this.pa && (c.ba & 64 ? lj(c, !0) : lj(this.pa, !1))
		}
		b = this.j();
		null != a.target.j() && th(b, Da, a.target.j().id)
	};
	v.Te = function(a) {
		a.target == wo(this) && (this.ja = -1);
		this.j().removeAttribute("aria-activedescendant")
	};
	v.Ci = function(a) {
		(a = a.target) && a != this.pa && a.ub() == this && (this.pa && lj(this.pa, !1), this.pa = a)
	};
	v.pi = function(a) {
		a.target == this.pa && (this.pa = null);
		var b = this.j(),
			c = a.target.j();
		b && a.target.W & 2 && c && (a = "", c && (a = c.id), th(b, Da, a))
	};
	v.gi = function(a) {
		this.vb && (this.ic = !0);
		var b = ro(this);
		b && Hg(b) && Ig(b) ? b.focus() : a.b()
	};
	v.si = function() {
		this.ic = !1
	};
	v.ni = function(a) {
		a: {
			var b = a.target;
			if(this.ib)
				for(var c = this.j(); b && b !== c;) {
					var d = b.id;
					if(d in this.ib) {
						b = this.ib[d];
						break a
					}
					b = b.parentNode
				}
			b = null
		}
		if(b) switch(a.type) {
			case Ch.rc:
				b.Nc(a);
				break;
			case Ch.sc:
			case Ch.qc:
				b.cc(a);
				break;
			case Eb:
				b.Le(a);
				break;
			case Db:
				b.Se(a);
				break;
			case Wa:
				b.Pc(a)
		}
	};
	v.ig = hc();
	v.yd = function() {
		this.Bb(-1);
		this.ic = !1;
		this.pa && lj(this.pa, !1)
	};
	v.Ga = function(a) {
		return this.isEnabled() && this.N() && (0 != yi(this) || this.hc) && this.Ie(a) ? (a.b(), a.stopPropagation(), !0) : !1
	};
	v.Ie = function(a) {
		var b = wo(this);
		if(b && typeof b.Ga == p && b.Ga(a) || this.pa && this.pa != b && typeof this.pa.Ga == p && this.pa.Ga(a)) return !0;
		if(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
		switch(a.keyCode) {
			case 27:
				if(this.Ib) ro(this).blur();
				else return !1;
				break;
			case 36:
				xo(this);
				break;
			case 35:
				yo(this);
				break;
			case 38:
				if(this.Rb == ec) zo(this);
				else return !1;
				break;
			case 37:
				if(this.Rb == tb) Ai(this) ? Ao(this) : zo(this);
				else return !1;
				break;
			case 40:
				if(this.Rb == ec) Ao(this);
				else return !1;
				break;
			case 39:
				if(this.Rb == tb) Ai(this) ?
					zo(this) : Ao(this);
				else return !1;
				break;
			default:
				return !1
		}
		return !0
	};

	function vo(a, b) {
		var c = b.j();
		c = c.id || (c.id = qi(b));
		a.ib || (a.ib = {});
		a.ib[c] = b
	}
	v.uc = function(a, b) {
		qo.m.uc.call(this, a, b)
	};
	v.je = function(a, b, c) {
		a.Xc |= 2;
		a.Xc |= 64;
		a.ta(32, !1);
		ej(a, !1);
		var d = a.ub() == this ? Bi(this, a) : -1;
		qo.m.je.call(this, a, b, c);
		a.V && this.V && vo(this, a);
		a = d; - 1 == a && (a = yi(this));
		a == this.ja ? this.ja = Math.min(yi(this) - 1, b) : a > this.ja && b <= this.ja ? this.ja++ : a < this.ja && b > this.ja && this.ja--
	};
	v.removeChild = function(a, b) {
		if(a = z(a) ? ui(this, a) : a) {
			var c = Bi(this, a); - 1 != c && (c == this.ja ? (jj(a, !1), this.ja = -1) : c < this.ja && this.ja--);
			var d = a.j();
			d && d.id && this.ib && (c = this.ib, d = d.id, d in c && delete c[d])
		}
		a = qo.m.removeChild.call(this, a, b);
		ej(a, !0);
		return a
	};

	function go(a, b) {
		if(a.j()) throw Error(ja);
		a.Rb = b
	}
	v.N = r("ha");
	v.J = function(a, b) {
		if(b || this.ha != a && this.dispatchEvent(a ? "show" : sb)) {
			this.ha = a;
			var c = this.j();
			c && (P(c, a), this.Ib && co(ro(this), this.vb && this.ha), b || this.dispatchEvent(this.ha ? "aftershow" : "afterhide"));
			return !0
		}
		return !1
	};
	v.isEnabled = r("vb");
	v.ma = function(a) {
		this.vb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.vb = !0, xi(this, function(a) {
			a.ph ? delete a.ph : a.ma(!0)
		})) : (xi(this, function(a) {
			a.isEnabled() ? a.ma(!1) : a.ph = !0
		}), this.ic = this.vb = !1), this.Ib && co(ro(this), a && this.ha))
	};

	function Bo(a, b) {
		b != a.Ib && a.V && to(a, b);
		a.Ib = b;
		a.vb && a.ha && co(ro(a), b)
	}
	v.Bb = function(a) {
		(a = zi(this, a)) ? jj(a, !0): -1 < this.ja && jj(wo(this), !1)
	};

	function wo(a) {
		return zi(a, a.ja)
	}

	function xo(a) {
		Co(a, function(a, c) {
			return(a + 1) % c
		}, yi(a) - 1)
	}

	function yo(a) {
		Co(a, function(a, c) {
			a--;
			return 0 > a ? c - 1 : a
		}, 0)
	}

	function Ao(a) {
		Co(a, function(a, c) {
			return(a + 1) % c
		}, a.ja)
	}

	function zo(a) {
		Co(a, function(a, c) {
			a--;
			return 0 > a ? c - 1 : a
		}, a.ja)
	}

	function Co(a, b, c) {
		c = 0 > c ? Bi(a, a.pa) : c;
		var d = yi(a);
		c = b.call(a, c, d);
		for(var e = 0; e <= d;) {
			var g = zi(a, c);
			if(g && a.Tf(g)) {
				a.Bb(c);
				break
			}
			e++;
			c = b.call(a, c, d)
		}
	}
	v.Tf = function(a) {
		return a.N() && a.isEnabled() && !!(a.ba & 2)
	};

	function Do() {}
	E(Do, Ci);
	xc(Do);
	Do.prototype.ea = u(jb);

	function Eo(a, b, c) {
		W.call(this, a, c || Do.Y(), b);
		this.ta(1, !1);
		this.ta(2, !1);
		this.ta(4, !1);
		this.ta(32, !1);
		this.W = 1
	}
	E(Eo, W);
	bj(jb, function() {
		return new Eo(null)
	});
	bj(kb, function() {
		return new jo
	});

	function Fo(a, b) {
		qo.call(this, ec, b || ko.Y(), a);
		Bo(this, !1)
	}
	E(Fo, qo);
	v = Fo.prototype;
	v.ke = !0;
	v.zc = function(a) {
		if(this.wb.zc(this, a)) return !0;
		for(var b = 0, c = yi(this); b < c; b++) {
			var d = zi(this, b);
			if(typeof d.zc == p && d.zc(a)) return !0
		}
		return !1
	};
	v.J = function(a, b, c) {
		(b = Fo.m.J.call(this, a, b)) && a && this.V && this.ke && ro(this).focus();
		a && c && uc(c.clientX) ? this.K = new L(c.clientX, c.clientY) : this.K = null;
		return b
	};
	v.Pe = function(a) {
		this.ke && ro(this).focus();
		return Fo.m.Pe.call(this, a)
	};
	v.Tf = function(a) {
		return a.isEnabled() && a.N() && !!(a.ba & 2)
	};
	v.T = function(a) {
		for(var b = this.wb, c = Zf(this.b.a, f, b.xd() + "-content", a), d = c.length, e = 0; e < d; e++) ho(b, this, c[e]);
		Fo.m.T.call(this, a)
	};
	v.Ie = function(a) {
		var b = Fo.m.Ie.call(this, a);
		b || xi(this, function(c) {
			!b && c.ei && c.Mg == a.keyCode && (this.isEnabled() && this.Bb(Bi(this, c)), b = c.Ga(a))
		}, this);
		return b
	};
	v.Bb = function(a) {
		Fo.m.Bb.call(this, a);
		var b = zi(this, a);
		if(b) {
			a = this.j() || fg(document);
			var c = b.j();
			b = a || fg(document);
			var d = $g(c),
				e = $g(b),
				g = mh(b);
			if(b == fg(document)) {
				var h = d.x - b.scrollLeft;
				d = d.y - b.scrollTop;
				G && !ke(10) && (h += g.left, d += g.top)
			} else h = d.x - e.x - g.left, d = d.y - e.y - g.top;
			c = ch(c);
			g = b.clientHeight - c.height;
			e = b.scrollLeft;
			var k = b.scrollTop;
			e += Math.min(h, Math.max(h - (b.clientWidth - c.width), 0));
			k += Math.min(d, Math.max(d - g, 0));
			b = new L(e, k);
			a.scrollLeft = b.x;
			a.scrollTop = b.y
		}
	};

	function Go(a, b) {
		Fo.call(this, a, b);
		this.ke = !0;
		Bo(this, !0);
		this.J(!1, !0);
		this.a = new Aj
	}
	E(Go, Fo);
	v = Go.prototype;
	v.nh = !1;
	v.Eg = 0;
	v.Da = null;
	v.T = function(a) {
		Go.m.T.call(this, a);
		(a = a.getAttribute("for") || a.htmlFor) && Ho(this, this.b.j(a), 1)
	};
	v.P = function() {
		Go.m.P.call(this);
		this.a.forEach(this.dd, this);
		var a = U(this);
		a.w(this, Ca, this.jf);
		a.w(this.b.a, Bb, this.lj, !0)
	};

	function Ho(a, b, c, d, e, g) {
		b && Cj(a.a, Bc(b)) || (c = a.se(b, c, d, e, g), a.V && a.dd(c), b = Gc(a.mj, b), a.j() && U(a).w(a.j(), xb, b))
	}
	v.mj = function(a, b) {
		if(27 == b.keyCode) a.focus();
		else if(a = zi(this, this.ja)) {
			a = a.j();
			var c = new Dh(b.a, a);
			c.target = a;
			if(32 == b.keyCode || 13 == b.keyCode) Ih(a) ? mi(a, xb, !1, c) : ci(a, xb, !1, c);
			32 == b.keyCode && this.mb()
		}
	};
	v.se = function(a, b, c, d, e) {
		if(!a) return null;
		b = {
			A: a,
			hh: b,
			hj: c,
			Cc: d ? Wa : Bb,
			ef: e
		};
		this.a.set(Bc(a), b);
		return b
	};
	v.dd = function(a) {
		U(this).w(a.A, a.Cc, this.Vd);
		a.Cc != Wa && U(this).w(a.A, xb, this.pj)
	};
	v.kd = function() {
		if(this.V)
			for(var a = this.a.Qa(), b = 0; b < a.length; b++) this.ue(this.a.get(a[b]));
		Ej(this.a)
	};
	v.ue = function(a) {
		U(this).ca(a.A, a.Cc, this.Vd)
	};
	v.Bd = function(a, b, c) {
		b = x(a.hh) ? new mo(a.A, a.hh, !0) : new po(b, c);
		b.h && b.h(5);
		var d = a.hj;
		c = a.ef;
		var e = a.A;
		a = this.N();
		var g;
		(g = this.N()) || (g = 150 > Hc() - this.Eg);
		g && this.nh ? this.mb() : (this.Da = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.j().style.visibility = rb), P(this.j(), !0), b.b(this.j(), d, c), a || (this.j().style.visibility = fc), this.Bb(-1), this.J(!0)))
	};
	v.mb = function() {
		this.N() && (this.J(!1), this.N() || (this.Eg = Hc(), this.Da = null))
	};
	v.jf = function() {
		this.mb()
	};
	v.Vd = function(a) {
		Io(this, a)
	};
	v.pj = function(a) {
		32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Io(this, a);
		40 == a.keyCode && xo(this)
	};

	function Io(a, b) {
		for(var c = a.a.Qa(), d = 0; d < c.length; d++) {
			var e = a.a.get(c[d]);
			if(e.A == b.currentTarget) {
				a.Bd(e, b.clientX, b.clientY);
				b.b();
				b.stopPropagation();
				break
			}
		}
	}
	v.lj = function(a) {
		this.N() && !this.zc(a.target) && this.mb()
	};
	v.yd = function(a) {
		Go.m.yd.call(this, a);
		this.mb()
	};
	v.F = function() {
		Go.m.F.call(this);
		this.a && (Ej(this.a), delete this.a)
	};

	function Jo(a) {
		li.call(this);
		this.A = a;
		a = G ? fb : Ka;
		this.a = S(this.A, G ? eb : db, this, !G);
		this.b = S(this.A, a, this, !G)
	}
	E(Jo, li);
	Jo.prototype.handleEvent = function(a) {
		var b = new Dh(a.a);
		b.type = a.type == eb || a.type == db ? eb : fb;
		this.dispatchEvent(b)
	};
	Jo.prototype.F = function() {
		Jo.m.F.call(this);
		ai(this.a);
		ai(this.b);
		delete this.A
	};

	function Ko(a, b) {
		this.a = a instanceof L ? a : new L(a, b)
	}
	E(Ko, Cl);
	Ko.prototype.b = function(a, b, c) {
		yl(Wg(a), 0, a, b, this.a, c, null, void 0)
	};

	function Lo() {
		this.a = new Aj
	}

	function Mo(a) {
		var b = typeof a;
		return b == Ib && a || b == p ? "o" + Bc(a) : b.substr(0, 1) + a
	}
	v = Lo.prototype;
	v.add = function(a) {
		this.a.set(Mo(a), a)
	};
	v.remove = function(a) {
		return this.a.remove(Mo(a))
	};
	v.contains = function(a) {
		return Cj(this.a, Mo(a))
	};
	v.Ea = function() {
		return this.a.Ea()
	};
	v.Ja = function() {
		return this.a.Ja(!1)
	};

	function No(a, b, c) {
		this.ia = c || (a ? Uf(Wf(document, a)) : Uf());
		Mm.call(this, this.ia.D(f, {
			style: "position:absolute;display:none;"
		}));
		this.Fb = new L(1, 1);
		this.B = new Lo;
		this.G = null;
		a && Oo(this, a);
		null != b && this.Oa(b)
	}
	E(No, Mm);
	var Po = [];
	v = No.prototype;
	v.Aa = null;
	v.className = "goog-tooltip";
	v.fh = 500;
	v.Bg = 0;

	function Oo(a, b) {
		b = Wf(document, b);
		a.B.add(b);
		S(b, Eb, a.Ne, !1, a);
		S(b, Db, a.bc, !1, a);
		S(b, Cb, a.sg, !1, a);
		S(b, db, a.lg, !1, a);
		S(b, Ka, a.bc, !1, a)
	}

	function Qo(a, b) {
		if(b) b = Wf(document, b), Ro(a, b), a.B.remove(b);
		else {
			for(var c = a.B.Ea(), d = 0; b = c[d]; d++) Ro(a, b);
			Ej(a.B.a)
		}
	}

	function Ro(a, b) {
		$h(b, Eb, a.Ne, !1, a);
		$h(b, Db, a.bc, !1, a);
		$h(b, Cb, a.sg, !1, a);
		$h(b, db, a.lg, !1, a);
		$h(b, Ka, a.bc, !1, a)
	}
	v.Oa = function(a) {
		Dg(this.j(), a)
	};
	v.ac = function(a) {
		var b = this.j();
		b && rg(b);
		No.m.ac.call(this, a);
		a ? (b = this.ia.a.body, b.insertBefore(a, b.lastChild), vh(this.G), this.G = new Jo(this.j()), uh(this, Gc(vh, this.G)), S(this.G, eb, this.Vb, void 0, this), S(this.G, fb, this.Zd, void 0, this)) : (vh(this.G), this.G = null)
	};
	v.Oc = function() {
		return Jg(this.j())
	};

	function So(a) {
		return a.L ? a.N() ? 4 : 1 : a.fa ? 3 : a.N() ? 2 : 0
	}
	v.Me = function() {
		if(!Im.prototype.Me.call(this)) return !1;
		if(this.b)
			for(var a, b = 0; a = Po[b]; b++) wg(a.j(), this.b) || a.J(!1);
		Uc(Po, this) || Po.push(this);
		a = this.j();
		a.className = this.className;
		this.Vb();
		S(a, Eb, this.Jd, !1, this);
		S(a, Db, this.Id, !1, this);
		To(this);
		return !0
	};
	v.mf = function() {
		Vc(Po, this);
		for(var a = this.j(), b, c = 0; b = Po[c]; c++) b.b && wg(a, b.b) && b.J(!1);
		this.bd && this.bd.Zd();
		$h(a, Eb, this.Jd, !1, this);
		$h(a, Db, this.Id, !1, this);
		this.b = void 0;
		0 == So(this) && (this.Ia = !1);
		Im.prototype.mf.call(this)
	};
	v.gf = function(a, b) {
		this.b == a && this.B.contains(this.b) && (this.Ia || !this.Pf ? (this.J(!1), this.N() || (this.b = a, this.s = b || new Uo(Rf(this.Fb)), this.N() && this.lb(), this.J(!0))) : this.b = void 0);
		this.L = void 0
	};
	v.gj = function(a) {
		this.fa = void 0;
		if(a == this.b) {
			a = this.ia;
			var b = a.a;
			try {
				var c = b && b.activeElement;
				var d = c && c.nodeName ? c : null
			} catch(e) {
				d = null
			}
			d = d && this.j() && a.contains(this.j(), d);
			null != this.Aa && (this.Aa == this.j() || this.B.contains(this.Aa)) || d || this.ad && this.ad.Aa || this.J(!1)
		}
	};

	function Vo(a, b) {
		var c = eg(a.ia.a);
		a.Fb.x = b.clientX + c.x;
		a.Fb.y = b.clientY + c.y
	}
	v.Ne = function(a) {
		var b = Wo(this, a.target);
		this.Aa = b;
		this.Vb();
		b != this.b && (this.b = b, Xo(this, b), Yo(this), Vo(this, a))
	};

	function Wo(a, b) {
		try {
			for(; b && !a.B.contains(b);) b = b.parentNode;
			return b
		} catch(c) {
			return null
		}
	}
	v.sg = function(a) {
		Vo(this, a);
		this.Ia = !0
	};
	v.lg = function(a) {
		this.Aa = a = Wo(this, a.target);
		this.Ia = !0;
		if(this.b != a) {
			this.b = a;
			var b = new Zo(this.Aa);
			this.Vb();
			Xo(this, a, b);
			Yo(this)
		}
	};

	function Yo(a) {
		if(a.b)
			for(var b, c = 0; b = Po[c]; c++) wg(b.j(), a.b) && (b.ad = a, a.bd = b)
	}
	v.bc = function(a) {
		var b = Wo(this, a.target),
			c = Wo(this, a.relatedTarget);
		b != c && (b == this.Aa && (this.Aa = null), To(this), this.Ia = !1, !this.N() || a.relatedTarget && wg(this.j(), a.relatedTarget) ? this.b = void 0 : this.Zd())
	};
	v.Jd = function() {
		var a = this.j();
		this.Aa != a && (this.Vb(), this.Aa = a)
	};
	v.Id = function(a) {
		var b = this.j();
		this.Aa != b || a.relatedTarget && wg(b, a.relatedTarget) || (this.Aa = null, this.Zd())
	};

	function Xo(a, b, c) {
		a.L || (a.L = sl(D(a.gf, a, b, c), a.fh))
	}

	function To(a) {
		a.L && (tl(a.L), a.L = void 0)
	}
	v.Zd = function() {
		2 == So(this) && (this.fa = sl(D(this.gj, this, this.b), this.Bg))
	};
	v.Vb = function() {
		this.fa && (tl(this.fa), this.fa = void 0)
	};
	v.F = function() {
		this.J(!1);
		To(this);
		Qo(this);
		this.j() && rg(this.j());
		this.Aa = null;
		delete this.ia;
		No.m.F.call(this)
	};

	function Uo(a, b) {
		Ko.call(this, a, b)
	}
	E(Uo, Ko);
	Uo.prototype.b = function(a, b, c) {
		b = Wg(a);
		b = Zg(b);
		c = c ? new Og(c.top + 10, c.right, c.bottom, c.left + 10) : new Og(10, 0, 0, 10);
		Bl(this.a, a, 8, c, b, 9) & 496 && Bl(this.a, a, 8, c, b, 5)
	};

	function Zo(a) {
		lo.call(this, a, 5)
	}
	E(Zo, lo);
	Zo.prototype.b = function(a, b, c) {
		var d = new L(10, 0);
		yl(this.c, this.f, a, b, d, c, 9) & 496 && yl(this.c, 4, a, 1, d, c, 5)
	};

	function $o(a, b, c) {
		Go.call(this, b, c);
		this.h = new Aj;
		this.f = a || 5;
		this.l = null;
		this.o = !1;
		this.g = Array(this.f);
		this.H = Array(this.f);
		this.C = Xl.Y();
		this.va = om.Y();
		this.L = null;
		this.nh = !0
	}
	E($o, Go);
	var ap = "";
	v = $o.prototype;
	v.D = function() {
		$o.m.D.call(this);
		for(var a = 0; a < this.f; ++a) this.uc(new ao(""), !0)
	};
	v.ga = function(a) {
		$o.m.ga.call(this, a);
		K(this.j(), "alt-menu")
	};
	v.zf = function(a) {
		a = this.h.get(Bc(a));
		for(var b = 0; b < Y(a, 2) && b < this.f; ++b) {
			var c = zi(this, b);
			c.Mb(Um(an(a, b), 0));
			c.za(b);
			c.J(!0, !0)
		}
		for(; b < this.f; ++b) zi(this, b).J(!1)
	};

	function bp(a, b, c) {
		a.h.set(Bc(b), c);
		Ho(a, b, 9, 8, !1, new Og(-2, 1, -2, 1))
	}
	v.kd = function() {
		$o.m.kd.call(this);
		Ej(this.h)
	};
	v.J = function(a, b) {
		var c = this.Da;
		this.L = c;
		a && null != c ? (cp(this, c), bm(this.C, "altshow"), pm(this.va, 207)) : null != this.l && en(this.l, 0, 0);
		null != c && (a ? this.te(c) : this.pe(c));
		b = $o.m.J.call(this, a, b);
		a && null != this.j() && hh(this.j(), !1);
		return b
	};
	v.ab = function() {
		if(null != this.L) {
			var a = Jg(this.L);
			if(null != a) return a
		}
		return ""
	};
	v.mb = function() {
		$o.m.mb.call(this);
		if(this.o)
			for(var a = 0; a < this.g.length; a++) {
				var b = this.g[a];
				tl(b.f);
				b.g();
				b.l(-1);
				b.g();
				b.J(!1)
			}
	};
	v.te = function(a) {
		K(a, "trans-target");
		a.title = ""
	};
	v.pe = function(a) {
		Oe(a, "trans-target");
		a.title = ap
	};
	v.Ga = function(a) {
		if(a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
		var b = $o.m.Ga.call(this, a);
		if(!b && (37 == a.keyCode || 39 == a.keyCode)) {
			var c = fh(this.Da.parentNode.parentNode),
				d = null;
			if(!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
			if(!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
			if(this.le(d) && (c = this.Da, (c = d ? x(c.nextElementSibling) ? c.nextElementSibling : ug(c.nextSibling, !0) : x(c.previousElementSibling) ? c.previousElementSibling : ug(c.previousSibling, !1)) && c != this.Da)) return this.mb(), this.eh(d),
				this.Bd(c ? this.a.get(Bc(c)) : null, 0, 0), dp(this), a.b(), a.stopPropagation(), !0
		}
		return b
	};
	v.Bd = function(a, b, c) {
		fh((a.A || this.Da).parentNode.parentNode) ? O(this.j(), Za, Sb) : O(this.j(), Za, "");
		if(this.o)
			for(var d = 0; d < this.g.length; d++) ep(this, d), Dg(this.g[d].c, "...");
		this.zf(a.A);
		$o.m.Bd.call(this, a, b, c)
	};

	function fp(a, b, c) {
		!a.o || b >= a.f || "" == c || (Dg(a.g[b].c, c), ep(a, b))
	}

	function ep(a, b) {
		yl(zi(a, b).j(), 12, a.g[b].j(), 8, new L(1, 0))
	}
	v.Qc = function(a) {
		$o.m.Qc.call(this, a);
		var b = this.Da;
		null != b && (bm(this.C, "altmenuhl"), pm(this.va, 209), cp(this, b), a = this.qd(a.target), -1 != a && a != this.f && (tl(this.H[a]), this.H[a] = sl(this.ej, 300, this), this.o && (b = this.g[a], fh(this.Da.parentNode.parentNode) ? (K(b.j(), Sb), O(b.j(), Za, Sb)) : (Oe(b.j(), Sb), O(b.j(), Za, "")), ep(this, a), tl(b.f), 0 == b.a ? b.f = sl(D(b.l, b, 1), 300) : b.l(1))))
	};
	v.ej = function() {
		bm(this.C, "altmenuhold");
		pm(this.va, 208)
	};
	v.Te = function(a) {
		$o.m.Te.call(this, a);
		a = this.qd(a.target); - 1 != a && a != this.f && (tl(this.H[a]), this.o && this.g[a].o())
	};
	v.qd = function(a) {
		return Bi(this, a)
	};
	v.le = u(!0);
	v.eh = hc();
	v.se = function(a, b, c, d, e) {
		(a = $o.m.se.call(this, a, b, c, d, e)) && a.Cc == Bb && (a.Cc = Sa);
		return a
	};
	v.dd = function(a) {
		$o.m.dd.call(this, a);
		U(this).w(a.A, Eb, this.xg);
		U(this).w(a.A, Db, this.Gd);
		U(this).w(a.A, Wa, this.vg);
		U(this).w(a.A, Cb, this.wg)
	};
	v.ue = function(a) {
		$o.m.ue.call(this, a);
		U(this).ca(a.A, Eb, this.xg);
		U(this).ca(a.A, Db, this.Gd);
		U(this).ca(a.A, Wa, this.vg);
		U(this).ca(a.A, Cb, this.wg)
	};

	function cp(a, b) {
		if(null != a.l && (b = a.h.get(Bc(b))) && (a = a.l, a.b))
			for(var c = a.A && (a.A.value || Jg(a.A)), d = -1, e = -1, g = !1, h = 0; h < Y(a.b, 5); h++) {
				var k = bn(a.b, h);
				if(0 != Y(k, 2) && (0 == Tm(k, 5) && (g = c.indexOf(Um(k, 4), e + 1), 0 <= g ? (d = g, e = d + Um(k, 4).length, g = !0) : g = !1), bn(a.b, h).Eb() == b.Eb())) {
					if(g) {
						c = [];
						for(e = 0; e < Y(b, 3); ++e) c.push({
							Dc: d + Tm(new Ym(Vm(b, 3, e)), 0),
							Ef: d + Tm(new Ym(Vm(b, 3, e)), 1)
						});
						en(a, 0, 0, void 0, c)
					} else d = c.indexOf(Um(b, 0)), 0 <= d && en(a, d, d + Um(b, 0).length);
					break
				}
			}
	}

	function gp(a, b) {
		b ? zj(a.a.Ja(!1), function(a) {
			"" == this.b.gg(a.A) && (K(a.A, ac), this.b.fb(a.A, "_"));
			return !0
		}, a) : zj(a.a.Ja(!1), function(a) {
			Me(a.A, ac) && (Oe(a.A, ac), this.b.fb(a.A, ""));
			return !0
		}, a)
	}
	v.xg = function(a) {
		Vn() || (K(a.target, bc), cp(this, a.target), gp(this, !0), bm(this.C, "althighlight"), pm(this.va, 206))
	};
	v.Gd = function(a) {
		Oe(a.target, bc);
		null == this.l || this.N() || en(this.l, 0, 0);
		gp(this, !1)
	};
	v.wg = function(a) {
		Vn() && this.Gd(a)
	};
	v.vg = function(a) {
		Vn() || (this.Gd(a), In(Dn(a.target), void 0).select())
	};

	function dp(a) {
		zj(a.a.Ja(!1), function(a) {
			Oe(a.A, bc);
			return !0
		}, a)
	}
	v.jf = function(a) {
		a && a.currentTarget && a.currentTarget.Da && (a.g = a.currentTarget.Da);
		$o.m.jf.call(this, a)
	};
	v.Vd = function(a) {
		Vn() ? dp(this) : this.vb && $o.m.Vd.call(this, a)
	};

	function hp(a, b, c) {
		this.R = this.c = null;
		$o.call(this, a, b, c)
	}
	E(hp, $o);
	v = hp.prototype;
	v.eh = ic("c");
	v.J = function(a, b) {
		b = hp.m.J.call(this, a, b);
		this.c = null;
		a ? this.R = this.ab() : null != this.R && this.R != this.ab() && this.dispatchEvent(new Ah(Ca, this));
		return b
	};
	v.te = function(a) {
		hp.m.te.call(this, a);
		K(a, "trans-edit");
		a.contentEditable = !0;
		so(this, a);
		ro(this).focus();
		Gg(ro(this), !0);
		U(this).w(a, xb, this.pg);
		U(this).w(a, Db, this.Hd);
		U(this).w(a, Eb, this.Hd);
		if(null != this.c) {
			a = In(Dn(a), void 0);
			var b = this.c ? a.Ma() : a.eb(),
				c = nn(a);
			a = c;
			var d = b,
				e = new Hn;
			e.f = Rn(a, d, c, b);
			if(vg(a) && !mg(a)) {
				var g = a.parentNode;
				d = Nc(g.childNodes, a);
				a = g
			}
			vg(c) && !mg(c) && (g = c.parentNode, b = Nc(g.childNodes, c), c = g);
			e.f ? (e.a = c, e.g = b, e.b = a, e.c = d) : (e.a = a, e.g = d, e.b = c, e.c = b);
			e.select()
		}
	};
	v.pe = function(a) {
		hp.m.pe.call(this, a);
		Oe(a, "trans-edit");
		a.contentEditable = !1;
		ro(this) && Gg(ro(this), !1);
		U(this).ca(a, xb, this.pg);
		U(this).ca(a, Db, this.Hd);
		U(this).ca(a, Eb, this.Hd)
	};
	v.Hd = function() {
		var a = Tn();
		null == a || a.La() == a.cb() && a.Ma() == a.eb() || this.J(a.La() == a.cb())
	};
	v.pg = function(a) {
		for(var b = 0; b < this.f; ++b) zi(this, b).J(!1);
		if(13 == a.keyCode || 3 == a.keyCode) return null === wo(this) ? (this.mb(), a.stopPropagation(), a.b(), !0) : !1;
		null === wo(this) || !Pi(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Da.focus(), this.Bb(Bi(this, null)));
		return !1
	};
	v.le = function(a) {
		var b = Tn();
		if(b.La() == b.cb() && b.Ma() == b.eb()) {
			var c = b.Ye() ? b.Ma() : b.eb();
			b = In(Dn(nn(b)), void 0);
			if(!a && c == b.Ma() || a && c == b.eb()) return !0
		}
		return !1
	};

	function ip(a, b, c) {
		$o.call(this, a, b, c);
		this.c = null
	}
	E(ip, $o);
	v = ip.prototype;
	v.ga = function(a) {
		ip.m.ga.call(this, a);
		this.c = new jp("");
		this.uc(this.c, !0)
	};
	v.zf = function(a) {
		ip.m.zf.call(this, a);
		this.c.j().firstChild.value = this.b.gg(a)
	};
	v.J = function(a, b) {
		b = ip.m.J.call(this, a, b);
		a && null != this.j() && (ro(this) == this.c.j().firstChild || ro(this) == this.c.j().firstChild.nextSibling) && jj(this.c, !0);
		return b
	};
	v.Qc = function(a) {
		ip.m.Qc.call(this, a);
		a.target == this.c ? so(this, this.c.j().firstChild) : so(this, this.j());
		ro(this).focus();
		ro(this).tabIndex = 0
	};
	v.qd = function(a) {
		return a == this.c ? -1 : ip.m.qd.call(this, a)
	};
	v.Ga = function(a) {
		return 9 == a.keyCode ? (this.c.W & 2 ? (ro(this) == this.c.j().firstChild ? so(this, this.c.j().firstChild.nextSibling) : so(this, this.c.j().firstChild), ro(this).focus(), ro(this).tabIndex = 0) : jj(this.c, !0), a.b(), a.stopPropagation(), !0) : ip.m.Ga.call(this, a)
	};
	v.le = function() {
		return null === wo(this) || !(wo(this) instanceof jp)
	};

	function jp(a, b, c) {
		W.call(this, a, c || kp.Y(), b);
		this.ta(4, !1)
	}
	E(jp, W);
	jp.prototype.Nc = function(a) {
		a.target == this.j().firstChild.nextSibling && this.dispatchEvent(Ca)
	};
	jp.prototype.P = function() {
		jp.m.P.call(this);
		U(this).w(this.j().firstChild, xb, function(a) {
			32 == a.keyCode && a.stopPropagation()
		})
	};
	jp.prototype.ab = function() {
		return this.j().firstChild.value
	};

	function kp() {}
	E(kp, Ci);
	xc(kp);
	var lp = "";
	kp.prototype.D = function(a) {
		var b = a.b.D(oa, {
				value: a.da(),
				id: "alt-input-text",
				type: "text"
			}),
			c = a.b.D(oa, {
				value: lp,
				id: "alt-input-submit",
				"class": "",
				type: Ma
			});
		return a.b.D(f, {
			id: "alt-input"
		}, b, c)
	};

	function mp() {}
	E(mp, Ci);
	xc(mp);
	v = mp.prototype;
	v.Zb = hc();
	v.Na = function(a, b) {
		ej(a, !1);
		a.hb &= -256;
		a.ta(32, !1);
		mp.m.Na.call(this, a, b);
		a.Mb(b.value);
		return b
	};
	v.D = function(a) {
		ej(a, !1);
		a.hb &= -256;
		a.ta(32, !1);
		return a.b.D(va, {
			"class": Hi(this, a).join(" "),
			disabled: !a.isEnabled()
		}, a.da() || "")
	};
	v.zd = function(a) {
		return a.tagName == va
	};
	v.Ke = A;
	v.Je = function(a) {
		return a.isEnabled()
	};
	v.$b = A;
	v.Lc = function(a, b, c) {
		mp.m.Lc.call(this, a, b, c);
		(a = a.j()) && 1 == b && (a.disabled = c)
	};
	v.Va = A;
	v.Kc = function(a, b) {
		a && (a.value = b)
	};
	v.ea = u("goog-textarea");

	function np(a, b, c) {
		W.call(this, a, b || mp.Y(), c);
		ej(this, !1);
		this.cd = !0;
		(b = this.j()) && this.a.Ad(b, !0);
		this.dc = "" != a;
		a || (this.Lb = "")
	}
	E(np, W);
	var op = !(G && !ke(11));
	v = np.prototype;
	v.fc = !1;
	v.Ld = !1;
	v.dc = !1;
	v.nb = 0;
	v.Ig = 0;
	v.hf = 0;
	v.Ag = !1;
	v.Td = !1;
	v.wf = !1;
	v.vf = !1;
	v.mc = "";

	function pp(a) {
		return a.c.top + a.c.bottom + a.o.top + a.o.bottom
	}

	function qp(a) {
		var b = a.hf,
			c = a.j();
		b && c && a.Td && (b -= pp(a));
		return b
	}

	function rp(a) {
		a.hf = 50;
		sp(a)
	}

	function tp(a) {
		a.Ig = 50;
		sp(a)
	}
	v.za = function(a) {
		this.Mb(String(a))
	};
	v.Ba = function() {
		return this.j().value != this.mc || up(this) || this.dc ? this.j().value : ""
	};
	v.Mb = function(a) {
		np.m.Mb.call(this, a);
		this.dc = "" != a;
		sp(this)
	};
	v.ma = function(a) {
		np.m.ma.call(this, a);
		this.j().disabled = !a
	};

	function sp(a) {
		a.j() && a.Cd()
	}

	function up(a) {
		return "placeholder" in a.j()
	}

	function vp(a) {
		a.mc && (up(a) ? a.j().placeholder = a.mc : !a.j() || a.dc || a.Ld || (K(a.j(), Zb), a.j().value = a.mc))
	}
	v.P = function() {
		np.m.P.call(this);
		var a = this.j();
		O(a, {
			overflowY: rb,
			overflowX: Ha,
			boxSizing: La,
			MsBoxSizing: La,
			WebkitBoxSizing: La,
			MozBoxSizing: La
		});
		this.c = lh(a);
		this.o = mh(a);
		U(this).w(a, "scroll", this.Cd).w(a, db, this.Cd).w(a, zb, this.Cd).w(a, Fb, this.ij).w(a, Ka, this.Nh);
		vp(this);
		sp(this)
	};

	function wp(a) {
		if(!a.Ag) {
			var b = a.j().cloneNode(!1);
			O(b, {
				position: Ba,
				height: Ha,
				top: "-9999px",
				margin: "0",
				padding: "1px",
				border: "1px solid #000",
				overflow: rb
			});
			a.b.a.body.appendChild(b);
			var c = b.scrollHeight;
			b.style.padding = "10px";
			var d = b.scrollHeight;
			a.wf = d > c;
			b.style.borderWidth = "10px";
			a.vf = b.scrollHeight > d;
			b.style.height = "100px";
			100 != b.offsetHeight && (a.Td = !0);
			rg(b);
			a.Ag = !0
		}
		b = a.j();
		isNaN(a.c.top) && (a.c = lh(b), a.o = mh(b));
		c = a.j().scrollHeight;
		var e = a.j();
		d = e.offsetHeight - e.clientHeight;
		if(!a.wf) {
			var g = a.c;
			d -= g.top + g.bottom
		}
		a.vf || (e = mh(e), d -= e.top + e.bottom);
		c += 0 < d ? d : 0;
		a.Td ? c -= pp(a) : (a.wf || (d = a.c, c += d.top + d.bottom), a.vf || (a = mh(b), c += a.top + a.bottom));
		return c
	}

	function xp(a, b) {
		a.nb != b && (a.nb = b, a.j().style.height = b + "px")
	}

	function yp(a) {
		var b = a.j();
		b.style.height = Ha;
		var c = b.value.match(/\n/g) || [];
		b.rows = c.length + 1;
		a.nb = 0
	}
	v.Nh = function() {
		up(this) || (this.Ld = !1, "" == this.j().value && (this.dc = !1, vp(this)))
	};
	v.Cd = function(a) {
		if(!this.fc) {
			var b = this.j();
			!up(this) && a && a.type == db && (b.value == this.mc && this.mc && !this.Ld && (Oe(b, Zb), b.value = ""), this.Ld = !0, this.dc = "" != b.value);
			var c = !1;
			this.fc = !0;
			a = this.nb;
			if(b.scrollHeight) {
				var d = !1,
					e = !1,
					g = wp(this),
					h = b.offsetHeight,
					k = qp(this);
				var l = this.Ig;
				var m = this.j();
				l && m && this.Td && (l -= pp(this));
				k && g < k ? (xp(this, k), d = !0) : l && g > l ? (xp(this, l), b.style.overflowY = "", e = !0) : h != g ? xp(this, g) : this.nb || (this.nb = g);
				d || e || !op || (c = !0)
			} else yp(this);
			this.fc = !1;
			c && (b = this.j(), this.fc || (this.fc = !0, (e = b.scrollHeight) ? (g = wp(this), c = qp(this), c && g <= c || (d = this.c, b.style.paddingBottom = d.bottom + 1 + "px", wp(this) == g && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = wp(this) - e, e >= c ? xp(this, e) : xp(this, c)), b.style.paddingBottom = d.bottom + "px")) : yp(this), this.fc = !1));
			a != this.nb && this.dispatchEvent("resize")
		}
	};
	v.ij = function() {
		var a = this.j(),
			b = a.offsetHeight;
		a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
		b != this.nb && (this.nb = this.hf = b)
	};

	function zp(a) {
		return function() {
			return a
		}
	}

	function Ap(a, b) {
		for(var c = 0; c < b.length - 2; c += 3) {
			var d = b.charAt(c + 2);
			d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
			d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
			a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
		}
		return a
	}

	function Bp(a, b) {
		var c = b.split(".");
		b = Number(c[0]) || 0;
		for(var d = [], e = 0, g = 0; g < a.length; g++) {
			var h = a.charCodeAt(g);
			128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128)
		}
		a = b;
		for(e = 0; e < d.length; e++) a += d[e], a = Ap(a, "+-a^+6");
		a = Ap(a, "+-3^+b+-f");
		a ^= Number(c[1]) || 0;
		0 > a && (a = (a & 2147483647) + 2147483648);
		c = a % 1E6;
		return c.toString() +
			"." + (c ^ b)
	}
	var Cp = null;

	function Dp() {
		var a = zp(String.fromCharCode(116)),
			b = zp(String.fromCharCode(107));
		a = [a(), a()];
		a[1] = b();
		return a.join("")
	};

	function Ep() {
		this.a = 0;
		this.va = om.Y()
	}

	function Fp(a) {
		a = a.Ea("q").join("");
		if(null !== Cp) var b = Cp;
		else {
			var c = zp(String.fromCharCode(84));
			b = zp(String.fromCharCode(75));
			c = [c(), c()];
			c[1] = b();
			b = (Cp = window[c.join(b())] || "") || ""
		}
		return "&" + Dp() + "=" + Bp(a, b)
	}

	function Gp(a, b, c, d, e) {
		c = c.toString();
		c += Fp(d);
		d = d.toString();
		var g = sa;
		b += "?" + c;
		2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
		++a.a;
		Ol(b, function(b) {
			--a.a;
			e(b)
		}, g, d, void 0)
	}
	Ep.prototype.b = function(a, b, c) {
		c = c.target;
		!c.Sc() || "[" != c.Kb()[0] && "{" != c.Kb()[0] ? (Hp(this, c), b && b(c.Xb())) : (b = Ip(c, "handleSingleResult_"), C(b) && (b = new $m(b)), a(b))
	};
	Ep.prototype.c = function(a, b, c) {
		c = c.target;
		if(c.Sc()) {
			c = Ip(c, "handleTextResult_");
			var d = [];
			if(a) d.push(C(c) ? c[0] : c);
			else if(C(c))
				for(a = 0; a < c.length; ++a) d.push(C(c[a]) ? c[a][0] : c[a]);
			b(d)
		} else Hp(this, c), b(null, c.Ce())
	};

	function Ip(a, b) {
		var c = a.Kb();
		a = {
			"class": "trans.common.TranslationAPI",
			func: b,
			url: a.De()
		};
		try {
			var d = JSON.parse(c)
		} catch(e) {
			throw d = Xl.Y(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
		}
		return d
	}
	var Jp = {},
		Kp = (Jp[1] = 15, Jp[2] = 16, Jp[3] = 17, Jp[4] = 18, Jp[5] = 19, Jp[6] = 20, Jp[7] = 21, Jp[8] = 22, Jp[9] = 23, Jp);

	function Hp(a, b) {
		var c = b.Ce();
		c = c in Kp ? Kp[c] : 0;
		a = pm(a.va, 148);
		var d = new mm;
		He(d, 1, 156);
		c && He(d, 5, c);
		Ie(a, 63, d);
		c = Xl.Y();
		a = b.De();
		b = b.Kb();
		c.log("invalidResponse", {
			q: a.substring(0, 500),
			ql: a.length,
			r: b.substring(0, 500),
			rl: b.length
		})
	};

	function Lp(a, b) {
		this.a = [];
		this.b = b;
		for(var c = !0, d = a.length - 1; 0 <= d; d--) {
			var e = a[d] | 0;
			c && e == b || (this.a[d] = e, c = !1)
		}
	}
	var Mp = {};

	function Np(a) {
		if(-128 <= a && 128 > a) {
			var b = Mp[a];
			if(b) return b
		}
		b = new Lp([a | 0], 0 > a ? -1 : 0); - 128 <= a && 128 > a && (Mp[a] = b);
		return b
	}

	function Op(a) {
		if(isNaN(a) || !isFinite(a)) return Pp;
		if(0 > a) return Qp(Op(-a));
		for(var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
		return new Lp(b, 0)
	}
	var Pp = Np(0),
		Rp = Np(1),
		Sp = Np(16777216);

	function Tp(a) {
		if(-1 == a.b) return -Tp(Qp(a));
		for(var b = 0, c = 1, d = 0; d < a.a.length; d++) {
			var e = Up(a, d);
			b += (0 <= e ? e : 4294967296 + e) * c;
			c *= 4294967296
		}
		return b
	}
	v = Lp.prototype;
	v.toString = function(a) {
		a = a || 10;
		if(2 > a || 36 < a) throw Error("radix out of range: " + a);
		if(Vp(this)) return "0";
		if(-1 == this.b) return "-" + Qp(this).toString(a);
		for(var b = Op(Math.pow(a, 6)), c = this, d = "";;) {
			var e = Wp(c, b);
			c = Xp(c, Yp(e, b));
			var g = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
			c = e;
			if(Vp(c)) return g + d;
			for(; 6 > g.length;) g = "0" + g;
			d = "" + g + d
		}
	};

	function Up(a, b) {
		return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
	}

	function Vp(a) {
		if(0 != a.b) return !1;
		for(var b = 0; b < a.a.length; b++)
			if(0 != a.a[b]) return !1;
		return !0
	}

	function Zp(a, b) {
		a = Xp(a, b);
		return -1 == a.b ? -1 : Vp(a) ? 0 : 1
	}

	function Qp(a) {
		for(var b = a.a.length, c = [], d = 0; d < b; d++) c[d] = ~a.a[d];
		return(new Lp(c, ~a.b)).add(Rp)
	}
	v.add = function(a) {
		for(var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
			var g = d + (Up(this, e) & 65535) + (Up(a, e) & 65535),
				h = (g >>> 16) + (Up(this, e) >>> 16) + (Up(a, e) >>> 16);
			d = h >>> 16;
			g &= 65535;
			h &= 65535;
			c[e] = h << 16 | g
		}
		return new Lp(c, c[c.length - 1] & -2147483648 ? -1 : 0)
	};

	function Xp(a, b) {
		return a.add(Qp(b))
	}

	function Yp(a, b) {
		if(Vp(a) || Vp(b)) return Pp;
		if(-1 == a.b) return -1 == b.b ? Yp(Qp(a), Qp(b)) : Qp(Yp(Qp(a), b));
		if(-1 == b.b) return Qp(Yp(a, Qp(b)));
		if(0 > Zp(a, Sp) && 0 > Zp(b, Sp)) return Op(Tp(a) * Tp(b));
		for(var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
		for(e = 0; e < a.a.length; e++)
			for(var g = 0; g < b.a.length; g++) {
				var h = Up(a, e) >>> 16,
					k = Up(a, e) & 65535,
					l = Up(b, g) >>> 16,
					m = Up(b, g) & 65535;
				d[2 * e + 2 * g] += k * m;
				$p(d, 2 * e + 2 * g);
				d[2 * e + 2 * g + 1] += h * m;
				$p(d, 2 * e + 2 * g + 1);
				d[2 * e + 2 * g + 1] += k * l;
				$p(d, 2 * e + 2 * g + 1);
				d[2 * e + 2 * g + 2] += h * l;
				$p(d, 2 * e + 2 * g + 2)
			}
		for(e = 0; e <
			c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
		for(e = c; e < 2 * c; e++) d[e] = 0;
		return new Lp(d, 0)
	}

	function $p(a, b) {
		for(;
			(a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
	}

	function Wp(a, b) {
		if(Vp(b)) throw Error("division by zero");
		if(Vp(a)) return Pp;
		if(-1 == a.b) return -1 == b.b ? Wp(Qp(a), Qp(b)) : Qp(Wp(Qp(a), b));
		if(-1 == b.b) return Qp(Wp(a, Qp(b)));
		if(30 < a.a.length) {
			if(-1 == a.b || -1 == b.b) throw Error("slowDivide_ only works with positive integers.");
			for(var c = Rp; 0 >= Zp(b, a);) c = aq(c, 1), b = aq(b, 1);
			var d = bq(c, 1),
				e = bq(b, 1);
			b = bq(b, 2);
			for(c = bq(c, 2); !Vp(b);) {
				var g = e.add(b);
				0 >= Zp(g, a) && (d = d.add(c), e = g);
				b = bq(b, 1);
				c = bq(c, 1)
			}
			return d
		}
		for(c = Pp; 0 <= Zp(a, b);) {
			d = Math.max(1, Math.floor(Tp(a) / Tp(b)));
			e = Math.ceil(Math.log(d) / Math.LN2);
			e = 48 >= e ? 1 : Math.pow(2, e - 48);
			g = Op(d);
			for(var h = Yp(g, b); - 1 == h.b || 0 < Zp(h, a);) d -= e, g = Op(d), h = Yp(g, b);
			Vp(g) && (g = Rp);
			c = c.add(g);
			a = Xp(a, h)
		}
		return c
	}
	v.and = function(a) {
		for(var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Up(this, d) & Up(a, d);
		return new Lp(c, this.b & a.b)
	};
	v.or = function(a) {
		for(var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Up(this, d) | Up(a, d);
		return new Lp(c, this.b | a.b)
	};
	v.xor = function(a) {
		for(var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++) c[d] = Up(this, d) ^ Up(a, d);
		return new Lp(c, this.b ^ a.b)
	};

	function aq(a, b) {
		var c = b >> 5;
		b %= 32;
		for(var d = a.a.length + c + (0 < b ? 1 : 0), e = [], g = 0; g < d; g++) e[g] = 0 < b ? Up(a, g - c) << b | Up(a, g - c - 1) >>> 32 - b : Up(a, g - c);
		return new Lp(e, a.b)
	}

	function bq(a, b) {
		var c = b >> 5;
		b %= 32;
		for(var d = a.a.length - c, e = [], g = 0; g < d; g++) e[g] = 0 < b ? Up(a, g + c) >>> b | Up(a, g + c + 1) << 32 - b : Up(a, g + c);
		return new Lp(e, a.b)
	};
	Xp(aq(Rp, 32), Rp);
	Np(65535);
	Xp(aq(Rp, 128), Rp);
	var cq = G || I || Ud || Vd || !1;
	se && 0 <= sd(xl, "4") || te && J("533") || H && J("2.0") || G && J("10") || Ud && Nd();

	function dq(a, b, c, d, e, g, h, k, l) {
		T.call(this, a);
		this.g = h || null;
		null != this.g && this.g.h(D(this.ti, this));
		this.l = null;
		this.a = Ha;
		this.ya = this.c = "";
		this.Ya = new Ep;
		this.Fb = !!b && cq && !G;
		this.K = null != e ? e : 0;
		this.f = null;
		this.Fb ? this.f = new hp : this.f = new ip;
		l && this.f.ma(!1);
		if(0 < this.K)
			for(a = this.f, a.o = !0, b = 0; b < a.f; b++) h = hg(f, "goog-menu", ""), e = hg(f, null, h), h = new Nm(e, h), a.g[b] = h, document.body.appendChild(e);
		this.f.ga(c);
		this.h = k || null;
		this.Ia = null != d ? d : -1;
		this.L = Xl.Y();
		this.C = new Aj;
		this.H = null;
		this.Xa = "t";
		this.R =
			this.X = null;
		this.o = g || null;
		this.fa = !1;
		null != this.o && (this.o.c(D(this.Ej, this)), this.o.a(D(this.oi, this)));
		this.ra = null;
		this.va = om.Y()
	}
	E(dq, T);

	function eq(a, b) {
		a.ra = b;
		a.f.l = b
	}

	function fq(a) {
		a.H = ub;
		a.f.C.s = a.H || ""
	}

	function gq(a) {
		var b = hq;
		a.L.f = b;
		a.Xa = b
	}

	function iq(a, b) {
		null != a.o && a.o.f();
		b && (a.l = new $m(b), a.R = null);
		jq(a) && (a.g.b(), null != a.h && a.h.a(!1));
		if(a.l) {
			b = 0 != Yf().length;
			a.b.Tc(a.j());
			a.f.kd();
			a.ra && (a.ra.b = a.l);
			for(var c = "", d = 0, e = 0; e < Y(a.l, 5); e++) kq(a.l, e) && (c += " "), c += lq(a.l, e), d += Y(bn(a.l, e), 2);
			if(0 != d) {
				c = [];
				d = !1;
				e = a.l;
				for(var g = "", h = 0; h < Y(e, 5); h++) {
					var k = bn(e, h);
					null != k.data[4] && 0 < Um(k, 4).length ? g = Um(k, 4) : (new Wm(k.Eb())).data[4] = g
				}
				for(e = 0; e < Y(a.l, 5); e++) {
					g = bn(a.l, e);
					h = an(g, 0);
					kq(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) :
						("km" == a.c || "lo" == a.c) && a.b.appendChild(a.j(), I ? lg() : Ud ? document.createTextNode("&shy;") : G ? document.createTextNode("&#8203;") : lg());
					null != g.data[4] && 0 < Um(g, 4).length && 0 == Tm(g, 5) && c.push(Um(g, 4));
					var l;
					k = lq(a.l, e);
					/^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = mq(k)) : (l = a.b.D(ua, null, k), h = Tm(h, 1), 0 <= a.Ia && h < a.Ia && K(l, "alt-low-conf"), Cj(a.C, a.a + "." + a.c + "." + Um(g, 0)) && (h = a.C.get(a.a + "." + a.c + "." + Um(g, 0)), h != nq(g, 0) && (a.b.fb(l, h), K(l, Fa), d = !0, oq(a, !0))), l.title = ap, bp(a.f, l, g));
					l && a.b.appendChild(a.j(), l)
				}
				if(null !=
					a.g) {
					l = a.a + "." + a.c;
					for(e = 0; e < c.length; ++e) l += "." + c[e];
					Cj(a.C, l) && (pq(a, !1), d = !0, qq(a, a.C.get(l)), null != a.h && a.h.a(!1), oq(a, !0))
				}
				d || (oq(a, !1), pq(a, !1));
				(d || b) && a.dispatchEvent(Ca)
			}
		} else oq(a, !1), pq(a, !1)
	}

	function mq(a) {
		a = gd(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
		var b = document.createDocumentFragment(),
			c = 0;
		Oc(a, function(a) {
			0 != c && b.appendChild(hg("BR"));
			c++;
			"" != a && b.appendChild(document.createTextNode(String(od(a))))
		});
		return b
	}

	function rq(a, b) {
		if(jq(a)) return a.g.a();
		var c = [];
		if(a.j() && a.j().childNodes)
			for(var d = 0; d < a.j().childNodes.length; ++d) {
				var e = a.j().childNodes[d];
				c[d] = b && "BR" == e.tagName ? "\n" : Jg(e)
			}
		return c.join("")
	}

	function sq(a, b, c, d) {
		for(a = 0; a < Y(b, 5); a++) {
			var e = bn(b, a),
				g = e && e;
			if(Om(c.data, e ? g.data : null)) {
				c = b;
				b = a;
				e = -1;
				a = Y(c, 5);
				for(g = b; 0 <= g; g--)
					if(0 == Tm(bn(c, g), 5)) {
						e = g;
						break
					}
				for(g = b + 1; g <= Y(c, 5); g++)
					if(0 == Tm(bn(c, g), 5)) {
						a = g;
						break
					}
				if(null != d && d) b = tq(c, e, a);
				else if(d = c, c = e, d) {
					e = b + 1;
					g = b;
					for(b = lq(d, b).length; 64 > b && (e != a || g != c);) e < a && (b += lq(d, e++).length + 1), 64 > b && g > c && (b += lq(d, --g).length + 1);
					b = tq(d, g, e)
				} else b = "";
				return b
			}
		}
		return ""
	}

	function tq(a, b, c) {
		var d = [];
		d.push(lq(a, b));
		for(b += 1; b < c; b++) kq(a, b) && d.push(" "), d.push(lq(a, b));
		return d.join("")
	}

	function kq(a, b) {
		if(0 == b) return !1;
		var c = bn(a, b),
			d = bn(a, b - 1);
		if(c = Sm(an(c, 0), 2) && !Sm(an(d, 0), 3)) a = lq(a, b - 1), b = a.length - 1, c = !(0 <= b && a.indexOf("\n", b) == b);
		return c
	}
	v = dq.prototype;
	v.bb = r("a");
	v.oa = r("c");
	v.D = function() {
		this.T(Mg(this.b, "span"))
	};
	v.T = function(a) {
		dq.m.T.call(this, a);
		iq(this)
	};
	v.P = function() {
		dq.m.P.call(this);
		U(this).w(this.f, Ca, this.Fi);
		null != this.h && null != this.h.b && (U(this).w(this.h.b, Sa, this.Ji), ii(U(this), this.h.b, this.va.a, this.va));
		U(this).w(this.f, "show", this.Ei);
		this.j() && U(this).w(this.j(), xb, function(a) {
			32 == a.keyCode && a.stopPropagation()
		}, !0)
	};
	v.F = function() {
		dq.m.F.call(this);
		this.f.M()
	};
	v.ti = function() {
		this.o.ma(this.g.c());
		oq(this, this.g.c())
	};
	v.Fi = function(a) {
		if(a.type != sb || a.target == this.f)
			if(null == a.target && null != this.g) this.L.log("editpopupclk"), pm(this.va, 233), null != this.h && this.h.a(!0), this.g.l(rq(this)), this.fa = this.o.j().style.display != q, this.o.reset(), null != this.h ? this.o.ma(this.h.b.style.display != q) : this.o.ma(!1), oq(this, !1);
			else {
				var b = a.g;
				null == b && null != a.currentTarget && (b = a.currentTarget.Da);
				var c = a.target.ab();
				if(null != b && null != a.target) {
					var d = b,
						e = this.f.h.get(Bc(d));
					this.b.fb(d, c);
					c == nq(e, 0) ? (Oe(d, Fa), 0 == Yf().length && (oq(this, !1), pq(this, !1))) : (K(d, Fa), oq(this, !0), pq(this, !0));
					null != this.C && this.C.set(this.a + "." + this.c + "." + Um(e, 0), c);
					e = this.f.h.get(Bc(b));
					null != this.C && this.C.set(this.a + "." + this.c + "." + Um(e, 0), c);
					d = nq(e, 0);
					b = Bi(this.f, a.target);
					d = {
						sl: this.a,
						tl: this.c,
						utrans: c,
						gtrans: d,
						index: b,
						ophrase: Um(e, 0),
						osentence: Um(e, 4),
						tsentence: sq(this, this.l, e)
					};
					0 < Y(e, 2) && (d.confidence = Tm(an(e, 0), 1));
					if(a.target instanceof jp || -1 == b) d.manual = 1, pm(this.va, 240);
					else {
						a = pm(this.va, 239);
						e = new im;
						var g = Je(Je(e, 2, gm), 3, em);
						He(g, 1, b);
						Ie(a, 27, e)
					}
					for(var h in d) z(d[h]) && 64 < d[h].length && (d.tr = 1, d[h] = d[h].substr(0, 64));
					this.L.log("usealt", d, this.H);
					h = new Ah("usealt");
					h.text = c;
					this.dispatchEvent(h);
					this.dispatchEvent(Ca)
				}
			}
	};

	function qq(a, b) {
		if(a.j()) {
			null == a.X && (a.R = Xc(a.b.di(a.j())));
			a.X = b;
			var c;
			if(c = a.j().childNodes && 0 < a.j().childNodes.length) c = (c = a.j().childNodes[0]) ? Cj(a.f.a, Bc(c)) : !1;
			c ? (a.b.Tc(a.j()), a.f.kd(), b = a.b.D(ua, Fa, a.X), a.b.appendChild(a.j(), b), bp(a.f, b, new Wm)) : a.j().innerHTML = gd(b).replace(/(\r\n|\r|\n)/g, "<br>")
		}
	}
	v.Ji = function() {
		null != this.g && jq(this) ? this.g.g() : uq(this);
		this.L.log("clkundo", void 0, this.H)
	};
	v.oi = function() {
		jq(this) && (this.g.c() && (qq(this, this.g.a()), this.fa = !0), this.g.b(), null != this.h && this.h.a(!1), this.g.c() && oq(this, !0), this.o.ma(!0), P(this.o.j(), this.fa), this.dispatchEvent(Ca));
		pm(this.va, 215);
		this.L.log("clkcancel", void 0, this.H)
	};
	v.Ei = function() {
		var a = this.f.h.get(Bc(this.f.Da));
		if(a) {
			if(0 < this.K) {
				var b = new Mj("source=baf");
				if(1 == this.K) {
					for(var c = [], d = 0, e = Y(a, 2); d < e; d++) c.push(nq(a, d));
					d = this.Ya;
					var g = this.c,
						h = this.a,
						k = Wf(document, "hl").value,
						l = D(this.Fj, this);
					e = new Mj;
					var m = new Mj;
					e.set("client", "mt");
					e.set("sl", g);
					e.set("tl", h);
					e.set("hl", k);
					e.set("v", "1.0");
					b && e.fg(b);
					(b = !C(c) || C(c) && 1 == c.length) ? m.set("q", c): ak(m, "q", c);
					b = D(d.c, d, b, l);
					Gp(d, da, e, m, b)
				} else
					for(d = 0, e = Y(a, 2); d < e; d++) {
						h = nq(a, d);
						c = this.Ya;
						m = this.c;
						l = this.a;
						g = Wf(document, "hl").value;
						k = D(this.Gj, this, d);
						var n = b,
							t = new Mj,
							y = new Mj;
						t.set("client", "mt");
						t.set("sl", m);
						t.set("tl", l);
						t.set("hl", g);
						ak(t, "dt", ["at", "t"]);
						n && t.fg(n);
						y.set("q", h);
						Gp(c, "/translate_a/single", t, y, D(c.b, c, k, void 0))
					}
			}
			b = new Ah(Sa);
			b.text = this.f.ab();
			b.h = Y(this.l, 5);
			this.dispatchEvent(b);
			b = {};
			b.confidence = Tm(an(a, 0), 1);
			this.a && this.c && this.ya && (b.segments = Y(this.l, 5), b.sl = this.a, b.tl = this.c, b.hl = this.ya);
			pm(this.va, 238);
			this.L.log("phrsclk", b, this.H)
		}
	};
	v.Gj = function(a, b) {
		if(1 == this.K || 1 < Y(b, 5)) {
			var c = Um(new Zm(Vm(b, 0, 0)), 0);
			var d = 1;
			for(var e = Y(b, 0); d < e; d++) c += " " + Um(new Zm(Vm(b, 0, d)), 0);
			d = c
		} else if(1 == Y(b, 5)) {
			c = [];
			b = bn(b, 0);
			d = 0;
			for(e = Math.min(this.K, Y(b, 2)); d < e; d++) c.push(nq(b, d));
			d = c.join(", ")
		} else d = "...";
		fp(this.f, a, d)
	};
	v.Fj = function(a) {
		for(var b = 0; b < a.length; b++) fp(this.f, b, a[b])
	};

	function uq(a) {
		jq(a) && (null != a.h && a.h.a(!1), a.g.b());
		Ej(a.C);
		a.X = null;
		iq(a);
		a.dispatchEvent(Ca)
	}

	function oq(a, b) {
		null != a.h && null != a.h.b && P(a.h.b, b)
	}

	function pq(a, b) {
		null != a.o && (b && a.o.reset(), P(a.o.j(), b))
	}
	v.Ej = function() {
		var a = [],
			b;
		null != this.R ? b = this.R : b = sg(this.j());
		for(var c = {
				segment: []
			}, d = null, e = 0, g = 0; g < b.length; g++) {
			var h = bn(this.l, g);
			if(null != h) {
				var k = Jg(b[g]);
				a: {
					var l = k;
					var m = h;
					if(0 == Y(m, 2)) l = 0;
					else {
						for(var n = 0; n < Y(m, 2); ++n)
							if(l == nq(m, n)) {
								l = n;
								break a
							}
						l = -1
					}
				}
				m = bd(Um(h, 4));
				n = sq(this, this.l, h, !0);
				if(0 != m.length) {
					if(0 == a.length || m != a[a.length - 1]) a.push(m), d = vq(this, a.length - 1), e = 0, d = {
						source: m,
						original_target: n,
						segment_source: d,
						phrase_correction: []
					}, c.segment.push(d);
					if(0 != l)
						for(m = nq(h, 0).length,
							l = {
								alternative_index: l,
								edited_phrase: k,
								source_span: [],
								target_span: [{
									start: e,
									end: e + m
								}]
							}, d.phrase_correction.push(l), m = 0; m < Y(h, 3); ++m) n = new Ym(Vm(h, 3, m)), l.source_span.push({
							start: Tm(n, 0),
							end: Tm(n, 1)
						});
					e += k.length;
					Sm(an(h, 0), 2) && e++
				}
			}
		}
		if(jq(this)) {
			this.dispatchEvent(Ca);
			this.g.b();
			null != this.h && this.h.a(!1);
			oq(this, !0);
			this.g.a() != rq(this) && qq(this, this.g.a());
			b = this.a + "." + this.c;
			for(g = 0; g < a.length; ++g) b += "." + a[g];
			a = this.g.a();
			this.C.set(b, a);
			c.contains_full_edit = !0
		}
		c.edited_target = rq(this, !0);
		a = new Mj;
		a.set("ue", JSON.stringify(c));
		a.set("sl", this.a);
		a.set("tl", this.c);
		Ol(ea + this.Xa, void 0, sa, a.toString(), 1E4)
	};

	function vq(a, b) {
		if(b < Y(a.l, 0)) switch(Rm(new Zm(Vm(a.l, 0, b)), 4, 0)) {
			case 0:
				return 1;
			case 1:
				return 2;
			case 2:
				return 3;
			case 10:
				return 4;
			case 3:
				return 5
		}
		return 0
	}

	function jq(a) {
		return null != a.g && a.g.f()
	}

	function lq(a, b) {
		a = bn(a, b);
		return 0 == Y(a, 2) ? Um(a, 0) : nq(a, 0)
	}

	function nq(a, b) {
		return Um(an(a, b), 0)
	};
	var wq = window.google && google.translate && google.translate._const;
	wq || (wq = {
		_cac: "",
		_cam: "",
		_cest: new Date,
		_cjlc: "",
		_cl: "",
		_cuc: "",
		_cnad: !1,
		_cnal: {},
		Pn: "",
		_pah: "",
		_pas: "",
		_pbi: "",
		_pci: "",
		_phf: "",
		_pli: "",
		_plla: "",
		_pmi: "",
		_ps: "",
		_pta: "",
		_puh: ""
	});
	var xq = window.google && window.google.translate && window.google.translate.v || "",
		yq = wq._cl || "en",
		zq = wq._cuc,
		Aq = wq._cnad,
		Bq = wq._cest,
		Cq = wq._cnal || {},
		Dq = "lib" == wq._cam ? 1 : 0,
		Eq = (wq._cac || "te") + (1 == Dq ? "_lib" : ""),
		Fq = function() {
			function a(a) {
				return function() {
					return a
				}
			}
			var b = a(String.fromCharCode(116)),
				c = a(String.fromCharCode(107));
			b = [b(), b()];
			b[1] = c();
			return wq["_c" + b.join(c())] || ""
		}(),
		Gq = wq._pah || "",
		Hq = wq._pas || "https://",
		Iq = wq._pbi || "",
		Jq = wq._pci || "",
		Kq = wq._plla || "",
		Lq = wq._pli || "",
		Mq = wq._ps || "",
		Nq = wq._puh ||
		"",
		Oq = "//" + Nq + ea + Eq,
		Pq = "https://www.google.com/support/translate" + ("en" == yq ? "" : "#googtrans/en/" + yq);

	function Qq(a) {
		for(var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
		return b
	}

	function Rq(a) {
		this.b = a ? [a] : [];
		this.a = [0];
		this.c = !1
	}
	Rq.prototype.register = function(a) {
		if(this.c) return a || A;
		this.a.push(0);
		var b = this.a.length - 1;
		return D(function() {
			this.a[b]++;
			a && a.apply(null, arguments);
			Sq(this)
		}, this)
	};
	Rq.prototype.delay = function(a) {
		return this.c ? a : D(function() {
			if(this.c) a.apply(null, arguments);
			else {
				var b = arguments;
				this.b.push(function() {
					a.apply(null, b)
				})
			}
		}, this)
	};
	Rq.prototype.finish = function() {
		this.a[0] = 1;
		Sq(this)
	};

	function Sq(a) {
		for(var b = 0; b < a.a.length; ++b)
			if(0 == a.a[b]) return;
		a.c = !0;
		for(b = 0; b < a.b.length; ++b) {
			var c = a.b[b];
			a.b[b] = null;
			c.call()
		}
		a.b = [];
		a.a = []
	}

	function Tq(a) {
		this.c = a;
		this.b = this.a = !1
	}

	function Uq(a, b) {
		return D(function() {
			b && b.apply(null, arguments);
			this.b ? this.a || (this.c.call(), this.a = !0) : this.a = !0
		}, a)
	}
	Tq.prototype.finish = function() {
		this.b || (this.b = !0, this.a && this.c.call())
	};

	function Vq(a, b, c) {
		this.a = b;
		this.h = a;
		this.l = c || 0;
		this.b = this.c = !1
	}

	function Wq(a) {
		a.c || a.g()
	}
	Vq.prototype.g = function() {
		(this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b), this.f = 0) : this.f = window.setTimeout(D(this.g, this), 30)
	};
	Vq.prototype.cancel = function() {
		this.f && window.clearTimeout(this.f);
		this.c = !0;
		this.a.call(null, this.b)
	};

	function Xq(a, b) {
		return function() {
			a.dispatchEvent(b)
		}
	}

	function Yq(a) {
		a = bd(a).toLowerCase().replace("_", "-");
		if("zh-cn" == a) return "zh-CN";
		if("zh-tw" == a) return "zh-TW";
		var b = a.indexOf("-");
		a = 0 <= b ? a.substring(0, b) : a;
		return "zh" == a ? "zh-CN" : a
	}

	function Zq(a) {
		var b = [],
			c;
		for(c in a)
			if(a[c] !== Object.prototype[c]) {
				var d = ed(c);
				if(B(a[c]) == Ga)
					for(var e = 0; e < a[c].length; ++e) b.push(d + "=" + ed(a[c][e]));
				else b.push(d + "=" + ed(a[c]))
			}
		return b.join("&")
	}

	function $q(a, b) {
		b = b || {};
		b.nca = a;
		b.client = Eq;
		xq && (b.logld = "v" + xq);
		var c = new Image;
		c.src = "//" + Nq + "/gen204?" + Zq(b);
		c.onload = function() {
			c.onload = null
		}
	}

	function ar(a, b) {
		if((G || Ud) && window.location.hostname != document.domain) {
			br = br ? br + 1 : 1;
			var c = "f" + br + "_" + Hc().toString(36);
			window[c] = function() {
				window[c] = void 0;
				a.src = wb;
				b && window.setTimeout(function() {
					b()
				}, 0)
			};
			a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
		} else b && b()
	}
	var br;

	function cr() {
		var a = {};
		try {
			for(var b in Object.prototype) {
				var c = Object.prototype[b];
				delete Object.prototype[b];
				a[b] = c
			}
		} catch(d) {
			return {}
		}
		return a
	}

	function dr(a) {
		for(var b in a) Object.prototype[b] = a[b]
	}

	function er(a) {
		for(var b in a)
			if(a[b] !== Object.prototype[b]) return !1;
		return !0
	}

	function fr(a, b) {
		return a != Ha && "zh-CN" != a && a == b
	};
	var gr, hr, ir;
	(function() {
		function a(a, c, g) {
			var d = Array.prototype.slice.call(arguments);
			d.splice(0, 2);
			d = "l" + a.toString(16) + "i" + c.toString(16) + (d.length ? "-" + d.join("_") : "");
			b ? b.push(d) : $q(d)
		}
		var b = null,
			c = null;
		gr = function(b, c, g) {
			for(var d in g) g[d] !== Object.prototype[d] && (c[d] = zc(g[d]) ? g[d] : Gc(a, b, Number(g[d])))
		};
		hr = function() {
			b && ir();
			b = [];
			c = S(window, "unload", function() {
				ir()
			})
		};
		ir = function() {
			c && (ai(c), c = null);
			b && b.length && $q(b.join(""));
			b = null
		}
	})();

	function jr(a) {
		kr();
		return Mf(a, null)
	}
	var kr = A;
	/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	function lr(a, b) {
		this.g = [];
		this.C = a;
		this.G = b || null;
		this.f = this.a = !1;
		this.c = void 0;
		this.o = this.I = this.l = !1;
		this.h = 0;
		this.b = null;
		this.s = 0
	}
	lr.prototype.cancel = function(a) {
		if(this.a) this.c instanceof lr && this.c.cancel();
		else {
			if(this.b) {
				var b = this.b;
				delete this.b;
				a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel())
			}
			this.C ? this.C.call(this.G, this) : this.o = !0;
			this.a || (a = new mr(this), nr(this), or(this, !1, a))
		}
	};
	lr.prototype.B = function(a, b) {
		this.l = !1;
		or(this, a, b)
	};

	function or(a, b, c) {
		a.a = !0;
		a.c = c;
		a.f = !b;
		pr(a)
	}

	function nr(a) {
		if(a.a) {
			if(!a.o) throw new qr(a);
			a.o = !1
		}
	}

	function rr(a, b, c, d) {
		a.g.push([b, c, d]);
		a.a && pr(a)
	}
	lr.prototype.then = function(a, b, c) {
		var d, e, g = new $k(function(a, b) {
			d = a;
			e = b
		});
		rr(this, d, function(a) {
			a instanceof mr ? g.cancel() : e(a)
		});
		return g.then(a, b, c)
	};
	Yk(lr);

	function sr(a) {
		return Rc(a.g, function(a) {
			return zc(a[1])
		})
	}

	function pr(a) {
		if(a.h && a.a && sr(a)) {
			var b = a.h,
				c = tr[b];
			c && (w.clearTimeout(c.ka), delete tr[b]);
			a.h = 0
		}
		a.b && (a.b.s--, delete a.b);
		b = a.c;
		for(var d = c = !1; a.g.length && !a.l;) {
			var e = a.g.shift(),
				g = e[0],
				h = e[1];
			e = e[2];
			if(g = a.f ? h : g) try {
				var k = g.call(e || a.G, b);
				x(k) && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
				if(Zk(b) || typeof w.Promise === p && b instanceof w.Promise) d = !0, a.l = !0
			} catch(l) {
				b = l, a.f = !0, sr(a) || (c = !0)
			}
		}
		a.c = b;
		d && (k = D(a.B, a, !0), d = D(a.B, a, !1), b instanceof lr ? (rr(b, k, d), b.I = !0) : b.then(k, d));
		c && (b = new ur(b), tr[b.ka] =
			b, a.h = b.ka)
	}

	function qr() {
		Jc.call(this)
	}
	E(qr, Jc);
	qr.prototype.message = "Deferred has already fired";
	qr.prototype.name = "AlreadyCalledError";

	function mr() {
		Jc.call(this)
	}
	E(mr, Jc);
	mr.prototype.message = "Deferred was canceled";
	mr.prototype.name = "CanceledError";

	function ur(a) {
		this.ka = w.setTimeout(D(this.a, this), 0);
		this.ld = a
	}
	ur.prototype.a = function() {
		delete tr[this.ka];
		throw this.ld;
	};
	var tr = {};

	function vr(a, b) {
		var c = b || {};
		b = c.document || document;
		var d = df(a),
			e = document.createElement(ta),
			g = {
				$g: e,
				Db: void 0
			},
			h = new lr(wr, g),
			k = null,
			l = null != c.timeout ? c.timeout : 5E3;
		0 < l && (k = window.setTimeout(function() {
			xr(e, !0);
			var a = new yr(1, "Timeout reached for loading script " + d);
			nr(h);
			or(h, !1, a)
		}, l), g.Db = k);
		e.onload = e.onreadystatechange = function() {
			e.readyState && "loaded" != e.readyState && e.readyState != Ua || (xr(e, c.Qh || !1, k), nr(h), or(h, !0, null))
		};
		e.onerror = function() {
			xr(e, !0, k);
			var a = new yr(0, "Error while loading script " +
				d);
			nr(h);
			or(h, !1, a)
		};
		g = c.attributes || {};
		Jd(g, {
			type: "text/javascript",
			charset: "UTF-8"
		});
		ag(e, g);
		Qf(e, a);
		zr(b).appendChild(e);
		return h
	}

	function zr(a) {
		var b = Xf("HEAD", a);
		return b && 0 != b.length ? b[0] : a.documentElement
	}

	function wr() {
		if(this && this.$g) {
			var a = this.$g;
			a && a.tagName == ta && xr(a, !0, this.Db)
		}
	}

	function xr(a, b, c) {
		null != c && w.clearTimeout(c);
		a.onload = A;
		a.onerror = A;
		a.onreadystatechange = A;
		b && window.setTimeout(function() {
			rg(a)
		}, 0)
	}

	function yr(a, b) {
		var c = "Jsloader error (code #" + a + ")";
		b && (c += ": " + b);
		Jc.call(this, c);
		this.code = a
	}
	E(yr, Jc);

	function Ar(a, b) {
		this.b = a;
		this.a = b ? b : "callback";
		this.Db = 5E3
	}
	var Br = 0;
	Ar.prototype.send = function(a, b, c, d) {
		a = a ? Hd(a) : {};
		d = d || "_" + (Br++).toString(36) + Hc().toString(36);
		var e = "_callbacks___" + d;
		b && (w[e] = Cr(d, b), a[this.a] = e);
		b = {
			timeout: this.Db,
			Qh: !0
		};
		e = df(this.b);
		e = ef.exec(e);
		var g = e[3] || "";
		e = ff(e[1] + gf("?", e[2] || "", a) + gf("#", g, void 0));
		b = vr(e, b);
		rr(b, null, Dr(d, a, c), void 0);
		return {
			ka: d,
			Wf: b
		}
	};
	Ar.prototype.cancel = function(a) {
		a && (a.Wf && a.Wf.cancel(), a.ka && Er(a.ka, !1))
	};

	function Dr(a, b, c) {
		return function() {
			Er(a, !1);
			c && c(b)
		}
	}

	function Cr(a, b) {
		return function(c) {
			Er(a, !0);
			b.apply(void 0, arguments)
		}
	}

	function Er(a, b) {
		a = "_callbacks___" + a;
		if(w[a])
			if(b) try {
				delete w[a]
			} catch(c) {
				w[a] = void 0
			} else w[a] = A
	};

	function Fr(a, b) {
		Q.call(this);
		this.b = new Jj(a);
		if(b)
			for(var c in b) b[c] !== Object.prototype[c] && this.b.a.set(c, b[c])
	}
	E(Fr, Q);
	Fr.prototype.f = u(!0);
	Fr.prototype.Ua = function() {
		return this.f()
	};
	Fr.prototype.send = u(null);
	Fr.prototype.cancel = hc();

	function Gr(a, b, c, d) {
		Fr.call(this, a, b);
		this.c = null == d || !!d;
		a = this.b.toString();
		kr();
		a = ff(a);
		this.a = new Ar(a, c)
	}
	E(Gr, Fr);
	Gr.prototype.f = r("c");
	Gr.prototype.send = function(a, b) {
		this.a.Db = -1;
		return this.a.send(a, b)
	};
	Gr.prototype.cancel = function(a) {
		this.a.cancel(a)
	};

	function Hr(a, b) {
		Fr.call(this, a, b);
		this.c = {};
		this.a = this.g = 0;
		window.XMLHttpRequest && gc in new XMLHttpRequest && (this.a = 1);
		!this.a && window.XDomainRequest && "file:" != window.location.protocol && (this.a = 2, this.b.a.set("u", window.location.href))
	}
	E(Hr, Fr);
	gr(17170, Hr.prototype, {
		Hg: 1,
		Gg: 2
	});
	Hr.prototype.f = function() {
		return !!this.a
	};
	Hr.prototype.send = function(a, b) {
		var c = cr(),
			d = ++this.g,
			e = {},
			g = {};
		"q" in a && (g.q = a.q, delete a.q);
		a.mode = this.a;
		1 == this.a ? (e.qb = new Kl, S(e.qb, Ua, D(function() {
			e.wc || (e.qb.Sc() ? b(e.qb.Kb()) : (this.Gg(), b(null, e.qb.Kb() || null)), Ir(this, d))
		}, this)), S(e.qb, "timeout", D(function() {
			e.wc || (this.Hg(), Ir(this, d))
		}, this)), e.qb.send(this.b.toString() + "&" + Zq(a), sa, Zq(g), {
			"Content-Type": "application/x-www-form-urlencoded"
		})) : (e.Wa = new XDomainRequest, e.Wa.timeout = 2E4, e.Wa.onload = D(function() {
			e.wc || (b(e.Wa.responseText),
				Ir(this, d))
		}, this), e.Wa.onerror = D(function() {
			e.wc || (this.Gg(), b(null), Ir(this, d))
		}, this), e.Wa.ontimeout = D(function() {
			e.wc || (this.Hg(), b(null), Ir(this, d))
		}, this), e.Wa.open(sa, this.b.toString() + "&" + Zq(a)), e.Wa.send(Zq(g)));
		this.c[d] = e;
		dr(c);
		return d
	};
	Hr.prototype.cancel = function(a) {
		var b = this.c[a];
		b && (b.wc = !0, b.Wa && b.Wa.abort(), Ir(this, a))
	};

	function Ir(a, b) {
		var c = a.c[b];
		c && (c.qb ? (c.qb.M(), c.qb = null) : c.Wa && (c.Wa = null), delete a.c[b])
	}
	Hr.prototype.F = function() {
		Hr.m.F.call(this);
		for(var a in this.c) this.cancel(a)
	};
	var gl = {
		0: "NO_ERROR",
		1: "UNKNOWN_ERROR",
		2: "JWT_TOKEN_CANNOT_PARSE",
		3: "JWT_TOKEN_MISS_PARAM",
		4: "JWT_TOKEN_INVALID_ISS",
		5: "JWT_TOKEN_INVALID",
		6: pa,
		7: "OUT_OF_QUOTA",
		8: pa
	};

	function Jr() {}
	Jr.prototype.b = hc();

	function Kr(a) {
		a = a.split(".");
		if(3 !== a.length) return !1;
		a = JSON.parse(xe(a[1]));
		return null == a || !a.exp || 1E3 * a.exp < Hc() ? !1 : !0
	}

	function Lr(a) {
		this.a = a
	}
	pc(Lr, Jr);
	Lr.prototype.b = function() {
		return Kr(this.a) ? el(this.a) : fl()
	};

	function Mr(a) {
		this.a = null;
		this.c = a
	}
	pc(Mr, Jr);
	Mr.prototype.b = function() {
		if(null != this.a && Kr(this.a)) return el(this.a);
		this.a = null;
		return new $k(function(a, b) {
			var c = this;
			this.c(function(d) {
				c.a = d;
				Kr(c.a) ? a(d) : b(gl[5])
			}, b)
		}, this)
	};

	function Nr(a, b, c, d, e) {
		Q.call(this);
		var g;
		b ? g = {
			client: b
		} : g = {
			anno: 3,
			client: Eq,
			format: "html",
			v: "1.0"
		};
		c && (g.sp = c);
		g.key = a;
		xq && (g.logld = "v" + xq);
		this.s = d || null;
		this.Ub = e || null;
		this.a = null;
		this.l = !0;
		this.b = {
			hd: D(this.I, this),
			Kg: 300
		};
		this.f = new Gr(Hq + Kq, {
			client: Eq
		}, "cb");
		this.h = g;
		a = [{
			sa: new Hr(Hq + Gq + da, g),
			hd: D(this.C, this),
			ff: 30720,
			Lg: 4294967295,
			Jg: -1,
			ah: 0,
			ve: !1
		}, {
			sa: new Gr(Hq + Gq + da, g, "cb", G && 7 >= je),
			hd: D(this.G, this),
			ff: 1900,
			Lg: 4294967295,
			Jg: -1,
			ah: 3,
			ve: !0
		}];
		this.o = new Or(a);
		this.c = !1;
		for(b = 0; b < a.length; ++b) this.c =
			this.c || a[b].sa.f();
		this.c || this.Xi()
	}
	E(Nr, Q);
	gr(7361, Nr.prototype, {
		Wi: function() {
			$q("te_afbr")
		},
		Xi: function() {
			$q("te_au")
		}
	});

	function Pr(a, b) {
		if(!a.l) return b;
		if(B(b) != Ga) a = [
			[b, 200]
		];
		else if(2 == b.length && B(b[0]) != Ga && B(b[1]) != Ga) a = [
			[b[0], 200, b[1]],
			[b[1], 200, b[1]]
		];
		else {
			a = [];
			for(var c = 0; c < b.length; ++c) B(b[c]) != Ga ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]]
		}
		return a
	}
	Nr.prototype.C = function(a) {
		var b = this;
		return function(c) {
			if(c) try {
				var d = c.indexOf("\x00");
				0 <= d && (c = c.substr(0, d));
				var e = JSON.parse(c)
			} catch(g) {
				e = null, b.Wi()
			}
			e ? a(Pr(b, e), 200) : a([], 500)
		}
	};
	Nr.prototype.G = function(a) {
		var b = this;
		return function(c) {
			c ? a(Pr(b, c), 200) : a([], 500)
		}
	};
	Nr.prototype.I = function(a) {
		return function(b) {
			if(b) try {
				var c = JSON.parse(b)
			} catch(d) {
				c = null
			}
			a(c && c[1] || void 0)
		}
	};

	function Or(a) {
		this.b = a
	}
	Or.prototype.start = function(a) {
		this.a = a;
		this.c = 0;
		Qr(this)
	};

	function Qr(a) {
		if(a.c >= a.b.length) a.a(null);
		else {
			var b = a.b[a.c++];
			b.uj ? Wq(new Vq(D(b.sa.Ua, b.sa), D(function(a) {
				a ? this.a(b) : Qr(this)
			}, a), b.uj)) : b.sa.Ua() ? a.a(b) : Qr(a)
		}
	}
	Nr.prototype.g = function(a) {
		this.B || (this.B = !0, this.o.start(D(function(b) {
			b && (this.a = b, this.b.sa = b.sa);
			a()
		}, this)))
	};
	Nr.prototype.Ua = function() {
		return null !== this.a && null !== this.a.sa && this.a.sa.Ua()
	};
	Nr.prototype.translate = function(a, b, c, d, e, g, h, k) {
		var l = this,
			m = this.a.hd(a),
			n = {
				q: b,
				sl: c,
				tl: d
			};
		this.h.sp && 0 == this.h.sp.indexOf("nmt") || (n.sp = "nmt");
		n.tc = e;
		g && (n.ctt = 1);
		h && (n.dom = 1);
		k && (n.sr = 1);
		n[Dp()] = Bp(b.join(""), Fq);
		return this.s ? this.s.b().then(function(a) {
			null != a && (n.jwtt = a, n.rurl = location.hostname);
			return l.a.sa.send(n, D(Rr(m), l))
		}, function(a) {
			a && l.Ub && l.Ub(a)
		}) : this.a.sa.send(n, m)
	};

	function Rr(a) {
		return function(b, c) {
			if(c && this.Ub) {
				try {
					var d = JSON.parse(c).error_code
				} catch(e) {
					d = null
				}
				c = gl[1];
				this.Ub(null != d ? gl[d] || c : c)
			}
			a(b)
		}
	}

	function Sr(a, b) {
		b instanceof $k ? b.then(function(b) {
			a.a.sa.cancel(b)
		}) : a.a.sa.cancel(b)
	}
	Nr.prototype.F = function() {
		Nr.m.F.call(this);
		this.a && (this.a.sa.M(), this.a.sa = null);
		this.b.sa = null;
		this.f.M();
		this.f = null
	};
	var Tr = Qq(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", oa, "NOBR", "LABEL", "Q", "S", "SMALL", ua, "STRIKE", "STRONG", "SUB", "SUP", va, "TT", "U", "VAR"]),
		Ur = Qq(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", oa, va, wa]),
		Vr = Qq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", ta, "STYLE", "WBR", "svg"]),
		Wr = Qq(["submit", Ma]);

	function Xr(a, b) {
		this.a = new hn(a, !1, b, 3 == a.nodeType ? 0 : 1, 1);
		this.c = G ? [] : null;
		for(this.b = []; a = a.parentNode;) Yr(this, a, !0);
		this.b.push(!1);
		this.b.reverse();
		for(a = 1; a < this.b.length; ++a) null == this.b[a] && (this.b[a] = this.b[a - 1]);
		this.f = !1
	}
	gr(52754, Xr.prototype, {
		cj: 1
	});

	function Yr(a, b, c) {
		var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
		"pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1])
	}
	Xr.prototype.node = function() {
		return this.a.node
	};
	Xr.prototype.next = function() {
		try {
			this.c && 0 < this.c.length && -1 == this.a.c && this.c.length--, -1 == this.a.c && this.b.length--, this.c && 0 < this.c.length && 1 != this.a.c && !this.a.node.nextSibling ? jn(this.a, this.c[this.c.length - 1], -1, this.a.f - 1) : (this.a.next(), this.c && 1 == this.a.c && this.c.push(this.a.node)), 1 == this.a.c && this.a.B && Yr(this, this.a.node)
		} catch(a) {
			a != wj && this.cj(a), this.f = !0
		}
	};

	function Zr() {
		return "[msg_undefined]"
	}
	var Z = {};
	(function() {
		function a(a) {
			return function() {
				return a
			}
		}
		Z = {
			Of: a(0),
			Jf: a(1),
			Kf: a(2),
			ym: a(3),
			Ch: a(4),
			Lf: a(5),
			sh: a(45),
			th: a(6),
			wh: a(7),
			Zc: a(8),
			Dh: a(9),
			Bn: a(10),
			Hh: a(11),
			xh: a(12),
			ln: a(13),
			zh: a(14),
			kn: a(15),
			yh: a(16),
			Dn: a(17),
			Eh: a(18),
			dk: a(19),
			vm: a(20),
			rh: a(21),
			Ah: a(22),
			cn: a(23),
			bn: a(24),
			$m: a(25),
			Cn: a(26),
			An: a(27),
			an: a(28),
			uh: a(29),
			Fh: a(30),
			ck: a(32),
			bk: a(33),
			Gh: a(34),
			gl: a(35),
			zk: a(36),
			fl: a(37),
			Nf: a(38),
			Tl: a(39),
			If: a(40),
			vh: a(41),
			Mf: a(46)
		}
	})();

	function $r(a) {
		return ia + X(a.wa) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a.dir) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(a.id) + '" class="goog-te-menu"></div></body>'
	}

	function as(a) {
		return ia + X(a.wa) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a.dir) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + X(wk(a.fj)) + '" class="goog-logo-link" target="_blank"><img src="' + X(Bk(a.df)) + '" alt="Google ' + X(Z.Zc) + '"></a></td>' + (a.oc ? '<td width=1><img src="' + X(Bk(a.xc)) + '" width="9" height="15" title="' + X(a.oc) + '" alt="' + X(a.oc) + aa + X(Bk(a.Rc)) + ');background-position:-56px 0px;margin:0 4px"></td>' :
				"") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(a.zj) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + ok(a.yj) + ha + X(a.Sh) + '"><b>' + ok(Z.Of) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.kj) + '"></button></div></div></td></tr><tr id="' + X(a.xj) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' +
			ok(Z.Dh) + '&nbsp;<span dir="ltr">(<b id="' + X(a.wj) + '"></b>%)</span>&nbsp;<img src="' + X(Bk(a.Vi)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.Oh) + '">' + ok(Z.Jf) + fa + X(a.ci) + '" style="display:none"><td><span class="goog-te-banner-content">' + ok(a.bi) + ha + X(a.Bj) + '">' + ok(Z.xh) + fa + X(a.Zh) + '" style="display:none" valign=middle><td><span id="' + X(a.Vh) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' +
			X(a.Rh) + '" class="goog-close-link" href="javascript:void(0)" title="' + X(Z.Kf) + '"><img src="' + X(Bk(a.xc)) + '" width="15" height="15" alt="' + X(Z.Kf) + aa + X(Bk(a.Rc)) + ');background-position:-28px 0px"></a></td></tr></table></body>'
	}

	function bs(a) {
		return '<span id="' + X(a.id) + '"></span>'
	}

	function cs(a) {
		return ok(a.Vg) + '<div id="' + X(a.id) + '"></div>' + ok(a.Ug)
	}

	function ds() {
		var a = G && !J("7.0");
		return '<span style="white-space:nowrap"><a class="goog-logo-link" href="' + X(wk(ub)) + '" target="_blank">' + (a ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + "p.png".replace(Jk, Hk) + "',sizingMethod='scale');\"></span>" : '<img src="' + X(Bk("p.png")) +
			'" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + X(Z.Zc) + '">') + ok(Z.Zc) + "</a></span>"
	}

	function es(a) {
		return ia + X(a.wa) + '"></head><body class="goog-te-ftab ' + X(a.md) + '" scroll="no" style="overflow:hidden" dir="' + X(a.dir) + '"><a id="' + X(a.Wj) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(Bk(a.xc)) + aa + X(Bk(a.Rc)) + ');background-position:-65px 0px"><span>' + ok(Z.Of) + "</span></a></body>"
	}

	function fs(a) {
		var b = a.df;
		return '<div id="goog-gt-tt" style="display:none" class="skiptranslate" dir="' + X(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + X(Bk(b)) + '" width="20" height="20" alt="Google ' + X(Z.Zc) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + ok(Z.vh) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>'
	}

	function gs(a) {
		var b = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(wk(a.Kh)) + '" method="' + X(a.method) + '"><div class="form-buttons" style="text-align:';
		var c = a.dir;
		c = zc(c) && zc(Sb) ? c.Hb !== "rtl".Hb ? !1 : c.toString() === "rtl".toString() : c == Sb;
		b = b + (c ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + X(Z.Ah) + '"><input class="activity-cancel" type="button" value="' + X(Z.Jf) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
		a = a.ai;
		c = a.length;
		for(var d = 0; d < c; d++) b += '<input type="hidden" name="' + X(a[d]) + '"/>';
		return b + "</div></form></div>"
	}

	function hs() {
		return pk('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
	}

	function is(a) {
		return '<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + ok(a.Oi) + '</div><div class="activity-form-container"></div></div>'
	}

	function js() {
		return pk('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
	};

	function ks(a) {
		T.call(this);
		a = a || {};
		this.id = a.id || qi(this);
		this.bf = a.bf || "";
		this.Rd = a.Rd || null;
		this.Sd = a.Sd || null;
		this.fd = a.fd || !1;
		this.className = a.className || null;
		this.c = null
	}
	E(ks, T);
	ks.prototype.kc = ic("c");
	ks.prototype.Tb = function() {
		if(!this.V) throw Error("Activity must be rendered before it can be resumed.");
		if(!this.c) throw Error("Activity must have a tooltip instance to be resumed");
	};
	ks.prototype.Ab = hc();
	ks.prototype.M = function() {
		this.sb || (ks.m.M.call(this), delete this.Sd)
	};

	function ls() {
		li.call(this);
		this.c = "closure_frame" + ms++;
		this.b = [];
		ns[this.c] = this
	}
	var os;
	E(ls, li);
	var ns = {},
		ms = 0;

	function ps(a, b) {
		var c = Uf(a);
		Gj(b, function(b, e) {
			C(b) || (b = [b]);
			Oc(b, function(b) {
				b = c.D(oa, {
					type: rb,
					name: e,
					value: b
				});
				a.appendChild(b)
			})
		})
	}
	v = ls.prototype;
	v.va = null;
	v.Z = null;
	v.la = null;
	v.Ob = null;
	v.jj = 0;
	v.na = !1;
	v.yc = !1;
	v.$d = !1;
	v.pb = null;
	v.$e = null;
	v.Ha = 0;
	v.Nb = null;
	v.send = function(a, b, c, d) {
		if(this.na) throw Error(ya);
		this.pb = a = new Jj(a);
		b = b ? b.toUpperCase() : "GET";
		c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Hc()).toString(36), a.a.set("zx", c));
		os || (os = hg("FORM"), os.acceptCharset = "utf-8", c = os.style, c.position = Ba, c.visibility = rb, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = rb, document.body.appendChild(os));
		this.Z = os;
		"GET" == b && ps(this.Z, a.a);
		d && ps(this.Z, d);
		this.Z.action = a.toString();
		this.Z.method =
			b;
		qs(this);
		rs(this)
	};

	function ss(a, b) {
		if(a.na) throw Error(ya);
		var c = new Jj(b.action);
		a.pb = c;
		a.Z = b;
		a.Z.action = c.toString();
		qs(a)
	}
	v.abort = function(a) {
		this.na && (bi(ts(this)), this.$d = this.na = this.yc = !1, this.Ha = a || 7, this.dispatchEvent("abort"), us(this))
	};
	v.F = function() {
		this.na && this.abort();
		ls.m.F.call(this);
		this.la && vs(this);
		rs(this);
		delete this.f;
		this.pb = this.$e = this.Z = null;
		this.Ha = 0;
		delete ns[this.c]
	};
	v.Od = r("yc");
	v.Sc = r("$d");
	v.ec = r("na");
	v.Kb = r("$e");
	v.De = r("pb");
	v.Ce = r("Ha");

	function qs(a) {
		a.na = !0;
		a.yc = !1;
		a.Ha = 0;
		a.Ob = a.c + "_" + (a.jj++).toString(36);
		a.la = Uf(a.Z).D(ma, {
			name: a.Ob,
			id: a.Ob
		});
		G && 7 > Number(je) && (a.la.src = 'javascript:""');
		var b = a.la.style;
		b.visibility = rb;
		b.width = b.height = "10px";
		b.display = q;
		I ? b.marginTop = b.marginLeft = "-10px" : (b.position = Ba, b.top = b.left = "-10px");
		if(G && !J("11")) {
			a.Z.target = a.Ob || "";
			Uf(a.Z).a.body.appendChild(a.la);
			S(a.la, Rb, a.nf, !1, a);
			try {
				a.a = !1, a.Z.submit()
			} catch(y) {
				$h(a.la, Rb, a.nf, !1, a), ws(a, 1)
			}
		} else {
			Uf(a.Z).a.body.appendChild(a.la);
			b = a.Ob + "_inner";
			var c = Bg(a.la);
			if(document.baseURI) {
				var d = gd(b);
				d = Mf('<head><base href="' + gd(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>', null)
			} else d = gd(b), d = Mf('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
			Ud && !I ? Pf(c.documentElement, Gf(d)) : c.write(Gf(d));
			S(c.getElementById(b), Ab, a.Ud, !1, a);
			var e = Xf(va, a.Z);
			d = 0;
			for(var g = e.length; d < g; d++) {
				var h = e[d].value;
				Lg(e[d]) != h && (Dg(e[d], h), e[d].value = h)
			}
			e = c.importNode(a.Z, !0);
			e.target = b;
			e.action = a.Z.action;
			c.body.appendChild(e);
			h = Xf("SELECT", a.Z);
			var k = Xf("SELECT", e);
			d = 0;
			for(g = h.length; d < g; d++)
				for(var l = Xf(qa, h[d]), m = Xf(qa, k[d]), n = 0, t = l.length; n < t; n++) m[n].selected = l[n].selected;
			h = Xf(oa, a.Z);
			k = Xf(oa, e);
			d = 0;
			for(g = h.length; d < g; d++)
				if("file" == h[d].type && h[d].value != k[d].value) {
					a.Z.target = b;
					e = a.Z;
					break
				}
			try {
				a.a = !1, e.submit(), c.close(), H && sl(a.lh, 250, a)
			} catch(y) {
				$h(c.getElementById(b), Ab, a.Ud, !1, a), c.close(), ws(a, 2)
			}
		}
	}
	v.nf = function() {
		if(this.la.readyState == Ua) {
			$h(this.la, Rb, this.nf, !1, this);
			try {
				var a = Bg(this.la);
				if(G && a.location == za && !navigator.onLine) {
					ws(this, 9);
					return
				}
			} catch(b) {
				ws(this, 1);
				return
			}
			xs(this, a)
		}
	};
	v.Ud = function() {
		if(!Ud || I || (this.la ? Bg(ts(this)) : null).location != za) {
			$h(ts(this), Ab, this.Ud, !1, this);
			try {
				xs(this, this.la ? Bg(ts(this)) : null)
			} catch(a) {
				ws(this, 1)
			}
		}
	};

	function xs(a, b) {
		a.yc = !0;
		a.na = !1;
		try {
			var c = b.body;
			a.$e = c.textContent || c.innerText
		} catch(e) {
			var d = 1
		}
		d || typeof a.f != p || (b = a.f(b)) && (d = 4);
		d ? ws(a, d) : (a.$d = !0, a.Ha = 0, a.dispatchEvent(Ua), a.dispatchEvent("success"), us(a))
	}

	function ws(a, b) {
		a.a || (a.$d = !1, a.na = !1, a.yc = !0, a.Ha = b, a.dispatchEvent(Ua), a.dispatchEvent("error"), us(a), a.a = !0)
	}

	function us(a) {
		vs(a);
		rs(a);
		a.Z = null;
		a.dispatchEvent(Qb)
	}

	function vs(a) {
		var b = a.la;
		b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.b.push(b));
		a.Nb && (tl(a.Nb), a.Nb = null);
		H || Ud && !I ? a.Nb = sl(a.Yf, 2E3, a) : a.Yf();
		a.la = null;
		a.Ob = null
	}
	v.Yf = function() {
		this.Nb && (tl(this.Nb), this.Nb = null);
		for(; 0 != this.b.length;) {
			var a = this.b.pop();
			rg(a)
		}
	};

	function rs(a) {
		a.Z && a.Z == os && og(a.Z)
	}

	function ts(a) {
		return a.la ? G && !J("11") ? a.la : Bg(a.la).getElementById(a.Ob + "_inner") : null
	}
	v.lh = function() {
		if(this.na) {
			var a = this.la ? Bg(ts(this)) : null;
			a && !Rd(a, "documentUri") ? ($h(ts(this), Ab, this.Ud, !1, this), navigator.onLine ? ws(this, 3) : ws(this, 9)) : sl(this.lh, 250, this)
		}
	};

	function ys(a, b) {
		T.call(this);
		this.l = a || "";
		this.c = null;
		this.h = [];
		this.a = null;
		this.o = b || "GET";
		this.f = this.g = null
	}
	E(ys, T);
	v = ys.prototype;
	v.D = function() {
		var a = {
			Kh: this.l,
			method: this.o,
			ai: this.h,
			dir: af.test(yq) ? Sb : "ltr"
		};
		this.T(jk(gs, a))
	};
	v.T = function(a) {
		this.A = a;
		this.a = si(this, "activity-form");
		a = si(this, "activity-submit");
		this.f = new rj("");
		wi(this.f, a);
		a = si(this, "activity-cancel");
		this.c = new rj("");
		wi(this.c, a)
	};
	v.P = function() {
		var a = U(this);
		a.w(this.f, Ca, D(this.Kj, this));
		a.w(this.c, Ca, D(this.dispatchEvent, this, Na))
	};
	v.Kj = function() {
		var a = !0;
		this.g && (a = this.g());
		a && (a = new ls, S(a, "success", function() {
			this.dispatchEvent("successful")
		}), S(a, "error", function() {
			this.dispatchEvent("failed")
		}), ss(a, this.a));
		this.dispatchEvent(Xb)
	};

	function zs(a, b) {
		for(var c in b) a.a[c] && (a.a[c].value = b[c])
	}

	function As(a, b) {
		return a.a[b] ? a.a[b].value : ""
	}
	v.F = function() {
		this.f = this.a = this.c = null;
		ys.m.F.call(this)
	};

	function Bs(a, b) {
		a.g = b
	};

	function Cs(a, b) {
		ks.call(this, a);
		this.f = null;
		this.o = b || {};
		this.h = new cn;
		this.l = this.a = null;
		this.g = new Nr((a || {}).Za || "", hq);
		this.g.l = !1
	}
	E(Cs, ks);
	var hq = Eq.replace("_", "-") + "-alt";
	v = Cs.prototype;
	v.kc = function(a) {
		Cs.m.kc.call(this, a);
		this.g.g(D(this.Tb, this))
	};
	v.Tb = function() {
		Cs.m.Tb.call(this);
		var a = this.c.K,
			b = this.c.o;
		if(a && b) {
			Dg(this.l, a);
			var c = this.h;
			c.A = b;
			pg(c.a, c.A);
			dn(c);
			P(this.h.a, !0);
			b = this.c.bb();
			c = this.c.oa();
			if(this.g.Ua() && b && c) {
				var d = this.c.Oc(),
					e = D(this.oj, this);
				this.g && this.g.translate(e, {
					sj: [d],
					Tn: !0,
					Wn: !1
				}.sj, b, c, 0, !1);
				zs(this.a, {
					gtrans: a,
					text: this.c.Oc(),
					hl: yq,
					langpair: b + "|" + c
				});
				zs(this.a, this.o);
				zs(this.a, {
					client: hq
				})
			}
			this.dispatchEvent(Qb)
		}
	};
	v.D = function() {
		this.T(jk(is, {
			Oi: Z.If
		}))
	};
	v.T = function(a) {
		this.A = a;
		this.l = si(this, "alt-translated-text");
		var b = si(this, Ea);
		this.a = new ys(Oq, sa);
		this.a.h = Cd(this.o);
		Bs(this.a, D(function() {
			zs(this.a, {
				utrans: rq(this.f)
			});
			return As(this.a, "utrans") != As(this.a, "gtrans")
		}, this));
		this.a.ga(b);
		lp = Z.Gh;
		ap = Z.If;
		this.f = new dq(void 0, !0, a);
		eq(this.f, this.h);
		fq(this.f);
		gq(this.f);
		wi(this.f, this.l)
	};
	v.P = function() {
		Cs.m.P.call(this);
		var a = U(this);
		a.w(this.a, Na, D(function() {
			uq(this.f);
			this.dispatchEvent(Na)
		}, this));
		a.w(this.a, Xb, D(function() {
			var a = rq(this.f);
			this.c.K = a && bd(a);
			this.dispatchEvent(Xb);
			Dg(this.c.Xb().j(), Z.Nf)
		}, this))
	};
	v.oj = function(a) {
		a && iq(this.f, a)
	};
	v.Ab = function() {
		P(this.h.a, !1)
	};
	v.F = function() {
		this.f && this.f.M();
		this.l = this.h = this.f = null;
		this.g && this.g.M();
		this.g = null;
		this.a && this.a.M();
		this.a = null;
		Cs.m.F.call(this)
	};

	function Ds(a, b) {
		ks.call(this, a);
		this.h = !1;
		this.g = b || {};
		this.f = null
	}
	E(Ds, ks);
	v = Ds.prototype;
	v.kc = function(a) {
		Ds.m.kc.call(this, a);
		U(this).w(this.f.j(), xb, D(this.c.Vc, this.c, !1));
		this.h = this.c.vc;
		this.Tb()
	};
	v.Tb = function() {
		Ds.m.Tb.call(this);
		this.f.Mb(this.c.K);
		var a = this.c.bb(),
			b = this.c.oa();
		a && b && (zs(this.a, {
			gtrans: this.c.K,
			text: this.c.Oc(),
			hl: yq,
			langpair: a + "|" + b
		}), zs(this.a, this.g));
		this.dispatchEvent(Qb);
		this.f.j().focus()
	};
	v.Ab = function() {
		this.c.Vc(this.h)
	};
	v.D = function() {
		this.T(jk(hs))
	};
	v.T = function(a) {
		this.A = a;
		a = si(this, "contribute-original-text");
		this.f = new np("");
		wi(this.f, a);
		tp(this.f);
		rp(this.f);
		a = si(this, Ea);
		this.a = new ys(Oq, sa);
		this.a.h = Cd(this.g);
		Bs(this.a, D(function() {
			zs(this.a, {
				utrans: bd(this.f.Ba())
			});
			return As(this.a, "utrans") != As(this.a, "gtrans")
		}, this));
		this.a.ga(a)
	};
	v.P = function() {
		Ds.m.P.call(this);
		var a = U(this);
		a.w(this.a, Na, D(function() {
			this.dispatchEvent(Na)
		}, this));
		a.w(this.a, Xb, D(function() {
			var a = this.f.Ba();
			this.c.K = a && bd(a);
			this.dispatchEvent(Xb);
			Dg(this.c.Xb().j(), Z.Nf)
		}, this))
	};
	v.F = function() {
		this.f && this.f.M();
		this.f = null;
		this.a && this.a.M();
		this.a = null;
		Ds.m.F.call(this)
	};

	function Es(a) {
		li.call(this);
		this.h = a;
		this.g = {};
		this.c = new fi(this);
		this.f = null
	}
	E(Es, li);
	Es.prototype.jh = hc();
	Es.prototype.kh = hc();
	Es.prototype.F = function() {
		this.c.M();
		this.c = null
	};

	function Fs(a, b, c) {
		if(b = a.h.c[b]) {
			c = c || "undefined" == typeof c;
			for(var d = 0; d < b.Ca.length; ++d) b.Ca[d] && a.Cg(b.Ca[d], c)
		}
	}
	Es.prototype.Cg = function(a, b) {
		O(a, "backgroundColor", b ? "#E6ECF9" : "");
		O(a, "color", b ? "#000" : "")
	};
	var Fd = {},
		Gs = null;

	function Hs(a) {
		a = Bc(a);
		delete Fd[a];
		Ed() && Gs && Gs.stop()
	}

	function Is() {
		Gs || (Gs = new ul(function() {
			Js()
		}, 20));
		var a = Gs;
		a.ec() || a.start()
	}

	function Js() {
		var a = Hc();
		Ad(Fd, function(b) {
			Ks(b, a)
		});
		Ed() || Is()
	};

	function Ls(a, b, c, d) {
		Em.call(this);
		if(!C(a) || !C(b)) throw Error("Start and end parameters must be arrays");
		if(a.length != b.length) throw Error("Start and end points must be the same length");
		this.g = a;
		this.B = b;
		this.duration = c;
		this.o = d;
		this.coords = [];
		this.progress = 0
	}
	E(Ls, Em);
	v = Ls.prototype;
	v.play = function(a) {
		if(a || 0 == this.a) this.progress = 0, this.coords = this.g;
		else if(1 == this.a) return !1;
		Hs(this);
		this.b = a = Hc(); - 1 == this.a && (this.b -= this.duration * this.progress);
		this.endTime = this.b + this.duration;
		this.progress || this.c();
		this.Pa("play"); - 1 == this.a && this.Pa("resume");
		this.a = 1;
		var b = Bc(this);
		b in Fd || (Fd[b] = this);
		Is();
		Ks(this, a);
		return !0
	};
	v.stop = function(a) {
		Hs(this);
		this.a = 0;
		a && (this.progress = 1);
		Ms(this, this.progress);
		this.Ab();
		this.f()
	};
	v.yf = function(a) {
		this.progress = a;
		1 == this.a && (this.b = Hc() - this.duration * this.progress, this.endTime = this.b + this.duration)
	};
	v.F = function() {
		0 == this.a || this.stop(!1);
		this.Pa("destroy");
		Ls.m.F.call(this)
	};

	function Ks(a, b) {
		b < a.b && (a.endTime = b + a.endTime - a.b, a.b = b);
		a.progress = (b - a.b) / (a.endTime - a.b);
		1 < a.progress && (a.progress = 1);
		Ms(a, a.progress);
		1 == a.progress ? (a.a = 0, Hs(a), a.Pa(ab), a.f()) : 1 == a.a && a.kf()
	}

	function Ms(a, b) {
		zc(a.o) && (b = a.o(b));
		a.coords = Array(a.g.length);
		for(var c = 0; c < a.g.length; c++) a.coords[c] = (a.B[c] - a.g[c]) * b + a.g[c]
	}
	v.kf = function() {
		this.Pa("animate")
	};
	v.Pa = function(a) {
		this.dispatchEvent(new Ns(a, this))
	};

	function Ns(a, b) {
		Ah.call(this, a);
		this.coords = b.coords;
		this.x = b.coords[0];
		this.y = b.coords[1];
		this.duration = b.duration;
		this.progress = b.progress
	}
	E(Ns, Ah);

	function Os(a, b, c, d, e) {
		Ls.call(this, b, c, d, e);
		this.h = a
	}
	E(Os, Ls);
	Os.prototype.s = A;
	Os.prototype.kf = function() {
		this.s();
		Os.m.kf.call(this)
	};
	Os.prototype.f = function() {
		this.s();
		Os.m.f.call(this)
	};
	Os.prototype.c = function() {
		this.s();
		Os.m.c.call(this)
	};

	function Ps(a, b, c, d, e) {
		uc(b) && (b = [b]);
		uc(c) && (c = [c]);
		Os.call(this, a, b, c, d, e);
		if(1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
		this.l = -1
	}
	E(Ps, Os);
	var Qs = 1 / 1024;
	Ps.prototype.s = function() {
		var a = this.coords[0];
		if(Math.abs(a - this.l) >= Qs) {
			var b = this.h.style;
			"opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
			this.l = a
		}
	};
	Ps.prototype.c = function() {
		this.l = -1;
		Ps.m.c.call(this)
	};
	Ps.prototype.f = function() {
		this.l = -1;
		Ps.m.f.call(this)
	};

	function Rs(a, b, c) {
		Ps.call(this, a, 1, 0, b, c)
	}
	E(Rs, Ps);
	Rs.prototype.c = function() {
		this.h.style.display = "";
		Rs.m.c.call(this)
	};
	Rs.prototype.f = function() {
		this.h.style.display = q;
		Rs.m.f.call(this)
	};

	function Ss(a, b, c) {
		Ps.call(this, a, 0, 1, b, c)
	}
	E(Ss, Ps);
	Ss.prototype.c = function() {
		this.h.style.display = "";
		Ss.m.c.call(this)
	};

	function Ts() {
		T.call(this);
		this.a = null
	}
	E(Ts, T);
	v = Ts.prototype;
	v.D = function() {
		this.T(this.b.D(f, {
			"class": Vb
		}))
	};
	v.T = function(a) {
		this.A = a;
		a.style.display = q
	};

	function Us(a) {
		var b = c;
		var c = D(function() {
			Dg(this.j(), "");
			b && b()
		}, a);
		c = D(a.Pi, a, 750, c);
		Vs(a, c)
	}

	function Ws(a) {
		a.a && (a.a.stop(!0), a.a = null);
		Dg(a.j(), "");
		a.J(!1)
	}

	function Vs(a, b) {
		a.a = new Ss(a.j(), 750);
		U(a).zb(a.a, "begin", D(function() {
			this.j().style.display = "block"
		}, a));
		U(a).zb(a.a, ab, D(function() {
			this.a = null;
			window.setTimeout(b, 2E3)
		}, a));
		a.a.play()
	}
	v.Pi = function(a, b) {
		this.N() && (this.a = new Rs(this.j(), a), U(this).zb(this.a, ab, D(function() {
			b && b()
		}, this)), this.a.play())
	};
	v.J = function(a) {
		this.j().style.display = a ? "block" : q;
		this.j().style.opacity = a ? "1" : "0"
	};
	v.N = function() {
		return this.j().style.display !== q && "0" !== this.j().style.opacity
	};

	function Xs() {
		No.call(this);
		this.R = {};
		this.gb = {};
		this.I = null;
		this.$c = !1;
		this.rb = this.f = this.H = null;
		this.X = {};
		this.l = new fi(this);
		this.o = this.c = this.g = this.Xa = this.a = this.K = this.ra = null;
		this.C = !0;
		this.Ya = []
	}
	E(Xs, No);
	v = Xs.prototype;
	v.ga = function() {
		this.C = !1;
		var a = af.test(yq) ? Sb : "ltr";
		this.ac(jk(fs, {
			df: "p.png",
			xc: vb,
			Rc: Jq,
			dir: a
		}));
		this.className += " skiptranslate";
		this.j() && this.I && this.Xa && this.g.j() && this.H && this.o && (this.l.w(window, "resize", D(this.lb, this)), this.l.w(this, sb, D(this.qj, this)), this.Ya.length && (this.ie.apply(this, this.Ya), this.Ya = []))
	};
	v.ie = function(a) {
		for(var b = [], c = 0; c < arguments.length; ++c) {
			var d = arguments[c];
			if(d)
				if(this.I || d.Sd) {
					var e = d;
					var g = hg(ua, {
						"class": e.className || "activity-link"
					});
					Dg(g, e.bf || "");
					e = g;
					b.push(e);
					ng(d.Sd || this.I, e);
					d.kc && d.Ab && (g = D(this.ii, this, d), this.l.w(e, Sa, g), d.Rd && this.l.w(this.H, d.Rd, g));
					d.id = d.id || qi(d);
					this.R[d.id] && this.Wg(d);
					this.R[d.id] = d;
					this.gb[d.id] = e
				} else this.Ya.push(d)
		}
		return b
	};
	v.Wg = function(a) {
		for(var b = 0; b < arguments.length; ++b) {
			var c = z(arguments[b]) || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
				d = this.R[c],
				e = this.gb[c];
			d && e && (this.f && this.f.id === c && this.qe(), this.l.ca(d, [Xb, Na]), d.M(), this.X[c] && delete this.X[c], delete this.R[c], delete this.gb[c], rg(e))
		}
	};
	v.ii = function(a) {
		if(this.H) {
			a != this.f && this.f && (Ws(this.g), this.f.Ab.call(this.f), this.f.j() && (this.f.j().style.display = q), Ys(this, !1), this.f = null);
			Ys(this, !0);
			Ws(this.g);
			this.f = a;
			if(this.X[a.id]) {
				var b = this.X[a.id];
				var c = a.Tb
			} else a.ga(), b = a.j(), c = a.kc, this.l.w(a, [Xb, Na], D(this.qe, this)), a.fd && (this.X[a.id] = b);
			ng(this.H, b);
			c.call(a, this);
			a = new Ss(b, 100);
			this.l.zb(a, ab, D(this.lb, this, !0, !0));
			a.play()
		}
	};
	v.qe = function() {
		if(this.f)
			if(Ws(this.g), this.f.Ab.call(this.f), this.f.j()) {
				var a = new Rs(this.f.j(), 100);
				this.l.zb(a, ab, D(function() {
					rg(this.f.j());
					this.f = null;
					Ys(this, !1);
					Jg(this.g.j()) && (Us(this.g), this.lb(!0, !0))
				}, this));
				a.play()
			} else Ys(this, !1), this.f = null
	};
	v.gf = function(a, b) {
		this.rb = a;
		Xs.m.gf.call(this, a, b);
		this.j().style.display = "block"
	};
	v.Ne = function(a) {
		if(!this.C) {
			var b = Wo(this, a.target);
			this.Aa = b;
			this.Vb();
			b != this.b ? (this.b = b, Xo(this, b), Yo(this), Vo(this, a)) : Xo(this, b)
		}
	};
	v.qj = function() {
		Ws(this.g);
		this.$c && this.qe()
	};
	v.F = function() {
		for(var a in this.R) this.Wg(a);
		this.l && this.l.M();
		this.l = null;
		this.g && this.g.M();
		this.o = this.Xa = this.rb = this.H = this.I = this.g = null;
		Xs.m.F.call(this)
	};

	function Ys(a, b) {
		a.$c = b;
		a.C = b;
		if(a.C) {
			var c = a.j();
			a.ra = new L(c.offsetLeft, c.offsetTop)
		} else a.ra && (null != (a.s || null) && ((a.s || null).a = a.ra), Ug(a.j(), a.ra), a.ra = null);
		a.I.style.display = b ? q : "inline-block";
		a.Xa.style.display = b ? "inline-block" : q
	}
	v.Vc = function(a) {
		this.N() ? (this.vc = a, (this.vc ? this.h.w : this.h.ca).call(this.h, N(this.j()), Bb, this.lf, !0)) : Xs.m.Vc.call(this, a)
	};
	v.ac = function(a) {
		Xs.m.ac.call(this, a);
		if(a) {
			this.I = $f("activity-links", a);
			var b = $f(Vb, a);
			b && (this.g = new Ts, wi(this.g, b));
			this.Xa = $f("started-activity-container", a);
			this.H = $f("activity-root", a);
			this.o = $f("original-text", a)
		}
	};
	v.lb = function(a, b) {
		var c = $g(document.body).y;
		if(this.s) {
			(this.s || null).a.y += c;
			Xs.m.lb.call(this);
			var d = parseInt(this.j().style.left, 10);
			a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
			b && (b = this.ef || {}, a -= b.top || 10, d -= b.left || 10);
			a -= c;
			(this.s || null).a.y = a;
			(this.s || null).a.x = d;
			Ug(this.j(), new L(d, a))
		}
	};
	v.J = function(a) {
		Xs.m.J.call(this, a)
	};
	v.Sb = ic("a");
	v.ua = ic("c");
	v.Oa = function(a) {
		a = a ? bd(a) : "";
		this.o ? Dg(this.o, a) : Xs.m.Oa.call(this, a)
	};
	v.bb = r("a");
	v.Xb = r("g");
	v.oa = r("c");
	v.Oc = function() {
		return this.o ? Jg(this.o) : Xs.m.Oc.call(this)
	};
	v.bc = function(a) {
		this.C || Xs.m.bc.call(this, a)
	};
	v.Jd = function(a) {
		this.C || Xs.m.Jd.call(this, a)
	};
	v.Id = function(a) {
		this.C || Xs.m.Id.call(this, a)
	};
	var Zs = {
		set: function(a, b) {
			a.className = b
		},
		get: function(a) {
			a = a.className;
			return z(a) && a.match(/\S+/g) || []
		},
		add: function(a, b) {
			var c = Zs.get(a),
				d = Zc(arguments, 1),
				e = c.length + d.length;
			Zs.Qf(c, d);
			Zs.set(a, c.join(" "));
			return c.length == e
		},
		remove: function(a, b) {
			var c = Zs.get(a),
				d = Zc(arguments, 1),
				e = Zs.dg(c, d);
			Zs.set(a, e.join(" "));
			return e.length == c.length - d.length
		},
		Qf: function(a, b) {
			for(var c = 0; c < b.length; c++) Uc(a, b[c]) || a.push(b[c])
		},
		dg: function(a, b) {
			return Pc(a, function(a) {
				return !Uc(b, a)
			})
		},
		Lj: function(a, b,
			c) {
			for(var d = Zs.get(a), e = !1, g = 0; g < d.length; g++) d[g] == b && (Yc(d, g--, 1), e = !0);
			e && (d.push(c), Zs.set(a, d.join(" ")));
			return e
		},
		Qn: function(a, b, c) {
			var d = Zs.get(a);
			z(b) ? Vc(d, b) : C(b) && (d = Zs.dg(d, b));
			z(c) && !Uc(d, c) ? d.push(c) : C(c) && Zs.Qf(d, c);
			Zs.set(a, d.join(" "))
		},
		has: function(a, b) {
			return Uc(Zs.get(a), b)
		},
		enable: function(a, b, c) {
			c ? Zs.add(a, b) : Zs.remove(a, b)
		},
		toggle: function(a, b) {
			var c = !Zs.has(a, b);
			Zs.enable(a, b, c);
			return c
		}
	};

	function $s(a, b) {
		Es.call(this, a);
		b = b || {};
		this.a = {
			Za: b.Za || "",
			Jb: b.Jb || 1
		};
		this.b = null
	}
	E($s, Es);
	v = $s.prototype;
	v.jh = function(a, b) {
		b && (b.a = a, Oo(this.b, b))
	};
	v.kh = function(a) {
		a && Qo(this.b, a)
	};
	v.Tj = function() {
		var a = this.b.rb;
		if(a && void 0 !== a.a) {
			var b = a.a;
			a = this.h.c[b];
			Fs(this, this.f, !1);
			this.f = b;
			Fs(this, b);
			this.b.Sb(a.Jj);
			this.b.ua(a.Uj);
			b = a.U;
			this.b.K = b && bd(b);
			this.b.Oa(a.text)
		}
	};
	v.Sj = function() {
		Fs(this, this.f, !1)
	};
	v.Rg = function() {
		this.h.c[this.f].$h.dispatchEvent("updating")
	};
	v.F = function() {
		this.b.M();
		this.b = null;
		$s.m.F.call(this)
	};
	v.Cg = function(a, b) {
		Zs[b ? "add" : "remove"](a, "goog-text-highlight")
	};
	/*

	Math.uuid.js (v1.4)
	http://www.broofa.com
	mailto:robert@broofa.com
	Copyright (c) 2010 Robert Kieffer
	Dual licensed under the MIT and GPL licenses.
	*/
	var at = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

	function bt(a) {
		this.h = a;
		this.c = this.a = this.f = this.b = -1;
		this.g = !1;
		this.s = 0;
		this.o = "";
		this.B = 0
	}
	bt.prototype.start = function() {
		if(!this.g) {
			this.g = !0;
			var a = [],
				b;
			var c = 62;
			for(b = 0; 15 > b; b++) a[b] = at[0 | Math.random() * c];
			this.o = a.join("");
			this.s = 0;
			this.c = this.a = this.f = this.b = -1;
			this.B = Hc();
			sl(this.l, 1E4, this)
		}
	};
	bt.prototype.stop = function() {
		this.g && (this.g = !1, ct(this))
	};
	bt.prototype.l = function() {
		this.g && (ct(this), sl(this.l, 1E3, this))
	};

	function ct(a) {
		var b = a.h.f,
			c = a.h.h,
			d = a.h.c,
			e = a.h.g;
		if(a.b != b || a.f != c || a.a != d || a.c != e) {
			var g = {};
			g.ct = b;
			g.cv = c;
			g.cts = d;
			g.cvs = e;
			g.sid = a.o;
			g.seq = a.s++;
			g.tat = Hc() - a.B;
			if(0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c) g.pt = a.b, g.pv = a.f, g.pts = a.a, g.pvs = a.c;
			$q("te_v", g);
			a.b = b;
			a.f = c;
			a.a = d;
			a.c = e
		}
	};

	function dt() {
		this.g = this.c = this.h = this.f = 0;
		this.a = [];
		this.b = null != w.IntersectionObserver ? new IntersectionObserver(D(this.l, this)) : null
	}
	gr(36546, dt.prototype, {
		Fg: 1
	});
	var et = "_gt_" + Math.random().toString(36).substr(2);
	dt.prototype.reset = function() {
		this.g = this.c = this.h = this.f = 0;
		this.a = []
	};
	dt.prototype.l = function(a) {
		for(var b = 0; b < a.length; b++) {
			var c = a[b];
			if(0 < c.intersectionRatio && null != c.target[et]) {
				this.h += Jg(c.target).length;
				var d = c.target[et];
				this.g += this.a[d];
				this.a[d] = 0;
				c.target[et] = void 0
			}
		}
	};

	function ft(a, b) {
		Q.call(this);
		a = a || {};
		this.a = Hd(a);
		this.a.Jb = a.Jb;
		this.a.Bf = !!a.Bf;
		this.a.Th = parseInt(a.Th, 10) || 300;
		this.a.vj = a.vj;
		this.a.Yc = a.Yc || !1;
		this.h = 0;
		this.c = {};
		this.l = new fi(this);
		this.f = new $s(this, this.a);
		b && (this.f.g = b || {});
		a = this.f;
		a.b = new Xs({
			Ij: a.a.Ij
		});
		a.b.Bg = 300;
		a.b.fh = 1E3;
		a.b.Vc(!0);
		a.c.w(a.b, "show", D(a.Tj, a));
		a.c.w(a.b, sb, D(a.Sj, a));
		b = new Cs({
			Za: a.a.Za,
			id: "alternate",
			bf: Z.rh,
			fd: !0
		}, a.g);
		a.b.ie(b);
		a.c.w(b, Xb, D(a.Rg, a));
		a.a.Jb && (b = new Ds({
				id: "contribute",
				Rd: Xa,
				fd: !0
			}, a.g), a.b.ie(b),
			a.c.w(b, Xb, D(a.Rg, a)));
		a.b.ga();
		this.g = this.b = null;
		this.a.Yc && null != w.IntersectionObserver && (this.b = new dt, this.g = new bt(this.b))
	}
	E(ft, Q);

	function gt(a, b, c, d, e, g) {
		d = a.c[++a.h] = {
			id: a.h.toString(),
			$h: g,
			text: c,
			Xn: e || c,
			U: d,
			Jj: a.s,
			Uj: a.o,
			Ca: b
		};
		for(e = 0; e < b.length; ++e) b[e] && a.f.jh(d.id, b[e]);
		if(a.b)
			for(e = a.b, g = c.length, e.c += g, c = e.a.length, e.a.push(g), g = 0; g < b.length; ++g) {
				var h = e,
					k = b[g];
				vg(k) ? (k[et] = c, h.f += Jg(k).length, h.b && h.b.observe(k)) : h.Fg(k.nodeType)
			}
		a.g && a.g.start();
		return d.id
	}

	function ht(a) {
		a.g && a.g.stop();
		for(var b in a.c) {
			var c = a,
				d = b,
				e = c.c[d];
			if(e) {
				if(c.b)
					for(var g = c.b, h = e.Ca, k = 0; k < h.length; ++k) {
						var l = g,
							m = h[k];
						vg(m) ? (m[et] = void 0, l.b && l.b.unobserve(m)) : l.Fg(m.nodeType)
					}
				for(g = 0; g < e.Ca.length; ++g) e.Ca[g] && c.f.kh(e.Ca[g]);
				delete c.c[d]
			}
		}
		a.b && a.b.reset()
	}
	ft.prototype.F = function() {
		ht(this);
		this.l.M();
		this.l = null;
		this.f.M();
		this.f = null
	};

	function it(a) {
		for(var b = 0; b < a.length; ++b)
			if(a[b] && a[b].node) return a[b].node;
		return null
	}

	function jt(a) {
		var b = it(a);
		if(!b) return null;
		var c = [],
			d = [],
			e = [];
		b = new Xr(b, !0);
		var g = a[a.length - 1].node,
			h = 0,
			k = !1;
		do {
			b.next();
			var l = b.node();
			if(!l) break;
			var m = b.a.c,
				n = b.a.f;
			for(1 == m && --n; h < a.length && !a[h].node;) ++h;
			l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !kt(lt(l))) ? (m = mt(l), d.push({
				node: m,
				Oa: hc()
			}), e[d.length - 1] = n, pg(m, l), l == a[h].node && (c[h++] = d.length - 1, k = !0)) : k = !1
		} while (l != g);
		return {
			Hf: e,
			rj: c,
			Ri: d
		}
	}

	function kt(a) {
		return null != a && Vr[a.tagName]
	}

	function lt(a) {
		if(null == a) return null;
		for(a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == bd(Jg(a));) a = a.previousSibling;
		return a
	}

	function nt(a, b, c, d, e, g) {
		li.call(this);
		this.a = [];
		for(var h = 0; h < a.length; ++h) this.a.push("nodeType" in a[h] ? ot(a[h]) : a[h]), pt(a[h].node);
		this.f = b;
		this.G = d || 0;
		this.K = e || 0;
		this.l = c;
		this.s = g || null;
		this.C = this.B = this.I = !1;
		this.c = [];
		this.h = [];
		this.b = [];
		this.L = [];
		new fi(this);
		this.g = this.H = !1
	}
	var ot;
	E(nt, li);

	function qt() {
		this.b = {};
		this.a = {}
	}
	qt.prototype.has = function(a, b) {
		return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a)
	};
	qt.prototype.write = function(a, b) {
		this.a[a] = b
	};
	qt.prototype.remove = function(a) {
		delete this.a[a];
		delete this.b[a]
	};
	var rt = "_gt_" + Math.random().toString(36).substr(2),
		st = "_gtn_" + Math.random().toString(36).substr(2);

	function tt(a) {
		if(!a) return !1;
		if(3 != a.nodeType || !G) return rt in a && !!a[rt];
		if(!a.parentNode) return !0;
		if(!(st in a.parentNode)) return !1;
		var b = a.parentNode[st];
		if(!b || !b[a.nodeValue]) return !1;
		b = b[a.nodeValue];
		for(var c = 0; c < b.length; ++c)
			if(b[c] == a) return !0;
		return !1
	}
	(function() {
		function a(a) {
			document.title = a
		}
		var b = {};
		ot = function(c, d) {
			if(c.tagName == wa) return {
				node: c,
				Oa: a,
				fe: !0,
				Dg: !0,
				Ff: !0
			};
			if(3 == c.nodeType) return {
				node: c,
				Oa: function(a, b) {
					Dg(b, a)
				}
			};
			d || (d = "value");
			b[d] || (b[d] = function(a, b) {
				b.setAttribute && b.setAttribute(d, a);
				z(a) && (b[d] = a)
			});
			c = {
				node: c,
				Oa: b[d],
				fe: !0
			};
			"value" != d && (c.Ff = !0);
			return c
		}
	})();

	function ut(a, b) {
		if(!a) return "";
		if(a.tagName == wa) return String(document.title);
		3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
		return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : z(a[b]) ? String(a[b]) : ""
	}
	nt.prototype.da = r("f");

	function vt(a, b, c, d) {
		d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Jg(d);
		d = {
			S: c,
			U: od(d)
		};
		a.push(d);
		b[c] ? b[c].end = d : b[c] = {
			start: d,
			end: d
		};
		return d
	}

	function wt(a, b, c) {
		b = {
			Sg: b,
			pf: c,
			aa: []
		};
		a.b.push(b);
		return b
	}

	function xt(a) {
		if(!a.g && a.I && !a.B && !a.C) {
			a.B = !0;
			var b;
			if(b = yt(a.a)) {
				b = a.a;
				var c = a.b;
				if(1 == b.length && b[0] && b[0].Ff) {
					for(var d = [], e = 0; e < c.length; ++e)
						for(var g = 0; g < c[e].aa.length; ++g) d.push(c[e].aa[g].U);
					b[0].Oa(d.join(" "), b[0].node);
					b = !0
				} else b = !1;
				b = !b
			}
			if(b && (b = jt(a.a))) {
				a.h = b.rj;
				a.c = b.Ri;
				d = a.a;
				e = a.h;
				g = a.c;
				var h = b.Hf;
				c = [];
				for(var k = 0; k < d.length; ++k)
					if(c[k] = [], d[k].node && x(e[k]))
						for(var l = 0; l < g.length; ++l)
							if(!(h[l] > h[e[k]])) {
								if(h[l] == h[e[k]]) {
									if(g[l].node.parentNode != g[e[k]].node.parentNode) continue
								} else {
									for(var m =
											h[e[k]] - h[l], n = g[e[k]].node.parentNode; m-- && n && n != g[l].node.parentNode;) n = n.parentNode;
									if(n != g[l].node.parentNode) continue
								}
								c[k].push(l)
							}
				d = a.a;
				e = a.b;
				g = -1;
				for(h = e.length - 1; 0 <= h; --h)
					for(k = e[h], l = k.aa.length - 1; 0 <= l; --l)
						if(m = k.aa[l], !(0 > m.S) && d[m.S] && d[m.S].node)
							if(0 > g) m.Nd = Qq(c[m.S]), g = c[m.S][c[m.S].length - 1];
							else
								for(n = c[m.S].length - 1; 0 <= n; --n)
									if(c[m.S][n] <= g) {
										m.Nd = Qq(c[m.S].slice(0, n + 1));
										g = c[m.S][n];
										break
									}
				for(c = e = 0; c < a.b.length; ++c) {
					d = a.b[c];
					g = a.a;
					h = d;
					k = b.Hf;
					l = a.h;
					m = "";
					for(n = 0; n < h.aa.length; ++n) {
						var t =
							h.aa[n];
						m += t.U;
						if(0 > t.S) {
							var y = -1,
								M = -1,
								R = l[h.aa[n - 1].S];
							x(R) && (y = k[R]);
							n < h.aa.length - 1 && (R = l[h.aa[n + 1].S], x(R) && (M = k[R]));
							if(0 <= y || 0 <= M) a: if(M = (0 > y || M < y) && n < h.aa.length - 1, y = h.aa[M ? n + 1 : n - 1], !(y.S >= g.length) && null != g[y.S].node) {
								R = t.U;
								t.U = "";
								if(/^ +$/.test(R) && (t = M ? y.U.charCodeAt(0) : y.U.charCodeAt(y.U.length - 1), 3584 <= t && 3711 >= t || 12288 <= t && 12351 >= t || 12352 <= t && 12543 >= t || 12784 <= t && 12799 >= t || 19968 <= t && 40959 >= t || 65280 <= t && 65519 >= t)) break a;
								y.U = M ? R + y.U : y.U + R
							}
						}
					}
					g = m;
					h = a.a;
					k = d;
					l = a.c;
					m = b.Hf;
					n = a.h;
					t = [];
					for(y = 0; y <
						k.aa.length && !(e >= l.length); ++y)
						if(M = k.aa[y], M.Nd && !(0 > M.S) && h[M.S].node && M.U)
							if(e == n[M.S] || e in M.Nd && (!(e + 1 in M.Nd) || e + 1 != n[M.S])) {
								if(l[e] && l[e].node) {
									R = mt(l[e].node);
									t.push(R);
									for(var na = l[e].node, Lu = m[n[M.S]] - m[e], Hl = R, Di = h[M.S].node.parentNode, Ei = Hl; Di && Lu--;) Ei = Di.cloneNode(!1), Ei.appendChild(Hl), Di = Di.parentNode, Hl = Ei;
									na.appendChild(Ei);
									na = h[M.S].node;
									h[M.S].fe ? h[M.S].Dg || R.appendChild(na) : (na = h[M.S].node.cloneNode(!1), na.id && (na.id = ""), R.appendChild(na));
									h[M.S].Oa(M.U, na)
								}
							} else ++e, --y;
					h =
						t;
					t = a.a;
					k = a.l;
					if(d.Sg) k = d.Sg;
					else {
						l = t.length;
						m = -1;
						for(n = 0; n < d.aa.length; ++n) y = d.aa[n].S, 0 <= y && t[y] && t[y].node && (m = Math.max(m, y), l = Math.min(l, y));
						t = "";
						for(n = l; n <= m; ++n) k[n] && (t += k[n]);
						k = t
					}
					if(a.s) 3 != a.s.a.Jb && a.L.push(gt(a.s, h, k, g, d.pf, a));
					else
						for(d = 0; d < h.length; ++d) h[d].title = k
				}
				b = a.a;
				for(c = 0; c < b.length; ++c) b[c].node && !b[c].fe && rg(b[c].node);
				b = a.a;
				c = a.c;
				a = a.h;
				for(e = d = 0; e < c.length; ++e)
					if(g = c[e].node) {
						for(; d < b.length && e > a[d];) d++;
						(d >= b.length || e != a[d]) && !g.firstChild && (rg(g), c[e].node = null)
					}
			}
		}
	}
	nt.prototype.restore = function() {
		if(this.B)
			if(this.B = !1, this.s && ht(this.s), this.L = [], yt(this.c), 1 == this.a.length && this.a[0].Ff) this.a[0].Oa(this.l[0], this.a[0].node);
			else {
				for(var a = 0, b = 0; b < this.c.length; ++b) {
					var c = this.c[b].node;
					if(c) {
						for(; a < this.a.length && b > this.h[a];) {
							var d = a++;
							this.a[d].node && (zt(this.a[d].node), this.a[d].node = null)
						}
						if(a < this.a.length && b == this.h[a] && this.a[a].node) {
							this.a[a].Dg || (og(c), c.appendChild(this.a[a].node));
							this.a[a].Oa(this.l[a], this.a[a].node);
							a++;
							d = c;
							var e = d.parentNode;
							if(e && 11 != e.nodeType)
								if(d.removeNode) d.removeNode(!1);
								else {
									for(; c = d.firstChild;) e.insertBefore(c, d);
									rg(d)
								}
						} else rg(c)
					}
				}
				this.c = []
			}
	};
	nt.prototype.F = function() {
		nt.m.F.call(this);
		this.restore();
		for(var a = 0; a < this.a.length; ++a) this.a[a].node && zt(this.a[a].node);
		this.a = null
	};

	function pt(a) {
		if(a)
			if(3 == a.nodeType && G) {
				st in a.parentNode && a.parentNode[st] || (a.parentNode[st] = {});
				var b = a.parentNode[st];
				b[a.nodeValue] || (b[a.nodeValue] = []);
				b = b[a.nodeValue];
				for(var c = 0; c < b.length; ++c)
					if(b[c] == a) return;
				b.push(a)
			} else a[rt] = 1
	}

	function zt(a) {
		if(!a || 3 == a.nodeType && G) {
			var b = a.parentNode;
			if(b && st in b) {
				var c = b[st];
				if(c && a && c[a.nodeValue]) {
					var d = c[a.nodeValue];
					if(d)
						for(var e = 0; e < d.length; ++e)
							if(d[e] == a) {
								d.splice(e, 1);
								break
							}
					0 == d.length && delete c[a.nodeValue]
				}
				if(c && er(c)) try {
					delete b[st]
				} catch(g) {
					b[st] = ""
				}
			}
		} else if(rt in a) try {
			delete a[rt]
		} catch(g) {
			a[rt] = ""
		}
	}

	function yt(a) {
		for(var b = 0; b < a.length; ++b) try {
			a[b].node && !a[b].node.parentNode && (a[b].node = null)
		} catch(c) {
			a[b].node = null
		}
		for(b = a.length - 1; 0 <= b && !a[b].node; --b);
		a.length = b + 1;
		return a.length
	}

	function mt(a) {
		a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
		pt(a);
		a.style.verticalAlign = "inherit";
		return a
	}

	function At(a) {
		for(var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? pg(c, a) : qg(c, a), At(c))
	};

	function Bt(a, b, c, d, e) {
		b = b || {};
		this.xa = e || [];
		this.h = [];
		this.o = [];
		Ct(this, a || document.documentElement, !x(b.Zg) || !!b.Zg);
		this.l = c || nt;
		this.C = b.Ui;
		this.c = this.a = this.g = this.Bc = null;
		this.s = !!b.Yj;
		this.H = !!b.Xj;
		this.I = this.s ? 27 : 13;
		this.G = !0;
		this.B = [];
		this.f = new vm(this, d)
	}
	gr(5762, Bt.prototype, {
		bj: 1
	});

	function Dt(a, b, c, d) {
		a.f.c || (b = {
			mh: b,
			gh: c,
			Ca: [],
			Tg: [],
			Gb: [],
			be: 0,
			size: 0,
			continuous: !0
		}, a.Bc = null, ym(a.f, a.b), zm(a.f, d), Am(a.f, D(function(a) {
			this.bj(a);
			d()
		}, a)), Bm(a.f, b))
	}

	function Et(a, b) {
		return 0 < a.Ca.length ? new b(a.Ca, a.Gb.join(""), a.Tg, a.be, a.size) : null
	}

	function Ft(a, b) {
		if(!a.c) return a.Bc = Et(b, a.l), !0;
		if(!b.continuous && 0 < b.Ca.length) return a.Bc = Et(b, a.l), !0;
		b.continuous = a.c.Ng;
		a: {
			var c = a.c;
			var d = a.I;
			if(b.size > b.gh || b.be > b.mh) c = !1;
			else {
				var e = c.size,
					g = c.text.length;
				if(0 != b.Ca.length && (e += 1 == b.Ca.length ? b.size + d + d : b.size + d, g += b.be, e > b.gh || g > b.mh)) {
					c = !1;
					break a
				}
				b.size = e;
				b.be = g;
				b.Ca.push(c.node);
				b.Tg.push(c.text);
				d = b.Ca.length - 1;
				0 == d ? b.Gb.push(c.xe) : (1 == d && (b.Gb[0] = "<a i=0>" + b.Gb[0] + "</a>"), b.Gb.push("<a i=" + d + ">"), b.Gb.push(c.xe), b.Gb.push("</a>"));
				c = !0
			}
		}
		if(c) return a.c = null, !1;
		a.Bc = Et(b, a.l);
		return !0
	}

	function Gt(a, b, c) {
		var d = ut(b, c);
		d && bd($c(d)) && a.B.push({
			node: b,
			Mh: c,
			text: d
		})
	}
	Bt.prototype.b = function(a, b) {
		if(this.c && Ft(this, b)) return xm;
		if(!this.a) {
			this.G = !!this.h.length;
			if(!this.h.length && (a = this.B.shift())) return this.c = {
				Ng: !1,
				node: ot(a.node, a.Mh),
				text: a.text,
				xe: gd(a.text),
				size: this.s ? ed(a.text).length : a.text.length
			}, b.continuous = !1, Ft(this, b), xm;
			a = this.h.shift() || this.o.shift();
			if(!a) return this.c = null, Ft(this, b), xm;
			this.g = [a.Vj];
			this.a = new Xr(a.root)
		}
		this.a.next();
		if(this.a.f) return this.a = null, b.continuous = !1, this.b;
		a = this.a.node();
		var c = this.a.a.c;
		if(-1 == c) {
			Ht(this);
			if(!a || 3 != a.nodeType && !Tr[a.tagName]) b.continuous = !1;
			return this.b
		}
		var d = !tt(a) && (a.nodeType == Lc && It(this) || !Me(a, "notranslate") && (Me(a, dc) || It(this)));
		this.g.push(d);
		c = 1 == c;
		if(((d = !!a && (3 == a.nodeType && z(a.nodeValue) || a.tagName == wa && z(a.value) || a.tagName == va && Me(a, dc) || a.tagName == oa && (Wr[a.type] || Me(a, dc)))) || c) && this.G && !Jt(a)) return Ct(this, a, It(this), !0), this.a.a.h(), Ht(this), this.b;
		if(c && It(this)) {
			this.H && Gt(this, a, "title");
			Gt(this, a, "alt");
			var e = this.a;
			if(e.b[e.b.length - 1])
				for(e = a.firstChild; e;) {
					if(3 ==
						e.nodeType) {
						var g = e.nodeValue.split("\n");
						if(2 < g.length || 2 == g.length && "" != bd(g[0]) && "" != bd(g[1])) {
							e.nodeValue = g[0];
							for(var h = 1; h < g.length; ++h) {
								var k = N(a).createElement("font");
								this.xa.push(k);
								qg(k, e);
								e = k;
								qg(N(a).createTextNode("\n" + g[h]), e);
								e = e.nextSibling
							}
						}
					}
					e = e.nextSibling
				}
		}
		if(d) {
			this.a.a.h();
			if(It(this)) {
				var l = ut(a);
				if(bd($c(l)) && (this.c = {
						Ng: !0,
						node: ot(a),
						text: l,
						xe: gd(l),
						size: this.s ? ed(l).length : l.length
					}, Ft(this, b))) return Ht(this), xm
			}
			Ht(this);
			return this.b
		}
		if(c) {
			if(Kt(a) || !a.firstChild && a.tagName !=
				ma) return b.continuous = b.continuous && !!Vr[a.tagName], this.a.a.h(), Ht(this), this.b;
			if(a.tagName == ma) {
				try {
					if(!(l = !a.src.match(/https?:\/\//))) {
						var m = a.src.match(Hj)[3] || null;
						l = (m ? decodeURI(m) : m) == window.location.hostname
					}
					if(l) {
						var n = Bg(a).documentElement;
						n && Ct(this, n, It(this))
					}
				} catch(t) {}
				b.continuous = !1;
				this.a.a.h();
				Ht(this);
				return this.b
			}
			It(this) && a && (3 == a.nodeType || Tr[a.tagName]) ? this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
			return this.b
		}
		this.a.a.h();
		Ht(this);
		return this.b
	};

	function Kt(a) {
		return tt(a) || 3 != a.nodeType && (!a.tagName || Ur[a.tagName] || Vr[a.tagName] || Me(a, Ub) || "gts-order" == a.id)
	}

	function Jt(a) {
		if(3 == a.nodeType) return !0;
		if(1 != a.nodeType) return !1;
		if(!a.offsetWidth || !a.offsetHeight) {
			var b = N(a),
				c = null;
			b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
			return c && c.display != q && c.visibility != rb
		}
		return !0
	}

	function Ct(a, b, c, d) {
		(d ? a.o : a.h).push({
			root: b,
			Vj: !x(c) || c
		})
	}

	function It(a) {
		return a.g[a.g.length - 1]
	}

	function Ht(a) {
		a.g.pop()
	};

	function Lt() {
		Q.call(this);
		this.a = []
	}
	E(Lt, Q);
	Lt.prototype.restore = function() {
		sl(this.b, 0, this)
	};
	Lt.prototype.b = function() {
		for(var a = 0; a < this.a.length; ++a) rg(this.a[a]);
		this.a = []
	};
	Lt.prototype.F = function() {
		Lt.m.F.call(this);
		this.restore()
	};

	function Mt(a) {
		var b = new Lo;
		Gj(a, function(a) {
			if(vg(a)) b.add(a);
			else {
				a: {
					var c;
					if(Te && !(G && J("9") && !J("10") && w.SVGElement && a instanceof w.SVGElement) && (c = a.parentElement)) {
						a = c;
						break a
					}
					c = a.parentNode;a = vg(c) ? c : null
				}
				null != a && b.add(a)
			}
		});
		return b
	};

	function Nt(a) {
		this.b = !0;
		this.f = a;
		this.c = !1;
		this.a = []
	}
	Nt.prototype.da = function() {
		return this.a.join("")
	};

	function Ot(a, b) {
		this.g = a;
		this.f = !0;
		this.c = b;
		this.a = null;
		this.b = 0
	}

	function Pt(a, b) {
		return a.f ? (b(D(a.h, a), a.g, a.c ? "en" : ""), !0) : !1
	}
	Ot.prototype.h = function(a, b, c) {
		this.a = b;
		this.b = c;
		a()
	};

	function Qt(a, b) {
		this.f = a;
		this.o = !!b;
		this.b = this.s = 0;
		this.g = this.c = -1;
		this.h = this.l = this.a = 0
	}
	var Rt = Qq(". , ; : \\? !".split(" ")),
		St = Qq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

	function Tt(a, b, c) {
		a.o && (b -= 9);
		for(var d = "", e = 0, g = a.s; g < a.f.length; ++g) {
			var h = a.f.charAt(g),
				k = h.charCodeAt(0);
			e++;
			a.a += a.o ? 127 >= k ? 32 >= k || St[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
			k = a.a >= b;
			Rt[h] ? (a.g = g, a.l = a.a, k = k || e > c) : " " == h && (a.c = g, a.h = a.a, k = k || e > c);
			if(k) return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1), a.a -= a.l, a.b = a.g + 1, a.g >= a.c ? (a.c = -1, a.h = 0) : a.h -= a.l, a.g = -1, a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1), a.a -= a.h, a.b = a.c + 1, a.c = -1, a.h = 0) : (d = a.f.substring(a.b, g + 1), a.a = 0, a.b = g + 1, a.g = a.c = -1, a.h = a.l = 0), a.s = g + 1, d
		}
		a.b < a.f.length && (d = a.f.substring(a.b), a.b = a.f.length);
		return d
	};

	function Ut(a, b, c, d, e, g) {
		this.l = d || A;
		this.X = g || A;
		this.L = !!e;
		this.c = a.a.Lg;
		this.f = 0;
		this.G = A;
		this.C = c;
		this.o = this.b = this.g = 0;
		this.a = null;
		this.I = 0;
		this.qa = !1;
		this.ia = a.a.Jg;
		this.K = [];
		this.H = 0;
		this.h = (this.R = a.a.ve) ? a.a.ff - (new Jj(a.a.sa.b)).toString().length : a.a.ff;
		this.ya = this.L ? 1 : 6;
		this.Ia = a.a.ah;
		this.xa = b;
		this.s = [];
		this.fa = a
	}

	function Vt(a, b) {
		var c = 0;
		a.G = D(function() {
			++c == this.s.length && b()
		}, a)
	}

	function Wt(a, b, c) {
		if(0 == a.b && (a.b = b ? 860 : a.h, !c || c <= a.h)) {
			a.g = a.b;
			return
		}
		do b = a.b, a.b < a.h && (a.b *= a.ya, a.b > a.h && (a.b = a.h)); while (b != a.b && c && a.b < c);
		a.g = a.b
	}

	function Xt(a, b) {
		var c = null != b,
			d = !c && !a.qa;
		(d || c) && a.l(100, d, b)
	}

	function Yt(a) {
		return a.R ? a.a.K : a.a.da().length
	}

	function Zt(a, b, c, d, e) {
		return new Bt(a.xa.shift(), {
			Yj: a.R,
			Ui: b,
			Zg: !0,
			Xj: !!c
		}, function() {
			var a = Array.prototype.slice.call(arguments);
			return new nt(a.shift(), a.shift(), a.shift(), a.shift(), a.shift(), c, d)
		}, a.C, e)
	}

	function $t(a, b, c) {
		if(0 < a.ia && au(b) >= a.ia) return !0;
		if(Yt(a) > a.b) {
			if(0 < au(b)) return !0;
			Wt(a, c, Yt(a));
			for(var d = a.a.da(), e = new Qt(d, a.R), g; g = Tt(e, a.b, a.c);)
				if(b.g.push(new Ot([g], !1)), a.f += g.length, a.c -= g.length, 0 >= a.c) {
					b.B = d.substring(e.b);
					break
				} else Wt(a, c);
			bu(b, a.a, !0);
			a.a = null;
			return !0
		}
		if(Yt(a) > a.g) return !0;
		bu(b, a.a, !0);
		a.g -= Yt(a) + a.Ia;
		a.f += a.a.G;
		a.c -= a.a.G;
		a.a = null;
		return !1
	};

	function cu(a, b) {
		Q.call(this);
		this.f = b;
		this.b = {
			rootMargin: a
		};
		this.a = new IntersectionObserver(D(this.c, this), this.b)
	}
	E(cu, Q);
	cu.prototype.F = function() {
		cu.m.F.call(this);
		this.a = null
	};
	cu.prototype.c = function(a) {
		for(var b = 0; b < a.length; b++)
			if(0 < a[b].intersectionRatio) {
				this.f();
				break
			}
	};

	function du() {
		T.call(this)
	}
	E(du, T);
	du.prototype.D = function() {
		this.T(jk(js))
	};
	du.prototype.T = ic("A");

	function eu(a) {
		Oe(a.j(), qb);
		Oe(a.j().firstChild, pb)
	};

	function fu() {
		this.a = new du;
		this.a.D();
		this.a.ga();
		this.b = 0
	}
	fu.prototype.reset = function() {
		this.b = 0;
		eu(this.a)
	};

	function gu(a, b, c, d, e, g, h, k) {
		this.g = a;
		this.b = b;
		this.s = [];
		this.B = null;
		this.f = c;
		this.a = d;
		this.c = e;
		this.xa = g;
		this.H = h;
		this.o = this.h = null;
		this.l = k || null;
		this.I = this.C = !1;
		this.G = {}
	}

	function hu(a) {
		for(var b = new Lo, c = 0; c < a.length; c++) {
			for(var d = a[c], e = new Lo, g = 0; g < d.a.length; g++) {
				var h = d.a[g].node;
				null != h && e.add(h)
			}
			d = b;
			e = Fj(e);
			g = e.length;
			for(h = 0; h < g; h++) d.add(e[h])
		}
		return b
	}
	v = gu.prototype;
	v.Yc = function(a) {
		a = this.h = new cu("200px", D(this.Gi, this, a));
		var b = Mt(hu([].concat(this.b, this.s)));
		Gj(b, D(a.a.observe, a.a));
		a = this.o = new cu("0px", D(this.Ki, this));
		b = Mt(hu([].concat(this.b, this.s)));
		Gj(b, D(a.a.observe, a.a))
	};
	v.Gi = function(a) {
		this.h && (this.h.a.disconnect(), this.h = null);
		a()
	};
	v.Ki = function() {
		this.C = !0;
		iu(this);
		if(!this.I && this.l) {
			var a = this.l;
			0 == a.b++ && (a = a.a, K(a.j(), qb), K(a.j().firstChild, pb))
		}
	};

	function iu(a) {
		a.o && (a.o.a.disconnect(), a.o = null)
	}
	v.ih = function() {
		if(this.C && !this.I && this.l) {
			var a = this.l;
			0 == --a.b && eu(a.a)
		}
		this.h && (this.h.a.disconnect(), this.h = null);
		iu(this)
	};

	function bu(a, b, c) {
		c ? (a.b.push(b), a.G[b.da()] = !0) : a.s.push(b)
	}

	function au(a) {
		return a.b.length + a.s.length
	}

	function ju(a) {
		if(0 == a.g.length) {
			for(var b = [], c = 0; c < a.b.length; ++c) b.push(a.b[c].da());
			a.g.push(new Ot(b, !1))
		}
	}
	v.translate = function(a) {
		function b() {
			d++;
			d == c && e()
		}
		ju(this);
		for(var c = 0, d = 0, e = A, g = this.f, h = this.a, k = this.c, l = this.xa, m = this.H, n = 0; n < this.g.length; ++n) Pt(this.g[n], function(a, c, d) {
			a = g.fa.translate(Gc(a, b), c, d || h, k, ++g.H, l, m, g.L);
			g.K.push(a);
			return a
		}) && c++;
		0 != c && (e = Cm(a));
		return c
	};

	function ku(a, b) {
		Q.call(this);
		this.b = [];
		this.f = [];
		this.a = a;
		this.c = b
	}
	E(ku, Q);
	ku.prototype.g = function(a) {
		var b = bd(a.href);
		0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href), this.b.push(a), a.href = b + "#googtrans/" + this.a + "/" + this.c)
	};
	ku.prototype.F = function() {
		ku.m.F.call(this);
		this.restore()
	};
	ku.prototype.restore = function() {
		if(this.b.length) {
			for(var a = 0; a < this.b.length; ++a) this.b[a].href = this.f[a];
			this.b = [];
			this.f = []
		}
	};

	function lu(a, b) {
		Q.call(this);
		this.b = a;
		this.a = af.test(b) ? "translated-rtl" : "translated-ltr";
		a = [].concat(this.b);
		for(b = 0; b < a.length; ++b) vg(a[b]) && K(a[b], this.a)
	}
	E(lu, Q);
	lu.prototype.F = function() {
		lu.m.F.call(this);
		this.restore()
	};
	lu.prototype.restore = function() {
		for(var a = [].concat(this.b), b = 0; b < a.length; ++b) vg(a[b]) && Oe(a[b], this.a)
	};

	function mu(a, b, c, d, e, g, h, k, l, m) {
		Q.call(this);
		this.B = a;
		this.Ih = b;
		this.fa = c || null;
		this.ya = m || null;
		this.C = null;
		this.rb = !!d;
		this.$c = e || "transparent";
		this.Fb = !!g;
		this.o = [];
		this.gb = this.G = this.b = !1;
		this.l = k || new qt;
		this.Pf = !k;
		this.ra = h || rm.Y();
		this.Ia = new Lt;
		this.X = this.R = this.I = !1;
		this.Xa = this.f = .5;
		this.Ya = .01;
		this.s = new sm(this.f);
		this.K = (this.h = this.qa = !!l) ? new MutationObserver(D(this.Bi, this)) : null;
		this.c = this.a = null;
		S(window, Ka, this.yg, !0, this);
		S(window, db, this.zg, !0, this)
	}
	E(mu, Q);
	gr(3046, mu.prototype, {
		Yi: 1,
		$i: 2,
		Zi: 3,
		aj: 4
	});
	v = mu.prototype;
	v.bb = function() {
		return this.a ? this.a : ""
	};
	v.oa = function() {
		return this.c ? this.c : ""
	};
	v.Wh = function(a) {
		this.Yi.apply(this, arguments);
		this.g && this.g(0, !1, 1)
	};
	v.$f = function(a) {
		this.Zi.apply(this, arguments);
		this.g && this.g(0, !1, 1)
	};
	v.Xh = function(a) {
		this.$i.apply(this, arguments);
		this.g && this.g(0, !1, 1)
	};
	v.Yh = function(a) {
		this.aj.apply(this, arguments);
		this.g && this.g(0, !1, 1)
	};
	v.translate = function(a, b, c, d, e) {
		if(d || a != this.a || b != this.c) nu(this), this.Pf && (this.l = new qt);
		else if(this.b) return;
		this.g = c;
		this.ad = e;
		this.h = this.qa && !0;
		this.K && this.K.observe(document.body, {
			attributes: !0,
			childList: !0,
			characterData: !0,
			subtree: !0
		});
		this.b = !0;
		this.a = a;
		this.c = b;
		this.rb && (this.C = new ku(a, b));
		this.X = this.a == Ha;
		this.fa && (c = this.fa, a && (c.s = a), b && (c.o = b));
		this.ia = new lu(this.B, this.c);
		this.H = ou(this);
		(a = this.B instanceof Node ? this.B : null) && pu(a, this.c)
	};

	function ou(a) {
		var b = new vm(a, a.ra);
		ym(b, a.ug);
		Am(b, D(a.Wh, a));
		Bm(b, new Ut(a.Ih, [].concat(a.B), a.ra, a.g, a.h, a.ad));
		return b
	}
	v.restore = function() {
		nu(this);
		this.Ia.restore();
		var a = this.B instanceof Node ? this.B : null;
		a && pu(a, this.bb())
	};
	v.F = function() {
		mu.m.F.call(this);
		this.restore();
		$h(window, Ka, this.yg, !0, this);
		$h(window, db, this.zg, !0, this)
	};

	function qu(a, b, c, d) {
		var e = er(a.l.b),
			g = new vm(a, b.C);
		b.s.push(g);
		zm(g, b.G);
		Wt(b, e);
		ym(g, d || a.qg);
		b = c || new gu([], [], b, a.bb(), a.oa(), a.gb, a.G, a.ya);
		Am(g, a.Hi, a);
		a.h && zm(g, b.ih, b);
		Bm(g, b)
	}
	v.Hi = function(a, b, c) {
		c.ih();
		this.G ? this.Yh(a) : this.Xh(a);
		c.f.G()
	};
	v.zg = function() {
		this.I = !1;
		this.L = 0;
		tm(this.s, this.f)
	};
	v.yg = function(a) {
		a.target == window && (this.I = !0, this.L = 0, tm(this.s, .01))
	};
	v.Bi = function(a) {
		if(this.b && this.h) {
			for(var b = 0; b < a.length; b++)
				if(a[b].target && a[b].target.className && (0 <= a[b].target.className.indexOf(dc) || 0 == a[b].target.className.indexOf("goog-"))) return;
			this.ra.add(D(this.Aj, this))
		}
	};
	v.Aj = function() {
		this.G = !0;
		this.H.stop();
		this.H = ou(this);
		return !1
	};
	v.ug = function(a, b) {
		Vt(b, Cm(a));
		qu(this, b);
		return this.Mi
	};
	v.Mi = function(a, b) {
		if(!this.b) return xm;
		if(!Dm(a)) return wm;
		if(!this.h)
			for(a = 0; a < this.o.length; ++a) {
				var c = D(this.Rf, this, b, this.o[a]);
				b.C.add(c)
			}
		return this.Li
	};
	v.ng = function(a, b) {
		if(this.L && !this.I) {
			a = (new Date).getTime() - this.L;
			var c = this.f;
			900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
			this.f = c;
			this.R ? this.Ya = .01 : this.Xa = this.f
		}
		this.G = this.b = !0;
		this.L = (new Date).getTime();
		this.bd != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.bd = a, a = !0) : a = !1;
		a ? (this.R = !1, this.f = this.Xa, this.I || tm(this.s, this.f), a = [].concat(this.B), c = this.s, b.l = A, b.xa = a, b.a = null, b.H = 0, b.s = [], b.G = A, b.C = c, a = new vm(this, this.s),
			ym(a, this.ug), Am(a, D(this.$f, this)), Bm(a, b), this.H = a) : (this.R = !0, this.f = this.Ya, this.I || tm(this.s, this.f), a = new vm(this, this.s), ym(a, this.ng), Am(a, D(this.$f, this)), Bm(a, b), this.H = a);
		return xm
	};
	v.Li = function(a, b) {
		if(!this.b) return xm;
		this.G = this.b = !1;
		this.X ? Xt(b, !0) : (Xt(b), b.X(b.f));
		if(this.Fb) return this.ng;
		for(a = 0; a < b.s.length; ++a) b.s[a].stop();
		for(a = 0; a < b.K.length; ++a) Sr(b.fa, b.K[a]);
		return xm
	};

	function ru(a, b, c) {
		a: {
			var d = a.rb ? D(a.C.g, a.C) : A,
				e = a.fa,
				g = a.$c,
				h = a.Ia.a;b = Cm(b);
			if(!c.B) {
				if(0 == c.xa.length) {
					0 == c.f && 0 == c.H && c.l(0, !0);
					c = !1;
					break a
				}
				c.B = Zt(c, d, e, g, h)
			}
			c.ra = !0;Dt(c.B, c.c, c.b, b);c = !0
		}
		return c ? a.qg : a.Fd
	}
	v.qg = function(a, b) {
		if(!this.b) return xm;
		var c = b.f;
		if(null == c.a) {
			if(!c.ra) return ru(this, a, b.f);
			if(!Dm(a)) return wm;
			c.ra = !1;
			c.a = c.B.Bc || null;
			var d = c.a ? c.a : c.B = null;
			if(!d) return ru(this, a, b.f);
			this.o.push(d);
			var e = d.da();
			if(this.l.has(e, !this.h) || null != b.G[e] && b.G[e]) return e = c.a.G, c.f += e, c.c -= e, c.a = null, this.h && bu(b, d, !1), ru(this, a, b.f);
			this.l.a[d.da()] = null
		}
		0 < au(b) && tm(this.s, .5);
		return $t(c, b, er(this.l.b)) ? this.Fd : ru(this, a, b.f)
	};
	v.Fd = function(a, b) {
		if(!this.b || 0 == au(b)) return xm;
		qu(this, b.f);
		return this.h ? (b.Yc(Cm(a)), this.Ni) : 0 == b.translate(a) ? xm : this.tg
	};
	v.Ni = function(a, b) {
		return this.b ? Dm(a) ? 0 == b.translate(a) ? xm : this.tg : wm : xm
	};
	v.Rf = function(a, b) {
		b.g && this.l.remove(b.f);
		if(!this.b) return !1;
		if(this.l.has(b.da(), !1)) {
			var c = this.l;
			if(c.has(b.f, !1)) {
				var d = b.f,
					e = c.a[d];
				e || (e = c.b[d], c.a[d] = e);
				b.b = e;
				b.I = !0
			} else c.remove(b.f), b.g = !0;
			xt(b)
		} else if(c = this.l, b.g) c.remove(b.f);
		else if(b.o) {
			d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
			b.I = !0;
			delete b.o;
			b.o = null;
			b.b = [];
			e = document.createElement($a);
			P(e, !1);
			e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
			document.body.appendChild(e);
			d = [];
			var g;
			for(g = e.firstChild; g; g = g.nextSibling)
				if("I" ==
					g.tagName) var h = wt(b, Jg(g), g.innerHTML);
				else if("B" == g.tagName) {
				h || (h = wt(b, "", ""));
				if(1 == b.a.length) vt(h.aa, d, 0, g);
				else {
					var k = d;
					var l = g;
					var m = b.a;
					h = h.aa;
					for(var n = [], t, y = l.firstChild; y; y = t) t = y.nextSibling, At(y);
					for(t = l.firstChild; t; t = t.nextSibling) t.attributes && t.attributes.i ? (l = parseInt(t.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].fe && n[l] ? n[l].U += t.firstChild && 3 == t.firstChild.nodeType ? t.firstChild.nodeValue : Jg(t) : n[l] = vt(h, k, l, t))) : 3 == t.nodeType && h.push({
						S: -1,
						U: od(t.nodeValue)
					});
					null != h && 0 < h.length && -1 == h[0].S && (1 == h.length ? h[0].S = 0 : (h[1].U = h[0].U + h[1].U, h.shift()))
				}
				h = void 0
			}
			g = b.b;
			for(k = 0; k < g.length - 1; ++k) m = g[k], h = dd(m.aa[m.aa.length - 1].U), h = h.charCodeAt(h.length - 1), 12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.aa[m.aa.length - 1].U += " ");
			rg(e);
			for(e = 0; e < b.a.length; ++e) e < d.length && e < b.l.length && null != d[e] && (g = b.l[e], k = d[e].start, null != k && (m = g.substring(0, g.length - cd(g).length), " " == m && (m = ""), m && (k.U = m + cd(k.U))), k = d[e].end, null != k && (g = g.substring(dd(g).length), " " == g && (g = ""), g &&
				(k.U = dd(k.U) + g)));
			1 != b.b.length || b.b[0].pf || (b.b[0].pf = b.f);
			c.write(b.f, b.b);
			xt(b)
		}
		b.H || (this.X = !1);
		c = b.g ? !0 : void 0;
		a.I += b.G;
		null != c && (a.qa = !0);
		b = Math.min(Math.floor(100 * a.I / a.f), 100);
		if(a.o != b || c) a.o = b, a.L ? (a.l(a.o, !0, c), a.X(a.I)) : a.l(a.o, !1, c);
		return !1
	};
	v.tg = function(a, b) {
		if(!this.b) return xm;
		if(!Dm(a)) return wm;
		if(1 < au(b)) {
			a = b.g[0];
			var c = b.b;
			if(a.c || 0 == c.length || null == a.a || 0 == a.a.length) a = null;
			else {
				for(var d = [], e = [], g = 0; g < a.a.length && g < c.length; ++g) {
					var h = a.a[g];
					h && h[0] && 200 == h[1] || (e.push(c[g]), d.push(a.g[g]))
				}
				a = 0 < e.length ? {
					Cj: new Ot(d, !0),
					Dj: e
				} : null
			}
			a = a ? new gu([a.Cj], a.Dj, b.f, b.a, b.c, b.xa, b.H, b.l) : null;
			null != a && qu(this, b.f, a, this.Fd)
		} else {
			a = !1;
			for(c = 0; c < b.g.length; ++c) d = b.g[c], d.c || 200 == d.b && d.a && d.a[0] ? d = d.f = !1 : (d.c = !0, d = d.f = !0), a = d || a;
			if(a) return this.Fd
		}
		d =
			this.bb();
		a = this.oa();
		if(1 < b.b.length)
			if(c = b.g[0], e = d == Ha, d = b.b, 200 == c.b)
				for(g = 0; g < c.a.length && g < d.length; ++g)
					if((h = c.a[g]) && 200 == h[1]) {
						var k = h[2],
							l = d[g],
							m = l,
							n = null != k && k == a;
						m.o = h[0];
						x(n) && (m.C = n);
						l.H = e && null == k
					} else d[g].g = !0;
		else
			for(a = 0; a < d.length; ++a) d[a].g = !0;
		else {
			c = new Nt(d == Ha);
			for(d = 0; d < b.g.length; ++d) h = b.g[d], e = a, g = c, 200 == h.b && h.a && h.a[0] ? (h = h.a[0], g.a.push(h[0]), h = h[2], g.b = g.b && null != h && h == e, null != h && (g.f = !1)) : 500 != h.b && (g.c = !0);
			null != b.B && (c.a.push(b.B), b.B = null);
			if(a = b.b[0]) d = c.b, a.o =
				c.da(), x(d) && (a.C = d), a.H = c.f, a.g = c.c
		}
		if(this.h) {
			a = D(this.Rf, this);
			for(c = 0; c < b.b.length; c++) a(b.f, b.b[c]);
			for(c = 0; c < b.s.length; c++) a(b.f, b.s[c]);
			iu(b);
			b.I = !0;
			b.C && b.l && (b = b.l, 0 == --b.b && eu(b.a))
		}
		return xm
	};

	function nu(a) {
		a.K && a.K.disconnect();
		a.ya && a.ya.reset();
		a.b && (a.H.stop(), a.b = !1, a.G = !1);
		if(a.o.length) {
			for(var b = 0; b < a.o.length; ++b) a.o[b].M();
			a.o = []
		}
		null != a.C && (a.C.restore(), a.C = null);
		null != a.ia && (a.ia.restore(), a.ia = null)
	}

	function pu(a, b) {
		a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
		a.getAttribute("lang") && a.setAttribute("lang", b)
	};

	function su(a, b, c, d, e, g, h, k, l, m) {
		Q.call(this);
		this.I = b || null;
		this.L = !!c;
		this.C = d || "transparent";
		this.g = g || "";
		b = h || {
			fetchStart: 0,
			Un: 0
		};
		a = b.fetchStart || 0;
		b = b.fetchEnd || 0;
		this.G = a && b ? b - a : 0;
		this.K = Hc() - Bq;
		this.l = !1;
		this.b = new Nr(e || "", void 0, g, l, m);
		this.H = new sm(1);
		this.s = new qt;
		this.f = null;
		this.h = !0;
		this.o = null != w.IntersectionObserver;
		this.B = k || null;
		new fi(this);
		e = new Rq;
		g = new Tq(D(this.b.g, this.b, e.register()));
		this.sd = Uq(g, e.delay(D(this.sd, this)));
		this.od = Uq(g, e.delay(D(this.od, this)));
		this.ee = Uq(g,
			e.delay(D(this.ee, this)));
		this.restore = Uq(g, e.delay(D(this.restore, this)));
		g.finish();
		e.finish()
	}
	E(su, Q);
	gr(14097, su.prototype, {
		cf: function() {
			$q(this.b.c ? "te_afas" : "te_afau")
		}
	});
	v = su.prototype;
	v.Ua = function() {
		return this.b.c
	};
	v.sd = function(a, b) {
		if(this.b.Ua()) {
			var c = this.b,
				d = {
					alpha: !0
				};
			b && (d.hl = b);
			c.f.send(d, a)
		} else this.cf(), a(null)
	};
	v.od = function(a) {
		var b = document.documentElement.lang;
		if(b) a(b);
		else if(this.b.Ua()) {
			var c = new hn(document.body, !1, !1, 1, 1);
			b = [];
			try {
				for(var d = 0, e = this.b.b.Kg; b.length + d < e;) {
					var g = c.next();
					if(1 == c.c && Kt(g)) c.h();
					else if(3 == g.nodeType) {
						var h = bd($c(g.nodeValue));
						h && (b.push(h), d += h.length)
					}
				}
			} catch(k) {
				if(k != wj) throw k;
			}
			e = this.b;
			b = b.join(" ");
			a = e.b.hd(a);
			e.b.sa.send({
				q: b.substring(0, e.b.Kg),
				sl: Ha,
				tl: "en"
			}, a)
		} else this.cf(), a(null, !0)
	};
	v.ee = function(a, b, c, d, e) {
		var g = Hc();
		hr();
		if(!a || fr(a, b)) a = Ha;
		if(e || a != this.a || b != this.c) this.s = new qt;
		this.a = a;
		this.c = b;
		this.b.Ua() ? (d = d || document.documentElement, this.f && this.f.M(), this.B.reset(), this.f = new mu(d, this.b, this.I, this.L, this.C, !0, this.H, this.s, this.o, this.B), this.f.gb = this.l, this.h = !0, this.f.translate(a, b, c, e, D(this.dj, this, g, a, b))) : (this.cf(), c(0, !1, !0))
	};
	v.Mj = function() {
		return !!this.f && this.f.b
	};
	v.dh = ic("l");
	v.restore = function() {
		hr();
		this.b.Ua() && this.f && this.f.restore()
	};
	v.F = function() {
		ir();
		su.m.F.call(this);
		this.b.M();
		this.f = this.b = null;
		this.s = new qt
	};
	v.dj = function(a, b, c, d) {
		this.h && (this.h = !1, b = {
			sl: b,
			tl: c,
			textlen: d
		}, this.l && (b.ctt = "1"), "" != this.g && (b.sp = this.g), 0 != this.g.indexOf("nmt") && (b.sp = "" != this.g ? "nmt," + this.g : "nmt"), b.ttt = Hc() - a, b.ttl = this.K, this.G && (b.ttf = this.G), this.o && (b.sr = 1), $q("te_time", b))
	};

	function tu(a) {
		T.call(this, a);
		this.l = new fi(this)
	}
	E(tu, T);
	v = tu.prototype;
	v.D = function() {
		var a = Mg(this.b, "select");
		a.className = "goog-te-combo";
		a.setAttribute("aria-label", Z.Mf);
		this.T(a)
	};
	v.P = function() {
		tu.m.P.call(this);
		this.Zf()
	};
	v.Zf = function() {
		S(this.j(), Oa, Xq(this, Oa));
		this.dispatchEvent(Ab)
	};
	v.$ = function() {
		tu.m.$.call(this);
		this.l.M();
		this.l = null
	};

	function uu(a, b) {
		a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()), b.appendChild(a.j()))
	}
	v.Wc = function(a) {
		this.b.Tc(this.j());
		for(var b in a)
			if(a[b] !== Object.prototype[b]) {
				var c = this.b.D(qa, {
					value: b
				});
				this.b.fb(c, a[b]);
				this.j().appendChild(c)
			}
		this.j().selectedIndex = 0
	};
	v.Ba = function() {
		return this.j().value
	};
	v.za = function(a) {
		if(this.j().value != a)
			for(var b = 0, c; c = this.j().options.item(b); ++b)
				if(c.value == a) {
					this.j().selectedIndex = b;
					break
				}
	};
	v.ae = function(a) {
		if("undefined" == B(a)) return this.j().options.item(this.j().selectedIndex).text;
		for(var b = 0, c; c = this.j().options.item(b); ++b)
			if(c.value == a) return c.text
	};
	v.ma = function(a) {
		this.j().disabled = !a
	};

	function vu(a) {
		tu.call(this, a)
	}
	E(vu, tu);
	vu.prototype.Cb = function(a) {
		this.Wc.call(this, a)
	};

	function wu(a, b) {
		tu.call(this, b);
		this.a = a && Hd(a) || {};
		this.a.uf = this.a.uf || 11;
		this.a.Yd = 0 != this.a.Yd;
		this.a.wa || (this.a.wa = Mq)
	}
	E(wu, tu);
	v = wu.prototype;
	v.jd = function() {
		throw Error("Not implemented.");
	};
	v.D = function() {
		this.jd();
		this.o = this.j();
		this.f = hg(ma, {
			frameBorder: 0,
			"class": "goog-te-menu-frame skiptranslate",
			title: Z.Mf
		});
		this.f.style.visibility = fc;
		P(this.f, !1);
		document.body.appendChild(this.f)
	};
	v.Zf = function() {
		var a = {
			dir: af.test(yq) ? Sb : "ltr",
			wa: this.a.wa,
			id: V(this, "menuBody")
		};
		this.l.w(this.f, Ab, this.Rj);
		ar(this.f, D(function() {
			var b = Bg(this.f);
			b.write($r(a));
			b.close()
		}, this))
	};
	v.Rj = function() {
		this.c = new Vf(Bg(this.f));
		this.L = this.c.j(V(this, "menuBody"));
		this.l.w(this.o, Sa, this.Qe);
		G ? this.l.w(this.f, Ka, this.Ed) : this.l.w(Cg(this.f), Ka, this.Ed);
		this.dispatchEvent(Ab)
	};
	v.$ = function() {
		wu.m.$.call(this);
		rg(this.f);
		this.o = this.R = this.h = this.L = this.c = this.f = null
	};
	v.rg = function(a) {
		this.g != a.currentTarget.value && (this.za(a.currentTarget.value), this.dispatchEvent(Oa));
		this.Ed()
	};
	v.Qe = function() {
		xu(this);
		Cg(this.f).focus();
		this.X = !0
	};
	v.Ed = function() {
		this.X && (this.X = !1, xu(this, !1), gg(N(this.o)).focus())
	};
	v.rf = hc();
	v.sf = hc();

	function xu(a, b) {
		if("undefined" == typeof b || b) {
			a.sf();
			b = ah(a.o, window);
			var c = b.y + a.o.offsetHeight,
				d = b.y - a.C.height,
				e = b.x,
				g = b.x + a.o.offsetWidth - a.C.width;
			if(G && !J("7.0")) {
				var h = document.body;
				c -= h.offsetTop;
				d -= h.offsetTop;
				e -= h.offsetLeft;
				g -= h.offsetLeft
			} else h = eg(document), c -= h.y, d -= h.y, e -= h.x, g -= h.x;
			h = cg(window);
			b.y = b.y <= h.height - a.C.height ? c : d;
			b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
			0 > b.y && (b.y = 0);
			af.test(yq) ? b.x = 0 <= g ? g : e : b.x = e <= h.width - a.C.width ? e : g;
			b.x > h.width - a.C.width && (b.x = h.width -
				a.C.width);
			0 > b.x && (b.x = 0);
			Ug(a.f, b);
			P(a.f, !0);
			yu(a)
		} else a.rf(), P(a.f, !1)
	}
	v.Ba = r("g");
	v.Wc = function(a) {
		this.c.Tc(this.L);
		P(this.f, !0);
		this.fa = a;
		this.h = [];
		for(var b in a)
			if(a[b] !== Object.prototype[b])
				if("---" == a[b]) {
					var c = {
						link: this.c.D(f, {
							className: "goog-te-menu2-separator",
							value: b
						}),
						Si: !0
					};
					this.h.push(c)
				} else {
					c = {
						link: this.c.D("A", {
							className: ob,
							href: wb,
							value: b
						})
					};
					this.h.push(c);
					var d = this.c.D(f, {
						style: "white-space:nowrap"
					});
					this.c.appendChild(c.link, d);//这是把内容放进ifream里的代码
					this.a.Yd && this.c.appendChild(d, this.c.D(ua, {
						className: "indicator"
					}, "\u203a"));
					this.c.appendChild(d, this.c.D(ua, {
							className: "text"
						},
						a[b]));
					this.l.w(c.link, Sa, this.rg)
				}
		a = this.h.length - 1;
		a = Math.round((a - a % this.a.uf) / this.a.uf) + 1;
		this.R = this.c.D("TABLE", {
			cellspacing: 0,
			cellpadding: 0,
			border: 0
		});
		c = this.c.D("TBODY");
		b = this.c.D("TR", {
			valign: "top"
		});
		this.L.className = "goog-te-menu2";
		this.c.appendChild(this.L, this.R);
		this.c.appendChild(this.R, c);
		this.c.appendChild(c, b);
		for(d = c = 0; c < a; ++c) {
			var e = this.c.D("TD");
			this.c.appendChild(b, e);
			for(var g = 0; 11 > g && d < this.h.length; ++g, ++d) this.c.appendChild(e, this.h[d].link);
			c != a - 1 && (e = this.c.D("TD", {
					"class": "goog-te-menu2-colpad"
				},
				"\u00a0"), this.c.appendChild(b, e))
		}
		this.g = null;
		this.za(this.h[0].link.value);
		yu(this);
		P(this.f, !1);
		//把内容按自己的需求写到页面上去
		// var doms=$("iframe[class='goog-te-menu-frame skiptranslate']").eq(0).contents().find("body").children();
		//console.log(doms);
		// doms.appendTo($('#Multilingual1'));
       setTimeout(function(){
           multilingual();
	   });

	};

	//写个函数把内容按自己的需求写到页面上去
	function multilingual(){
		//获取iframe里的内容
        var doms=$("iframe[class='goog-te-menu-frame skiptranslate']").eq(0).contents().find("body").children();
        var elList=doms.find('a[class="goog-te-menu2-item"]');
        //var elList=$(doms).children().children().children().children().children();

        //自定义的元素
        var  tdList=$(".multilingual-table").find('td').find('span');

        //获取cookie的值
        var  cookie_val = getCookie('googtrans');

        //获取当前路径
        var url = window.location.href;

        for(var x = 0; x < elList.length; x++){
            var text=$(elList[x]).find('.text').text().replace(/›/g,'').trim();
            if(text=='中文(简体)'){
                var indexC=x;
                $('.languageChinese').on('click',function (event) {
                    event = event || window.event;
                    if(event.stopPropagation) {event.stopPropagation();} else {event.cancelBubble = true;}
                    $(elList[indexC])[0].click();
                });
            }

            if(text=='英语'){
                var indexE=x;
                $('.languageEnglish').on('click',function (event) {
                    //event = event || window.event;
                    //if(event.stopPropagation) {event.stopPropagation();} else {event.cancelBubble = true;}
                    $(elList[indexE])[0].click();
                });
            }
        }

        var arr=[];
		for(var i = 0; i < tdList.length; i++){
            var text=$(tdList[i]).text().replace(/›/g,'').trim();
            for(var j = 0; j < elList.length; j++){
            	var cont=$(elList[j]).find('.text').text().replace(/›/g,'').trim();

               	if(text==cont){
                    $(tdList[i]).html('');
                    //$(tdList[i]).append(elList[j]);

					/*var el=$(elList[j]).clone(true);
                    el.click((function (idx) {
                        return function(){
                        	$(elList[idx])[0].click();
                        };
                    })(j));*/

                    var el=$(elList[j]).clone(true);
                    el.click(function () {
                    	var idx=j;
                        return function(){
                            $(elList[idx])[0].click();
                        };
                    }());

					$(tdList[i]).append($(el));

					/*if((cookie_val=='' || cookie_val==null) && url.indexOf('language')!=-1){
                        // 调用函数
                        if(cont=='英语'){
                            console.log(cookie_val,url);
                            $(el).click();
                        }
					}*/

			   	}

            }
		}

	}

	v.ae = function(a) {
		a = "undefined" == B(a) ? this.g : a;
		return this.fa[a]
	};
	v.tf = hc();
	v.za = function(a) {
		if(this.g != a) {
			this.ae(a) && (this.g = a, this.tf());
			for(var b = 0; b < this.h.length; ++b) {
				var c = this.h[b];
				c.Si || (c.link.className = c.link.value == a && this.a.Yd ? ob : "goog-te-menu2-item")
			}
		}
	};

	function yu(a) {
		jh(a.L, ih(a.R));
		jh(a.f, ih(a.L));
		a.C = ih(a.f)
	}

	function zu(a, b) {
		wu.call(this, a, b)
	}
	E(zu, wu);
	v = zu.prototype;
	v.jd = function() {
		var a = this.b.D("a", {
			"aria-haspopup": "true"
		});
		a.className = nb;
		a.href = wb;
		this.H = this.b.D(ua);
		a.appendChild(this.H);
		this.K = this.b.D("IMG", {
			src: vb,
			alt: "",
			style: "background-image:url(" + Jq + ");background-position:-14px 0px;border:none",
			width: 14,
			height: 14
		});
		a.appendChild(this.K);
		this.T(a)
	};
	v.rf = function() {
		O(this.K, Ja, "-14px 0px")
	};
	v.sf = function() {
		O(this.K, Ja, "0px 0px")
	};
	v.$ = function() {
		zu.m.$.call(this);
		this.K = this.H = null
	};
	v.tf = function() {
		this.b.fb(this.H, this.ae(this.g) || "")
	};
	v.Cb = function(a) {
		this.Wc.call(this, a)
	};

	function Au(a, b) {
		wu.call(this, a, b)
	}
	E(Au, wu);
	v = Au.prototype;
	v.jd = function() {
		var a = this.b.D("a", {
			"aria-haspopup": "true"
		});
		a.className = nb;
		a.href = wb;
		this.H = this.b.D(ua);
		a.appendChild(this.H);
		a.appendChild(this.b.D("IMG", {
			src: vb,
			alt: "",
			width: 1,
			height: 1
		}));
		a.appendChild(this.b.D(ua, {
			style: "border-left:1px solid #bbb"
		}, "\u200b"));
		a.appendChild(this.b.D("IMG", {
			src: vb,
			alt: "",
			width: 1,
			height: 1
		}));
		this.K = this.b.D("span", {
			style: "color:#767676",
			"aria-hidden": "true"
		}, "\u25bc");
		a.appendChild(this.K);
		this.T(a)
	};
	v.rf = function() {
		O(this.K, "color", "#9b9b9b")
	};
	v.sf = function() {
		O(this.K, "color", "#d5d5d5")
	};
	v.$ = function() {
		Au.m.$.call(this);
		this.K = this.H = null
	};
	v.tf = function() {
		this.b.fb(this.H, this.ae(this.g) || "")
	};
	v.Cb = function(a) {
		this.Wc.call(this, a)
	};

	function Bu(a, b) {
		wu.call(this, a, b);
		this.a.Yd = !1
	}
	E(Bu, wu);
	Bu.prototype.jd = function() {
		var a = Mg(this.b, $a);
		a.className = "goog-te-button";
		var b = this.b.D(f, {
			style: "background: url(" + Iq + ") repeat-x 0 -39px"
		});
		a.appendChild(b);
		this.H = Mg(this.b, Ma);
		b.appendChild(this.H);
		this.T(a)
	};
	Bu.prototype.bh = function(a) {
		og(this.H);
		this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")))
	};
	Bu.prototype.$ = function() {
		Bu.m.$.call(this);
		this.H = null
	};
	Bu.prototype.rg = function(a) {
		this.za(a.currentTarget.value);
		this.dispatchEvent(Oa);
		this.Ed()
	};

	function Cu(a, b) {
		T.call(this, b);
		this.a = a && Hd(a) || {};
		this.c = new fi(this)
	}
	E(Cu, T);
	var Du = {
		Kn: 0,
		Dl: 1,
		dn: 2
	};
	v = Cu.prototype;
	v.D = function() {
		var a = Mg(this.b, $a);
		K(a, Ub);
		K(a, "goog-te-gadget");
		a.dir = af.test(yq) ? Sb : "ltr";
		P(a, !1);
		if(2 == this.a.Qb) a.innerHTML = cs({
			id: V(this, Yb),
			Vg: "",
			Ug: ""
		});
		else {
			var b = Z.wh(ds() || "");
			a.innerHTML = cs({
				id: V(this, Yb),
				Vg: "",
				Ug: jr(1 == this.a.Qb ? "&nbsp;&nbsp;" + b : b)
			})
		}
		this.T(a)
	};
	v.P = function() {
		Cu.m.P.call(this);
		this.f = 2 == this.a.Qb ? new Au(null, this.b) : new vu(this.b);
		this.c.w(this.f, Oa, Xq(this, Ra));
		this.c.w(this.f, Ab, this.Pj);
		var a = this.b.j(V(this, Yb));
		if(2 == this.a.Qb) {
			var b = this.b.D("IMG", {
				src: vb,
				"class": "goog-te-gadget-icon",
				alt: ""
			});
			b.style.backgroundImage = "url(" + Jq + ")";
			b.style.backgroundPosition = "-65px 0px";
			var c = this.b.D(ua, {
				style: "vertical-align: middle"
			});
			a.appendChild(b);
			a.appendChild(c);
			this.f.ga(c);
			a.style.whiteSpace = "nowrap";
			a.className = "goog-te-gadget-simple"
		} else this.f.ga(a),
			1 == this.a.Qb && (a.style.display = "inline")
	};
	v.Pj = function() {
		if(2 == this.a.Qb) {
			var a = this.f,
				b = this.b.j(V(this, Yb));
			a.l.ca(a.o, Sa, a.Qe);
			a.o = b;
			a.l.w(a.o, Sa, a.Qe)
		}
		this.dispatchEvent(Ab)
	};
	v.$ = function() {
		Cu.m.$.call(this);
		this.c.M();
		this.c = null;
		this.f.M();
		this.f = null
	};
	v.oa = function() {
		return this.f.Ba()
	};
	v.ua = function(a) {
		"" == a ? this.H && this.f.Cb(this.H) : this.C && this.f.Cb(this.C);
		this.f.za(a)
	};
	v.J = function(a) {
		P(this.j(), a)
	};
	v.ma = function(a) {
		this.f.ma(a)
	};
	v.Af = function(a, b) {
		this.H = a;
		this.C = b
	};

	function Eu() {
		Uf()
	}
	Eu.prototype.ga = function(a) {
		a({}, void 0, {});
		this.a()
	};

	function Fu(a, b) {
		b = b || {};
		var c = b.top,
			d = b.left,
			e = b.bottom,
			g = b.right,
			h = b.id;
		b = qk("." + Dk(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + Dk(c) + "px; _top:expression((" + Dk(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + Dk(d) + "px; _left:expression((" + Dk(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + Dk(e) + "px; _top:expression((-" +
			Dk(e) + ca + String(h).replace(Jk, Hk) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (g || 0 == g ? "right:" + Dk(g) + "px; _left:expression((-" + Dk(g) + ca + String(h).replace(Jk, Hk) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
		a.a();
		return Df(b.toString())
	}
	Eu.prototype.a = A;

	function Gu(a, b) {
		T.call(this, b);
		this.a = a && Hd(a) || {};
		this.a.wa || (this.a.wa = Mq);
		this.c = new fi(this)
	}
	E(Gu, T);
	var Hu = {
		tn: 1,
		un: 2,
		tk: 3,
		sk: 4
	};
	v = Gu.prototype;
	v.D = function() {
		var a = Mg(this.b, $a);
		this.ha = !1;
		P(a, !1);
		var b = V(this, Va);
		a.innerHTML = '<iframe style="display:none" id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>';
		this.T(a)
	};
	v.P = function() {
		Gu.m.P.call(this);
		var a = {
			dir: af.test(yq) ? Sb : "ltr",
			wa: this.a.wa,
			Wj: V(this, dc),
			xc: vb,
			Rc: Jq
		};
		this.j().id = V(this, "floatContainer");
		var b = {
			id: this.j().id,
			className: "goog-te-ftab-float"
		};
		this.j().className += " goog-te-ftab-float";
		switch(this.a.nd) {
			case 2:
				a.md = hb;
				b.top = 0;
				b.right = 20;
				break;
			case 3:
				a.md = gb;
				b.bottom = 0;
				b.right = 20;
				break;
			case 4:
				a.md = gb;
				b.bottom = 0;
				b.left = 20;
				break;
			default:
				a.md = hb, b.top = 0, b.left = 20
		}
		dh(Fu(new Eu, b), this.j());
		this.l = this.b.j(V(this, Va));
		this.c.w(this.l, Ab, this.Qj);
		ar(this.l,
			D(function() {
				var b = Bg(this.l);
				b.write(es(a));
				b.close()
			}, this))
	};
	v.Qj = function() {
		this.f = (new Vf(Bg(this.l))).j(V(this, dc));
		this.c.w(this.f, Sa, Xq(this, "clk_trans"));
		P(this.j(), !0);
		var a = ih(this.f);
		P(this.j(), !1);
		jh(this.l, a);
		jh(this.j(), a);
		this.dispatchEvent(Ab)
	};
	v.$ = function() {
		Gu.m.$.call(this);
		this.c.M();
		this.c = null;
		rg(this.l);
		this.f = this.l = null
	};
	v.N = r("ha");
	v.J = function(a) {
		this.ha = a;
		P(this.j(), a)
	};

	function Iu(a, b) {
		T.call(this, b);
		this.h = new fi(this);
		this.a = a && Hd(a) || {};
		this.a.wa || (this.a.wa = Mq);
		this.a.Cf = !1;
		O(this.b.a.body, Mb, "relative");
		re || O(this.b.a.body, "minHeight", "100%");
		O(this.b.a.documentElement, "height", "100%");
		O(this.b.a.body, "top", "0px");
		G && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
	}
	E(Iu, T);
	v = Iu.prototype;
	v.ga = function() {
		var a = this.b.a.body.firstChild;
		vi(this, a.parentNode, a)
	};
	v.D = function() {
		var a = Mg(this.b, $a);
		this.ha = !1;
		P(a, !1);
		K(a, Ub);
		var b = V(this, Va);
		a.innerHTML = '<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>';
		this.T(a)
	};
	v.P = function() {
		Iu.m.P.call(this);
		var a = {
				dir: af.test(yq) ? Sb : "ltr",
				wa: this.a.wa,
				xc: vb,
				fj: ub,
				df: "b.png",
				Rc: Jq,
				zj: V(this, "promptSection"),
				Sh: V(this, "confirm"),
				xj: V(this, Nb),
				wj: V(this, "progressValue"),
				Vi: Lq,
				Oh: V(this, "cancel"),
				ci: V(this, "finishSection"),
				Bj: V(this, "restore"),
				Zh: V(this, "errorSection"),
				Vh: V(this, "errorContent"),
				Rh: V(this, "close"),
				Sn: Jq,
				kj: V(this, "noAutoPopup")
			},
			b = [];
		this.a.Cf && b.push(bs({
			id: V(this, Ob)
		}));
		b.push(bs({
			id: V(this,
				Pb)
		}));
		a.yj = jr(Z.Hh.apply(null, b));
		b = [];
		this.a.Cf && b.push(bs({
			id: V(this, bb)
		}));
		b.push(bs({
			id: V(this, cb)
		}));
		a.bi = jr(Z.Ch.apply(null, b));
		this.a.oc && (a.oc = this.a.oc);
		this.l = this.b.j(V(this, Va));
		this.h.w(this.l, Ab, this.Nj);
		ar(this.l, D(function() {
			var b = Bg(this.l);
			b.write(as(a));
			b.close()
		}, this))
	};
	v.Nj = function() {
		this.c = new Vf(Bg(this.l));
		Ju(this, Z.Lf);
		if(this.a.wa == Mq) {
			var a = "url(" + Iq + ")";
			O(this.c.a.body, Ia, a);
			for(var b = this.c.a.getElementsByTagName(Ma), c = 0; c < b.length; ++c) {
				var d = b[c].parentNode;
				O(d, Ia, a);
				O(d, "backgroundRepeat", "repeat-x");
				O(d, Ja, "0 -39px")
			}
		}
		this.a.Cf && (this.g = new zu(this.a, this.c));
		this.f = new zu(this.a, this.c);
		this.o = new Bu(this.a, this.c);
		this.h.w(this.c.j(V(this, "confirm")), Sa, Xq(this, "clk_confirm"));
		this.h.w(this.c.j(V(this, "cancel")), Sa, Xq(this, "clk_cancel"));
		this.h.w(this.c.j(V(this,
			"restore")), Sa, Xq(this, "clk_restore"));
		this.h.w(this.c.j(V(this, "close")), Sa, Xq(this, "clk_close"));
		this.L = this.c.j(V(this, "noAutoPopup"));
		this.h.w(this.L, Sa, Xq(this, "clk_no_ap"));
		this.g && this.h.w(this.g, Oa, Xq(this, "chg_src_lang"));
		this.h.w(this.f, Oa, Xq(this, Ra));
		this.h.w(this.o, Oa, this.Di);
		a = new Rq(D(this.Oj, this));
		this.g && this.h.w(this.g, Ab, a.register());
		this.h.w(this.f, Ab, a.register());
		this.h.w(this.o, Ab, a.register());
		a.finish();
		this.g && this.g.ga(this.c.j(V(this, Ob)));
		this.f.ga(this.c.j(V(this,
			Pb)));
		this.o.ga(this.c.j("options"))
	};
	v.Oj = function() {
		this.o.bh(Z.uh);
		this.o.Wc({
			turn_off_site: Z.Fh,
			s1: "---",
			learn_more: Z.th
		});
		this.dispatchEvent(Ab)
	};
	v.Di = function() {
		switch(this.o.Ba()) {
			case "learn_more":
				window.open(Pq, "_blank");
				break;
			case "turn_off_site":
				this.dispatchEvent(Ta)
		}
	};
	v.$ = function() {
		this.J(!1);
		Iu.m.$.call(this);
		this.h.M();
		this.h = null;
		this.g && (this.g.M(), this.g = null);
		this.f.M();
		this.f = null;
		this.o.M();
		this.o = null;
		rg(this.l);
		this.Ac = this.c = null
	};
	v.bb = function() {
		return this.g ? this.g.Ba() : ""
	};
	v.oa = function() {
		return this.f.Ba()
	};
	v.Sb = function(a) {
		this.g && this.g.za(a);
		this.K && this.K[a] && this.c.fb(this.L, Z.Eh(this.K[a]))
	};
	v.ua = function(a) {
		this.f.za(a)
	};

	function Ku(a, b, c, d) {
		if(a.Ac != b) {
			a.Ac = b;
			if(0 == b) {
				a.g && uu(a.g, a.c.j(V(a, Ob)));
				if(a.H) {
					var e = a.oa();
					a.f.Cb(a.H);
					a.ua(e)
				}
				uu(a.f, a.c.j(V(a, Pb)))
			} else 2 == b && (a.g && uu(a.g, a.c.j(V(a, bb))), a.C && (e = a.oa(), a.f.Cb(a.C), a.ua(e)), uu(a.f, a.c.j(V(a, cb))));
			e = {};
			e[-1] = a.c.j(V(a, "errorSection"));
			e[0] = a.c.j(V(a, "promptSection"));
			e[1] = a.c.j(V(a, Nb));
			e[2] = a.c.j(V(a, "finishSection"));
			for(var g in e) e[g] !== Object.prototype[g] && P(e[g], g == b)
		}
		c && a.J(!0);
		a.L.parentNode.parentNode.style.display = d ? "block" : q
	}
	v.N = r("ha");
	v.J = function(a) {
		if(this.ha != a) {
			this.ha = a;
			if(G) var b = parseInt("0" + this.b.a.body.leftMargin, 10),
				c = parseInt("0" + this.b.a.body.topMargin, 10);
			var d = "BackCompat" == this.b.a.compatMode;
			a ? (O(this.b.a.body, "top", "40px"), P(this.j(), !0), G && (J("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (O(this.b.a.body, "top",
				"0px"), P(this.j(), !1), d && 40 <= c && (this.b.a.body.topMargin = c - 40))
		}
	};
	v.yf = function(a) {
		this.c.fb(this.c.j(V(this, "progressValue")), a)
	};

	function Ju(a, b) {
		a.c.fb(a.c.j(V(a, "errorContent")), b)
	}
	v.Af = function(a, b) {
		this.H = a;
		this.C = b;
		this.f.Cb(a)
	};

	function Mu(a, b) {
		Q.call(this);
		B(a) == Wb && (b = a, a = {});
		B(b) == Wb && (b = Wf(document, String(b)));
		this.ia = b;
		this.h = new fi(this);
		this.Ub = this.X = void 0;
		a = Object(a);
		this.g = Ha;
		!(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
			b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
		this.a = {
			ne: b,
			bg: !1,
			oe: null,
			ed: null,
			We: [],
			ag: [],
			Uh: !1,
			jc: !1,
			Za: "",
			cg: !1,
			ze: "",
			Qb: 0,
			Xf: !1
		};
		this.qa = {
			wa: Mq,
			oc: "https://" == Hq ? Z.zh : null
		};
		this.R = {
			wa: Mq,
			nd: null
		};
		a && ("autoDisplay" in a && (this.a.ne = this.a.ne && !!a.autoDisplay), "multilanguagePage" in a && (this.a.jc = !!a.multilanguagePage), "gaTrack" in a && (this.a.cg = !!a.gaTrack), "layout" in a && (this.a.Qb = a.layout), a.pageLanguage && (this.a.Wd = Yq(a.pageLanguage)), a.includedLanguages && (this.a.We = a.includedLanguages.split(",")),
			a.excludedLanguages && (this.a.ag = a.excludedLanguages.split(",")), this.a.Wd && (this.g = this.a.Wd), a.key && (this.a.Za = a.key), a.gaId && (this.a.ze = a.gaId), this.R.nd = Number(a.floatPosition) || this.R.nd, "disableAutoTranslation" in a && (this.a.Xf = !!a.disableAutoTranslation), a.jwtToken && (this.X = new Lr(a.jwtToken)), a.jwtTokenProvider && (this.X = new Mr(a.jwtTokenProvider)), a.translateErrorHandler && (this.Ub = a.translateErrorHandler));
		!this.a.Xf && Nu(this) && (this.a.bg = !0);
		this.s = {};
		if((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) &&
			a[2])
			for(this.s = {}, a = fd(a[2]).split("|"), b = 0; b < a.length; ++b) {
				var c = a[b].split("=");
				c[0] && (this.s[c[0]] = c[1])
			}
		this.ya = new ft({
			Za: this.a.Za,
			Jb: 1,
			Bf: !0,
			Yn: Oq
		}, {
			client: Eq,
			u: window.location.href
		});
		this.B = new su(void 0, this.ya, void 0, void 0, this.a.Za, void 0, void 0, new fu, this.X, this.Ub);
		this.G = !1;
		this.h.w(window, "unload", this.M);
		this.I = new Rq(D(this.xi, this));
		this.C = new Rq(D(this.Ai, this));
		this.L = new Tq(D(this.Ti, this));
		this.b = new Iu(this.qa);
		this.B.sd(this.I.register(D(this.wi, this)), yq);
		this.ia ? (this.f =
			new Cu(this.a), this.h.w(this.f, Ab, this.I.register()), this.h.w(this.f, Ra, Uq(this.L, this.C.delay(D(this.vi, this)))), this.f.ga(this.ia)) : this.R.nd && (this.l = new Gu(this.R), this.h.w(this.l, Ab, this.I.register()), this.h.w(this.l, "clk_trans", Uq(this.L, this.C.delay(D(this.ui, this)))), this.l.ga());
		!this.a.Wd && this.a.Uh && this.B.od(this.I.register(D(this.ri, this)));
		this.I.finish()
	}
	E(Mu, Q);

	function Nu(a) {
		function b(a, b) {
			if(a = fd(a).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
				if(a[3]) return b.a.oe = a[2], b.a.ed = a[3], !0;
				if(a[6]) return b.a.oe = a[5], b.a.ed = a[6], !0
			}
			return !1
		}
		var c = {
				url: function() {
					var a = window.location.href.match(/#.*googtrans(.*)/);
					return a && a[1]
				},
				cookie: function() {
					var a = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
					return a && a[2]
				}
			},
			d;
		for(d in c)
			if(c[d] !== Object.prototype[d]) {
				var e = c[d]();
				if(e && b(e, a)) return d
			}
		return ""
	}

	function Ou(a, b) {
		for(var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
		c = ";domain=" + c.join(".");
		null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
		a += ";path=/";
		document.cookie = a;
		try {
			document.cookie = a + c
		} catch(d) {}
	}

	function Pu(a, b) {
		var c = null;
		x(b) && (c = x(a) ? "/" + a + "/" + b : "/" + b);
		Ou("googtrans", c)
	}
	v = Mu.prototype;
	v.wi = function(a) {
		this.c = Yq(yq);
		this.H = a || {};
		this.o = {};
		this.K = {};
		a = !this.a.We.length;
		var b = Qq(this.a.We),
			c = Qq(this.a.ag);
		this.o[yq] = "";
		this.K[yq] = "";
		for(var d in this.H.tl) this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.K[d] = this.H.tl[d], d == this.a.Wd && !this.a.jc) || (this.o[d] = this.H.tl[d]);
		this.o[yq] || delete this.o[yq];
		this.K[yq] || delete this.K[yq];
		this.fa = Hd(this.H.sl)
	};
	v.ri = function(a) {
		a && (this.g = Yq(a))
	};
	v.xi = function() {
		delete this.I;
		if(this.H) {
			this.g = this.g || this.a.oe;
			this.c = this.a.ed || this.c;
			var a = this.a.bg || this.a.ne && this.g != this.c && !(this.g in Cq) && "1" != this.s.os && "1" != this.s["o" + this.g];
			"zh-TW" == this.g && (this.g = "zh-CN");
			this.fa[this.g] || (a = !1, this.g = Ha);
			if(!this.o[this.c])
				if(a = !1, this.o.en) this.c = "en";
				else
					for(var b in this.o)
						if(this.o[b] !== Object.prototype[b]) {
							this.c = b;
							break
						}
			if(this.f) {
				var c = this.o,
					d = {
						"": Z.yh
					};
				for(b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
				this.f.Af(d, this.K);
				this.f.ua("")
			}!Aq &&
				a ? this.a.ed ? Uq(this.L, this.C.delay(D(this.Xd, this, !0, !0))).call() : (this.G = !0, Uq(this.L, this.C.delay(D(this.Xd, this))).call(), $q("te_ap", {
					sl: this.g
				})) : (this.l && this.l.J(!0), this.f && this.f.J(!0));
			window.google.translate.TranslateService && this.ma(!1);
			this.L.finish()
		}
	};
	v.Ai = function() {
		var a = this.b,
			b = this.fa;
		a.g && a.g.Cb(b);
		a.K = b;
		this.b.Af(this.o, this.K);
		this.b.Sb(this.g);
		this.b.ua(this.c);
		this.h.w(this.b, "clk_confirm", this.ki);
		this.h.w(this.b, "clk_cancel", this.ji);
		this.h.w(this.b, "clk_restore", this.Oe);
		this.h.w(this.b, "clk_close", this.Dd);
		this.h.w(this.b, "clk_no_ap", this.li);
		this.h.w(this.b, Ta, this.mi);
		this.h.w(this.b, "chg_src_lang", this.mg);
		this.h.w(this.b, Ra, this.mg);
		this.f && this.f.J(!0)
	};
	v.Ti = function() {
		this.h.w(this.b, Ab, this.C.register());
		this.b.ga();
		this.C.finish()
	};
	v.F = function() {
		this.B.restore();
		Mu.m.F.call(this);
		this.B.M();
		this.h.M();
		this.h = null;
		this.b && this.b.M();
		this.b = null;
		this.l && this.l.M();
		this.l = null;
		this.f && this.f.M();
		this.ia = this.f = null
	};
	v.ki = function() {
		!this.b.N() || !this.a.jc && fr(this.g, this.b.oa()) || (this.G && $q("te_apt", {
			sl: this.g
		}), Qu(this, !1), this.f && this.f.ua(this.b.oa()))
	};
	v.ji = function() {
		this.b.N() && (Ru(this), Ku(this.b, 0), this.f && this.f.ua(""))
	};
	v.Oe = function() {
		this.b.N() && (Ru(this), Ku(this.b, 0));
		this.f && this.f.ua("")
	};
	v.Dd = function() {
		this.b.N() && (this.G && (this.G = !1, $q("te_apc", {
			sl: this.g
		})), Ru(this), this.b.J(!1), this.f && this.f.ua(""), this.l && this.l.J(!0))
	};
	v.li = function() {
		this.b.N() && (this.s["o" + this.g] = "1", $q("te_apr", {
			sl: this.g
		}), this.G = !1, this.Dd())
	};
	v.mi = function() {
		if(this.b.N()) {
			this.G = !1;
			this.s.os = "1";
			var a = null;
			if(this.s) {
				a = [];
				for(var b in this.s) this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
				a = a.join("|")
			}
			Ou("googtransopt", a);
			this.Dd()
		}
	};
	v.mg = function() {
		this.b.N() && (!this.a.jc && fr(this.g, this.b.oa()) ? this.Oe() : (this.g = this.b.bb() || this.g, this.c = this.b.oa(), 2 == this.b.Ac && (this.f && this.f.ua(this.b.oa()), Qu(this))))
	};
	v.Xd = function(a, b) {
		this.b.N() || (this.l && this.l.J(!1), a ? Qu(this, b) : Ku(this.b, 0, !0, this.G))
	};
	v.Hj = function(a, b) {
		Uq(this.L, this.C.delay(D(this.Xd, this, a, b))).call()
	};
	v.ui = function() {
		this.Xd(2 == this.b.Ac)
	};
	v.vi = function() {
		this.f.oa() ? !this.a.jc && fr(this.g, this.b.oa()) ? this.Oe() : (this.c = this.f.oa(), this.b.ua(this.c), Qu(this)) : this.f.ua(this.c)
	};

	function Qu(a, b) {
		if(window.google.translate.TranslateService) try {
			window.google.translate.TranslateService.getInstance().restore()
		} catch(c) {}
		Pu(a.g, a.c);
		a.G = !1;
		!b && a.g in Cq && $q("te_ape", {
			sl: a.g
		});
		a.b.yf(0);
		Ku(a.b, 1, !0);
		a.B.dh(!!b);
		window.setTimeout(D(a.B.ee, a.B, a.a.jc ? Ha : a.g, a.c, D(a.Ii, a), void 0, void 0), 0);
		if(a.a.cg && window._gaq && window._gat) try {
			a.a.ze ? window._gat._getTracker(a.a.ze)._trackEvent(la, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(la, "Translate", a.c)
		} catch(c) {}
	}
	v.Ii = function(a, b, c) {
		B(this.ra) == p && this.ra();
		this.b.N() && 1 == this.b.Ac && (c ? (Ru(this), Ku(this.b, -1, !0), 2 == c ? Ju(this.b, Z.sh) : Ju(this.b, Z.Lf)) : (this.b.yf(a), b && (this.f && this.f.ua(this.c), this.b.Sb(this.g), Ku(this.b, 2))))
	};

	function Ru(a) {
		Pu();
		window.setTimeout(D(a.B.restore, a.B, null), 0)
	}
	v.ma = function(a) {
		a || this.Dd();
		this.f && this.f.ma(a);
		this.l && this.l.J(a)
	};

	function Su(a) {
		if(a && (a = String(a), a = a.split("."), a.length)) {
			for(var b = window, c = 0; c < a.length; ++c) {
				var d = a[c];
				if(!(d && d in b)) return;
				b = b[d]
			}
			return b
		}
	};
	var Tu = Su("google.translate.m");
	if(Tu)
		for(var Uu in Z)
			if(Z[Uu] !== Object.prototype[Z[Uu]] && Z[Uu]) {
				var Vu = Z[Uu]();
				Z[Uu] = Tu[Vu] ? Tu[Vu] : Zr
			}
	if(1 == Dq) {
		var Wu = null,
			Xu = function(a) {
				if(!Wu) {
					var b, c, d;
					a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
					a = 0;
					if("te_lib" == Eq || Xd) a = 3;
					Wu = new su(void 0, new ft({
						Za: b,
						Jb: a,
						Bf: !0,
						Yc: "tvis" == c
					}), void 0, void 0, b, c, d, new fu);
					Wu.constructor = A;
					Wu.isAvailable = Wu.Ua;
					Wu.getSupportedLanguages = Wu.sd;
					Wu.getPageLanguage = Wu.od;
					Wu.setClickThrough = Wu.dh;
					Wu.translatePage = Wu.ee;
					Wu.restore = Wu.restore;
					Wu.isTranslating = Wu.Mj
				}
				return Wu
			};
		Xu.getInstance = function() {
			return Wu
		};
		Ic("google.translate.TranslateService", Xu);
		$q("te_li")
	} else {
		var Yu = null,
			Zu = function(a, b) {
				Yu || (Yu = new Mu(a, b), Yu.constructor = A);
				return Yu
			};
		Zu.getInstance = function() {
			return Yu
		};
		Ic("google.translate.TranslateElement", Zu);
		Mu.prototype.dispose = Mu.prototype.M;
		Mu.prototype.showBanner = Mu.prototype.Hj;
		Mu.prototype.setEnabled = Mu.prototype.ma;
		Ic("google.translate.TranslateElement.FloatPosition", Hu);
		Hu.TOP_LEFT = 1;
		Hu.TOP_RIGHT =
			2;
		Hu.BOTTOM_RIGHT = 3;
		Hu.BOTTOM_LEFT = 4;
		Ic("google.translate.TranslateElement.InlineLayout", Du);
		Du.VERTICAL = 0;
		Du.HORIZONTAL = 1;
		Du.SIMPLE = 2
	}(function() {
		for(var a in Object.prototype) {
			Ad = function(a, b, c) {
				for(var d in a) a[d] !== Object.prototype[d] && b.call(c, a[d], d, a)
			};
			break
		}
		var b = Hc(),
			c = Su(zq);
		c && B(c) == p && (1 == Dq ? c() : function e() {
			var a = document.readyState;
			"undefined" == B(a) || a == Ua || "interactive" == a || 2E4 <= Hc() - b ? c() : window.setTimeout(e, 500)
		}())
	})();
}).call(window)