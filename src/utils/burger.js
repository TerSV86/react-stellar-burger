export const WebSocketStatus = {
    CONNECTING: 'CONNECTING ...',
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE'
}

export function getRelativeTimeString(date, lang) {
    const timeMs = new Date(date)
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)
    const cutoffs = [86400 * 30, 86400 * 365, Infinity]
    const units = ['day', 'week', 'month', 'year']
    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 86400;
    const rtf = new Intl.RelativeTimeFormat(lang, {
        numetric: 'auto'
    })
    const day = rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
    return (
        (day == "1 день назад") ? 'Сегодня' :
            (day == '2 дня назад') ? 'Вчера' : day
    )
}

export const statusOrder = (data) => {
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