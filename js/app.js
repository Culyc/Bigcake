(() => {
  "use strict";
  class e {
    constructor(e, t = null) {
      if (
        ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
        this.config.init)
      ) {
        const e = document.querySelectorAll("[data-prlx-mouse]");
        e.length
          ? (this.paralaxMouseInit(e),
            this.setLogging(`Проснулся, слежу за объектами: (${e.length})`))
          : this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
      }
    }
    paralaxMouseInit(e) {
      e.forEach((e) => {
        const t = e.closest("[data-prlx-mouse-wrapper]"),
          o = e.dataset.prlxCx ? +e.dataset.prlxCx : 100,
          n = e.dataset.prlxCy ? +e.dataset.prlxCy : 100,
          l = e.hasAttribute("data-prlx-dxr") ? -1 : 1,
          i = e.hasAttribute("data-prlx-dyr") ? -1 : 1,
          r = e.dataset.prlxA ? +e.dataset.prlxA : 50;
        let c = 0,
          s = 0,
          a = 0,
          d = 0;
        function u(t = window) {
          t.addEventListener("mousemove", function (t) {
            const o = e.getBoundingClientRect().top + window.scrollY;
            if (o >= window.scrollY || o + e.offsetHeight >= window.scrollY) {
              const e = window.innerWidth,
                o = window.innerHeight,
                n = t.clientX - e / 2,
                l = t.clientY - o / 2;
              (a = (n / e) * 100), (d = (l / o) * 100);
            }
          });
        }
        !(function t() {
          (c += ((a - c) * r) / 1e3),
            (s += ((d - s) * r) / 1e3),
            (e.style.cssText = `transform: translate3D(${(l * c) / (o / 10)}%,${
              (i * s) / (n / 10)
            }%,0);`),
            requestAnimationFrame(t);
        })(),
          t ? u(t) : u();
      });
    }
    setLogging(e) {
      this.config.logging &&
        (function (e) {
          setTimeout(() => {
            window.FLS && console.log(e);
          }, 0);
        })(`[PRLX Mouse]: ${e}`);
    }
  }
  let t = !0,
    o = (e = 500) => {
      let o = document.querySelector("body");
      if (t) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (o.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    n = (e = 500) => {
      let o = document.querySelector("body");
      if (t) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (o.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  let l = !1;
  setTimeout(() => {
    if (l) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    window.addEventListener("load", function (e) {
      let t = [54.941642080831926, 73.4172151242675];
      ymaps.ready(function () {
        let e = new ymaps.Map("map", { center: t, zoom: 16 }),
          o = new ymaps.Placemark(
            [54.94269515337896, 73.42354513754266],
            {
              balloonContentHeader: "",
              balloonContentBody: "г.Омск, ул.Титова, д.35",
              balloonContentFooter: "+ 7(978) 507-54 - 90",
            },
            {
              iconLayout: "default#imageWithContent",
              iconImageHref: "img/icons/marker.svg",
              iconImageSize: [117, 135],
              iconImageOffset: [-60, -140],
            }
          );
        e.controls.remove("geolocationControl"),
          e.controls.remove("searchControl"),
          e.controls.remove("trafficControl"),
          e.controls.remove("typeSelector"),
          e.controls.remove("fullscreenControl"),
          e.controls.remove("zoomControl"),
          e.controls.remove("rulerControl"),
          e.behaviors.disable(["scrollZoom"]),
          e.geoObjects.add(o);
      });
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          t &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? o(e) : n(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    new e({});
})();
