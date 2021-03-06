/**
 * Created by Gujci on 20/03/15.
 */
/*! skrollr-menu 0.1.13 (2014-09-26) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */
(function(t, e) {
    "use strict";
    var n = 500, o = "sqrt", r = 1, a = "data-menu-top", i = "data-menu-offset", u = e.skrollr, c = e.history, l=!!c.pushState, s = function(e) {
        return e === t?!1 : "A" === e.tagName.toUpperCase() ? e : s(e.parentNode)
    }, f = function(t) {
        if (1 === t.which || 0 === t.button) {
            var e = s(t.target);
            e && h(e) && t.preventDefault()
        }
    }, h = function(e, n) {
        var o = e.getAttribute("href");
        if (!/^#/.test(o))
            return !1;
        var r, u;
        if (u = S ? S(e) : e.getAttribute(a), null !== u)
            r = /p$/.test(u) ? u.slice(0, - 1) / 100 * t.documentElement.clientHeight : + u * T;
        else {
            var s = t.getElementById(o.substr(1));
            if (!s)
                return !1;
            r = d.relativeToAbsolute(s, "top", "top");
            var f = s.getAttribute(i);
            null !== f && (r+=+f)
        }
        return l&&!n && c.pushState({
            top: r
        }, "", o), b&&!n ? d.animateTo(r, {
            duration: g(d.getScrollTop(), r),
            easing: v
        }) : m(function() {
            d.setScrollTop(r)
        }), !0
    }, p = function() {
        if (e.location.hash && t.querySelector) {
            var n = t.querySelector('a[href="' + e.location.hash + '"]');
            n || (n = t.createElement("a"), n.href = e.location.hash), h(n, !0)
        }
    }, m = function(t) {
        e.setTimeout(t, 1)
    };
    u.menu = {}, u.menu.init = function(a, i) {
        d = a, i = i || {}, v = i.easing || o, b = i.animate!==!1, g = i.duration || n, S = i.handleLink, T = i.scale || r, "number" == typeof g && (g = function(t) {
            return function() {
                return t
            }
        }(g)), u.addEvent(t, "click", f), l && u.addEvent(e, "popstate", function(t) {
            var e = t.state || {}, n = e.top || 0;
            m(function() {
                d.setScrollTop(n)
            })
        }, !1), p()
    }, u.menu.click = function(t) {
        h(t)
    };
    var d, v, g, b, S, T;
    m(function() {
        e.location.hash && e.scrollTo(0, 0)
    })
})(document, window);