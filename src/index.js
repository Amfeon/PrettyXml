import PrettyXml from "./components/PrettyXml.vue"
import './assets/main.css'
export default {
    install: (app, options) =>{
        app.component("PrettyXml", PrettyXml)
    }
}