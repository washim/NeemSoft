var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './NeemSoft-win32-x64',
    outputDirectory: './resource',
    authors: 'Washim Ahmed',
    exe: 'NeemSoft.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));