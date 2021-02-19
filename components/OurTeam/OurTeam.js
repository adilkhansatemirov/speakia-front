function OurTeam() {
  const teachers = [
    {
      id: 1,
      name: 'Dinara Teacher',
      education: 'Budapest University of Technology and Economics (Венгрия)',
      experienceYears: 3,
      certificates: ['IELTS: 7.0 (2018)', 'SAT: 1520 из 1600'],
      img: 'teacher1.jpg',
    },
    {
      id: 2,
      name: 'Dinara Teacher',
      education: 'Budapest University of Technology and Economics (Венгрия)',
      experienceYears: 3,
      certificates: ['IELTS: 7.0 (2018)', 'SAT: 1520 из 1600'],
      img: 'teacher1.jpg',
    },
    {
      id: 3,
      name: 'Dinara Teacher',
      education: 'Budapest University of Technology and Economics (Венгрия)',
      experienceYears: 3,
      certificates: ['IELTS: 7.0 (2018)', 'SAT: 1520 из 1600'],
      img: 'teacher2.jpg',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Наша команда</h2>
        <ul className="team__list">
          {teachers.map((teacher) => (
            <li className="team__list-item" key={teacher.id}>
              <div className="team__list-item-top-part">
                <img className="team__list-item-top-part-image" src={`/images/${teacher.img}`} alt={teacher.name} />
              </div>
              <div className="team__list-item-main-part">
                <h4 className="team__list-item-name">{teacher.name}</h4>
                <div className="team__list-item-info">
                  {teacher.education && (
                    <div className="team__list-item-info-item">
                      <img className="team__list-item-info-item-icon" src="/images/education.svg" alt="education" />
                      <p>{teacher.education}</p>
                    </div>
                  )}
                  {teacher.certificates && (
                    <div className="team__list-item-info-item">
                      <img className="team__list-item-info-item-icon" src="/images/checklist.svg" alt="checklist" />
                      <div>
                        {teacher.certificates.map((certificate) => (
                          <p key={certificate}>{certificate}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {teacher.experienceYears && (
                    <div className="team__list-item-info-item">
                      <img className="team__list-item-info-item-icon" src="/images/award.svg" alt="award" />
                      <p>Опыт работы: {teacher.experienceYears}</p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurTeam;
