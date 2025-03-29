import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import card from '../assets/images/common/cardSvg.svg'
import '../styles/components/ProductItem.scss'
const BreadcrumbSeparator = () => (
	<svg
		width='16'
		height='16'
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M6.53025 2.4694L11.5302 7.4694C11.6002 7.53908 11.6556 7.62187 11.6935 7.71304C11.7314 7.8042 11.7508 7.90194 11.7508 8.00065C11.7508 8.09936 11.7314 8.1971 11.6935 8.28827C11.6556 8.37943 11.6002 8.46222 11.5302 8.5319L6.53025 13.5319C6.38935 13.6728 6.19825 13.752 5.999 13.752C5.79974 13.752 5.60864 13.6728 5.46775 13.5319C5.32685 13.391 5.2477 13.1999 5.2477 13.0007C5.2477 12.8014 5.32685 12.6103 5.46775 12.4694L9.93712 8.00003L5.46712 3.53065C5.32623 3.38976 5.24707 3.19866 5.24707 2.9994C5.24707 2.80015 5.32623 2.60905 5.46712 2.46815C5.60802 2.32726 5.79911 2.2481 5.99837 2.2481C6.19763 2.2481 6.38873 2.32726 6.52962 2.46815L6.53025 2.4694Z'
			fill='black'
			fill-opacity='0.6'
		/>
	</svg>
)

