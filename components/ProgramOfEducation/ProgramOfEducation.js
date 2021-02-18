import React from 'react';

function ProgramOfEducation() {
  const courses = [
    {
      id: 1,
      title: 'Интенсивный курс по разговорному английскому',
      oldPrice: '22 000',
      newPrice: '9 900',
      items: [
        'Для уровней Pre-Intermediate +',
        'Результат через 3 месяца',
        '24 занятий (1 занятие = 60 минут)',
        'Базовая грамматика разговорного английского',
        'Изучение ситуационных диалогов',
        'Пополнение словарного запаса на 300+ слов',
      ],
    },
    {
      id: 2,
      title: 'Базовый курс по  английскому',
      oldPrice: '35 000',
      newPrice: '17 000',
      items: ['Для всех уровней ', 'В неделе 3 урока по 60 минут ', 'Бесплатный speaking club с носителем языка'],
    },
    {
      id: 3,
      title: 'Подготовка к IELTS',
      oldPrice: '65 000',
      newPrice: '32 000',
      items: [
        'Поднимем результат на один балл за 2-3 месяца',
        'Занятия на реальных тестах ',
        'В неделю 3 раза по 1,5 часа',
        'Уникальный и эффективный метод обучения',
      ],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">программа обучения SPEAKIA.KZ</h2>
        <ul className="program__courses-list">
          {courses.map((course) => (
            <li key={course.id} className="program__courses-list-item">
              <div className="program__courses-list-item-top-part">
                <h2 className="program__courses-list-item-title">{course.title}</h2>
                <ul className="program__courses-list-item-list">
                  {course.items.map((item) => (
                    <li key={item} className="program__courses-list-item-list-item">
                      <div className="program__courses-list-item-tick-box">
                        <img src="/images/tick.svg" alt="tick" />
                      </div>
                      <p className="program__courses-list-item-list-item-text">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="program__courses-list-item-bottom-part">
                <div className="program__courses-list-item-price-container">
                  <p className="program__courses-list-item-price-old-price">
                    {course.oldPrice} <span className="program__courses-list-item-price-tg">₸/мес</span>
                  </p>
                  <p className="program__courses-list-item-price-new-price">
                    {course.newPrice} <span className="program__courses-list-item-price-tg">₸/мес</span>
                  </p>
                </div>
                <button className="program__courses-list-item-button">Попробовать бесплатно</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProgramOfEducation;
