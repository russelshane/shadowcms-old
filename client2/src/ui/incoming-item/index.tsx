/**
 * @description Incoming Item UI Component
 * @author ShadowCMS
 */

import { EyeIcon, PencilIcon, PrinterIcon, ShareIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import COLORS from "../../styles/global-colors";
import Button from "../button";
import Container from "../container";
import Label from "../label";
import Pill from "../pill";
import StatusIndicator from "../status-indicator";
import { IncomingContainer, IncomingHeadline, IncomingImage, IncomingSummary } from "./style";
import { IncomingProps } from "./types";

const IncomingItem: React.FC<IncomingProps> = ({
  publish_url,
  slug,
  headline,
  summary,
  status,
  section_name,
  thumb,
  timestamp,
  byline,
}) => {
  return (
    <IncomingContainer>
      <Container
        padding="25px 0px"
        flexDirection="column"
        gridGap="10px"
        width="660px"
        alignSelf="flex-start"
      >
        <Container gridGap="10px">
          <Pill label={status} type="primary" />
          <StatusIndicator type="primary" label={publish_url} />
        </Container>
        <IncomingHeadline>{headline}</IncomingHeadline>
        <IncomingSummary>{summary}</IncomingSummary>
        <IncomingSummary style={{ textTransform: "uppercase", fontSize: 13 }}>
          {section_name} &nbsp; | &nbsp; by {byline}
        </IncomingSummary>
      </Container>
      <Container>
        <IncomingImage src={thumb} loading="lazy" />
      </Container>
      <Container padding="20px 0" flexDirection="column" gridGap="10px" alignSelf="flex-start">
        <Label>ACTIONS</Label>
        <Container gridGap="10px" display="grid">
          <Link to={`/doc/${slug}/web/editing`}>
            <Button size="xs" icon={<PencilIcon />}>
              Edit
            </Button>
          </Link>
          <Link to={`/doc/${slug}/print/editing`}>
            <Button size="xs" icon={<PrinterIcon />}>
              Print
            </Button>
          </Link>
          <Link to={`/doc/${slug}/preview`}>
            <Button size="xs" icon={<EyeIcon />}>
              View
            </Button>
          </Link>
          <Button size="xs" icon={<ShareIcon />}>
            Share
          </Button>
        </Container>
        <Label margin="0 0 15px 0" color={COLORS.primary}>
          ID : &nbsp;
          {slug}
        </Label>
        <Label color={COLORS.foreground}>{dayjs(timestamp).format("dddd, MMM D")}</Label>
      </Container>
    </IncomingContainer>
  );
};

export default IncomingItem;
