class ChatAPI {
  static url = import.meta.env.VITE_API_URL

  static getMessages = async (id, setMessages, setIsLoading) => {
    try {
      const response = await fetch(this.url + `?from=${id}`)
      const data = await response.json()
      setMessages((prev) => [...prev, ...data])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  static postMessage = async (message) => {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    const data = await response.json()
    return data
  }
}

export default ChatAPI
