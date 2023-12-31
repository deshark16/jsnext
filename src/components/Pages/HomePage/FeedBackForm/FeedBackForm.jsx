'use client'
import React, {useContext, useEffect, useState} from 'react';
import {useForm, Controller } from "react-hook-form";
import InputMask from 'react-input-mask';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './FeedBackForm.css'
import {DataDevelopContext} from "@/app/contexts/DataDevelopContext";
import ButtonBgImage from "@/components/ButtonBgImage/ButtonBgImage";


const stateCheckBox = [
    {
        name: 'corp',
        text: 'Корпоративный сайт'
    },
    {
        name: 'shop',
        text: 'Интернет магазин'
    },
    {
        name: 'landing',
        text: 'Лендинг'
    },
    {
        name: 'agency',
        text: 'Для агентств недвижимости'
    },
    {
        name: 'hotel',
        text: 'Для отелей'
    },
    {
        name: 'seo',
        text: 'SEO'
    },
    {
        name: 'reklama',
        text: 'Реклама'
    },
    {
        name: 'prodvizhenie',
        text: 'Продвижение'
    },
    {
        name: 'desing',
        text: 'Графика'
    },
    {
        name: '3ddesing',
        text: '3d design '
    },
    {
        name: 'video',
        text: 'Видео'
    },
    {
        name: 'webdesing',
        text: 'Web design'
    },
    {
        name: 'brand',
        text: 'Брендбук'
    },
    {
        name: 'complecks',
        text: 'Комплекс'
    },
]

const socialPhone = [
    {
        social: 'Telegram'
    },
    {
        social: 'WhatsApp'
    },
    {
        social: 'Viber'
    },
]


function FeedBackForm(props) {
    const {
        language
    } = useContext(DataDevelopContext);


    const {register, handleSubmit, setValue, watch, reset, control, formState: {errors, isSubmitSuccessful, isValid }} = useForm({mode: "onChange"});

    // Устанавливаем значение страны по умолчанию (например, Россия - RU) при первоначальной загрузке

    useEffect(() => {
        const clearChecked = stateCheckBox.map((item) => {
            return item.name
        })
        if (isSubmitSuccessful) {
            let newData = {
                telephone: '', name: '', Viber: '', WhatsApp: '', Telegram: ''
            }
            clearChecked.map((item) => {
                newData[item] = ''
            })
            reset(newData)
            setCheckedItems([])
        }
    }, [isSubmitSuccessful])

    const onSubmit = (data) => {
        console.log(data)
    };


    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target;

        if (checked) {
            setCheckedItems((prevCheckedItems) => [...prevCheckedItems, name]);
        } else {
            setCheckedItems((prevCheckedItems) =>
                prevCheckedItems.filter((item) => item !== name)
            );
        }
    };


    return (
        <div className='max-w-[1024px] m-auto mt-[150px] mb-[180px]'>
            <form className={`max-w-[550px]`} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className='text-white text-[23px] flex flex-col'>
                    Начнем знакомство*
                    <input
                        className={`font-light mt-2 ${errors?.name ? '!border-b-crimson-mapbiz text-[20px] text-[#808080] max-w-[240px] bg-transparent outline-0 border-b  placeholder:text-[#FFFFFF4D]' : "text-[20px] text-[#808080] max-w-[240px] bg-transparent outline-0 border-b border-[#FFFFFF4D] placeholder:text-[#FFFFFF4D]"} `}
                        name='name' placeholder='Ваше Имя' defaultValue="" {...register("name", {required: true})} />
                </label>
                {errors?.name && <span className={'text-redbright-mapbiz'}>Вы не представились:)</span>}

                <label className='text-white text-[23px] flex flex-col mb-[16px] mt-[40px]'>Какие услуги вам нужны?</label>
                <div className={`flex flex-wrap gap-[8px]`}>
                    {stateCheckBox.map((item) => {
                        const isChecked = checkedItems.includes(item.name);
                        const labelClass = isChecked ? 'checkbox-btn checkbox-btn_active' : 'checkbox-btn';
                        return (
                            <label key={item.name}
                                   className={`${labelClass} px-4 py-2 text-sm font-light rounded-[24px] text-[#808080]`}>
                                <input
                                    {...register(`${item.name}`)}
                                    type="checkbox"
                                    name={item.name}
                                    onChange={handleCheckboxChange}
                                />
                                {item.text}
                            </label>
                        )
                    })}
                </div>

                <label className='text-white text-[23px] flex flex-col gap-y-2 mt-[40px] mb-2 mb-[8px]'>
                    Как с вами связаться? *
                    <Controller
                        name="telephone"
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                            <PhoneInput
                                country={language === 'russian' ? 'ru' : 'us'}
                                enableSearch
                                {...register("telephone", { required: true })}
                                {...field}
                                type="phone"
                                placeholder=""
                                inputProps={{
                                    className:
                                        "ml-[50px] max-w-[240px] bg-transparent outline-0 border-b border-[#616161] placeholder:text-[#FFFFFF4D] text-[#FFFFFF4D] text-[20px] font-grotesk font-light",
                                }}
                                defaultCountry="RU"
                                value={field.value} // Добавьте эту строку, чтобы передать значение в PhoneInput
                                onChange={(value) => field.onChange(value)} // Добавьте эту строку, чтобы обновлять значение формы при изменении номера телефона
                            />
                        )}
                    />

                </label>
                {errors?.telephone && <span className={'text-redbright-mapbiz'}>Вы не указали номер телефона</span>}


                <div className=" mb-[40px]">
                    <label className='text-white text-[23px] flex flex-col mt-[40px] mb-[40px]'>При номере есть:</label>
                    {socialPhone.map((item) => {
                        return (
                            <label key={item.social}
                                   className={`custom-social px-4 py-2 rounded-[24px] text-[#808080] text-[20px] font-light`}>
                                <input
                                    className={`text-[20px]`}
                                    {...register(`${item.social}`)}
                                    type="checkbox"
                                    name={item.social}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                {item.social}
                            </label>
                        )
                    })}
                </div>
                <ButtonBgImage type={'submit'} isValid={isValid} text={'начать общение'} />
            </form>
        </div>
    );
}

export default FeedBackForm;