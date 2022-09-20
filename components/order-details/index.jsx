import clasess from './index.module.scss'
import Button from '../Button'
import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import Modal from '../Modal'

const OrderDetails = ({setShowDetails}) => {

  return (
    <>
      <div className={`${clasess.orderDetails} mt-3`}>
        <div className={`${clasess.orderTitle}`}>
          <h5>order #1245 details</h5>
        </div>
        <div className={`${clasess.date}`}>
          <p>January 23, 2022 8:15Pm</p>
        </div>
        <div className='row text-center'>
          <div className={`col-lg-6 ${clasess.colOption}`}>
            <p>Client Name :</p>
            <p className={`${clasess.text}`}>Ahmed Sami</p>
          </div>

          <div className='col-lg-6'>
            <p>Client phone :</p>
            <p className={`${clasess.text}`}>01554043243</p>
          </div>
        </div>
        <div className={`${clasess.status}`}>
          <h5 className={`text-center`}>in the kitchen </h5>
        </div>
        <div className='option d-flex justify-content-between'>
          <button
            className={` ${clasess.showDetails} btn btn-primary`}
            style={{ width: '48%' }}
            onClick={()=>setShowDetails(true)}
          >
            Show Details
          </button>
          <Button
            className={`${clasess.changeStatus} btn btn-primary`}
            style={{ width: '48%' }}
            data-bs-toggle='modal'
            data-bs-target='#statusModal'
          >
            Change Status
          </Button>
        </div>
      </div>

      <Modal name={`statusModal`}>
        <Formik
          initialValues={{ color: '' }}
          onSubmit={(values, actions) => {
            console.log(values)
          }}
        >
          {() => (
            <Form className='w-100 m-4 px-4'>
              <Field as='select' name='color' className='form-control'>
                <option value='red'>red </option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
              </Field>

              <Button
                type='submit'
                className='w-100'
                style={{
                  display: 'inline-block',
                  marginTop: '1rem'
                }}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default OrderDetails
