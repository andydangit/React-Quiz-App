import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const styleForm = { 
    display:"flex",
    margin:"90px",
    flexDirection:"column"
}

const ContactUsId = () => (
  <Form style={styleForm}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Contact Us'
      placeholder='Question'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='Adam.Smith@email.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
    />
  </Form>
)

export default ContactUsId
