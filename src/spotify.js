export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "9dd3a998fc7144dc8ca4acaf2b9fca3e";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFormUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accesssTokem=mysupersecretkey&name=sonny
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
