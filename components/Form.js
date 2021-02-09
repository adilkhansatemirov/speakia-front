import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '../styles/components/Form.module.scss';
import axios from 'axios';

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});

function Form() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    axios
      .post('https://speakia-api.herokuapp.com/mail', data)
      .then(() => {
        console.log('posted');
      })
      .catch(() => {
        console.log('error');
      });
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        style={{ marginBottom: '10px', padding: '5px', border: '1px solid rgba(0,0,0,0.2)', borderRadius: '3px' }}
        type="text"
        name="name"
        placeholder="Ваше имя"
        ref={register}
      />
      <Controller
        style={{ marginBottom: '10px', padding: '5px', border: '1px solid rgba(0,0,0,0.2)', borderRadius: '3px' }}
        as={InputMask}
        control={control}
        placeholder="Ваш номер телефона"
        mask="+7 (999) 999-99-99"
        name="phoneNumber"
      />
      <button style={{ border: '1px solid black', borderRadius: '2px' }} type="submit">
        Оставить заявку
      </button>
    </form>
  );
}

export default Form;
