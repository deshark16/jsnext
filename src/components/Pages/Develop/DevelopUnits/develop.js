import {svgDevelop, svgDesign, svgMarket} from "./svg";

export const content = {
    develop: {
        title: 'Создание сайтов',
        description: 'Создаем веб сайты и сервисы различного направления и функционала. От одностраничных сайтов до онлайн сервисов с бекэндом.',
        img: '/img/develop/develop-fone.webp',
        els: [
            {
                id: 1,
                label: 'Корпоративный сайт',
                content: {
                    title: 'Корпоративный',
                    description: 'Так называют многостраничный сайт со статичными страницами.\n' +
                        '\n' +
                        'В нашей компетенции разработка сайтов для компаний совершенно разного уровня и типа.\n' +
                        '\n' +
                        'Все успешные веб-студии знают “секретный состав работ” для создания сайта - лидера ниши.',
                    request: '/develop/create-company-more'
                }
            },
            {
                id: 2,
                label: 'Интернет магазин',
                content: {
                    title: 'Магазин / каталог',
                    description: 'От того как собран E-comerce сайт зависит не только продажи и перспиктивы, но и удобства его администрирования.\n' +
                        '\n' +
                        'Перспективы роста в поисковых выдачах и возможность развиваться с течением времени, внедрять новый функционал.\n' +
                        '\n' +
                        'Выполняя разные задачи клиентов мы научились делать реально современные сайты',
                    request: '/develop/create-shop-more'
                }
            },
            {
                id: 3,
                label: 'Лендинг',
                content: {
                    title: 'Одностраничный сайт',
                    description: 'Сайт, который имеет четкую цель, его логика, содержание и дизайн соответствуют целевой аудитории и задаче.\n' +
                        '\n' +
                        'Все успешные веб студии знают “секретный состав работ” для создания сайта - лидера ниши.',
                    request: '/develop/create-landing-more'
                }
            },
            {
                id: 4,
                label: 'Для агентств недвижимости',
                content: {
                    title: 'Для агентств недвижимости',
                    description: 'Разработка требует понимания специфических потребностей агентств - облегчение их рабочих процессов и контроля.\n' +
                        '\n' +
                        'Наши решения помогут вам развивать продажи в сети. Экспертность приобретена из опыта партнерских отношений с агенствами недвижимости',
                    request: '/develop/create-agency-more'
                }
            },
            {
                id: 5,
                label: 'Для отелей',
                content: {
                    title: 'Для гостиниц и отелей',
                    description: 'Вызвать эмоции и выделиться среди конкурентов.\n' +
                        '\n' +
                        'Легко оформить и оплатить бронь.\n' +
                        '\n' +
                        'Удобно управлять бронированием, легко продвигаться в поиске.\n' +
                        '\n' +
                        'Это на словах все просто а по факту удается далеко не каждому реализовать.\n' +
                        '\n' +
                        'Оцените наши успешные кейсы и решения.',
                    request: '/develop/create-hotel-more'
                }
            },
        ]
    },
    design: {
        title: 'Дизайн',
        description: 'Мало просто красивой картинки. Для успеха необходимо учесть массу факторов - от пользовательского сценария до особенностей восприятия целевой аудитории и трендов... Вызываем эмоции графикой',
        img: '/img/develop/develop-design-fone.webp',
        els: [
            {
                id: 1,
                label: 'Web design',
                content: {
                    title: 'Web design',
                    description: 'Разработка концепции будущего веб-ресурса строится на на основе анализа, прототипирования и пользловательского сценария. После, вырабатывается стилистика, с её учетом полученный прототип обрастает содержимым, графикой, анимациями и “чувствами”.\n' +
                        '\n' +
                        'Это и называется “Дизайн проект”.',
                    request: '/design/web-more'
                }
            },
            {
                id: 2,
                label: '3d design',
                content: {
                    title: '3d design',
                    description: 'От 3d съемки объектов и пространств до рендера 3d графики, а так же внедрение 3d графики в web пространство. Сегодня это уже отдельный вид графического искуства). Это требует особых навыков работы с специальными программами и средами.\n' +
                        '\n' +
                        'Зачастую внедрение 3д графики в веб среду требует выработки принципиально нового подхода.',
                    request: '/design/3d-more'
                }
            },
            {
                id: 3,
                label: 'Видео',
                content: {
                    title: 'Видео',
                    description: 'Снять?\n' +
                        '\n' +
                        'Срендерить?\n' +
                        '\n' +
                        'Сгенерить?\n' +
                        '\n' +
                        'Или все это одновременно)?\n' +
                        '\n' +
                        'Богатый выбор дает возможность маневрировать и находить альтернативы.',
                    request: '/design/movie-more'
                }
            },
            {
                id: 4,
                label: 'Брендбук',
                content: {
                    title: 'Брендбук',
                    description: 'Ваша компания на пути создания Бренда?\n' +
                        '\n' +
                        'Tone of voice? Корпоративный стиль?\n' +
                        '\n' +
                        'Стандартизация и выработка правил подачи инфы.\n' +
                        '\n' +
                        'Отныне это для вас не просто слова, а необходимость.',
                    request: '/design/brandbook-more'
                }
            },
            {
                id: 5,
                label: 'Графика',
                content: {
                    title: 'Графика',
                    description: 'Создание рекламных постеров, карточек товаров, обложки к альбомам, рендер изображений недвижимости для застройщиков, интерьеры, меню для ресторанов, эскизы вывесок и многое другое...',
                    request: '/design/drawing-more'
                }
            },
        ]
    },
    market: {
        title: 'Маркетинг',
        description: 'От стратегического планирования до реализации отдельных задач. Каждое действие может привести как к заработку так и к потере ваших денег. Ставим цели, оцифровуем и фиксируем в таймлайне.',
        img: '/img/develop/develop-market-fone.webp',
        els: [
            {
                id: 1,
                label: 'Реклама',
                content: {
                    title: 'Реклама',
                    description: 'В данном блоке мы объединяем все платные инструменты Digital маркетинга.\n' +
                        '\n' +
                        'Наши кометенции - подбор инструментов и планирование, создание и управление, сокращение затрат и корректировка процесса в зависимости от целей заказчика.',
                    request: '/market/ads-more'
                }
            },
            {
                id: 2,
                label: 'Продвижение',
                content: {
                    title: 'Продвижение',
                    description: 'Тут мы говорим не только о повышении места стайта в поисковой выдачи по фразам...\n' +
                        '\n' +
                        'Объединяем все те работы и методы, которые позволяют получать органический (не рекламный) трафик на ресурс.',
                    request: '/market/promo-more'
                }
            },
            {
                id: 3,
                label: 'SEO оптимизация',
                content: {
                    title: 'SEO оптимизация',
                    description: 'Приведение к стандартам поисковиков ресурсов. Другими словами в результате этих действий поисковые роботы запомнят ваш саш сайт более качественным и более правильно определят содержимое.',
                    request: '/market/seo-more'
                }
            },
            {
                id: 4,
                label: 'Performance-маркетинг',
                content: {
                    title: 'Performance-маркетинг',
                    description: 'Самый правильный подход.\n' +
                        '\n' +
                        'Четкие, измеримые цели.\n' +
                        '\n' +
                        'Один подрядчик для всех работ интернет маркетинга, фокус ответственности, скорость коммуникации и понятные перспективы.',
                    request: '/market/performance-more'
                }
            },
        ]
    }
}

export const block = [
    {
        id: 1,
        el: 'develop',
        title: 'Разработка сайтов',
        svg: svgDevelop,

    },
    {
        id: 2,
        el: 'design',
        title: 'Дизайн',
        svg: svgDesign,

    },
    {
        id: 3,
        el: 'market',
        title: 'Маркетинг',
        svg: svgMarket,

    },
]