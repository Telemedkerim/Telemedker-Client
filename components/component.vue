<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-12">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Typography Heading </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code
                                        class="text-danger">&lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;</code></h6>

                                <template v-for="(heading, index) in headings" :key="heading">
                                    <component :is="`h${index + 1}`" :class="{ 'mb-0': index === 5 }">{{ heading }}
                                    </component>
                                </template>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Display Heading </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;p class="display-1"&gt; Display 1
                    &lt;/p&gt;</code></h6>

                                <p v-for="(display, index) in displays" :key="index" :class="'display-' + (index + 1)">
                                    {{ display }}</p>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Background Color </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;div class="bg-primary"&gt; Landflow
                    Multipurpose Template &lt;/div&gt;</code>
                                </h6>

                                <div v-for="(color, index) in colors" :key="index" class="d-inline-block me-2"
                                    data-bs-toggle="tooltip" :data-bs-title="color.title">
                                    <p :class="`avatar avatar-small ${color.class} rounded`"></p>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Soft Background Color </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;div class="bg-soft-primary"&gt;
                    Landflow Multipurpose Template &lt;/div&gt;</code>
                                </h6>

                                <div v-for="(color, index) in softcolors" :key="index" class="d-inline-block m-1"
                                    data-bs-toggle="tooltip" data-bs-placement="top" :title="`.bg-soft-${color}`">
                                    <p class="avatar avatar-small" :class="`bg-soft-${color} rounded mb-0`"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Text Color </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;div class="text-primary"&gt; Landflow
                    Multipurpose Template &lt;/div&gt;</code>
                                </h6>

                                <div v-for="(color, index) in textColors" :key="index">
                                    <p :class="color.class">{{ color.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Buttons</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn
                    btn-primary"&gt;
                    Primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="(button, index) in buttons" href="javascript:void(0)"
                                    :class="`btn ${button.class} me-1 mb-2`" :key="index">{{ button.text }}</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Buttons Pill</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-pills
                    btn-primary"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="(button, index) in buttonspill" href="javascript:void(0)"
                                    :class="`btn btn-pills ${button.class}`" :key="index" class="me-1 mb-2">{{
                                        button.text }}</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Buttons Soft</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn
                    btn-soft-primary"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in buttonsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-soft-${item.class} m-1`">{{ item.text }}</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Buttons Pill Soft</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-pills
                    btn-soft-primary"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in buttonsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-pills btn-soft-${item.class} m-1`">{{ item.text }}</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Buttons Outline</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn
                    btn-outline-primary"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in buttonsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-outline-${item.class} m-1`">{{ item.text }}</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Buttons Pill Outline</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn
                    btn-outline-primary"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in buttonsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-pills btn-outline-${item.class} m-1`">{{ item.text }}</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Button Icons</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-icon
                    btn-primary"&gt;&lt;i data-feather="facebook" class="fea icon-sm"&gt;&lt;/i&gt;&lt;/a&gt;</code>
                                </h6>

                                <a v-for="(icon, index) in icons" :key="index" href="javascript:void(0)"
                                    :class="`btn btn-icon ${icon.color} m-1`">
                                    <i :data-feather="icon.name" class="icons"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Soft Button Icons</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-icon
                    btn-soft-primary"&gt;&lt;i data-feather="facebook" class="fea
                    icon-sm"&gt;&lt;/i&gt;&lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in iconsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-icon btn-soft-${item.color} m-1`"><i :data-feather="item.name"
                                        class="icons"></i></a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Outline Button Icons</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-icon
                    btn-outline-primary"&gt;&lt;i data-feather="facebook" class="fea
                    icon-sm"&gt;&lt;/i&gt;&lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in iconsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-icon btn-outline-${item.color} m-1`"><i :data-feather="item.name"
                                        class="icons"></i></a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Button Pill Icons</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-icon
                    btn-pills
                    btn-primary"&gt;&lt;i data-feather="facebook" class="fea icon-sm"&gt;&lt;/i&gt;&lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in iconsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-icon btn-pills btn-${item.color} m-1`"><i :data-feather="item.name"
                                        class="icons"></i></a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Soft Button Icons Pill</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-icon
                    btn-pills
                    btn-soft-primary"&gt;&lt;i data-feather="facebook" class="fea
                    icon-sm"&gt;&lt;/i&gt;&lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in iconsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-icon btn-pills btn-soft-${item.color} m-1`"><i
                                        :data-feather="item.name" class="icons"></i></a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Outline Button Pill Icons</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-icon
                    btn-pills
                    btn-outline-primary"&gt;&lt;i data-feather="facebook" class="fea
                    icon-sm"&gt;&lt;/i&gt;&lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in iconsoft" :key="item" href="javascript:void(0)"
                                    :class="`btn btn-icon btn-pills btn-outline-${item.color} m-1`"><i
                                        :data-feather="item.name" class="icons"></i></a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Button Sizing</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn btn-primary
                    btn-sm"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <template v-for="item in small" :key="item">
                                    <a v-if="item.small === false" href="javascript:void(0)"
                                        :class="`btn btn-sm ${item.class} m-1`">Small</a>
                                </template>

                                <template v-for="item in small" :key="item">
                                    <a v-if="item.small === true" href="javascript:void(0)"
                                        :class="`btn btn-sm m-1 ${item.class}`"><i :data-feather="item.icon"
                                            class="icons"></i></a>
                                </template>


                                <h6 class="text-muted mb-2 mt-4 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="btn
                    btn-primary
                    btn-lg"&gt; Primary &lt;/a&gt;</code>
                                </h6>

                                <template v-for="item in small" :key="item">
                                    <a v-if="item.small === false" href="javascript:void(0)"
                                        :class="`btn btn-lg ${item.class} m-1`">Large</a>
                                </template>

                                <template v-for="item in small" :key="item">
                                    <a v-if="item.small === true" href="javascript:void(0)"
                                        :class="`btn btn-lg ${item.class} m-1`"><i :data-feather="item.icon"
                                            class="icons"></i></a>
                                </template>

                            </div>
                        </div>
                    </div><!--end col-->

                    <dropdowns />

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Badges </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;span class="badge bg-primary"&gt;
                    primary
                    &lt;/span&gt;</code>
                                </h6>

                                <span v-for="item in buttonsoft" :key="item" :class="`badge bg-${item.class} m-1`">{{
                                    item.text }}</span>

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Soft Badges </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;span class="badge
                    bg-soft-primary"&gt;
                    primary &lt;/span&gt;</code>
                                </h6>

                                <span v-for="item in buttonsoft" :key="item"
                                    :class="`badge bg-soft-${item.class} m-1`">{{ item.text
                                    }}</span>

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Pill Badges </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;span class="badge rounded-pill
                    bg-primary"&gt; primary &lt;/span&gt;</code>
                                </h6>

                                <span v-for="item in buttonsoft" :key="item"
                                    :class="`badge rounded-pill bg-${item.class} m-1`">{{ item.text
                                    }}</span>

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Soft Pill Badges </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;span class="badge rounded-pill
                    bg-soft-primary"&gt; primary &lt;/span&gt;</code>
                                </h6>

                                <span v-for="item in buttonsoft" :key="item"
                                    :class="`badge rounded-pill bg-soft-${item.class} m-1`">{{
                                        item.text }}</span>

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Link Badges </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-2 pb-2">Ex. <code class="text-danger">&lt;a href="#" class="badge
                    bg-primary"&gt;
                    primary &lt;/a&gt;</code>
                                </h6>

                                <a v-for="item in buttonsoft" :key="item" href="javascript:void(0)"
                                    :class="`badge bg-${item.class} m-1`">{{
                                        item.text }}</a>

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Breadcrumb </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <br>
                                    <code class="text-danger">
                    &lt;nav aria-label="breadcrumb" class="d-inline-block"&gt;
                    <br> &nbsp; &lt;ul class="breadcrumb bg-white rounded shadow mb-0"&gt;
                    <br> &nbsp; &nbsp; &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                    <br> &nbsp; &nbsp; &lt;li class="breadcrumb-item"&gt;&lt;a
                    href="#"&gt;Pages&lt;/a&gt;&lt;/lt&gt;
                    <br> &nbsp; &nbsp; &lt;li class="breadcrumb-item active"
                    aria-current="page"&gt;Components&lt;/li&gt;
                    <br> &nbsp; &lt;/ul&gt;
                    <br> &lt;/div&gt;</code>
                                </h6>

                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item"><NuxtLink to="/">Landflow</NuxtLink></li>
                                        <li class="breadcrumb-item"><a href="#">Docs</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Components</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Pagination </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <br>
                                    <code class="text-danger">
                    &lt;ul class="pagination mb-0"&gt;<br>&nbsp;&nbsp;
                    &lt;li class="page-item"&gt;&lt;a class="page-link" href="javascript:void(0)"
                    aria-label="Previous"&gt;Prev&lt;/a&gt;&lt;/li&gt;<br>&nbsp;&nbsp;
                    &lt;li class="page-item active"&gt;&lt;a class="page-link"
                    href="#"&gt;1&lt;/a&gt;&lt;/li&gt;<br>&nbsp;&nbsp;
                    &lt;li class="page-item"&gt;&lt;a class="page-link"
                    href="#"&gt;2&lt;/a&gt;&lt;/li&gt;<br>&nbsp;&nbsp;
                    &lt;li class="page-item"&gt;&lt;a class="page-link"
                    href="#"&gt;3&lt;/a&gt;&lt;/li&gt;<br>&nbsp;&nbsp;
                    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"
                    aria-label="Next"&gt;Next&lt;/a&gt;&lt;/li&gt;<br>
                    &lt;/ul&gt;<br>
                </code>
                                </h6>

                                <ul class="pagination mb-0">
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)"
                                            aria-label="Previous">Prev</a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)"
                                            aria-label="Next">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end col-->

            <div class="col-lg-6">
                <div class="row">
                    <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Alert </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;div class="alert alert-primary"
                            role="alert"&gt; A simple primary alert—check it out! &lt;/div&gt;</code>
                                </h6>

                                <div v-for="item in buttonsoft" :key="item" :class="`alert alert-${item.class}`"
                                    role="alert"> A
                                    simple {{ item.class }} alert—check it out!
                                </div>

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Alert Links </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;div class="alert alert-primary"
                            role="alert"&gt; A simple primary alert with &lt;a href="#"
                            class="alert-link"&gt;&lt;/a&gt;. &lt;/div&gt;</code>
                                </h6>

                                <div v-for="item in buttonsoft" :key="item" :class="`alert alert-${item.class}`"
                                    role="alert">A
                                    simple {{ item.class }} alert with <a href="javascript:void(0)"
                                        class="alert-link">an link</a>.
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Additional Content </h5>
                            </div>

                            <div class="p-4">
                                <div class="alert alert-success mb-0" role="alert">
                                    <h4 class="alert-heading">Well done!</h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example
                                        text
                                        is going to run a bit longer so that you can see how spacing within an alert
                                        works with this kind of content.</p>
                                    <p class="mb-0 border-top pt-3">Whenever you need to, be sure to use margin
                                        utilities to keep things nice and tidy.</p>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Dismissing Alert </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <br>
                                    <code class="text-danger">
                            &lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;
                            &lt;strong&gt;Holy guacamole!&lt;/strong&gt; You should check in on some of those fields
                            below.
                            &lt;button type="button" class="btn-close" data-bs-dismiss="alert"
                            aria-label="Close"&gt;&lt;/button&gt;
                            &lt;/div&gt;
                        </code>
                                </h6>

                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields
                                    below.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Advanced Alert </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <br>
                                    <code class="text-danger">&lt;div class="alert alert-primary alert-pills" role="alert"&gt;
                            <br>&nbsp;&nbsp;
                            &lt;span class="badge rounded-pill bg-danger"&gt; New &lt;/span&gt; <br>&nbsp;&nbsp;
                            &lt;span class="alert-content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br>
                            &lt;/div&gt;
                        </code>
                                </h6>

                                <div class="d-block">
                                    <div class="alert alert-primary alert-pills" role="alert">
                                        <span class="badge rounded-pill bg-info me-1">New</span>
                                        <span class="content"> A Modern primary alert—check it out! <i
                                                class="mdi mdi-chevron-right"></i></span>
                                    </div>
                                </div>

                                <div class="d-block">
                                    <div class="alert alert-danger alert-pills mb-0" role="alert">
                                        <span class="badge rounded-pill bg-success me-1"> New </span>
                                        <span class="content"> A Modern danger alert—check it out! <i
                                                class="mdi mdi-chevron-right"></i> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Advanced Outline Alert </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <br>
                                    <code class="text-danger">
                            &lt;div class="alert alert-outline-primary alert-pills" role="alert"&gt; <br>&nbsp;&nbsp;
                            &lt;span class="badge rounded-pill bg-danger"&gt; New &lt;/span&gt; <br>&nbsp;&nbsp;
                            &lt;span class="alert-content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br>
                            &lt;/div&gt;
                        </code>
                                </h6>

                                <div class="d-block">
                                    <div class="alert alert-outline-primary alert-pills" role="alert">
                                        <span class="badge rounded-pill bg-primary me-1">New</span>
                                        <span class="content"> A Modern primary alert—check it out! <i
                                                class="mdi mdi-chevron-right"></i></span>
                                    </div>
                                </div>

                                <div class="d-block">
                                    <div class="alert alert-outline-danger alert-pills mb-0" role="alert">
                                        <span class="badge rounded-pill bg-danger me-1"> New </span>
                                        <span class="content"> A Modern danger alert—check it out! <i
                                                class="mdi mdi-chevron-right"></i> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Accordions</h5>
                            </div>

                            <div class="p-4">
                                <div class="accordion" id="accordionExample">
                                    <div v-for="(item, index) in accordions" :key="index"
                                        :class="{ 'accordion-item rounded': true, 'mt-2': index > 0 }">
                                        <h2 class="accordion-header" :id="item.id">
                                            <button class="accordion-button border-0 bg-light text-primary"
                                                :class="{ 'collapsed': !item.show }" type="button"
                                                data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                                                :aria-expanded="item.show ? 'true' : 'false'"
                                                :aria-controls="item.collapseId">
                                                {{ item.question }}
                                            </button>
                                        </h2>
                                        <div :id="item.collapseId" :class="{ 'show': item.show }"
                                            class="accordion-collapse border-0 collapse" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body text-muted">
                                                {{ item.answer }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Forms </h5>
                            </div>

                            <div class="p-4">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label">Your Name <span
                                                        class="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" class="form-control"
                                                    placeholder="First Name :">
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-6">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label">Your Email <span
                                                        class="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" class="form-control"
                                                    placeholder="Your email :">
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label">Subject</label>
                                                <input name="subject" id="subject" class="form-control"
                                                    placeholder="Your subject :">
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-md-12">
                                            <div class="mb-3 position-relative">
                                                <label class="form-label">Comments</label>
                                                <textarea name="comments" id="comments" rows="4" class="form-control"
                                                    placeholder="Your Message :"></textarea>
                                            </div>
                                        </div>
                                    </div><!--end row-->
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <input type="submit" id="submit" name="send" class="btn btn-primary"
                                                value="Send Message">
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </form><!--end form-->
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Checkboxes </h5>
                            </div>

                            <div class="p-4">
                                <div class="form-check form-check-inline">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" checked value=""
                                                id="flexCheckDefault1">
                                            <label class="form-check-label" for="flexCheckDefault1">One</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-check form-check-inline">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault2">
                                            <label class="form-check-label" for="flexCheckDefault2">Two</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-check form-check-inline">
                                    <div class="mb-0">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" disabled value=""
                                                id="flexCheckDefault3">
                                            <label class="form-check-label" for="flexCheckDefault3">Disabled</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Radio Buttons </h5>
                            </div>

                            <div class="p-4">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">Yes</label>
                                    </div>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2">
                                        <label class="form-check-label" for="flexRadioDefault2">No</label>
                                    </div>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input" checked type="radio" disabled
                                            name="flexRadioDefault" id="flexRadioDefault3">
                                        <label class="form-check-label" for="flexRadioDefault3">Disabled</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Switches Button </h5>
                            </div>

                            <div class="p-4">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch
                                        checkbox
                                        input</label>
                                </div>

                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
                                        checkbox
                                        input</label>
                                </div>

                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled"
                                        disabled>
                                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch
                                        checkbox input</label>
                                </div>

                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled"
                                        checked disabled>
                                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
                                        checked switch checkbox input</label>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Form Select Box </h5>
                            </div>

                            <div class="p-4">
                                <div class="mb-0">
                                    <select class="form-control form-select">
                                        <option selected="">Location</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">&Aring;land Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Subscribe Form </h5>
                            </div>

                            <div class="p-4">
                                <div class="subcribe-form mt-4">
                                    <form>
                                        <div class="mb-3">
                                            <input type="email" id="email" name="email" class="border bg-white rounded"
                                                required placeholder="Email Address">
                                            <button type="submit" class="btn btn-primary">Get Started</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Google Map </h5>
                            </div>

                            <div class="p-4">
                                <div class="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        style="border:0" class="rounded" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Default Avatars </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;img src="images/home/01.jpg"
                            class="img-fluid avatar avatar-ex-sm rounded"&gt;</code>
                                </h6>

                                <img v-for="item in images" :key="item" :src="item.image"
                                    :class="`img-fluid avatar ${item.class} me-3 rounded`" alt="">

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Circle Avatars </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;img src="images/home/01.jpg"
                            class="img-fluid avatar avatar-ex-sm rounded-circle"&gt;</code>
                                </h6>

                                <img v-for="item in images" :key="item" :src="item.image"
                                    :class="`img-fluid avatar ${item.class} me-2 rounded-circle`" alt="">

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Nav Tabs </h5>
                            </div>

                            <div class="p-4">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <ul class="nav nav-pills nav-justified flex-column flex-sm-row rounded"
                                            id="pills-tab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link rounded active" id="pills-cloud-tab"
                                                    data-bs-toggle="pill" href="#pills-cloud" role="tab"
                                                    aria-controls="pills-cloud" aria-selected="false">
                                                    <div class="text-center pt-1 pb-1">
                                                        <h4 class="title fw-normal mb-0">Home</h4>
                                                    </div>
                                                </a><!--end nav link-->
                                            </li><!--end nav item-->

                                            <li class="nav-item">
                                                <a class="nav-link rounded" id="pills-smart-tab" data-bs-toggle="pill"
                                                    href="#pills-smart" role="tab" aria-controls="pills-smart"
                                                    aria-selected="false">
                                                    <div class="text-center pt-1 pb-1">
                                                        <h4 class="title fw-normal mb-0">About</h4>
                                                    </div>
                                                </a><!--end nav link-->
                                            </li><!--end nav item-->

                                            <li class="nav-item">
                                                <a class="nav-link rounded" id="pills-apps-tab" data-bs-toggle="pill"
                                                    href="#pills-apps" role="tab" aria-controls="pills-apps"
                                                    aria-selected="false">
                                                    <div class="text-center pt-1 pb-1">
                                                        <h4 class="title fw-normal mb-0">Service</h4>
                                                    </div>
                                                </a><!--end nav link-->
                                            </li><!--end nav item-->
                                        </ul><!--end nav pills-->
                                    </div><!--end col-->
                                </div><!--end row-->

                                <div class="row pt-2">
                                    <div class="col-12">
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-cloud" role="tabpanel"
                                                aria-labelledby="pills-cloud-tab">
                                                <p class="text-muted mb-0">You can combine all the Landflow
                                                    templates
                                                    into a single one, you can take a component from the Application
                                                    theme and use it in the Website.</p>
                                            </div><!--end teb pane-->

                                            <div class="tab-pane fade" id="pills-smart" role="tabpanel"
                                                aria-labelledby="pills-smart-tab">
                                                <p class="text-muted mb-0">You can combine all the Landflow
                                                    templates
                                                    into a single one, you can take a component from the Application
                                                    theme and use it in the Website.</p>
                                            </div><!--end teb pane-->

                                            <div class="tab-pane fade" id="pills-apps" role="tabpanel"
                                                aria-labelledby="pills-apps-tab">
                                                <p class="text-muted mb-0">You can combine all the Landflow
                                                    templates
                                                    into a single one, you can take a component from the Application
                                                    theme and use it in the Website.</p>
                                            </div><!--end teb pane-->
                                        </div><!--end tab content-->
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Progressbar </h5>
                            </div>

                            <div class="p-4">
                                <h6 class="text-muted mb-4 pb-2">Ex. <br>
                                    <code class="text-danger">
                            &lt;div class="progress-box"&gt;<br>&nbsp;&nbsp;
                            &lt;h6 class="title text-muted"&gt; Progress&lt;/h6&gt;<br>&nbsp;&nbsp;
                            &lt;div class="progress"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                            &lt;div class="progress-bar position-relative bg-primary"
                            style="width:84%;"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &lt;div class="progress-value d-block text-muted
                            h6"&gt;84%&lt;/div&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                            &lt;/div&gt;<br>&nbsp;&nbsp;
                            &lt;/div&gt;<br>
                            &lt;/div&gt;
                        </code>
                                </h6>

                                <div v-for="(item, index) in progress" :key="index"
                                    :class="{ 'progress-box': true, 'mt-4': index > 0 }">
                                    <h6 class="title text-muted">{{ item.name }}</h6>
                                    <div class="progress">
                                        <div class="progress-bar position-relative bg-primary"
                                            :style="{ width: item.width }">
                                            <div class="progress-value d-block text-muted h6">{{ item.width }}</div>
                                        </div>
                                    </div>
                                </div><!--end process box-->

                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Modal </h5>
                            </div>

                            <div class="p-4">
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary"> Click Here</a>
                            </div>

                            <!-- Modal Content Start -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn btn-icon btn-close" data-bs-dismiss="modal"
                                                id="close-modal"><i class="uil uil-times fs-4 text-dark"></i></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal Content End -->
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Table </h5>
                            </div>

                            <div class="p-4">
                                <div class="table-responsive bg-white shadow rounded">
                                    <table class="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="border-bottom">#</th>
                                                <th scope="col" class="border-bottom">First</th>
                                                <th scope="col" class="border-bottom">Last</th>
                                                <th scope="col" class="border-bottom">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Harry</td>
                                                <td>Potter</td>
                                                <td>@hpt</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-12 mt-4 pt-2">
                        <div class="card component-wrapper border-0 rounded shadow">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0"> Icons </h5>
                            </div>

                            <div class="p-4">
                                <h6>Feather Icons</h6>
                                <p class="text-muted">There are 280+ feather icons and you can get all icons info from
                                    here: <a href="https://feathericons.com/" target="_blank"><code
                                            class="text-primary">https://feathericons.com/</code></a></p>
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;i data-feather="mail" class="fea
                            icon-sm"&gt; &lt;/i&gt;</code></h6>

                                <i v-for="(icon, index) in featherIcons" :key="index" :data-feather="icon"
                                    class="fea icon-ex-md me-2"></i>

                                <h6 class="mt-4">Material Design Icons</h6>
                                <p class="text-muted">There are 4400+ Material Design icons and you can get all icons
                                    info from
                                    here: <a href="https://materialdesignicons.com/" target="_blank"><code
                                            class="text-primary">https://materialdesignicons.com/</code></a></p>
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger">&lt;i class="mdi mdi-home"&gt;
                            &lt;/i&gt;</code></h6>

                                <i v-for="(icon, index) in materialDesignIcons" :key="index" :class="`mdi mdi-${icon}`"
                                    class="h4 me-2"></i>

                                <h6 class="mt-4">Iconscout (Unicons) Icons</h6>
                                <p class="text-muted">There are 1100+ Iconscout (Unicons) Icons and you can get all
                                    icons info from
                                    here: <a href="https://iconscout.com/unicons" target="_blank"><code
                                            class="text-primary">https://www.flaticon.com/packs/basic-icon</code></a>
                                </p>
                                <h6 class="text-muted mb-4 pb-2">Ex. <code class="text-danger"><br>&lt;span class="h3 text-primary
                            me-2"&gt;<br>&nbsp; &lt;i class="uil uil-0-plus"&gt;&lt;/i&gt;<br>&lt;/span&gt;</code></h6>

                                <span v-for="(icon, index) in iconscoutIcons" :key="index"
                                    class="h3 text-primary me-2"><i :class="`uil uil-${icon}`"></i></span>
                            </div>
                        </div>
                    </div>
                </div><!--end row-->
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
    
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import feather from 'feather-icons';
import image from '../assets/images/client/05.jpg';
import dropdowns from '@/components/dropdown-menu.vue';


const headings = ref(['H1 Bootstrap Heading', 'H2 Bootstrap Heading', 'H3 Bootstrap Heading', 'H4 Bootstrap Heading', 'H5 Bootstrap Heading', 'H6 Bootstrap Heading']);

const displays = ref(['Display 1', 'Display 2', 'Display 3', 'Display 4']);

const colors = ref([
    { title: '.bg-primary', class: 'bg-primary' },
    { title: '.bg-secondary', class: 'bg-secondary' },
    { title: '.bg-success', class: 'bg-success' },
    { title: '.bg-danger', class: 'bg-danger' },
    { title: '.bg-warning', class: 'bg-warning' },
    { title: '.bg-info', class: 'bg-info' },
    { title: '.bg-light', class: 'bg-light' },
    { title: '.bg-white', class: 'bg-white border' },
    { title: '.bg-dark', class: 'bg-dark' },
    { title: '.bg-muted', class: 'bg-muted' }]);

const softcolors = ref(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'white border', 'dark', 'muted'])

