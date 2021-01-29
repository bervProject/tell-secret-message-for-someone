import React from 'react';
import {
  List,
  Create,
  Show,
  SimpleShowLayout,
  SimpleForm,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  ShowButton,
  PasswordInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import SubmitMessage from '../components/SubmitMessage';

/* eslint-disable @typescript-eslint/no-explicit-any*/
export const MessageList: React.FC = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="text" />
      <EmailField source="to" />
      <ShowButton />
    </Datagrid>
  </List>
);

export const MessageInsert: React.FC = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <RichTextInput source="text" required />
      <TextInput type="email" source="to" />
      <PasswordInput source="messagePassword" required />
    </SimpleForm>
  </Create>
);

export const MessageShow: React.FC = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="text" />
      <EmailField source="to" />
      <SubmitMessage source="text" />
    </SimpleShowLayout>
  </Show>
);
