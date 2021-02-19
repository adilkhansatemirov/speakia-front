import Form from 'components/Form';

function AntiCrisis({ toast }) {
  return (
    <section>
      <div className="anticrisis__main">
        <div className="anticrisis__container container">
          <div className="anticrisis__text-container">
            <h1 className="anticrisis__title">Антикризисные цены для всех желающих учиться!</h1>
            <h2 className="anticrisis__subtitle">
              Онлайн уроки на платформе ZOOM 2 раза в неделю +
              <span className="text--orange"> бесплатный спикинг клаб с иностранцем</span>
            </h2>
          </div>
          <Form toast={toast} />
        </div>
      </div>
    </section>
  );
}

export default AntiCrisis;