const textColors = ref([
    { class: 'text-primary', text: '.text-primary' },
    { class: 'text-secondary', text: '.text-secondary' },
    { class: 'text-success', text: '.text-success' },
    { class: 'text-danger', text: '.text-danger' },
    { class: 'text-blue', text: '.text-blue' },
    { class: 'text-warning', text: '.text-warning' },
    { class: 'text-info', text: '.text-info' },
    { class: 'text-light bg-dark', text: '.text-light' },
    { class: 'text-white bg-dark', text: '.text-white' },
    { class: 'text-white-50 bg-dark', text: '.text-white-50' },
    { class: 'text-dark', text: '.text-dark' },
]);

const buttons = ref([
    { text: 'Primary', class: 'btn-primary' },
    { text: 'Secondary', class: 'btn-secondary' },
    { text: 'Success', class: 'btn-success' },
    { text: 'Warning', class: 'btn-warning' },
    { text: 'Info', class: 'btn-info' },
    { text: 'Danger', class: 'btn-danger' },
    { text: 'Light', class: 'btn-light' },
    { text: 'Dark', class: 'btn-dark' },
]);

const buttonspill = ref([
    { text: 'Primary', class: 'btn-primary' },
    { text: 'Secondary', class: 'btn-secondary' },
    { text: 'Success', class: 'btn-success' },
    { text: 'Warning', class: 'btn-warning' },
    { text: 'Info', class: 'btn-info' },
    { text: 'Danger', class: 'btn-danger' },
    { text: 'Light', class: 'btn-light' },
    { text: 'Dark', class: 'btn-dark' }
]);

