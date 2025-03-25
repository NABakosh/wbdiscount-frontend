import '../styles/components/Profile.scss'

const ProfileBuyer = () => {
	return (
		<div className='profile'>
			<div className='profile__wrapper'>
				<div className='profile__header'>
					<div className='profile__header-content'>
						<div className='profile__avatar'>
							<span>AK</span>
							<div>
								<svg
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_608_21530)'>
										<path
											d='M30.6666 25.3333C30.6666 26.0406 30.3856 26.7189 29.8855 27.219C29.3854 27.719 28.7072 28 27.9999 28H3.99992C3.29267 28 2.6144 27.719 2.1143 27.219C1.6142 26.7189 1.33325 26.0406 1.33325 25.3333V10.6667C1.33325 9.95942 1.6142 9.28115 2.1143 8.78105C2.6144 8.28095 3.29267 8 3.99992 8H9.33325L11.9999 4H19.9999L22.6666 8H27.9999C28.7072 8 29.3854 8.28095 29.8855 8.78105C30.3856 9.28115 30.6666 9.95942 30.6666 10.6667V25.3333Z'
											stroke='white'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M15.9999 22.6667C18.9454 22.6667 21.3333 20.2789 21.3333 17.3333C21.3333 14.3878 18.9454 12 15.9999 12C13.0544 12 10.6666 14.3878 10.6666 17.3333C10.6666 20.2789 13.0544 22.6667 15.9999 22.6667Z'
											stroke='white'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_608_21530'>
											<rect width='32' height='32' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
						<div className='profile__info'>
							<strong className='profile__rating'>
								<svg
									width='21'
									height='19'
									viewBox='0 0 21 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.5 0L13.4748 6.40557L20.4861 7.25532L15.3133 12.0639L16.6717 18.9947L10.5 15.561L4.32825 18.9947L5.6867 12.0639L0.513906 7.25532L7.52522 6.40557L10.5 0Z'
										fill='#FFC633'
									/>
								</svg>
								4.7
							</strong>
							<span className='profile__badge'>Продавец №883</span>
							<span className='profile__id'>ID 33948</span>
							<small className='profile__reg-date'>
								Зарегистрирован 19.08.2024
							</small>
						</div>
					</div>
				</div>

				<div className='profile__content'>
					<div className='profile__section'>
						<div className='profile__user-info'>
							<h3 className='profile__subtitle'>Личная информация</h3>
							<div className='profile__user-details'>
								<form className='profile-form'>
									<div className='profile-form__field'>
										<label htmlFor='username' className='profile-form__label'>
											Имя пользователя
										</label>
										<input
											id='username'
											type='text'
											placeholder='Анастасия К.'
											className='profile-form__input'
										/>
									</div>

									<div className='profile-form__field'>
										<label htmlFor='phone' className='profile-form__label'>
											Телефон
										</label>
										<input
											id='phone'
											type='tel'
											placeholder='+7 123 456 7890'
											className='profile-form__input'
										/>
									</div>

									<div className='profile-form__field'>
										<label htmlFor='email' className='profile-form__label'>
											Почта
										</label>
										<input
											id='email'
											type='email'
											placeholder=''
											className='profile-form__input'
										/>
									</div>

									<div className='profile-form__field'>
										<label
											htmlFor='new-password'
											className='profile-form__label'
										>
											Новый пароль
										</label>
										<input
											id='new-password'
											type='password'
											placeholder=''
											className='profile-form__input'
										/>
									</div>

									<div className='profile-form__field'>
										<label
											htmlFor='confirm-password'
											className='profile-form__label'
										>
											Новый пароль еще раз
										</label>
										<input
											id='confirm-password'
											type='password'
											placeholder=''
											className='profile-form__input'
										/>
									</div>
								</form>
								<div className='profile-form-footer'>
									<button>Сохранить</button>
								</div>
							</div>
							<button>Выйти из аккаунта</button>
						</div>

						<div className='profile__grid'>
							<div className='profile__card'>
								<h4 className='profile__card-title'>Баланс</h4>
								<div className='profile__card-content'>
									<div className='profile__card-content-balance'>
										<span>1 700 ₽</span>
										<button>Подробнее</button>
									</div>
								</div>
							</div>
							<div className='profile__card'>
								<h4 className='profile__card-title'>Уведомления</h4>
								<div className='profile__card-content'>
									<div className='profile__card-content-telegram'>
										<button>
											<svg
												width='25'
												height='24'
												viewBox='0 0 25 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<g clip-path='url(#clip0_2601_7219)'>
													<path
														d='M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z'
														fill='url(#paint0_linear_2601_7219)'
													/>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M5.93201 11.8733C9.43026 10.3492 11.763 9.3444 12.9301 8.85893C16.2627 7.47282 16.9551 7.23203 17.4065 7.22408C17.5058 7.22234 17.7277 7.24694 17.8715 7.3636C17.9929 7.46211 18.0263 7.59518 18.0423 7.68857C18.0583 7.78197 18.0782 7.99473 18.0623 8.16097C17.8817 10.0585 17.1003 14.6631 16.7028 16.7884C16.5346 17.6876 16.2034 17.9891 15.8827 18.0186C15.1858 18.0828 14.6567 17.5581 13.9817 17.1157C12.9256 16.4233 12.3289 15.9924 11.3037 15.3168C10.119 14.536 10.887 14.1069 11.5622 13.4056C11.7389 13.2221 14.8093 10.4294 14.8687 10.176C14.8762 10.1443 14.8831 10.0262 14.8129 9.96385C14.7427 9.90148 14.6392 9.92281 14.5644 9.93977C14.4585 9.96381 12.7713 11.079 9.50276 13.2853C9.02385 13.6142 8.59007 13.7744 8.20141 13.766C7.77295 13.7568 6.94876 13.5238 6.33606 13.3246C5.58456 13.0803 4.98728 12.9512 5.03929 12.5363C5.06638 12.3202 5.36395 12.0992 5.93201 11.8733Z'
														fill='#F9FAFB'
													/>
												</g>
												<defs>
													<linearGradient
														id='paint0_linear_2601_7219'
														x1='12.5'
														y1='0'
														x2='12.5'
														y2='23.822'
														gradientUnits='userSpaceOnUse'
													>
														<stop stop-color='#2AABEE' />
														<stop offset='1' stop-color='#229ED9' />
													</linearGradient>
													<clipPath id='clip0_2601_7219'>
														<rect
															width='24'
															height='24'
															fill='white'
															transform='translate(0.5)'
														/>
													</clipPath>
												</defs>
											</svg>
											Подключить
										</button>
										<span>
											Подключите телеграм бота, чтобы получать уведомления о
											ваших заказах
										</span>
									</div>
								</div>
							</div>
							<div className='profile__card'>
								<h4 className='profile__card-title'>Статистика</h4>
								<div className='profile__card-content'>
									<div className='profile__card-content-statistics'>
										<div className='green'>
											<strong>91%</strong>
											<span>Успешных выкупов</span>
										</div>
										<div>
											<strong>10 550 ₽</strong>
											<span>Кэшбека выплачено</span>
										</div>
										<div>
											<strong>342</strong>
											<span>Оценок товаров</span>
										</div>
										<div className='green'>
											<strong>4.7</strong>
											<span>Рейтинг товаров</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileBuyer
