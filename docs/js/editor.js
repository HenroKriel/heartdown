let unicode_dict = {'R': 'ℝ', 'Z': 'ℤ', 'x': '×', 'times': '×', 'inf': '∞', 'in': '∈', 'sum': '∑',
                             'had': '∘', 'kro': '⊗', 'dot': '⋅', 'T': 'ᵀ', '^T': 'ᵀ', 'par': '∂', 'emp': '∅',
                             'arr': '→', 'int': '∫', 'dbl': '‖', '|': '‖', 'pi': 'π', 'sig': 'σ', 'rho': 'ρ',
                             'phi': 'ϕ', 'theta': 'θ', 'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta':'δ', 'epsilon': 'ε',
                             'zeta':'ζ', 'eta':'η', 'iota':'ι', 'kappa':'κ', 'lambda':'λ', 'mu':'μ', 'nu':'ν', 'xi':'ξ', 'omicron':'ο',
                             'sigma':'σ', 'tau':'τ', 'upsilon':'υ', 'chi':'χ', 'psi':'ψ', 'omega':'ω',
                             'u0': '₀', 'u1': '₁', 'u2': '₂', 'u3': '₃', 'u4': '₄', 'u5': '₅', 'u6': '₆', 'u7': '₇', 'u8': '₈', 'u9': '₉',
                             '_0': '₀', '_1': '₁', '_2': '₂', '_3': '₃', '_4': '₄', '_5': '₅', '_6': '₆', '_7': '₇', '_8': '₈', '_9': '₉',
                             's0': '⁰', 's1': '¹', 's2': '²', 's3': '³', 's4': '⁴', 's5': '⁵', 's6': '⁶', 's7': '⁷', 's8': '⁸', 's9': '⁹', 's-1': '⁻¹', '^-1': '⁻¹',
                             '^0': '⁰', '^1': '¹', '^2': '²', '^3': '³', '^4': '⁴', '^5': '⁵', '^6': '⁶', '^7': '⁷', '^8': '⁸', '^9': '⁹',
                             '_a': 'ₐ', '_e': 'ₑ', '_h': 'ₕ', '_i': 'ᵢ', '_j': 'ⱼ', '_k': 'ₖ',
                             '_l': 'ₗ', '_m': 'ₘ', '_n': 'ₙ', '_o': 'ₒ', '_p': 'ₚ', '_s': 'ₛ', '_t': 'ₜ', '_u': 'ᵤ',
                             '_v': 'ᵥ', '_x': 'ₓ', '1': '𝟙', 'cdot': '⋅', 'nabla': '∇',
                             'sqrt': '√', '+-': '±', '<=': '≤', '<=>': '⇔', '>=': '≥', '1/2': '½',
                             '1/3': '⅓', '1/4': '¼', '1/5': '⅕', '1/6': '⅙', '1/7': '⅐', '1/8': '⅛', '1/9': '⅑', '1/10': '⅒',
                             '2/3': '⅔', '2/5': '⅖', '3/4': '¾', '3/5': '⅗', '3/8': '⅜', '4/5': '⅘', '5/6': '⅚', '5/8': '⅝', '7/8': '⅞',
                             'heart': '❤️', 'iheartla': 'I❤️LA',
                             'le':'≤', 'ge':'≥', 'ne': '≠', 'notin':'∉', 'div':'÷', 'nplus': '±',
                             'linner': '⟨', 'rinner':'⟩', 'num1': '𝟙',
                             'hat': '\u0302', 'bar': '\u0304', 'lfloor': '⌊', 'rfloor': '⌋'
                             };
let preEqCode = '';
let preTestCode = '';
let curFigure = '';
let curHtml = '';
let curFileName = '';
let msgTimeout = null;
let latestSource = '';
function checkBrowserVer(){
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;
    var validBrowser = false;
    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!=-1)
            fullVersion = nAgt.substring(verOffset+8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset+5);
    }
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset+7);
        validBrowser = true;
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1)
            fullVersion = nAgt.substring(verOffset+8);
        }
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset+8);
        validBrowser = true;
    }
    // In most other browsers, "name/version" is at the end of userAgent
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
            (verOffset=nAgt.lastIndexOf('/')) )
    {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1)
        fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
        fullVersion=fullVersion.substring(0,ix);

    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion,10);
    }
    let result = false;
    if (validBrowser){
        result = true;
        msg = "Valid browser!";
    }
    else{
        msg = "You are using " + browserName + ". Please use Chrome or Firefox.";
    }
    console.log(msg);

    // Also check for a secure context.
    // UPDATE: This isn't needed.
    /*
    if( !window.isSecureContext ) {
        result = false;
        msg = "This is not a secure context. You must use 'https://' or 'http://localhost'."
        console.log(msg);
    }
    */

    // Make sure we're not running from a file: URL (if the user double-clicked index.html)
    // Source: https://stackoverflow.com/questions/3920892/how-to-detect-if-a-web-page-is-running-from-a-website-or-local-file-system
    /// It turns out we don't need a secure context.
    // if( !window.isSecureContext ) {
    /// But a file: URL won't work.
    if( window.location.protocol === "file:" ) {
        result = false;
        msg = "Please run via a local webserver. Try `python3 -m http.server` and then browse to 'http://localhost:8000/'."
        console.log(msg);
    }

    return [ result, msg ];
}

