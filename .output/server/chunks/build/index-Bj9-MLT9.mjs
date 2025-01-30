import { useSSRContext, ref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BSmOcFS6.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$7 = {
  __name: "description",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "description" }, _attrs))}>${ssrInterpolate(__props.text)}</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/description.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/mainker.png");
const _sfc_main$6 = {
  __name: "our-principles",
  __ssrInlineRender: true,
  setup(__props) {
    const datas = ref([
      {
        icon: "/icons/patientkericon.png",
        name: "Patient record",
        desc: "In your profile, you can view and download all your doctor-documented conditions, prescriptions, and certificates."
      },
      {
        icon: "/icons/reportskericon.png",
        name: "Sick notes",
        desc: "Electronic submission of sick notes to the necessary health organizations."
      },
      {
        icon: "/icons/medicinekericon.png",
        name: "Prescriptions",
        desc: "The prescriptions are electronic and can be directly redeemed at any pharmacy. You only need to identify yourself at the pharmacy."
      },
      {
        icon: "/icons/doctorkericon.png",
        name: "Multilingual doctors",
        desc: "Our doctors speak English, German, Turkish, Bulgarian, and Serbo-Croatian."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5" }, _attrs))}><div class="row justify-content-center"><div class="col-12"><div class="section-title text-center mb-4 pb-2"><h6 class="text-primary">What we do ?</h6><h4 class="title mb-4">First-class telemedicine care</h4><p class="text-muted para-desc mx-auto mb-0">`);
      _push(ssrRenderComponent(_component_Description, { text: "Licensed specialists with certifications and practices in the countries where we operate, capable of addressing all your healthcare needs via video consultation." }, null, _parent));
      _push(`</p></div></div></div><div class="row justify-content-center"><div class="col-lg-10"><div class="row"><!--[-->`);
      ssrRenderList(datas.value, (item) => {
        _push(`<div class="col-md-6 mt-4 pt-2"><div class="d-flex features feature-primary core-feature rounded p-4"><div class="icon text-center rounded-circle me-3 mt-2"><img${ssrRenderAttr("src", item.icon)} alt="icon" class="mb-0" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}"></div><div class="flex-1"><h5>${ssrInterpolate(item.name)}</h5><p class="text-muted mb-0">${ssrInterpolate(item.desc)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/our-principles.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "digital-list",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(__props) {
    const formatBoldText = (text) => {
      return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "list-unstyled text-muted mt-3" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        var _a;
        _push(`<li class="mb-0"><span class="text-primary h5 me-2"><i class="uil uil-check-circle align-middle"></i></span><span>${(_a = formatBoldText(item)) != null ? _a : ""}</span></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/digital-list.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "principel-services",
  __ssrInlineRender: true,
  setup(__props) {
    const costEfficiencyList = ref([
      "Offered at no cost to all regular patients of our medical practices",
      "A fixed flat rate, no matter the treatment",
      "High-quality, evidence-based medical care from German doctors in every country where our platform operates"
    ]);
    const premiumCareList = ref([
      "**High-quality, evidence-based medicine** provided by experienced German doctors",
      "**Convenient video consultations** and treatments across multiple European countries",
      "**Transparent pricing** with a fixed flat rate for all treatments",
      "**Exclusive benefits** for regular patients, including free follow-up services",
      "Save **time and money** by avoiding unnecessary travel and overpriced treatments abroad"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = _sfc_main$7;
      const _component_digital_list = _sfc_main$5;
      const _component_description = _sfc_main$7;
      _push(`<!--[--><div class="row align-items-center" data-v-74898753><div class="col-lg-6 col-md-5 mainker mt-100" data-v-74898753><img${ssrRenderAttr("src", `/img/efficientker.png`)} alt="" data-v-74898753></div><div class="col-lg-6 col-md-7" data-v-74898753><div class="section-title" data-v-74898753><h1 class="title mb-3" data-v-74898753>Smart Healthcare Solutions</h1><p class="para-desc text-muted" data-v-74898753>`);
      _push(ssrRenderComponent(_component_Description, { text: "Experience premium German medical care from the comfort of your home, with transparent pricing and exceptional service quality" }, null, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_digital_list, { items: costEfficiencyList.value }, null, _parent));
      _push(`<div class="mt-4" data-v-74898753><a href="javascript:void(0)" class="btn btn-primary" data-v-74898753>View Pricing</a></div></div></div></div><div class="container mt-100" data-v-74898753><div class="row align-items-center" data-v-74898753><div class="col-md-5 order-1 order-md-2" data-v-74898753><img${ssrRenderAttr("src", `/img/digitalker.png`)} class="img-fluid" alt="" data-v-74898753></div><div class="col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1" data-v-74898753><div class="section-title" data-v-74898753><h1 class="title mb-3" data-v-74898753>Premium German Medical Care Across Europe</h1><p class="para-desc text-muted" data-v-74898753>`);
      _push(ssrRenderComponent(_component_description, null, null, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_digital_list, { items: premiumCareList.value }, null, _parent));
      _push(`<div class="mt-4" data-v-74898753><a href="javascript:void(0)" class="btn btn-primary" data-v-74898753>View Pricing</a></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/principel-services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-74898753"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light rounded-md shadow px-4 py-5" }, _attrs))}><div class="row justify-content-center"><div class="col-12"><div class="section-title text-center"><h4 class="title mb-4">Subscribe Our News!</h4><div class="subcribe-form mt-4 pt-2"><form><div class="mb-0"><input type="email" id="email" name="email" class="border bg-white rounded-pill" required placeholder="Email Address"><button type="submit" class="btn btn-pills btn-primary">Get Started</button></div></form></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/subscribe.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const subscribe = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = ref([
      {
        name: "Free",
        price: 0,
        description: "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
        buttonClass: "btn-outline-primary",
        buttonText: "Free"
      },
      {
        name: "Standard",
        price: 19,
        description: "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
        buttonClass: "btn-soft-primary",
        buttonText: "Buy Now"
      },
      {
        name: "Business",
        price: 49,
        description: "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
        buttonClass: "btn-primary",
        buttonText: "Buy Now"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_description = _sfc_main$7;
      _push(`<!--[--><div class="row justify-content-center"><div class="col-12"><div class="section-title text-center mb-4 pb-2"><h6 class="text-primary">Our Pricing</h6><h4 class="title mb-4">Comfortable Plans</h4><p class="text-muted para-desc mx-auto mb-0">`);
      _push(ssrRenderComponent(_component_description, null, null, _parent));
      _push(`</p></div></div></div><div class="row justify-content-center"><div class="col-lg-9"><!--[-->`);
      ssrRenderList(plans.value, (plan, index2) => {
        _push(`<div><div class="mt-4 pt-2"><div class="rounded shadow p-4"><div class="row align-items-center"><div class="col-md-3"><h5>${ssrInterpolate(plan.name)}</h5><div class="d-flex text-primary"><span class="h6 mb-0 mt-2">$</span><span class="price h2 mb-0">${ssrInterpolate(plan.price)}</span><span class="h6 align-self-end mb-1"> /month</span></div></div><div class="col-md-6 mt-4 mt-sm-0"><p class="text-muted mb-0">${ssrInterpolate(plan.description)}</p></div><div class="col-md-3 mt-4 mt-sm-0 text-center text-md-end"><div class="d-grid"><a href="javascript:void(0)" class="${ssrRenderClass(`btn ${plan.buttonClass}`)}">${ssrInterpolate(plan.buttonText)}</a></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "back-to-top",
  __ssrInlineRender: true,
  props: {
    back: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const showTopButton = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (__props.back) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "back-to-home rounded d-none d-sm-block" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn btn-icon btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i data-feather="home" class="icons"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", {
                  "data-feather": "home",
                  class: "icons"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: "#",
          style: showTopButton.value ? null : { display: "none" },
          class: "btn btn-icon btn-pills btn-primary back-to-top"
        }, _attrs))}><i data-feather="arrow-up" class="icons"></i></a>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/back-to-top.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = _sfc_main$7;
      _push(`<!--[--><section class="bg-half-130 d-table w-100 overflow-hidden" style="${ssrRenderStyle({
        "background-image": "url(/img/bg-index.png)",
        backgroundPosition: "top"
      })}" data-v-8f3f8c2c><div class="container" data-v-8f3f8c2c><div class="row mt-5 align-items-center pt-5" data-v-8f3f8c2c><div class="col-lg-6 col-md-7" data-v-8f3f8c2c><div class="heading-title" data-v-8f3f8c2c><h1 class="heading fw-bold mb-3" data-v-8f3f8c2c> The first international telemedicine platform in Europe </h1><p class="para-desc text-muted" data-v-8f3f8c2c>`);
      _push(ssrRenderComponent(_component_Description, { text: "In every country where we offer telemedicine, we also have medical practices where our doctors can examine you in person!" }, null, _parent));
      _push(`</p><div class="watch-video mt-4 pt-2" data-v-8f3f8c2c><a href="javascript:void(0)" class="btn btn-primary mb-2" data-v-8f3f8c2c>Register</a></div></div></div><div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0" data-v-8f3f8c2c><div class="bg-saas-shape position-relative mainker" data-v-8f3f8c2c><img${ssrRenderAttr("src", _imports_0)} class="mx-auto d-block img-fluid" alt="" data-v-8f3f8c2c></div></div></div></div></section><section class="section" data-v-8f3f8c2c>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<div class="container mt-100 mt-60" data-v-8f3f8c2c>`);
      _push(ssrRenderComponent(services, null, null, _parent));
      _push(`</div><div class="container mt-100 mt-60" data-v-8f3f8c2c>`);
      _push(ssrRenderComponent(subscribe, null, null, _parent));
      _push(`</div><div class="container mt-100 mt-60" data-v-8f3f8c2c>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f3f8c2c"]]);

export { index as default };
//# sourceMappingURL=index-Bj9-MLT9.mjs.map
