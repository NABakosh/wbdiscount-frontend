import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/components/SellerCard.scss";

const SellerCard = () => {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <Link to="/">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.46975 13.5306L4.46975 8.5306C4.39983 8.46092 4.34436 8.37813 4.3065 8.28696C4.26865 8.1958 4.24916 8.09806 4.24916 7.99935C4.24916 7.90064 4.26865 7.8029 4.3065 7.71173C4.34436 7.62057 4.39983 7.53778 4.46975 7.4681L9.46975 2.4681C9.61065 2.3272 9.80175 2.24805 10.001 2.24805C10.2003 2.24805 10.3914 2.3272 10.5323 2.4681C10.6732 2.60899 10.7523 2.80009 10.7523 2.99935C10.7523 3.19861 10.6732 3.3897 10.5323 3.5306L6.06288 7.99997L10.5329 12.4693C10.6738 12.6102 10.7529 12.8013 10.7529 13.0006C10.7529 13.1999 10.6738 13.391 10.5329 13.5318C10.392 13.6727 10.2009 13.7519 10.0016 13.7519C9.80237 13.7519 9.61127 13.6727 9.47038 13.5318L9.46975 13.5306Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
          Назад
        </Link>
        <div className="profile__header">
          <div className="profile__header-content">
            <div className="profile__avatar">
              <span>AK</span>
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_608_21530)">
                    <path
                      d="M30.6666 25.3333C30.6666 26.0406 30.3856 26.7189 29.8855 27.219C29.3854 27.719 28.7072 28 27.9999 28H3.99992C3.29267 28 2.6144 27.719 2.1143 27.219C1.6142 26.7189 1.33325 26.0406 1.33325 25.3333V10.6667C1.33325 9.95942 1.6142 9.28115 2.1143 8.78105C2.6144 8.28095 3.29267 8 3.99992 8H9.33325L11.9999 4H19.9999L22.6666 8H27.9999C28.7072 8 29.3854 8.28095 29.8855 8.78105C30.3856 9.28115 30.6666 9.95942 30.6666 10.6667V25.3333Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9999 22.6667C18.9454 22.6667 21.3333 20.2789 21.3333 17.3333C21.3333 14.3878 18.9454 12 15.9999 12C13.0544 12 10.6666 14.3878 10.6666 17.3333C10.6666 20.2789 13.0544 22.6667 15.9999 22.6667Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_608_21530">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="profile__info">
              <strong className="profile__rating">
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 0L13.4748 6.40557L20.4861 7.25532L15.3133 12.0639L16.6717 18.9947L10.5 15.561L4.32825 18.9947L5.6867 12.0639L0.513906 7.25532L7.52522 6.40557L10.5 0Z"
                    fill="#FFC633"
                  />
                </svg>
                4.7
              </strong>
              <span className="profile__badge">Продавец №883</span>
              <span className="profile__id">ID 33948</span>
              <small className="profile__reg-date">
                Зарегистрирован 19.08.2024
              </small>
            </div>
          </div>
        </div>

        <div className="seller-card">
          <div className="seller-card__stats">
            <div className="seller-card__stat seller-card__stat_highlight">
              <strong className="seller-card__value">91%</strong>
              <span className="seller-card__label">Успешных выкупов</span>
            </div>

            <div className="seller-card__stat">
              <strong className="seller-card__value">10 550 ₽</strong>
              <span className="seller-card__label">Кэшбека выплачено</span>
            </div>

            <div className="seller-card__stat seller-card__stat_highlight">
              <strong className="seller-card__value">4.7</strong>
              <span className="seller-card__label">Рейтинг товаров</span>
            </div>

            <div className="seller-card__stat">
              <strong className="seller-card__value">342</strong>
              <span className="seller-card__label">Оценок товаров</span>
            </div>
          </div>

          <hr className="seller-card__divider" />

          <div className="seller-card__products">
            <span>Товары продавца</span>
          </div>
          <hr />
          <div className="seller-card__rewiev">
            <span>
              Отзывы о продавце <small>(13)</small>
            </span>

            <div className="seller-card__rewiev-list">
              <button className="swiper-rewiew-prev">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 32L32 24M32 24L24 16M32 24H16M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                    stroke="#101828"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={3}
                navigation={{
                  nextEl: ".swiper-rewiew-next",
                  prevEl: ".swiper-rewiew-prev",
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {Array.from({ length: 7 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="seller-card__review-item">
                      <svg
                        width="106"
                        height="16"
                        viewBox="0 0 106 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M30.4863 0L32.7528 4.88043L38.0948 5.52786L34.1536 9.19157L35.1886 14.4721L30.4863 11.856L25.784 14.4721L26.8191 9.19157L22.8779 5.52786L28.2198 4.88043L30.4863 0Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M52.9736 0L55.2401 4.88043L60.5821 5.52786L56.6409 9.19157L57.6759 14.4721L52.9736 11.856L48.2714 14.4721L49.3064 9.19157L45.3652 5.52786L50.7071 4.88043L52.9736 0Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M75.46 0L77.7265 4.88043L83.0684 5.52786L79.1272 9.19157L80.1622 14.4721L75.46 11.856L70.7577 14.4721L71.7927 9.19157L67.8515 5.52786L73.1935 4.88043L75.46 0Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M97.9473 0L100.214 4.88043L105.556 5.52786L101.615 9.19157L102.65 14.4721L97.9473 11.856L93.245 14.4721L94.28 9.19157L90.3388 5.52786L95.6808 4.88043L97.9473 0Z"
                          fill="#FFC633"
                        />
                      </svg>
                      <strong>Анна</strong>
                      <span>
                        Зарядка для iphone 20W type-c быстрое устройство
                      </span>
                      <p>
                        Все прошло отлично! Я сразу получила кешбэк после того
                        как продацев подтвердил мои действия.
                      </p>
                      <small>29 июля, 2023</small>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="swiper-rewiew-next">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 32L32 24M32 24L24 16M32 24H16M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                    stroke="#101828"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
