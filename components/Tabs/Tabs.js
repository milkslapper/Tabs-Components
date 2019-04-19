class TabLink{
  constructor(tabNav,link){
    this.link = link
    this.tabContent = new TabContent (tabNav,this.link.dataset.tab)
    this.link.addEventListener('click',() => {
      this.tabContent.toggle()
    })
  
  }
  
}
class TabContent{
  constructor(tabNav,contentTabId){
    console.log('setup tab content',contentTabId)
    this.content = tabNav.querySelector( `.tabs-item[data-tab="${contentTabId}"]`)
  }
  toggle(){
    console.log('Clicked',this.content)
    this.content.classList.toggle('tabs-item-selected')
  }
}
const navigators = document.querySelectorAll('.tabs')
navigators.forEach(tabNav =>{
  const links = tabNav.querySelectorAll('.tabs-link')
  links.forEach(link => new TabLink(tabNav,link))
})