const buttonsoft = ref([
    { text: 'Primary', class: 'primary' },
    { text: 'Secondary', class: 'secondary' },
    { text: 'Success', class: 'success' },
    { text: 'Warning', class: 'warning' },
    { text: 'Info', class: 'info' },
    { text: 'Danger', class: 'danger' },
    { text: 'Light', class: 'light' },
    { text: 'Dark', class: 'dark' }
]);

const icons = ref([
    { name: 'facebook', color: 'btn-primary' },
    { name: 'twitter', color: 'btn-info' },
    { name: 'youtube', color: 'btn-danger' },
    { name: 'gitlab', color: 'btn-success' },
    { name: 'linkedin', color: 'btn-secondary' },
    { name: 'github', color: 'btn-warning' },
    { name: 'star', color: 'btn-info' }
]);

const iconsoft = ref([
    { name: 'facebook', color: 'primary' },
    { name: 'twitter', color: 'info' },
    { name: 'youtube', color: 'danger' },
    { name: 'gitlab', color: 'success' },
    { name: 'linkedin', color: 'secondary' },
    { name: 'github', color: 'warning' },
    { name: 'star', color: 'info' }
]);

const small = ref([
    { class: 'btn-primary', small: false },
    { class: 'btn-pills btn-primary', small: false },
    { class: 'btn-outline-primary', small: false },
    { class: 'btn-pills btn-outline-primary', small: false },
    { class: 'btn-icon btn-primary m-1', icon: 'facebook', small: true },
    { class: 'btn-icon btn-pills btn-primary', icon: 'facebook', small: true },
    { class: 'btn-icon btn-outline-primary', icon: 'facebook', small: true },
    { class: 'btn-icon btn-pills btn-outline-primary', icon: 'facebook', small: true },
])


