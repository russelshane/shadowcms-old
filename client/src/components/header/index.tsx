/**
 * @description Main Header Component
 * @author ShadowCMS
 */

import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import { HeaderProps } from "./types";
import { HeaderWrapper, UserAvatar, UserEmail } from "./styles";
import { Button, CloudUploadIcon, Pane } from "evergreen-ui";

const Header: React.FC<HeaderProps> = ({ isEditor, user, articleState, saveArticle }) => {
  /* Interactive State */
  const [publishDisabled, setPublishDisabled] = useState<boolean>();
  const isSaving = articleState?.interactiveState.saving;

  /* Dynamic Components */
  const Logo = loadable(() => import("../../ui/logo"));
  const Navigation = loadable(() => import("../../components/navigation"));

  useEffect(() => {
    setPublishDisabled(true);
  }, []);

  return (
    <HeaderWrapper>
      <Pane display="flex" gridGap="10px" alignItems="center">
        <Logo />
        <Navigation flexDirection="row" />
      </Pane>
      <Pane display="flex" gridGap="20px" alignItems="center">
        {isEditor && (
          <Pane display="flex" gridGap="10px" alignItems="center">
            <Button appearance="minimal" disabled={publishDisabled} iconBefore={CloudUploadIcon}>
              Publish
            </Button>
            <Button
              appearance="primary"
              onClick={saveArticle}
              isLoading={(isSaving as any) === undefined ? null : (isSaving as any)}
            >
              {isSaving ? "Saving" : "Save"}
            </Button>
          </Pane>
        )}

        <Pane display="flex" gridGap="8px" alignItems="center">
          <UserAvatar style={{ backgroundImage: `url(${user?.avatar})` }} />
          <UserEmail>{user?.byline}</UserEmail>
        </Pane>
      </Pane>
    </HeaderWrapper>
  );
};

export default Header;
