import axios from '../../axios-api';

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKSBYARTIST_SUCCESS = 'FETCH_TRACKSBYARTIST_SUCCESS';
export const FETCH_TRACKSBYALBUM_SUCCESS = 'FETCH_TRACKSBYALBUM_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});
export const fetchAlbumSuccess = album => ({type: FETCH_ALBUM_SUCCESS, album});
export const fetchTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});
export const fetchTracksByArtistSuccess = tracks => ({type: FETCH_TRACKSBYARTIST_SUCCESS, tracks});
export const fetchTracksByAlbumSuccess = tracks => ({type: FETCH_TRACKSBYALBUM_SUCCESS, tracks});

export const getArtists = () => {
    return dispatch => {
        return axios.get('/artists').then(
            response => {
                dispatch(fetchArtistsSuccess(response.data));
                console.log(response.data);
            });
    };
};

export const getAlbums = () => {
    return dispatch => {
        return axios.get('/albums').then(
            response => {
                dispatch(fetchAlbumsSuccess(response.data));
                console.log(response.data);
            });
    };
};

export const getAlbum = (id) => {
    return dispatch => {
        return axios.get('/albums/' + id).then(
            response => {
                dispatch(fetchAlbumSuccess(response.data));
                console.log(response.data);
            });
    };
};

export const getTracks = () => {
    return dispatch => {
        return axios.get('/tracks').then(
            response => {
                dispatch(fetchTracksSuccess(response.data));
                console.log(response.data);
            });
    };
};

export const getTracksByArtist = artistId => {
    return dispatch => {
        return axios.get('/tracks?artist='+artistId).then(
            response => {
                dispatch(fetchTracksByArtistSuccess(response.data));
                console.log(response.data);
            });
    };
};

export const getTracksByAlbum = (albumId) => {
    return dispatch => {
        return axios.get('/tracks?album='+albumId).then(
            response => {
                dispatch(fetchTracksByAlbumSuccess(response.data));
                console.log(response.data);
            });
    };
};

export const createArtist = artistData => {
    return dispatch => {
        return axios.post('/artists', artistData).then(
            response => {
                console.log(response.data);
            });
    };
};

export const createAlbum = albumData => {
    return dispatch => {
        console.log(albumData);
        return axios.post('/albums', albumData).then(
            response => {
                console.log(response.data);
            });
    };
};