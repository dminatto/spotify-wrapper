import SpotifyWrapper from '../src/index'
import axios from 'axios'

describe('SpotifyWrapper Library', function () {
  it('should create an instance of SpotifyWrapper', () => {
    const spotifyWrapper = new SpotifyWrapper({})
    expect(spotifyWrapper).toBeTruthy()
  })

  it('should receive apiURL as an option', () => {
    const spotifyWrapper = new SpotifyWrapper({
      apiUrl: 'https://api.spotify.com',
    })
    expect(spotifyWrapper.url).toBe('https://api.spotify.com')
  })

  it('should use the default apiURL if not provided', () => {
    const spotifyWrapper = new SpotifyWrapper({})
    expect(spotifyWrapper.url).toBe('https://api.spotify.com')
  })

  it('should receive token as an option', () => {
    const spotifyWrapper = new SpotifyWrapper({
      token: 'token',
    })
    expect(spotifyWrapper.token).toBe('token')
  })

  describe('request method', () => {
    let spotifyWrapper: SpotifyWrapper
    beforeEach(() => {
      spotifyWrapper = new SpotifyWrapper({ token: 'token' })
    })

    it('should have request method', () => {
      expect(spotifyWrapper.request).toBeDefined()
    })

    it('should call axios when request', () => {
      spyOn(axios, 'get')
      spotifyWrapper.request('q=test')
      expect(axios.get).toHaveBeenCalled()
    })

    it('should call axios with right url passed', () => {
      spyOn(axios, 'get')
      spotifyWrapper.request('q=test')
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.spotify.comv1/search?q=test',
        {
          headers: {
            Authorization: "'Bearer token'",
            'Content-Type': 'application/json',
          },
        }
      )
    })

    it('should call axios with right headers passed', () => {
      spyOn(axios, 'get')
      spotifyWrapper.request('q=test')
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.spotify.comv1/search?q=test',
        {
          headers: {
            Authorization: "'Bearer token'",
            'Content-Type': 'application/json',
          },
        }
      )
    })
  })
})
