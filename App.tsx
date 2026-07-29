import { StyleSheet, View } from 'react-native'
import React from 'react'

import Button from '@/components/Button'
import {
  requestPermissaoNotificacao,
  envioImediatoNotificacao,
  envioDelayNotificacao,
  cancelarTodasNotificacoes,
  envioSomNotificacao
} from '@/services/notifications'

import { vibracaoSimples } from '@/services/vibration'

export default function App() {
  async function fnExecutar(acao: () => Promise<void>) {
    const granted = await requestPermissaoNotificacao()
    if (!granted) {
      alert("Permissão de notificação negada")
      return;
    }


    await acao()
  }


  return (
    <View style={styles.container}>
      <Button title="Notificações Imediatas" onPress={() => fnExecutar(envioImediatoNotificacao)} />
      <Button title="Apos 5 segundos" onPress={() => fnExecutar(envioDelayNotificacao)} />
      <Button title="Notificação com Som" onPress={() => fnExecutar(envioSomNotificacao)} />
      <Button title="Cancelar Notificações" onPress={() => fnExecutar(cancelarTodasNotificacoes)} />
      <Button title="Vibração Simples" onPress={vibracaoSimples} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    paddingHorizontal: 20
  },
})