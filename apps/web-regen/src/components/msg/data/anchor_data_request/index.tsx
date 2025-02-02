import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgAnchorDataRequest from '@/models/msg/data/msg_anchor_data_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const AnchorDataRequest: FC<{ message: MsgAnchorDataRequest }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgAnchorDataRequest"
        components={[<Name address={message.sender} name={senderMoniker} />]}
      />
    </Typography>
  );
};

export default AnchorDataRequest;
