import { createRouter, createWebHashHistory } from "vue-router";

const BaseLayout = () => import("../Layouts/BaseLayout.vue");
const HomeView = () => import("../views/HomeView.vue");

// terms
const Controller = () => import("../views/terms/Controller.vue");
const Extruder = () => import("../views/terms/Extruder.vue");
const Feeder = () => import("../views/terms/Feeder.vue");
const Firmware = () => import("../views/terms/Firmware.vue");
const Frame = () => import("../views/terms/Frame.vue");
const HeatedBed = () => import("../views/terms/HeatedBed.vue");
const Motors = () => import("../views/terms/Motors.vue");
const Sensors = () => import("../views/terms/Sensors.vue");

// calibration
const esteps = () => import("../views/calibration/e-steps.vue");
const flow = () => import("../views/calibration/flow.vue");
const pid = () => import("../views/calibration/pid.vue");
const retract = () => import("../views/calibration/retract.vue");

const routes = [
  {
    path: "/home",
    name: "home",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },

  // terms
  {
    path: "/controller",
    name: "controller",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "controller",
        component: Controller,
      },
    ],
  },
  {
    path: "/extruder",
    name: "extruder",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "extruder",
        component: Extruder,
      },
    ],
  },
  {
    path: "/feeder",
    name: "feeder",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "feeder",
        component: Feeder,
      },
    ],
  },
  {
    path: "/firmware",
    name: "firmware",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "firmware",
        component: Firmware,
      },
    ],
  },
  {
    path: "/frame",
    name: "frame",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "frame",
        component: Frame,
      },
    ],
  },
  {
    path: "/heated-bed",
    name: "heated-bed",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "heated-bed",
        component: HeatedBed,
      },
    ],
  },
  {
    path: "/motors",
    name: "motors",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "motors",
        component: Motors,
      },
    ],
  },
  {
    path: "/sensors",
    name: "sensors",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "sensors",
        component: Sensors,
      },
    ],
  },

  // calibration
  {
    path: "/e-steps",
    name: "e-steps",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "e-steps",
        component: esteps,
      },
    ],
  },

  {
    path: "/flow",
    name: "flow",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "flow",
        component: flow,
      },
    ],
  },
  {
    path: "/pid",
    name: "pid",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "pid",
        component: pid,
      },
    ],
  },
  {
    path: "/retract",
    name: "retract",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "retract",
        component: retract,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "404",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
