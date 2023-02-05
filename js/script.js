import { Router } from "./router.js"

const btnHomePage = document.querySelector('nav a:nth-child(2)')
const btnUniversePage = document.querySelector('nav a:nth-child(3)')
const btnExplorationPage = document.querySelector('nav a:nth-child(4)')
const contentHomePage = document.querySelector('.content')
const backgroundPage = document.querySelector('.home')

const router = new Router()

router.add("/", "../pages/home.html")
router.add("/universe", "../pages/universe.html")
router.add("/exploration", "../pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function clickPageHome() {
  btnUniversePage.classList.remove('selected')
  btnExplorationPage.classList.remove('selected')
  btnHomePage.classList.add('selected')
  contentHomePage.classList.remove('hide')
  backgroundPage.classList.remove('universe')
  backgroundPage.classList.remove('exploration')
}
function clickPageUniverse() {
  btnHomePage.classList.remove('selected')
  btnUniversePage.classList.add('selected')
  btnExplorationPage.classList.remove('selected')
  contentHomePage.classList.add('hide')
  backgroundPage.classList.add('universe')
  backgroundPage.classList.remove('exploration')
}
function clickPageExploration() {
  btnHomePage.classList.remove('selected')
  btnUniversePage.classList.remove('selected')
  btnExplorationPage.classList.add('selected')
  contentHomePage.classList.add('hide')
  backgroundPage.classList.remove('universe')
  backgroundPage.classList.add('exploration')
}

btnHomePage.addEventListener('click', clickPageHome)
btnUniversePage.addEventListener('click', clickPageUniverse)
btnExplorationPage.addEventListener('click', clickPageExploration)