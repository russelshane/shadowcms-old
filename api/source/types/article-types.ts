/*
  Types for Article Model
  ShadowCMS
*/

export type Headline = {
  text?: string;
  type?: string;
};

export type Header = {
  headline?: Headline;
};
