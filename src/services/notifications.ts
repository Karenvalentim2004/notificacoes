import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowList: true,
        shouldShowBanner: true,
        shouldSetBadge: false,
    })
})

export async function requestPermissaoNotificacao() {
    const { status } = await Notifications.requestPermissionsAsync()

    return status === 'granted'
}

//Notificações imediatas

export async function envioImediatoNotificacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "OLHA A MENSAGEMM 📢",
            body: "Esta mensagem é imediata"
        },
        trigger: null
    })
}

export async function envioDelayNotificacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Notificação atrasada...",
            body: "Passaram 5 segundos"
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 5
        }
    })
}

export async function envioSomNotificacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🔈Lembrete",
            body: "Esta notificação tem som",
            sound: "default"
        },
        trigger: null
    })
}

export async function cancelarTodasNotificacoes() {
    await Notifications.cancelAllScheduledNotificationsAsync()
}