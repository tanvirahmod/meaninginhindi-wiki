import Link from 'next/link'
import React from 'react'

export default function Breadcrumbs(props: { place: string, title: string, name: string }) {
    return (
        <div className="breadcrumb pb-6 flex flex-wrap items-center justify-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">

            <span itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link className='no-underline' href="/" itemProp="item" title="Home">
                    <span itemProp="name" className='text-slate-600 text-sm'>
                        Home
                    </span>
                </Link>
                <meta content="1" itemProp="position" />
            </span>


            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
            </svg>

            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link className='no-underline' href={props.place} itemScope itemType="https://schema.org/WebPage" itemID={`https://meaninginhindi.wiki${props.place}`} itemProp="item" title={props.name}>
                    <span className='text-slate-600 text-sm' itemProp="name">{props.name}</span>
                </Link>
                <meta content="2" itemProp="position" />
            </span>


            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>


            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className='text-sm'>
                    {props.title}
                </span>
                <meta content="3" itemProp="position" />
            </span>
        </div>
    )
}
