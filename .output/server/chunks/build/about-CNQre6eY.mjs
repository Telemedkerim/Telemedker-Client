import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-d866a52f><div class="container" data-v-d866a52f><h1 class="about-title" data-v-d866a52f>About Us</h1><div class="about-content" data-v-d866a52f><div class="about-section" data-v-d866a52f><h2 data-v-d866a52f>Our Story</h2><p data-v-d866a52f> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div class="about-section" data-v-d866a52f><h2 data-v-d866a52f>Our Mission</h2><p data-v-d866a52f> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><div class="about-section" data-v-d866a52f><h2 data-v-d866a52f>Our Values</h2><ul class="values-list" data-v-d866a52f><li data-v-d866a52f> Innovation: Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li><li data-v-d866a52f> Quality: Ut enim ad minim veniam, quis nostrud exercitation. </li><li data-v-d866a52f> Integrity: Duis aute irure dolor in reprehenderit in voluptate. </li><li data-v-d866a52f>Excellence: Excepteur sint occaecat cupidatat non proident.</li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d866a52f"]]);

export { about as default };
//# sourceMappingURL=about-CNQre6eY.mjs.map
