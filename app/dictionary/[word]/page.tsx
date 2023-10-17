import React from 'react'
import { getArray, getWord } from '@/lib/words'
import { notFound } from 'next/navigation'
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbds';
import Play_It from '@/components/playIt';

// generate dynamic metadata-----------------
import type { Metadata } from 'next'

type Props = {
    params: { word: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {

    return {
        title: `${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} Meaning in Hindi (${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} का हिन्दी अनुवाद) | meaninginhindi.wiki`,
        description: `Meaning of ${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} in Hindi or Translation of ${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} in Hindi is given here. Read this full page to know more about this English word ${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} in Hindi langulage.`,
        alternates: {
            canonical: `https://meaninginhindi.wiki/dictionary/${params.word}`
        },
        openGraph: {
            title: `${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} Meaning in Hindi (${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} का हिन्दी अनुवाद) | meaninginhindi.wiki`,
            description: `Meaning of ${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} in Hindi or Translation of ${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} in Hindi is given here. Read this full page to know more about this English word ${params.word.replaceAll("-", " ").replace(params.word[0],params.word[0].toUpperCase())} in Hindi langulage.`,
            images: 'https://meaninginhindi.wiki/opengraph-image.png'
        },
    }
}
// dynamic metadata ends here-------------------

export default async function word({ params }: any) {
    const word1: any = await getWord(params.word.toLowerCase().replaceAll("%20","-"))
    // not found page my next13
    if (!word1) {
        notFound()
    }


    let ifpartsOfSpeech = word1?.partsOfSpeech.length > 0 ? true : false

    let ifmainMeaningExtraWords = word1?.mainMeaningExtraWords.length > 0 ? true : false
    let extraWordsplited
    if (ifmainMeaningExtraWords) {
        extraWordsplited = word1?.mainMeaningExtraWords.split(": ")[1].split(", ")
    }

    let ifExtraMeaning = word1?.extraMeanings.length > 0 ? true : false
    let extraMeaningSplited
    if (ifExtraMeaning) {
        extraMeaningSplited = word1?.extraMeanings.split("\n")
    }

    // marge array all others form words 
    const allForm = eval(word1?.formNoun)?.concat(eval(word1?.formAdjective), eval(word1?.formVerb), eval(word1?.formAdverb));
    const all_forms: any = await getArray(allForm)
    console.log(all_forms)


    // generate jsonLD for SEO
    const jsonLd = [{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Hindi translation or meaning of '${params.word}'`,
        "url": `https://meaninginhindi.wiki/dictionary/${params.word}`,
        "description": `Translation of '${params.word}' by meaninginhindi.wiki`,
        "isPartOf": {
            "@id": "https://meaninginhindi.wiki/#website"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.meaninginhindi.wiki/#website",
        "url": "https://www.meaninginhindi.wiki",
        "name": "MeaninginHindi Dictionary",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.meaninginhindi.wiki/dictionary/{search_term_string}?utm_campaign=sd&utm_medium=serp&utm_source=jsonld",
            "query-input": "required name=search_term_string"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": ["DefinedTermSet", "Book"],
        "@id": "https://www.meaninginhindi.wiki",
        "name": "Dictionary by meaninginhindi.wiki"
    },
    {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "@id": `https://www.meaninginhindi.wiki/dictionary/${params.word}`,
        "name": `${params.word}`,
        "inDefinedTermSet": "https://www.meaninginhindi.wiki/"
    }
    ]

    return (
        <main className='mx-auto h-auto rounded-lg p-6 px-10 prose prose-slate'>

            <Breadcrumbs place="/dictionary" name="Dictionary" title={`Hindi translation of ${word1.word.replaceAll("-", " ")}`} />

            <h1 className='text-2xl mb-0 lg:text-3xl text-slate-800 text-center'><span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span> Meaning in Hindi (<span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span> का हिन्दी अनुवाद)</h1>
            <div className='shadow-lg ring-1 ring-slate-200 p-2 mt-3 rounded-md'>
                <p className='flex items-center justify-center flex-wrap m-0'>
                    <span title='English Word'><b>{word1.word}</b>&nbsp;</span>
                    <Play_It theWord={`${word1.word}`} langCode="en-US" lang="English" />
                    <span title='Phonetic USA'>{word1.phoneticUS}&nbsp;</span>
                    <span title='Phonetic UK'>{word1.phoneticUK}&nbsp;</span>
                    {ifpartsOfSpeech && <span title='Parts of Speech'>{`(${word1.partsOfSpeech})`}:&nbsp;</span>}
                    <span title='Hindi Meaning'><b>{word1.meaning}</b>&nbsp;</span>
                    {word1.meaningPronounce && <span title='Hindi Meaning Pronunciation'>{`(${word1.meaningPronounce})`}&nbsp;</span>}
                </p>

                {ifmainMeaningExtraWords && (
                    <>
                        <div className='text-center flex flex-wrap justify-center m-0'>
                            {extraWordsplited?.map((single: string, index: number) => {
                                return (
                                    <span key={index}>
                                        <Link className='mr-3 decoration-violet-700 hover:text-violet-700' href={`/dictionary/${single.toLowerCase().replaceAll(" ", "-")}`}>{single.replaceAll("-", " ")}</Link>
                                    </span>
                                )
                            })}
                        </div>
                    </>
                )}
            </div>

            {ifExtraMeaning && (
                <div className='mt-5 p-3 rounded-md shadow-lg ring-1 ring-slate-200'>
                    <h2 className='text-1xl mb-0 lg:text-2xl m-0 font-bold text-slate-800'>Here are More Hindi Meanings of <span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span> with Similer English Words</h2>
                    {extraMeaningSplited?.map((single: string, index: number) => {
                        return (
                            <div className='py-3 w-full  flex flex-wrap  pl-2' key={index}>
                                <span className='text-slate-800 font-semibold'>{`${single.split(",")[0]},`}&nbsp;</span>
                                <span>{` ${single.split(": ")[0].split(", ")[1]}: `}&nbsp;</span>
                                {single.includes(": ") && (
                                    single.split(": ")[1].replace("​", "").split(",")?.map((s: string, index: number) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <Link className='mr-3 decoration-violet-700 hover:text-violet-700' href={`/dictionary/${s.toLowerCase().replaceAll(" ", "-")}`}>{s}</Link>
                                            </React.Fragment>
                                        )
                                    })
                                )}
                                <br />
                            </div>
                        )
                    })}
                </div>
            )}



            {all_forms[0] && <h2 className='text-1xl mb-0 mt-7 lg:text-2xl'>Other forms (parts of speech) of <span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span></h2>}
            {all_forms?.map((single: any, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <div className='shadow-lg ring-1 ring-slate-200 p-2 mt-3 rounded-md'>
                            <p className='flex items-center justify-center flex-wrap m-0'>
                                <span title='English Word'><b>{single.word}</b>&nbsp;</span>
                                <Play_It theWord={`${single.word}`} langCode="en-US" lang="English" />
                                <span title='Phonetic USA'>{single.phoneticUS}&nbsp;</span>
                                <span title='Phonetic UK'>{single.phoneticUK}&nbsp;</span>
                                {single.partsOfSpeech && <span title='Parts of Speech'>{`(${single.partsOfSpeech})`}:&nbsp;</span>}
                                <span title='Hindi Meaning'><b>{single.meaning}</b>&nbsp;</span>
                                {single.meaningPronounce && <span title='Hindi Meaning Pronunciation'>{`(${single.meaningPronounce})`}&nbsp;</span>}
                            </p>

                            <div className='text-center flex flex-wrap justify-center m-0'>
                                {single?.mainMeaningExtraWords?.split(": ")[1]?.split(", ")?.map((single: string, index: number) => {
                                    return (
                                        <span key={index}>
                                            <Link className='mr-3 decoration-violet-700 hover:text-violet-700' href={`/dictionary/${single.toLowerCase().replaceAll(" ", "-")}`}>{single.replaceAll("-", " ")}</Link>
                                        </span>
                                    )
                                })}
                            </div>

                            {single?.extraMeanings?.split("\n").length > 1 && (
                                <div className='mt-2 p-2 rounded-md [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-blue-500" shadow-lg ring-1 ring-slate-200'>
                                    <h3 className='m-0'>More Hindi Meanings of <span className='capitalize'>&apos;{single.word.replaceAll("-", " ")}&apos;</span> with Similer English Words</h3>
                                    {single?.extraMeanings?.split("\n")?.map((single: string, index: number) => {
                                        return (
                                            <div className='py-3 w-full  flex flex-wrap  pl-2' key={index}>
                                                <span className='text-slate-800 font-semibold'>{`${single.split(",")[0]},`}&nbsp;</span>
                                                <span>{` ${single.split(": ")[0].split(", ")[1]}: `}&nbsp;</span>
                                                {single.includes(": ") && (
                                                    single.split(": ")[1].replace("​", "").split(",")?.map((s: string, index: number) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <Link className='mr-3 decoration-violet-700 hover:text-violet-700' href={`/dictionary/${s.toLowerCase().replaceAll(" ", "-")}`}>{s.replaceAll("-", " ")}</Link>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                )}
                                                <br />
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                            <p className='text-center my-1 mt-4'>
                                See full Hindi meaning of&nbsp;
                                <Link href={`/dictionary/${single.word.toLowerCase().replaceAll(" ", "-")}`}>{single.word.replaceAll("-", " ")}</Link>.
                            </p>
                        </div>
                    </React.Fragment>
                )
            })}


            {word1.synonyms && (
                <>
                    <h3 className=''>Synonyms of <span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span></h3>
                    <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                        <p className='m-0 pl-2'>{word1.synonyms.replaceAll("-", " ")}</p>
                    </div>
                </>
            )}


            {word1.antonyms && (
                <>
                    <h3 className=''>Antonyms of <span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span></h3>
                    <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                        <p className='m-0 pl-2'>{word1.antonyms.replaceAll("-", " ")}</p>
                    </div>
                </>
            )}


            {word1.hypernyms && (
                <>
                    <h3 className=''>Hypernyms of <span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span></h3>
                    <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                        <p className='m-0 pl-2'>{word1.hypernyms.replaceAll("-", " ").replaceAll(";", ", ")}</p>
                    </div>
                </>
            )}


            {word1.hyponyms && (
                <>
                    <h3 className=''>Hyponyms of <span className='capitalize'>&apos;{word1.word.replaceAll("-", " ")}&apos;</span></h3>
                    <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
                        <p className='m-0 pl-2'>{word1.hyponyms.replaceAll("-", " ").replaceAll(";", ", ")}</p>
                    </div>
                </>
            )}


    {word1.examples && <h3>English examples for &apos;{word1.word}&apos;</h3>}
    {word1.examples && (
        <div className='shadow-lg ring-1 ring-slate-200 p-2 pl-4 mt-3 rounded-md'>
        {word1?.examples?.split("--------")?.map((s: string, index: number) => {
            return (
                <React.Fragment key={index}>
                    <h4 className='m-0 font-bold text-slate-800'>In all examples here, &apos;{word1.word}&apos; used as a {s.split("))):")[0]?.replaceAll("(((", "").split(". ")[1]}</h4>
                    <ol>
                    {s.split("))):")[1]?.split("\n")?.slice(0, 11)?.map((s: string, index: number) => {
                        return (
                            <React.Fragment key={index}>

                                {s.split(")))")[1] && (

                                <li dangerouslySetInnerHTML={{ __html: `<p className='m-0'>${s.split(")))")[1]?.replace(`${word1.word}`, `<b>${word1.word}</b>`)}</p>` }} />

                                )}

                            </React.Fragment>
                        )
                    })}
                </ol>
                </React.Fragment>
            )
        })}
        </div>
    )}






            <div className='p-7 flex justify-between w-full'>
                <span>Previous:  <Link className='text-violet-700' href={`/dictionary/${word1.nextWord}`}>{word1.nextWord.toLowerCase().replaceAll("-", " ")}</Link></span>
                <span>Next:  <Link className='text-violet-700' href={`/dictionary/${word1.prevWord}`}>{word1.prevWord.toLowerCase().replaceAll("-", " ")}</Link></span>
            </div>

            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* JSON-LD Ends... */}
        </main>
    )
}
