import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { supabase } from '@/lib/supabaseclient'
import { message, collection } from '@/utils/helpers'

export async function GET() {

    let { data, error } = await supabase.from('character').select('*')
    if (error)
        return NextResponse.json({ msg: message.noPage })

    return NextResponse.json({
        info: {
            count: 10,
            // next: page >= pages ? null : `${baseUrl}${req.path}?page=${parseInt(page) + 1}${qr}`,
            // prev: page < 2 ? null : `${baseUrl}${req.path}?page=${parseInt(page) - 1}${qr}`,
        },
        data,
    }, { status: 200 });
}