function isChrome(){
    let nAgt = navigator.userAgent;
    if (nAgt.indexOf("Chrome")!=-1) {
        return true;
    }
    return false;
}

 async function initPyodide(){
    await loadPyodide({
          indexURL : self.location.origin + "/js/pyodide/"
        });
    let wheel = "./linear_algebra-0.0.1-py3-none-any.whl";
    let tatsu = "./TatSu-4.4.0-py2.py3-none-any.whl";
    let pybtex = "./pybtex-0.24.0-py2.py3-none-any.whl";
    let PyYAML = "./PyYAML-6.0-cp38-cp38-macosx_10_9_x86_64.whl";
    pythonCode = `
    import micropip
    micropip.install('appdirs')
    micropip.install('regex')
    micropip.install('sympy')
    micropip.install('six')
    micropip.install('setuptools')
    micropip.install('scipy')
    micropip.install('numpy')
    micropip.install('${PyYAML}')
    micropip.install('${pybtex}')
    micropip.install('${tatsu}')
    micropip.install('${wheel}')
    `
    await pyodide.loadPackage(['micropip']);
    await pyodide.runPython(pythonCode);
    activateBtnStatus();
}

async function background(source){
    try {
        const {results, error} = await asyncRun(source);
        activateBtnStatus();
        if (results) {
            console.log('pyodideWorker return results: ', results);
            if (Array.isArray(results)){
              updateEditor(results);
            }
            else{
                console.log(results)
                updateError(results);
            }
        } else if (error) {
            updateError(error);
            console.log('pyodideWorker error: ', error);
        }
    }
    catch (e){
        console.log(`Error in pyodideWorker at ${e.filename}, Line: ${e.lineno}, ${e.message}`)
        activateBtnStatus();
    }
}

function onLoad(){
    postData(`http://${window.location.hostname}:${window.location.port}/file`, { type: "init"})
      .then(data => {
          if (data.ret === 0){
            let editor = ace.edit("editor");
            editor.setValue(data.content, 1);
            latestSource = data.content;
          }
     });
}

function convert(input) {
    pickIframe();
    // output.innerHTM = `<iframe srcdoc=`${input}`></iframe>`;
    // MathJax.texReset();
    // var options = MathJax.getMetricsFor(output);
    // options.display = 1;
    // MathJax.tex2chtmlPromise(input, options).then(function (node) {
    //     output.appendChild(node);
    //     MathJax.startup.document.clear();
    //     MathJax.startup.document.updateDocument();
    // }).catch(function (err) {
    //     output.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
    // }).then(function () {
    // });
}

function pickIframe() {
    const req = new XMLHttpRequest();
    req.open("get", "./scene.html", true);
    try {
        req.send(null);
        //show scene if file exists
        showIframe("./scene.html");
    }
    catch(e) {
        showIframe(`./${curFileName}.html`)
    }
}

function showIframe(filename){
    output = document.getElementById('output');
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    var iframe = document.createElement('iframe');
    iframe.setAttribute("id", "res");
    iframe.src = encodeURI(filename);
    output.appendChild(iframe);
    // iframe.contentWindow.document.open();
    // iframe.contentWindow.document.write(curHtml);
    // iframe.contentWindow.document.close();
}

function reloadIframe(){
    cur_if = document.getElementById('res');
    cur_if.contentWindow.location.reload();
}

function updateEditor(code) {
    showMsg('Compile succeeded');
    // var cpp = ace.edit("cpp");
    // cpp.session.setValue(code[2]);
    // var python = ace.edit("python");
    // python.session.setValue(code[1]);
    curHtml = code[0];
    convert(code[0]);
    // var matlab = ace.edit("matlab");
    // matlab.session.setValue(code[3]);
    // reset UI
    activateBtnStatus();
}

function updateError(err) {
    showMsg(err, true);
    activateBtnStatus();
}

function updateRunError(err) {
    showMsg(err, true);
    activateRunBtnStatus();
}

