# ReactVerbList

My first React project, covering sections 1-5 of the [React tutorials](https://www.udemy.com/react-the-complete-guide-incl-redux/) from Udemy.  This project is an extension of 
a practice example I did on [Stack Blitz](https://stackblitz.com/edit/section-four-practice).  The readme for that example can
be found [here](https://github.com/xmtrinidad/UdemyReact/blob/master/Section%20Four%20-%20Working%20with%20Lists%20and%20Conditionals/VerbList.md)

## New Things

As I mentioned, I originally did this project as a practice module on Stack Blitz.  There were several new things that I didn't do
for that project that I did on this one.  Below is a list of the new things I learned and the documentation for any problems I encountered:

**Table of Contents**   

[Adding Bootstrap](#adding-bootstrap)    
[Changing file extensions for VSCode](#changing-file-extensions-for-vscode)   
[Getting multiple inputs from a component](#getting-multiple-inputs-from-a-component)   
[Map Error](#map-error)

## Adding Bootstrap

Adding Bootstrap to a React app is similar to adding Bootstrap to an Angular app; install it via NPM using ```npm install --save bootstrap@next``` then import it ```import '../node_modules/bootstrap/dist/css/bootstrap.min.css';```

Bootstrap is imported into the **index.js** file that is created by default when creating a new React application with Create React App.

## Changing file extensions for VSCode

The main code editor I've been using for React is Visual Studio Code.  One issue I was interested ine was getting [Emmet](https://emmet.io/) to work with it.  Emmet is installed by default with Visual Studio Code and works as expected in HTML and CSS files.  However, since the HTML inside of Javascript is technically JSX, Emmet doesn't work.

I found the solution on [Stack Overflow](https://stackoverflow.com/questions/32832264/change-language-to-jsx-in-visual-studio-code).  The following line needs to be placed into workspace settings:
```
// Place your settings in this file to overwrite the default settings
{
    "files.associations": {
        "*.js": "javascriptreact"
    }
}
```

With this in place, any new JavaScript files created will default to "javascriptreact" syntax.  The other solution is to give use a .jsx extension instead of .js.  With JavaScript React syntax, Emmet works and even uses attributes like "className" and "htmlFor" instead of regular HTML syntax.

## Getting multiple inputs from a component

## Map Error
