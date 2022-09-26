import { ref } from 'vue'
import axios from 'axios'

const getCameraList = () => {
    const url = 'http://192.168.2.15:5050/api/1.0/camera'
    const cameraList = ref(null)

    const load = async () => {
        await axios.get(url)
              .then(response => { cameraList.value = response.data.cameraList })
              .catch(error => console.error(error))
    }


    return { cameraList, load }
}

export default getCameraList