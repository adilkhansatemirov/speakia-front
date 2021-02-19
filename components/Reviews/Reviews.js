import Slider from 'react-slick';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', height: 'fit-content' }} onClick={onClick}>
      <img src="/images/arrow-right-slider.svg" alt="arror right" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', height: 'fit-content' }} onClick={onClick}>
      <img src="/images/arrow-left-slider.svg" alt="arror right" />
    </div>
  );
};

const Dots = (dots) => (
  <div
    style={{
      position: 'relative',
      top: '30px',
      borderRadius: '10px',
      padding: 0,
    }}
  >
    <ul style={{ margin: '0px' }}>{dots}</ul>
  </div>
);

const Paging = () => (
  <div
    style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: '#c4c4c4',
    }}
  />
);

function Reviews() {
  const imagesSources = ['review1.jpg', 'review2.jpg', 'review3.jpg', 'review4.jpg'];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">отзывы</h2>
        <div className="reviews__slider-container">
          <Slider
            {...{
              dots: true,
              arrows: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
              appendDots: Dots,
              customPaging: Paging,
            }}
          >
            {imagesSources.map((imageSource) => (
              <div className="reviews__slider-item" key={imageSource}>
                <div className="reviews__slider-item-container">
                  <img className="reviews__slider-item-image" src={`/images/${imageSource}`} alt="speakia review" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
