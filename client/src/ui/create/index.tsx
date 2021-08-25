/**
 * @description Create Button UI Component
 * @author ShadowCMS
 */

import React from "react";
import { EditIcon, Position, toaster, Tooltip } from "evergreen-ui";
import { CreateButtonWrapper } from "./styles";
import dayjs from "dayjs";
import { customAlphabet } from "nanoid";
import { useHistory } from "react-router-dom";
import { firestore } from "../../services/firebase";

const CreateButton: React.FC = () => {
  const history = useHistory();

  const nanoid = customAlphabet("0987654321", 12);
  const newId = nanoid();

  const newDoc = async () => {
    toaster.notify("Initializing...", { duration: 2 });

    await firestore
      .collection("articles")
      .doc(`shadow_${newId}`)
      .set({
        slug: `shadow_${newId}`,
        lastUpdated: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
        doc: {
          metadata: {
            is_live: false,
            is_breaking: false,
            is_exclusive: false,
          },
        },
      });

    history.push(`/doc/shadow_${newId}/new/editing`);
  };

  return (
    <Tooltip content="Create new article" position={Position.TOP_RIGHT}>
      <CreateButtonWrapper onClick={newDoc}>
        <EditIcon size={22} />
      </CreateButtonWrapper>
    </Tooltip>
  );
};

export default CreateButton;
