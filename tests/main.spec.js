import { expect } from "chai";
import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from "../src/main.js";

describe("Spotify Wrapper", () => {
  describe("Smoke tests", () => {
    it("should exists the search method", () => {
      expect(search).to.exist;
    });

    it("should exists the searchAlbuns method", () => {
      expect(searchAlbuns).to.exist;
    });

    it("should exists the searchArtists method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exists the searchTracks method", () => {
      expect(searchTracks).to.exist;
    });

    it("should exists the searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });
});
