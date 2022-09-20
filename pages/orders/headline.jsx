import classes from './index.module.scss'
import { GoSettings } from 'react-icons/go'
// import { GoSettings } from "react-icons";
import { motion } from 'framer-motion'
import { rightToLeft } from '../../animation'
import Search from '../../components/Search'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { Formik, Field, Form } from 'formik'

const Headline = () => {
  return (
    <>
      <motion.div
        variants={rightToLeft(0.4)}
        initial='hidden'
        animate='visible'
        className='row d-flex justify-content-between'
      >
        <div className='info col-6'>
          <h5>Today Orders</h5>
        </div>
        <div className={`${classes.searchFilter} col-6 row`}>
          <Button
            className={`${classes.button} col-1`}
            data-bs-toggle='modal'
            data-bs-target='#filterModal'
          >
            <GoSettings className={`${classes.icon}`} />
          </Button>
          <Search className={` col-11 h-100 d-flex align-items-center`} />
        </div>
      </motion.div>
      <Modal name={`filterModal`}>
        <Formik
          initialValues={{ color: '' }}
          onSubmit={(values, actions) => {
            console.log(values)
          }}
        >
          {() => (
            <Form className='w-100 m-4 px-4'>
              <div className={`${classes.modal_title} text-start w-100 pb-2`}>Filter Orders As</div>

              <div className={`${classes.modal_subtitle} pt-1`}>Status Of Order</div>
              <Field as='select' name='color' className='form-control'>
                <option value='red'>red </option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
              </Field>
              
              <div className={`${classes.modal_subtitle} mt-2`}>Place Of Order</div>
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
                Confirm
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export default Headline
