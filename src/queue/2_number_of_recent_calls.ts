class RecentCounter {
  requests: number[]
  constructor() {
    this.requests = []
  }

  ping(t: number): number {
    this.requests.push(t)
    const range = [t - 3000, t]
    let response = 0
    this.requests.forEach(request => {
        if (request >= range[0] && request <= range[1]) {
            response +=1
        }
    })
    return response
  }
}