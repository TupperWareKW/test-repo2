const UrlParser = {
    parseActiveWithCombiner() {
        const url = window.location.hash.slice(1).toLocaleLowerCase();
        return `/${url}`;
    }
}

export default UrlParser;