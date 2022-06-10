import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateGroupAccountDecisionPolicyRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const UpdateGroupAccountDecisionPolicyRequest = (props: {
  message: MsgUpdateGroupAccountDecisionPolicyRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const address = useProfileRecoil(message.address);
  const addressMoniker = address ? address?.name : message.address;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupAccountDecisionPolicyRequest"
        components={[
          (
            <Name
              address={message.admin}
              name={adminMoniker}
            />
          ),
          (
            <Name
              address={message.address}
              name={addressMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default UpdateGroupAccountDecisionPolicyRequest;