const accordions = ref([
    {
        id: "headingOne",
        collapseId: "collapseOne",
        question: "How does it work ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: true
    },
    {
        id: "headingTwo",
        collapseId: "collapseTwo",
        question: "Do I need a designer to use Landflow ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingThree",
        collapseId: "collapseThree",
        question: "What do I need to do to start selling ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingFour",
        collapseId: "collapseFour",
        question: "What happens when I receive an order ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    }
])

const images = ref([
    { image: image, class: 'avatar-ex-sm' },
    { image: image, class: 'avatar-md-sm' },
    { image: image, class: 'avatar-small' },
    { image: image, class: 'avatar-medium' },
    { image: image, class: 'avatar-large mt-3 mt-sm-0' },
])

const progress = ref([
    { name: 'WordPress', width: '84%' },
    { name: 'PHP / MYSQL', width: '75%' },
    { name: 'Angular / JavaScript', width: '79%' },
    { name: 'HTML', width: '95%' },
])

const featherIcons = ref(['user', 'facebook', 'map-pin', 'linkedin', 'camera', 'mail']);

const materialDesignIcons = ref(['home', 'facebook', 'chevron-right', 'camera-image', 'car-light-high', 'silverware-fork-knife']);

const iconscoutIcons = ref(['0-plus', 'android', 'bitcoin', 'calendar-alt', 'chart-pie-alt'])

onMounted(() => {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
    feather.replace()
});

</script>

<style lang="scss" scoped></style>