import { NextResponse } from 'next/server'
import { baseUrl } from '@/utils/helpers'

export function GET() {
    return NextResponse.json({
        characters: `${baseUrl}/character`,
        locations: `${baseUrl}/animals`,
        episodes: `${baseUrl}/seasons`,
    })
}