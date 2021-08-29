/**
 * @description Editor Metadata Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorMetadataWrapper = styled.div({
  margin: "0px auto 0 auto",
  width: "100%",
  maxWidth: "850px",
  minHeight: "100vh",
  display: "none",

  "&.show": {
    display: "block",
  },
});

export const MetadataContainer = styled.div({
  margin: "5px 0 30px 0",
  width: "100%",
  minHeight: 100,
  padding: 20,
  background: "#fff",
  border: `1px solid ${COLORS.borders}`,
  display: "flex",
  flexDirection: "column",
  gridGap: 20,
});
