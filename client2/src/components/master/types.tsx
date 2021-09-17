/**
 * @description Types for Master Component
 * @author ShadowCMS
 */

import { ReactNode } from "react";

export type MasterProps = {
  isEditor?: boolean;
  children?: ReactNode;
  label?: string;
};