function runFunction(){
    var libCode = ace.edit("python").getValue();
    var test = ace.edit("test").getValue();
    pythonCode = libCode + test;
    setTimeout(function(){
        try {
            pyodide.runPython(pythonCode);
            showMsg('Run succeeded');
            // reset UI
            activateRunBtnStatus();
        }
        catch (error){
            console.log('Run error!');
            updateRunError('Run error!');
        }
        }, 1000);
}

function compileFunction(){
    var iheartla = ace.edit("editor");
    var source = iheartla.getValue();
    latestSource = source;
    // console.log(source)
//     pythonCode = `
// import linear_algebra.iheartla.la_parser.parser
// from linear_algebra.app import process_input
// source_code = r"""${source}"""
// #code = process_input
// #code = linear_algebra.iheartla.la_parser.parser.compile_la_content(source_code)
// code = process_input(source_code)
// #print(code)
// `
    setTimeout(function(){
        try {
            // pyodide.runPython(pythonCode);
            // let code = pyodide.globals.get('code');
            // // convert(code);
            // if (typeof code === 'string'){
            //     updateError(code);
            // }
            // else{
            //     updateEditor(code.toJs());
            // }
            postData(`http://${window.location.hostname}:${window.location.port}/handler`, { input:  source})
              .then(data => {
                  if (data.ret === 0){
                      curFileName = data.name;
                      updateEditor(data.res);
                  }
                  else{
                      console.log(`data.expr is ${data.expr}`);
                      console.log(`data.msg is ${data.msg}`);
                      scrollToText(data.expr);
                      showMsg(data.msg, true);
                      activateBtnStatus();
                  }
                  // It has to wait for iframe loading, any better way?
                  setTimeout(function(){
                    document.getElementById("res").contentWindow.handleFigure(data.fig);
                  }, 1000);
                  $('#loading').modal('hide');
             });
        }
        catch (error){
            console.log('Compile error!');
            updateError('Compile error!');
            $('#loading').modal('hide');
        }
        }, 1000);
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}


function onEditEquation(raw_text){
    preEqCode = decodeURIComponent(escape(window.atob(raw_text)));
    console.log(`Received: ${raw_text}`);
    // document.getElementById("equation").innerHTML = raw_text;
    let equation = ace.edit("equation");
    equation.setValue(preEqCode, 1);
    $('#eqEditor').modal('show');
    equation.session.on('change', onEditIhla);
}

function clickCompile(){
    hideMsg();
    $('#loading').modal('show');
    try {
        document.getElementById("compile").disabled = true;
        document.getElementById("compile").innerHTML = `<i id="submit_icon" class="fa fa-refresh fa-spin"></i> Compiling`;
        compileFunction();
    } catch (error) {
        console.error(error);
        activateBtnStatus();
    }
    finally {
        $('#loading').modal('hide');
    }
}

function clickRun(){
    scrollToText('d = a - c');
    // hideMsg();
    // try {
    //     document.getElementById("run").disabled = true;
    //     document.getElementById("run").innerHTML = `<i id="run_icon" class="fa fa-refresh fa-spin"></i> Running`;
    //     runFunction();
    // } catch (error) {
    //     console.error(error);
    //     activateRunBtnStatus();
    // }
    // finally {
    // }
}

function onCancelUpdateEq() {
    clearEq();
}


function findLineNumber(editor, text) {
    let lines = editor.session.doc.getAllLines();
    let textLineNumber = [];
    for (let i = 0, l = lines.length; i < l; i++) {
        if (lines[i].indexOf(text) !== -1){
            textLineNumber.push(i);
        }
    }
    return textLineNumber
}

function scrollToText(text) {
    var Range = ace.require("ace/range").Range;
    let editor = ace.edit("editor");
    let line = findLineNumber(editor, text);
    editor.scrollToLine(line, true, true, null);
    var range = new Range(line[0], 0, line[0]+1, 0);
    console.log(`click line: ${line[0]}, `);
    editor.session.addMarker(range, "error", "text");
}

function removeMarkers() {
    let editor = ace.edit("editor");
    const prevMarkers = editor.session.getMarkers();
    if (prevMarkers) {
      const prevMarkersArr = Object.keys(prevMarkers);
      for (let item of prevMarkersArr) {
        editor.session.removeMarker(prevMarkers[item].id);
      }
    }
}

function clearEq() {
    let equation = ace.edit("equation");
    $('#eqEditor').modal('hide');
    equation.setValue('', 1);
}

function onUpdateEq() {
     let equation = ace.edit("equation");
     content = equation.getValue();
     let editor = ace.edit("editor");
     latestSource = latestSource.replace(preEqCode, content);
     // console.log(`source is ${source}`);
     $('#eqEditor').modal('hide');
     clearEq();
     editor.setValue(latestSource, 1);
     // same as manually clicking
     clickCompile();
}

