import { Router } from "./router";

const router = new Router()
router.add('/', '/pages/index.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploracao', '/pages/explorer.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


