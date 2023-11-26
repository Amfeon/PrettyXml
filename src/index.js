import PrettyXml from "./components/PrettyXml.vue"
import './assets/base.css'
export default {
    install: (app, options) =>{
        app.component("PrettyXml", PrettyXml)
    }
}