import { ApplicationConfig } from '../../config'
import URI from 'urijs'
import { TaskEntity } from '../entites/task'

export type NotificationEvent = 'TaskStatus'

export interface NotificationMessage {
    event: NotificationEvent
    data: TaskEntity[]
}

export interface NotificationHandler {
    id: string
    onMessage: (message: NotificationMessage) => void
}

class WebsocketAPI {
    socket?: WebSocket;
    handlers:NotificationHandler[] = [];
    addHandler (handler : NotificationHandler) {
      console.log(`add handler id = ${handler.id}`)
      this.handlers = this.handlers.filter(it => it.id !== handler.id)
      this.handlers.push(handler)
      console.log(this.handlers)
      console.log(this.socket)
      if (this.socket) {
        this.socket.addEventListener('message', (event:any) => {
          this.handlers.forEach(handler => {
            handler.onMessage(JSON.parse(event.data))
          })
        })
      }
    }

    connect () {
      if (!(!this.socket || this.socket.readyState === WebSocket.CLOSED)) {
        return
      }
      const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
      if (!apiUrl) {
        return
      }
      let uri = new URI(apiUrl)
      uri = uri.scheme('ws')
      uri = uri.pathname('notification')
      const token = localStorage.getItem(ApplicationConfig.storeKey.token)
      if (token && token.length > 0) {
        uri = uri.addQuery('token', token)
      }
      const wsUri = uri.toString()
      this.socket = new WebSocket(wsUri)
    }
}

export const DefaultWebsocketAPI = new WebsocketAPI()
