/**
 * @description Routes for CMS
 * @author ShadowCMS
 */

const ROUTES = {
  /* MAIN */
  LANDING: "/",
  MONITORING: "/monitoring",
  DASHBOARD: "/dash",
  DASHBOARD_LEGACY: "/dashboard" /* Redirects to /dash */,
  DASHBOARD_PUBLISHED: "/dash/published",

  /* ARTICLE EDITING */
  ARTICLE_EDITING_WEB: "/doc/:id/web/editing",
  ARTICLE_EDITING_PRINT: "/doc/:id/print/editing",
  ARTICLE_PREVIEW: "/doc/:id/preview",

  /* COLLABORATION */
  PLANNER: "/planner" /* Newsroom-wide Collaborative Planning Tool */,
  TASKS: "/tasks" /* Redirects to /tasks/all */,
  TASKS_HOME: "/tasks/all" /* Newsroom-wide tasks / general tasks */,
  TASKS_BY_USER: "/tasks/:ein" /* 'ein' is the author's newsroom username and id */,

  /* FORM SUBMISSIONS, OP-EDs, MAILBOX */
  PUBLIC_SUBMISSIONS: "/mail",
  PUBLIC_SUBMISSIONS_FEEDBACK: "/mail/feedback",
  PUBLIC_SUBMISSIONS_SPAM: "/mail/spam",
  PUBLIC_SUBMISSIONS_CORRECTIONS: "/mail/submissions/corrections",
  PUBLIC_SUBMISSIONS_ESSAY: "/mail/submissions/op-ed",

  /* MEDIA LIBRARY */
  MEDIA_LIBRARY: "/lib/multimedia",
  MEDIA_LIBRARY_BY_YEAR: "/lib/multimedia/:year",
  MEDIA_LIBRARY_BY_MONTH: "/lib/multimedia/:month/:year/",

  /* ARCHIVES */
  ARCHIVES: "/lib/archives",
  ARCHIVES_BY_YEAR: "/lib/archives/:year",
  ARCHIVES_HOME: "/lib/archives/home",

  /* LIBRARIES */
  LIB_HOME: "/lib",
  SECTIONS_LIB: "/lib/sections",
  TOPICS_LIB: "/lib/topics",
  COOKING_LIB: "/lib/cooking",

  /* NEWSROOM */
  AUTHOR_PROFILE: "/newsroom/by/:ein",
  NEWSROOM: "/newsroom" /* Redirects to /newsroom/home */,
  NEWSROOM_HOME: "/newsroom/home",

  /* MISC */
  SHADOW_HOME: "/shadow",
  DOCUMENTATION: "/shadow/docs",
  FAQ: "/shadow/faq",
  HELP: "/shadow/help",
  LOGOUT: "/eject",
};

export default ROUTES;
