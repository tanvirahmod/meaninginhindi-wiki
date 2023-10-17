"use client"
import Link from 'next/link';
import React from 'react'

export default function HomeIntros() {
    // 1st letter word search dictionary
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const listItems = letters.map((letter) => (
        <div className='h-10 w-10 shadow-xl ring-1 ring-slate-200 flex justify-center items-center text-violet-700 font-bold' key={letter}>
            <Link href={`/dictionary/by-first-letter/${letter}`}>{letter}</Link>
        </div>
    ));
    return (
        <div className="w-full md:w-2/4 mx-auto h-auto p-8 px-10 flex justify-center flex-col items-center gap-4">

            <h2 className="text-slate-600 md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-slate-800">MeaninginHindi.wiki</h2>

            <h3 className="md:text-2xl font-semibold text-slate-800 text-center">A Complate English-to-Hindi Dictionary</h3>

            <p className="text-slate-600 text-center">Welcome to our MeaninginHindi English to Hindi online dictionary Website! Here, We&apos;re here to help you understand English words better in Hindi Language. We are not just giving you the simple translation of a word in Hindi, we also provide other information such as parts of speech, pronounciation, phonetic of UK and US, similler words with meaning, synonyms, antonyms, hyponyms, hypernyms and how to use the word in a sentence. It&apos;s like peeling an onion to see all the layers! And to make things even clearer, we&apos;ve got lots of examples to show you how each word is used in real life. </p>
            <p className="text-slate-600 text-center">Whether you&apos;re someone who loves playing with words or you&apos;re trying to learn Hindi language, our website is here to help.</p>
            <p className="text-slate-600 text-center">Let&apos;s have fun exploring the amazing world of words together!</p>

            <h3 className="text-slate-600 md:text-3xl text-2xl mt-14 font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">What we Provide.</h3>

            <p className='text-slate-600 text-center'>We&apos;re on a mission to bring you the best word knowledge around! Our team is dedicated to thorough research, ensuring that you get accurate and fascinating insights into each word we explore.</p>

            <div className='flex justify-center w-full flex-wrap gap-4 items-center'>
                {/* 1st box */}
                <div className='flex rounded-sm ring-1 ring-slate-300 h-auto min-h-[130px] w-96'>
                    <div className='w-1/3 bg-slate-200 flex justify-center items-center'>
                        <svg width="91px" height="91px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="read"> <g id="read_2"> <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M24.9972 28.2812L24.9965 18.352L38.1431 14.8285C38.6765 14.6855 38.9931 14.1372 38.8501 13.6037C38.7071 13.0702 38.1588 12.7537 37.6253 12.8967L24.9964 16.2814L24.996 11.1647C24.996 10.7116 25.2998 10.3157 25.7366 10.1988L41.2885 6.03679C41.7683 5.90815 42.03 6.09972 42.03 6.53478V35.9568C42.03 36.6026 41.4432 37.3467 40.771 37.5269L24.2434 41.9508C24.0203 42.0134 23.9644 42.0129 23.7675 41.9561L7.25912 37.5269C6.58683 37.3467 6 36.6026 6 35.9568V6.53478C6 6.09972 6.26169 5.90815 6.74103 6.03667L19.6608 9.5046C20.1942 9.64777 20.7426 9.33143 20.8858 8.79803C21.029 8.26463 20.7126 7.71615 20.1792 7.57297L7.25924 4.10497C5.5304 3.64144 4 4.76176 4 6.53478V35.9568C4 37.5189 5.20508 39.0469 6.74103 39.4587L23.2309 43.8826C23.7643 44.0369 24.1996 44.0404 24.7723 43.8796L41.2886 39.4588C42.8249 39.0469 44.03 37.5189 44.03 35.9568V6.53478C44.03 4.76176 42.4996 3.64144 40.771 4.1049L25.2195 8.26678C23.9078 8.61795 22.996 9.80638 22.996 11.1648L22.9964 16.8174L21.6933 17.1667C21.1599 17.3096 20.8433 17.858 20.9863 18.3915C21.1293 18.9249 21.6776 19.2415 22.2111 19.0985L22.9966 18.888L22.9973 28.8172L21.6933 29.1667C21.1599 29.3096 20.8433 29.858 20.9863 30.3915C21.1293 30.9249 21.6776 31.2415 22.2111 31.0985L22.9974 30.8877L22.998 38.9189C22.998 39.4711 23.4458 39.9188 23.9981 39.9188C24.5504 39.9187 24.998 39.471 24.998 38.9187L24.9974 30.3517L38.1431 26.8285C38.6765 26.6855 38.9931 26.1372 38.8501 25.6037C38.7071 25.0702 38.1588 24.7537 37.6253 24.8967L24.9972 28.2812ZM28.3215 23.4194L38.2215 20.8294C38.7558 20.6896 39.0756 20.1432 38.9358 19.6089C38.7961 19.0746 38.2496 18.7548 37.7153 18.8945L27.8153 21.4845C27.281 21.6243 26.9612 22.1708 27.101 22.7051C27.2407 23.2394 27.7872 23.5592 28.3215 23.4194ZM31.1734 34.6965L28.2774 35.4725C27.744 35.6155 27.1956 35.2989 27.0527 34.7654C26.9097 34.2319 27.2263 33.6836 27.7598 33.5407L30.6558 32.7647C31.1892 32.6217 31.7376 32.9383 31.8805 33.4718C32.0235 34.0052 31.7069 34.5536 31.1734 34.6965Z" fill="#475569"></path> </g> </g> </g>
                        </svg>
                    </div>
                    <div className='w-2/3 bg-slate-100 flex justify-center flex-col items-center gap-1 p-4'>
                        <h4 className='text-slate-800 text-xl font-semibold'>Information</h4>
                        <p className='text-slate-600 text-center text-sm'>We provide more information as possible about a word with Hindi translation.</p>
                    </div>
                </div>

                {/* 2nd box */}
                <div className='flex rounded-sm ring-1 ring-slate-300 h-auto min-h-[130px] w-96'>
                    <div className='w-1/3 bg-slate-200 flex justify-center items-center'>

                        <svg fill="#475569" height="80" width="80" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M239.126,212.42188l-56-112a8.0001,8.0001,0,0,0-14.31055,0L147.11786,143.817a88.012,88.012,0,0,1-47.15222-16.89991A103.63885,103.63885,0,0,0,127.666,64H151.9707a8,8,0,0,0,0-16h-56V32a8,8,0,0,0-16,0V48h-56a8,8,0,1,0,0,16h87.63251a87.71319,87.71319,0,0,1-23.64032,52.34106A87.62936,87.62936,0,0,1,68.981,85.332a7.99985,7.99985,0,1,0-15.083,5.33789A103.55887,103.55887,0,0,0,75.9798,126.93945,87.52763,87.52763,0,0,1,23.9707,144a8,8,0,1,0,0,16A103.48489,103.48489,0,0,0,87.984,137.90955,104.14159,104.14159,0,0,0,139.42535,159.202l-26.60992,53.21985a8.00006,8.00006,0,0,0,14.31055,7.15625L140.915,192h70.11133l13.78906,27.57813a8.00006,8.00006,0,0,0,14.31055-7.15625ZM148.915,176l27.05566-54.11133L203.02637,176Z"></path> </g>
                        </svg>

                    </div>
                    <div className='w-2/3 bg-slate-100 flex justify-center flex-col items-center gap-1 p-4'>
                        <h4 className='text-slate-800 text-xl font-semibold'>Translation</h4>
                        <p className='text-slate-600 text-center text-sm'>Our goal is to give you the accurate translation of a English word in Hindi.</p>
                    </div>
                </div>

                {/* 3rd box */}
                <div className='flex rounded-sm ring-1 ring-slate-300 h-auto min-h-[130px] w-96'>
                    <div className='w-1/3 bg-slate-200 flex justify-center items-center'>
                        <svg height="90px" width="90px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 32" enableBackground="new 0 0 22 32" fill="#475569">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#475569" d="M16,27H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,28,7,28h9c0.276,0,0.5-0.224,0.5-0.5S16.276,27,16,27z"></path> <path fill="#475569" d="M16.5,29.5c0-0.276-0.224-0.5-0.5-0.5H7c-0.276,0-0.5,0.224-0.5,0.5S6.724,30,7,30h9 C16.276,30,16.5,29.776,16.5,29.5z"></path> <path fill="#475569" d="M9,31c-0.276,0-0.5,0.224-0.5,0.5S8.724,32,9,32h5c0.276,0,0.5-0.224,0.5-0.5S14.276,31,14,31H9z"></path> <path fill="#475569" d="M17,25.5v-0.611c0-2.534,0.926-5.049,2.677-7.274c1.52-1.93,2.323-4.245,2.323-6.697 C22,4.897,17.065,0,11,0c-0.415,0-0.838,0.023-1.255,0.069c-4.872,0.536-8.92,4.41-9.625,9.212 c-0.495,3.374,0.566,6.709,2.913,9.15C4.946,20.423,6,22.897,6,25.398V25.5C6,25.776,6.224,26,6.5,26h10 C16.776,26,17,25.776,17,25.5z M9,14H7.25c-0.965,0-1.75-0.893-1.75-1.84s0.785-1.779,1.75-1.779S9,11.09,9,12.037V14z M12,25h-2 V15h2V25z M16,25h-3V15h1.75c1.517,0,2.75-1.341,2.75-2.84s-1.233-2.779-2.75-2.779S12,10.538,12,12.037V14h-2v-1.963 c0-1.499-1.233-2.718-2.75-2.718S4.5,10.661,4.5,12.16S5.733,15,7.25,15H9v10H6.992c-0.105-2.623-1.246-5.188-3.238-7.262 C1.623,15.521,0.66,12.492,1.11,9.426C1.75,5.067,5.428,1.55,9.854,1.063C15.898,0.391,21,5.075,21,10.917 c0,2.226-0.729,4.327-2.108,6.078C17,19.399,16,22.128,16,24.889V25z M13,14v-1.963c0-0.947,0.785-1.718,1.75-1.718 s1.75,0.893,1.75,1.84S15.715,14,14.75,14H13z"></path> </g> </g>
                        </svg>
                    </div>
                    <div className='w-2/3 bg-slate-100 flex justify-center flex-col items-center gap-1 p-4'>
                        <h4 className='text-slate-800 text-xl font-semibold'>Example</h4>
                        <p className='text-slate-600 text-center text-sm'>We provide examples so you will know when and where to use the word properly.</p>
                    </div>
                </div>

            </div>


            <h3 className="md:text-2xl font-semibold text-slate-800 text-center mt-9">Explore Words by First Letter.</h3>
            <div className='flex justify-center p-4 gap-4 flex-wrap'>
                {listItems}
            </div>
        </div>
    )
}
