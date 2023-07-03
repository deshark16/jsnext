import React from 'react';
import Link from "next/link";


const links = [
    {
        href: '/services',
        title: 'Дизайн'
    },
    {
        href: '/services',
        title: 'Разработка'
    },
    {
        href: '/services',
        title: 'Маркетинг'
    },
]

const subLinks = [
    {
        href: '/',
        title: 'Корпоративный сайт',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Интернет магазин',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Лэндинг',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Реклама',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Для отелей',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Web design',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Продвижение',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Реклама',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Продвижение',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Графика',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: '3d design',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Видео',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'SEO',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
    {
        href: '/',
        title: 'Брендбук',
        className: "services-more__el px-2.5 leading-[0.5rem] 2xl:px-4 py-[0.3rem] 2xl:py-2 border border-greytransparent-mapbiz rounded-[24px] hover:bg-white hover:shadow-white-mapbiz transition duration-300",
    },
]

function Services(props) {
    return (
        <section
            className="services max-w-screen-xl mx-auto pt-9 pb-8 2xl:pt-48 2xl:pb-28 pl-6 2xl:pl-0 pr-4 2xl:pr-0 grid gap-y-8 2xl:gap-y-40">
            <div
                className="services-nav flex justify-start 2xl:justify-end font-grotesk text-[15px] 2xl:text-6xl 2xl:leading-[5.5rem] text-white opacity-90">
                <div className="w-6/12 grid gap-y-1.5 2xl:gap-y-6">
                    {links.map((item) => {
                        return (
                            <Link className="flex group justify-between items-center" href={item.href}>
                                <p>{item.title}</p>
                                <svg
                                    className="group-hover:hidden w-2 2xl:w-[28px] h-2 2xl:h-[28px]"
                                    width={28}
                                    height={28}
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.6438 12.6794C10.6962 9.72513 7.74736 6.77228 4.79714 3.82087C4.2078 3.2339 3.57852 2.68594 2.94107 2.15288C2.83473 2.06565 2.70503 2.01311 2.56892 2.00215C2.43281 1.99119 2.29662 2.0223 2.17814 2.09143C1.98119 2.19497 1.9352 2.57949 2.10274 2.81345C2.2644 3.03973 2.40871 3.28182 2.59013 3.49044C3.7477 4.82123 4.87361 6.18381 6.08457 7.46253C8.57283 10.0894 11.0952 12.6829 13.6263 15.2663C16.0277 17.7181 18.4616 20.136 20.8715 22.5798C21.2583 22.9721 21.5953 23.4151 21.9468 23.8427C21.9661 23.8752 21.9771 23.9121 21.9787 23.95C21.9803 23.9879 21.9726 24.0256 21.9562 24.0597C21.9036 24.1273 21.7865 24.2118 21.7247 24.1932C20.5842 23.8497 19.4325 23.5368 18.3138 23.128C15.7129 22.1771 13.0327 21.5304 10.3502 20.8872C9.90939 20.7817 9.45292 20.6654 9.00805 20.8944C8.92722 20.9361 8.79177 21.0106 8.7969 21.0571C8.80305 21.236 8.85258 21.4106 8.94108 21.5653C9.05397 21.711 9.20433 21.822 9.37541 21.8859C9.97697 22.1163 10.5835 22.3358 11.1967 22.5318C15.5781 23.9332 19.9638 25.3205 24.3433 26.7281C25.9953 27.259 27.0594 27.2269 26.9974 24.6326C26.9796 23.8851 26.9573 23.1334 26.8674 22.3924C26.4508 18.9557 26.0185 15.5211 25.5705 12.0886C25.4963 11.6294 25.387 11.1769 25.2436 10.7351C25.1575 10.4394 24.9085 10.3092 24.6234 10.2684C24.3098 10.2235 23.8066 10.51 23.6959 10.7484C23.4501 11.2779 23.4421 11.8422 23.481 12.3998C23.6306 14.5469 23.7992 16.6927 23.969 18.8382C24.0797 20.2362 24.2076 21.6318 24.3158 23.0296C24.3211 23.0985 24.2253 23.1993 24.1531 23.2431C24.1182 23.2588 24.08 23.2657 24.0418 23.263C24.0037 23.2603 23.9668 23.2482 23.9343 23.2277C23.522 22.8591 23.1022 22.4977 22.717 22.1013C19.6792 18.9741 16.6455 15.8427 13.6158 12.7072L13.6438 12.6794Z"
                                        fill="white"
                                    />
                                </svg>
                                <svg
                                    className="hidden group-hover:block w-2 2xl:w-[44px] h-2 2xl:h-[44px]"
                                    width={44}
                                    height={44}
                                    viewBox="0 0 44 44"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.02197 16.083C-0.911467 23.7628 0.781601 30.5378 6.05764 36.223C6.19492 36.3699 6.33499 36.5168 6.47488 36.6583C9.3091 39.5225 12.8392 41.2909 15.6363 42.5216C16.8368 43.0514 22.9968 43.6949 24.6636 43.444C34.5685 41.9491 41.0867 36.3033 43.3569 26.8576C43.7904 25.0074 44.0062 23.1119 44 21.2105C44.0106 16.7313 42.1446 11.524 38.2962 7.62394C37.8999 7.29286 37.5051 6.94989 37.1233 6.61749C36.2954 5.89815 35.4396 5.15331 34.5442 4.51815C27.7045 -0.346993 20.598 -0.37417 13.4229 2.20573C6.92648 4.53911 2.75462 9.20927 1.02197 16.083ZM13.4507 4.50456C19.7461 1.86049 26.0628 1.39388 32.2238 5.35395C33.3502 6.07877 36.3534 8.53184 36.8262 8.90029L36.8566 8.92291L36.8816 8.95107C39.2853 11.527 42.0376 16.237 41.9769 21.0787C41.9568 23.1491 41.6794 25.2086 41.1513 27.2091C39.5864 32.9576 35.8451 37.1472 29.7132 40.0127C23.4796 43.0292 14.5401 39.9797 12.1616 38.3928C9.53272 36.5763 7.23239 34.3165 5.36118 31.7122C2.42666 27.5134 1.76829 21.4778 3.34518 15.9603C4.08307 13.4127 5.37274 11.0629 7.12062 9.08153C8.8685 7.10012 11.0308 5.53667 13.4507 4.50456Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M31.4623 18.1923C30.9072 17.5434 30.3547 16.892 29.8047 16.2381C29.2063 15.5299 28.6064 14.8232 28.0049 14.1179C27.7748 13.8341 27.5051 13.5858 27.2042 13.3808C27.0239 13.2666 26.6349 13.2518 26.4836 13.3932C26.4007 13.4937 26.3449 13.6141 26.3215 13.7428C26.2982 13.8715 26.3081 14.0042 26.3503 14.1278C26.513 14.4294 26.706 14.7133 26.9263 14.975C26.9752 15.0371 27.0239 15.0991 27.0718 15.1614C27.7603 16.0588 28.4496 16.9556 29.1396 17.852C29.9532 18.9098 30.7662 19.9679 31.5787 21.0264C31.6453 21.1203 31.704 21.2196 31.7542 21.3233C31.7664 21.3467 31.7793 21.3709 31.7916 21.3962C31.3454 21.3739 30.9071 21.3513 30.4739 21.3288C29.4056 21.2737 28.3963 21.2216 27.3736 21.1819C25.1972 21.098 22.018 21.0163 18.9434 20.9366C16.3017 20.869 13.8063 20.8045 11.9735 20.7408C11.6141 20.7314 11.2545 20.7571 10.9 20.8177C10.3584 20.9047 10.0836 21.1863 10.084 21.6552C10.084 22.1784 10.3908 22.4953 10.9472 22.5474C11.1006 22.5618 11.2541 22.5767 11.4076 22.5922C12.0387 22.6548 12.6915 22.7192 13.336 22.7277C15.9074 22.7615 19.5474 22.7879 23.0667 22.8132C25.7935 22.8321 28.3689 22.8509 30.3423 22.8726C30.4859 22.878 30.6291 22.8925 30.7709 22.9162L30.8675 22.93C30.8243 22.977 30.7838 23.0218 30.7449 23.0642C30.6045 23.2185 30.488 23.3462 30.3666 23.4689C28.6612 25.2242 27.2358 27.2364 26.1413 29.4335L26.1065 29.5007C25.9982 29.6911 25.9128 29.8939 25.8522 30.1047C25.8319 30.2298 25.8404 30.358 25.877 30.4793C25.8878 30.528 25.8985 30.5767 25.905 30.6244L25.9185 30.7237L26.0156 30.7048C26.0725 30.6948 26.1298 30.6877 26.1874 30.6837C26.3342 30.6871 26.4783 30.6441 26.5998 30.5608C26.7346 30.4323 26.8557 30.2899 26.961 30.1359C27.0426 30.0198 27.1316 29.9093 27.2275 29.805C28.006 29.0004 28.7862 28.1974 29.5683 27.396C30.5884 26.3481 31.6066 25.2987 32.6227 24.2475C33.073 23.8101 33.479 23.3283 33.8345 22.8092C34.3417 22.0132 34.264 21.3511 33.5767 20.5951C32.9206 19.8741 32.2286 19.0877 31.4623 18.1923Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="services-more flex justify-end font-grotesk font-light">
                <div className="w-full 2xl:w-11/12 grid 2xl:grid-cols-2">
                    <div
                        className="services-more__about w-[76%] hidden 2xl:grid gap-y-10 text-2xl leading-9 text-white">
                        <p>
                            В нашей веб студии спецы и партнеры с разноплановым опытом и навыками.
                            Мы решали тысячи задач клиентов в совокупности...
                        </p>
                        <p>
                            На сайте представлена далеко не все направления нашей деятельности.
                            Есть задача в WEB? - Обращайтесь.
                        </p>
                    </div>
                    <div className="services-more__nav text-[6.5px] 2xl:text-xs text-grey-mapbiz">
                        <div
                            className="services-more__wrapper flex flex-wrap gap-x-2.5 2xl:gap-x-4 gap-y-3 2xl:gap-y-5">
                            {subLinks.map((item) => {
                                return <Link className={item.className} href={item.href}>{item.title}</Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;