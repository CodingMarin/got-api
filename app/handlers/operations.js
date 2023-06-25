import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseclient'
import { message } from '@/utils/helpers'

export async function getById(model, id) {

    //If the param is a comma-separated sring
    if (typeof id == 'string' && id.includes(',')) {
        const idList = id.split(',')

        let { data, error } = await supabase.from(model).select('*').in('id', idList)
        if (error) {
            return NextResponse.json({ msg: message.badArray }, { status: 404 })
        } else if (data) {
            return NextResponse.json({ data }, { status: 200 })
        }
    }

    const { data, error } = await supabase.from(model).select('*').eq('id', id).limit(1)
    if (error) {
        return NextResponse.json({ msg: message.badParam }, { status: 500 })
    }

    return NextResponse.json(data, { status: 200 })
}
