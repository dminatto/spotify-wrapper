import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main.js';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Generic Search', () => {
  var fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exists the search method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
    });

    it('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should recive the correct url to fetch', () => {
      it('passing one type', () => {
        const artists = search('BTS', 'artist');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?query=BTS&type=artist'
        );

        const albums = search('PERSONA', 'album');
        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?query=PERSONA&type=album'
        );
      });

      it('passing more than one type', () => {
        const artists = search('BTS', ['artist', 'album']);

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?query=BTS&type=artist,album'
        );
      });
    });
  });
});
