import React from 'react'
import { Formik, Form } from "formik"
import { Button, Modal, Typography } from '@material-ui/core';
import TextField from './TextField'
import DropDown from './DropDown';
import * as Yup from "yup"
import useStyles from './styles';

const getModalStyle = () => ({
  top: `${30}%`,
  margin: 'auto'
})

const QuestionForm = ({
  questions,
  open,
  onClose,
  submitted
}) => {
  const classes = useStyles();

  const getFields = (fields) => (
    <>
      {
        fields?.map((field, index) => (
          <div key={`key${index}`} >
            {
              {
                'text':
                  <TextField
                    name={field?.name}
                    className={classes.formControl}
                    id="key${index}"
                    label={field?.label}
                    inputProps={{ maxLength: 20, }}
                  />,
                'dropdown':
                  <DropDown
                    defaultValue=""
                    name={field?.name}
                    label={field?.label}
                    options={field?.options}
                  />
              }[field?.type]
            }
          </div>
        ))
      }
    </>
  )


  return (
    <Modal open={open} onClose={onClose}>
      <div style={getModalStyle()} className={classes.paper}>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            street_address: "",
            post_code: "",
            country: ""
          }}
          onSubmit={submitted}
          validationSchema={Schema}
        >
          {({ isSubmitting }) => (
            <Form>
              { questions?.map((question, index) => (
                <div key={`key${index}`} className={classes.questions}>
                  <Typography component={'span'} variant={'body2'}>
                    {question?.title}
                  </Typography>
                  <Typography component={'span'} variant={'body2'}>
                    {getFields(question?.fields)}
                  </Typography>
                  <br></br>
                </div>
              ))}
              <Button size="small" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}

export default QuestionForm

const Schema = Yup.object({
  first_name: Yup.string(),
  last_name: Yup.string(),
  email: Yup.string(),
  phone_number: Yup.number(),
  street_address: Yup.string(),
  post_code: Yup.string(),
  country: Yup.string(),
})
