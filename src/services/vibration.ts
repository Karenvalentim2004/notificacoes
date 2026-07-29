import { Vibration } from 'react-native';

export function vibracaoSimples() {
    Vibration.vibrate()
    console.log('Vibração simples')
}

export function vibracaoLonga() {
    Vibration.vibrate(2000)
    console.log('Vibração longa')
}

export function vibracaoRepeat() {
    Vibration.vibrate([2000, 300, 400, 500], true)
    console.log('Vibração repetida')
}

export function vibracaoCancelar() {
    Vibration.cancel()
    console.log('Vibração cancelada')
}