/**
 * @description Styles for Incoming Item
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const IncomingHeadline = styled.h2({
  fontSize: "21px",
  letterSpacing: "0.25px",
  fontFamily: "Gambetta, Georgia, sans-serif",
  fontStyle: "italic",
  color: COLORS.default,
  cursor: "default",
});

export const IncomingImage = styled.img({
  padding: "20px",
  width: "260px",
  height: "200px",
  objectFit: "cover",
  display: "block",
  margin: "auto",
});

export const IncomingSummary = styled.p({
  fontSize: "0.865rem",
  lineHeight: "1.375rem",
  fontFamily: "Poppins, Domine, Georgia, sans-serif",
  color: COLORS.muted,
  cursor: "default",
});

export const IncomingContainer = styled.div({
  margin: 0,
  padding: "0px 30px",
  justifyContent: "space-between",
  display: "flex",
  gridGap: "10px",
  borderBottom: `1px solid ${COLORS.borders}`,

  "&:last-child": {
    borderBottom: "0px",
  },

  "&:hover": {
    h2: {
      color: COLORS.primary,
      opacity: 0.85,
    },

    p: {
      opacity: 0.85,
    },
  },
});
