import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});

function Form() {
  const [submitting, setSubmitting] = useState(false);
  const { register, reset, handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setSubmitting(true);
    axios
      .post('https://speakia-api.herokuapp.com/mail', data)
      .then(() => {
        console.log('posted');
        setSubmitting(false);
        alert('Проверьте свой email (в проде уберем этот alert)');
        reset();
      })
      .catch(() => {
        setSubmitting(false);
        alert('Ошибка короче');
        console.log('error');
        reset();
      });
    console.log(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="form__description">Оставьте свою заявку, менеджер свяжется с вами в ближайшее время</p>
      <input className="form__input" type="text" name="name" placeholder="Ваше имя" ref={register} />
      <Controller
        className="form__input"
        as={InputMask}
        control={control}
        placeholder="Ваш номер телефона"
        mask="+7 (999) 999-99-99"
        name="phoneNumber"
      />
      <button className="form__button" type="submit" disabled={submitting}>
        {submitting ? 'Подождите...' : 'Оставить заявку'}
      </button>
    </form>
  );
}

export default Form;
