'use client'
import HomePageMain from "@/components/Pages/HomePage/HomePageMain/HomePageMain";
import Services from "@/components/Pages/HomePage/Services/Services";
import RunTimeLine from "@/components/RunTimeLine/RunTimeLine";
import CareClients from "@/components/Pages/HomePage/CareClients/CareClients";
import AboutUs from "@/components/Pages/HomePage/AboutUs/AboutUs";


import InTouch from "@/components/InTouch/InTouch";
import {useEffect, useState} from "react";
import API from "@/Api/Api";
import FeedBackForm from '../components/Pages/HomePage/FeedBackForm/FeedBackForm'
import Clients from "@/components/Pages/HomePage/Clients/Clients";
import Team from "@/components/Pages/HomePage/Team/Team";


export default function Page() {
    const ulr = 'https://прибыльный-сайт.рф/wp-json/'
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new API(ulr); // Замените URL на свой базовый URL API
                const response = await api.get('wp/v2/posts/39');


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])


    const textik = '                - Потребность - Эмоции - Страхи - Ожидания - Условия - Потребность - Эмоции\n' +
        '                - Страхи - Ожидания - Условия - Потребность - Эмоции - Страхи - Ожидания -\n' +
        '                Условия - Потребность - Эмоции - Страхи - Ожидания - Условия'


    return (
        <>
            <HomePageMain/>
            <Services/>
            <RunTimeLine
                text={textik}/>
            <CareClients/>
            <RunTimeLine
                text={'                - Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне предлагают? - Кто исполнитель?\n' +
                    '                - Как они это сделают? - Что мне предлагают? - Кто исполнитель? - Как они это сделают? - Что мне\n' +
                    '                предлагают? - Кто исполнитель? - Как они это сделают?'}/>
            <AboutUs/>
            <Team/>
            <Clients />
            <RunTimeLine
                text={'  - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект - Давайте обсудим проект -\n' +
                    '                Связаться с нами - Давайте обсудим проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим\n' +
                    '                проект - Давайте обсудим проект - Связаться с нами - Давайте обсудим проект'}/>
            <FeedBackForm/>
            <InTouch/>
        </>
    )
}
