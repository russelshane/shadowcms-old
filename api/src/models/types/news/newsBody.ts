/**
 * @description News Article Body/Contents TS Type
 * @author ShadowCMS
 */

type BlockData = {
  text?: string;
  url?: string;
  html?: string;
  caption?: string;
  captions?: string;
  level?: number;
  link?: string;
  name?: string;
};

type Blocks = {
  id?: string;
  type?: string;
  data?: BlockData;
};

export type NewsBody = {
  blocks?: Blocks[];
  version?: string;
  time?: string;
};