const ProductItem = () => {
	const accordionHead = ['Условия заказа', 'Описание товара', 'Отзывы']
	const [ChooseAccordion, setChooseAccordion] = useState(0)
	const [like, setLike] = useState(false)
	const relatedItems = [
		{
			id: 0,
			img: card,
			name: 'Футболка оверсайз с абстрактным принтом',
			price: 1499,
			beforePrice: 2990,
		},
		{
			id: 1,
			img: card,
			name: 'Худи с геометрическим принтом',
			price: 3499,
			beforePrice: 4990,
		},
		{
			id: 2,
			img: card,
			name: 'Рубашка с тропическим принтом',
			price: 2299,
			beforePrice: 3990,
		},
		{
			id: 3,
			img: card,
			name: 'Свитшот с графическим принтом',
			price: 2799,
			beforePrice: 4290,
		},
		{
			id: 4,
			img: card,
			name: 'Джинсы с художественным принтом',
			price: 3999,
			beforePrice: 5990,
		},
		{
			id: 5,
			img: card,
			name: 'Косуха с принтом «Винтаж»',
			price: 5999,
			beforePrice: 8990,
		},
	]
	const breadCrumbsList = [
		'Главная',
		'Кабели и зарядные устройства',
		'Продавец №14023',
	]
	const HandleChooseAccordion = (id: number) => {
		setChooseAccordion(id)
	}
	return (
		<div className='product-item wrapper'>
			<div className='product-item__bread-crumbs bread-crumbs'>
				<ul>
					{breadCrumbsList.map((item, index) => (
						<li key={index}>
							<Link to=''>{item}</Link>
							{index < breadCrumbsList.length - 1 && <BreadcrumbSeparator />}
						</li>
					))}
				</ul>
			</div>
			<div className='product-item__product product'>
				<div className='product__gallery gallery'>
					<div className='gallery__thumbs'>
						<Swiper
							direction={'vertical'}
							slidesPerView={3}
							spaceBetween={10}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							modules={[Autoplay, Navigation]}
							className='vertical-swiper__container'
						>
							{Array.from({ length: 10 }).map((_, index) => (
								<SwiperSlide
									key={index}
									className='vertical-swiper__slide'
								></SwiperSlide>
							))}

							<div className='swiper-button-prev vertical-swiper__nav '>
								<svg
									width='40'
									height='40'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16 24L24 16M24 16L32 24M24 16L24 32M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z'
										stroke='#101828'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
							<div className='swiper-button-next vertical-swiper__nav '>
								<svg
									width='40'
									height='40'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16 24L24 32M24 32L32 24M24 32L24 16M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44Z'
										stroke='#101828'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
						</Swiper>
					</div>
					<div className='gallery__main'>
						<div className='gallery__main-img'></div>
						<button
							onClick={() => setLike(prev => !prev)}
							className={`like ${like ? 'active' : ''}`}
						>
							<svg
								width='30'
								height='30'
								viewBox='0 0 41 41'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M36.9927 4.44788C36.0398 3.3548 34.9083 2.4877 33.663 1.8961C32.4177 1.3045 31.083 1 29.735 1C28.387 1 27.0522 1.3045 25.8069 1.8961C24.5616 2.4877 23.4301 3.3548 22.4772 4.44788L20.4995 6.71535L18.5218 4.44788C16.5969 2.24097 13.9862 1.00114 11.264 1.00114C8.54184 1.00114 5.93115 2.24097 4.00627 4.44788C2.08139 6.65479 1 9.648 1 12.769C1 15.8901 2.08139 18.8833 4.00627 21.0902L5.98396 23.3577L20.4995 40L35.015 23.3577L36.9927 21.0902C37.9461 19.9976 38.7024 18.7004 39.2184 17.2726C39.7344 15.8449 40 14.3145 40 12.769C40 11.2236 39.7344 9.69322 39.2184 8.26545C38.7024 6.83767 37.9461 5.54045 36.9927 4.44788Z'
									fill='#D9D9D9'
									fill-opacity='0.5'
									stroke='#E3E3E3'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>

				<div className='product__info info'>
					<h1 className='info__title'>
						Зарядка для iphone 20W type-c быстрое устройство
					</h1>
					<div className='info__star'>
						<svg
							width='110'
							height='19'
							viewBox='0 0 110 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 0.5L11.5498 5.99048L17.5595 6.71885L13.1257 10.8405L14.2901 16.7812L9 13.838L3.70993 16.7812L4.87432 10.8405L0.440492 6.71885L6.45019 5.99048L9 0.5Z'
								fill='#FFC633'
							/>
							<path
								d='M34.0996 0.5L36.6494 5.99048L42.6591 6.71885L38.2253 10.8405L39.3897 16.7812L34.0996 13.838L28.8095 16.7812L29.9739 10.8405L25.5401 6.71885L31.5498 5.99048L34.0996 0.5Z'
								fill='#FFC633'
							/>
							<path
								d='M59.1992 0.5L61.749 5.99048L67.7587 6.71885L63.3249 10.8405L64.4893 16.7812L59.1992 13.838L53.9092 16.7812L55.0735 10.8405L50.6397 6.71885L56.6494 5.99048L59.1992 0.5Z'
								fill='#FFC633'
							/>
							<path
								d='M84.2988 0.5L86.8486 5.99048L92.8583 6.71885L88.4245 10.8405L89.5889 16.7812L84.2988 13.838L79.0088 16.7812L80.1731 10.8405L75.7393 6.71885L81.749 5.99048L84.2988 0.5Z'
								fill='#FFC633'
							/>
							<path
								d='M103.836 17.5L109.398 14.4269V0.5L106.717 6.2329L100.398 6.99342L105.06 11.2971L103.836 17.5Z'
								fill='#FFC633'
							/>
						</svg>
						<span>4.7</span>
					</div>
					<div className='info__price'>
						<strong>150 ₽ </strong>
						<span>300 ₽</span>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_608_18810)'>
								<path
									d='M6.05967 6.00004C6.21641 5.55449 6.52578 5.17878 6.93298 4.93946C7.34018 4.70015 7.81894 4.61267 8.28446 4.69252C8.74998 4.77236 9.17222 5.01439 9.47639 5.37573C9.78057 5.73706 9.94705 6.19439 9.94634 6.66671C9.94634 8.00004 7.94634 8.66671 7.94634 8.66671M7.99967 11.3334H8.00634M14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004Z'
									stroke='#BAA4EC'
									stroke-width='1.33333'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_608_18810'>
									<rect width='16' height='16' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</div>
					<hr />

					<ul className='info__actions'>
						<li>Выкупили: 12 </li>
						<li>Осталось товаров с кэшбеком у продавца: 5</li>
					</ul>
					<hr />

					<div className='info__btns'>
						<button>В избранном</button>
						<button>Заказать</button>
					</div>

					<hr />

					<div className='info__shop'>
						<span>Магазин </span>

						<div>
							<span>Подробнее</span>

							<strong>
								<svg
									width='12'
									height='11'
									viewBox='0 0 12 11'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z'
										fill='#FF9900'
									/>
								</svg>
								4.7
							</strong>
						</div>
					</div>
				</div>
			</div>

			<div className='product-item__accordion accordion'>
				<div className='accordion__header'>
					{accordionHead.map((item, index) => (
						<button
							className={`${index === ChooseAccordion ? 'active' : ''}`}
							onClick={() => HandleChooseAccordion(index)}
							key={index}
						>
							{item}
						</button>
					))}
				</div>
				<div className='accordion__body'>
					{ChooseAccordion === 0 && (
						<div className='conditions'>
							<ul>
								<li>
									Кэшбек начисляется полностью за оставление отзыва с
									фотографиями товара
								</li>
								<li>Начисление кэшбека в течение 72 часов после отзыва</li>
								<li>50% кэшбека если отзыв не прошел модерацию Вайлдберис</li>
							</ul>
						</div>
					)}

					{ChooseAccordion === 1 && (
						<div className='description'>
							<p>
								Забудьте о проблемах с зарядкой! Встречайте настоящего
								супергероя - комплект быстрого зарядного устройства от Akban
								Shop USB-C 20W с кабелем Type-C на Lightning! 
							</p>
							<p>
								Мы изучили пожелания наших дорогих клиентов и разработали
								обновленную модель, которая не просто соответствует их
								ожиданиям, но и превосходит их.
							</p>
						</div>
					)}

					{ChooseAccordion === 2 && (
						// Вставляете ЛЮБОЙ ваш HTML для отзывов
						<div>
							<h3>Ваши отзывы</h3>
							<div className='review-item'>
								<p>Пример отзыва</p>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className='product-item__also-see also-see'>
				<span>Смотрите также</span>

				<Swiper
					slidesPerView={6}
					spaceBetween={10}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					modules={[Autoplay]}
					className='related__swiper'
				>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
					<SwiperSlide className='related__slide'></SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default ProductItem
