import beaver from './images/beaver-icon.jpg';

const loadBeaver = () => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        //img.crossOrigin = 'Anonymous' // to avoid CORS if used with Canvas
        img.src = beaver
        img.onload = () => {
            resolve(img)
        }
        img.onerror = e => {
            reject(e)
        }
    })
}
export default loadBeaver