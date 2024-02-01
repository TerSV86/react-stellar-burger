import { burgerApiConfig, headers } from "./burger-api"
import { TIngredient } from "./type"


export const WebSocketStatus = {
    CONNECTING: 'CONNECTING ...',
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE'
}

export function getRelativeTimeString(date: string, lang: string): string {
    const timeMs: number = new Date(date).getTime()
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)
    const cutoffs = [86400 * 30, 86400 * 365, Infinity]
    const units: ['day', 'week', 'month', 'year'] = ['day', 'week', 'month', 'year']
    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 86400;
    const rtf = new Intl.RelativeTimeFormat(lang, {
        numeric: 'auto'
    })
    const day = rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
    return (
        (day == "1 день назад") ? 'Сегодня' :
            (day == '2 дня назад') ? 'Вчера' : day
    )
}

export const statusOrder = (data: string): string | null => {
    switch (data) {
        case 'done':
            return data = 'Выполнен'
        case 'created':
            return data = 'Создан'
        case 'pending':
            return data = 'Готовится'
        default:
            return null
    }
}

export const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
export const wsUrlHistoryOrders = 'wss://norma.nomoreparties.space/orders';


export type TOptionsFetch = {
    method: 'GET' | 'POST';   
    headers: {[key: string]: string | null;};    
}

export const optionsFetchWithRefresh = {
    method: 'GET',    
    headers: headers,   
}

export const optionsFetchWithRefreshPostOrders = (selectIngredient: TIngredient) => {
    return ({
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            'ingredients': selectIngredient
        })
    })
}

