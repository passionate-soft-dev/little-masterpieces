const handleTab = (event, id) => {
    let i, tabpanels, tabcontrols;
    tabpanels = document.getElementsByClassName('cs-tab-panel');
    for (i = 0; i < tabpanels.length; i ++) {
        tabpanels[i].style.display = 'none';
    }
    tabcontrols = document.getElementsByClassName('cs-tab-control');
    for (i = 0; i < tabcontrols.length; i ++) {
        tabcontrols[i].className = tabcontrols[i].className.replace(' active', '');
    }
    document.getElementById(id).style.display = 'block';
    event.currentTarget.className += ' active';
}