function onUpdatePython() {
    $('#loading').modal('show');
    let python = ace.edit("python");
    content = python.getValue();
    let editor = ace.edit("editor");
    latestSource = latestSource.replace(preTestCode, content);
    $('#testEditor').modal('hide');
    clearTest();
    editor.setValue(latestSource, 1);
    // same as manually clicking
    // clickCompile();
    postData(`http://${window.location.hostname}:${window.location.port}/file`, { src:  curFigure, type:"run", source: content})
      .then(data => {
          $('#loading').modal('hide');
          console.log(`data.ret:${data.ret}`);
          if (data.ret === 0){
              // refresh iframe
              console.log("success");
              reloadIframe();
          }
          else{
              // error
              console.log(`error is ${data.msg}`);
              $('#loading').modal('hide');
              document.getElementById("res").contentWindow.updateFigure(curFigure, data.msg, true);
          }
     });
}

function onCancelUpdatePython() {
    clearTest();
}

function clearTest() {
    let python = ace.edit("python");
    $('#testEditor').modal('hide');
    python.setValue('', 1);
}

function onClickFigure(ele, name){
    console.log(`you clicked ${name}`);
    curFigure = name;
    postData(`http://${window.location.hostname}:${window.location.port}/file`, { src:  name, type: "get"})
      .then(data => {
          console.log(`data is ${data.res}`);
        let python = ace.edit("python");
        preTestCode = data.res;
        python.setValue(data.res, 1);
        $('#testEditor').modal('show');
     });
}

function clickCopy() {
    // Base the URL off the current one.
    const url = new URL(window.location.href);
    const source = editor.getValue();
    url.searchParams.set( "code", source );
    
    navigator.clipboard.writeText( url.toString() ).then(function() {
        /* clipboard successfully set */
        showMsg( "Copied a shareable code URL to the clipboard." );
    }, function() {
        /* clipboard write failed */
        showMsg( "Failed to copy to the clipboard." );
    });
    
    
    
}

function showMsg(msg, error=false){
    if (msgTimeout){
        clearTimeout(msgTimeout);
    }
    msg = msg.replaceAll('\n', '<br>')
    let el = document.getElementById("msg");
    el.hidden = false;
    el.innerHTML = msg;

    // Alert types: https://getbootstrap.com/docs/4.0/components/alerts/
    // Edit class: https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
    el.classList.remove('alert-primary');
    el.classList.remove('alert-danger');
    if(error) {
        el.classList.add('alert-danger');
    } else {
        // notice, auto hide
        el.classList.add('alert-primary');
        msgTimeout = setTimeout(hideMsg, 2000);
    }
    MathJax.typesetPromise([el]).then(() => {
      // the new content is has been typeset
    });
}

function hideMsg(){
    document.getElementById("msg").hidden = true; document.getElementById("msg").innerHTML = '';
}

function setBtnTitle(text){
    document.getElementById("compile").innerHTML = `<i id="submit_icon" class="fa fa-refresh"></i> ` + text;
}

function setRunBtnTitle(text){
    document.getElementById("run").innerHTML = `<i id="run_icon" class="fa fa-refresh"></i> ` + text;
}

function initBtnStatus(){
    document.getElementById("compile").disabled = true;
    document.getElementById("compile").innerHTML = `Initializing...`;
}

function activateBtnStatus(){
    document.getElementById("compile").disabled = false;
    setBtnTitle("Compile");
}

function activateRunBtnStatus(){
    document.getElementById("run").disabled = false;
    setRunBtnTitle("Run");
}

function onEditIhla(e){
    hideMsg();
    removeMarkers();
    let editor = ace.edit("editor");
    substitute(editor);
    let equation = ace.edit("equation");
    substitute(equation);
}

function substitute(editor){
    for (let key in unicode_dict) {
        let old_str = '\\' + key + ' ';
        let result = editor.find(old_str);
        if (result){
            editor.replaceAll(unicode_dict[key]);
            editor.gotoLine(result.start.row+1, result.start.column+unicode_dict[key].length)
            editor.clearSelection();
            break;
        }
    }
}

// Set the contents of the code editor to a `code` parameter if present.
function loadCodeFromURLParameter() {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if( code !== null ) {
        // If this is called after the ace editor is created, then we need
        // to set the code a different way.
        document.getElementById("editor").innerHTML = code;
    }
}

function captureHotKeys() {
    // https://stackoverflow.com/questions/93695/best-cross-browser-method-to-capture-ctrls-with-jquery
    window.addEventListener( 'keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
            case 'r':
                event.preventDefault();
                clickCompile();
                break;
            }
        }
    });
}
