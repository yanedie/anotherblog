"use strict";
(()=>{
    var Ui = Object.create;
    var Ar = Object.defineProperty;
    var Wi = Object.getOwnPropertyDescriptor;
    var Di = Object.getOwnPropertyNames
      , qt = Object.getOwnPropertySymbols
      , Ni = Object.getPrototypeOf
      , Cr = Object.prototype.hasOwnProperty
      , un = Object.prototype.propertyIsEnumerable;
    var fn = (e,t,r)=>t in e ? Ar(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r
      , j = (e,t)=>{
        for (var r in t || (t = {}))
            Cr.call(t, r) && fn(e, r, t[r]);
        if (qt)
            for (var r of qt(t))
                un.call(t, r) && fn(e, r, t[r]);
        return e
    }
    ;
    var mn = (e,t)=>{
        var r = {};
        for (var n in e)
            Cr.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && qt)
            for (var n of qt(e))
                t.indexOf(n) < 0 && un.call(e, n) && (r[n] = e[n]);
        return r
    }
    ;
    var Kt = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var zi = (e,t,r,n)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Di(t))
                !Cr.call(e, o) && o !== r && Ar(e, o, {
                    get: ()=>t[o],
                    enumerable: !(n = Wi(t, o)) || n.enumerable
                });
        return e
    }
    ;
    var Lt = (e,t,r)=>(r = e != null ? Ui(Ni(e)) : {},
    zi(t || !e || !e.__esModule ? Ar(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var hn = Kt((kr,dn)=>{
        (function(e, t) {
            typeof kr == "object" && typeof dn != "undefined" ? t() : typeof define == "function" && define.amd ? define(t) : t()
        }
        )(kr, function() {
            "use strict";
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(M) {
                    return !!(M && M !== document && M.nodeName !== "HTML" && M.nodeName !== "BODY" && "classList"in M && "contains"in M.classList)
                }
                function p(M) {
                    var Ne = M.type
                      , R = M.tagName;
                    return !!(R === "INPUT" && a[Ne] && !M.readOnly || R === "TEXTAREA" && !M.readOnly || M.isContentEditable)
                }
                function c(M) {
                    M.classList.contains("focus-visible") || (M.classList.add("focus-visible"),
                    M.setAttribute("data-focus-visible-added", ""))
                }
                function l(M) {
                    M.hasAttribute("data-focus-visible-added") && (M.classList.remove("focus-visible"),
                    M.removeAttribute("data-focus-visible-added"))
                }
                function f(M) {
                    M.metaKey || M.altKey || M.ctrlKey || (s(r.activeElement) && c(r.activeElement),
                    n = !0)
                }
                function m(M) {
                    n = !1
                }
                function d(M) {
                    s(M.target) && (n || p(M.target)) && c(M.target)
                }
                function h(M) {
                    s(M.target) && (M.target.classList.contains("focus-visible") || M.target.hasAttribute("data-focus-visible-added")) && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    l(M.target))
                }
                function v(M) {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    Y())
                }
                function Y() {
                    document.addEventListener("mousemove", K),
                    document.addEventListener("mousedown", K),
                    document.addEventListener("mouseup", K),
                    document.addEventListener("pointermove", K),
                    document.addEventListener("pointerdown", K),
                    document.addEventListener("pointerup", K),
                    document.addEventListener("touchmove", K),
                    document.addEventListener("touchstart", K),
                    document.addEventListener("touchend", K)
                }
                function X() {
                    document.removeEventListener("mousemove", K),
                    document.removeEventListener("mousedown", K),
                    document.removeEventListener("mouseup", K),
                    document.removeEventListener("pointermove", K),
                    document.removeEventListener("pointerdown", K),
                    document.removeEventListener("pointerup", K),
                    document.removeEventListener("touchmove", K),
                    document.removeEventListener("touchstart", K),
                    document.removeEventListener("touchend", K)
                }
                function K(M) {
                    M.target.nodeName && M.target.nodeName.toLowerCase() === "html" || (n = !1,
                    X())
                }
                document.addEventListener("keydown", f, !0),
                document.addEventListener("mousedown", m, !0),
                document.addEventListener("pointerdown", m, !0),
                document.addEventListener("touchstart", m, !0),
                document.addEventListener("visibilitychange", v, !0),
                Y(),
                r.addEventListener("focus", d, !0),
                r.addEventListener("blur", h, !0),
                r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host ? r.host.setAttribute("data-js-focus-visible", "") : r.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if (typeof window != "undefined" && typeof document != "undefined") {
                window.applyFocusVisiblePolyfill = e;
                var t;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (r) {
                    t = document.createEvent("CustomEvent"),
                    t.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            typeof document != "undefined" && e(document)
        })
    }
    );
    var bn = Kt(Rr=>{
        (function(e) {
            var t = function() {
                try {
                    return !!Symbol.iterator
                } catch (c) {
                    return !1
                }
            }
              , r = t()
              , n = function(c) {
                var l = {
                    next: function() {
                        var f = c.shift();
                        return {
                            done: f === void 0,
                            value: f
                        }
                    }
                };
                return r && (l[Symbol.iterator] = function() {
                    return l
                }
                ),
                l
            }
              , o = function(c) {
                return encodeURIComponent(c).replace(/%20/g, "+")
            }
              , i = function(c) {
                return decodeURIComponent(String(c).replace(/\+/g, " "))
            }
              , a = function() {
                var c = function(f) {
                    Object.defineProperty(this, "_entries", {
                        writable: !0,
                        value: {}
                    });
                    var m = typeof f;
                    if (m !== "undefined")
                        if (m === "string")
                            f !== "" && this._fromString(f);
                        else if (f instanceof c) {
                            var d = this;
                            f.forEach(function(X, K) {
                                d.append(K, X)
                            })
                        } else if (f !== null && m === "object")
                            if (Object.prototype.toString.call(f) === "[object Array]")
                                for (var h = 0; h < f.length; h++) {
                                    var v = f[h];
                                    if (Object.prototype.toString.call(v) === "[object Array]" || v.length !== 2)
                                        this.append(v[0], v[1]);
                                    else
                                        throw new TypeError("Expected [string, any] as entry at index " + h + " of URLSearchParams's input")
                                }
                            else
                                for (var Y in f)
                                    f.hasOwnProperty(Y) && this.append(Y, f[Y]);
                        else
                            throw new TypeError("Unsupported input's type for URLSearchParams")
                }
                  , l = c.prototype;
                l.append = function(f, m) {
                    f in this._entries ? this._entries[f].push(String(m)) : this._entries[f] = [String(m)]
                }
                ,
                l.delete = function(f) {
                    delete this._entries[f]
                }
                ,
                l.get = function(f) {
                    return f in this._entries ? this._entries[f][0] : null
                }
                ,
                l.getAll = function(f) {
                    return f in this._entries ? this._entries[f].slice(0) : []
                }
                ,
                l.has = function(f) {
                    return f in this._entries
                }
                ,
                l.set = function(f, m) {
                    this._entries[f] = [String(m)]
                }
                ,
                l.forEach = function(f, m) {
                    var d;
                    for (var h in this._entries)
                        if (this._entries.hasOwnProperty(h)) {
                            d = this._entries[h];
                            for (var v = 0; v < d.length; v++)
                                f.call(m, d[v], h, this)
                        }
                }
                ,
                l.keys = function() {
                    var f = [];
                    return this.forEach(function(m, d) {
                        f.push(d)
                    }),
                    n(f)
                }
                ,
                l.values = function() {
                    var f = [];
                    return this.forEach(function(m) {
                        f.push(m)
                    }),
                    n(f)
                }
                ,
                l.entries = function() {
                    var f = [];
                    return this.forEach(function(m, d) {
                        f.push([d, m])
                    }),
                    n(f)
                }
                ,
                r && (l[Symbol.iterator] = l.entries),
                l.toString = function() {
                    var f = [];
                    return this.forEach(function(m, d) {
                        f.push(o(d) + "=" + o(m))
                    }),
                    f.join("&")
                }
                ,
                e.URLSearchParams = c
            }
              , s = function() {
                try {
                    var c = e.URLSearchParams;
                    return new c("?a=1").toString() === "a=1" && typeof c.prototype.set == "function" && typeof c.prototype.entries == "function"
                } catch (l) {
                    return !1
                }
            };
            s() || a();
            var p = e.URLSearchParams.prototype;
            typeof p.sort != "function" && (p.sort = function() {
                var c = this
                  , l = [];
                this.forEach(function(m, d) {
                    l.push([d, m]),
                    c._entries || c.delete(d)
                }),
                l.sort(function(m, d) {
                    return m[0] < d[0] ? -1 : m[0] > d[0] ? 1 : 0
                }),
                c._entries && (c._entries = {});
                for (var f = 0; f < l.length; f++)
                    this.append(l[f][0], l[f][1])
            }
            ),
            typeof p._fromString != "function" && Object.defineProperty(p, "_fromString", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function(c) {
                    if (this._entries)
                        this._entries = {};
                    else {
                        var l = [];
                        this.forEach(function(h, v) {
                            l.push(v)
                        });
                        for (var f = 0; f < l.length; f++)
                            this.delete(l[f])
                    }
                    c = c.replace(/^\?/, "");
                    for (var m = c.split("&"), d, f = 0; f < m.length; f++)
                        d = m[f].split("="),
                        this.append(i(d[0]), d.length > 1 ? i(d[1]) : "")
                }
            })
        }
        )(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : Rr);
        (function(e) {
            var t = function() {
                try {
                    var o = new e.URL("b","http://a");
                    return o.pathname = "c d",
                    o.href === "http://a/c%20d" && o.searchParams
                } catch (i) {
                    return !1
                }
            }
              , r = function() {
                var o = e.URL
                  , i = function(p, c) {
                    typeof p != "string" && (p = String(p)),
                    c && typeof c != "string" && (c = String(c));
                    var l = document, f;
                    if (c && (e.location === void 0 || c !== e.location.href)) {
                        c = c.toLowerCase(),
                        l = document.implementation.createHTMLDocument(""),
                        f = l.createElement("base"),
                        f.href = c,
                        l.head.appendChild(f);
                        try {
                            if (f.href.indexOf(c) !== 0)
                                throw new Error(f.href)
                        } catch (M) {
                            throw new Error("URL unable to set base " + c + " due to " + M)
                        }
                    }
                    var m = l.createElement("a");
                    m.href = p,
                    f && (l.body.appendChild(m),
                    m.href = m.href);
                    var d = l.createElement("input");
                    if (d.type = "url",
                    d.value = p,
                    m.protocol === ":" || !/:/.test(m.href) || !d.checkValidity() && !c)
                        throw new TypeError("Invalid URL");
                    Object.defineProperty(this, "_anchorElement", {
                        value: m
                    });
                    var h = new e.URLSearchParams(this.search)
                      , v = !0
                      , Y = !0
                      , X = this;
                    ["append", "delete", "set"].forEach(function(M) {
                        var Ne = h[M];
                        h[M] = function() {
                            Ne.apply(h, arguments),
                            v && (Y = !1,
                            X.search = h.toString(),
                            Y = !0)
                        }
                    }),
                    Object.defineProperty(this, "searchParams", {
                        value: h,
                        enumerable: !0
                    });
                    var K = void 0;
                    Object.defineProperty(this, "_updateSearchParams", {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: function() {
                            this.search !== K && (K = this.search,
                            Y && (v = !1,
                            this.searchParams._fromString(this.search),
                            v = !0))
                        }
                    })
                }
                  , a = i.prototype
                  , s = function(p) {
                    Object.defineProperty(a, p, {
                        get: function() {
                            return this._anchorElement[p]
                        },
                        set: function(c) {
                            this._anchorElement[p] = c
                        },
                        enumerable: !0
                    })
                };
                ["hash", "host", "hostname", "port", "protocol"].forEach(function(p) {
                    s(p)
                }),
                Object.defineProperty(a, "search", {
                    get: function() {
                        return this._anchorElement.search
                    },
                    set: function(p) {
                        this._anchorElement.search = p,
                        this._updateSearchParams()
                    },
                    enumerable: !0
                }),
                Object.defineProperties(a, {
                    toString: {
                        get: function() {
                            var p = this;
                            return function() {
                                return p.href
                            }
                        }
                    },
                    href: {
                        get: function() {
                            return this._anchorElement.href.replace(/\?$/, "")
                        },
                        set: function(p) {
                            this._anchorElement.href = p,
                            this._updateSearchParams()
                        },
                        enumerable: !0
                    },
                    pathname: {
                        get: function() {
                            return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                        },
                        set: function(p) {
                            this._anchorElement.pathname = p
                        },
                        enumerable: !0
                    },
                    origin: {
                        get: function() {
                            var p = {
                                "http:": 80,
                                "https:": 443,
                                "ftp:": 21
                            }[this._anchorElement.protocol]
                              , c = this._anchorElement.port != p && this._anchorElement.port !== "";
                            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (c ? ":" + this._anchorElement.port : "")
                        },
                        enumerable: !0
                    },
                    password: {
                        get: function() {
                            return ""
                        },
                        set: function(p) {},
                        enumerable: !0
                    },
                    username: {
                        get: function() {
                            return ""
                        },
                        set: function(p) {},
                        enumerable: !0
                    }
                }),
                i.createObjectURL = function(p) {
                    return o.createObjectURL.apply(o, arguments)
                }
                ,
                i.revokeObjectURL = function(p) {
                    return o.revokeObjectURL.apply(o, arguments)
                }
                ,
                e.URL = i
            };
            if (t() || r(),
            e.location !== void 0 && !("origin"in e.location)) {
                var n = function() {
                    return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                };
                try {
                    Object.defineProperty(e.location, "origin", {
                        get: n,
                        enumerable: !0
                    })
                } catch (o) {
                    setInterval(function() {
                        e.location.origin = n()
                    }, 100)
                }
            }
        }
        )(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : Rr)
    }
    );
    var nn = Kt((Ut,rn)=>{
        (function(t, r) {
            typeof Ut == "object" && typeof rn == "object" ? rn.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof Ut == "object" ? Ut.ClipboardJS = r() : t.ClipboardJS = r()
        }
        )(Ut, function() {
            return function() {
                var e = {
                    686: function(n, o, i) {
                        "use strict";
                        i.d(o, {
                            default: function() {
                                return Fi
                            }
                        });
                        var a = i(279)
                          , s = i.n(a)
                          , p = i(370)
                          , c = i.n(p)
                          , l = i(817)
                          , f = i.n(l);
                        function m(D) {
                            try {
                                return document.execCommand(D)
                            } catch (A) {
                                return !1
                            }
                        }
                        var d = function(A) {
                            var L = f()(A);
                            return m("cut"),
                            L
                        }
                          , h = d;
                        function v(D) {
                            var A = document.documentElement.getAttribute("dir") === "rtl"
                              , L = document.createElement("textarea");
                            L.style.fontSize = "12pt",
                            L.style.border = "0",
                            L.style.padding = "0",
                            L.style.margin = "0",
                            L.style.position = "absolute",
                            L.style[A ? "right" : "left"] = "-9999px";
                            var I = window.pageYOffset || document.documentElement.scrollTop;
                            return L.style.top = "".concat(I, "px"),
                            L.setAttribute("readonly", ""),
                            L.value = D,
                            L
                        }
                        var Y = function(A, L) {
                            var I = v(A);
                            L.container.appendChild(I);
                            var U = f()(I);
                            return m("copy"),
                            I.remove(),
                            U
                        }
                          , X = function(A) {
                            var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                container: document.body
                            }
                              , I = "";
                            return typeof A == "string" ? I = Y(A, L) : A instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(A == null ? void 0 : A.type) ? I = Y(A.value, L) : (I = f()(A),
                            m("copy")),
                            I
                        }
                          , K = X;
                        function M(D) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? M = function(L) {
                                return typeof L
                            }
                            : M = function(L) {
                                return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L
                            }
                            ,
                            M(D)
                        }
                        var Ne = function() {
                            var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                              , L = A.action
                              , I = L === void 0 ? "copy" : L
                              , U = A.container
                              , G = A.target
                              , Pe = A.text;
                            if (I !== "copy" && I !== "cut")
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (G !== void 0)
                                if (G && M(G) === "object" && G.nodeType === 1) {
                                    if (I === "copy" && G.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if (I === "cut" && (G.hasAttribute("readonly") || G.hasAttribute("disabled")))
                                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                                } else
                                    throw new Error('Invalid "target" value, use a valid Element');
                            if (Pe)
                                return K(Pe, {
                                    container: U
                                });
                            if (G)
                                return I === "cut" ? h(G) : K(G, {
                                    container: U
                                })
                        }
                          , R = Ne;
                        function B(D) {
                            "@babel/helpers - typeof";
                            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(L) {
                                return typeof L
                            }
                            : B = function(L) {
                                return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L
                            }
                            ,
                            B(D)
                        }
                        function se(D, A) {
                            if (!(D instanceof A))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function me(D, A) {
                            for (var L = 0; L < A.length; L++) {
                                var I = A[L];
                                I.enumerable = I.enumerable || !1,
                                I.configurable = !0,
                                "value"in I && (I.writable = !0),
                                Object.defineProperty(D, I.key, I)
                            }
                        }
                        function Ee(D, A, L) {
                            return A && me(D.prototype, A),
                            L && me(D, L),
                            D
                        }
                        function Be(D, A) {
                            if (typeof A != "function" && A !== null)
                                throw new TypeError("Super expression must either be null or a function");
                            D.prototype = Object.create(A && A.prototype, {
                                constructor: {
                                    value: D,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            A && Mr(D, A)
                        }
                        function Mr(D, A) {
                            return Mr = Object.setPrototypeOf || function(I, U) {
                                return I.__proto__ = U,
                                I
                            }
                            ,
                            Mr(D, A)
                        }
                        function Hi(D) {
                            var A = Ii();
                            return function() {
                                var I = zt(D), U;
                                if (A) {
                                    var G = zt(this).constructor;
                                    U = Reflect.construct(I, arguments, G)
                                } else
                                    U = I.apply(this, arguments);
                                return $i(this, U)
                            }
                        }
                        function $i(D, A) {
                            return A && (B(A) === "object" || typeof A == "function") ? A : Pi(D)
                        }
                        function Pi(D) {
                            if (D === void 0)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return D
                        }
                        function Ii() {
                            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                                return !1;
                            if (typeof Proxy == "function")
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                                !0
                            } catch (D) {
                                return !1
                            }
                        }
                        function zt(D) {
                            return zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(L) {
                                return L.__proto__ || Object.getPrototypeOf(L)
                            }
                            ,
                            zt(D)
                        }
                        function Lr(D, A) {
                            var L = "data-clipboard-".concat(D);
                            if (A.hasAttribute(L))
                                return A.getAttribute(L)
                        }
                        var ji = function(D) {
                            Be(L, D);
                            var A = Hi(L);
                            function L(I, U) {
                                var G;
                                return se(this, L),
                                G = A.call(this),
                                G.resolveOptions(U),
                                G.listenClick(I),
                                G
                            }
                            return Ee(L, [{
                                key: "resolveOptions",
                                value: function() {
                                    var U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                    this.action = typeof U.action == "function" ? U.action : this.defaultAction,
                                    this.target = typeof U.target == "function" ? U.target : this.defaultTarget,
                                    this.text = typeof U.text == "function" ? U.text : this.defaultText,
                                    this.container = B(U.container) === "object" ? U.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(U) {
                                    var G = this;
                                    this.listener = c()(U, "click", function(Pe) {
                                        return G.onClick(Pe)
                                    })
                                }
                            }, {
                                key: "onClick",
                                value: function(U) {
                                    var G = U.delegateTarget || U.currentTarget
                                      , Pe = this.action(G) || "copy"
                                      , Vt = R({
                                        action: Pe,
                                        container: this.container,
                                        target: this.target(G),
                                        text: this.text(G)
                                    });
                                    this.emit(Vt ? "success" : "error", {
                                        action: Pe,
                                        text: Vt,
                                        trigger: G,
                                        clearSelection: function() {
                                            G && G.focus(),
                                            window.getSelection().removeAllRanges()
                                        }
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function(U) {
                                    return Lr("action", U)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function(U) {
                                    var G = Lr("target", U);
                                    if (G)
                                        return document.querySelector(G)
                                }
                            }, {
                                key: "defaultText",
                                value: function(U) {
                                    return Lr("text", U)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.listener.destroy()
                                }
                            }], [{
                                key: "copy",
                                value: function(U) {
                                    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                        container: document.body
                                    };
                                    return K(U, G)
                                }
                            }, {
                                key: "cut",
                                value: function(U) {
                                    return h(U)
                                }
                            }, {
                                key: "isSupported",
                                value: function() {
                                    var U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"]
                                      , G = typeof U == "string" ? [U] : U
                                      , Pe = !!document.queryCommandSupported;
                                    return G.forEach(function(Vt) {
                                        Pe = Pe && !!document.queryCommandSupported(Vt)
                                    }),
                                    Pe
                                }
                            }]),
                            L
                        }(s())
                          , Fi = ji
                    },
                    828: function(n) {
                        var o = 9;
                        if (typeof Element != "undefined" && !Element.prototype.matches) {
                            var i = Element.prototype;
                            i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                        }
                        function a(s, p) {
                            for (; s && s.nodeType !== o; ) {
                                if (typeof s.matches == "function" && s.matches(p))
                                    return s;
                                s = s.parentNode
                            }
                        }
                        n.exports = a
                    },
                    438: function(n, o, i) {
                        var a = i(828);
                        function s(l, f, m, d, h) {
                            var v = c.apply(this, arguments);
                            return l.addEventListener(m, v, h),
                            {
                                destroy: function() {
                                    l.removeEventListener(m, v, h)
                                }
                            }
                        }
                        function p(l, f, m, d, h) {
                            return typeof l.addEventListener == "function" ? s.apply(null, arguments) : typeof m == "function" ? s.bind(null, document).apply(null, arguments) : (typeof l == "string" && (l = document.querySelectorAll(l)),
                            Array.prototype.map.call(l, function(v) {
                                return s(v, f, m, d, h)
                            }))
                        }
                        function c(l, f, m, d) {
                            return function(h) {
                                h.delegateTarget = a(h.target, f),
                                h.delegateTarget && d.call(l, h)
                            }
                        }
                        n.exports = p
                    },
                    879: function(n, o) {
                        o.node = function(i) {
                            return i !== void 0 && i instanceof HTMLElement && i.nodeType === 1
                        }
                        ,
                        o.nodeList = function(i) {
                            var a = Object.prototype.toString.call(i);
                            return i !== void 0 && (a === "[object NodeList]" || a === "[object HTMLCollection]") && "length"in i && (i.length === 0 || o.node(i[0]))
                        }
                        ,
                        o.string = function(i) {
                            return typeof i == "string" || i instanceof String
                        }
                        ,
                        o.fn = function(i) {
                            var a = Object.prototype.toString.call(i);
                            return a === "[object Function]"
                        }
                    },
                    370: function(n, o, i) {
                        var a = i(879)
                          , s = i(438);
                        function p(m, d, h) {
                            if (!m && !d && !h)
                                throw new Error("Missing required arguments");
                            if (!a.string(d))
                                throw new TypeError("Second argument must be a String");
                            if (!a.fn(h))
                                throw new TypeError("Third argument must be a Function");
                            if (a.node(m))
                                return c(m, d, h);
                            if (a.nodeList(m))
                                return l(m, d, h);
                            if (a.string(m))
                                return f(m, d, h);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                        }
                        function c(m, d, h) {
                            return m.addEventListener(d, h),
                            {
                                destroy: function() {
                                    m.removeEventListener(d, h)
                                }
                            }
                        }
                        function l(m, d, h) {
                            return Array.prototype.forEach.call(m, function(v) {
                                v.addEventListener(d, h)
                            }),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(m, function(v) {
                                        v.removeEventListener(d, h)
                                    })
                                }
                            }
                        }
                        function f(m, d, h) {
                            return s(document.body, m, d, h)
                        }
                        n.exports = p
                    },
                    817: function(n) {
                        function o(i) {
                            var a;
                            if (i.nodeName === "SELECT")
                                i.focus(),
                                a = i.value;
                            else if (i.nodeName === "INPUT" || i.nodeName === "TEXTAREA") {
                                var s = i.hasAttribute("readonly");
                                s || i.setAttribute("readonly", ""),
                                i.select(),
                                i.setSelectionRange(0, i.value.length),
                                s || i.removeAttribute("readonly"),
                                a = i.value
                            } else {
                                i.hasAttribute("contenteditable") && i.focus();
                                var p = window.getSelection()
                                  , c = document.createRange();
                                c.selectNodeContents(i),
                                p.removeAllRanges(),
                                p.addRange(c),
                                a = p.toString()
                            }
                            return a
                        }
                        n.exports = o
                    },
                    279: function(n) {
                        function o() {}
                        o.prototype = {
                            on: function(i, a, s) {
                                var p = this.e || (this.e = {});
                                return (p[i] || (p[i] = [])).push({
                                    fn: a,
                                    ctx: s
                                }),
                                this
                            },
                            once: function(i, a, s) {
                                var p = this;
                                function c() {
                                    p.off(i, c),
                                    a.apply(s, arguments)
                                }
                                return c._ = a,
                                this.on(i, c, s)
                            },
                            emit: function(i) {
                                var a = [].slice.call(arguments, 1)
                                  , s = ((this.e || (this.e = {}))[i] || []).slice()
                                  , p = 0
                                  , c = s.length;
                                for (p; p < c; p++)
                                    s[p].fn.apply(s[p].ctx, a);
                                return this
                            },
                            off: function(i, a) {
                                var s = this.e || (this.e = {})
                                  , p = s[i]
                                  , c = [];
                                if (p && a)
                                    for (var l = 0, f = p.length; l < f; l++)
                                        p[l].fn !== a && p[l].fn._ !== a && c.push(p[l]);
                                return c.length ? s[i] = c : delete s[i],
                                this
                            }
                        },
                        n.exports = o,
                        n.exports.TinyEmitter = o
                    }
                }
                  , t = {};
                function r(n) {
                    if (t[n])
                        return t[n].exports;
                    var o = t[n] = {
                        exports: {}
                    };
                    return e[n](o, o.exports, r),
                    o.exports
                }
                return function() {
                    r.n = function(n) {
                        var o = n && n.__esModule ? function() {
                            return n.default
                        }
                        : function() {
                            return n
                        }
                        ;
                        return r.d(o, {
                            a: o
                        }),
                        o
                    }
                }(),
                function() {
                    r.d = function(n, o) {
                        for (var i in o)
                            r.o(o, i) && !r.o(n, i) && Object.defineProperty(n, i, {
                                enumerable: !0,
                                get: o[i]
                            })
                    }
                }(),
                function() {
                    r.o = function(n, o) {
                        return Object.prototype.hasOwnProperty.call(n, o)
                    }
                }(),
                r(686)
            }().default
        })
    }
    );
    var ai = Kt((tS,ii)=>{
        "use strict";
        var hs = /["'&<>]/;
        ii.exports = bs;
        function bs(e) {
            var t = "" + e
              , r = hs.exec(t);
            if (!r)
                return t;
            var n, o = "", i = 0, a = 0;
            for (i = r.index; i < t.length; i++) {
                switch (t.charCodeAt(i)) {
                case 34:
                    n = "&quot;";
                    break;
                case 38:
                    n = "&amp;";
                    break;
                case 39:
                    n = "&#39;";
                    break;
                case 60:
                    n = "&lt;";
                    break;
                case 62:
                    n = "&gt;";
                    break;
                default:
                    continue
                }
                a !== i && (o += t.substring(a, i)),
                a = i + 1,
                o += n
            }
            return a !== i ? o + t.substring(a, i) : o
        }
    }
    );
    Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function e() {
            var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return t ? Array.prototype.reduce.call(this, function(r, n) {
                return Array.isArray(n) ? r.push.apply(r, e.call(n, t - 1)) : r.push(n),
                r
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }),
    Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function(e) {
            return Array.prototype.map.apply(this, arguments).flat()
        },
        writable: !0
    });
    var I0 = Lt(hn());
    (()=>{
        function e(n, o) {
            parent.postMessage(n, o || "*")
        }
        function t(...n) {
            return n.reduce((o,i)=>o.then(()=>new Promise(a=>{
                let s = document.createElement("script");
                s.src = i,
                s.onload = a,
                document.body.appendChild(s)
            }
            )), Promise.resolve())
        }
        var r = class extends EventTarget {
            constructor(n) {
                super(),
                this.url = n,
                this.m = i=>{
                    i.source === this.w && (this.dispatchEvent(new MessageEvent("message",{
                        data: i.data
                    })),
                    this.onmessage && this.onmessage(i))
                }
                ,
                this.e = (i,a,s,p,c)=>{
                    if (a === `${this.url}`) {
                        let l = new ErrorEvent("error",{
                            message: i,
                            filename: a,
                            lineno: s,
                            colno: p,
                            error: c
                        });
                        this.dispatchEvent(l),
                        this.onerror && this.onerror(l)
                    }
                }
                ;
                let o = document.createElement("iframe");
                o.hidden = !0,
                document.body.appendChild(this.iframe = o),
                this.w.document.open(),
                this.w.document.write(`<html><body><script>postMessage=${e};importScripts=${t};addEventListener("error",ev=>{parent.dispatchEvent(new ErrorEvent("error",{filename:"${n}",error:ev.error}))})<\/script><script src=${n}?${+Date.now()}><\/script></body></html>`),
                this.w.document.close(),
                onmessage = this.m,
                onerror = this.e,
                this.r = new Promise((i,a)=>{
                    this.w.onload = i,
                    this.w.onerror = a
                }
                )
            }
            terminate() {
                document.body.removeChild(this.iframe),
                onmessage = onerror = null
            }
            postMessage(n) {
                this.r.catch().then(()=>{
                    this.w.dispatchEvent(new MessageEvent("message",{
                        data: n
                    }))
                }
                )
            }
            get w() {
                return this.iframe.contentWindow
            }
        }
        ;
        window.IFrameWorker = r,
        location.protocol === "file:" && (window.Worker = r)
    }
    )();
    self.fetch || (self.fetch = function(e, t) {
        return t = t || {},
        new Promise(function(r, n) {
            var o = new XMLHttpRequest
              , i = []
              , a = {}
              , s = function c() {
                return {
                    ok: (o.status / 100 | 0) == 2,
                    statusText: o.statusText,
                    status: o.status,
                    url: o.responseURL,
                    text: function() {
                        return Promise.resolve(o.responseText)
                    },
                    json: function() {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([o.response]))
                    },
                    clone: c,
                    headers: {
                        keys: function() {
                            return i
                        },
                        entries: function() {
                            return i.map(function(l) {
                                return [l, o.getResponseHeader(l)]
                            })
                        },
                        get: function(l) {
                            return o.getResponseHeader(l)
                        },
                        has: function(l) {
                            return o.getResponseHeader(l) != null
                        }
                    }
                }
            };
            for (var p in o.open(t.method || "get", e, !0),
            o.onload = function() {
                o.getAllResponseHeaders().toLowerCase().replace(/^(.+?):/gm, function(c, l) {
                    a[l] || i.push(a[l] = l)
                }),
                r(s())
            }
            ,
            o.onerror = n,
            o.withCredentials = t.credentials == "include",
            t.headers)
                o.setRequestHeader(p, t.headers[p]);
            o.send(t.body || null)
        }
        )
    }
    );
    var U0 = Lt(bn());
    var Hr = function(e, t) {
        return Hr = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, n) {
            r.__proto__ = n
        }
        || function(r, n) {
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
        }
        ,
        Hr(e, t)
    };
    function fe(e, t) {
        if (typeof t != "function" && t !== null)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        Hr(e, t);
        function r() {
            this.constructor = e
        }
        e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
        new r)
    }
    function vn(e, t, r, n) {
        function o(i) {
            return i instanceof r ? i : new r(function(a) {
                a(i)
            }
            )
        }
        return new (r || (r = Promise))(function(i, a) {
            function s(l) {
                try {
                    c(n.next(l))
                } catch (f) {
                    a(f)
                }
            }
            function p(l) {
                try {
                    c(n.throw(l))
                } catch (f) {
                    a(f)
                }
            }
            function c(l) {
                l.done ? i(l.value) : o(l.value).then(s, p)
            }
            c((n = n.apply(e, t || [])).next())
        }
        )
    }
    function Yt(e, t) {
        var r = {
            label: 0,
            sent: function() {
                if (i[0] & 1)
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        }, n, o, i, a;
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        typeof Symbol == "function" && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function s(c) {
            return function(l) {
                return p([c, l])
            }
        }
        function p(c) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; r; )
                try {
                    if (n = 1,
                    o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o),
                    0) : o.next) && !(i = i.call(o, c[1])).done)
                        return i;
                    switch (o = 0,
                    i && (c = [c[0] & 2, i.value]),
                    c[0]) {
                    case 0:
                    case 1:
                        i = c;
                        break;
                    case 4:
                        return r.label++,
                        {
                            value: c[1],
                            done: !1
                        };
                    case 5:
                        r.label++,
                        o = c[1],
                        c = [0];
                        continue;
                    case 7:
                        c = r.ops.pop(),
                        r.trys.pop();
                        continue;
                    default:
                        if (i = r.trys,
                        !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                            r = 0;
                            continue
                        }
                        if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                            r.label = c[1];
                            break
                        }
                        if (c[0] === 6 && r.label < i[1]) {
                            r.label = i[1],
                            i = c;
                            break
                        }
                        if (i && r.label < i[2]) {
                            r.label = i[2],
                            r.ops.push(c);
                            break
                        }
                        i[2] && r.ops.pop(),
                        r.trys.pop();
                        continue
                    }
                    c = t.call(e, r)
                } catch (l) {
                    c = [6, l],
                    o = 0
                } finally {
                    n = i = 0
                }
            if (c[0] & 5)
                throw c[1];
            return {
                value: c[0] ? c[1] : void 0,
                done: !0
            }
        }
    }
    function we(e) {
        var t = typeof Symbol == "function" && Symbol.iterator
          , r = t && e[t]
          , n = 0;
        if (r)
            return r.call(e);
        if (e && typeof e.length == "number")
            return {
                next: function() {
                    return e && n >= e.length && (e = void 0),
                    {
                        value: e && e[n++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function q(e, t) {
        var r = typeof Symbol == "function" && e[Symbol.iterator];
        if (!r)
            return e;
        var n = r.call(e), o, i = [], a;
        try {
            for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
                i.push(o.value)
        } catch (s) {
            a = {
                error: s
            }
        } finally {
            try {
                o && !o.done && (r = n.return) && r.call(n)
            } finally {
                if (a)
                    throw a.error
            }
        }
        return i
    }
    function Q(e, t, r) {
        if (r || arguments.length === 2)
            for (var n = 0, o = t.length, i; n < o; n++)
                (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
                i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    function ct(e) {
        return this instanceof ct ? (this.v = e,
        this) : new ct(e)
    }
    function gn(e, t, r) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = r.apply(e, t || []), o, i = [];
        return o = {},
        a("next"),
        a("throw"),
        a("return"),
        o[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        o;
        function a(m) {
            n[m] && (o[m] = function(d) {
                return new Promise(function(h, v) {
                    i.push([m, d, h, v]) > 1 || s(m, d)
                }
                )
            }
            )
        }
        function s(m, d) {
            try {
                p(n[m](d))
            } catch (h) {
                f(i[0][3], h)
            }
        }
        function p(m) {
            m.value instanceof ct ? Promise.resolve(m.value.v).then(c, l) : f(i[0][2], m)
        }
        function c(m) {
            s("next", m)
        }
        function l(m) {
            s("throw", m)
        }
        function f(m, d) {
            m(d),
            i.shift(),
            i.length && s(i[0][0], i[0][1])
        }
    }
    function yn(e) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = e[Symbol.asyncIterator], r;
        return t ? t.call(e) : (e = typeof we == "function" ? we(e) : e[Symbol.iterator](),
        r = {},
        n("next"),
        n("throw"),
        n("return"),
        r[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        r);
        function n(i) {
            r[i] = e[i] && function(a) {
                return new Promise(function(s, p) {
                    a = e[i](a),
                    o(s, p, a.done, a.value)
                }
                )
            }
        }
        function o(i, a, s, p) {
            Promise.resolve(p).then(function(c) {
                i({
                    value: c,
                    done: s
                })
            }, a)
        }
    }
    function k(e) {
        return typeof e == "function"
    }
    function mt(e) {
        var t = function(n) {
            Error.call(n),
            n.stack = new Error().stack
        }
          , r = e(t);
        return r.prototype = Object.create(Error.prototype),
        r.prototype.constructor = r,
        r
    }
    var Qt = mt(function(e) {
        return function(r) {
            e(this),
            this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `) : "",
            this.name = "UnsubscriptionError",
            this.errors = r
        }
    });
    function Ge(e, t) {
        if (e) {
            var r = e.indexOf(t);
            0 <= r && e.splice(r, 1)
        }
    }
    var ze = function() {
        function e(t) {
            this.initialTeardown = t,
            this.closed = !1,
            this._parentage = null,
            this._finalizers = null
        }
        return e.prototype.unsubscribe = function() {
            var t, r, n, o, i;
            if (!this.closed) {
                this.closed = !0;
                var a = this._parentage;
                if (a)
                    if (this._parentage = null,
                    Array.isArray(a))
                        try {
                            for (var s = we(a), p = s.next(); !p.done; p = s.next()) {
                                var c = p.value;
                                c.remove(this)
                            }
                        } catch (v) {
                            t = {
                                error: v
                            }
                        } finally {
                            try {
                                p && !p.done && (r = s.return) && r.call(s)
                            } finally {
                                if (t)
                                    throw t.error
                            }
                        }
                    else
                        a.remove(this);
                var l = this.initialTeardown;
                if (k(l))
                    try {
                        l()
                    } catch (v) {
                        i = v instanceof Qt ? v.errors : [v]
                    }
                var f = this._finalizers;
                if (f) {
                    this._finalizers = null;
                    try {
                        for (var m = we(f), d = m.next(); !d.done; d = m.next()) {
                            var h = d.value;
                            try {
                                xn(h)
                            } catch (v) {
                                i = i != null ? i : [],
                                v instanceof Qt ? i = Q(Q([], q(i)), q(v.errors)) : i.push(v)
                            }
                        }
                    } catch (v) {
                        n = {
                            error: v
                        }
                    } finally {
                        try {
                            d && !d.done && (o = m.return) && o.call(m)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                if (i)
                    throw new Qt(i)
            }
        }
        ,
        e.prototype.add = function(t) {
            var r;
            if (t && t !== this)
                if (this.closed)
                    xn(t);
                else {
                    if (t instanceof e) {
                        if (t.closed || t._hasParent(this))
                            return;
                        t._addParent(this)
                    }
                    (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t)
                }
        }
        ,
        e.prototype._hasParent = function(t) {
            var r = this._parentage;
            return r === t || Array.isArray(r) && r.includes(t)
        }
        ,
        e.prototype._addParent = function(t) {
            var r = this._parentage;
            this._parentage = Array.isArray(r) ? (r.push(t),
            r) : r ? [r, t] : t
        }
        ,
        e.prototype._removeParent = function(t) {
            var r = this._parentage;
            r === t ? this._parentage = null : Array.isArray(r) && Ge(r, t)
        }
        ,
        e.prototype.remove = function(t) {
            var r = this._finalizers;
            r && Ge(r, t),
            t instanceof e && t._removeParent(this)
        }
        ,
        e.EMPTY = function() {
            var t = new e;
            return t.closed = !0,
            t
        }(),
        e
    }();
    var $r = ze.EMPTY;
    function Bt(e) {
        return e instanceof ze || e && "closed"in e && k(e.remove) && k(e.add) && k(e.unsubscribe)
    }
    function xn(e) {
        k(e) ? e() : e.unsubscribe()
    }
    var Ie = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var dt = {
        setTimeout: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = dt.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, Q([e, t], q(r))) : setTimeout.apply(void 0, Q([e, t], q(r)))
        },
        clearTimeout: function(e) {
            var t = dt.delegate;
            return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };
    function Gt(e) {
        dt.setTimeout(function() {
            var t = Ie.onUnhandledError;
            if (t)
                t(e);
            else
                throw e
        })
    }
    function Ce() {}
    var En = function() {
        return Pr("C", void 0, void 0)
    }();
    function wn(e) {
        return Pr("E", void 0, e)
    }
    function Sn(e) {
        return Pr("N", e, void 0)
    }
    function Pr(e, t, r) {
        return {
            kind: e,
            value: t,
            error: r
        }
    }
    var pt = null;
    function ht(e) {
        if (Ie.useDeprecatedSynchronousErrorHandling) {
            var t = !pt;
            if (t && (pt = {
                errorThrown: !1,
                error: null
            }),
            e(),
            t) {
                var r = pt
                  , n = r.errorThrown
                  , o = r.error;
                if (pt = null,
                n)
                    throw o
            }
        } else
            e()
    }
    function Tn(e) {
        Ie.useDeprecatedSynchronousErrorHandling && pt && (pt.errorThrown = !0,
        pt.error = e)
    }
    var At = function(e) {
        fe(t, e);
        function t(r) {
            var n = e.call(this) || this;
            return n.isStopped = !1,
            r ? (n.destination = r,
            Bt(r) && r.add(n)) : n.destination = Yi,
            n
        }
        return t.create = function(r, n, o) {
            return new lt(r,n,o)
        }
        ,
        t.prototype.next = function(r) {
            this.isStopped ? jr(Sn(r), this) : this._next(r)
        }
        ,
        t.prototype.error = function(r) {
            this.isStopped ? jr(wn(r), this) : (this.isStopped = !0,
            this._error(r))
        }
        ,
        t.prototype.complete = function() {
            this.isStopped ? jr(En, this) : (this.isStopped = !0,
            this._complete())
        }
        ,
        t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0,
            e.prototype.unsubscribe.call(this),
            this.destination = null)
        }
        ,
        t.prototype._next = function(r) {
            this.destination.next(r)
        }
        ,
        t.prototype._error = function(r) {
            try {
                this.destination.error(r)
            } finally {
                this.unsubscribe()
            }
        }
        ,
        t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
        ,
        t
    }(ze);
    var Vi = Function.prototype.bind;
    function Ir(e, t) {
        return Vi.call(e, t)
    }
    var qi = function() {
        function e(t) {
            this.partialObserver = t
        }
        return e.prototype.next = function(t) {
            var r = this.partialObserver;
            if (r.next)
                try {
                    r.next(t)
                } catch (n) {
                    Jt(n)
                }
        }
        ,
        e.prototype.error = function(t) {
            var r = this.partialObserver;
            if (r.error)
                try {
                    r.error(t)
                } catch (n) {
                    Jt(n)
                }
            else
                Jt(t)
        }
        ,
        e.prototype.complete = function() {
            var t = this.partialObserver;
            if (t.complete)
                try {
                    t.complete()
                } catch (r) {
                    Jt(r)
                }
        }
        ,
        e
    }()
      , lt = function(e) {
        fe(t, e);
        function t(r, n, o) {
            var i = e.call(this) || this, a;
            if (k(r) || !r)
                a = {
                    next: r != null ? r : void 0,
                    error: n != null ? n : void 0,
                    complete: o != null ? o : void 0
                };
            else {
                var s;
                i && Ie.useDeprecatedNextContext ? (s = Object.create(r),
                s.unsubscribe = function() {
                    return i.unsubscribe()
                }
                ,
                a = {
                    next: r.next && Ir(r.next, s),
                    error: r.error && Ir(r.error, s),
                    complete: r.complete && Ir(r.complete, s)
                }) : a = r
            }
            return i.destination = new qi(a),
            i
        }
        return t
    }(At);
    function Jt(e) {
        Ie.useDeprecatedSynchronousErrorHandling ? Tn(e) : Gt(e)
    }
    function Ki(e) {
        throw e
    }
    function jr(e, t) {
        var r = Ie.onStoppedNotification;
        r && dt.setTimeout(function() {
            return r(e, t)
        })
    }
    var Yi = {
        closed: !0,
        next: Ce,
        error: Ki,
        complete: Ce
    };
    var bt = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();
    function de(e) {
        return e
    }
    function On() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Fr(e)
    }
    function Fr(e) {
        return e.length === 0 ? de : e.length === 1 ? e[0] : function(r) {
            return e.reduce(function(n, o) {
                return o(n)
            }, r)
        }
    }
    var N = function() {
        function e(t) {
            t && (this._subscribe = t)
        }
        return e.prototype.lift = function(t) {
            var r = new e;
            return r.source = this,
            r.operator = t,
            r
        }
        ,
        e.prototype.subscribe = function(t, r, n) {
            var o = this
              , i = Bi(t) ? t : new lt(t,r,n);
            return ht(function() {
                var a = o
                  , s = a.operator
                  , p = a.source;
                i.add(s ? s.call(i, p) : p ? o._subscribe(i) : o._trySubscribe(i))
            }),
            i
        }
        ,
        e.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (r) {
                t.error(r)
            }
        }
        ,
        e.prototype.forEach = function(t, r) {
            var n = this;
            return r = _n(r),
            new r(function(o, i) {
                var a = new lt({
                    next: function(s) {
                        try {
                            t(s)
                        } catch (p) {
                            i(p),
                            a.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                n.subscribe(a)
            }
            )
        }
        ,
        e.prototype._subscribe = function(t) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)
        }
        ,
        e.prototype[bt] = function() {
            return this
        }
        ,
        e.prototype.pipe = function() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return Fr(t)(this)
        }
        ,
        e.prototype.toPromise = function(t) {
            var r = this;
            return t = _n(t),
            new t(function(n, o) {
                var i;
                r.subscribe(function(a) {
                    return i = a
                }, function(a) {
                    return o(a)
                }, function() {
                    return n(i)
                })
            }
            )
        }
        ,
        e.create = function(t) {
            return new e(t)
        }
        ,
        e
    }();
    function _n(e) {
        var t;
        return (t = e != null ? e : Ie.Promise) !== null && t !== void 0 ? t : Promise
    }
    function Qi(e) {
        return e && k(e.next) && k(e.error) && k(e.complete)
    }
    function Bi(e) {
        return e && e instanceof At || Qi(e) && Bt(e)
    }
    function Gi(e) {
        return k(e == null ? void 0 : e.lift)
    }
    function E(e) {
        return function(t) {
            if (Gi(t))
                return t.lift(function(r) {
                    try {
                        return e(r, this)
                    } catch (n) {
                        this.error(n)
                    }
                });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }
    function _(e, t, r, n, o) {
        return new Ji(e,t,r,n,o)
    }
    var Ji = function(e) {
        fe(t, e);
        function t(r, n, o, i, a, s) {
            var p = e.call(this, r) || this;
            return p.onFinalize = a,
            p.shouldUnsubscribe = s,
            p._next = n ? function(c) {
                try {
                    n(c)
                } catch (l) {
                    r.error(l)
                }
            }
            : e.prototype._next,
            p._error = i ? function(c) {
                try {
                    i(c)
                } catch (l) {
                    r.error(l)
                } finally {
                    this.unsubscribe()
                }
            }
            : e.prototype._error,
            p._complete = o ? function() {
                try {
                    o()
                } catch (c) {
                    r.error(c)
                } finally {
                    this.unsubscribe()
                }
            }
            : e.prototype._complete,
            p
        }
        return t.prototype.unsubscribe = function() {
            var r;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                e.prototype.unsubscribe.call(this),
                !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this))
            }
        }
        ,
        t
    }(At);
    var vt = {
        schedule: function(e) {
            var t = requestAnimationFrame
              , r = cancelAnimationFrame
              , n = vt.delegate;
            n && (t = n.requestAnimationFrame,
            r = n.cancelAnimationFrame);
            var o = t(function(i) {
                r = void 0,
                e(i)
            });
            return new ze(function() {
                return r == null ? void 0 : r(o)
            }
            )
        },
        requestAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = vt.delegate;
            return ((r == null ? void 0 : r.requestAnimationFrame) || requestAnimationFrame).apply(void 0, Q([], q(e)))
        },
        cancelAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = vt.delegate;
            return ((r == null ? void 0 : r.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, Q([], q(e)))
        },
        delegate: void 0
    };
    var Mn = mt(function(e) {
        return function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
    });
    var S = function(e) {
        fe(t, e);
        function t() {
            var r = e.call(this) || this;
            return r.closed = !1,
            r.currentObservers = null,
            r.observers = [],
            r.isStopped = !1,
            r.hasError = !1,
            r.thrownError = null,
            r
        }
        return t.prototype.lift = function(r) {
            var n = new Ln(this,this);
            return n.operator = r,
            n
        }
        ,
        t.prototype._throwIfClosed = function() {
            if (this.closed)
                throw new Mn
        }
        ,
        t.prototype.next = function(r) {
            var n = this;
            ht(function() {
                var o, i;
                if (n._throwIfClosed(),
                !n.isStopped) {
                    n.currentObservers || (n.currentObservers = Array.from(n.observers));
                    try {
                        for (var a = we(n.currentObservers), s = a.next(); !s.done; s = a.next()) {
                            var p = s.value;
                            p.next(r)
                        }
                    } catch (c) {
                        o = {
                            error: c
                        }
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                }
            })
        }
        ,
        t.prototype.error = function(r) {
            var n = this;
            ht(function() {
                if (n._throwIfClosed(),
                !n.isStopped) {
                    n.hasError = n.isStopped = !0,
                    n.thrownError = r;
                    for (var o = n.observers; o.length; )
                        o.shift().error(r)
                }
            })
        }
        ,
        t.prototype.complete = function() {
            var r = this;
            ht(function() {
                if (r._throwIfClosed(),
                !r.isStopped) {
                    r.isStopped = !0;
                    for (var n = r.observers; n.length; )
                        n.shift().complete()
                }
            })
        }
        ,
        t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }
        ,
        Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var r;
                return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype._trySubscribe = function(r) {
            return this._throwIfClosed(),
            e.prototype._trySubscribe.call(this, r)
        }
        ,
        t.prototype._subscribe = function(r) {
            return this._throwIfClosed(),
            this._checkFinalizedStatuses(r),
            this._innerSubscribe(r)
        }
        ,
        t.prototype._innerSubscribe = function(r) {
            var n = this
              , o = this
              , i = o.hasError
              , a = o.isStopped
              , s = o.observers;
            return i || a ? $r : (this.currentObservers = null,
            s.push(r),
            new ze(function() {
                n.currentObservers = null,
                Ge(s, r)
            }
            ))
        }
        ,
        t.prototype._checkFinalizedStatuses = function(r) {
            var n = this
              , o = n.hasError
              , i = n.thrownError
              , a = n.isStopped;
            o ? r.error(i) : a && r.complete()
        }
        ,
        t.prototype.asObservable = function() {
            var r = new N;
            return r.source = this,
            r
        }
        ,
        t.create = function(r, n) {
            return new Ln(r,n)
        }
        ,
        t
    }(N);
    var Ln = function(e) {
        fe(t, e);
        function t(r, n) {
            var o = e.call(this) || this;
            return o.destination = r,
            o.source = n,
            o
        }
        return t.prototype.next = function(r) {
            var n, o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r)
        }
        ,
        t.prototype.error = function(r) {
            var n, o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r)
        }
        ,
        t.prototype.complete = function() {
            var r, n;
            (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r)
        }
        ,
        t.prototype._subscribe = function(r) {
            var n, o;
            return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : $r
        }
        ,
        t
    }(S);
    var Ct = {
        now: function() {
            return (Ct.delegate || Date).now()
        },
        delegate: void 0
    };
    var kt = function(e) {
        fe(t, e);
        function t(r, n, o) {
            r === void 0 && (r = 1 / 0),
            n === void 0 && (n = 1 / 0),
            o === void 0 && (o = Ct);
            var i = e.call(this) || this;
            return i._bufferSize = r,
            i._windowTime = n,
            i._timestampProvider = o,
            i._buffer = [],
            i._infiniteTimeWindow = !0,
            i._infiniteTimeWindow = n === 1 / 0,
            i._bufferSize = Math.max(1, r),
            i._windowTime = Math.max(1, n),
            i
        }
        return t.prototype.next = function(r) {
            var n = this
              , o = n.isStopped
              , i = n._buffer
              , a = n._infiniteTimeWindow
              , s = n._timestampProvider
              , p = n._windowTime;
            o || (i.push(r),
            !a && i.push(s.now() + p)),
            this._trimBuffer(),
            e.prototype.next.call(this, r)
        }
        ,
        t.prototype._subscribe = function(r) {
            this._throwIfClosed(),
            this._trimBuffer();
            for (var n = this._innerSubscribe(r), o = this, i = o._infiniteTimeWindow, a = o._buffer, s = a.slice(), p = 0; p < s.length && !r.closed; p += i ? 1 : 2)
                r.next(s[p]);
            return this._checkFinalizedStatuses(r),
            n
        }
        ,
        t.prototype._trimBuffer = function() {
            var r = this
              , n = r._bufferSize
              , o = r._timestampProvider
              , i = r._buffer
              , a = r._infiniteTimeWindow
              , s = (a ? 1 : 2) * n;
            if (n < 1 / 0 && s < i.length && i.splice(0, i.length - s),
            !a) {
                for (var p = o.now(), c = 0, l = 1; l < i.length && i[l] <= p; l += 2)
                    c = l;
                c && i.splice(0, c + 1)
            }
        }
        ,
        t
    }(S);
    var An = function(e) {
        fe(t, e);
        function t(r, n) {
            return e.call(this) || this
        }
        return t.prototype.schedule = function(r, n) {
            return n === void 0 && (n = 0),
            this
        }
        ,
        t
    }(ze);
    var Rt = {
        setInterval: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = Rt.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, Q([e, t], q(r))) : setInterval.apply(void 0, Q([e, t], q(r)))
        },
        clearInterval: function(e) {
            var t = Rt.delegate;
            return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var Xt = function(e) {
        fe(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r,
            o.work = n,
            o.pending = !1,
            o
        }
        return t.prototype.schedule = function(r, n) {
            var o;
            if (n === void 0 && (n = 0),
            this.closed)
                return this;
            this.state = r;
            var i = this.id
              , a = this.scheduler;
            return i != null && (this.id = this.recycleAsyncId(a, i, n)),
            this.pending = !0,
            this.delay = n,
            this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(a, this.id, n),
            this
        }
        ,
        t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0),
            Rt.setInterval(r.flush.bind(r, this), o)
        }
        ,
        t.prototype.recycleAsyncId = function(r, n, o) {
            if (o === void 0 && (o = 0),
            o != null && this.delay === o && this.pending === !1)
                return n;
            n != null && Rt.clearInterval(n)
        }
        ,
        t.prototype.execute = function(r, n) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(r, n);
            if (o)
                return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
        ,
        t.prototype._execute = function(r, n) {
            var o = !1, i;
            try {
                this.work(r)
            } catch (a) {
                o = !0,
                i = a || new Error("Scheduled action threw falsy error")
            }
            if (o)
                return this.unsubscribe(),
                i
        }
        ,
        t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var r = this
                  , n = r.id
                  , o = r.scheduler
                  , i = o.actions;
                this.work = this.state = this.scheduler = null,
                this.pending = !1,
                Ge(i, this),
                n != null && (this.id = this.recycleAsyncId(o, n, null)),
                this.delay = null,
                e.prototype.unsubscribe.call(this)
            }
        }
        ,
        t
    }(An);
    var Ur = function() {
        function e(t, r) {
            r === void 0 && (r = e.now),
            this.schedulerActionCtor = t,
            this.now = r
        }
        return e.prototype.schedule = function(t, r, n) {
            return r === void 0 && (r = 0),
            new this.schedulerActionCtor(this,t).schedule(n, r)
        }
        ,
        e.now = Ct.now,
        e
    }();
    var Zt = function(e) {
        fe(t, e);
        function t(r, n) {
            n === void 0 && (n = Ur.now);
            var o = e.call(this, r, n) || this;
            return o.actions = [],
            o._active = !1,
            o
        }
        return t.prototype.flush = function(r) {
            var n = this.actions;
            if (this._active) {
                n.push(r);
                return
            }
            var o;
            this._active = !0;
            do
                if (o = r.execute(r.state, r.delay))
                    break;
            while (r = n.shift());
            if (this._active = !1,
            o) {
                for (; r = n.shift(); )
                    r.unsubscribe();
                throw o
            }
        }
        ,
        t
    }(Ur);
    var ce = new Zt(Xt)
      , Wr = ce;
    var Cn = function(e) {
        fe(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r,
            o.work = n,
            o
        }
        return t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0),
            o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this),
            r._scheduled || (r._scheduled = vt.requestAnimationFrame(function() {
                return r.flush(void 0)
            })))
        }
        ,
        t.prototype.recycleAsyncId = function(r, n, o) {
            var i;
            if (o === void 0 && (o = 0),
            o != null ? o > 0 : this.delay > 0)
                return e.prototype.recycleAsyncId.call(this, r, n, o);
            var a = r.actions;
            n != null && ((i = a[a.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (vt.cancelAnimationFrame(n),
            r._scheduled = void 0)
        }
        ,
        t
    }(Xt);
    var kn = function(e) {
        fe(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.flush = function(r) {
            this._active = !0;
            var n = this._scheduled;
            this._scheduled = void 0;
            var o = this.actions, i;
            r = r || o.shift();
            do
                if (i = r.execute(r.state, r.delay))
                    break;
            while ((r = o[0]) && r.id === n && o.shift());
            if (this._active = !1,
            i) {
                for (; (r = o[0]) && r.id === n && o.shift(); )
                    r.unsubscribe();
                throw i
            }
        }
        ,
        t
    }(Zt);
    var Se = new kn(Cn);
    var x = new N(function(e) {
        return e.complete()
    }
    );
    function er(e) {
        return e && k(e.schedule)
    }
    function Dr(e) {
        return e[e.length - 1]
    }
    function tt(e) {
        return k(Dr(e)) ? e.pop() : void 0
    }
    function $e(e) {
        return er(Dr(e)) ? e.pop() : void 0
    }
    function tr(e, t) {
        return typeof Dr(e) == "number" ? e.pop() : t
    }
    var gt = function(e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };
    function rr(e) {
        return k(e == null ? void 0 : e.then)
    }
    function nr(e) {
        return k(e[bt])
    }
    function or(e) {
        return Symbol.asyncIterator && k(e == null ? void 0 : e[Symbol.asyncIterator])
    }
    function ir(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    function Xi() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var ar = Xi();
    function sr(e) {
        return k(e == null ? void 0 : e[ar])
    }
    function cr(e) {
        return gn(this, arguments, function() {
            var r, n, o, i;
            return Yt(this, function(a) {
                switch (a.label) {
                case 0:
                    r = e.getReader(),
                    a.label = 1;
                case 1:
                    a.trys.push([1, , 9, 10]),
                    a.label = 2;
                case 2:
                    return [4, ct(r.read())];
                case 3:
                    return n = a.sent(),
                    o = n.value,
                    i = n.done,
                    i ? [4, ct(void 0)] : [3, 5];
                case 4:
                    return [2, a.sent()];
                case 5:
                    return [4, ct(o)];
                case 6:
                    return [4, a.sent()];
                case 7:
                    return a.sent(),
                    [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return r.releaseLock(),
                    [7];
                case 10:
                    return [2]
                }
            })
        })
    }
    function pr(e) {
        return k(e == null ? void 0 : e.getReader)
    }
    function z(e) {
        if (e instanceof N)
            return e;
        if (e != null) {
            if (nr(e))
                return Zi(e);
            if (gt(e))
                return ea(e);
            if (rr(e))
                return ta(e);
            if (or(e))
                return Rn(e);
            if (sr(e))
                return ra(e);
            if (pr(e))
                return na(e)
        }
        throw ir(e)
    }
    function Zi(e) {
        return new N(function(t) {
            var r = e[bt]();
            if (k(r.subscribe))
                return r.subscribe(t);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        }
        )
    }
    function ea(e) {
        return new N(function(t) {
            for (var r = 0; r < e.length && !t.closed; r++)
                t.next(e[r]);
            t.complete()
        }
        )
    }
    function ta(e) {
        return new N(function(t) {
            e.then(function(r) {
                t.closed || (t.next(r),
                t.complete())
            }, function(r) {
                return t.error(r)
            }).then(null, Gt)
        }
        )
    }
    function ra(e) {
        return new N(function(t) {
            var r, n;
            try {
                for (var o = we(e), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    if (t.next(a),
                    t.closed)
                        return
                }
            } catch (s) {
                r = {
                    error: s
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            t.complete()
        }
        )
    }
    function Rn(e) {
        return new N(function(t) {
            oa(e, t).catch(function(r) {
                return t.error(r)
            })
        }
        )
    }
    function na(e) {
        return Rn(cr(e))
    }
    function oa(e, t) {
        var r, n, o, i;
        return vn(this, void 0, void 0, function() {
            var a, s;
            return Yt(this, function(p) {
                switch (p.label) {
                case 0:
                    p.trys.push([0, 5, 6, 11]),
                    r = yn(e),
                    p.label = 1;
                case 1:
                    return [4, r.next()];
                case 2:
                    if (n = p.sent(),
                    !!n.done)
                        return [3, 4];
                    if (a = n.value,
                    t.next(a),
                    t.closed)
                        return [2];
                    p.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return s = p.sent(),
                    o = {
                        error: s
                    },
                    [3, 11];
                case 6:
                    return p.trys.push([6, , 9, 10]),
                    n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
                case 7:
                    p.sent(),
                    p.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (o)
                        throw o.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return t.complete(),
                    [2]
                }
            })
        })
    }
    function Me(e, t, r, n, o) {
        n === void 0 && (n = 0),
        o === void 0 && (o = !1);
        var i = t.schedule(function() {
            r(),
            o ? e.add(this.schedule(null, n)) : this.unsubscribe()
        }, n);
        if (e.add(i),
        !o)
            return i
    }
    function ke(e, t) {
        return t === void 0 && (t = 0),
        E(function(r, n) {
            r.subscribe(_(n, function(o) {
                return Me(n, e, function() {
                    return n.next(o)
                }, t)
            }, function() {
                return Me(n, e, function() {
                    return n.complete()
                }, t)
            }, function(o) {
                return Me(n, e, function() {
                    return n.error(o)
                }, t)
            }))
        })
    }
    function Je(e, t) {
        return t === void 0 && (t = 0),
        E(function(r, n) {
            n.add(e.schedule(function() {
                return r.subscribe(n)
            }, t))
        })
    }
    function Hn(e, t) {
        return z(e).pipe(Je(t), ke(t))
    }
    function $n(e, t) {
        return z(e).pipe(Je(t), ke(t))
    }
    function Pn(e, t) {
        return new N(function(r) {
            var n = 0;
            return t.schedule(function() {
                n === e.length ? r.complete() : (r.next(e[n++]),
                r.closed || this.schedule())
            })
        }
        )
    }
    function In(e, t) {
        return new N(function(r) {
            var n;
            return Me(r, t, function() {
                n = e[ar](),
                Me(r, t, function() {
                    var o, i, a;
                    try {
                        o = n.next(),
                        i = o.value,
                        a = o.done
                    } catch (s) {
                        r.error(s);
                        return
                    }
                    a ? r.complete() : r.next(i)
                }, 0, !0)
            }),
            function() {
                return k(n == null ? void 0 : n.return) && n.return()
            }
        }
        )
    }
    function lr(e, t) {
        if (!e)
            throw new Error("Iterable cannot be null");
        return new N(function(r) {
            Me(r, t, function() {
                var n = e[Symbol.asyncIterator]();
                Me(r, t, function() {
                    n.next().then(function(o) {
                        o.done ? r.complete() : r.next(o.value)
                    })
                }, 0, !0)
            })
        }
        )
    }
    function jn(e, t) {
        return lr(cr(e), t)
    }
    function Fn(e, t) {
        if (e != null) {
            if (nr(e))
                return Hn(e, t);
            if (gt(e))
                return Pn(e, t);
            if (rr(e))
                return $n(e, t);
            if (or(e))
                return lr(e, t);
            if (sr(e))
                return In(e, t);
            if (pr(e))
                return jn(e, t)
        }
        throw ir(e)
    }
    function pe(e, t) {
        return t ? Fn(e, t) : z(e)
    }
    function $() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = $e(e);
        return pe(e, r)
    }
    function Ht(e, t) {
        var r = k(e) ? e : function() {
            return e
        }
          , n = function(o) {
            return o.error(r())
        };
        return new N(t ? function(o) {
            return t.schedule(n, 0, o)
        }
        : n)
    }
    var fr = mt(function(e) {
        return function() {
            e(this),
            this.name = "EmptyError",
            this.message = "no elements in sequence"
        }
    });
    function Un(e) {
        return e instanceof Date && !isNaN(e)
    }
    function u(e, t) {
        return E(function(r, n) {
            var o = 0;
            r.subscribe(_(n, function(i) {
                n.next(e.call(t, i, o++))
            }))
        })
    }
    var ia = Array.isArray;
    function aa(e, t) {
        return ia(t) ? e.apply(void 0, Q([], q(t))) : e(t)
    }
    function rt(e) {
        return u(function(t) {
            return aa(e, t)
        })
    }
    var sa = Array.isArray
      , ca = Object.getPrototypeOf
      , pa = Object.prototype
      , la = Object.keys;
    function Wn(e) {
        if (e.length === 1) {
            var t = e[0];
            if (sa(t))
                return {
                    args: t,
                    keys: null
                };
            if (fa(t)) {
                var r = la(t);
                return {
                    args: r.map(function(n) {
                        return t[n]
                    }),
                    keys: r
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }
    function fa(e) {
        return e && typeof e == "object" && ca(e) === pa
    }
    function Dn(e, t) {
        return e.reduce(function(r, n, o) {
            return r[n] = t[o],
            r
        }, {})
    }
    function J() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = $e(e)
          , n = tt(e)
          , o = Wn(e)
          , i = o.args
          , a = o.keys;
        if (i.length === 0)
            return pe([], r);
        var s = new N(Nr(i, r, a ? function(p) {
            return Dn(a, p)
        }
        : de));
        return n ? s.pipe(rt(n)) : s
    }
    function Nr(e, t, r) {
        return r === void 0 && (r = de),
        function(n) {
            Nn(t, function() {
                for (var o = e.length, i = new Array(o), a = o, s = o, p = function(l) {
                    Nn(t, function() {
                        var f = pe(e[l], t)
                          , m = !1;
                        f.subscribe(_(n, function(d) {
                            i[l] = d,
                            m || (m = !0,
                            s--),
                            s || n.next(r(i.slice()))
                        }, function() {
                            --a || n.complete()
                        }))
                    }, n)
                }, c = 0; c < o; c++)
                    p(c)
            }, n)
        }
    }
    function Nn(e, t, r) {
        e ? Me(r, e, t) : t()
    }
    function zn(e, t, r, n, o, i, a, s) {
        var p = []
          , c = 0
          , l = 0
          , f = !1
          , m = function() {
            f && !p.length && !c && t.complete()
        }
          , d = function(v) {
            return c < n ? h(v) : p.push(v)
        }
          , h = function(v) {
            i && t.next(v),
            c++;
            var Y = !1;
            z(r(v, l++)).subscribe(_(t, function(X) {
                o == null || o(X),
                i ? d(X) : t.next(X)
            }, function() {
                Y = !0
            }, void 0, function() {
                if (Y)
                    try {
                        c--;
                        for (var X = function() {
                            var K = p.shift();
                            a ? Me(t, a, function() {
                                return h(K)
                            }) : h(K)
                        }; p.length && c < n; )
                            X();
                        m()
                    } catch (K) {
                        t.error(K)
                    }
            }))
        };
        return e.subscribe(_(t, d, function() {
            f = !0,
            m()
        })),
        function() {
            s == null || s()
        }
    }
    function re(e, t, r) {
        return r === void 0 && (r = 1 / 0),
        k(t) ? re(function(n, o) {
            return u(function(i, a) {
                return t(n, i, o, a)
            })(z(e(n, o)))
        }, r) : (typeof t == "number" && (r = t),
        E(function(n, o) {
            return zn(n, o, e, r)
        }))
    }
    function yt(e) {
        return e === void 0 && (e = 1 / 0),
        re(de, e)
    }
    function Vn() {
        return yt(1)
    }
    function Ve() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Vn()(pe(e, $e(e)))
    }
    function P(e) {
        return new N(function(t) {
            z(e()).subscribe(t)
        }
        )
    }
    var ua = ["addListener", "removeListener"]
      , ma = ["addEventListener", "removeEventListener"]
      , da = ["on", "off"];
    function b(e, t, r, n) {
        if (k(r) && (n = r,
        r = void 0),
        n)
            return b(e, t, r).pipe(rt(n));
        var o = q(va(e) ? ma.map(function(s) {
            return function(p) {
                return e[s](t, p, r)
            }
        }) : ha(e) ? ua.map(qn(e, t)) : ba(e) ? da.map(qn(e, t)) : [], 2)
          , i = o[0]
          , a = o[1];
        if (!i && gt(e))
            return re(function(s) {
                return b(s, t, r)
            })(z(e));
        if (!i)
            throw new TypeError("Invalid event target");
        return new N(function(s) {
            var p = function() {
                for (var c = [], l = 0; l < arguments.length; l++)
                    c[l] = arguments[l];
                return s.next(1 < c.length ? c : c[0])
            };
            return i(p),
            function() {
                return a(p)
            }
        }
        )
    }
    function qn(e, t) {
        return function(r) {
            return function(n) {
                return e[r](t, n)
            }
        }
    }
    function ha(e) {
        return k(e.addListener) && k(e.removeListener)
    }
    function ba(e) {
        return k(e.on) && k(e.off)
    }
    function va(e) {
        return k(e.addEventListener) && k(e.removeEventListener)
    }
    function ur(e, t, r) {
        return r ? ur(e, t).pipe(rt(r)) : new N(function(n) {
            var o = function() {
                for (var a = [], s = 0; s < arguments.length; s++)
                    a[s] = arguments[s];
                return n.next(a.length === 1 ? a[0] : a)
            }
              , i = e(o);
            return k(t) ? function() {
                return t(o, i)
            }
            : void 0
        }
        )
    }
    function nt(e, t, r) {
        e === void 0 && (e = 0),
        r === void 0 && (r = Wr);
        var n = -1;
        return t != null && (er(t) ? r = t : n = t),
        new N(function(o) {
            var i = Un(e) ? +e - r.now() : e;
            i < 0 && (i = 0);
            var a = 0;
            return r.schedule(function() {
                o.closed || (o.next(a++),
                0 <= n ? this.schedule(void 0, n) : o.complete())
            }, i)
        }
        )
    }
    function T() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = $e(e)
          , n = tr(e, 1 / 0)
          , o = e;
        return o.length ? o.length === 1 ? z(o[0]) : yt(n)(pe(o, r)) : x
    }
    var Xe = new N(Ce);
    var ga = Array.isArray;
    function xt(e) {
        return e.length === 1 && ga(e[0]) ? e[0] : e
    }
    function y(e, t) {
        return E(function(r, n) {
            var o = 0;
            r.subscribe(_(n, function(i) {
                return e.call(t, i, o++) && n.next(i)
            }))
        })
    }
    function $t() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = tt(e)
          , n = xt(e);
        return n.length ? new N(function(o) {
            var i = n.map(function() {
                return []
            })
              , a = n.map(function() {
                return !1
            });
            o.add(function() {
                i = a = null
            });
            for (var s = function(c) {
                z(n[c]).subscribe(_(o, function(l) {
                    if (i[c].push(l),
                    i.every(function(m) {
                        return m.length
                    })) {
                        var f = i.map(function(m) {
                            return m.shift()
                        });
                        o.next(r ? r.apply(void 0, Q([], q(f))) : f),
                        i.some(function(m, d) {
                            return !m.length && a[d]
                        }) && o.complete()
                    }
                }, function() {
                    a[c] = !0,
                    !i[c].length && o.complete()
                }))
            }, p = 0; !o.closed && p < n.length; p++)
                s(p);
            return function() {
                i = a = null
            }
        }
        ) : x
    }
    function Kn(e) {
        return E(function(t, r) {
            var n = !1
              , o = null
              , i = null
              , a = !1
              , s = function() {
                if (i == null || i.unsubscribe(),
                i = null,
                n) {
                    n = !1;
                    var c = o;
                    o = null,
                    r.next(c)
                }
                a && r.complete()
            }
              , p = function() {
                i = null,
                a && r.complete()
            };
            t.subscribe(_(r, function(c) {
                n = !0,
                o = c,
                i || z(e(c)).subscribe(i = _(r, s, p))
            }, function() {
                a = !0,
                (!n || !i || i.closed) && r.complete()
            }))
        })
    }
    function Re(e, t) {
        return t === void 0 && (t = ce),
        Kn(function() {
            return nt(e, t)
        })
    }
    function je(e, t) {
        return t === void 0 && (t = null),
        t = t != null ? t : e,
        E(function(r, n) {
            var o = []
              , i = 0;
            r.subscribe(_(n, function(a) {
                var s, p, c, l, f = null;
                i++ % t === 0 && o.push([]);
                try {
                    for (var m = we(o), d = m.next(); !d.done; d = m.next()) {
                        var h = d.value;
                        h.push(a),
                        e <= h.length && (f = f != null ? f : [],
                        f.push(h))
                    }
                } catch (X) {
                    s = {
                        error: X
                    }
                } finally {
                    try {
                        d && !d.done && (p = m.return) && p.call(m)
                    } finally {
                        if (s)
                            throw s.error
                    }
                }
                if (f)
                    try {
                        for (var v = we(f), Y = v.next(); !Y.done; Y = v.next()) {
                            var h = Y.value;
                            Ge(o, h),
                            n.next(h)
                        }
                    } catch (X) {
                        c = {
                            error: X
                        }
                    } finally {
                        try {
                            Y && !Y.done && (l = v.return) && l.call(v)
                        } finally {
                            if (c)
                                throw c.error
                        }
                    }
            }, function() {
                var a, s;
                try {
                    for (var p = we(o), c = p.next(); !c.done; c = p.next()) {
                        var l = c.value;
                        n.next(l)
                    }
                } catch (f) {
                    a = {
                        error: f
                    }
                } finally {
                    try {
                        c && !c.done && (s = p.return) && s.call(p)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                n.complete()
            }, void 0, function() {
                o = null
            }))
        })
    }
    function ge(e) {
        return E(function(t, r) {
            var n = null, o = !1, i;
            n = t.subscribe(_(r, void 0, void 0, function(a) {
                i = z(e(a, ge(e)(t))),
                n ? (n.unsubscribe(),
                n = null,
                i.subscribe(r)) : o = !0
            })),
            o && (n.unsubscribe(),
            n = null,
            i.subscribe(r))
        })
    }
    function Yn(e, t, r, n, o) {
        return function(i, a) {
            var s = r
              , p = t
              , c = 0;
            i.subscribe(_(a, function(l) {
                var f = c++;
                p = s ? e(p, l, f) : (s = !0,
                l),
                n && a.next(p)
            }, o && function() {
                s && a.next(p),
                a.complete()
            }
            ))
        }
    }
    function zr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = tt(e);
        return r ? On(zr.apply(void 0, Q([], q(e))), rt(r)) : E(function(n, o) {
            Nr(Q([n], q(xt(e))))(o)
        })
    }
    function ot() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return zr.apply(void 0, Q([], q(e)))
    }
    function Te(e, t) {
        return t === void 0 && (t = ce),
        E(function(r, n) {
            var o = null
              , i = null
              , a = null
              , s = function() {
                if (o) {
                    o.unsubscribe(),
                    o = null;
                    var c = i;
                    i = null,
                    n.next(c)
                }
            };
            function p() {
                var c = a + e
                  , l = t.now();
                if (l < c) {
                    o = this.schedule(void 0, c - l),
                    n.add(o);
                    return
                }
                s()
            }
            r.subscribe(_(n, function(c) {
                i = c,
                a = t.now(),
                o || (o = t.schedule(p, e),
                n.add(o))
            }, function() {
                s(),
                n.complete()
            }, void 0, function() {
                i = o = null
            }))
        })
    }
    function Fe(e) {
        return E(function(t, r) {
            var n = !1;
            t.subscribe(_(r, function(o) {
                n = !0,
                r.next(o)
            }, function() {
                n || r.next(e),
                r.complete()
            }))
        })
    }
    function ye(e) {
        return e <= 0 ? function() {
            return x
        }
        : E(function(t, r) {
            var n = 0;
            t.subscribe(_(r, function(o) {
                ++n <= e && (r.next(o),
                e <= n && r.complete())
            }))
        })
    }
    function ne() {
        return E(function(e, t) {
            e.subscribe(_(t, Ce))
        })
    }
    function Qn(e) {
        return u(function() {
            return e
        })
    }
    function Vr(e, t) {
        return t ? function(r) {
            return Ve(t.pipe(ye(1), ne()), r.pipe(Vr(e)))
        }
        : re(function(r, n) {
            return z(e(r, n)).pipe(ye(1), Qn(r))
        })
    }
    function Ze(e, t) {
        t === void 0 && (t = ce);
        var r = nt(e, t);
        return Vr(function() {
            return r
        })
    }
    function te(e, t) {
        return t === void 0 && (t = de),
        e = e != null ? e : ya,
        E(function(r, n) {
            var o, i = !0;
            r.subscribe(_(n, function(a) {
                var s = t(a);
                (i || !e(o, s)) && (i = !1,
                o = s,
                n.next(a))
            }))
        })
    }
    function ya(e, t) {
        return e === t
    }
    function oe(e, t) {
        return te(function(r, n) {
            return t ? t(r[e], n[e]) : r[e] === n[e]
        })
    }
    function Bn(e) {
        return e === void 0 && (e = xa),
        E(function(t, r) {
            var n = !1;
            t.subscribe(_(r, function(o) {
                n = !0,
                r.next(o)
            }, function() {
                return n ? r.complete() : r.error(e())
            }))
        })
    }
    function xa() {
        return new fr
    }
    function ae() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return function(r) {
            return Ve(r, $.apply(void 0, Q([], q(e))))
        }
    }
    function C(e) {
        return E(function(t, r) {
            try {
                t.subscribe(r)
            } finally {
                r.add(e)
            }
        })
    }
    function Ue(e, t) {
        var r = arguments.length >= 2;
        return function(n) {
            return n.pipe(e ? y(function(o, i) {
                return e(o, i, n)
            }) : de, ye(1), r ? Fe(t) : Bn(function() {
                return new fr
            }))
        }
    }
    function qr(e) {
        return e <= 0 ? function() {
            return x
        }
        : E(function(t, r) {
            var n = [];
            t.subscribe(_(r, function(o) {
                n.push(o),
                e < n.length && n.shift()
            }, function() {
                var o, i;
                try {
                    for (var a = we(n), s = a.next(); !s.done; s = a.next()) {
                        var p = s.value;
                        r.next(p)
                    }
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        s && !s.done && (i = a.return) && i.call(a)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                r.complete()
            }, void 0, function() {
                n = null
            }))
        })
    }
    function Gn() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = $e(e)
          , n = tr(e, 1 / 0);
        return e = xt(e),
        E(function(o, i) {
            yt(n)(pe(Q([o], q(e)), r)).subscribe(i)
        })
    }
    function We() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Gn.apply(void 0, Q([], q(e)))
    }
    function ft(e) {
        var t, r = 1 / 0, n;
        return e != null && (typeof e == "object" ? (t = e.count,
        r = t === void 0 ? 1 / 0 : t,
        n = e.delay) : r = e),
        r <= 0 ? function() {
            return x
        }
        : E(function(o, i) {
            var a = 0, s, p = function() {
                if (s == null || s.unsubscribe(),
                s = null,
                n != null) {
                    var l = typeof n == "number" ? nt(n) : z(n(a))
                      , f = _(i, function() {
                        f.unsubscribe(),
                        c()
                    });
                    l.subscribe(f)
                } else
                    c()
            }, c = function() {
                var l = !1;
                s = o.subscribe(_(i, void 0, function() {
                    ++a < r ? s ? p() : l = !0 : i.complete()
                })),
                l && p()
            };
            c()
        })
    }
    function Pt(e, t) {
        return E(Yn(e, t, arguments.length >= 2, !0))
    }
    function he(e) {
        e === void 0 && (e = {});
        var t = e.connector
          , r = t === void 0 ? function() {
            return new S
        }
        : t
          , n = e.resetOnError
          , o = n === void 0 ? !0 : n
          , i = e.resetOnComplete
          , a = i === void 0 ? !0 : i
          , s = e.resetOnRefCountZero
          , p = s === void 0 ? !0 : s;
        return function(c) {
            var l, f, m, d = 0, h = !1, v = !1, Y = function() {
                f == null || f.unsubscribe(),
                f = void 0
            }, X = function() {
                Y(),
                l = m = void 0,
                h = v = !1
            }, K = function() {
                var M = l;
                X(),
                M == null || M.unsubscribe()
            };
            return E(function(M, Ne) {
                d++,
                !v && !h && Y();
                var R = m = m != null ? m : r();
                Ne.add(function() {
                    d--,
                    d === 0 && !v && !h && (f = Kr(K, p))
                }),
                R.subscribe(Ne),
                !l && d > 0 && (l = new lt({
                    next: function(B) {
                        return R.next(B)
                    },
                    error: function(B) {
                        v = !0,
                        Y(),
                        f = Kr(X, o, B),
                        R.error(B)
                    },
                    complete: function() {
                        h = !0,
                        Y(),
                        f = Kr(X, a),
                        R.complete()
                    }
                }),
                z(M).subscribe(l))
            })(c)
        }
    }
    function Kr(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        if (t === !0) {
            e();
            return
        }
        if (t !== !1) {
            var o = new lt({
                next: function() {
                    o.unsubscribe(),
                    e()
                }
            });
            return z(t.apply(void 0, Q([], q(r)))).subscribe(o)
        }
    }
    function Z(e, t, r) {
        var n, o, i, a, s = !1;
        return e && typeof e == "object" ? (n = e.bufferSize,
        a = n === void 0 ? 1 / 0 : n,
        o = e.windowTime,
        t = o === void 0 ? 1 / 0 : o,
        i = e.refCount,
        s = i === void 0 ? !1 : i,
        r = e.scheduler) : a = e != null ? e : 1 / 0,
        he({
            connector: function() {
                return new kt(a,t,r)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: s
        })
    }
    function Oe(e) {
        return y(function(t, r) {
            return e <= r
        })
    }
    function Yr(e) {
        return E(function(t, r) {
            var n = !1
              , o = _(r, function() {
                o == null || o.unsubscribe(),
                n = !0
            }, Ce);
            z(e).subscribe(o),
            t.subscribe(_(r, function(i) {
                return n && r.next(i)
            }))
        })
    }
    function V() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = $e(e);
        return E(function(n, o) {
            (r ? Ve(e, n, r) : Ve(e, n)).subscribe(o)
        })
    }
    function g(e, t) {
        return E(function(r, n) {
            var o = null
              , i = 0
              , a = !1
              , s = function() {
                return a && !o && n.complete()
            };
            r.subscribe(_(n, function(p) {
                o == null || o.unsubscribe();
                var c = 0
                  , l = i++;
                z(e(p, l)).subscribe(o = _(n, function(f) {
                    return n.next(t ? t(p, f, l, c++) : f)
                }, function() {
                    o = null,
                    s()
                }))
            }, function() {
                a = !0,
                s()
            }))
        })
    }
    function F(e) {
        return E(function(t, r) {
            z(e).subscribe(_(r, function() {
                return r.complete()
            }, Ce)),
            !r.closed && t.subscribe(r)
        })
    }
    function Qr(e, t) {
        return t === void 0 && (t = !1),
        E(function(r, n) {
            var o = 0;
            r.subscribe(_(n, function(i) {
                var a = e(i, o++);
                (a || t) && n.next(i),
                !a && n.complete()
            }))
        })
    }
    function w(e, t, r) {
        var n = k(e) || t || r ? {
            next: e,
            error: t,
            complete: r
        } : e;
        return n ? E(function(o, i) {
            var a;
            (a = n.subscribe) === null || a === void 0 || a.call(n);
            var s = !0;
            o.subscribe(_(i, function(p) {
                var c;
                (c = n.next) === null || c === void 0 || c.call(n, p),
                i.next(p)
            }, function() {
                var p;
                s = !1,
                (p = n.complete) === null || p === void 0 || p.call(n),
                i.complete()
            }, function(p) {
                var c;
                s = !1,
                (c = n.error) === null || c === void 0 || c.call(n, p),
                i.error(p)
            }, function() {
                var p, c;
                s && ((p = n.unsubscribe) === null || p === void 0 || p.call(n)),
                (c = n.finalize) === null || c === void 0 || c.call(n)
            }))
        }) : de
    }
    function Jn(e, t) {
        return E(function(r, n) {
            var o = t != null ? t : {}
              , i = o.leading
              , a = i === void 0 ? !0 : i
              , s = o.trailing
              , p = s === void 0 ? !1 : s
              , c = !1
              , l = null
              , f = null
              , m = !1
              , d = function() {
                f == null || f.unsubscribe(),
                f = null,
                p && (Y(),
                m && n.complete())
            }
              , h = function() {
                f = null,
                m && n.complete()
            }
              , v = function(X) {
                return f = z(e(X)).subscribe(_(n, d, h))
            }
              , Y = function() {
                if (c) {
                    c = !1;
                    var X = l;
                    l = null,
                    n.next(X),
                    !m && v(X)
                }
            };
            r.subscribe(_(n, function(X) {
                c = !0,
                l = X,
                !(f && !f.closed) && (a ? Y() : v(X))
            }, function() {
                m = !0,
                !(p && c && f && !f.closed) && n.complete()
            }))
        })
    }
    function It(e, t, r) {
        t === void 0 && (t = ce);
        var n = nt(e, t);
        return Jn(function() {
            return n
        }, r)
    }
    function ie() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = tt(e);
        return E(function(n, o) {
            for (var i = e.length, a = new Array(i), s = e.map(function() {
                return !1
            }), p = !1, c = function(f) {
                z(e[f]).subscribe(_(o, function(m) {
                    a[f] = m,
                    !p && !s[f] && (s[f] = !0,
                    (p = s.every(de)) && (s = null))
                }, Ce))
            }, l = 0; l < i; l++)
                c(l);
            n.subscribe(_(o, function(f) {
                if (p) {
                    var m = Q([f], q(a));
                    o.next(r ? r.apply(void 0, Q([], q(m))) : m)
                }
            }))
        })
    }
    function Xn() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return E(function(r, n) {
            $t.apply(void 0, Q([r], q(e))).subscribe(n)
        })
    }
    function Br() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Xn.apply(void 0, Q([], q(e)))
    }
    function Zn() {
        let e = new kt(1);
        return b(document, "DOMContentLoaded", {
            once: !0
        }).subscribe(()=>e.next(document)),
        e
    }
    function H(e, t=document) {
        return Array.from(t.querySelectorAll(e))
    }
    function W(e, t=document) {
        let r = ue(e, t);
        if (typeof r == "undefined")
            throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return r
    }
    function ue(e, t=document) {
        return t.querySelector(e) || void 0
    }
    function De() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }
    var Ea = T(b(document.body, "focusin"), b(document.body, "focusout")).pipe(Te(1), V(void 0), u(()=>De() || document.body), Z(1));
    function Et(e) {
        return Ea.pipe(u(t=>e.contains(t)), te())
    }
    function mr(e, t) {
        return T(b(e, "mouseenter").pipe(u(()=>!0)), b(e, "mouseleave").pipe(u(()=>!1))).pipe(t ? Te(t) : de, V(!1))
    }
    function qe(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop
        }
    }
    function eo(e) {
        return T(b(window, "load"), b(window, "resize")).pipe(Re(0, Se), u(()=>qe(e)), V(qe(e)))
    }
    function dr(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    function it(e) {
        return T(b(e, "scroll"), b(window, "resize")).pipe(Re(0, Se), u(()=>dr(e)), V(dr(e)))
    }
    var ro = function() {
        if (typeof Map != "undefined")
            return Map;
        function e(t, r) {
            var n = -1;
            return t.some(function(o, i) {
                return o[0] === r ? (n = i,
                !0) : !1
            }),
            n
        }
        return function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.get = function(r) {
                var n = e(this.__entries__, r)
                  , o = this.__entries__[n];
                return o && o[1]
            }
            ,
            t.prototype.set = function(r, n) {
                var o = e(this.__entries__, r);
                ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n])
            }
            ,
            t.prototype.delete = function(r) {
                var n = this.__entries__
                  , o = e(n, r);
                ~o && n.splice(o, 1)
            }
            ,
            t.prototype.has = function(r) {
                return !!~e(this.__entries__, r)
            }
            ,
            t.prototype.clear = function() {
                this.__entries__.splice(0)
            }
            ,
            t.prototype.forEach = function(r, n) {
                n === void 0 && (n = null);
                for (var o = 0, i = this.__entries__; o < i.length; o++) {
                    var a = i[o];
                    r.call(n, a[1], a[0])
                }
            }
            ,
            t
        }()
    }()
      , Gr = typeof window != "undefined" && typeof document != "undefined" && window.document === document
      , hr = function() {
        return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")()
    }()
      , wa = function() {
        return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(hr) : function(e) {
            return setTimeout(function() {
                return e(Date.now())
            }, 1e3 / 60)
        }
    }()
      , Sa = 2;
    function Ta(e, t) {
        var r = !1
          , n = !1
          , o = 0;
        function i() {
            r && (r = !1,
            e()),
            n && s()
        }
        function a() {
            wa(i)
        }
        function s() {
            var p = Date.now();
            if (r) {
                if (p - o < Sa)
                    return;
                n = !0
            } else
                r = !0,
                n = !1,
                setTimeout(a, t);
            o = p
        }
        return s
    }
    var Oa = 20
      , _a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
      , Ma = typeof MutationObserver != "undefined"
      , La = function() {
        function e() {
            this.connected_ = !1,
            this.mutationEventsAdded_ = !1,
            this.mutationsObserver_ = null,
            this.observers_ = [],
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
            this.refresh = Ta(this.refresh.bind(this), Oa)
        }
        return e.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t),
            this.connected_ || this.connect_()
        }
        ,
        e.prototype.removeObserver = function(t) {
            var r = this.observers_
              , n = r.indexOf(t);
            ~n && r.splice(n, 1),
            !r.length && this.connected_ && this.disconnect_()
        }
        ,
        e.prototype.refresh = function() {
            var t = this.updateObservers_();
            t && this.refresh()
        }
        ,
        e.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(r) {
                return r.gatherActive(),
                r.hasActive()
            });
            return t.forEach(function(r) {
                return r.broadcastActive()
            }),
            t.length > 0
        }
        ,
        e.prototype.connect_ = function() {
            !Gr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Ma ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
            this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
            this.mutationEventsAdded_ = !0),
            this.connected_ = !0)
        }
        ,
        e.prototype.disconnect_ = function() {
            !Gr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
            this.mutationsObserver_ = null,
            this.mutationEventsAdded_ = !1,
            this.connected_ = !1)
        }
        ,
        e.prototype.onTransitionEnd_ = function(t) {
            var r = t.propertyName
              , n = r === void 0 ? "" : r
              , o = _a.some(function(i) {
                return !!~n.indexOf(i)
            });
            o && this.refresh()
        }
        ,
        e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e),
            this.instance_
        }
        ,
        e.instance_ = null,
        e
    }()
      , no = function(e, t) {
        for (var r = 0, n = Object.keys(t); r < n.length; r++) {
            var o = n[r];
            Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    }
      , wt = function(e) {
        var t = e && e.ownerDocument && e.ownerDocument.defaultView;
        return t || hr
    }
      , oo = vr(0, 0, 0, 0);
    function br(e) {
        return parseFloat(e) || 0
    }
    function to(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return t.reduce(function(n, o) {
            var i = e["border-" + o + "-width"];
            return n + br(i)
        }, 0)
    }
    function Aa(e) {
        for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
            var i = o[n]
              , a = e["padding-" + i];
            r[i] = br(a)
        }
        return r
    }
    function Ca(e) {
        var t = e.getBBox();
        return vr(0, 0, t.width, t.height)
    }
    function ka(e) {
        var t = e.clientWidth
          , r = e.clientHeight;
        if (!t && !r)
            return oo;
        var n = wt(e).getComputedStyle(e)
          , o = Aa(n)
          , i = o.left + o.right
          , a = o.top + o.bottom
          , s = br(n.width)
          , p = br(n.height);
        if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= to(n, "left", "right") + i),
        Math.round(p + a) !== r && (p -= to(n, "top", "bottom") + a)),
        !Ha(e)) {
            var c = Math.round(s + i) - t
              , l = Math.round(p + a) - r;
            Math.abs(c) !== 1 && (s -= c),
            Math.abs(l) !== 1 && (p -= l)
        }
        return vr(o.left, o.top, s, p)
    }
    var Ra = function() {
        return typeof SVGGraphicsElement != "undefined" ? function(e) {
            return e instanceof wt(e).SVGGraphicsElement
        }
        : function(e) {
            return e instanceof wt(e).SVGElement && typeof e.getBBox == "function"
        }
    }();
    function Ha(e) {
        return e === wt(e).document.documentElement
    }
    function $a(e) {
        return Gr ? Ra(e) ? Ca(e) : ka(e) : oo
    }
    function Pa(e) {
        var t = e.x
          , r = e.y
          , n = e.width
          , o = e.height
          , i = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object
          , a = Object.create(i.prototype);
        return no(a, {
            x: t,
            y: r,
            width: n,
            height: o,
            top: r,
            right: t + n,
            bottom: o + r,
            left: t
        }),
        a
    }
    function vr(e, t, r, n) {
        return {
            x: e,
            y: t,
            width: r,
            height: n
        }
    }
    var Ia = function() {
        function e(t) {
            this.broadcastWidth = 0,
            this.broadcastHeight = 0,
            this.contentRect_ = vr(0, 0, 0, 0),
            this.target = t
        }
        return e.prototype.isActive = function() {
            var t = $a(this.target);
            return this.contentRect_ = t,
            t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }
        ,
        e.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width,
            this.broadcastHeight = t.height,
            t
        }
        ,
        e
    }()
      , ja = function() {
        function e(t, r) {
            var n = Pa(r);
            no(this, {
                target: t,
                contentRect: n
            })
        }
        return e
    }()
      , Fa = function() {
        function e(t, r, n) {
            if (this.activeObservations_ = [],
            this.observations_ = new ro,
            typeof t != "function")
                throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t,
            this.controller_ = r,
            this.callbackCtx_ = n
        }
        return e.prototype.observe = function(t) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                if (!(t instanceof wt(t).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var r = this.observations_;
                r.has(t) || (r.set(t, new Ia(t)),
                this.controller_.addObserver(this),
                this.controller_.refresh())
            }
        }
        ,
        e.prototype.unobserve = function(t) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                if (!(t instanceof wt(t).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var r = this.observations_;
                r.has(t) && (r.delete(t),
                r.size || this.controller_.removeObserver(this))
            }
        }
        ,
        e.prototype.disconnect = function() {
            this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this)
        }
        ,
        e.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(),
            this.observations_.forEach(function(r) {
                r.isActive() && t.activeObservations_.push(r)
            })
        }
        ,
        e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_
                  , r = this.activeObservations_.map(function(n) {
                    return new ja(n.target,n.broadcastRect())
                });
                this.callback_.call(t, r, t),
                this.clearActive()
            }
        }
        ,
        e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }
        ,
        e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }
        ,
        e
    }()
      , io = typeof WeakMap != "undefined" ? new WeakMap : new ro
      , ao = function() {
        function e(t) {
            if (!(this instanceof e))
                throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            var r = La.getInstance()
              , n = new Fa(t,r,this);
            io.set(this, n)
        }
        return e
    }();
    ["observe", "unobserve", "disconnect"].forEach(function(e) {
        ao.prototype[e] = function() {
            var t;
            return (t = io.get(this))[e].apply(t, arguments)
        }
    });
    var Ua = function() {
        return typeof hr.ResizeObserver != "undefined" ? hr.ResizeObserver : ao
    }()
      , so = Ua;
    var co = new S
      , Wa = P(()=>$(new so(e=>{
        for (let t of e)
            co.next(t)
    }
    ))).pipe(g(e=>T(Xe, $(e)).pipe(C(()=>e.disconnect()))), Z(1));
    function be(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function Le(e) {
        return Wa.pipe(w(t=>t.observe(e)), g(t=>co.pipe(y(({target: r})=>r === e), C(()=>t.unobserve(e)), u(()=>be(e)))), V(be(e)))
    }
    function St(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    function Tt(e) {
        let t = e.parentElement;
        for (; t && (e.scrollWidth <= t.scrollWidth && e.scrollHeight <= t.scrollHeight); )
            t = (e = t).parentElement;
        return t ? e : void 0
    }
    var po = new S
      , Da = P(()=>$(new IntersectionObserver(e=>{
        for (let t of e)
            po.next(t)
    }
    ,{
        threshold: 0
    }))).pipe(g(e=>T(Xe, $(e)).pipe(C(()=>e.disconnect()))), Z(1));
    function Ot(e) {
        return Da.pipe(w(t=>t.observe(e)), g(t=>po.pipe(y(({target: r})=>r === e), C(()=>t.unobserve(e)), u(({isIntersecting: r})=>r))))
    }
    function lo(e, t=16) {
        return it(e).pipe(u(({y: r})=>{
            let n = be(e)
              , o = St(e);
            return r >= o.height - n.height - t
        }
        ), te())
    }
    var gr = {
        drawer: W("[data-md-toggle=drawer]"),
        search: W("[data-md-toggle=search]")
    };
    function fo(e) {
        return gr[e].checked
    }
    function et(e, t) {
        gr[e].checked !== t && gr[e].click()
    }
    function Ke(e) {
        let t = gr[e];
        return b(t, "change").pipe(u(()=>t.checked), V(t.checked))
    }
    function Na(e, t) {
        switch (e.constructor) {
        case HTMLInputElement:
            return e.type === "radio" ? /^Arrow/.test(t) : !0;
        case HTMLSelectElement:
        case HTMLTextAreaElement:
            return !0;
        default:
            return e.isContentEditable
        }
    }
    function za() {
        return T(b(window, "compositionstart").pipe(u(()=>!0)), b(window, "compositionend").pipe(u(()=>!1))).pipe(V(!1))
    }
    function uo() {
        let e = b(window, "keydown").pipe(y(t=>!(t.metaKey || t.ctrlKey)), u(t=>({
            mode: fo("search") ? "search" : "global",
            type: t.key,
            claim() {
                t.preventDefault(),
                t.stopPropagation()
            }
        })), y(({mode: t, type: r})=>{
            if (t === "global") {
                let n = De();
                if (typeof n != "undefined")
                    return !Na(n, r)
            }
            return !0
        }
        ), he());
        return za().pipe(g(t=>t ? x : e))
    }
    function xe() {
        return new URL(location.href)
    }
    function ut(e) {
        location.href = e.href
    }
    function mo() {
        return new S
    }
    function ho(e, t) {
        if (typeof t == "string" || typeof t == "number")
            e.innerHTML += t.toString();
        else if (t instanceof Node)
            e.appendChild(t);
        else if (Array.isArray(t))
            for (let r of t)
                ho(e, r)
    }
    function O(e, t, ...r) {
        let n = document.createElement(e);
        if (t)
            for (let o of Object.keys(t))
                typeof t[o] != "undefined" && (typeof t[o] != "boolean" ? n.setAttribute(o, t[o]) : n.setAttribute(o, ""));
        for (let o of r)
            ho(n, o);
        return n
    }
    function yr(e) {
        if (e > 999) {
            let t = +((e - 950) % 1e3 > 99);
            return `${((e + 1e-6) / 1e3).toFixed(t)}k`
        } else
            return e.toString()
    }
    function bo() {
        return location.hash.slice(1)
    }
    function Jr(e) {
        let t = O("a", {
            href: e
        });
        t.addEventListener("click", r=>r.stopPropagation()),
        t.click()
    }
    function Xr(e) {
        return T(b(window, "hashchange"), e).pipe(u(bo), V(bo()), y(t=>t.length > 0), Z(1))
    }
    function vo(e) {
        return Xr(e).pipe(u(t=>ue(`[id="${t}"]`)), y(t=>typeof t != "undefined"))
    }
    function jt(e) {
        let t = matchMedia(e);
        return ur(r=>t.addListener(()=>r(t.matches))).pipe(V(t.matches))
    }
    function go() {
        let e = matchMedia("print");
        return T(b(window, "beforeprint").pipe(u(()=>!0)), b(window, "afterprint").pipe(u(()=>!1))).pipe(V(e.matches))
    }
    function Zr(e, t) {
        return e.pipe(g(r=>r ? t() : x))
    }
    function xr(e, t={
        credentials: "same-origin"
    }) {
        return pe(fetch(`${e}`, t)).pipe(ge(()=>x), g(r=>r.status !== 200 ? Ht(()=>new Error(r.statusText)) : $(r)))
    }
    function Ye(e, t) {
        return xr(e, t).pipe(g(r=>r.json()), Z(1))
    }
    function yo(e, t) {
        let r = new DOMParser;
        return xr(e, t).pipe(g(n=>n.text()), u(n=>r.parseFromString(n, "text/xml")), Z(1))
    }
    function Er(e) {
        let t = O("script", {
            src: e
        });
        return P(()=>(document.head.appendChild(t),
        T(b(t, "load"), b(t, "error").pipe(g(()=>Ht(()=>new ReferenceError(`Invalid script: ${e}`))))).pipe(u(()=>{}
        ), C(()=>document.head.removeChild(t)), ye(1))))
    }
    function xo() {
        return {
            x: Math.max(0, scrollX),
            y: Math.max(0, scrollY)
        }
    }
    function Eo() {
        return T(b(window, "scroll", {
            passive: !0
        }), b(window, "resize", {
            passive: !0
        })).pipe(u(xo), V(xo()))
    }
    function wo() {
        return {
            width: innerWidth,
            height: innerHeight
        }
    }
    function So() {
        return b(window, "resize", {
            passive: !0
        }).pipe(u(wo), V(wo()))
    }
    function To() {
        return J([Eo(), So()]).pipe(u(([e,t])=>({
            offset: e,
            size: t
        })), Z(1))
    }
    function wr(e, {viewport$: t, header$: r}) {
        let n = t.pipe(oe("size"))
          , o = J([n, r]).pipe(u(()=>qe(e)));
        return J([r, t, o]).pipe(u(([{height: i},{offset: a, size: s},{x: p, y: c}])=>({
            offset: {
                x: a.x - p,
                y: a.y - c + i
            },
            size: s
        })))
    }
    function Va(e) {
        return b(e, "message", t=>t.data)
    }
    function qa(e) {
        let t = new S;
        return t.subscribe(r=>e.postMessage(r)),
        t
    }
    function Oo(e, t=new Worker(e)) {
        let r = Va(t)
          , n = qa(t)
          , o = new S;
        o.subscribe(n);
        let i = n.pipe(ne(), ae(!0));
        return o.pipe(ne(), We(r.pipe(F(i))), he())
    }
    var Ka = W("#__config")
      , _t = JSON.parse(Ka.textContent);
    _t.base = `${new URL(_t.base,xe())}`;
    function ve() {
        return _t
    }
    function ee(e) {
        return _t.features.includes(e)
    }
    function _e(e, t) {
        return typeof t != "undefined" ? _t.translations[e].replace("#", t.toString()) : _t.translations[e]
    }
    function Ae(e, t=document) {
        return W(`[data-md-component=${e}]`, t)
    }
    function le(e, t=document) {
        return H(`[data-md-component=${e}]`, t)
    }
    function Ya(e) {
        let t = W(".md-typeset > :first-child", e);
        return b(t, "click", {
            once: !0
        }).pipe(u(()=>W(".md-typeset", e)), u(r=>({
            hash: __md_hash(r.innerHTML)
        })))
    }
    function _o(e) {
        return !ee("announce.dismiss") || !e.childElementCount ? x : P(()=>{
            let t = new S;
            return t.subscribe(({hash: r})=>{
                e.hidden = !0,
                __md_set("__announce", r)
            }
            ),
            Ya(e).pipe(w(r=>t.next(r)), C(()=>t.complete()), u(r=>j({
                ref: e
            }, r)))
        }
        )
    }
    function Qa(e, {target$: t}) {
        return t.pipe(u(r=>({
            hidden: r !== e
        })))
    }
    function Mo(e, t) {
        let r = new S;
        return r.subscribe(({hidden: n})=>{
            e.hidden = n
        }
        ),
        Qa(e, t).pipe(w(n=>r.next(n)), C(()=>r.complete()), u(n=>j({
            ref: e
        }, n)))
    }
    function Ft(e, t) {
        return t === "inline" ? O("div", {
            class: "md-tooltip md-tooltip--inline",
            id: e,
            role: "tooltip"
        }, O("div", {
            class: "md-tooltip__inner md-typeset"
        })) : O("div", {
            class: "md-tooltip",
            id: e,
            role: "tooltip"
        }, O("div", {
            class: "md-tooltip__inner md-typeset"
        }))
    }
    function Lo(e, t) {
        if (t = t ? `${t}_annotation_ ${e}` : void 0,
        t) {
            let r = t ? `#${t}` : void 0;
            return O("aside", {
                class: "md-annotation",
                tabIndex: 0
            }, Ft(t), O("a", {
                href: r,
                class: "md-annotation__index",
                tabIndex: -1
            }, O("span", {
                "data-md-annotation-id": e
            })))
        } else
            return O("aside", {
                class: "md-annotation",
                tabIndex: 0
            }, Ft(t), O("span", {
                class: "md-annotation__index",
                tabIndex: -1
            }, O("span", {
                "data-md-annotation-id": e
            })))
    }
    function Ao(e) {
        return O("button", {
            class: "md-code__button",
            title: _e("clipboard.copy"),
            "data-clipboard-target": `#${e} > code`,
            "data-md-type": "copy"
        })
    }
    function Co() {
        return O("button", {
            class: "md-code__button",
            title: "Toggle line selection",
            "data-md-type": "select"
        })
    }
    function ko() {
        return O("nav", {
            class: "md-code__nav"
        })
    }
    function en(e, t) {
        let r = t & 2
          , n = t & 1
          , o = Object.keys(e.terms).filter(p=>!e.terms[p]).reduce((p,c)=>[...p, O("del", null, c), " "], []).slice(0, -1)
          , i = ve()
          , a = new URL(e.location,i.base);
        ee("search.highlight") && a.searchParams.set("h", Object.entries(e.terms).filter(([,p])=>p).reduce((p,[c])=>`${p} ${c}`.trim(), ""));
        let {tags: s} = ve();
        return O("a", {
            href: `${a}`,
            class: "md-search-result__link",
            tabIndex: -1
        }, O("article", {
            class: "md-search-result__article md-typeset",
            "data-md-score": e.score.toFixed(2)
        }, r > 0 && O("div", {
            class: "md-search-result__icon md-icon"
        }), r > 0 && O("h1", null, e.title), r <= 0 && O("h2", null, e.title), n > 0 && e.text.length > 0 && e.text, e.tags && e.tags.map(p=>{
            let c = s ? p in s ? `md-tag-icon md-tag--${s[p]}` : "md-tag-icon" : "";
            return O("span", {
                class: `md-tag ${c}`
            }, p)
        }
        ), n > 0 && o.length > 0 && O("p", {
            class: "md-search-result__terms"
        }, _e("search.result.term.missing"), ": ", ...o)))
    }
    function Ro(e) {
        let t = e[0].score
          , r = [...e]
          , n = ve()
          , o = r.findIndex(l=>!`${new URL(l.location,n.base)}`.includes("#"))
          , [i] = r.splice(o, 1)
          , a = r.findIndex(l=>l.score < t);
        a === -1 && (a = r.length);
        let s = r.slice(0, a)
          , p = r.slice(a)
          , c = [en(i, 2 | +(!o && a === 0)), ...s.map(l=>en(l, 1)), ...p.length ? [O("details", {
            class: "md-search-result__more"
        }, O("summary", {
            tabIndex: -1
        }, O("div", null, p.length > 0 && p.length === 1 ? _e("search.result.more.one") : _e("search.result.more.other", p.length))), ...p.map(l=>en(l, 1)))] : []];
        return O("li", {
            class: "md-search-result__item"
        }, c)
    }
    // function Ho(e) {
    //     return O("ul", {
    //         class: "md-source__facts"
    //     }, Object.entries(e).map(([t,r])=>O("li", {
    //         class: `md-source__fact md-source__fact--${t}`
    //     }, typeof r == "number" ? yr(r) : r)))
    // }
    function tn(e) {
        let t = `tabbed-control tabbed-control--${e}`;
        return O("div", {
            class: t,
            hidden: !0
        }, O("button", {
            class: "tabbed-button",
            tabIndex: -1,
            "aria-hidden": "true"
        }))
    }
    function $o(e) {
        return O("div", {
            class: "md-typeset__scrollwrap"
        }, O("div", {
            class: "md-typeset__table"
        }, e))
    }
    function Ba(e) {
        let t = ve()
          , r = new URL(`../${e.version}/`,t.base);
        return O("li", {
            class: "md-version__item"
        }, O("a", {
            href: `${r}`,
            class: "md-version__link"
        }, e.title))
    }
    function Po(e, t) {
        return O("div", {
            class: "md-version"
        }, O("button", {
            class: "md-version__current",
            "aria-label": _e("select.version")
        }, t.title), O("ul", {
            class: "md-version__list"
        }, e.map(Ba)))
    }
    var Ga = 0;
    function Ja(e, t) {
        document.body.append(e);
        let {width: r} = be(e);
        e.style.setProperty("--md-tooltip-width", `${r}px`),
        e.remove();
        let n = Tt(t)
          , o = typeof n != "undefined" ? it(n) : $({
            x: 0,
            y: 0
        })
          , i = T(Et(t), mr(t)).pipe(te());
        return J([i, o]).pipe(u(([a,s])=>{
            let {x: p, y: c} = qe(t)
              , l = be(t)
              , f = t.closest("table");
            return f && t.parentElement && (p += f.offsetLeft + t.parentElement.offsetLeft,
            c += f.offsetTop + t.parentElement.offsetTop),
            {
                active: a,
                offset: {
                    x: p - s.x + l.width / 2 - r / 2,
                    y: c - s.y + l.height + 8
                }
            }
        }
        ))
    }
    function Qe(e) {
        let t = e.title;
        if (!t.length)
            return x;
        let r = `__tooltip_ ${Ga++}`
          , n = Ft(r, "inline")
          , o = W(".md-typeset", n);
        return o.innerHTML = t,
        P(()=>{
            let i = new S;
            return i.subscribe({
                next({offset: a}) {
                    n.style.setProperty("--md-tooltip-x", `${a.x}px`),
                    n.style.setProperty("--md-tooltip-y", `${a.y}px`)
                },
                complete() {
                    n.style.removeProperty("--md-tooltip-x"),
                    n.style.removeProperty("--md-tooltip-y")
                }
            }),
            T(i.pipe(y(({active: a})=>a)), i.pipe(Te(250), y(({active: a})=>!a))).subscribe({
                next({active: a}) {
                    a ? (e.insertAdjacentElement("afterend", n),
                    e.setAttribute("aria-describedby", r),
                    e.removeAttribute("title")) : (n.remove(),
                    e.removeAttribute("aria-describedby"),
                    e.setAttribute("title", t))
                },
                complete() {
                    n.remove(),
                    e.removeAttribute("aria-describedby"),
                    e.setAttribute("title", t)
                }
            }),
            i.pipe(Re(16, Se)).subscribe(({active: a})=>{
                n.classList.toggle("md-tooltip--active", a)
            }
            ),
            i.pipe(It(125, Se), y(()=>!!e.offsetParent), u(()=>e.offsetParent.getBoundingClientRect()), u(({x: a})=>a)).subscribe({
                next(a) {
                    a ? n.style.setProperty("--md-tooltip-0", `${-a}px`) : n.style.removeProperty("--md-tooltip-0")
                },
                complete() {
                    n.style.removeProperty("--md-tooltip-0")
                }
            }),
            Ja(n, e).pipe(w(a=>i.next(a)), C(()=>i.complete()), u(a=>j({
                ref: e
            }, a)))
        }
        ).pipe(Je(ce))
    }
    function Xa(e, t) {
        let r = P(()=>J([eo(e), it(t)])).pipe(u(([{x: n, y: o},i])=>{
            let {width: a, height: s} = be(e);
            return {
                x: n - i.x + a / 2,
                y: o - i.y + s / 2
            }
        }
        ));
        return Et(e).pipe(g(n=>r.pipe(u(o=>({
            active: n,
            offset: o
        })), ye(+!n || 1 / 0))))
    }
    function Io(e, t, {target$: r}) {
        let[n,o] = Array.from(e.children);
        return P(()=>{
            let i = new S
              , a = i.pipe(ne(), ae(!0));
            return i.subscribe({
                next({offset: s}) {
                    e.style.setProperty("--md-tooltip-x", `${s.x}px`),
                    e.style.setProperty("--md-tooltip-y", `${s.y}px`)
                },
                complete() {
                    e.style.removeProperty("--md-tooltip-x"),
                    e.style.removeProperty("--md-tooltip-y")
                }
            }),
            Ot(e).pipe(F(a)).subscribe(s=>{
                e.toggleAttribute("data-md-visible", s)
            }
            ),
            T(i.pipe(y(({active: s})=>s)), i.pipe(Te(250), y(({active: s})=>!s))).subscribe({
                next({active: s}) {
                    s ? e.prepend(n) : n.remove()
                },
                complete() {
                    e.prepend(n)
                }
            }),
            i.pipe(Re(16, Se)).subscribe(({active: s})=>{
                n.classList.toggle("md-tooltip--active", s)
            }
            ),
            i.pipe(It(125, Se), y(()=>!!e.offsetParent), u(()=>e.offsetParent.getBoundingClientRect()), u(({x: s})=>s)).subscribe({
                next(s) {
                    s ? e.style.setProperty("--md-tooltip-0", `${-s}px`) : e.style.removeProperty("--md-tooltip-0")
                },
                complete() {
                    e.style.removeProperty("--md-tooltip-0")
                }
            }),
            b(o, "click").pipe(F(a), y(s=>!(s.metaKey || s.ctrlKey))).subscribe(s=>{
                s.stopPropagation(),
                s.preventDefault()
            }
            ),
            b(o, "mousedown").pipe(F(a), ie(i)).subscribe(([s,{active: p}])=>{
                var c;
                if (s.button !== 0 || s.metaKey || s.ctrlKey)
                    s.preventDefault();
                else if (p) {
                    s.preventDefault();
                    let l = e.parentElement.closest(".md-annotation");
                    l instanceof HTMLElement ? l.focus() : (c = De()) == null || c.blur()
                }
            }
            ),
            r.pipe(F(a), y(s=>s === n), Ze(125)).subscribe(()=>e.focus()),
            Xa(e, t).pipe(w(s=>i.next(s)), C(()=>i.complete()), u(s=>j({
                ref: e
            }, s)))
        }
        )
    }
    function Za(e) {
        let t = ve();
        if (e.tagName !== "CODE")
            return [e];
        let r = [".c", ".c1", ".cm"];
        if (typeof t.annotate != "undefined") {
            let n = e.closest("[class|=language]");
            if (n)
                for (let o of Array.from(n.classList)) {
                    if (!o.startsWith("language-"))
                        continue;
                    let[,i] = o.split("-");
                    i in t.annotate && r.push(...t.annotate[i])
                }
        }
        return H(r.join(", "), e)
    }
    function es(e) {
        let t = [];
        for (let r of Za(e)) {
            let n = []
              , o = document.createNodeIterator(r, NodeFilter.SHOW_TEXT);
            for (let i = o.nextNode(); i; i = o.nextNode())
                n.push(i);
            for (let i of n) {
                let a;
                for (; a = /(\(\d+\))(!)?/.exec(i.textContent); ) {
                    let[,s,p] = a;
                    if (typeof p == "undefined") {
                        let c = i.splitText(a.index);
                        i = c.splitText(s.length),
                        t.push(c)
                    } else {
                        i.textContent = s,
                        t.push(i);
                        break
                    }
                }
            }
        }
        return t
    }
    function jo(e, t) {
        t.append(...Array.from(e.childNodes))
    }
    function Sr(e, t, {target$: r, print$: n}) {
        let o = t.closest("[id]")
          , i = o == null ? void 0 : o.id
          , a = new Map;
        for (let s of es(t)) {
            let[,p] = s.textContent.match(/\((\d+)\)/);
            ue(`:scope > li:nth-child(${p})`, e) && (a.set(p, Lo(p, i)),
            s.replaceWith(a.get(p)))
        }
        return a.size === 0 ? x : P(()=>{
            let s = new S
              , p = s.pipe(ne(), ae(!0))
              , c = [];
            for (let[l,f] of a)
                c.push([W(".md-typeset", f), W(`:scope > li:nth-child(${l})`, e)]);
            return n.pipe(F(p)).subscribe(l=>{
                e.hidden = !l,
                e.classList.toggle("md-annotation-list", l);
                for (let[f,m] of c)
                    l ? jo(f, m) : jo(m, f)
            }
            ),
            T(...[...a].map(([,l])=>Io(l, t, {
                target$: r
            }))).pipe(C(()=>s.complete()), he())
        }
        )
    }
    function Fo(e) {
        if (e.nextElementSibling) {
            let t = e.nextElementSibling;
            if (t.tagName === "OL")
                return t;
            if (t.tagName === "P" && !t.children.length)
                return Fo(t)
        }
    }
    function Uo(e, t) {
        return P(()=>{
            let r = Fo(e);
            return typeof r != "undefined" ? Sr(r, e, t) : x
        }
        )
    }
    var Do = Lt(nn());
    var ts = 0
      , Wo = T(b(window, "keydown").pipe(u(()=>!0)), T(b(window, "keyup"), b(window, "contextmenu")).pipe(u(()=>!1))).pipe(V(!1), Z(1));
    function No(e) {
        if (e.nextElementSibling) {
            let t = e.nextElementSibling;
            if (t.tagName === "OL")
                return t;
            if (t.tagName === "P" && !t.children.length)
                return No(t)
        }
    }
    function rs(e) {
        return Le(e).pipe(u(({width: t})=>({
            scrollable: St(e).width > t
        })), oe("scrollable"))
    }
    function zo(e, t) {
        let {matches: r} = matchMedia("(hover)")
          , n = P(()=>{
            let o = new S
              , i = o.pipe(qr(1));
            o.subscribe(({scrollable: m})=>{
                m && r ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex")
            }
            );
            let a = ts++
              , s = []
              , p = e.closest("pre");
            p.id = `__code_ ${a}`;
            let c = []
              , l = e.closest(".highlight");
            if (l instanceof HTMLElement) {
                let m = No(l);
                if (typeof m != "undefined" && (l.classList.contains("annotate") || ee("content.code.annotate"))) {
                    let d = Sr(m, e, t);
                    c.push(Le(l).pipe(F(i), u(({width: h, height: v})=>h && v), te(), g(h=>h ? d : x)))
                }
            }
            let f = H(":scope > span[id]", e);
            if (f.length && (e.classList.add("md-code__content"),
            e.closest(".select") || ee("content.code.select") && !e.closest(".no-select"))) {
                let m = +f[0].id.split("-").pop()
                  , d = Co();
                s.push(d),
                ee("content.tooltips") && c.push(Qe(d));
                let h = b(d, "click").pipe(Pt(R=>!R, !1), w(()=>d.blur()), he());
                h.subscribe(R=>{
                    d.classList.toggle("md-code__button--active", R)
                }
                );
                let v = pe(f).pipe(re(R=>mr(R).pipe(u(B=>[R, B]))));
                h.pipe(g(R=>R ? v : x)).subscribe(([R,B])=>{
                    let se = ue(".hll.select", R);
                    if (se && !B)
                        se.replaceWith(...Array.from(se.childNodes));
                    else if (!se && B) {
                        let me = document.createElement("span");
                        me.className = "hll select",
                        me.append(...Array.from(R.childNodes).slice(1)),
                        R.append(me)
                    }
                }
                );
                let Y = pe(f).pipe(re(R=>b(R, "mousedown").pipe(w(B=>B.preventDefault()), u(()=>R))))
                  , X = h.pipe(g(R=>R ? Y : x), ie(Wo), u(([R,B])=>{
                    var me;
                    let se = f.indexOf(R) + m;
                    if (B === !1)
                        return [se, se];
                    {
                        let Ee = H(".hll", e).map(Be=>f.indexOf(Be.parentElement) + m);
                        return (me = window.getSelection()) == null || me.removeAllRanges(),
                        [Math.min(se, ...Ee), Math.max(se, ...Ee)]
                    }
                }
                ))
                  , K = Xr(x).pipe(y(R=>R.startsWith(`__codelineno-${a}-`)));
                K.subscribe(R=>{
                    let[,,B] = R.split("-")
                      , se = B.split(":").map(Ee=>+Ee - m + 1);
                    se.length === 1 && se.push(se[0]);
                    for (let Ee of H(".hll:not(.select)", e))
                        Ee.replaceWith(...Array.from(Ee.childNodes));
                    let me = f.slice(se[0] - 1, se[1]);
                    for (let Ee of me) {
                        let Be = document.createElement("span");
                        Be.className = "hll",
                        Be.append(...Array.from(Ee.childNodes).slice(1)),
                        Ee.append(Be)
                    }
                }
                ),
                K.pipe(ye(1), ke(ce)).subscribe(R=>{
                    if (R.includes(":")) {
                        let B = document.getElementById(R.split(":")[0]);
                        B && setTimeout(()=>{
                            let se = B
                              , me = -(48 + 16);
                            for (; se !== document.body; )
                                me += se.offsetTop,
                                se = se.offsetParent;
                            window.scrollTo({
                                top: me
                            })
                        }
                        , 1)
                    }
                }
                );
                let Ne = pe(H('a[href^="#__codelineno"]', l)).pipe(re(R=>b(R, "click").pipe(w(B=>B.preventDefault()), u(()=>R)))).pipe(F(i), ie(Wo), u(([R,B])=>{
                    let me = +W(`[id="${R.hash.slice(1)}"]`).parentElement.id.split("-").pop();
                    if (B === !1)
                        return [me, me];
                    {
                        let Ee = H(".hll", e).map(Be=>+Be.parentElement.id.split("-").pop());
                        return [Math.min(me, ...Ee), Math.max(me, ...Ee)]
                    }
                }
                ));
                T(X, Ne).subscribe(R=>{
                    let B = `#__codelineno-${a}-`;
                    R[0] === R[1] ? B += R[0] : B += `${R[0]}:${R[1]}`,
                    history.replaceState({}, "", B),
                    window.dispatchEvent(new HashChangeEvent("hashchange",{
                        newURL: window.location.origin + window.location.pathname + B,
                        oldURL: window.location.href
                    }))
                }
                )
            }
            if (Do.default.isSupported() && (e.closest(".copy") || ee("content.code.copy") && !e.closest(".no-copy"))) {
                let m = Ao(p.id);
                s.push(m),
                ee("content.tooltips") && c.push(Qe(m))
            }
            if (s.length) {
                let m = ko();
                m.append(...s),
                p.insertBefore(m, e)
            }
            return rs(e).pipe(w(m=>o.next(m)), C(()=>o.complete()), u(m=>j({
                ref: e
            }, m)), We(...c))
        }
        );
        return ee("content.lazy") ? Ot(e).pipe(y(o=>o), ye(1), g(()=>n)) : n
    }
    function ns(e, {target$: t, print$: r}) {
        let n = !0;
        return T(t.pipe(u(o=>o.closest("details:not([open])")), y(o=>e === o), u(()=>({
            action: "open",
            reveal: !0
        }))), r.pipe(y(o=>o || !n), w(()=>n = e.open), u(o=>({
            action: o ? "open" : "close"
        }))))
    }
    function Vo(e, t) {
        return P(()=>{
            let r = new S;
            return r.subscribe(({action: n, reveal: o})=>{
                e.toggleAttribute("open", n === "open"),
                o && e.scrollIntoView()
            }
            ),
            ns(e, t).pipe(w(n=>r.next(n)), C(()=>r.complete()), u(n=>j({
                ref: e
            }, n)))
        }
        )
    }
    var qo = ".node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}marker{fill:var(--md-mermaid-edge-color)!important}.edgeLabel .label rect{fill:#0000}.label{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.label foreignObject{line-height:normal;overflow:visible}.label div .edgeLabel{color:var(--md-mermaid-label-fg-color)}.edgeLabel,.edgeLabel rect,.label div .edgeLabel{background-color:var(--md-mermaid-label-bg-color)}.edgeLabel,.edgeLabel rect{fill:var(--md-mermaid-label-bg-color);color:var(--md-mermaid-edge-color)}.edgePath .path,.flowchart-link{stroke:var(--md-mermaid-edge-color);stroke-width:.05rem}.edgePath .arrowheadPath{fill:var(--md-mermaid-edge-color);stroke:none}.cluster rect{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}.cluster span{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}g #flowchart-circleEnd,g #flowchart-circleStart,g #flowchart-crossEnd,g #flowchart-crossStart,g #flowchart-pointEnd,g #flowchart-pointStart{stroke:none}g.classGroup line,g.classGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.classGroup text{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.classLabel .box{fill:var(--md-mermaid-label-bg-color);background-color:var(--md-mermaid-label-bg-color);opacity:1}.classLabel .label{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node .divider{stroke:var(--md-mermaid-node-fg-color)}.relation{stroke:var(--md-mermaid-edge-color)}.cardinality{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.cardinality text{fill:inherit!important}defs #classDiagram-compositionEnd,defs #classDiagram-compositionStart,defs #classDiagram-dependencyEnd,defs #classDiagram-dependencyStart,defs #classDiagram-extensionEnd,defs #classDiagram-extensionStart{fill:var(--md-mermaid-edge-color)!important;stroke:var(--md-mermaid-edge-color)!important}defs #classDiagram-aggregationEnd,defs #classDiagram-aggregationStart{fill:var(--md-mermaid-label-bg-color)!important;stroke:var(--md-mermaid-edge-color)!important}g.stateGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.stateGroup .state-title{fill:var(--md-mermaid-label-fg-color)!important;font-family:var(--md-mermaid-font-family)}g.stateGroup .composit{fill:var(--md-mermaid-label-bg-color)}.nodeLabel{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node circle.state-end,.node circle.state-start,.start-state{fill:var(--md-mermaid-edge-color);stroke:none}.end-state-inner,.end-state-outer{fill:var(--md-mermaid-edge-color)}.end-state-inner,.node circle.state-end{stroke:var(--md-mermaid-label-bg-color)}.transition{stroke:var(--md-mermaid-edge-color)}[id^=state-fork] rect,[id^=state-join] rect{fill:var(--md-mermaid-edge-color)!important;stroke:none!important}.statediagram-cluster.statediagram-cluster .inner{fill:var(--md-default-bg-color)}.statediagram-cluster rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}.statediagram-state rect.divider{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}defs #statediagram-barbEnd{stroke:var(--md-mermaid-edge-color)}.attributeBoxEven,.attributeBoxOdd{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}.entityBox{fill:var(--md-mermaid-label-bg-color);stroke:var(--md-mermaid-node-fg-color)}.entityLabel{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.relationshipLabelBox{fill:var(--md-mermaid-label-bg-color);fill-opacity:1;background-color:var(--md-mermaid-label-bg-color);opacity:1}.relationshipLabel{fill:var(--md-mermaid-label-fg-color)}.relationshipLine{stroke:var(--md-mermaid-edge-color)}defs #ONE_OR_MORE_END *,defs #ONE_OR_MORE_START *,defs #ONLY_ONE_END *,defs #ONLY_ONE_START *,defs #ZERO_OR_MORE_END *,defs #ZERO_OR_MORE_START *,defs #ZERO_OR_ONE_END *,defs #ZERO_OR_ONE_START *{stroke:var(--md-mermaid-edge-color)!important}.actor,defs #ZERO_OR_MORE_END circle,defs #ZERO_OR_MORE_START circle{fill:var(--md-mermaid-label-bg-color)}.actor{stroke:var(--md-mermaid-node-fg-color)}text.actor>tspan{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}line{stroke:var(--md-default-fg-color--lighter)}.actor-man circle,.actor-man line{fill:var(--md-mermaid-label-bg-color);stroke:var(--md-mermaid-node-fg-color)}.messageLine0,.messageLine1{stroke:var(--md-mermaid-edge-color)}.loopText,.loopText>tspan,.messageText,.noteText>tspan{fill:var(--md-mermaid-edge-color);stroke:none;font-family:var(--md-mermaid-font-family)!important}.noteText>tspan{fill:#000}#arrowhead path{fill:var(--md-mermaid-edge-color);stroke:none}.loopLine{stroke:var(--md-mermaid-node-fg-color)}.labelBox,.loopLine{fill:var(--md-mermaid-node-bg-color)}.labelBox{stroke:none}.labelText,.labelText>span{fill:var(--md-mermaid-node-fg-color);font-family:var(--md-mermaid-font-family)}.sequenceNumber{fill:var(--md-accent-bg-color)}rect.rect{fill:var(--md-mermaid-node-bg-color);stroke:none}rect.rect+text.text{fill:var(--md-mermaid-edge-color)}defs #sequencenumber{fill:var(--md-mermaid-node-fg-color)!important}";
    var on, is = 0;
    function as() {
        return typeof mermaid == "undefined" || mermaid instanceof Element ? Er("https://unpkg.com/mermaid@9.4.3/dist/mermaid.min.js") : $(void 0)
    }
    function Ko(e) {
        return e.classList.remove("mermaid"),
        on || (on = as().pipe(w(()=>mermaid.initialize({
            startOnLoad: !1,
            themeCSS: qo,
            sequence: {
                actorFontSize: "16px",
                messageFontSize: "16px",
                noteFontSize: "16px"
            }
        })), u(()=>{}
        ), Z(1))),
        on.subscribe(()=>{
            e.classList.add("mermaid");
            let t = `__mermaid_ ${is++}`
              , r = O("div", {
                class: "mermaid"
            })
              , n = e.textContent;
            mermaid.mermaidAPI.render(t, n, (o,i)=>{
                let a = r.attachShadow({
                    mode: "closed"
                });
                a.innerHTML = o,
                e.replaceWith(r),
                i == null || i(a)
            }
            )
        }
        ),
        on.pipe(u(()=>({
            ref: e
        })))
    }
    var Yo = O("table");
    function Qo(e) {
        return e.replaceWith(Yo),
        Yo.replaceWith($o(e)),
        $({
            ref: e
        })
    }
    function ss(e) {
        let t = e.find(r=>r.checked) || e[0];
        return T(...e.map(r=>b(r, "change").pipe(u(()=>W(`label[for="${r.id}"]`))))).pipe(V(W(`label[for="${t.id}"]`)), u(r=>({
            active: r
        })))
    }
    function Bo(e, {viewport$: t, target$: r}) {
        let n = W(".tabbed-labels", e)
          , o = H(":scope > input", e)
          , i = tn("prev");
        e.append(i);
        let a = tn("next");
        return e.append(a),
        P(()=>{
            let s = new S
              , p = s.pipe(ne(), ae(!0));
            J([s, Le(e)]).pipe(F(p), Re(1, Se)).subscribe({
                next([{active: c},l]) {
                    let f = qe(c)
                      , {width: m} = be(c);
                    e.style.setProperty("--md-indicator-x", `${f.x}px`),
                    e.style.setProperty("--md-indicator-width", `${m}px`);
                    let d = dr(n);
                    (f.x < d.x || f.x + m > d.x + l.width) && n.scrollTo({
                        left: Math.max(0, f.x - 16),
                        behavior: "smooth"
                    })
                },
                complete() {
                    e.style.removeProperty("--md-indicator-x"),
                    e.style.removeProperty("--md-indicator-width")
                }
            }),
            J([it(n), Le(n)]).pipe(F(p)).subscribe(([c,l])=>{
                let f = St(n);
                i.hidden = c.x < 16,
                a.hidden = c.x > f.width - l.width - 16
            }
            ),
            T(b(i, "click").pipe(u(()=>-1)), b(a, "click").pipe(u(()=>1))).pipe(F(p)).subscribe(c=>{
                let {width: l} = be(n);
                n.scrollBy({
                    left: l * c,
                    behavior: "smooth"
                })
            }
            ),
            r.pipe(F(p), y(c=>o.includes(c))).subscribe(c=>c.click()),
            n.classList.add("tabbed-labels--linked");
            for (let c of o) {
                let l = W(`label[for="${c.id}"]`);
                l.replaceChildren(O("a", {
                    href: `#${l.htmlFor}`,
                    tabIndex: -1
                }, ...Array.from(l.childNodes))),
                b(l.firstElementChild, "click").pipe(F(p), y(f=>!(f.metaKey || f.ctrlKey)), w(f=>f.preventDefault())).subscribe(()=>{
                    history.replaceState({}, "", `#${l.htmlFor}`),
                    l.click()
                }
                )
            }
            return ee("content.tabs.link") && s.pipe(Oe(1), ie(t)).subscribe(([{active: c},{offset: l}])=>{
                let f = c.innerText.trim();
                if (c.hasAttribute("data-md-switching"))
                    c.removeAttribute("data-md-switching");
                else {
                    let m = e.offsetTop - l.y;
                    for (let h of H("[data-tabs]"))
                        for (let v of H(":scope > input", h)) {
                            let Y = W(`label[for="${v.id}"]`);
                            if (Y !== c && Y.innerText.trim() === f) {
                                Y.setAttribute("data-md-switching", ""),
                                v.click();
                                break
                            }
                        }
                    window.scrollTo({
                        top: e.offsetTop - m
                    });
                    let d = __md_get("__tabs") || [];
                    __md_set("__tabs", [...new Set([f, ...d])])
                }
            }
            ),
            s.pipe(F(p)).subscribe(()=>{
                for (let c of H("audio, video", e))
                    c.pause()
            }
            ),
            ss(o).pipe(w(c=>s.next(c)), C(()=>s.complete()), u(c=>j({
                ref: e
            }, c)))
        }
        ).pipe(Je(ce))
    }
    function Go(e, {viewport$: t, target$: r, print$: n}) {
        return T(...H(".annotate:not(.highlight)", e).map(o=>Uo(o, {
            target$: r,
            print$: n
        })), ...H("pre:not(.mermaid) > code", e).map(o=>zo(o, {
            target$: r,
            print$: n
        })), ...H("pre.mermaid", e).map(o=>Ko(o)), ...H("table:not([class])", e).map(o=>Qo(o)), ...H("details", e).map(o=>Vo(o, {
            target$: r,
            print$: n
        })), ...H("[data-tabs]", e).map(o=>Bo(o, {
            viewport$: t,
            target$: r
        })), ...H("[title]", e).filter(()=>ee("content.tooltips")).map(o=>Qe(o)))
    }
    function cs(e, {alert$: t}) {
        return t.pipe(g(r=>T($(!0), $(!1).pipe(Ze(2e3))).pipe(u(n=>({
            message: r,
            active: n
        })))))
    }
    function Jo(e, t) {
        let r = W(".md-typeset", e);
        return P(()=>{
            let n = new S;
            return n.subscribe(({message: o, active: i})=>{
                e.classList.toggle("md-dialog--active", i),
                r.textContent = o
            }
            ),
            cs(e, t).pipe(w(o=>n.next(o)), C(()=>n.complete()), u(o=>j({
                ref: e
            }, o)))
        }
        )
    }
    function ps({viewport$: e}) {
        if (!ee("header.autohide"))
            return $(!1);
        let t = e.pipe(u(({offset: {y: o}})=>o), je(2, 1), u(([o,i])=>[o < i, i]), oe(0))
          , r = J([e, t]).pipe(y(([{offset: o},[,i]])=>Math.abs(i - o.y) > 100), u(([,[o]])=>o), te())
          , n = Ke("search");
        return J([e, n]).pipe(u(([{offset: o},i])=>o.y > 400 && !i), te(), g(o=>o ? r : $(!1)), V(!1))
    }
    function Xo(e, t) {
        return P(()=>J([Le(e), ps(t)])).pipe(u(([{height: r},n])=>({
            height: r,
            hidden: n
        })), te((r,n)=>r.height === n.height && r.hidden === n.hidden), Z(1))
    }
    function Zo(e, {header$: t, main$: r}) {
        return P(()=>{
            let n = new S
              , o = n.pipe(ne(), ae(!0));
            n.pipe(oe("active"), ot(t)).subscribe(([{active: a},{hidden: s}])=>{
                e.classList.toggle("md-header--shadow", a && !s),
                e.hidden = s
            }
            );
            let i = pe(H("[title]", e)).pipe(y(()=>ee("content.tooltips")), re(a=>Qe(a)));
            return r.subscribe(n),
            t.pipe(F(o), u(a=>j({
                ref: e
            }, a)), We(i.pipe(F(o))))
        }
        )
    }
    function ls(e, {viewport$: t, header$: r}) {
        return wr(e, {
            viewport$: t,
            header$: r
        }).pipe(u(({offset: {y: n}})=>{
            let {height: o} = be(e);
            return {
                active: n >= o
            }
        }
        ), oe("active"))
    }
    function ei(e, t) {
        return P(()=>{
            let r = new S;
            r.subscribe({
                next({active: o}) {
                    e.classList.toggle("md-header__title--active", o)
                },
                complete() {
                    e.classList.remove("md-header__title--active")
                }
            });
            let n = ue(".md-content h1");
            return typeof n == "undefined" ? x : ls(n, t).pipe(w(o=>r.next(o)), C(()=>r.complete()), u(o=>j({
                ref: e
            }, o)))
        }
        )
    }
    function ti(e, {viewport$: t, header$: r}) {
        let n = r.pipe(u(({height: i})=>i), te())
          , o = n.pipe(g(()=>Le(e).pipe(u(({height: i})=>({
            top: e.offsetTop,
            bottom: e.offsetTop + i
        })), oe("bottom"))));
        return J([n, o, t]).pipe(u(([i,{top: a, bottom: s},{offset: {y: p}, size: {height: c}}])=>(c = Math.max(0, c - Math.max(0, a - p, i) - Math.max(0, c + p - s)),
        {
            offset: a - i,
            height: c,
            active: a - i <= p
        })), te((i,a)=>i.offset === a.offset && i.height === a.height && i.active === a.active))
    }
    function fs(e) {
        let t = __md_get("__palette") || {
            index: e.findIndex(r=>matchMedia(r.getAttribute("data-md-color-media")).matches)
        };
        return $(...e).pipe(re(r=>b(r, "change").pipe(u(()=>r))), V(e[Math.max(0, t.index)]), u(r=>({
            index: e.indexOf(r),
            color: {
                media: r.getAttribute("data-md-color-media"),
                scheme: r.getAttribute("data-md-color-scheme"),
                primary: r.getAttribute("data-md-color-primary"),
                accent: r.getAttribute("data-md-color-accent")
            }
        })), Z(1))
    }
    function ri(e) {
        let t = H("input", e)
          , r = O("meta", {
            name: "theme-color"
        });
        document.head.appendChild(r);
        let n = jt("(prefers-color-scheme: light)");
        return P(()=>{
            let o = new S;
            return o.subscribe(i=>{
                if (document.body.setAttribute("data-md-color-switching", ""),
                i.color.media === "(prefers-color-scheme)") {
                    let a = matchMedia("(prefers-color-scheme: light)")
                      , s = document.querySelector(a.matches ? "[data-md-color-media='(prefers-color-scheme: light)']" : "[data-md-color-media='(prefers-color-scheme: dark)']");
                    i.color.scheme = s.getAttribute("data-md-color-scheme"),
                    i.color.primary = s.getAttribute("data-md-color-primary"),
                    i.color.accent = s.getAttribute("data-md-color-accent")
                }
                for (let[a,s] of Object.entries(i.color))
                    document.body.setAttribute(`data-md-color-${a}`, s);
                for (let a = 0; a < t.length; a++) {
                    let s = t[a].nextElementSibling;
                    s instanceof HTMLElement && (s.hidden = i.index !== a)
                }
                __md_set("__palette", i)
            }
            ),
            o.pipe(u(()=>{
                let i = Ae("header")
                  , {backgroundColor: a} = window.getComputedStyle(i);
                return a.match(/\d+/g).map(s=>(+s).toString(16).padStart(2, "0")).join("")
            }
            )).subscribe(i=>r.content = `#${i}`),
            o.pipe(ke(ce)).subscribe(()=>{
                document.body.removeAttribute("data-md-color-switching")
            }
            ),
            fs(t).pipe(F(n.pipe(Oe(1))), ft(), w(i=>o.next(i)), C(()=>o.complete()), u(i=>j({
                ref: e
            }, i)))
        }
        )
    }
    var an = Lt(nn());
    function us(e) {
        e.setAttribute("data-md-copying", "");
        let t = e.innerText;
        return e.removeAttribute("data-md-copying"),
        t
    }
    function ni({alert$: e}) {
        an.default.isSupported() && new N(t=>{
            new an.default("[data-clipboard-target], [data-clipboard-text]",{
                text: r=>r.getAttribute("data-clipboard-text") || us(W(r.getAttribute("data-clipboard-target")))
            }).on("success", r=>t.next(r))
        }
        ).pipe(w(t=>{
            t.trigger.focus()
        }
        ), u(()=>_e("clipboard.copied"))).subscribe(e)
    }
    function ms(e) {
        if (e.length < 2)
            return [""];
        let[t,r] = [...e].sort((o,i)=>o.length - i.length).map(o=>o.replace(/[^/]+$/, ""))
          , n = 0;
        if (t === r)
            n = t.length;
        else
            for (; t.charCodeAt(n) === r.charCodeAt(n); )
                n++;
        return e.map(o=>o.replace(t.slice(0, n), ""))
    }
    function Tr(e) {
        let t = __md_get("__sitemap", sessionStorage, e);
        if (t)
            return $(t);
        {
            let r = ve();
            return yo(new URL("sitemap.xml",e || r.base)).pipe(u(n=>ms(H("loc", n).map(o=>o.textContent))), ge(()=>x), Fe([]), w(n=>__md_set("__sitemap", n, sessionStorage, e)))
        }
    }
    function oi({location$: e, viewport$: t}) {
        let r = ve();
        if (location.protocol === "file:")
            return x;
        let n = Tr().pipe(u(c=>c.map(l=>`${new URL(l,r.base)}`)))
          , o = b(document.body, "click").pipe(ie(n), g(([c,l])=>{
            if (!(c.target instanceof Element))
                return x;
            let f = c.target.closest("a");
            if (f === null)
                return x;
            if (f.target || c.metaKey || c.ctrlKey)
                return x;
            let m = new URL(f.href);
            return m.search = m.hash = "",
            l.includes(`${m}`) ? (c.preventDefault(),
            $(new URL(f.href))) : x
        }
        ), he());
        o.pipe(ye(1)).subscribe(()=>{
            let c = ue("link[rel=icon]");
            typeof c != "undefined" && (c.href = c.href)
        }
        ),
        b(window, "beforeunload").subscribe(()=>{
            history.scrollRestoration = "auto"
        }
        ),
        o.pipe(ie(t)).subscribe(([c,{offset: l}])=>{
            history.scrollRestoration = "manual",
            history.replaceState(l, ""),
            history.pushState(null, "", c)
        }
        ),
        o.subscribe(e);
        let i = e.pipe(V(xe()), oe("pathname"), Oe(1), g(c=>xr(c).pipe(ge(()=>(ut(c),
        x)))))
          , a = new DOMParser
          , s = i.pipe(g(c=>c.text()), g(c=>{
            let l = a.parseFromString(c, "text/html");
            for (let m of ["title", "link[rel=canonical]", "meta[name=author]", "meta[name=description]", "[data-md-component=announce]", "[data-md-component=container]", "[data-md-component=header-topic]", "[data-md-component=outdated]", "[data-md-component=logo]", "[data-md-component=skip]", ...ee("navigation.tabs.sticky") ? ["[data-md-component=tabs]"] : []]) {
                let d = ue(m)
                  , h = ue(m, l);
                typeof d != "undefined" && typeof h != "undefined" && d.replaceWith(h)
            }
            let f = Ae("container");
            return Ve(H("script", f)).pipe(g(m=>{
                let d = l.createElement("script");
                if (m.src) {
                    for (let h of m.getAttributeNames())
                        d.setAttribute(h, m.getAttribute(h));
                    return m.replaceWith(d),
                    new N(h=>{
                        d.onload = ()=>h.complete()
                    }
                    )
                } else
                    return d.textContent = m.textContent,
                    m.replaceWith(d),
                    x
            }
            ), ne(), ae(l))
        }
        ), he());
        return b(window, "popstate").pipe(u(xe)).subscribe(e),
        e.pipe(V(xe()), je(2, 1), g(([c,l])=>c.pathname === l.pathname && c.hash !== l.hash ? $(l) : x)).subscribe(c=>{
            var l, f;
            history.state !== null || !c.hash ? window.scrollTo(0, (f = (l = history.state) == null ? void 0 : l.y) != null ? f : 0) : (history.scrollRestoration = "auto",
            Jr(c.hash),
            history.scrollRestoration = "manual")
        }
        ),
        s.pipe(ie(e)).subscribe(([,c])=>{
            var l, f;
            history.state !== null || !c.hash ? window.scrollTo(0, (f = (l = history.state) == null ? void 0 : l.y) != null ? f : 0) : Jr(c.hash)
        }
        ),
        s.pipe(g(()=>t), oe("offset"), Te(100)).subscribe(({offset: c})=>{
            history.replaceState(c, "")
        }
        ),
        s
    }
    var si = Lt(ai());
    function ci(e) {
        let t = e.separator.split("|").map(o=>o.replace(/(\(\?[!=][^)]+\))/g, "").length === 0 ? "\uFFFD" : o).join("|")
          , r = new RegExp(t,"img")
          , n = (o,i,a)=>`${i}<mark data-md-highlight>${a}</mark>`;
        return o=>{
            o = o.replace(/[\s*+\-:~^]+/g, " ").trim();
            let i = new RegExp(`(^|${e.separator}|)(${o.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&").replace(r, "|")})`,"img");
            return a=>(0,
            si.default)(a).replace(i, n).replace(/<\/mark>(\s+)<mark[^>]*>/img, "$1")
        }
    }
    function Wt(e) {
        return e.type === 1
    }
    function Or(e) {
        return e.type === 3
    }
    function pi(e, t) {
        let r = Oo(e);
        return T($(location.protocol !== "file:"), Ke("search")).pipe(Ue(n=>n), g(()=>t)).subscribe(({config: n, docs: o})=>r.next({
            type: 0,
            data: {
                config: n,
                docs: o,
                options: {
                    suggest: ee("search.suggest")
                }
            }
        })),
        r
    }
    function li({document$: e}) {
        let t = ve()
          , r = Ye(new URL("../versions.json",t.base)).pipe(ge(()=>x))
          , n = r.pipe(u(o=>{
            let[,i] = t.base.match(/([^/]+)\/?$/);
            return o.find(({version: a, aliases: s})=>a === i || s.includes(i)) || o[0]
        }
        ));
        r.pipe(u(o=>new Map(o.map(i=>[`${new URL(`../${i.version}/`,t.base)}`, i]))), g(o=>b(document.body, "click").pipe(y(i=>!i.metaKey && !i.ctrlKey), ie(n), g(([i,a])=>{
            if (i.target instanceof Element) {
                let s = i.target.closest("a");
                if (s && !s.target && o.has(s.href)) {
                    let p = s.href;
                    return !i.target.closest(".md-version") && o.get(p) === a ? x : (i.preventDefault(),
                    $(p))
                }
            }
            return x
        }
        ), g(i=>{
            let {version: a} = o.get(i);
            return Tr(new URL(i)).pipe(u(s=>{
                let c = xe().href.replace(t.base, "");
                return s.includes(c.split("#")[0]) ? new URL(`../${a}/${c}`,t.base) : new URL(i)
            }
            ))
        }
        )))).subscribe(o=>ut(o)),
        J([r, n]).subscribe(([o,i])=>{
            W(".md-header__topic").appendChild(Po(o, i))
        }
        ),
        e.pipe(g(()=>n)).subscribe(o=>{
            var a;
            let i = __md_get("__outdated", sessionStorage);
            if (i === null) {
                i = !0;
                let s = [((a = t.version) == null ? void 0 : a.default) || ["latest"]].flat();
                e: for (let p of s)
                    for (let c of o.aliases)
                        if (new RegExp(p,"i").test(c)) {
                            i = !1;
                            break e
                        }
                __md_set("__outdated", i, sessionStorage)
            }
            if (i)
                for (let s of le("outdated"))
                    s.hidden = !1
        }
        )
    }
    function gs(e, {worker$: t}) {
        let {searchParams: r} = xe();
        r.has("q") && (et("search", !0),
        e.value = r.get("q"),
        e.focus(),
        Ke("search").pipe(Ue(i=>!i)).subscribe(()=>{
            let i = new URL(location.href);
            i.searchParams.delete("q"),
            history.replaceState({}, "", `${i}`)
        }
        ));
        let n = Et(e)
          , o = T(t.pipe(Ue(Wt)), b(e, "keyup"), n).pipe(u(()=>e.value), te());
        return J([o, n]).pipe(u(([i,a])=>({
            value: i,
            focus: a
        })), Z(1))
    }
    function fi(e, {worker$: t}) {
        let r = new S
          , n = r.pipe(ne(), ae(!0));
        return J([t.pipe(Ue(Wt)), r], (o,i)=>i).pipe(oe("value")).subscribe(({value: o})=>t.next({
            type: 2,
            data: o
        })),
        r.pipe(oe("focus")).subscribe(({focus: o})=>{
            o && et("search", o)
        }
        ),
        b(e.form, "reset").pipe(F(n)).subscribe(()=>e.focus()),
        gs(e, {
            worker$: t
        }).pipe(w(o=>r.next(o)), C(()=>r.complete()), u(o=>j({
            ref: e
        }, o)), Z(1))
    }
    function ui(e, {worker$: t, query$: r}) {
        let n = new S
          , o = lo(e.parentElement).pipe(y(Boolean))
          , i = e.parentElement
          , a = W(":scope > :first-child", e)
          , s = W(":scope > :last-child", e);
        Ke("search").subscribe(l=>s.setAttribute("role", l ? "list" : "presentation")),
        n.pipe(ie(r), Yr(t.pipe(Ue(Wt)))).subscribe(([{items: l},{value: f}])=>{
            switch (l.length) {
            case 0:
                a.textContent = f.length ? _e("search.result.none") : _e("search.result.placeholder");
                break;
            case 1:
                a.textContent = _e("search.result.one");
                break;
            default:
                let m = yr(l.length);
                a.textContent = _e("search.result.other", m)
            }
        }
        );
        let p = n.pipe(w(()=>s.innerHTML = ""), g(({items: l})=>T($(...l.slice(0, 10)), $(...l.slice(10)).pipe(je(4), Br(o), g(([f])=>f)))), u(Ro), he());
        return p.subscribe(l=>s.appendChild(l)),
        p.pipe(re(l=>{
            let f = ue("details", l);
            return typeof f == "undefined" ? x : b(f, "toggle").pipe(F(n), u(()=>f))
        }
        )).subscribe(l=>{
            l.open === !1 && l.offsetTop <= i.scrollTop && i.scrollTo({
                top: l.offsetTop
            })
        }
        ),
        t.pipe(y(Or), u(({data: l})=>l)).pipe(w(l=>n.next(l)), C(()=>n.complete()), u(l=>j({
            ref: e
        }, l)))
    }
    function ys(e, {query$: t}) {
        return t.pipe(u(({value: r})=>{
            let n = xe();
            return n.hash = "",
            r = r.replace(/\s+/g, "+").replace(/&/g, "%26").replace(/=/g, "%3D"),
            n.search = `q=${r}`,
            {
                url: n
            }
        }
        ))
    }
    function mi(e, t) {
        let r = new S
          , n = r.pipe(ne(), ae(!0));
        return r.subscribe(({url: o})=>{
            e.setAttribute("data-clipboard-text", e.href),
            e.href = `${o}`
        }
        ),
        b(e, "click").pipe(F(n)).subscribe(o=>o.preventDefault()),
        ys(e, t).pipe(w(o=>r.next(o)), C(()=>r.complete()), u(o=>j({
            ref: e
        }, o)))
    }
    function di(e, {worker$: t, keyboard$: r}) {
        let n = new S
          , o = Ae("search-query")
          , i = T(b(o, "keydown"), b(o, "focus")).pipe(ke(ce), u(()=>o.value), te());
        return n.pipe(ot(i), u(([{suggest: s},p])=>{
            let c = p.split(/([\s-]+)/);
            if (s != null && s.length && c[c.length - 1]) {
                let l = s[s.length - 1];
                l.startsWith(c[c.length - 1]) && (c[c.length - 1] = l)
            } else
                c.length = 0;
            return c
        }
        )).subscribe(s=>e.innerHTML = s.join("").replace(/\s/g, "&nbsp;")),
        r.pipe(y(({mode: s})=>s === "search")).subscribe(s=>{
            switch (s.type) {
            case "ArrowRight":
                e.innerText.length && o.selectionStart === o.value.length && (o.value = e.innerText);
                break
            }
        }
        ),
        t.pipe(y(Or), u(({data: s})=>s)).pipe(w(s=>n.next(s)), C(()=>n.complete()), u(()=>({
            ref: e
        })))
    }
    function hi(e, {index$: t, keyboard$: r}) {
        let n = ve();
        try {
            let o = pi(n.search, t)
              , i = Ae("search-query", e)
              , a = Ae("search-result", e);
            b(e, "click").pipe(y(({target: p})=>p instanceof Element && !!p.closest("a"))).subscribe(()=>et("search", !1)),
            r.pipe(y(({mode: p})=>p === "search")).subscribe(p=>{
                let c = De();
                switch (p.type) {
                case "Enter":
                    if (c === i) {
                        let l = new Map;
                        for (let f of H(":first-child [href]", a)) {
                            let m = f.firstElementChild;
                            l.set(f, parseFloat(m.getAttribute("data-md-score")))
                        }
                        if (l.size) {
                            let[[f]] = [...l].sort(([,m],[,d])=>d - m);
                            f.click()
                        }
                        p.claim()
                    }
                    break;
                case "Escape":
                case "Tab":
                    et("search", !1),
                    i.blur();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    if (typeof c == "undefined")
                        i.focus();
                    else {
                        let l = [i, ...H(":not(details) > [href], summary, details[open] [href]", a)]
                          , f = Math.max(0, (Math.max(0, l.indexOf(c)) + l.length + (p.type === "ArrowUp" ? -1 : 1)) % l.length);
                        l[f].focus()
                    }
                    p.claim();
                    break;
                default:
                    i !== De() && i.focus()
                }
            }
            ),
            r.pipe(y(({mode: p})=>p === "global")).subscribe(p=>{
                switch (p.type) {
                case "f":
                case "s":
                case "/":
                    i.focus(),
                    i.select(),
                    p.claim();
                    break
                }
            }
            );
            let s = fi(i, {
                worker$: o
            });
            return T(s, ui(a, {
                worker$: o,
                query$: s
            })).pipe(We(...le("search-share", e).map(p=>mi(p, {
                query$: s
            })), ...le("search-suggest", e).map(p=>di(p, {
                worker$: o,
                keyboard$: r
            }))))
        } catch (o) {
            return e.hidden = !0,
            Xe
        }
    }
    function bi(e, {index$: t, location$: r}) {
        return J([t, r.pipe(V(xe()), y(n=>!!n.searchParams.get("h")))]).pipe(u(([n,o])=>ci(n.config)(o.searchParams.get("h"))), u(n=>{
            var a;
            let o = new Map
              , i = document.createNodeIterator(e, NodeFilter.SHOW_TEXT);
            for (let s = i.nextNode(); s; s = i.nextNode())
                if ((a = s.parentElement) != null && a.offsetHeight) {
                    let p = s.textContent
                      , c = n(p);
                    c.length > p.length && o.set(s, c)
                }
            for (let[s,p] of o) {
                let {childNodes: c} = O("span", null, p);
                s.replaceWith(...Array.from(c))
            }
            return {
                ref: e,
                nodes: o
            }
        }
        ))
    }
    function xs(e, {viewport$: t, main$: r}) {
        let n = e.closest(".md-grid")
          , o = n.offsetTop - n.parentElement.offsetTop;
        return J([r, t]).pipe(u(([{offset: i, height: a},{offset: {y: s}}])=>(a = a + Math.min(o, Math.max(0, s - i)) - o,
        {
            height: a,
            locked: s >= i + o
        })), te((i,a)=>i.height === a.height && i.locked === a.locked))
    }
    function sn(e, n) {
        var o = n
          , {header$: t} = o
          , r = mn(o, ["header$"]);
        let i = W(".md-sidebar__scrollwrap", e)
          , {y: a} = qe(i);
        return P(()=>{
            let s = new S
              , p = s.pipe(ne(), ae(!0))
              , c = s.pipe(Re(0, Se));
            return c.pipe(ie(t)).subscribe({
                next([{height: l},{height: f}]) {
                    i.style.height = `${l - 2 * a}px`,
                    e.style.top = `${f}px`
                },
                complete() {
                    i.style.height = "",
                    e.style.top = ""
                }
            }),
            c.pipe(Ue()).subscribe(()=>{
                for (let l of H(".md-nav__link--active[href]", e)) {
                    let f = Tt(l);
                    if (typeof f != "undefined") {
                        let m = l.offsetTop - f.offsetTop
                          , {height: d} = be(f);
                        f.scrollTo({
                            top: m - d / 2
                        })
                    }
                }
            }
            ),
            pe(H("label[tabindex]", e)).pipe(re(l=>b(l, "click").pipe(u(()=>l), F(p)))).subscribe(l=>{
                let f = W(`[id="${l.htmlFor}"]`);
                W(`[aria-labelledby="${l.id}"]`).setAttribute("aria-expanded", `${f.checked}`)
            }
            ),
            xs(e, r).pipe(w(l=>s.next(l)), C(()=>s.complete()), u(l=>j({
                ref: e
            }, l)))
        }
        )
    }
    function vi(e, t) {
        if (typeof t != "undefined") {
            let r = `https://api.github.com/repos/${e}/${t}`;
            return $t(Ye(`${r}/releases/latest`).pipe(ge(()=>x), u(n=>({
                version: n.tag_name
            })), Fe({})), Ye(r).pipe(ge(()=>x), u(n=>({
                stars: n.stargazers_count,
                forks: n.forks_count
            })), Fe({}))).pipe(u(([n,o])=>j(j({}, n), o)))
        } else {
            let r = `https://api.github.com/users/${e}`;
            return Ye(r).pipe(u(n=>({
                repositories: n.public_repos
            })), Fe({}))
        }
    }
    function gi(e, t) {
        let r = `https://${e}/api/v4/projects/${encodeURIComponent(t)}`;
        return Ye(r).pipe(ge(()=>x), u(({star_count: n, forks_count: o})=>({
            stars: n,
            forks: o
        })), Fe({}))
    }
    function yi(e) {
        let t = e.match(/^.+github\.com\/([^/]+)\/?([^/]+)?/i);
        if (t) {
            let[,r,n] = t;
            return vi(r, n)
        }
        if (t = e.match(/^.+?([^/]*gitlab[^/]+)\/(.+?)\/?$/i),
        t) {
            let[,r,n] = t;
            return gi(r, n)
        }
        return x
    }
    var Es;
    function ws(e) {
        return Es || (Es = P(()=>{
            let t = __md_get("__source", sessionStorage);
            if (t)
                return $(t);
            if (le("consent").length) {
                let n = __md_get("__consent");
                if (!(n && n.github))
                    return x
            }
            return yi(e.href).pipe(w(n=>__md_set("__source", n, sessionStorage)))
        }
        ).pipe(ge(()=>x), y(t=>Object.keys(t).length > 0), u(t=>({
            facts: t
        })), Z(1)))
    }
    function xi(e) {
        let t = W(":scope > :last-child", e);
        return P(()=>{
            let r = new S;
            return r.subscribe(({facts: n})=>{
                t.appendChild(Ho(n)),
                t.classList.add("md-source__repository--active")
            }
            ),
            ws(e).pipe(w(n=>r.next(n)), C(()=>r.complete()), u(n=>j({
                ref: e
            }, n)))
        }
        )
    }
    function Ss(e, {viewport$: t, header$: r}) {
        return Le(document.body).pipe(g(()=>wr(e, {
            header$: r,
            viewport$: t
        })), u(({offset: {y: n}})=>({
            hidden: n >= 10
        })), oe("hidden"))
    }
    function Ei(e, t) {
        return P(()=>{
            let r = new S;
            return r.subscribe({
                next({hidden: n}) {
                    e.hidden = n
                },
                complete() {
                    e.hidden = !1
                }
            }),
            (ee("navigation.tabs.sticky") ? $({
                hidden: !1
            }) : Ss(e, t)).pipe(w(n=>r.next(n)), C(()=>r.complete()), u(n=>j({
                ref: e
            }, n)))
        }
        )
    }
    function Ts(e, {viewport$: t, header$: r}) {
        let n = new Map
          , o = H("[href^=\\#]", e);
        for (let s of o) {
            let p = decodeURIComponent(s.hash.substring(1))
              , c = ue(`[id="${p}"]`);
            typeof c != "undefined" && n.set(s, c)
        }
        let i = r.pipe(oe("height"), u(({height: s})=>{
            let p = Ae("main")
              , c = W(":scope > :first-child", p);
            return s + .8 * (c.offsetTop - p.offsetTop)
        }
        ), he());
        return Le(document.body).pipe(oe("height"), g(s=>P(()=>{
            let p = [];
            return $([...n].reduce((c,[l,f])=>{
                for (; p.length && n.get(p[p.length - 1]).tagName >= f.tagName; )
                    p.pop();
                let m = f.offsetTop;
                for (; !m && f.parentElement; )
                    f = f.parentElement,
                    m = f.offsetTop;
                let d = f.offsetParent;
                for (; d; d = d.offsetParent)
                    m += d.offsetTop;
                return c.set([...p = [...p, l]].reverse(), m)
            }
            , new Map))
        }
        ).pipe(u(p=>new Map([...p].sort(([,c],[,l])=>c - l))), ot(i), g(([p,c])=>t.pipe(Pt(([l,f],{offset: {y: m}, size: d})=>{
            let h = m + d.height >= Math.floor(s.height);
            for (; f.length; ) {
                let[,v] = f[0];
                if (v - c < m || h)
                    l = [...l, f.shift()];
                else
                    break
            }
            for (; l.length; ) {
                let[,v] = l[l.length - 1];
                if (v - c >= m && !h)
                    f = [l.pop(), ...f];
                else
                    break
            }
            return [l, f]
        }
        , [[], [...p]]), te((l,f)=>l[0] === f[0] && l[1] === f[1])))))).pipe(u(([s,p])=>({
            prev: s.map(([c])=>c),
            next: p.map(([c])=>c)
        })), V({
            prev: [],
            next: []
        }), je(2, 1), u(([s,p])=>s.prev.length < p.prev.length ? {
            prev: p.prev.slice(Math.max(0, s.prev.length - 1), p.prev.length),
            next: []
        } : {
            prev: p.prev.slice(-1),
            next: p.next.slice(0, p.next.length - s.next.length)
        }))
    }
    function wi(e, {viewport$: t, header$: r, main$: n, target$: o}) {
        return P(()=>{
            let i = new S
              , a = i.pipe(ne(), ae(!0));
            if (i.subscribe(({prev: s, next: p})=>{
                for (let[c] of p)
                    c.classList.remove("md-nav__link--passed"),
                    c.classList.remove("md-nav__link--active");
                for (let[c,[l]] of s.entries())
                    l.classList.add("md-nav__link--passed"),
                    l.classList.toggle("md-nav__link--active", c === s.length - 1)
            }
            ),
            ee("toc.follow")) {
                let s = T(t.pipe(Te(1), u(()=>{}
                )), t.pipe(Te(250), u(()=>"smooth")));
                i.pipe(y(({prev: p})=>p.length > 0), ot(n.pipe(ke(ce))), ie(s)).subscribe(([[{prev: p}],c])=>{
                    let[l] = p[p.length - 1];
                    if (l.offsetHeight) {
                        let f = Tt(l);
                        if (typeof f != "undefined") {
                            let m = l.offsetTop - f.offsetTop
                              , {height: d} = be(f);
                            f.scrollTo({
                                top: m - d / 2,
                                behavior: c
                            })
                        }
                    }
                }
                )
            }
            return ee("navigation.tracking") && t.pipe(F(a), oe("offset"), Te(250), Oe(1), F(o.pipe(Oe(1))), ft({
                delay: 250
            }), ie(i)).subscribe(([,{prev: s}])=>{
                let p = xe()
                  , c = s[s.length - 1];
                if (c && c.length) {
                    let[l] = c
                      , {hash: f} = new URL(l.href);
                    p.hash !== f && (p.hash = f,
                    history.replaceState({}, "", `${p}`))
                } else
                    p.hash = "",
                    history.replaceState({}, "", `${p}`)
            }
            ),
            Ts(e, {
                viewport$: t,
                header$: r
            }).pipe(w(s=>i.next(s)), C(()=>i.complete()), u(s=>j({
                ref: e
            }, s)))
        }
        )
    }
    function Os(e, {viewport$: t, main$: r, target$: n}) {
        let o = t.pipe(u(({offset: {y: a}})=>a), je(2, 1), u(([a,s])=>a > s && s > 0), te())
          , i = r.pipe(u(({active: a})=>a));
        return J([i, o]).pipe(u(([a,s])=>!(a && s)), te(), F(n.pipe(Oe(1))), ae(!0), ft({
            delay: 250
        }), u(a=>({
            hidden: a
        })))
    }
    function Si(e, {viewport$: t, header$: r, main$: n, target$: o}) {
        let i = new S
          , a = i.pipe(ne(), ae(!0));
        return i.subscribe({
            next({hidden: s}) {
                e.hidden = s,
                s ? (e.setAttribute("tabindex", "-1"),
                e.blur()) : e.removeAttribute("tabindex")
            },
            complete() {
                e.style.top = "",
                e.hidden = !0,
                e.removeAttribute("tabindex")
            }
        }),
        r.pipe(F(a), oe("height")).subscribe(({height: s})=>{
            e.style.top = `${s + 16}px`
        }
        ),
        b(e, "click").subscribe(s=>{
            s.preventDefault(),
            window.scrollTo({
                top: 0
            })
        }
        ),
        Os(e, {
            viewport$: t,
            main$: n,
            target$: o
        }).pipe(w(s=>i.next(s)), C(()=>i.complete()), u(s=>j({
            ref: e
        }, s)))
    }
    function Ti({document$: e}) {
        e.pipe(g(()=>H(".md-ellipsis")), re(t=>Ot(t).pipe(F(e.pipe(Oe(1))), y(r=>r), u(()=>t), ye(1))), y(t=>t.offsetWidth < t.scrollWidth), re(t=>{
            let r = t.innerText
              , n = t.closest("a") || t;
            return n.title = r,
            Qe(n).pipe(F(e.pipe(Oe(1))), C(()=>n.removeAttribute("title")))
        }
        )).subscribe(),
        e.pipe(g(()=>H(".md-status")), re(t=>Qe(t))).subscribe()
    }
    function Oi({document$: e, tablet$: t}) {
        e.pipe(g(()=>H(".md-toggle--indeterminate")), w(r=>{
            r.indeterminate = !0,
            r.checked = !1
        }
        ), re(r=>b(r, "change").pipe(Qr(()=>r.classList.contains("md-toggle--indeterminate")), u(()=>r))), ie(t)).subscribe(([r,n])=>{
            r.classList.remove("md-toggle--indeterminate"),
            n && (r.checked = !1)
        }
        )
    }
    function _s() {
        return /(iPad|iPhone|iPod)/.test(navigator.userAgent)
    }
    function _i({document$: e}) {
        e.pipe(g(()=>H("[data-md-scrollfix]")), w(t=>t.removeAttribute("data-md-scrollfix")), y(_s), re(t=>b(t, "touchstart").pipe(u(()=>t)))).subscribe(t=>{
            let r = t.scrollTop;
            r === 0 ? t.scrollTop = 1 : r + t.offsetHeight === t.scrollHeight && (t.scrollTop = r - 1)
        }
        )
    }
    function Mi({viewport$: e, tablet$: t}) {
        J([Ke("search"), t]).pipe(u(([r,n])=>r && !n), g(r=>$(r).pipe(Ze(r ? 400 : 100))), ie(e)).subscribe(([r,{offset: {y: n}}])=>{
            if (r)
                document.body.setAttribute("data-md-scrolllock", ""),
                document.body.style.top = `-${n}px`;
            else {
                let o = -1 * parseInt(document.body.style.top, 10);
                document.body.removeAttribute("data-md-scrolllock"),
                document.body.style.top = "",
                o && window.scrollTo(0, o)
            }
        }
        )
    }
    Object.entries || (Object.entries = function(e) {
        let t = [];
        for (let r of Object.keys(e))
            t.push([r, e[r]]);
        return t
    }
    );
    Object.values || (Object.values = function(e) {
        let t = [];
        for (let r of Object.keys(e))
            t.push(e[r]);
        return t
    }
    );
    typeof Element != "undefined" && (Element.prototype.scrollTo || (Element.prototype.scrollTo = function(e, t) {
        typeof e == "object" ? (this.scrollLeft = e.left,
        this.scrollTop = e.top) : (this.scrollLeft = e,
        this.scrollTop = t)
    }
    ),
    Element.prototype.replaceWith || (Element.prototype.replaceWith = function(...e) {
        let t = this.parentNode;
        if (t) {
            e.length === 0 && t.removeChild(this);
            for (let r = e.length - 1; r >= 0; r--) {
                let n = e[r];
                typeof n == "string" ? n = document.createTextNode(n) : n.parentNode && n.parentNode.removeChild(n),
                r ? t.insertBefore(this.previousSibling, n) : t.replaceChild(n, this)
            }
        }
    }
    ));
    function Ms() {
        return location.protocol === "file:" ? Er(`${new URL("search/search_index.js",cn.base)}`).pipe(u(()=>__index), Z(1)) : Ye(new URL("search/search_index.json",cn.base))
    }
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
    var st = Zn()
      , Nt = mo()
      , Mt = vo(Nt)
      , pn = uo()
      , He = To()
      , _r = jt("(min-width: 960px)")
      , Ai = jt("(min-width: 1220px)")
      , Ci = go()
      , cn = ve()
      , ki = document.forms.namedItem("search") ? Ms() : Xe
      , ln = new S;
    ni({
        alert$: ln
    });
    ee("navigation.instant") && oi({
        location$: Nt,
        viewport$: He
    }).subscribe(st);
    var Li;
    ((Li = cn.version) == null ? void 0 : Li.provider) === "mike" && li({
        document$: st
    });
    T(Nt, Mt).pipe(Ze(125)).subscribe(()=>{
        et("drawer", !1),
        et("search", !1)
    }
    );
    pn.pipe(y(({mode: e})=>e === "global")).subscribe(e=>{
        switch (e.type) {
        case "p":
        case ",":
            let t = ue("link[rel=prev]");
            typeof t != "undefined" && ut(t);
            break;
        case "n":
        case ".":
            let r = ue("link[rel=next]");
            typeof r != "undefined" && ut(r);
            break;
        case "Enter":
            let n = De();
            n instanceof HTMLLabelElement && n.click()
        }
    }
    );
    Ti({
        document$: st
    });
    Oi({
        document$: st,
        tablet$: _r
    });
    _i({
        document$: st
    });
    Mi({
        viewport$: He,
        tablet$: _r
    });
    var at = Xo(Ae("header"), {
        viewport$: He
    })
      , Dt = st.pipe(u(()=>Ae("main")), g(e=>ti(e, {
        viewport$: He,
        header$: at
    })), Z(1))
      , Ls = T(...le("consent").map(e=>Mo(e, {
        target$: Mt
    })), ...le("dialog").map(e=>Jo(e, {
        alert$: ln
    })), ...le("header").map(e=>Zo(e, {
        viewport$: He,
        header$: at,
        main$: Dt
    })), ...le("palette").map(e=>ri(e)), ...le("search").map(e=>hi(e, {
        index$: ki,
        keyboard$: pn
    })), ...le("source").map(e=>xi(e)))
      , As = P(()=>T(...le("announce").map(e=>_o(e)), ...le("content").map(e=>Go(e, {
        viewport$: He,
        target$: Mt,
        print$: Ci
    })), ...le("content").map(e=>ee("search.highlight") ? bi(e, {
        index$: ki,
        location$: Nt
    }) : x), ...le("header-title").map(e=>ei(e, {
        viewport$: He,
        header$: at
    })), ...le("sidebar").map(e=>e.getAttribute("data-md-type") === "navigation" ? Zr(Ai, ()=>sn(e, {
        viewport$: He,
        header$: at,
        main$: Dt
    })) : Zr(_r, ()=>sn(e, {
        viewport$: He,
        header$: at,
        main$: Dt
    }))), ...le("tabs").map(e=>Ei(e, {
        viewport$: He,
        header$: at
    })), ...le("toc").map(e=>wi(e, {
        viewport$: He,
        header$: at,
        main$: Dt,
        target$: Mt
    })), ...le("top").map(e=>Si(e, {
        viewport$: He,
        header$: at,
        main$: Dt,
        target$: Mt
    }))))
      , Ri = st.pipe(g(()=>As), We(Ls), Z(1));
    Ri.subscribe();
    window.document$ = st;
    window.location$ = Nt;
    window.target$ = Mt;
    window.keyboard$ = pn;
    window.viewport$ = He;
    window.tablet$ = _r;
    window.screen$ = Ai;
    window.print$ = Ci;
    window.alert$ = ln;
    window.component$ = Ri;
}
)();