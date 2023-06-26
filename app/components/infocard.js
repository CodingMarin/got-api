'use client'

import Image from 'next/image'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function InfoCard({ picture, status, name, description, id }) {
    const router = useRouter()

    return (
        <div class="info-card">
            <span class="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" stroke-width="0" fill="currentColor"></path>
                </svg>
            </span>
            {/* <h4><Link href={`/api/character/${id}`}>{name}</Link></h4> */}
            <button type='button' onClick={() => router.push(`/api/character/${id}`)}>{name}</button>
            <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <div class="shine"></div>
            <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>

                    <div class="tile tile-5"></div>
                    <div class="tile tile-6"></div>
                    <div class="tile tile-7"></div>
                    <div class="tile tile-8"></div>

                    <div class="tile tile-9"></div>
                    <div class="tile tile-10"></div>
                </div>

                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
                <Image
                    className='picture'
                    src={picture}
                    alt='Daenerys Targaryen'
                    width={275}
                    height={210}
                    quality={100}
                />
            </div>
        </div>
    )
}