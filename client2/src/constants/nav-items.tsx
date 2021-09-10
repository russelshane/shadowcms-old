/**
 * @description Sidebar Navigation Items
 * @author ShadowCMS
 */

import ROUTES from "./system-routes";
import { ViewGridIcon } from "@heroicons/react/solid";
import {
  AnnotationIcon,
  ArchiveIcon,
  CakeIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  DocumentIcon,
  EyeIcon,
  InboxIcon,
  MailIcon,
  OfficeBuildingIcon,
  PhotographIcon,
  SupportIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const navItems = [
  {
    icon: <ViewGridIcon />,
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
  },
  {
    icon: <EyeIcon />,
    label: "Monitoring",
    path: ROUTES.MONITORING,
  },
  {
    icon: <MailIcon />,
    label: "Mail",
    path: ROUTES.PUBLIC_SUBMISSIONS,
  },
  {
    icon: <CalendarIcon />,
    label: "Planner",
    path: ROUTES.PLANNER,
  },
  {
    icon: <ClipboardCheckIcon />,
    label: "Tasks",
    path: ROUTES.TASKS,
  },
  {
    icon: <PhotographIcon />,
    label: "Multimedia",
    path: ROUTES.MEDIA_LIBRARY,
  },
  {
    icon: <InboxIcon />,
    label: "Sections",
    path: ROUTES.SECTIONS_LIB,
  },
  {
    icon: <AnnotationIcon />,
    label: "Topics",
    path: ROUTES.TOPICS_LIB,
  },
  {
    icon: <CakeIcon />,
    label: "Cooking",
    path: ROUTES.COOKING_LIB,
  },
  {
    icon: <ArchiveIcon />,
    label: "Archives",
    path: ROUTES.ARCHIVES_HOME,
  },
  {
    icon: <UsersIcon />,
    label: "Newsroom",
    path: ROUTES.NEWSROOM,
  },
  {
    icon: <SupportIcon />,
    label: "Get Help",
    path: ROUTES.HELP,
  },
  {
    icon: <DocumentIcon />,
    label: "Documentation",
    path: ROUTES.DOCUMENTATION,
  },
  {
    icon: <OfficeBuildingIcon />,
    label: "About Shadow",
    path: ROUTES.SHADOW_HOME,
  },
];

export default navItems;
