const electron=require('electron');
const url=require('url');
const path=require('path');

const {app,BrowserWindow,Menu}=electron;

let mainWindow;
let addWindow;

// listen for the app ready
app.on('ready',()=>{
  // Create new window
  mainWindow=new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });
  //load html into window
  mainWindow.loadURL(url.format({
    pathname:path.join(__dirname,'main_window.html'),
    protocol:'file',
    slashes:true
  }));

  //Build menu from template

  const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
  mainWindow.on('closed',()=>{
    app.quit();
  });
});

//Handle Create add window
const createAddWindow=()=>{
  addWindow= new BrowserWindow({
    width:200,
    height:300,
    title:'Add new item',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });

  addWindow.loadURL(url.format({
    pathname:path.join(__dirname,'add_window.html'),
    protocol:'file',
    slashes:true
  }));

  //Garbage collection
  addWindow.on('close',()=>{
    addWindow=null;
  })
};

//Create menu template
const mainMenuTemplate=[
  {
    label:'File',
    submenu:[
      {
        label:'Add Item',
        click(){
          createAddWindow();
        }
      },
      {
        label:'Clear'
      },
      {
        label:'Quit',
        accelerator:process.platform==='darvin'?'Command+Q':'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];
if(process.env==='darvin'){
  mainMenuTemplate.unshift({});
}
if(process.env.NODE_ENV!=='production'){
  mainMenuTemplate.push({
    label:'DevTools',
    submenu:[
      {
        label:'Toogle DevTools',
        accelerator:process.platform==='darvin'?'Command+D':'Ctrl+D',
        click(item,focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role:'reload'
      }
    ]
  })
}
