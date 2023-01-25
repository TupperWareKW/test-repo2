class WeatherEarthquakeSource {
    static async getCuaca(provinsi, kota) {
        const response = await fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${provinsi}/${kota}`);
        const responseJson = await response.json();
        console.log(document.querySelector('.cuaca-container'));
        document.querySelector('.cuaca-container').innerHTML = ''
        // this.getProvinsi();
        return responseJson;
    }

    static async getProvinsi() {
        const response = await fetch(`https://api.binderbyte.com/wilayah/provinsi?api_key=2c37d29493b6870ca7a0db15f0e7b94e434e210cc61135749ba4cf39fca82910`)
        const responseJson = await response.json();
        const formProvinsi = document.querySelector('#provinsi');
        responseJson.value.forEach(el => {
        formProvinsi.innerHTML += `
            <option value='${el.id}'>${el.name}</option>
        `})
        return responseJson;
    }    
}

export default WeatherEarthquakeSource;

