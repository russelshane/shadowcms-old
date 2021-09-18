/**
 * @description Editor Top Component
 * @author ShadowCMS
 */

import { Pane, Heading, Text, Switch } from "evergreen-ui";
import React from "react";
import COLORS from "../../../../styles/global-colors";

type OptionsProps = {
  spellCheck: boolean;
  showLabel: boolean;
  allowEmbeds: boolean;
  setSpellCheck: any;
  setAllowEmbeds: any;
  setShowLabel: any;
};

const ShadowComposeOptions: React.FC<OptionsProps> = ({
  spellCheck,
  showLabel,
  allowEmbeds,
  setShowLabel,
  setAllowEmbeds,
  setSpellCheck,
}) => {
  return (
    <Pane
      display="flex"
      justifyContent="space-between"
      padding="10px"
      borderBottom={`1px solid ${COLORS.borders}`}
    >
      <Pane display="flex" gridGap={8} alignItems="center">
        <Heading size={200} cursor="default">
          TEMPLATE
        </Heading>
        <Text cursor="pointer" fontSize={12} color="blue500">
          Basic
        </Text>
      </Pane>
      <Pane display="flex" gridGap={10} alignItems="center">
        <Pane display="flex" gridGap={8} alignItems="center">
          <Text fontSize={12} marginTop="-2px" cursor="default">
            Spell Check
          </Text>
          <Switch checked={spellCheck} onChange={() => setSpellCheck(!spellCheck)} />
        </Pane>
        <Pane display="flex" gridGap={8} alignItems="center">
          <Text fontSize={12} marginTop="-2px" cursor="default">
            Labels
          </Text>
          <Switch checked={showLabel} onChange={() => setShowLabel(!showLabel)} />
        </Pane>
        <Pane display="flex" gridGap={8} alignItems="center">
          <Text fontSize={12} marginTop="-2px" cursor="default">
            Embeds
          </Text>
          <Switch checked={allowEmbeds} onChange={() => setAllowEmbeds(!allowEmbeds)} />
        </Pane>
      </Pane>
    </Pane>
  );
};

export default ShadowComposeOptions;
