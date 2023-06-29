import React from 'react';

function Burger() {
    return (
        <div
            className="popup-menu-overlay h-screen w-screen fixed top-0 left-0 z-50 overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: "url(assets/images/header/popup-menu-fone.png)",
                transform: "translateX(-800%)"
            }}
        >
            <div className="popup popup-menu absolute max-w-screen-xl h-[700px] top-0 bottom-0 left-0 right-0 m-auto flex justify-end">
                <div
                    className="w-9/12 rounded-[10px] py-[3.6rem] pl-[3.3rem] pr-28"
                    style={{
                        backgroundImage:
                            "url(assets/images/header/Textures.jpeg), rgba(238, 230, 212, 0.1)",
                        backdropFilter: "blur(10px)"
                    }}
                >
                    <a href="#" className="popup-menu-close absolute top-10 right-8">
                        <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.3226 17.9674C11.7133 20.3402 9.16172 22.6385 6.63565 24.9654C5.17224 26.3134 3.76123 27.7199 2.30123 29.0716C1.91237 29.4408 1.46552 29.7409 0.979126 29.9595C0.739275 30.0618 0.221335 29.9595 0.103217 29.7722C-0.0530674 29.5234 -0.00686019 29.082 0.0779113 28.7574C0.139582 28.5207 0.390682 28.3248 0.580112 28.1348C4.18256 24.5318 7.78667 20.9312 11.3923 17.3329C11.7969 16.9293 12.2131 16.538 12.6779 16.0898C11.1022 14.316 9.52409 12.6043 8.01749 10.829C5.61295 7.99437 3.25666 5.11755 0.880452 2.25835C0.794073 2.15444 0.71977 2.04071 0.632588 1.9368C0.216766 1.43749 -0.0763915 0.899327 0.397083 0.293654C0.751637 -0.159833 1.59922 -0.0921009 2.18941 0.524822C3.65925 2.06079 5.09106 3.63397 6.51089 5.21923C9.10345 8.11218 11.6758 11.024 14.2591 13.9255C14.3697 14.031 14.4873 14.1287 14.611 14.2178C16.6086 12.2784 18.584 10.3454 20.5759 8.42901C22.8861 6.2076 25.2043 3.99493 27.5306 1.79097C28.4033 0.962547 29.103 0.813227 29.6385 1.29658C30.1935 1.79732 30.1418 2.6339 29.2568 3.53085C26.8639 5.9562 24.4132 8.32265 21.9648 10.6917C20.0997 12.4971 18.2047 14.2714 16.2196 16.1571C17.8327 17.8518 19.3755 19.541 20.993 21.152C22.5466 22.6994 24.187 24.1571 25.7712 25.6726C26.3905 26.2429 26.9704 26.856 27.5069 27.5076C27.9396 28.0543 28.0035 28.733 27.4716 29.2722C26.9475 29.8041 26.3406 29.6161 25.835 29.2136C24.8679 28.4836 23.9408 27.7001 23.058 26.8667C20.3556 24.1783 17.7008 21.4406 15.0287 18.7207C14.8174 18.506 14.6154 18.2806 14.3226 17.9674Z"
                                fill="#808080"
                            />
                        </svg>
                    </a>
                    <div className="popup-menu-header relative">
                        <div className="font-grotesk-bold text-3xl text-white">
                            MaPbiz Group
                        </div>
                        <div className="popup-menu-lang absolute right-6 top-4">
                            <svg
                                width={76}
                                height={19}
                                viewBox="0 0 76 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.504101"
                                    y="0.499983"
                                    width={74}
                                    height={18}
                                    rx={9}
                                    transform="matrix(1 0 0.00820296 0.999966 -0.00410134 -0.000959755)"
                                    fill="#41555E"
                                    fillOpacity="0.3"
                                />
                                <rect
                                    x="0.504101"
                                    y="0.499983"
                                    width={74}
                                    height={18}
                                    rx={9}
                                    transform="matrix(1 0 0.00820296 0.999966 -0.00410134 -0.000959755)"
                                    stroke="url(#paint0_radial_459_715)"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_459_715"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(33.4437 4.24465) rotate(65.5472) scale(62.3945 455.698)"
                                    >
                                        <stop stopColor="#00FFE5" />
                                        <stop offset={1} stopOpacity={0} />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center flex justify-center items-center font-grotesk-light text-xs text-white">
                                <span className="ru font-grotesk-bold">Ru</span>&nbsp;/&nbsp;
                                <span className="eng">Eng</span>
                            </div>
                        </div>
                    </div>
                    <div className="popup-menu flex pt-28">
                        <div className="popup-menu-nav w-4/12 grid gap-y-6 pr-10 font-grotesk text-[23px] text-white text-center">
                            <a
                                href="https://mapbiz-group.com/"
                                className="popup-menu-nav__el h-[50px] group cursor-pointer relative overflow-hidden"
                            >
                                <img
                                    className="w-full h-auto group-hover:-translate-y-[200%] transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav.svg"
                                    alt=""
                                />
                                <img
                                    className="w-full h-auto -translate-y-[200%] group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav-active.svg"
                                    alt=""
                                />
                                <div className="w-full h-full absolute bottom-1 group-hover:bottom-0 left-0 transition-all duration-300 flex justify-center items-center">
                                    Главная
                                </div>
                            </a>
                            <a
                                href="https://mapbiz-group.com/services.html"
                                className="popup-menu-nav__el h-[50px] group cursor-pointer relative overflow-hidden"
                            >
                                <img
                                    className="w-full h-auto -translate-y-[200%] transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav.svg"
                                    alt=""
                                />
                                <img
                                    className="w-full h-auto translate-y-0 transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav-active.svg"
                                    alt=""
                                />
                                <div className="w-full h-full absolute bottom-0 left-0 transition-all duration-300 flex justify-center items-center">
                                    Услуги
                                </div>
                            </a>
                            <a
                                href="https://mapbiz-group.com/portfolio.html"
                                className="popup-menu-nav__el h-[50px] group cursor-pointer relative overflow-hidden"
                            >
                                <img
                                    className="w-full h-auto group-hover:-translate-y-[200%] transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav.svg"
                                    alt=""
                                />
                                <img
                                    className="w-full h-auto -translate-y-[200%] group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav-active.svg"
                                    alt=""
                                />
                                <div className="w-full h-full absolute bottom-1 group-hover:bottom-0 left-0 transition-all duration-300 flex justify-center items-center">
                                    Портфолио
                                </div>
                            </a>
                            <a
                                href="https://mapbiz-group.com/contacts.html"
                                className="popup-menu-nav__el h-[50px] group cursor-pointer relative overflow-hidden"
                            >
                                <img
                                    className="w-full h-auto group-hover:-translate-y-[200%] transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav.svg"
                                    alt=""
                                />
                                <img
                                    className="w-full h-auto -translate-y-[200%] group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-0"
                                    src="assets/images/header/popup-menu-nav-active.svg"
                                    alt=""
                                />
                                <div className="w-full h-full absolute bottom-1 group-hover:bottom-0 left-0 transition-all duration-300 flex justify-center items-center">
                                    Контакты
                                </div>
                            </a>
                        </div>
                        <div className="popup-menu-services w-8/12 pl-10">
                            <div className="relative py-4">
                                <div className="popup-menu-services__header absolute w-[95%] -top-10 left-0 font-grotesk text-2xl text-white select-none">
                                    <img
                                        className="w-full h-auto cursor-default"
                                        src="assets/images/header/popup-menu-services-header.svg"
                                        alt=""
                                    />
                                    <div className="absolute w-full h-full left-16 top-2.5">
                                        Услуги Web студии
                                    </div>
                                </div>
                                <div className="popup-menu-services__left h-full absolute left-0 top-0">
                                    <svg
                                        className="h-full w-auto"
                                        width={66}
                                        height={367}
                                        viewBox="0 0 66 367"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_459_744)">
                                            <line
                                                x1="6.5"
                                                y1="6.5"
                                                x2="6.49998"
                                                y2="360.5"
                                                stroke="#D4FFF7"
                                                strokeLinecap="square"
                                            />
                                            <line
                                                x1="6.5"
                                                y1="360.5"
                                                x2="59.5"
                                                y2="360.5"
                                                stroke="#D4FFF7"
                                                strokeLinecap="square"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_459_744"
                                                x={0}
                                                y={0}
                                                width={66}
                                                height={367}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation={3} />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.897059 0 0 0 1 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_459_744"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_459_744"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="popup-menu-services__right h-full absolute right-0 top-0">
                                    <svg
                                        className="h-full w-auto"
                                        width={49}
                                        height={366}
                                        viewBox="0 0 49 366"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_459_740)">
                                            <line
                                                x1="42.5"
                                                y1="6.5"
                                                x2="42.5"
                                                y2="359.5"
                                                stroke="#D4FFF7"
                                                strokeLinecap="square"
                                            />
                                            <line
                                                x1="6.5"
                                                y1="6.5"
                                                x2="42.5"
                                                y2="6.5"
                                                stroke="#D4FFF7"
                                                strokeLinecap="square"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_459_740"
                                                x={0}
                                                y={0}
                                                width={49}
                                                height={366}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation={3} />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.897059 0 0 0 1 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_459_740"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_459_740"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="popup-menu-services__wrapper h-[17rem] relative overflow-x-hidden overflow-y-auto px-9 py-5">
                                    <div
                                        className="popup-menu-services__el"
                                        ffcoder-develop-el="develop"
                                    >
                                        <div className="popup-menu-services__main relative font-grotesk text-xl text-white cursor-pointer select-none">
                                            <img
                                                className="w-full h-auto"
                                                src="assets/images/header/popup-menu-link.svg"
                                                alt=""
                                            />
                                            <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                Разработка
                                            </div>
                                        </div>
                                        <div className="popup-menu-services__links pl-5 mt-4 grid gap-4 font-grotesk text-sm text-white hidden">
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={3}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Langing Page
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={1}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Корпоративный сайт
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={2}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Интернет магазин
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={4}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Для агентств недвижимости
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html#"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={5}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Для гостиничного бизнеса
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="popup-menu-services__el mt-4"
                                        ffcoder-develop-el="design"
                                    >
                                        <div className="popup-menu-services__main relative font-grotesk text-xl text-white cursor-pointer select-none">
                                            <img
                                                className="w-full h-auto"
                                                src="assets/images/header/popup-menu-link.svg"
                                                alt=""
                                            />
                                            <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                Дизайн
                                            </div>
                                        </div>
                                        <div className="popup-menu-services__links pl-5 mt-4 grid gap-4 font-grotesk text-sm text-white hidden">
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={1}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Web design
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={2}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    3d design
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={3}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Видео
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={4}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Брендбук
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={5}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Графика
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="popup-menu-services__el mt-4"
                                        ffcoder-develop-el="market"
                                    >
                                        <div className="popup-menu-services__main relative font-grotesk text-xl text-white cursor-pointer select-none">
                                            <img
                                                className="w-full h-auto"
                                                src="assets/images/header/popup-menu-link.svg"
                                                alt=""
                                            />
                                            <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                Маркетинг
                                            </div>
                                        </div>
                                        <div className="popup-menu-services__links pl-5 mt-4 grid gap-4 font-grotesk text-sm text-white hidden">
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={1}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Реклама
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={2}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Продвижение
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={3}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    SEO оптимизация
                                                </div>
                                            </a>
                                            <a
                                                href="/develop.html"
                                                className="popup-menu-services__link relative"
                                                ffcoder-foryou-el={4}
                                            >
                                                <img
                                                    className="w-full h-auto"
                                                    src="assets/images/header/popup-menu-link.svg"
                                                    alt=""
                                                />
                                                <div className="absolute w-full h-full top-0 left-6 flex items-center">
                                                    Performance-маркетинг
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popup-menu-footer flex justify-end mt-12">
                        <div className="w-[50%] flex justify-between items-end font-grotesk font-light text-[0.68rem] text-white">
                            <div className="grid">
                                <span>Телефон</span>
                                <a href="tel:89892400997">+7 (989) 240-09-97</a>
                            </div>
                            <div className="grid">
                                <span>Сотрудничество</span>
                                <a href="mailto:mapbiz@yandex.ru">mapbiz@yandex.ru</a>
                            </div>
                            <div className="grid">
                                <a href="#">Telegram</a>
                                <a href="#">Vkontakte</a>
                                <a href="#">Behance</a>
                                <a href="#">Dribbble</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Burger;