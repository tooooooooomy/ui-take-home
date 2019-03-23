export const REQUEST_AGENTS = 'REQUEST_AGENTS'
export const RECEIVE_AGENTS = 'RECEIVE_AGENTS'
export const SORT_AGENTS = 'SORT_AGENTS'

export const requestAgents = () => ({
  type: REQUEST_AGENTS,
})

export const receiveAgents = json => ({
  type: RECEIVE_AGENTS,
  agents: json,
})

export const sortAgents = orderBy => ({
  type: SORT_AGENTS,
  orderBy,
})

export const fetchAgents = () => (dispatch) => {
  const json = require('../resources/agents.json')
  const promise = new Promise((resolve) => {
    resolve(dispatch(receiveAgents(json)))
  })
  return promise
}
