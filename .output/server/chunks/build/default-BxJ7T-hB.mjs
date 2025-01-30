import { _ as __nuxt_component_0$1 } from './nuxt-link-BSmOcFS6.mjs';
import { useSSRContext, defineComponent, mergeProps, computed, ref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/img/logo.png");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAYCAYAAADJcMJ/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNzdDNThGMjY1RjNFQTExOUVBNkY4REU2ODQ4REMzRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRTI1NDcwRjBGMjUxMUVEOERENkFFNzNFRUFCNTQ0OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRTI1NDcwRTBGMjUxMUVEOERENkFFNzNFRUFCNTQ0OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzQ5OUJBRTI1MEZFRDExOEVDNUU2MkY3RDlERkQ2MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzdDNThGMjY1RjNFQTExOUVBNkY4REU2ODQ4REMzRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuWRkycAAATCSURBVHja7JpdqFRVFMfn5jUltUYRA83uIXooihwx0aCPE4J1jWoiTCPC0Rc1/IwQooeDBEL5MA1EkaBzhR4KojuZRkU5V/RBKXIq+lDxfiBF+OCMcdXQ9PTf3f+G5WqfM9PV8U63s+DH+Vpnnz17nb32f+8zbWEYphIbHdbWYDDvBvPBneBG8Dv4GRwE3yfN+N8IZid4ETwIrndcvwD2gwLYlTRnawZzEgO0nMd/ggOgAk6zd2bA/WAsfd4F60A1adbWCeZk8BF4AFwCW0EXOA9u43UTsD7QDp4HmxjUQ+AJcDJp2hEwE0zBGLA7HLLfwHxwDyiBwfByOwN2gdlgHjjB82Vwkyo3jrK4L9ViWPPV+TQogqqoeyD8R6S+16nYrgWPMZX6oAN8BZ4EE5TvDeBx8A2YARZSGJn75o7i9z8NyiDH/X4OPyNu7WJ/KniZ+2vAzeC9Bso4zpT7E3gWnAU9oziYWeoFY7NFIINWCqbpfdPAd2A3+LaB+4+ARaCXx5/8D0amDm57WqVHWpNp9lFudzBl3lrn3qNMyb3XsL4mhReZCULSLXqKtTLJsMdY/z6mR1e5ZVFmkSlUWk6k1xTLls+JS8uBo86+8AlYTt5xfz7iGfL5aS2AjnDwnsPBPc6Mb4djEDbqeDl4tQkCyFN16BP7VV7XwuWww1cLGj+i3MPKP4hpDz9CAKVVOboeOfrlxLm0ut9aXrVHXrebvHgKXAJ3gP0xFf8RzADTwRYwHmxn4UbV9oJDTVKzpsGy6sfaBgocwTRBzjh8i8JXBs+LCIKv6uCqryuYgaiHLKMoztvgVVWAdZCr6nl92l+m2TBiX9tYKtlQ+JmVoIvEzE3bmpRmN4OSOK4JseVKdW+Ica0m9j2x9UTZ/cJ381Wor03JXUoUbhQpOMt9+7vWC7/1oj7SN8t611j2P8bMkwzCJI6HUXY7+JKFvwL+AKvAS+BrLiB80MQxs1uNPznRMPVMCxZPvRjSroYi9yLKrokXxwqqgngp7UuWoV+XEKlyW4oSQFa9PgT21KnkTPAZF+C1fQheb9KUoMyt+REPk9IoUckV8bItI7ZXF0QbyB5aiAqmnVasAHvBsQYCuicioM2wWaLHbOS2R/Wu4TSgq5emlNq80vI9h8K15wbE+YJIzzbj7BQLE2mhtCs608hgfgx+SQ195loCnuMYGGdm+vI5uI/HS7k22z7MlRU/Ai3J7fi4oc60oJ7JMTcvnuVHTBP+re10BMfjUGGfLzNLSY3lPSIdy94py45cm10p1l3NFKUTnK4zTTkPFtH/HM91DkPNxpmdmlQd11xqOHQo3CglmqlT7pWoWUN3zO/KOtqj6Ji6WIVdjZjC/I3uQe+ABWAx+AI8A+7lMp8ZdKcI3yp78xZwC/gUjGfq3TfMVBdn/RwjA6HkCkL4VBziZUCVMeBYualwWS5gL7e9taB6UFwZ8ry2p9grl7GuVvxI9ax7s+cQODWqc5/PqTXyCWwieJ/LdMa2gTfBGTCd1wfBr5yivABW09eo3Ke5UJ/YNbaoj9PjwGtqzmPexB/AqdTQN827+EZbe5vTk7NJs7ZWMK2ZD9Tms9gjqaF/F2gb5BTlLSrgxFo4mIklwUxsJOwvAQYARMMe8XoOUUYAAAAASUVORK5CYII=";
const _sfc_main$2 = {
  __name: "navbar",
  __ssrInlineRender: true,
  props: {
    logoLight: {
      type: Boolean,
      required: true
    },
    buttonLight: {
      type: Boolean,
      required: true
    },
    navLight: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const route = useRoute();
    const activeIndex = computed(() => route.path || "/");
    const toggle = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        id: "topnav",
        class: "defaultscroll sticky"
      }, _attrs))} data-v-a6ae2d3f><div class="container" data-v-a6ae2d3f>`);
      if (__props.logoLight) {
        _push(`<div data-v-a6ae2d3f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "logo",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="logo-light-mode" data-v-a6ae2d3f${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="l-dark" alt="" data-v-a6ae2d3f${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="l-light" alt="" data-v-a6ae2d3f${_scopeId}></span><img${ssrRenderAttr("src", _imports_1)} class="logo-dark-mode" alt="" data-v-a6ae2d3f${_scopeId}>`);
            } else {
              return [
                createVNode("span", { class: "logo-light-mode" }, [
                  createVNode("img", {
                    src: _imports_0$1,
                    class: "l-dark",
                    alt: ""
                  }),
                  createVNode("img", {
                    src: _imports_0$1,
                    class: "l-light",
                    alt: ""
                  })
                ]),
                createVNode("img", {
                  src: _imports_1,
                  class: "logo-dark-mode",
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-a6ae2d3f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "logo",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0$1)} class="logo-light-mode" alt="" data-v-a6ae2d3f${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="logo-dark-mode" alt="" data-v-a6ae2d3f${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$1,
                  class: "logo-light-mode",
                  alt: ""
                }),
                createVNode("img", {
                  src: _imports_1,
                  class: "logo-dark-mode",
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (__props.buttonLight) {
        _push(`<div class="buy-button" data-v-a6ae2d3f><a href="javascript:void(0)" data-v-a6ae2d3f><div class="btn btn-primary login-btn-primary" data-v-a6ae2d3f>Buy Now</div><div class="btn btn-light login-btn-light" data-v-a6ae2d3f>Buy Now</div></a></div>`);
      } else {
        _push(`<div class="buy-button" data-v-a6ae2d3f><a href="javascript:void(0)" class="btn btn-primary" data-v-a6ae2d3f>Login</a></div>`);
      }
      _push(`<div class="menu-extras" data-v-a6ae2d3f><div class="menu-item" data-v-a6ae2d3f><a class="${ssrRenderClass([toggle.value === false ? "" : "open", "navbar-toggle"])}" data-v-a6ae2d3f><div class="lines" data-v-a6ae2d3f><span data-v-a6ae2d3f></span><span data-v-a6ae2d3f></span><span data-v-a6ae2d3f></span></div></a></div></div><div id="navigation" class="${ssrRenderClass(toggle.value === false ? "d-none" : "d-block")}" data-v-a6ae2d3f><ul class="${ssrRenderClass([__props.navLight, "navigation-menu nav-left menu-right"])}" data-v-a6ae2d3f><li class="${ssrRenderClass(activeIndex.value === "/" ? "active" : "")}" data-v-a6ae2d3f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "sub-menu-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass(activeIndex.value === "/page-about" ? "active" : "")}" data-v-a6ae2d3f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page-about",
        class: "sub-menu-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass(activeIndex.value === "/page-services" ? "active" : "")}" data-v-a6ae2d3f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page-services",
        class: "sub-menu-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Countries of Operation`);
          } else {
            return [
              createTextVNode("Countries of Operation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="buy-menu-btn d-none" data-v-a6ae2d3f><a href="javascript:void(0)" class="btn btn-primary" data-v-a6ae2d3f>Login</a></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a6ae2d3f"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNUUyNzg0MzZFRDExRUNBNERBQkMxRTA3RkNGRDA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUxNUUyNzg1MzZFRDExRUNBNERBQkMxRTA3RkNGRDA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTE1RTI3ODIzNkVEMTFFQ0E0REFCQzFFMDdGQ0ZEMDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTE1RTI3ODMzNkVEMTFFQ0E0REFCQzFFMDdGQ0ZEMDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6agKZzAAAFF0lEQVR42uyaf2xOVxjH+3prqPpRdHTyUpRQQejCxMI2GYIEMymV8VfH/EG2GbGIhFmyCY2I2T+2bLpkQ2YS4neWdIshoRq/5sds1EQoxVqt1o/X90m+Nzk5Pffte+497zLJnuSTvveeH/d5znnOued5biPxeDzteZYWac+5pDvsqwcoAENAX9ANZIIIqAU3wR/gFDgO/vovGPAieAsUgldA6yTbNdCIH8E2cD2wBrIGApAN1oG78fBSC74AOUF0sW3QCswD1+Pu5Q74ELS10SlisQv1A6VgeDP1PF+/Amp4rx3XSB+Qw3XhJ+fAbFDh0oVeBjcTjN5lsBKMBO0S9COjWwCWg/MJ+rsNRrtyoVfZoUnOgtmgtdZGrnuBfDCQvzO0Oi3BNHDcp+8HYFJYA8aAakPn98EiRfEIR2w12Auugnql/kNwDRwEa8BYtpG26VxX1T5GTAlqwABwy9Dpn3Qpr94o8HOARXsYjFP66Q9O+exSI2wNaAF+NXR2GsRYR1xiI3gacvcpBVnsswsN0+U3zlTSBhQbOrkAerK8Kzt1JSdAH/bd2WddzE/WAFGyyuDz+SyPcfG6lqWaO3lr4hH4HHRK1oASQ+fLlG3wSAqU32zQ4z1wlNtu0os4xzD6FXwDp/GV71q+A1GDcuncaq220YWGBxSybHyKRj494HnMaIC+A5xU9mvXrrM2jOIeakDTGwzVTho75LTBM/5wh7HDN2Cx64hMlG+jle/n34kOo7cfQHEqIrICrawSnOHvcY6e9yVYCB5btJGobjTIpj7l9IomBuRpDS+AOtABDHCg/HrwvmUbcesSkM/rR2A7WAWe6i7UVWv8t3K/c0jlSzXluxBPopwZUW6qcn8Flf+HSCj6DphhmoH22kPvKcFImNh5M5ivXHcHRxjUjORAvQnWcoRfp6s0cPOoUdrKqDdyQ9mqz4AeJcV97ttKFXiiXItLvkQ6KvdEl3qQwetIgo0japqBGq2SNyO1VCAa0IBlfM4SJWR8jb+9TWIf+J4juwmcoPKXwEDwQOmvFVMzTULKHdqLZg/vd/KJC2zlo2ZeSlGetSLKvaGgDFziaVj+bgJtvDrqDFzWRk6SUy1BNYP07JCutIbvmVU+5U+0kRY5CWaBCSAL/A4OcR00mYEibcQkUBnCsk8cHiFKXBwhTEeJcu4C6qJ+g793OzxGyHb6mbPeFGvE98oNcat3tD3t+DD3gYsZ0G98bHjQBJbNTMFxerVrA3qDGu0hZUr5thQY4Xesjmg7UtJZia8NDylWgvmL/9JMvM0Bi9kakG+YhRsgl+WDQWUKjFig6BBjcizO4H6RX8rSz7IlhgccAx1Ynsd8qCupVJJlEn8fMNRZbGNAhs+uc1AZiW5glwPly7j2POW3++Rg29umFiVlWGfo7Kjml0V8zdvKFeZEo0pWzjTy8kKdGDS5OwM0GDqVRO10bcYkS/0VZ85keD1T6lvAXJCptJ/EnKtJ+XfDpten+xgR54iNMhzKYrwvik1mij7XkEIZBn5KMEvFrj4xTdbS5foo/QLmNLflKWtH3O4QeOzTp6TjZ7n+xCSB9RbQM0GdOsbS5/iJ6S4DIwlcckF/xteZzQRAc8HeVHyllDT4pz4+HlYawQbOUMq+UqofP3YmcAFb2aMc3a2wcSGTDAJzmEnIs2x7FewC3/KjdyAJa4Aapw5jlmEQUzHi9y8wrmhklqOK6+Mwla4P+2BXBvz/3ypB5ZkAAwDVXdpUwiDpzgAAAABJRU5ErkJggg==";
const _sfc_main$1 = {
  __name: "footer",
  __ssrInlineRender: true,
  props: {
    footerbar: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const date = ref((/* @__PURE__ */ new Date()).getFullYear());
    const datas = ref([
      "About us",
      "Services",
      "Team",
      "Project",
      "Blog",
      "Login",
      "Release Notes",
      "Invoice",
      "Integrations",
      "APIs",
      "Support",
      "Docs",
      "Changelog",
      "Components",
      "Terms",
      "Privacy",
      "About",
      "Contact"
    ]);
    const contacts = ref([
      { icon: "map-pin", href: "#", text: "Londan, England" },
      {
        icon: "mail",
        href: "mailto:test@yourdomain.com",
        text: "test@yourdomain.com"
      },
      { icon: "phone", href: "tel:+152534-468-854", text: "+ (125) 1254-5487" }
    ]);
    const social = ref([
      {
        link: "https://dribbble.com/shreethemes",
        icon: "uil uil-dribbble align-middle"
      },
      {
        link: "https://www.behance.net/shreethemes",
        icon: "uil uil-behance"
      },
      {
        link: "http://linkedin.com/company/shreethemes",
        icon: "uil uil-linkedin"
      },
      {
        link: "https://www.facebook.com/shreethemes",
        icon: "uil uil-facebook-f align-middle"
      },
      {
        link: "https://www.instagram.com/shreethemes/",
        icon: "uil uil-instagram align-middle"
      },
      {
        link: "https://twitter.com/shreethemes",
        icon: "uil uil-twitter align-middle"
      },
      {
        link: "mailto:support@shreethemes.in",
        icon: "uil uil-envelope align-middle"
      },
      {
        link: "https://forms.gle/QkTueCikDGqJnbky9",
        icon: "uil uil-file align-middle"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["bg-footer", __props.footerbar]
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 mb-0 mb-md-4 pb-0 pb-md-2"><a href="#" class="logo-footer"><img${ssrRenderAttr("src", _imports_0)} height="48" alt=""></a><ul class="list-unstyled footer-list px-0 mt-4"><!--[-->`);
      ssrRenderList(contacts.value, (contact, index) => {
        _push(`<li><i${ssrRenderAttr("data-feather", contact.icon)} class="fea icon-sm me-2"></i><a${ssrRenderAttr("href", contact.href)} class="text-foot">${ssrInterpolate(contact.text)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-lg-9 col-md-12"><div class="row"><div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0"><h5 class="footer-head">Company</h5><ul class="list-unstyled footer-list mt-4"><!--[-->`);
      ssrRenderList(datas.value.slice(0, 6), (item) => {
        _push(`<li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> ${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0"><h5 class="footer-head">Features</h5><ul class="list-unstyled footer-list mt-4"><!--[-->`);
      ssrRenderList(datas.value.slice(6, 10), (item) => {
        _push(`<li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> ${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0"><h5 class="footer-head">Documentation</h5><ul class="list-unstyled footer-list mt-4"><!--[-->`);
      ssrRenderList(datas.value.slice(10, 14), (item) => {
        _push(`<li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> ${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0"><h5 class="footer-head">Usefull Links</h5><ul class="list-unstyled footer-list mt-4"><!--[-->`);
      ssrRenderList(datas.value.slice(14, 16), (item) => {
        _push(`<li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i>${ssrInterpolate(item + " Policy")}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div><div class="container mt-5"><div class="pt-4 footer-bar"><div class="row align-items-center"><div class="col-sm-6"><div class="text-sm-start text-center"><ul class="list-unstyled social-icon social mb-0 mt-4 mt-sm-0"><!--[-->`);
      ssrRenderList(social.value, (item) => {
        _push(`<li class="list-inline-item me-1"><a${ssrRenderAttr("href", item.link)} target="_blank" class="rounded"><i class="${ssrRenderClass(item.icon)}" title="dribbble"></i></a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-sm-6 mt-4 mt-sm-0"><ul class="list-unstyled footer-list text-sm-end text-center mb-0"><!--[-->`);
      ssrRenderList(datas.value.slice(14, 18), (item) => {
        _push(`<li class="list-inline-item"><a href="javascript:void(0)" class="text-foot me-2">${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="row justify-content-center mt-4"><div class="col-12 text-center"><p class="mb-0"> \xA9 ${ssrInterpolate(date.value)} Landflow. Design &amp; Develop with <i class="mdi mdi-heart text-danger"></i> by <a href="https://shreethemes.in" target="_blank" class="text-reset">Shreethemes</a>. </p></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-wrapper" }, _attrs))} data-v-ea2ff7d3>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main data-v-ea2ff7d3>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea2ff7d3"]]);

export { _default as default };
//# sourceMappingURL=default-BxJ7T-hB.mjs.map
