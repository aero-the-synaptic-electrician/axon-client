// unobfuscated by Aero, (c) ur mum

/* custom css */

! function () {
	var t = document.createElement("style");
	t.textContent = '@import url(https://fonts.googleapis.com/css?family=Hind+Madurai:500|Nunito);.pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:"";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% - -1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes tada{0%{animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{animation-timing-function:ease-in;transform:scale(1.5)}72%{animation-timing-function:ease-out;transform:scale(1)}81%{animation-timing-function:ease-in;transform:scale(1.24)}89%{animation-timing-function:ease-out;transform:scale(1)}95%{animation-timing-function:ease-in;transform:scale(1.04)}to{animation-timing-function:ease-out;transform:scale(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% - -1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% - -1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% - -1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:"";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% - -1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:"";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#5f85db!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#5f85db}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#5f85db;stroke:#5f85db}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#5f85db!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#5f85db}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#5f85db!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#90b8f8;background-color:#90b8f8!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% - -1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}#chatbox-container,.fade-box,.swal2-popup{box-shadow:0 0 4px 2px #000!important}#chatbox-container{position:absolute;display:flex;flex-direction:column;width:440px;height:200px;bottom:0;left:0;padding:10px;background:rgba(0,0,0,.45);font-size:14px;border-radius:4px}#chatbox-container #message-list{flex:1;overflow:auto;margin-bottom:5px}#chatbox-container input{font-size:14px;border:0;outline:0;background:transparent;width:100%}.chatbox-message{overflow:hidden}.chatbox-message .sender{white-space:nowrap;margin-right:5px}.chatbox-message .text{word-break:break-word;user-select:text}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon:before{display:flex;align-items:center;font-size:2em;font-weight:700}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-popup.swal2-toast .swal2-icon:before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em #121212}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.65)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:auto;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#121212;font-family:inherit;font-size:15px}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#dadada;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-radius:100%;border:.25em solid transparent;background-color:transparent!important;color:transparent;cursor:default;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm:after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-radius:50%;border:3px solid #999;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#5f85db;color:#fff;font-size:15px}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:rgba(0,0,0,.5);color:#fff;font-size:15px}.swal2-styled:focus{outline:none;box-shadow:0 0 0 2px #fff,0 0 0 4px #121212}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:transparent;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:transparent;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#dadada;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:5px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:rgba(0,0,0,.5);border-radius:.1875em;background:rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:15px}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:rgba(0,0,0,.5);outline:none;box-shadow:none}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:5px;background:rgba(0,0,0,.5)}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:15px;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:rgba(0,0,0,.5);font-size:15px}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,.5);color:inherit;font-size:15px}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:rgba(0,0,0,.5);color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:15px}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message:before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon:before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#121212}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#121212;color:#121212}.swal2-icon.swal2-warning:before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info:before{content:"i"}.swal2-icon.swal2-question{border-color:#121212;color:#121212}.swal2-icon.swal2-question:before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark:before{content:"ØŸ"}.swal2-icon.swal2-success{border-color:#121212}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{animation:swal2-show .3s}.swal2-show.swal2-noanimation{animation:none}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0deg)}}@keyframes swal2-toast-hide{to{transform:rotate(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}to{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}to{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}to{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}to{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - 1.25em);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.65)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container,body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}#swal2-content{margin-bottom:10px!important}.swal2-input{min-width:350px;margin:0 0 10px!important}.swal2-title{text-shadow:1px 1px 2px #000}body.swal2-toast-shown .swal2-container.swal2-top{top:5%}.swal2-popup .swal2-styled:focus{box-shadow:none}@keyframes swal2-show{0%{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}}@keyframes swal2-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.93)}}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:grey}::-webkit-scrollbar-track{background:rgba(0,0,0,.5)}.hide-captcha-badge .grecaptcha-badge{visibility:hidden}.fade-box{background:#121212;border-radius:4px}#overlay{background:radial-gradient(rgba(0,17,33,.75) 300px,rgba(0,0,0,.75));position:fixed;top:0;bottom:0;left:0;right:0}body{overflow:hidden;margin:0;padding:0;color:#dadada}#canvas{display:block;width:100%;height:100%;outline:none}*{font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a{text-decoration:none;color:#dadada}p{margin:0}.preload{position:absolute;font-family:Hind Madurai,sans-serif;opacity:0;width:0;height:0}.disabled-content{pointer-events:none;opacity:.4}.vanis-list-item{display:flex;user-select:none;cursor:pointer;padding:10px;border-bottom:2px solid #000}.vanis-list-item:hover{background:rgba(0,0,0,.2)}input[type=text]{display:block;box-sizing:border-box;background:rgba(0,0,0,.5);border:1px solid #000;padding:5px;outline:0;width:100%;color:#dadada;border-radius:4px}input[type=text]:disabled{color:grey}#starfield{width:100%;height:100%}.vanis-button{text-decoration:none;outline:none;color:#fff;cursor:pointer;text-shadow:0 0 4px #000;padding:5px 10px;border:1px solid #000;border-radius:4px}.vanis-button,.vanis-button:active{background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))}.vanis-button:active{box-shadow:inset 0 0 3px 0 #000}.vanis-button:disabled{cursor:auto;transition:none;color:#b3b3b3}.new-badge[data-v-0647fbb0]{background:#5f85db;font-size:9px;font-weight:700;border-radius:4px;padding:1px;position:absolute;right:10px;top:5px}.active[data-v-0647fbb0]{background:rgba(0,0,0,.5)}.server-list[data-v-0647fbb0]{height:100%;overflow:auto}.server-load-error[data-v-0647fbb0]{padding:10px;border-bottom:2px solid #000;background:rgba(0,0,0,.5);color:#ffcccb}.server-name[data-v-0647fbb0]{flex:1}#tab-menu[data-v-0647fbb0]{display:flex;flex-direction:column}#tab-menu .tabs[data-v-0647fbb0]{display:flex;font-size:18px;border-bottom:2px solid #000}#tab-menu .tab[data-v-0647fbb0]{flex:1;position:relative;cursor:pointer;text-align:center;padding:7px}#tab-menu .tab[data-v-0647fbb0]:not(:last-child){border-right:2px solid #000}#tab-menu .tab.active[data-v-0647fbb0]{background:rgba(0,0,0,.5)}.cursor-loading[data-v-0647fbb0]{cursor:default!important}.modal[data-v-0eaeaf66]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}.overlay[data-v-0eaeaf66]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.wrapper[data-v-0eaeaf66]{height:100%;overflow:hidden}.content[data-v-0eaeaf66]{position:relative;overflow:auto;height:100%;box-shadow:0 0 4px 2px #000;border-radius:4px}.close-button[data-v-0eaeaf66]{cursor:pointer;z-index:111;position:absolute;color:#d3d3d3;background:#000;border-radius:50%;top:-13px;right:-13px;font-size:30px}.scale-enter-active[data-v-0eaeaf66],.scale-leave-active[data-v-0eaeaf66]{transition:transform .22s}.scale-enter[data-v-0eaeaf66],.scale-leave-to[data-v-0eaeaf66]{transform:scale(1.08)}.fade-enter-active[data-v-0eaeaf66],.fade-leave-active[data-v-0eaeaf66]{transition:opacity .22s}.fade-enter[data-v-0eaeaf66],.fade-leave-to[data-v-0eaeaf66]{opacity:0}.settings-container{padding:10px}.settings-container>*{display:block;margin-bottom:10px}.settings-container .setting{display:flex}.settings-container .setting>*{flex:1}.pretty.p-switch .state:before{background:#121212}.pretty.p-switch input:checked~.state:before{border-color:#5f85db!important}.pretty.p-switch input:checked~.state label:after{background-color:#5f85db!important}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .3s ease}.header{padding:7px;background:rgba(0,0,0,.5);border-bottom:2px solid #000}.section{border:2px solid #000;border-radius:8px;overflow:hidden}.section .options{padding:9px 9px 9px 7px}.section .options>*{display:block;margin-bottom:9px}.section .options>:last-child{margin:0}.slider{display:block;box-sizing:border-box;border:1px solid #5f85db;border-radius:60px;padding:1px;-webkit-appearance:none;width:100%;background:#121212;outline:none;-webkit-transition:.2s;transition:opacity .2s}.slider.draw-delay{background:linear-gradient(45deg,#90b8f8,#000 35%)}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{border-radius:60px;-webkit-appearance:none;appearance:none;width:15px;height:15px;background:#5f85db;cursor:pointer}#hotkey-container{display:flex;flex-direction:column;user-select:none}#hotkey-container .hotkeys{flex:1;overflow:auto}#hotkey-container .row{display:flex;padding:6px}#hotkey-container .row:not(:last-child){border-bottom:2px solid #000}#hotkey-container .reset-button2{cursor:pointer}#hotkey-container .action{flex:1}#hotkey-container .bind{flex:1;cursor:pointer;outline:none;padding-left:5px;padding-right:5px;border-radius:4px}#hotkey-container .bind:focus{background:rgba(0,0,0,.5)}#hotkey-container .reset{padding:4px}#hotkey-container .footer{padding:10px;color:#ffcccb;border-top:2px solid #000}.replay-item[data-v-1dbc6ed9]{position:relative;box-shadow:2px 2px 5px 1px #000;border:1px solid #000;border-radius:4px;overflow:hidden}.replay-header[data-v-1dbc6ed9]{display:flex;position:absolute;top:0;font-size:14px;background:rgba(0,0,0,.85);border-bottom:1px solid #000;width:100%;padding:3px;box-sizing:border-box}.replay-name[data-v-1dbc6ed9]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.replay-thumbnail[data-v-1dbc6ed9]{display:block;width:100%;box-sizing:border-box;cursor:pointer}.replay-button[data-v-1dbc6ed9]{cursor:pointer}.replay-button[data-v-1dbc6ed9]:not(:last-child){margin-right:5px}.replay-button[data-v-1dbc6ed9]:hover{color:#999}.float[data-v-1dbc6ed9]{float:right}.container[data-v-4a996e52]{display:flex;flex-direction:column;height:100%}.replay-button-row[data-v-4a996e52]{padding:10px;border-bottom:2px solid #000;box-shadow:0 0 10px 1px #000;background:#222}.notification[data-v-4a996e52]{grid-column:1/3}.replays-container[data-v-4a996e52]{overflow:auto;padding:15px}.replays[data-v-4a996e52]{display:grid;grid-gap:15px;grid-template-columns:1fr 1fr 1fr 1fr}.player-row[data-v-7cb607ba]{display:flex}.player-nr[data-v-7cb607ba]{flex:1}.player-name[data-v-7cb607ba]{flex:4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.own-row[data-v-7cb607ba]{border-bottom:1px solid #fff}.row[data-v-1bcde71e]{display:flex}#nickname[data-v-1bcde71e]{margin-right:10px}#player-container[data-v-1bcde71e],.relative[data-v-1bcde71e]{position:relative}#player-container #skin[data-v-1bcde71e]{display:block;width:240px;height:240px;margin:16px auto auto;margin-bottom:22px!important;border-radius:50%;box-shadow:0 0 13px 3px #000}#player-container #player-data[data-v-1bcde71e]{position:relative;width:100%;height:100%;box-sizing:border-box;padding:0 15px 15px}#player-container #player-data>[data-v-1bcde71e]{margin-bottom:10px}#player-container #game-buttons[data-v-1bcde71e]{display:flex}#player-container #game-buttons #play-button[data-v-1bcde71e]{background:#5f85db;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;flex:9;margin-right:7px}#player-container #game-buttons #play-button[data-v-1bcde71e]:hover{background:#6f85db;transition:all .15s ease}#player-container #game-buttons #play-button[data-v-1bcde71e]:active{transition:none;background:#4f85db}#player-container #game-buttons #play-button[data-v-1bcde71e]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#2f85db}#player-container #game-buttons #spec-button[data-v-1bcde71e]{background:#5f85db;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;flex:1}#player-container #game-buttons #spec-button[data-v-1bcde71e]:hover{background:#6f85db;transition:all .15s ease}#player-container #game-buttons #spec-button[data-v-1bcde71e]:active{transition:none;background:#4f85db}#player-container #game-buttons #spec-button[data-v-1bcde71e]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#2f85db}.tabs[data-v-1bcde71e]{display:flex;font-size:20px;border-bottom:2px solid #000}.tab[data-v-1bcde71e]{flex:1;cursor:pointer;text-align:center;width:55px;padding:9px}.tab[data-v-1bcde71e]:hover{background:rgba(0,0,0,.15)}.tab[data-v-1bcde71e]:not(:last-child){border-right:2px solid #000}.tab.active[data-v-1bcde71e]{background:rgba(0,0,0,.5);color:#5f85db}.tab-content[data-v-1bcde71e]{flex:1;overflow:auto}.progress[data-v-4e838c74]{padding:5px;background:rgba(0,0,0,.5);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,.25),0 1px hsla(0,0%,100%,.08)}.progress-bar[data-v-4e838c74]{height:20px;background-color:#ee303c;border-radius:4px}.progress-striped .progress-bar[data-v-4e838c74]{background:repeating-linear-gradient(-45deg,#5f85db,#5f85db 40px,#90b8f8 0,#90b8f8 80px)}#account-name[data-v-661435cd]{font-size:16px;font-weight:700;width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xp-data[data-v-661435cd]{position:absolute;display:flex;width:100%;top:4px;color:#fff;text-shadow:0 0 5px #000}.discord-coming[data-v-661435cd]{text-align:center;display:inline-block}.avatar[data-v-661435cd]{width:80px;margin-right:7px;box-shadow:0 0 3px 1px #000;border-radius:4px}.player-info[data-v-661435cd]{display:inline-block;vertical-align:top;font-size:14px}.account[data-v-661435cd]{position:relative}.discord[data-v-661435cd]{cursor:pointer;display:block;color:#e1e1e1;padding:10px;background:#121212;border:1px solid #000;border-radius:4px}.logout[data-v-661435cd]{cursor:pointer;display:inline-block;position:absolute;top:0;right:0}.account-icon[data-v-661435cd]{font-size:120px;margin:20px;color:#121212;border-radius:500px;padding-left:2px;padding-right:2px;background:#dadada}.xp-progress[data-v-661435cd]{margin-left:-2px;margin-right:-2px}#skinurl[data-v-1c614894]{margin-bottom:15px}#skins[data-v-1c614894]{display:grid;grid-template-columns:auto auto auto;grid-gap:15px}.skin[data-v-1c614894]{cursor:pointer;width:80px;height:80px;border-radius:50%;box-shadow:0 0 6px 2px #000;box-sizing:border-box;border:1px solid transparent}.selected[data-v-1c614894]{box-shadow:0 0 3px 1px #5f85db}.bar[data-v-ebed1606]{margin:auto;text-align:center;grid-column:1/4}.two[data-v-ebed1606]{grid-row:2/4}.block[data-v-ebed1606]{text-align:center}#replays[data-v-ebed1606]{grid-column:2/4}#main-container[data-v-ebed1606]{position:absolute;margin-left:-481px;margin-top:-240px;left:50%;top:38%;display:grid;grid-template-columns:300px 330px 300px;grid-template-rows:110px 146px 300px;grid-gap:16px}.menu-enter-active[data-v-ebed1606],.menu-leave-active[data-v-ebed1606]{transition:all .25s}.menu-enter[data-v-ebed1606],.menu-leave-to[data-v-ebed1606]{transform:scale(.98);opacity:0}.social-container[data-v-4d0670e9]{display:flex;position:absolute;bottom:20px;left:50%;transform:translateX(-50%);width:400px}.social-container>[data-v-4d0670e9]{flex:1;padding-left:7px!important}.discord-link[data-v-4d0670e9]{background:#4a67cf;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-right:7px}.discord-link[data-v-4d0670e9]:hover{background:#3556ca;transition:all .15s ease}.discord-link[data-v-4d0670e9]:active{transition:none;background:#304eb6}.discord-link[data-v-4d0670e9]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#2b45a2}.youtube-link[data-v-4d0670e9]{background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-right:7px}.youtube-link[data-v-4d0670e9]:hover{background:#b30000;transition:all .15s ease}.youtube-link[data-v-4d0670e9]:active{transition:none;background:#900}.youtube-link[data-v-4d0670e9]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:maroon}#skins-link[data-v-4d0670e9]{background:#a800b1;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-right:7px}#skins-link[data-v-4d0670e9]:hover{background:#900098;transition:all .15s ease}#skins-link[data-v-4d0670e9]:active{transition:none;background:#77007e}#skins-link[data-v-4d0670e9]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#5f0065}.container[data-v-6843da33]{display:flex;position:absolute;top:10px;left:50%;transform:translateX(-50%);font-size:14px}.line[data-v-6843da33]{margin-left:10px;margin-right:10px}.context-menu[data-v-4dbee04d]{position:absolute;border:2px solid #000;border-radius:4px}.context-menu>[data-v-4dbee04d]{padding:5px}.player-name[data-v-4dbee04d]{background:rgba(0,0,0,.45)}.stats[data-v-0875ad82]{padding:10px;color:#fff}#chatbox[data-v-4900a413]{box-shadow:0 0 4px 2px #000!important;position:fixed;display:flex;flex-direction:column;left:0;bottom:0;width:440px;height:200px;padding:10px;background:rgba(0,0,0,.45);border-radius:4px;font-size:14px;overflow:scroll;resize:both;min-width:440px;min-height:200px;cursor:move}#chatbox input[data-v-4900a413]{font-size:14px;border:0;outline:0;background:transparent;width:100%}#message-list[data-v-4900a413]{flex:1;overflow:auto;margin-bottom:5px}.message-row[data-v-4900a413]{overflow:hidden}.message-from[data-v-4900a413]{white-space:nowrap;margin-right:1px}.message-text[data-v-4900a413]{word-break:break-word;user-select:text}#leaderboard[data-v-8a0c31c6]{box-shadow:0 0 4px 2px #000!important;position:fixed;right:0;top:0;width:220px;height:272px;padding:13px;background:rgba(0,0,0,.45);border-radius:4px;pointer-events:none}.leaderboard-title[data-v-8a0c31c6]{font-family:Verdana,Geneva,sans-serif;font-size:24px;margin-bottom:6px;color:#fff}.leaderboard-label[data-v-8a0c31c6]{font-family:Verdana,Geneva,sans-serif;font-size:18px;line-height:24px;white-space:nowrap;overflow:hidden}.container[data-v-4c95bd45]{box-shadow:0 0 4px 2px #000!important;position:fixed;right:0;bottom:0;background:rgba(0,0,0,.45);border-radius:4px;pointer-events:none}canvas[data-v-4c95bd45]{display:block}#locations[data-v-4c95bd45]{position:absolute}#minimap[data-v-4c95bd45]{position:relative}#hud[data-v-339660d2]{position:fixed}.continue[data-v-3249d726]{margin-top:5px}.container[data-v-3249d726]{position:absolute;top:50%;left:50%;margin-left:-165px;margin-top:-200px;width:320px;display:inline-block}.box-1[data-v-3249d726]{height:291px;margin-bottom:10px;text-align:center}.scroll[data-v-3249d726]{animation-name:scroll-data-v-3249d726;animation-duration:2.5s;animation-timing-function:ease;overflow:hidden}@keyframes scroll-data-v-3249d726{0%{height:0;opacity:0}50%{height:0;opacity:0}to{height:133px;opacity:1}}.menu-enter-active[data-v-3249d726]{transition:all .8s ease}.menu-enter[data-v-3249d726]{transform:scale(.95);opacity:0}.btn[data-v-b0b10308]{width:100%;background:#5f85db;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000}.btn[data-v-b0b10308]:hover{background:#6f85db}.btn[data-v-b0b10308]:active{background:#4f85db}.btn[data-v-b0b10308]:disabled{cursor:auto;color:#b3b3b3;background:#2f85db}#replay-controls[data-v-c2c2ac08]{position:fixed;bottom:0;left:0;right:0;padding:18px;text-shadow:2px 2px 1px #000;transition:opacity .5s ease-in-out}.auto-hide[data-v-c2c2ac08]{opacity:0}.auto-hide[data-v-c2c2ac08]:hover{opacity:1}.replay-slider[data-v-c2c2ac08]{-webkit-appearance:none;display:block;width:100%;margin:0;border-radius:5px;height:8px;outline:none;background:#7b7b7b}.replay-slider[data-v-c2c2ac08]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#d3d3d3;border-radius:50%;cursor:pointer}#ab-overlay[data-v-1611deb4]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10;text-shadow:0 0 10px #000;background:rgba(0,0,0,.5);text-align:center}.content[data-v-1611deb4]{position:relative;top:50%;transform:translateY(-50%)}.image-captcha-overlay[data-v-76d60428]{position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.5);z-index:100}.center-screen[data-v-76d60428]{display:inline-block;left:50%;top:50%;position:absolute;transform:translate(-50%,-50%)}', document.head.appendChild(t)
}();

class Message {
	constructor() {
		this.data = [];
	}

	finalize() {
		return new Uint8Array(this.data);
	}

	writeArray(array) {
		for (const item of array)
			this.data.push(item);
	}

	writeUint8(value) {
		this.data.push(value);
	}

	writeUtf8(value) {
		for (const c of value)
			this.writeUint8(c.charCodeAt(0));

		this.writeUint8(0);
	}

	writeInt32(value) {
		const bytes = new DataView(new ArrayBuffer(4));
		bytes.setInt32(0, true);

		for (var i = 0; i < 4; i++)
			this.data.push(bytes.getInt8(i));
	}
};

class Minion {
	constructor(uuid, swal) {
		this.uuid = uuid,
			this.swal = swal,
			this.moveWaitUntil = 0,
			this.splitCount = 0,
			this.stopMovement = false;
	}

	updateInfo(settings) {
		this.name = unescape(encodeURIComponent(settings.minionNickname));
		this.skin = settings.minionSkinUrl;
		this.tag = settings.minionTeamTag;
	}

	connect(url, game) {
		this.url = url,
			this.game = game;

		this.disconnect();

		const ws = this.ws = new WebSocket(url, 'tFoL46WDlZuRja7W6qCl');
		ws.binaryType = 'arraybuffer';

		ws.onopen = this.open.bind(this);
		ws.onclose = this.close.bind(this);
		ws.onmessage = this.parseMessage.bind(this);

		this.pingInterval = setInterval(this.ping.bind(this), 2000); // +1000ms
	}

	ping() {
		if (this.running) {
			const packet = new Message;
			packet.writeUint8(3);

			this.send(packet.finalize());
		}
	}

	doAction(what, arg) {
		if (this.running) {
			switch (what) {
				case 'feed':
					this.feed(arg);
					break;
				case 'split':
					this.split(arg);
					break; // 'arg' is 'count'
				case 'stopMovement':
					this.stopMovement = !this.stopMovement;
					break;
				case 'respawn':
					this.spawn();
					break;
				case 'move':
					this.move();
					break;
				default:
					break;
			}
		}
	}

	disconnect() {
		clearInterval(this.pingInterval);

		this.running = false;

		this.ws && (
			this.ws.onmessage = null,
			this.ws.onclose = null,
			this.ws.onerror = null,
			this.ws.close()
		);
	}

	ready() {
		return this.ws && this.ws.readyState == 1;
	}

	send(data) {
		this.ready() && this.ws.send(data);
	}

	open() {
		this.ready() && (
			globalThis.con__ = 10,
			this.swal.toast.fire({
				type: 'success',
				title: 'Your minion has connected',
				background: '#121212',
				timer: 2000
			}));
	}

	close(event) {
		this.disconnect()

		if (event.code == 1003) {
			setTimeout(() => this.connect(this.url, this.game), 3000);
		} else {
			this.swal.toast.fire({
				type: 'error',
				title: `Your minion has disconnected (${event.reason || 'no reason'})`,
				background: '#121212',
				timer: 2000
			})
		}
	}

	sendJoinData(enc) {
		const response = new Message;

		response.writeUint8(5);

		response.writeUint8(this.game.clientVersion);
		response.writeArray(enc);

		response.writeUtf8(this.name);
		response.writeUtf8(this.skin);
		response.writeUtf8(this.tag);

		this.send(response.finalize());
	}

	feed(e) {
		const n = new Message;
		n.writeUint8(21), "boolean" == typeof e && n.writeUint8(e), this.send(n.finalize())
	}

	spawn() {
		const response = new Message;

		response.writeUint8(1);

		response.writeUtf8(this.name);
		response.writeUtf8(this.skin);
		response.writeUtf8(this.tag);

		this.send(response.finalize());
	}

	split(t) {
		!this.stopMovement && this.move();
		const i = new Message;
		i.writeUint8(17), i.writeUint8(t), this.send(i.finalize()), this.splitCount += t, this.splitCount <= 2 ? this.moveWaitUntil = Date.now() + 300 : (this.moveWaitUntil = 0, this.splitCount = 0)
	}

	updatePosition() {
		if (this.game) {
			var i = this.game,
				a = i.rawMouse.x,
				e = i.rawMouse.y,
				n = 1 / i.camera.scale.x,
				t = 1 / i.camera.scale.y,
				o = i.container;
			this.x = o.pivot.x + (a - window.innerWidth / 2) * n, this.y = o.pivot.y + (e - window.innerHeight / 2) * t
		}
	}

	move() {
		if (this.stopMovement) {
			const e = new Message;
			e.writeUint8(9), this.send(e.finalize())
		} else {
			const t = new DataView(new ArrayBuffer(9));
			t.setUint8(0, 16), t.setInt32(1, this.x, true), t.setInt32(5, this.y, true), this.send(t)
		}
	}

	initialPacket(packet) {
		var offset = 1;

		this.running = true;

		this.protocol = packet.getUint8(offset, true), offset += 1,
			this.protocol >= 2 ? (this.gameModeId = packet.getUint8(offset, true), offset += 1,
				this.instanceSeed = packet.getUint16(offset, true), offset += 2,
				this.playerId = packet.getUint16(offset, true), offset += 10) : (
				this.instanceSeed = packet.getUint16(offset, true), offset += 2,
				this.playerId = packet.getUint16(offset, true), offset += 4);
	}

	tick(deltaTime) {
		var timestamp = Date.now();

		if (timestamp >= this.moveWaitUntil)
			this.updatePosition();
	}

	parseMessage(e) {
		const a = new DataView(e.data);
		var t = 0;
		switch (a.getUint8(t++, true)) {
			case 1:
				this.initialPacket(a);
				break;
			case 2:
				console.assert(this.uuid, "dependency not set");
				var i = new Uint8Array(a.buffer, 1);
				this.sendJoinData(this.uuid(i));
				break;
			case 22:
				if (!window.grecaptcha) return void alert("Captcha library is not loaded");
				this.game.events.$emit("show-image-captcha", this)
		}
	}
}

! function (e) {
	var t, n = (t = true, function (e, n) {
		var a = t ? function () {
			if (n) {
				var t = n.apply(e, arguments);
				return n = null, t
			}
		} : function () {};
		return t = false, a
	});

	function a(t) {
		var a = n(this, function () {
			var e = function () {
				return !e.constructor('return /" + this + "/')().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}").test(a)
			};
			return e()
		});
		a();
		for (var i, l, c = t[0], d = t[1], u = t[2], p = 0, v = []; p < c.length; p++) l = c[p], Object.prototype.hasOwnProperty.call(r, l) && r[l] && v.push(r[l][0]), r[l] = 0;
		for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (e[i] = d[i]);
		for (h && h(t); v.length;) v.shift()();
		return o.push.apply(o, u || []), s()
	}

	function s() {
		for (var e, t = 0; t < o.length; t++) {
			for (var n = o[t], a = true, s = 1; s < n.length; s++) {
				var i = n[s];
				0 !== r[i] && (a = false)
			}
			a && (o.splice(t--, 1), e = l(l.s = n[0]))
		}
		return e
	}
	var i = {},
		r = {
			0: 0
		},
		o = [];

	function l(t) {
		if (i[t]) return i[t].exports;
		var n = i[t] = {
			i: t,
			l: false,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, l), n.l = true, n.exports
	}
	l.m = e, l.c = i, l.d = function (e, t, n) {
		!l.o(e, t) && Object.defineProperty(e, t, {
			enumerable: true,
			get: n
		})
	}, l.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: true
		})
	}, l.t = function (e, t) {
		if (1 & t && (e = l(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (l.r(n), Object.defineProperty(n, "default", {
				enumerable: true,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var a in e) l.d(n, a, function (t) {
				return e[t]
			}.bind(null, a));
		return n
	}, l.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return l.d(t, "a", t), t
	}, l.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, l.p = "";
	var c = window.webpackJsonp = window.webpackJsonp || [],
		d = c.push.bind(c);
	c.push = a, c = c.slice();
	for (var u = 0; u < c.length; u++) a(c[u]);
	var h = d;
	o.push([111, 1]), s()
}([, function (e, t, n) {
	var a = n(114),
		s = n(5),
		i = n(59),
		r = n(115),
		o = n(116),
		l = n(118),
		c = n(12),
		d = n(123),
		u = n(22),
		h = n(24),
		p = n(4),
		v = n(125),
		f = n(72),
		g = n(127),
		{
			lerp: m,
			hideCaptchaBadge: y
		} = n(7),
		w = {};

	function b(e) {
		var t = document.getElementById("nickname").value,
			n = document.getElementById("skinurl").value,
			a = document.getElementById("teamtag").value;
		e.utf8(t), e.utf8(n), e.utf8(a)
	}

	w.clientVersion = 11, w.currentWsId = null, w.events = new u, w.settings = s, w.renderer = i, w.usingWebGL = i.type === PIXI.RENDERER_TYPE.WEBGL, w.skinLoader = new v, console.log(w.usingWebGL ? "WebGL Renderer" : "Canvas Renderer"), w.state = {
		connectionUrl: null,
		isAlive: false,
		playButton: false,
		loadingAds: false
	}, f.loadAdinplay(f.loadMenuAds), document.body.oncontextmenu = function (e) {
		return e.target && "email" === e.target.id
	}, w.usingWebGL && s.showBackgroundImage && s.backgroundImageUrl && PIXI.Texture.from(s.backgroundImageUrl), w.start = function (e) {
		if (!(e.protocol && e.instanceSeed && e.playerId && e.border)) throw "Lacking mandatory data";
		w.running = true, w.protocol = e.protocol, w.modeId = e.gameModeId || 0, w.instanceSeed = e.instanceSeed, w.pingstamp = 0, w.timestamp = 0, w.deltaTime = 0, w.playerId = e.playerId, w.multiboxPid = null, w.activePid = w.playerId, w.tagId = null, w.spectating = false, w.state.isAlive = false, w.center = {
			x: 0,
			y: 0
		}, w.score = 0, w.cellCount = 0, w.splitCount = 0, w.moveWaitUntil = 0, w.replaying = !!e.replayUpdates, w.replayUpdates = e.replayUpdates, w.replayUpdateIndex = 0, w.replay.updateHistory.length = 0, w.nodes = {}, w.nodelist = [], w.removedNodes = [], w.rawMouse = {}, w.mouse = {}, w.stopMovePackets = false, w.moveToCenterOfCells = false, w.border = e.border, w.setupZoom(w.border), l.createMassFont(), w.massTextPool = [], w.crownPool = [];
		var t = w.usingWebGL && s.showBackgroundImage;
		w.scene = new r(w.border, t), w.container = w.scene.container, w.cameraScale = w.zoom, w.camera = new a(w.container), w.camera.scale.set(w.cameraScale), w.camera.position.set(0), d.prepareMode(w, w.modeId), w.playerManager = new o(w), w.ticker = new PIXI.Ticker, w.ticker.add(w.tick), w.replaying ? (w.moveInterval = setInterval(w.replayUpdate, 40), w.events.$emit("show-replay-controls", w.replayUpdates.length)) : (s.minimapEnabled && w.events.$emit("minimap-show"), s.showChat && w.events.$emit("chat-visible", true), w.events.$emit("leaderboard-show"), w.events.$emit("stats-visible", true), w.moveInterval = setInterval(() => {
			w.stopMovePackets || (w.moveToCenterOfCells ? w.sendUint8(9) : w.actions.move())
		}, 40), w.setupStats(), w.state.playButton = true), w.ticker.start(), w.eventListeners(true)
	}, w.setupZoom = function (e) {
		w.zoom = .3, e.width === e.height ? w.zoomScale = 2e4 / e.width : w.zoomScale = 1, w.zoomMin = .03 * w.zoomScale
	}, w.nextReplayPacket = function () {
		var e = w.replayUpdateIndex,
			t = w.replayUpdates[e];
		w.parseMessage(t), w.replayUpdateIndex++
	}, w.replayMoveTo = function (e) {
		var t = w.replayUpdates.length - 1,
			n = Math.floor(e * t);
		w.replayUpdateIndex = n, w.nextReplayPacket();
		for (var a = w.timestamp, s = [], i = 0; i < w.nodelist.length; i++) {
			var r = w.nodelist[i];
			r.updateTime !== a && s.push(r)
		}
		for (var o = 0; o < s.length; o++) s[o].destroy();
		return n
	}, w.replayUpdate = function () {
		w.replayUpdateIndex >= w.replayUpdates.length && (w.clearNodes(), w.replayUpdateIndex = 0), w.events.$emit("replay-index-change", w.replayUpdateIndex), w.nextReplayPacket()
	}, w.updateStats = function (e) {
		var t = w.score,
			n = Math.round(w.avgFps.getAndReset());
		w.events.$emit("stats-changed", {
			ping: e,
			fps: n,
			mass: t
		})
	}, w.setupStats = function () {
		w.avgFps = new g, w.ticker.add(() => {
			w.avgFps.add(w.ticker.FPS)
		}), w.everySecond = setInterval(() => {
			n(5).antiAfk ? w.ping() : window.app.showMenu || window.app.showDeathScreen ? w.updateStats(null) : w.ping();
		}, 1e3)
	}, w.clearNodes = function () {
		for (; w.nodelist.length;) w.nodelist[0].destroy();
		for (; w.removedNodes.length;) w.removedNodes.pop().destroySprite()
	}, w.destroySpritePool = function (e, t) {
		for (; e.length;) e.pop().destroy(t)
	}, w.stop = function () {
		w.running = false, w.state.playButton = false, w.eventListeners(false), w.state.connectionUrl = null, w.ticker.stop(), clearInterval(w.moveInterval), clearInterval(w.everySecond), w.renderer.clear(), w.playerManager.destroy(), w.skinLoader.clearCallbacks(), w.events.$emit("stats-visible", false), w.events.$emit("chat-visible", false), w.events.$emit("leaderboard-hide"), w.events.$emit("minimap-hide"), w.events.$emit("minimap-destroy"), w.events.$emit("show-replay-controls", false), w.events.$emit("cells-changed", 0), w.events.$emit("game-stopped"), w.clearNodes(), w.scene && w.scene.destroyBackgroundImage(false), w.container.destroy(true), c.cells.destroyCache(), w.destroySpritePool(w.massTextPool, true), w.destroySpritePool(w.crownPool)
	}, w.showMenu = function (e, t) {
		if (window.app.showDeathScreen) return false;
		if (window.app.showMenu = e, w.actions.stopMovement(e), e) w.events.$emit("reload-serverlist-if-minute-passed"), t && f.loadMenuAds();
		else {
			var n = document.activeElement;
			n && "chatbox-input" === n.id || w.renderer.view.focus(), w.stopMovePackets = false, y()
		}
		return e
	}, w.toggleMenu = function () {
		var e = !window.app.showMenu;
		w.showMenu(e, true)
	}, w.showDeathScreen = function (e) {
		window.app.showDeathScreen = e
	}, w.setDeathStats = function (e) {
		window.app.deathStats = e
	}, w.tick = function (e) {
		w.timestamp = Date.now(), w.deltaTime = e;
		w.settings.enableMinion && w.minion && w.minion.tick(e);
		for (var t = w.removedNodes.length; t--;) {
			var n = w.removedNodes[t];
			n.update() && (n.destroySprite(), w.removedNodes.splice(t, 1))
		}
		for (var a = w.playerId, i = w.multiboxPid, r = w.nodelist, o = 0, l = 0, c = 0, d = 0, u = 0, h = 0; h < r.length; h++) {
			var p = r[h];
			if (p.update(), p.pid === a || p.pid === i) {
				var v = p.getMass();
				o += p.x * v, l += p.y * v, c += v, d += p.nSize, p.pid === w.activePid && u++
			}
		}
		if (w.cellCount !== u && (w.cellCount = u, w.events.$emit("cells-changed", u)), w.scene.sort(), w.spectating) o = w.center.x, l = w.center.y, w.score = 0;
		else {
			if (!c) return w.renderer.render(w.container), void(w.score = 0);
			o /= c, l /= c, w.score = c
		}
		var f = s.cameraMoveSmoothing * w.deltaTime;
		if (w.camera.position.x = m(w.camera.position.x, o, f), w.camera.position.y = m(w.camera.position.y, l, f), w.timestamp >= w.moveWaitUntil && (w.updateMouse(), w.splitCount = 0), s.autoZoom) {
			var g = Math.min(64 / d, 1);
			w.cameraScale = w.zoom * Math.pow(g, .27)
		} else w.cameraScale = w.zoom;
		var y = m(w.camera.scale.x, w.cameraScale, s.cameraZoomSmoothing * w.deltaTime);
		w.camera.scale.set(y), w.renderer.render(w.container)
	}, w.updateMouse = function () {
		var e = w.rawMouse.x,
			t = w.rawMouse.y,
			n = 1 / w.camera.scale.x,
			a = 1 / w.camera.scale.y,
			s = w.container;
		w.mouse.x = s.pivot.x + (e - window.innerWidth / 2) * n, w.mouse.y = s.pivot.y + (t - window.innerHeight / 2) * a
	}, w.joinGame = function (e, t) {
		var n = new h;
		n.uint8(1), b(n);
		var a = n.write();
		w.send(a), w.spectating = false
	}, w.sendJoinData = function (e) {
		var t = new h;
		t.uint8(5), t.uint8(w.clientVersion), t.uint8Array(e), b(t);
		var n = localStorage.vanisToken;
		if (n) {
			/^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(w.ws.url) && t.utf8(n)
		}
		var a = t.write();
		w.send(a);
		w.events.$emit("players_menu", false), w.events.$emit("account_menu", false), w.events.$emit("chatbox_menu", false), w.events.$emit("options_menu", false), w.events.$emit("replays_menu", false)
	}, w.seededRandom = function (e) {
		var t = 1e4 + w.instanceSeed,
			n = Math.sin(e) * t;
		return n - Math.floor(n)
	}, w.getThumbnail = function () {
		var e = w.container,
			t = new PIXI.Container;
		t.pivot.x = e.position.x, t.pivot.y = e.position.y, t.position.x = 120, t.position.y = 67.5, t.scale.set(.25), t.addChild(e);
		var n = PIXI.RenderTexture.create(240, 135);
		w.renderer.render(t, n), t.removeChild(e);
		var a = w.renderer.extract.canvas(n),
			i = document.createElement("canvas");
		i.width = 240, i.height = 135;
		var r = i.getContext("2d");
		r.beginPath(), r.rect(0, 0, 240, 135), r.fillStyle = s.backgroundColor, r.fill(), r.drawImage(a, 0, 0, 240, 135);
		var o = i.toDataURL();
		return n.destroy(true), o
	}, w.sendChatMessage = function (e) {
		e = e.split('').join(String.fromCharCode(8206))
		for (var t = unescape(encodeURIComponent(e)), n = [99], a = 0; a < t.length; a++) n.push(t.charCodeAt(a));
		var s = new Uint8Array(n).buffer;
		w.send(s)
	}, w.addServerMessage = function (e) {
		w.events.$emit("chat-message", {
			text: e,
			textColor: "#828282"
		})
	}, w.setTagId = function (e) {
		return e || (e = null), e !== w.tagId && (w.tagId = e, true)
	}, w.levelUp = function (e) {
		p.toast.fire({
			title: "You have reached level " + e + "!",
			timer: 3e3
		})
	}, w.getShortMass = function (e) {
		return e < 1e3 ? e.toString() : (Math.round(.001 * e * 10) / 10).toFixed(1) + "k"
	}, e.exports = w
}, , , function (e, t, n) {
	var a = n(259).default,
		s = a.mixin({
			toast: true,
			position: "top",
			showConfirmButton: false,
			showCloseButton: true
		});
	window.Swal = a, e.exports = {
		toast: s,
		alert: function (e) {
			a.fire({
				text: e,
				confirmButtonText: "OK"
			})
		},
		confirm: function (e, t) {
			var n = {
				text: e,
				showCancelButton: true,
				confirmButtonText: "Continue"
			};
			a.fire(n).then(e => {
				e.value && t()
			})
		},
		instance: a
	}
}, function (e, t) {
	var n = {
			skinsEnabled: true,
			namesEnabled: true,
			foodVisible: true,
			showMass: true,
			shortMass: true,
			showLocations: false,
			useWebGL: true,
			spawnTransparency: true,
			drawDelay: 120,
			cameraMoveSmoothing: .18,
			cameraZoomSmoothing: .14,
			cameraZoomSpeed: 10,
			eatAnimation: true,
			doubleResolution: true,
			cellBorderSize: 1,
			autoZoom: false,
			showChat: true,
			autoHideReplayControls: false,
			showHud: true,
			showBlockedMessageCount: true,
			minimapEnabled: true,
			minimapSize: 220,
			minimapFPS: 30,
			minimapSmoothing: .08,
			minimapLocations: true,
			showBackgroundImage: true,
			backgroundImageUrl: "https://vanis.io/img/background.png",
			backgroundImageRepeat: true,
			backgroundImageOpacity: .6,
			backgroundColor: "#101010",
			backgroundDefaultIfUnequal: true,
			autoReconnect: false,
			antiAfk: false,
			enableMinion: false,
			minionNickname: "",
			minionTeamTag: "",
			minionSkinUrl: "https://skins.vanis.io/s/vanis1"
		},
		a = {
			backgroundColor: function (e) {
				return /^#[0-9A-F]{6}$/i.test(e)
			}
		};
	e.exports = window.settings = new class {
		constructor() {
			this.getInternalSettings(), this.userDefinedSettings = this.loadUserDefinedSettings(), Object.assign(this, n, this.userDefinedSettings)
		}
		getInternalSettings() {
			this.cellSize = 512, this.cellNamePadding = 350, this.cellRenderSize = this.cellSize + this.cellNamePadding, this.cellScaleRatio = this.cellRenderSize / this.cellSize
		}
		loadUserDefinedSettings() {
			if (localStorage.settings) try {
				return JSON.parse(localStorage.settings)
			} catch (e) {
				console.error("loadUserDefinedSettings:", e.message)
			}
			return {}
		}
		set(e, t) {
			if (this[e] === t) return false;
			var n = a[e];
			return !(n && !n(t)) && (this[e] = t, this.userDefinedSettings[e] = t, localStorage.settings = JSON.stringify(this.userDefinedSettings), true)
		}
	}
}, , function (e, t) {
	var n = false;
	e.exports = {
		lerp: function (e, t, n) {
			return (1 - n) * e + n * t
		},
		clampNumber: function (e, t, n) {
			return Math.min(Math.max(e, t), n)
		},
		createBuffer: function (e) {
			return new DataView(new ArrayBuffer(e))
		},
		getTimeString: function (e, t, n) {
			e instanceof Date && (e = e.getTime());
			var a = t ? 1 : 1e3,
				s = 60 * a,
				i = 60 * s;
			if (e < a) return "1 second";
			for (var r = [24 * i, i, s, a], o = ["day", "hour", "minute", "second"], l = false, c = [], d = 0; d < r.length; d++) {
				var u = r[d],
					h = Math.floor(e / u);
				if (h) {
					var p = o[d],
						v = h > 1 ? "s" : "";
					c.push(h + " " + p + v), e %= u
				}
				if (l) break;
				h && !n && (l = true)
			}
			return c.join(", ")
		},
		htmlEncode: function (e) {
			return e = e.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/'/g, "'").replace(/"/g, '"')
		},
		getTimestamp: function () {
			var e = new Date,
				t = e.getMonth() + 1,
				n = e.getDate();
			return [e.getFullYear(), (t > 9 ? "" : "0") + t, (n > 9 ? "" : "0") + n].join("") + "-" + [("0" + e.getHours()).slice(-2), ("0" + e.getMinutes()).slice(-2), ("0" + e.getSeconds()).slice(-2)].join("")
		},
		loadImage: function (e) {
			return fetch(e, {
				mode: "cors"
			}).then(e => e.blob()).then(e => createImageBitmap(e))
		},
		hideCaptchaBadge: function () {
			!n && (document.body.classList.add("hide-captcha-badge"), n = true)
		},
		destroyPixiPlugins: function (e) {
			["interaction", "accessibility"].forEach(t => {
				var n = e.plugins[t];
				n && (n.destroy(), delete e.plugins[t])
			})
		}
	}
}, , , , , function (e, t, n) {
	var a = n(121),
		s = n(122);
	e.exports = {
		cells: a,
		virus: s
	}
}, , function (e, t, n) {
	var a = n(1),
		s = n(12);
	n(5);
	e.exports = class {
		constructor(e) {
			this.game = a, this.id = e.id || 0, this.oSize = this.size = e.size, this.updateTime = 0, this.newPositionScale = 1, this.removed = false, this.texture = e.texture || s.cells.getTexture(0), this.sprite = new PIXI.Sprite(this.texture), this.sprite.anchor.set(.5), this.sprite.gameData = this, this.x = this.ox = this.sprite.position.x = e.x, this.y = this.oy = this.sprite.position.y = e.y
		}
		getMass() {
			var e = this.nSize;
			return Math.floor(e * e / 100)
		}
		update() {
			var e = this.game.settings.drawDelay,
				t = (this.game.timestamp - this.updateTime) / e;
			if (t = 0 > t ? 0 : 1 < t ? 1 : t, this.removed && (t >= 1 || this.texture.clearedFromCache)) return true;
			this.size = t * (this.nSize - this.oSize) + this.oSize, this.sprite.width = this.sprite.height = 2 * this.size, this.sprite.position.x = this.x = t * this.newPositionScale * (this.nx - this.ox) + this.ox, this.sprite.position.y = this.y = t * this.newPositionScale * (this.ny - this.oy) + this.oy, this.onUpdate && this.onUpdate()
		}
		destroy(e) {
			if (this.removed) console.warn("Cell already removed!");
			else {
				this.onDestroy && this.onDestroy();
				var t = this.game.nodelist,
					n = t.indexOf(this);
				n >= 0 && t.splice(n, 1), delete this.game.nodes[this.id], this.removed = true, e ? this.game.removedNodes.push(this) : this.destroySprite()
			}
		}
		destroySprite() {
			this.sprite ? (this.sprite.destroy(), this.sprite = null) : console.warn("Sprite already destroyed!")
		}
	}
}, , , , , , , , , function (e, t, n) {
	var a = n(4);

	function s() {
		a.instance.fire({
			type: "warning",
			title: "Browser Unsupported",
			html: "Skins might not work properly in this browser.<br>Please consider using Chrome.",
			allowOutsideClick: false
		})
	}
	var i = ["hwem", "ujkv", "cpcn", "cuujqng", "rgpku", "tcrg", "eqem", "fkem", "hci", "ewpv", "rwuu{", "xcikpc", "dkvej", "yjqtg", "tgvctf", "jkvngt", "pc|k", "ejkpm", "unwv", "rqtp", "pkii"].map(e => {
		for (var t = "", n = 0; n < e.length; n++) {
			let a = e.charCodeAt(n) - 2;
			t += String.fromCharCode(a)
		}
		return t
	});
	e.exports = {
		noop: function () {},
		checkBadWords: function (e) {
			return e = e.toLowerCase(), i.some(t => e.includes(t))
		},
		notifyUnsupportedBrowser: async function () {
			window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? a.instance.fire({
				type: "warning",
				title: "Safari browser is not supported :(",
				html: "Please consider using Google Chrome.",
				allowOutsideClick: false,
				showCloseButton: false,
				showCancelButton: false,
				showConfirmButton: false
			}) : localStorage.skipUnsupportedAlert || (localStorage.skipUnsupportedAlert = true, navigator.userAgent.toLowerCase().includes("edge") ? s() : !await new Promise(e => {
				var t = new Image;
				t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", t.onload = t.onerror = (() => {
					e(2 === t.height)
				})
			}) && s())
		},
		isFirstVisit: !localStorage.visitedBefore && (localStorage.visitedBefore = true, true)
	}
}, function (e, t) {
	function n() {
		this.data = []
	}
	e.exports = n, n.prototype.write = function () {
		return new Uint8Array(this.data)
	}, n.prototype.uint8 = function (e) {
		this.data.push(e)
	}, n.prototype.uint8Array = function (e) {
		for (var t = 0; t < e.length; t++) this.data.push(e[t])
	}, n.prototype.utf8 = function (e) {
		e = unescape(encodeURIComponent(e));
		for (var t = 0; t < e.length; t++) this.data.push(e.charCodeAt(t));
		this.data.push(0)
	}
}, , , , function (e, t, n) {
	var a = n(2),
		s = n(166);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	"use strict";
	var a = n(30),
		s = n.n(a);
	t.default = s.a
}, function (e, t) {
	e.exports = {
		data: () => ({})
	}
}, function (e, t, n) {
	var a = n(2),
		s = n(168);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(171);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(173);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	"use strict";
	var a = n(35),
		s = n.n(a);
	t.default = s.a
}, function (e, t, n) {
	var a = n(82),
		s = n(1),
		i = n(4),
		r = s.replay.database;
	e.exports = {
		props: ["replay"],
		created: function () {},
		methods: {
			play(e) {
				s.isConnected() ? i.confirm("You will be disconnected from current game before replay", () => {
					this._play(e)
				}) : this._play(e)
			},
			_play(e) {
				try {
					s.replay.play(e)
				} catch (e) {
					i.alert("Replay data is corrupted!")
				}
			},
			downloadReplay(e) {
				i.instance.fire({
					input: "text",
					inputValue: e.name,
					showCancelButton: true,
					confirmButtonText: "Download",
					html: "This file is not a video file and only Vanis.io website can play it.<br>File consists of player positions and other game related data."
				}).then(t => {
					var n = t.value;
					if (n) {
						var s = new Blob([e.data], {
							type: "text/plain;charset=utf-8"
						});
						a.saveAs(s, n + ".vanis")
					}
				})
			},
			deleteReplay(e) {
				i.confirm("Are you sure that you want to delete this replay?", () => {
					r.removeItem(e, () => {
						s.events.$emit("replay-removed")
					})
				})
			}
		}
	}
}, function (e, t, n) {
	var a = n(2),
		s = n(213);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(215);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(217);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(219);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(221);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(225);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(227);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(229);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(231);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(233);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(235);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(237);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(239);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(241);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	"use strict";
	var a = n(51),
		s = n.n(a);
	t.default = s.a
}, function (e, t, n) {
	var a = n(1),
		s = n(7),
		i = n(5),
		r = i.minimapSize,
		o = i.minimapFPS,
		l = i.minimapSmoothing,
		c = new PIXI.Container,
		d = {};
	e.exports = {
		data: () => ({
			showMinimap: false,
			showLocations: i.minimapLocations,
			interval: null
		}),
		methods: {
			initRenderer(e) {
				var t = PIXI.autoDetectRenderer({
					resolution: 1,
					view: e,
					width: r,
					height: r,
					forceCanvas: !i.useWebGL,
					antialias: false,
					powerPreference: "high-performance",
					transparent: true
				});
				s.destroyPixiPlugins(t), t.clear(), this.renderer = t
			},
			onMinimapShow() {
				this.interval || (this.showMinimap = true, a.events.$on("minimap-positions", this.updatePositions), this.interval = setInterval(this.render, 1e3 / o))
			},
			onMinimapHide() {
				this.interval && (this.showMinimap = false, a.events.$off("minimap-positions", this.updatePositions), clearInterval(this.interval), this.interval = null)
			},
			destroyMinimap() {
				c.destroy(true), c = new PIXI.Container, this.renderer.clear()
			},
			createNode(e, t, n, a) {
				var s = d[e];
				s && s.destroy(true);
				n || (n = 16777215), a || (a = 16777215);
				var i, r, o, l, c, u = new PIXI.Container;
				u.newPosition = {}, u.addChild((l = a, (c = new PIXI.Graphics).beginFill(l), c.drawCircle(0, 0, 5), c.endFill(), c)), t && u.addChild((i = t, r = n, (o = new PIXI.Text(i, {
					strokeThickness: 4,
					lineJoin: "round",
					fontFamily: "Nunito",
					fill: r,
					fontSize: 12
				})).anchor.set(.5), o.pivot.y = 15, o)), d[e] = u
			},
			destroyNode(e) {
				var t = d[e];
				t ? (t.destroy(true), delete d[e]) : console.log("Minimap: trying to destroy node which doesnt exist", e)
			},
			updatePositions(e) {
				c.removeChildren();
				for (var t = 0; t < e.length; t++) {
					var n = e[t],
						a = d[n.pid];
					a ? (a.newPosition.x = n.x * r, a.newPosition.y = n.y * r, c.addChild(a)) : console.warn("Minimap node not found!")
				}
				this.render()
			},
			render() {
				for (var e = c.children, t = l * (30 / o), n = 0; n < e.length; n++) {
					var a = e[n];
					a.position.x = s.lerp(a.position.x, a.newPosition.x, t), a.position.y = s.lerp(a.position.y, a.newPosition.y, t)
				}
				this.renderer.render(c)
			},
			drawLocationGrid(e, t) {
				var n = r / t;
				e.globalAlpha = .1, e.strokeStyle = "#202020", e.beginPath();
				for (var a = 1; a < t; a++) {
					var s = a * n;
					e.moveTo(s, 0), e.lineTo(s, r), e.moveTo(0, s), e.lineTo(r, s)
				}
				e.stroke()
			},
			drawLocationCodes(e, t) {
				var n = r / t,
					a = n / 2;
				e.globalAlpha = .1, e.font = "14px Verdana", e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#ffffff";
				for (var s = 0; s < t; s++)
					for (var i = s * n + a, o = 0; o < t; o++) {
						var l = String.fromCharCode(97 + o).toUpperCase() + (s + 1),
							c = o * n + a;
						e.strokeText(l, i, c), e.fillText(l, i, c)
					}
			},
			drawLocations(e) {
				e.width = e.height = r;
				var t = e.getContext("2d");
				this.drawLocationGrid(t, 5), this.drawLocationCodes(t, 5)
			}
		},
		created() {
			a.events.$on("minimap-show", this.onMinimapShow), a.events.$on("minimap-hide", this.onMinimapHide), a.events.$on("minimap-destroy", this.destroyMinimap), a.events.$on("minimap-create-node", this.createNode), a.events.$on("minimap-destroy-node", this.destroyNode), a.events.$on("minimap-show-locations", e => this.showLocations = e)
		},
		mounted() {
			this.drawLocations(this.$refs.locations), this.initRenderer(this.$refs.minimap)
		}
	}
}, function (e, t, n) {
	var a = n(2),
		s = n(243);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(245);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(247);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(249);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(251);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(253);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(2),
		s = n(255);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {
	var a = n(5),
		s = n(7);
	PIXI.utils.skipHello();
	var i = document.getElementById("canvas"),
		r = {
			resolution: a.customResolution || window.devicePixelRatio || 1,
			view: i,
			forceCanvas: !a.useWebGL,
			antialias: true,
			powerPreference: "high-performance",
			backgroundColor: PIXI.utils.string2hex(a.backgroundColor)
		},
		o = PIXI.autoDetectRenderer(r);

	function l() {
		o.resize(window.innerWidth, window.innerHeight)
	}
	l(), s.destroyPixiPlugins(o), window.addEventListener("resize", l), o.clear(), e.exports = o;
}, , function (e, t, n) {
	var a = n(1),
		s = {
			respawn: function () {
				a.state.loadingAds || (a.joinGame(), a.showMenu(false))
			},
			feed: a.actions.feed.bind(null),
			feedMacro: a.actions.feed.bind(null, true),
			split: a.actions.split.bind(null, 1),
			splitx2: a.actions.split.bind(null, 2),
			splitx3: a.actions.split.bind(null, 3),
			splitMax: a.actions.split.bind(null, 4),
			split32: a.actions.split.bind(null, 5),
			split64: a.actions.split.bind(null, 6),
			linesplit: a.actions.linesplit,
			lockLinesplit: a.actions.lockLinesplit,
			stopMovement: a.actions.stopMovement,
			toggleSkins: a.actions.toggleSkins,
			toggleNames: a.actions.toggleNames,
			toggleFood: a.actions.toggleFood,
			toggleMass: a.actions.toggleMass,
			toggleHud: a.actions.toggleHud,
			spectateLock: a.actions.spectateLockToggle,
			selectPlayer: a.actions.targetPlayer.bind(null, true),
			saveReplay: a.replay.save,
			toggleChat: a.actions.toggleChat,
			zoomLevel1: a.actions.setZoomLevel.bind(null, 1),
			zoomLevel2: a.actions.setZoomLevel.bind(null, 2),
			zoomLevel3: a.actions.setZoomLevel.bind(null, 3),
			zoomLevel4: a.actions.setZoomLevel.bind(null, 4),
			zoomLevel5: a.actions.setZoomLevel.bind(null, 5),

			// Aero:

			autoRespawn: a.actions.autoRespawn,

			'm-feed': a.actions.invokeMinion.bind(null, 'feed'),
			'm-feedMacro': a.actions.invokeMinion.bind(null, 'feed', true),
			'm-split': a.actions.invokeMinion.bind(null, 'split', 1),
			'm-splitx2': a.actions.invokeMinion.bind(null, 'split', 2),
			'm-splitx3': a.actions.invokeMinion.bind(null, 'split', 3),
			'm-splitMax': a.actions.invokeMinion.bind(null, 'split', 4),
			'm-split32': a.actions.invokeMinion.bind(null, 'split', 5),
			'm-split64': a.actions.invokeMinion.bind(null, 'split', 6),
			'm-stopMovement': a.actions.invokeMinion.bind(null, 'stopMovement'),
			'm-respawn': a.actions.invokeMinion.bind(null, 'respawn'),

			switchMultibox: a.actions.switchMultibox
		},
		i = {
			feed: "W",
			feedMacro: "MOUSE0",
			split: "SPACE",
			splitx2: "G",
			splitx3: "H",
			splitMax: "T",
			split32: "",
			split64: "",
			linesplit: "Z",
			lockLinesplit: "",
			respawn: "",
			stopMovement: "",
			toggleSkins: "",
			toggleNames: "",
			toggleMass: "",
			spectateLock: "Q",
			selectPlayer: "MOUSE1",
			saveReplay: "R",
			toggleChat: "",
			toggleHud: "",
			zoomLevel1: "1",
			zoomLevel2: "2",
			zoomLevel3: "3",
			zoomLevel4: "4",
			zoomLevel5: "5",

			// Aero:

			autoRespawn: "K",

			'm-feed': '',
			'm-feedMacro': '',
			'm-split': '',
			'm-splitx2': '',
			'm-splitx3': '',
			'm-splitMax': '',
			'm-split32': '',
			'm-split64': '',
			'm-stopMovement': '',
			'm-respawn': '',

			switchMultibox: "TAB"
		};
	e.exports = new class {
		constructor() {
			this.version = 2, this.pressHandlers = null, this.releaseHandlers = null, this.resetObsoleteHotkeys(), this.load()
		}
		resetObsoleteHotkeys() {
			localStorage.hotkeysVersion != this.version && (localStorage.hotkeys && (console.log("Incompatible hotkeys"), localStorage.removeItem("hotkeys")), localStorage.hotkeysVersion = this.version)
		}
		load() {
			this.hotkeys = this.loadHotkeys(), this.loadHandlers(this.hotkeys)
		}
		loadHotkeys() {
			var e = Object.assign({}, i),
				t = localStorage.hotkeys;
			if (!t) return e;
			t = JSON.parse(t);
			var n = Object.values(t);
			return Object.keys(e).forEach(t => {
				var a = e[t];
				a && n.includes(a) && (e[t] = "")
			}), Object.assign(e, t)
		}
		saveHotkeys(e) {
			localStorage.hotkeys = JSON.stringify(e)
		}
		reset() {
			return localStorage.removeItem("hotkeys"), this.load(), this.hotkeys
		}
		get() {
			return this.hotkeys
		}
		set(e, t) {
			if (s[e]) {
				if (this.hotkeys[e] === t) return true;
				for (var n in this.hotkeys) this.hotkeys[n] === t && (this.hotkeys[n] = "");
				return this.hotkeys[e] = t, this.saveHotkeys(this.hotkeys), this.loadHandlers(this.hotkeys), true
			}
			console.log("Invalid action name", e)
		}
		loadHandlers(e) {
			this.pressHandlers = {}, Object.keys(e).forEach(t => {
				var n = s[t];
				if (n) {
					var a = e[t];
					this.pressHandlers[a] = n
				} else console.warn("Invalid action in hotkeys", t)
			}), this.releaseHandlers = {}, e.feedMacro && (this.releaseHandlers[e.feedMacro] = a.actions.feed.bind(null, false)), e['m-feedMacro'] && (this.releaseHandlers[e['m-feedMacro']] = a.actions.invokeMinion.bind(null, 'feed', false))
		}
		press(e) {
			var t = this.pressHandlers[e];
			return !!t && (t(), true)
		}
		release(e) {
			var t = this.releaseHandlers[e];
			t && t()
		}
		convertKey(e) {
			return e ? " " === e ? "SPACE" : e.toString().toUpperCase() : "Unknown"
		}
	}
}, , , , , , , function (e, t, n) {
	"use strict";
	var a = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showMinimap,
					expression: "showMinimap"
				}],
				staticClass: "container"
			}, [t("canvas", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.showLocations,
					expression: "showLocations"
				}],
				ref: "locations",
				attrs: {
					id: "locations"
				}
			}), this._v(" "), t("canvas", {
				ref: "minimap",
				attrs: {
					id: "minimap"
				}
			})])
		},
		s = [];
	a._withStripped = true, n.d(t, "a", function () {
		return a
	}), n.d(t, "b", function () {
		return s
	})
}, function (e, t, n) {
	"use strict";
	var a = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("transition", {
				attrs: {
					name: "fade",
					appear: ""
				}
			}, [n("div", {
				staticClass: "modal"
			}, [n("div", {
				staticClass: "overlay",
				on: {
					click: function (t) {
						return e.$emit("close")
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "fas fa-times-circle close-button",
				on: {
					click: function (t) {
						return e.$emit("close")
					}
				}
			}), e._v(" "), n("div", {
				staticClass: "wrapper"
			}, [n("transition", {
				attrs: {
					name: "scale",
					appear: ""
				}
			}, [n("div", {
				staticClass: "content fade-box"
			}, [e._t("default", [e._v("Here should be something")])], 2)])], 1)])])
		},
		s = [];
	a._withStripped = true, n.d(t, "a", function () {
		return a
	}), n.d(t, "b", function () {
		return s
	})
}, function (e, t, n) {
	"use strict";
	var a = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "replay-item"
			}, [n("img", {
				staticClass: "replay-thumbnail",
				attrs: {
					src: e.replay.image
				},
				on: {
					click: function (t) {
						return e.play(e.replay.data)
					}
				}
			}), e._v(" "), n("div", {
				staticClass: "replay-header"
			}, [n("div", {
				staticClass: "replay-name"
			}, [e._v(e._s(e.replay.name))]), e._v(" "), n("div", [n("i", {
				staticClass: "replay-button fas fa-cloud-download-alt",
				on: {
					click: function (t) {
						return t.stopPropagation(), e.downloadReplay(e.replay)
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "replay-button fas fa-trash-alt",
				on: {
					click: function (t) {
						return t.stopPropagation(), e.deleteReplay(e.replay.name)
					}
				}
			})])])])
		},
		s = [];
	a._withStripped = true, n.d(t, "a", function () {
		return a
	}), n.d(t, "b", function () {
		return s
	})
}, function (e, t) {
	t.neon = [16776960, 65280, 65535, 16711935], t.basic = [16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023, 8323327, 16711935, 16711807], t.hsl15 = [16711680, 16728064, 16744448, 16760576, 16776960, 12582656, 8453888, 4259584, 65280, 65344, 65408, 65471, 65535, 49151, 32767, 16639, 255, 4194559, 8323327, 12517631, 16711935, 16711871, 16711808, 16711744]
}, function (e, t, n) {
	var a = new class {
		constructor() {
			this.ads = {}
		}
		addAd(e, t, n) {
			this.ads[e] = {
				elementId: t,
				lastRefresh: 0,
				waitInterval: n || 0
			}
		}
		getAd(e) {
			var t = this.ads[e];
			return t || (console.warn("Ad with alias " + e + " not found!"), null)
		}
		pushAd(e) {
			aiptag.cmd.display.push(function () {
				aipDisplayTag.display(e)
			})
		}
		refreshAd(e) {
			var t = this.getAd(e);
			if (!t) return false;
			var n = Date.now();
			return !(t.lastRefresh + 1e3 * t.waitInterval > n || (t.lastRefresh = n, this.pushAd(t.elementId), 0))
		}
	};
	e.exports = {
		loadAdinplay: function (e) {},
		refreshAd: function (e) {},
		loadMenuAds: function () {}
	}
}, function (e, t) {
	e.exports = {
		initialData: function (e) {
			var t = 1,
				n = {
					border: {}
				};
			return n.protocol = e.getUint8(t, true), t += 1, n.protocol >= 2 ? (n.gameModeId = e.getUint8(t, true), t += 1, n.instanceSeed = e.getUint16(t, true), t += 2, n.playerId = e.getUint16(t, true), t += 2, n.border.width = e.getUint32(t, true), t += 4, n.border.height = e.getUint32(t, true), t += 4) : function () {
				n.instanceSeed = e.getUint16(t, true), t += 2, n.playerId = e.getUint16(t, true), t += 2;
				var a = e.getUint16(t, true);
				t += 2, n.border.width = a, n.border.height = a
			}(), n
		}
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
	"use strict";
	var a = n(69),
		s = n(29),
		i = (n(167), n(0)),
		r = Object(i.a)(s.default, a.a, a.b, false, null, "0eaeaf66", null);
	r.options.__file = "src/components/modal.vue", t.default = r.exports
}, function (e, t, n) {
	"use strict";
	var a = n(70),
		s = n(34),
		i = (n(212), n(0)),
		r = Object(i.a)(s.default, a.a, a.b, false, null, "1dbc6ed9", null);
	r.options.__file = "src/components/replay-item.vue", t.default = r.exports
}, function (e, t, n) {
	"use strict";
	var a = n(68),
		s = n(50),
		i = (n(242), n(0)),
		r = Object(i.a)(s.default, a.a, a.b, false, null, "4c95bd45", null);
	r.options.__file = "src/components/minimap.vue", t.default = r.exports
}, function (e, t, n) {
	"use strict";
	n.r(t);
	var a = n(7),
		s = (n.n(a), n(112));
	n.n(s);
	n(23).notifyUnsupportedBrowser(), n(1), n(128), n(130), n(147), n(258), n(256), n(257)
}, function (e, t, n) {
	var a = n(2),
		s = n(113);
	"string" == typeof (s = s.__esModule ? s.default : s) && (s = [
		[e.i, s, ""]
	]);
	var i = {
			insert: "head",
			singleton: false
		},
		r = (a(s, i), s.locals ? s.locals : {});
	e.exports = r
}, function (e, t, n) {}, function (e, t) {
	e.exports = class {
		constructor(e) {
			this.position = e.pivot, this.scale = e.scale
		}
	}
}, function (e, t, n) {
	var a = n(5);
	e.exports = class {
		constructor(e, t) {
			var n, s, i;
			this.border = e, this.container = new PIXI.Container, this.background = new PIXI.Container, this.borderSprite = (n = e.width, s = e.height, (i = new PIXI.Graphics).lineStyle(45, 0, 1, .5), i.drawRect(0, 0, n, s), i.endFill(), i.pivot.set(n / 2, s / 2), i), this.background.addChild(this.borderSprite), this.foreground = new PIXI.Container, this.food = new PIXI.Container, this.food.visible = a.foodVisible, this.container.addChild(this.background, this.food, this.foreground), this.setPosition(), t && this.setBackgroundImage()
		}
		setPosition() {
			this.container.position.x = window.innerWidth / 2, this.container.position.y = window.innerHeight / 2
		}
		setBorder({
			width: e,
			height: t
		}) {
			this.border = {
				width: e,
				height: t
			}, this.borderSprite.width = e, this.borderSprite.height = t;

			console.log(this.borderSprite);

			var n = this.backgroundSprite;
			n && (n.width = e, n.height = t)
		}
		sort() {
			this.foreground.children.sort(function (e, t) {
				return e = e.gameData, t = t.gameData, e.size === t.size ? e.id - t.id : e.size - t.size
			})
		}
		addCell(e) {
			this.foreground.addChild(e)
		}
		addFood(e) {
			this.food.addChild(e)
		}
		toggleBackgroundImage(e) {
			e && !this.backgroundSprite ? this.setBackgroundImage() : !e && this.destroyBackgroundImage(true)
		}
		setBackgroundImage() {
			var e = a.backgroundImageUrl;
			if (e) {
				var t = (a.backgroundImageRepeat ? PIXI.TilingSprite : PIXI.Sprite).from(e);
				t.width = this.border.width, t.height = this.border.height, t.alpha = a.backgroundImageOpacity, t.anchor.set(.5);
				var n = this.backgroundSprite;
				if (n) {
					var s = t.texture !== n.texture;
					this.destroyBackgroundImage(s)
				}
				this.backgroundSprite = t, this.background.addChildAt(t, 0)
			} else this.destroyBackgroundImage()
		}
		destroyBackgroundImage(e) {
			this.backgroundSprite && (this.backgroundSprite.destroy(!!e), this.backgroundSprite = null)
		}
	}
}, function (e, t, n) {
	var a = n(117);
	e.exports = class {
		constructor(e) {
			this.game = e, this.players = {}
		}
		getPlayer(e) {
			var t = this.players[e] || null;
			return !t && console.warn("Trying to get non-existing player", e), t
		}
		addPlayer(e) {
			return this.players[e] && console.error("Player already exists", e), this.players[e] = new a(this.game, e), this.players[e]
		}
		setPlayerData({
			pid: e,
			uid: t,
			nickname: n,
			skinUrl: s,
			nameColor: i,
			tagId: r
		}) {
			var o = this.players[e];
			!o && (o = this.players[e] = new a(this.game, e, t)), o.setName(n, i);
			var l = o.setSkin(s),
				c = o.setTagId(r);
			return this.game.settings.skinsEnabled && (l || c) && o.updateSkinVisibility(), o
		}
		onSkinsChanged(e) {
			e ? this.showSkins() : this.hideSkins()
		}
		updateSkins(e) {
			if (this.game.settings.skinsEnabled)
				for (var t in this.players) {
					var n = this.players[t]; - 1 === e.indexOf(n) && n.updateSkinVisibility()
				}
		}
		showSkins() {
			for (var e in this.players) {
				var t = this.players[e];
				t.shouldRenderSkin && t.showSkin()
			}
		}
		hideSkins() {
			for (var e in this.players) this.players[e].hideSkin()
		}
		delayedRemovePlayer(e) {
			var t = this.players[e],
				n = this.game.replay.updateHistory[0];
			t && (n && t.lastUpdate && t.lastUpdate.packetId >= n.packetId ? t.lastUpdate.clearWhenShifted.push(e) : this.removePlayer(e))
		}
		removePlayer(e) {
			var t = this.players[e];
			t && (t.clearCachedData(), delete this.players[e])
		}
		destroy() {
			for (var e in this.players) this.removePlayer(e)
		}
	}
}, function (e, t, n) {
	var a = n(5),
		s = n(71).basic,
		i = a.cellSize,
		r = {
			fontFamily: "Hind Madurai",
			fontSize: 80,
			lineJoin: "round",
			fill: 16777215,
			stroke: true,
			strokeThickness: 8
		};

	function o(e) {
		e = e || 0;
		var t = new PIXI.Graphics;
		return t.lineStyle(a.cellBorderSize, 0, .5), t.beginFill(e), t.drawCircle(0, 0, a.cellSize / 2), t.endFill(), t
	}
	e.exports = class {
		constructor(e, t, n) {
			this.game = e, this.pid = t, this.uid = n || null, this.skinUrl = null, this.tagId = null, this.isMe = t === e.playerId || t === e.multiboxPid, this.texture = PIXI.RenderTexture.create(i, i), this.cellContainer = this.createCellContainer(), this.renderCell()
		}
		get onSameTag() {
			return this.game.tagId === this.tagId
		}
		get shouldRenderSkin() {
			return this.skinUrl && this.onSameTag
		}
		setOutline(e) {
			e = e || 0, this.outlineColor = e;
			var t = a.cellSize / 2,
				n = new PIXI.Graphics;
			n.lineStyle(20, e, 1), n.drawCircle(0, 0, t - 9.5), n.endFill(), n.pivot.set(-t), this.game.renderer.render(n, this.texture, false)
		}
		setCrown(e) {
			this.hasCrown = e;
			for (var t = this.pid, n = this.game.nodelist, a = 0; a < n.length; a++) {
				var s = n[a];
				s.pid === t && (e ? s.addCrown() : s.removeCrown())
			}
		}
		createCellContainer() {
			var e = new PIXI.Container,
				t = o(this.getCellColor());
			return e.pivot.set(-i / 2), e.addChild(t), e
		}
		createSkinSprite(e) {
			var t = new PIXI.BaseTexture(e),
				n = new PIXI.Texture(t),
				s = new PIXI.Sprite(n);
			return s.width = s.height = a.cellSize, s.anchor.set(.5), s
		}
		renderCell() {
			console.assert(this.cellContainer.children.length <= 3, "cellContainer has unexpected sprites"), this.game.renderer.render(this.cellContainer, this.texture, true), this.outlineColor && this.setOutline(this.outlineColor)
		}
		setTagId(e) {
			return e || (e = null), e !== this.tagId && (this.tagId = e, true)
		}
		setNameColor(e) {
			return e ? (e = parseInt(e, 16), this.nameColor = e, this.nameColorCss = PIXI.utils.hex2string(e)) : (this.nameColor = null, this.nameColorCss = null), this.nameColor
		}
		setName(e, t) {
			e || (e = "Unnamed");
			var n = "Unnamed" === e,
				a = n ? "" : e,
				s = this.setNameColor(n ? null : t);
			if (this.setNameSprite(a, s), this.nameSprite.texture.width > 750 && "Long Name" !== e) this.setName("Long Name");
			else {
				this.name = e;
				var i = s || (this.isMe ? 0x5f85db : null);
				this.game.events.$emit("minimap-create-node", this.pid, a, s, i)
			}
		}
		setNameSprite(e, t) {
			this.nameSprite ? this.nameSprite.text = e : this.nameSprite = new PIXI.Text(e, r), this.nameSprite.style.fill = t || 16777215, this.nameSprite.updateText()
		}
		destroySkin() {
			return !!this.skinSprite && (this.skinSprite.mask.destroy(true), this.skinSprite.destroy(true), this.skinSprite = null, true)
		}
		updateSkinVisibility() {
			this.shouldRenderSkin ? this.showSkin() : this.hideSkin()
		}
		setSkin(e) {
			return (e = e ? e.replace("http:", "https:").replace("/imgur.com", "/i.imgur.com") : null) !== this.skinUrl && (this.abortSkinLoaderIfExist(), this.destroySkin() && this.renderCell(), this.skinUrl = e, true)
		}
		loadSkinAndRender() {
			console.assert(!this.abortSkinLoader, "Called loadSkin while other skin was loading"), this.abortSkinLoaderIfExist(), this.abortSkinLoader = this.game.skinLoader.loadSkin(this.skinUrl, e => {
				this.skinSprite = this.createSkinSprite(e), this.skinSprite.mask = o(), this.cellContainer.addChild(this.skinSprite.mask, this.skinSprite), this.renderCell()
			})
		}
		showSkin() {
			this.skinSprite ? (this.skinSprite.visible = true, this.renderCell()) : this.loadSkinAndRender()
		}
		hideSkin() {
			this.abortSkinLoaderIfExist(), this.skinSprite && (this.skinSprite.visible = false, this.renderCell())
		}
		abortSkinLoaderIfExist() {
			this.abortSkinLoader && (this.abortSkinLoader(), this.abortSkinLoader = null)
		}
		getCellColor() {
			var e = this.game.seededRandom(this.pid),
				t = Math.floor(e * s.length);
			return s[t]
		}
		clearCachedData() {
			this.abortSkinLoaderIfExist(), this.destroySkin(), this.cellContainer.destroy(true), this.texture.destroy(true), this.texture.clearedFromCache = true, this.nameSprite && this.nameSprite.destroy(true), this.game.events.$emit("minimap-destroy-node", this.pid)
		}
	}
}, function (e, t, n) {
	var a = n(119),
		s = n(120),
		i = new Image;
	i.src = s, e.exports = {
		createMassFont: function () {
			var e = new PIXI.BaseTexture(i),
				t = new PIXI.Texture(e),
				n = (new DOMParser).parseFromString(a, "text/xml");
			PIXI.BitmapText.registerFont(n, t)
		}
	}
}, function (e, t) {
	e.exports = '<?xml version="1.0"?>\n<font>\n  <info face="Mass Font" size="75" bold="1" italic="0" charset="" unicode="1" stretchH="100" smooth="1" aa="1" padding="0,0,0,0" spacing="1,1" outline="3"/>\n  <common lineHeight="73" base="60" scaleW="256" scaleH="256" pages="1" packed="0" alphaChnl="1" redChnl="0" greenChnl="0" blueChnl="0"/>\n  <pages>\n    <page id="0" file="mass_0.png" />\n  </pages>\n  <chars count="12">\n    <char id="46" x="151" y="49" width="18" height="17" xoffset="-2" yoffset="47" xadvance="15" page="0" chnl="15" />\n    <char id="48" x="38" y="0" width="38" height="49" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />\n    <char id="49" x="227" y="0" width="27" height="47" xoffset="1" yoffset="16" xadvance="34" page="0" chnl="15" />\n    <char id="50" x="151" y="0" width="37" height="48" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />\n    <char id="51" x="77" y="0" width="36" height="49" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />\n    <char id="52" x="74" y="50" width="39" height="47" xoffset="-3" yoffset="16" xadvance="34" page="0" chnl="15" />\n    <char id="53" x="38" y="50" width="35" height="48" xoffset="-1" yoffset="16" xadvance="34" page="0" chnl="15" />\n    <char id="54" x="189" y="0" width="37" height="48" xoffset="-1" yoffset="16" xadvance="34" page="0" chnl="15" />\n    <char id="55" x="114" y="50" width="36" height="47" xoffset="-1" yoffset="16" xadvance="34" page="0" chnl="15" />\n    <char id="56" x="114" y="0" width="36" height="49" xoffset="-1" yoffset="15" xadvance="34" page="0" chnl="15" />\n    <char id="57" x="0" y="53" width="37" height="48" xoffset="-2" yoffset="15" xadvance="34" page="0" chnl="15" />\n    <char id="107" x="0" y="0" width="37" height="52" xoffset="0" yoffset="11" xadvance="34" page="0" chnl="15" />\n  </chars>\n</font>\n'
}, function (e, t) {
	e.exports = "data:image/png;base64,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"
}, function (e, t, n) {
	var a = n(5),
		s = n(59),
		i = {};
	e.exports = {
		getTexture: function (e) {
			var t = i[e];
			return t || (i[e] = function (e) {
				var t, n, i, r = a.cellSize,
					o = r / 2,
					l = (t = o, n = e, (i = new PIXI.Graphics).beginFill(n), i.drawCircle(0, 0, t), i.endFill(), i);
				l.position.set(o);
				var c = PIXI.RenderTexture.create(r, r);
				return s.render(l, c), c
			}(e))
		},
		destroyCache: function () {
			for (var e in i) i[e].destroy(true), delete i[e]
		}
	}
}, function (e, t, n) {
	var a = n(59),
		{
			loadImage: s
		} = n(7),
		i = 200,
		r = PIXI.RenderTexture.create(i, i);
	async function o(e) {
		var t = await s(e),
			n = PIXI.Sprite.from(t);
		n.width = n.height = i, a.render(n, r, true), n.destroy(true)
	}
	o("/img/virus.png"), e.exports = {
		getTexture: function () {
			return r
		},
		loadVirusFromUrl: o
	}
}, function (e, t) {
	var n = {
		5: function (e) {
			var t, n = e.border.width,
				a = n / 2,
				s = e.border.height / 2,
				i = new PIXI.Container;
			(t = new PIXI.Graphics).beginFill(2593235, .1), t.lineStyle(40, 0), t.drawRect(0, 0, n, 3500), t.position.set(-a, -s), i.addChild(t), (t = new PIXI.Graphics).beginFill(2593235, .1), t.lineStyle(40, 0), t.drawRect(0, 0, n, 2e3), t.position.set(-a, s - 2e3), i.addChild(t), e.scene.background.addChild(i)
		}
	};
	t.prepareMode = function (e, t) {
		var a = n[t];
		a && a(e)
	}
}, , function (e, t, n) {
	var a = n(126);
	e.exports = class {
		constructor() {
			this.loaders = {}, this.worker = new a, this.worker.addEventListener("message", this.onSkinLoaded.bind(this))
		}
		createLoader(e) {
			return {
				image: null,
				error: null,
				callbacks: [e]
			}
		}
		clearCallbacks() {
			for (var e in this.loaders) this.loaders[e].callbacks = []
		}
		removeLoaderCallback(e, t) {
			var n = e.callbacks.indexOf(t);
			n >= 0 && e.callbacks.splice(n, 1)
		}
		loadSkin(e, t) {
			var n = this.loaders[e];
			return n ? n.image ? (t(n.image), null) : n.error ? null : (n.callbacks.push(t), this.removeLoaderCallback.bind(this, n, t)) : (n = this.loaders[e] = this.createLoader(t), this.worker.postMessage(e), this.removeLoaderCallback.bind(this, n, t))
		}
		onSkinLoaded(e) {
			var {
				skinUrl: t,
				bitmap: n,
				error: a
			} = e.data, s = this.loaders[t];
			if (a) return s.error = true, void(s.callbacks = []);
			for (s.image = n; s.callbacks.length;) s.callbacks.pop()(n)
		}
	}
}, function (e, t, n) {
	e.exports = function () {
		return new Worker(n.p + "feef3e7f8ac46a1613ad.worker.js")
	}
}, function (e, t) {
	e.exports = class {
		constructor() {
			this.total = 0, this.count = 0
		}
		add(e) {
			this.total += e, this.count++
		}
		getAndReset() {
			var e = this.total / this.count;
			return this.count = this.total = 0, e
		}
	}
}, function (e, t, n) {
	var a = n(129),
		s = n(1),
		i = n(7),
		r = n(4),
		o = n(73),
		l = n(24),
		c = [],
		d = a.createInstance({
			name: "game-replays"
		});
	var u = h(new ArrayBuffer(1));

	function h(e) {
		return btoa(String.fromCharCode.apply(null, new Uint8Array(e)))
	}

	function p(e) {
		e = atob(e);
		for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
		return new DataView(t)
	}
	s.replay = {
		database: d,
		updateHistory: c,
		addHistory: function (e) {
			if (c.push(e), c.length > 500) {
				for (var t = c[0].clearWhenShifted; t.length;) s.playerManager.removePlayer(t.pop());
				c.shift()
			}
		},
		play: function (e) {
			s.running && s.stop(), s.closeConnection(), r.toast.close();
			var t = 1,
				n = e.split("|");
			"REPLAY" === n[0] && (t = parseInt(n[1]), n = n.slice(3));
			var a = n.map(p),
				i = o.initialData(a.shift()),
				l = [];
			if (t >= 4) {
				for (; a[0].getUint8(0);) l.push(a.shift());
				a.shift()
			} else l.push(a.shift());
			i.replayUpdates = a, s.start(i), l.forEach(e => s.parseMessage(e)), s.showMenu(false)
		},
		save: function () {
			var e = c;
			if (e.length) {
				var t = [];
				for (var n in s.playerManager.players) {
					var a = s.playerManager.players[n];
					a.lastUpdate && a.lastUpdate.packetId >= e[0].packetId && t.push(a)
				}
				var o, p, v, f = h(s.initialDataPacket.buffer),
					g = function (e) {
						e = e.map(e => {
							var t = {
								pid: e.pid,
								nickname: e.name,
								skinUrl: e.skinUrl
							};
							return e.tagId && (t.tagId = e.tagId), t
						});
						var t = JSON.stringify(e),
							n = new l;
						return n.uint8(16), n.utf8(t), h(n.write())
					}(t),
					m = e.map(e => h(e.buffer)).join("|"),
					y = i.getTimestamp(),
					w = s.getThumbnail(),
					b = [];
				b.push("REPLAY"), b.push(4), b.push(w), b.push(f), s.multiboxPid && b.push(h((o = s.multiboxPid, p = new ArrayBuffer(3), (v = new DataView(p)).setUint8(0, 8), v.setUint16(1, o, true), p))), b.push(g), b.push(u), b.push(m);
				var k = b.join("|");
				d.setItem(y, k, () => {
					s.events.$emit("replay-added"), s.addServerMessage("Replay saved!"), r.toast.fire({
						type: "info",
						title: "Replay saved!",
						timer: 1500
					})
				}).catch(e => {
					console.error("replay.save", e);
					var t = "Error saving replay";
					"string" == typeof e ? t += ": " + e : e && e.message && (t += ": " + e.message), r.toast.fire({
						type: "error",
						title: t
					})
				})
			}
		}
	}
}, , function (e, t, n) {
	var a = n(1),
		s = n(4),
		i = n(131),
		{
			createBuffer: r
		} = n(7),
		o = n(146),
		q = n(5);

	function l(e) {
		s.toast.fire({
			type: "error",
			title: e,
			timer: 5e3
		})
	}
	a.send = function (e) {
		p() ? a.ws.send(e) : !a.replaying && console.log("WebSocket not open?")
	}, a.sendUint8 = function (e) {
		var t = r(1);
		t.setUint8(0, e), a.send(t)
	}, a.ping = function () {
		a.pingstamp = Date.now();
		var e = r(1);
		e.setUint8(0, 3), a.send(e)

	};
	var c = 0;

	function d() {
		a.ws && (a.currentWsId = null, a.ws.onmessage = null, a.ws.onclose = null, a.ws.onerror = null, a.ws.close())
	}

	function u() {
		3 === a.ws.readyState && a.events.$emit("connect-server", a.lastWsUrl)
	}

	function h(e) {
		if (q.autoReconnect && a.lastWsUrl) {
			setTimeout(u, 2000), s.toast.fire({
				type: "info",
				title: "Attempting to reconnect to server...",
				timer: 5000
			})
		} else {
			if (a.currentWsId = null, a.running && a.stop(), 1003 === e.code) {
				setTimeout(u, 1500), s.toast.fire({
					type: "info",
					title: "Server restarting ...",
					timer: 5000
				})
			} else {
				var t = "You have been disconnected";
				e.reason && (t += " (" + e.reason + ")"), l(t)
			}
		}
		a.showMenu(true, true);
	}

	function p() {
		return !(!a.ws || 1 !== a.ws.readyState)
	}
	a.connect = function (e, f) {
		a.lastWsUrl = e, a.running && a.stop(), d(), a.events.$emit("chat-clear");
		var t = a.ws = new o(e, "tFoL46WDlZuRja7W6qCl");
		t.binaryType = "arraybuffer", t.onopen = function () {
			if (p()) {
				a.currentWsId = ++c;
				a.events.$emit("players_menu", true), a.events.$emit("account_menu", true), a.events.$emit("chatbox_menu", true), a.events.$emit("options_menu", true), a.events.$emit("replays_menu", true), a.state.connectionUrl = e, t.onclose = h
			}
		}, t.onclose = function (e) {
			l("Connection failed!")
		}, t.onmessage = function (e) {
			i(new DataView(e.data))
		}
	}, a.closeConnection = d, a.isConnected = p
}, function (e, t, n) {
	var a = n(1),
		s = n(4),
		i = n(132),
		r = n(73),
		o = n(140),
		l = n(141),
		c = n(142),
		{
			htmlEncode: d
		} = n(7),
		u = (n(24), n(143)),
		h = 1;
	e.exports = a.parseMessage = function (e) {
		function t() {
			for (var t, n = ""; 0 != (t = e.getUint16(p, true));) p += 2, n += String.fromCharCode(t);
			return p += 2, n
		}

		function n() {
			for (var t, n = ""; 0 != (t = e.getUint8(p, true));) p += 1, n += String.fromCharCode(t);
			return p += 1, n
		}
		e.packetId = h++, e.clearWhenShifted = [];
		var p = 0;
		switch (e.getUint8(p++)) {
			case 1:
				var v = r.initialData(e);
				a.initialDataPacket = e, a.start(v);
				break;
			case 2:
				var f = new Uint8Array(e.buffer, 1),
					g = u(f);
				a.sendJoinData(g);
				break;
			case 3:
				var m = Date.now() - a.pingstamp;
				a.updateStats(m);
				break;
			case 4:
				for (; I = e.getUint16(p, true);) a.playerManager.delayedRemovePlayer(I), p += 2;
				break;
			case 6:
				a.sendUint8(6);
				break;
			case 7:
				var y, w;
				if (1 & (A = e.getUint8(p++))) {
					var b = e.getUint16(p, true);
					y = a.playerManager.getPlayer(b), p += 2
				}
				if (2 & A) {
					var k = e.getUint16(p, true);
					w = a.playerManager.getPlayer(k), p += 2
				}
				w && w.setCrown(false), y && y.setCrown(true);
				break;
			case 8:
				a.multiboxPid = e.getUint16(p, true);
				break;
			case 9:
				a.activePid && a.playerManager.getPlayer(a.activePid).setOutline(16777215), a.activePid = e.getUint16(p, true), a.playerManager.getPlayer(a.activePid).setOutline(16711935);
				break;
			case 10:
				i(e);
				break;
			case 11:
				var C = c(a, e);
				a.events.$emit("leaderboard-update", C);
				break;
			case 12:
				var x = l(e);
				a.events.$emit("minimap-positions", x);
				break;
			case 13:
				var S = o(e),
					I = S.pid,
					_ = S.text;
				if (!I) return void a.addServerMessage(_);
				if (!(O = a.playerManager.getPlayer(I))) return void console.warn("Received message from non-existing player", I);
				var M = {
					pid: I,
					uid: O.uid,
					text: _,
					from: O.name
				};
				O.nameColorCss && (M.fromColor = O.nameColorCss), a.events.$emit("chat-message", M);
				break;
			case 14:
				var A;
				if (v = {}, 2 & (A = e.getUint8(p++))) {
					var P = {
						1: "success",
						2: "error",
						3: "warning",
						4: "info"
					}[e.getUint8(p++)];
					P && (v.type = P)
				}
				4 & A && (v.timer = e.getUint16(p, true), p += 2), v.title = d(n()), v.background = '#121212', s.toast.fire(v);
				break;
			case 15:
				for (; I = e.getUint16(p, true), p += 2, I;) {
					var E = t(),
						L = n();
					a.playerManager.setPlayerData({
						pid: I,
						nickname: E,
						skinUrl: L
					})
				}
				break;
			case 16:
				var U = n(),
					B = decodeURIComponent(escape(U)),
					T = JSON.parse(B),
					R = T.find(e => e.pid === a.playerId),
					H = false;
				R && (H = a.setTagId(R.tagId));
				for (var z = [], D = 0; D < T.length; D++) {
					var O = a.playerManager.setPlayerData(T[D]);
					z.push(O)
				}
				H && (a.events.$emit("minimap-positions", []), a.playerManager.updateSkins(z));
				break;
			case 17:
				a.center.x = e.getInt32(p, true), p += 4, a.center.y = e.getInt32(p, true), p += 4;
				break;
			case 18:
				a.replay.updateHistory.length = 0, a.clearNodes();
				break;
			case 19:
				var N = e.getUint8(p++),
					F = e.getUint32(p, true);
				if (p += 4, a.events.$emit("xp-update", F), N) {
					var W = e.getUint16(p, true);
					p += 2, a.levelUp(W)
				}
				break;
			case 20:
				var V = e.getUint16(p, true);
				p += 2;
				var j = e.getUint16(p, true);
				p += 2;
				var X = e.getUint32(p, true);
				p += 4;
				a.autoRespawn ? setTimeout(() => a.joinGame(), 1350) : (a.state.loadingAds = true, setTimeout(() => {
					a.state.isAlive ? a.state.loadingAds = false : (a.showMenu(false), a.setDeathStats({
						timeAlive: V,
						killCount: j,
						highscore: X
					}), a.showDeathScreen(true))
				}, 900));
				break;
			case 21:
				break;
			case 22:
				if (!window.grecaptcha) return void alert("Captcha library is not loaded");
				a.events.$emit("show-image-captcha")
		}
	}
}, function (e, t, n) {
	var a = n(1),
		s = n(133),
		i = n(5);
	e.exports = function (e) {
		var t = a.nodes,
			n = a.nodelist;
		a.timestamp = Date.now();
		for (var r, o, l = 1, c = !a.spectating && !a.replaying, d = false;;) {
			var u = e.getUint8(l++);
			if (0 === u) break;
			1 === u ? (o = e.getUint16(l), l += 2) : o = null, r = e.getUint32(l), l += 4;
			var h = e.getInt32(l);
			l += 4;
			var p = e.getInt32(l);
			l += 4;
			var v = e.getInt16(l);
			l += 2;
			var f = t[r];
			if (f) f.update(), f.ox = f.x, f.oy = f.y, f.oSize = f.size;
			else {
				var g = {
					id: r,
					x: h,
					y: p,
					size: v
				};
				switch (u) {
					case 1:
						var m = a.playerManager.getPlayer(o);
						g.texture = m.texture, f = new s.PlayerCell(g, m), a.scene.addCell(f.sprite);
						break;
					case 2:
						f = new s.Virus(g), a.scene.addCell(f.sprite);
						break;
					case 3:
						f = new s.EjectedMass(g), a.scene.addCell(f.sprite);
						break;
					case 4:
						f = new s.Food(g), a.scene.addFood(f.sprite);
						break;
					case 5:
						f = new s.DeadCell(g), a.scene.addCell(f.sprite);
						break;
					case 6:
						f = new s.Crown(g), a.scene.addCell(f.sprite);
						break;
					default:
						f = new s.DeadCell(g), a.scene.addCell(f.sprite);
						break;
				}
				n.push(f), t[r] = f
			}
			f.nx = h, f.ny = p, f.nSize = v, f.updateTime = a.timestamp, f.player && (f.player.isMe && (d = true), c && (f.player.lastUpdate = e))
		}
		for (c && a.replay.addHistory(e), a.state.isAlive = d, d && (a.spectating = false); r = e.getUint32(l), l += 4, 0 !== r;) t[r] && t[r].destroy();
		for (; r = e.getUint32(l), l += 4, 0 !== r;) {
			var y = t[r],
				w = e.getUint32(l);
			l += 4;
			var b = t[w];
			if (y)
				if (b) {
					y.destroy(i.eatAnimation), y.ox = y.x, y.oy = y.y, y.oSize = y.size;
					var k = y.size / b.nSize;
					k = 0 > k ? 0 : 1 < k ? 1 : k, y.newPositionScale = k, y.nx = b.x, y.ny = b.y, y.nSize = 0, y.updateTime = a.timestamp
				} else y.destroy();
			else !a.replaying && console.warn("Prey not found:", r)
		}
	}
}, function (e, t, n) {
	t.PlayerCell = n(134), t.Food = n(135), t.Virus = n(136), t.EjectedMass = n(137), t.DeadCell = n(138), t.Crown = n(139)
}, function (e, t, n) {
	var a = n(14);
	e.exports = class extends a {
		constructor(e, t) {
			super(e), this.player = t, this.pid = t.pid, t.hasCrown && this.addCrown()

			this.sprite.addChild(this.line = new PIXI.Graphics);
		}
		addCrown() {
			if (this.crownSprite) console.error("addCrown: crown already exists");
			else {
				var e, t = this.game.crownPool;
				t.length ? e = t.pop() : ((e = PIXI.Sprite.from("/img/crown.png")).scale.set(.7), e.pivot.set(0, 643), e.anchor.x = .5, e.rotation = -.5, e.alpha = .7), this.crownSprite = e, this.sprite.addChild(e)
			}
		}
		removeCrown() {
			var e = this.crownSprite;
			e ? (this.sprite.removeChild(e), this.game.crownPool.push(e), this.crownSprite = null) : console.error("removeCrown: crown doesnt exist")
		}
		onUpdate() {
			var e, t = this.game.settings;
			t.namesEnabled && !this.nameSprite && this.player && this.player.nameSprite && (this.nameSprite = new PIXI.Sprite(this.player.nameSprite.texture), this.nameSprite.anchor.set(.5), this.sprite.addChild(this.nameSprite)), t.showMass && !this.massText && (this.massText = this.game.massTextPool.shift() || ((e = new PIXI.BitmapText("", {
				font: "75px Mass Font",
				align: "right"
			})).anchor.x = .5, e.anchor.y = -.45, e), this.sprite.addChild(this.massText));
			var n = this.game.cameraScale * this.size * this.game.renderer.resolution;
			this.crownSprite && (this.crownSprite.visible = n > 16);
			var a = n > 40;
			if (this.nameSprite && (this.nameSprite.visible = t.namesEnabled && a), this.massText)
				if (t.showMass && a) {
					var s = this.getMass();
					t.shortMass && (s = this.game.getShortMass(s)), this.massText.text = s, this.massText.visible = true
				} else this.massText.visible && (this.massText.visible = false)
		}
		onDestroy() {
			this.massText && (this.sprite.removeChild(this.massText), this.game.massTextPool.push(this.massText)), this.crownSprite && this.removeCrown()
		}
	}
}, function (e, t, n) {
	n(1);
	var a = n(14),
		s = n(12),
		i = n(71).neon;
	e.exports = class extends a {
		constructor(e) {
			var t = i[e.id % i.length];
			e.texture = s.cells.getTexture(t), super(e)
		}
	}
}, function (e, t, n) {
	n(1);
	var a = n(14),
		s = n(12);
	e.exports = class extends a {
		constructor(e) {
			e.texture = s.virus.getTexture(), super(e)
		}
	}
}, function (e, t, n) {
	n(1);
	var a = n(14),
		s = n(12);
	e.exports = class extends a {
		constructor(e) {
			e.texture = s.cells.getTexture(16753920), super(e)
		}
	}
}, function (e, t, n) {
	n(1);
	var a = n(14),
		s = n(12);
	e.exports = class extends a {
		constructor(e) {
			e.texture = s.cells.getTexture(4210752), super(e), this.sprite.alpha = .5
		}
	}
}, function (e, t, n) {
	var a = n(14);
	n(12);
	e.exports = class extends a {
		constructor(e) {
			e.texture = PIXI.Texture.from("/img/crown.png"), super(e), this.sprite.alpha = .7
		}
	}
}, function (e, t) {
	e.exports = function (e) {
		var t = 1,
			n = e.getInt16(t, true);
		t += 2;
		for (var a = "", s = ""; 0 != (s = e.getUint16(t, true));) t += 2, a += String.fromCharCode(s);
		return {
			pid: n,
			text: a
		}
	}
}, function (e, t) {
	e.exports = function (e) {
		for (var t = 1, n = [];;) {
			var a = e.getUint16(t, true);
			if (t += 2, !a) break;
			var s = e.getUint8(t, true) / 255;
			t += 1;
			var i = e.getUint8(t, true) / 255;
			t += 1, n.push({
				pid: a,
				x: s,
				y: i
			})
		}
		return n
	}
}, function (e, t) {
	e.exports = function (e, t) {
		for (var n = 1, a = [];;) {
			var s = t.getUint16(n, true);
			if (n += 2, !s) break;
			var i = e.playerManager.getPlayer(s);
			i && a.push({
				text: i.name,
				color: i.nameColorCss || "#ffffff"
			})
		}
		return a
	}
}, function (e, t, n) {
	var a = n(144);
	n(145), e.exports = function (e) {
		var t = e.length,
			n = a._malloc(t),
			s = new Uint8Array(a.HEAPU8.buffer, n, t);
		s.set(e), a._gen(n, t);
		var i = new Uint8Array(new ArrayBuffer(t));
		return i.set(s), a._free(n), i
	}
}, function (e, t, n) {
	var a, s = void 0 !== s ? s : {},
		i = {};
	for (a in s) s.hasOwnProperty(a) && (i[a] = s[a]);
	var r, o = [],
		l = true,
		c = false,
		d = "";
	(l || c) && (c ? d = self.location.href : "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.lastIndexOf("/") + 1) : "", function (e) {
		var t = new XMLHttpRequest;
		return t.open("GET", e, false), t.send(null), t.responseText
	}, c && (r = function (e) {
		var t = new XMLHttpRequest;
		return t.open("GET", e, false), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
	}), function (e, t, n) {
		var a = new XMLHttpRequest;
		a.open("GET", e, true), a.responseType = "arraybuffer", a.onload = function () {
			200 == a.status || 0 == a.status && a.response ? t(a.response) : n()
		}, a.onerror = n, a.send(null)
	});
	s.print || console.log.bind(console);
	var u, h = s.printErr || console.warn.bind(console);
	for (a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
	i = null, s.arguments && (o = s.arguments), s.thisProgram && s.thisProgram, s.quit && s.quit, s.wasmBinary && (u = s.wasmBinary), s.noExitRuntime && s.noExitRuntime, "object" != typeof WebAssembly && X("no native wasm support detected");
	var p, v = false,
		f = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

	function g(e, t) {
		return e ? function (e, t, n) {
			for (var a = t + n, s = t; e[s] && !(s >= a);) ++s;
			if (s - t > 16 && e.subarray && f) return f.decode(e.subarray(t, s));
			for (var i = ""; t < s;) {
				var r = e[t++];
				if (128 & r) {
					var o = 63 & e[t++];
					if (192 != (224 & r)) {
						var l = 63 & e[t++];
						if ((r = 224 == (240 & r) ? (15 & r) << 12 | o << 6 | l : (7 & r) << 18 | o << 12 | l << 6 | 63 & e[t++]) < 65536) i += String.fromCharCode(r);
						else {
							var c = r - 65536;
							i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
						}
					} else i += String.fromCharCode((31 & r) << 6 | o)
				} else i += String.fromCharCode(r)
			}
			return i
		}(k, e, t) : ""
	}

	function m(e, t, n) {
		return function (e, t, n, a) {
			if (!(a > 0)) return 0;
			for (var s = n, i = n + a - 1, r = 0; r < e.length; ++r) {
				var o = e.charCodeAt(r);
				if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++r)), o <= 127) {
					if (n >= i) break;
					t[n++] = o
				} else if (o <= 2047) {
					if (n + 1 >= i) break;
					t[n++] = 192 | o >> 6, t[n++] = 128 | 63 & o
				} else if (o <= 65535) {
					if (n + 2 >= i) break;
					t[n++] = 224 | o >> 12, t[n++] = 128 | o >> 6 & 63, t[n++] = 128 | 63 & o
				} else {
					if (n + 3 >= i) break;
					t[n++] = 240 | o >> 18, t[n++] = 128 | o >> 12 & 63, t[n++] = 128 | o >> 6 & 63, t[n++] = 128 | 63 & o
				}
			}
			return t[n] = 0, n - s
		}(e, k, t, n)
	}

	function y(e) {
		for (var t = 0, n = 0; n < e.length; ++n) {
			var a = e.charCodeAt(n);
			a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++n)), a <= 127 ? ++t : t += a <= 2047 ? 2 : a <= 65535 ? 3 : 4
		}
		return t
	}
	var w, b, k, C, x, S, I, _, M, A = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

	function P(e, t) {
		for (var n = e, a = n >> 1, s = a + t / 2; !(a >= s) && x[a];) ++a;
		if ((n = a << 1) - e > 32 && A) return A.decode(k.subarray(e, n));
		for (var i = "", r = 0; !(r >= t / 2); ++r) {
			var o = C[e + 2 * r >> 1];
			if (0 == o) break;
			i += String.fromCharCode(o)
		}
		return i
	}

	function E(e, t, n) {
		if (void 0 === n && (n = 2147483647), n < 2) return 0;
		for (var a = t, s = (n -= 2) < 2 * e.length ? n / 2 : e.length, i = 0; i < s; ++i) {
			var r = e.charCodeAt(i);
			C[t >> 1] = r, t += 2
		}
		return C[t >> 1] = 0, t - a
	}

	function L(e) {
		return 2 * e.length
	}

	function U(e, t) {
		for (var n = 0, a = ""; !(n >= t / 4);) {
			var s = S[e + 4 * n >> 2];
			if (0 == s) break;
			if (++n, s >= 65536) {
				var i = s - 65536;
				a += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
			} else a += String.fromCharCode(s)
		}
		return a
	}

	function B(e, t, n) {
		if (void 0 === n && (n = 2147483647), n < 4) return 0;
		for (var a = t, s = a + n - 4, i = 0; i < e.length; ++i) {
			var r = e.charCodeAt(i);
			if (r >= 55296 && r <= 57343) r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++i);
			if (S[t >> 2] = r, (t += 4) + 4 > s) break
		}
		return S[t >> 2] = 0, t - a
	}

	function T(e) {
		for (var t = 0, n = 0; n < e.length; ++n) {
			var a = e.charCodeAt(n);
			a >= 55296 && a <= 57343 && ++n, t += 4
		}
		return t
	}
	var R, H = s.INITIAL_MEMORY || 16777216;
	(p = s.wasmMemory ? s.wasmMemory : new WebAssembly.Memory({
		initial: H / 65536,
		maximum: H / 65536
	})) && (w = p.buffer), H = w.byteLength, w = R = w, s.HEAP8 = b = new Int8Array(R), s.HEAP16 = C = new Int16Array(R), s.HEAP32 = S = new Int32Array(R), s.HEAPU8 = k = new Uint8Array(R), s.HEAPU16 = x = new Uint16Array(R), s.HEAPU32 = I = new Uint32Array(R), s.HEAPF32 = _ = new Float32Array(R), s.HEAPF64 = M = new Float64Array(R);
	var z, D = [],
		O = [],
		N = [],
		F = [];
	var W = 0,
		V = null,
		j = null;

	function X(e) {
		throw s.onAbort && s.onAbort(e), h(e += ""), v = true, 1, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e)
	}
	s.preloadedImages = {}, s.preloadedAudios = {};
	var G = "data:application/octet-stream;base64,";

	function Q(e) {
		return t = e, n = G, String.prototype.startsWith ? t.startsWith(n) : 0 === t.indexOf(n);
		var t, n
	}
	var Z, Y = "https://vanis.io/js/wauth3.wasm?d2eaeb6940f5689263ad";

	function q() {
		try {
			if (u) return new Uint8Array(u);
			if (r) return r(Y);
			throw "both async and sync fetching of the wasm failed"
		} catch (e) {
			X(e)
		}
	}

	function K(e) {
		for (; e.length > 0;) {
			var t = e.shift();
			if ("function" != typeof t) {
				var n = t.func;
				"number" == typeof n ? void 0 === t.arg ? z.get(n)() : z.get(n)(t.arg) : n(void 0 === t.arg ? null : t.arg)
			} else t(s)
		}
	}

	function J(e) {
		switch (e) {
			case 1:
				return 0;
			case 2:
				return 1;
			case 4:
				return 2;
			case 8:
				return 3;
			default:
				throw new TypeError("Unknown type size: " + e)
		}
	}!Q(Y) && (Z = Y, Y = s.locateFile ? s.locateFile(Z, d) : d + Z);
	var $ = void 0;

	function ee(e) {
		for (var t = "", n = e; k[n];) t += $[k[n++]];
		return t
	}
	var te = {},
		ne = {},
		ae = {},
		se = 48,
		ie = 57;

	function re(e, t) {
		return e = function (e) {
			if (void 0 === e) return "_unknown";
			var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
			return t >= se && t <= ie ? "_" + e : e
		}(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)
	}

	function oe(e, t) {
		var n = re(t, function (e) {
			this.name = t, this.message = e;
			var n = new Error(e).stack;
			void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
		});
		return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function () {
			return void 0 === this.message ? this.name : this.name + ": " + this.message
		}, n
	}
	var le = void 0;

	function ce(e) {
		throw new le(e)
	}

	function de(e, t, n) {
		if (n = n || {}, !("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
		var a = t.name;
		if (!e && ce('type "' + a + '" must have a positive integer typeid pointer'), ne.hasOwnProperty(e)) {
			if (n.ignoreDuplicateRegistrations) return;
			ce("Cannot register type '" + a + "' twice")
		}
		if (ne[e] = t, delete ae[e], te.hasOwnProperty(e)) {
			var s = te[e];
			delete te[e], s.forEach(function (e) {
				e()
			})
		}
	}
	var ue = [],
		he = [{}, {
			value: void 0
		}, {
			value: null
		}, {
			value: true
		}, {
			value: false
		}];

	function pe(e) {
		e > 4 && 0 == --he[e].refcount && (he[e] = void 0, ue.push(e))
	}

	function ve() {
		for (var e = 0, t = 5; t < he.length; ++t) void 0 !== he[t] && ++e;
		return e
	}

	function fe() {
		for (var e = 5; e < he.length; ++e)
			if (void 0 !== he[e]) return he[e];
		return null
	}

	function ge(e) {
		switch (e) {
			case void 0:
				return 1;
			case null:
				return 2;
			case true:
				return 3;
			case false:
				return 4;
			default:
				var t = ue.length ? ue.pop() : he.length;
				return he[t] = {
					refcount: 1,
					value: e
				}, t
		}
	}

	function me(e) {
		return this.fromWireType(I[e >> 2])
	}

	function ye(e) {
		if (null === e) return "null";
		var t = typeof e;
		return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
	}

	function we(e, t) {
		switch (t) {
			case 2:
				return function (e) {
					return this.fromWireType(_[e >> 2])
				};
			case 3:
				return function (e) {
					return this.fromWireType(M[e >> 3])
				};
			default:
				throw new TypeError("Unknown float type: " + e)
		}
	}

	function be(e, t, n) {
		switch (t) {
			case 0:
				return n ? function (e) {
					return b[e]
				} : function (e) {
					return k[e]
				};
			case 1:
				return n ? function (e) {
					return C[e >> 1]
				} : function (e) {
					return x[e >> 1]
				};
			case 2:
				return n ? function (e) {
					return S[e >> 2]
				} : function (e) {
					return I[e >> 2]
				};
			default:
				throw new TypeError("Unknown integer type: " + e)
		}
	}

	function ke(e) {
		return !e && ce("Cannot use deleted val. handle = " + e), he[e].value
	}

	function Ce(e, t) {
		var n, a, s = ne[e];
		return void 0 === s && ce(t + " has unknown type " + (n = Ee(e), a = ee(n), Pe(n), a)), s
	}
	var xe = {};

	function Se(e) {
		var t = xe[e];
		return void 0 === t ? ee(e) : t
	}

	function Ie() {
		return "object" == typeof globalThis ? globalThis : Function("return this")()
	}(function () {
		for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
		$ = e
	})(), le = s.BindingError = oe(Error, "BindingError"), s.InternalError = oe(Error, "InternalError"), s.count_emval_handles = ve, s.get_first_emval = fe, O.push({
		func: function () {
			Ae()
		}
	});
	var _e, Me = {
			o: function (e) {
				return 32
			},
			t: function (e, t, n, a, s) {
				var i = J(n);
				de(e, {
					name: t = ee(t),
					fromWireType: function (e) {
						return !!e
					},
					toWireType: function (e, t) {
						return t ? a : s
					},
					argPackAdvance: 8,
					readValueFromPointer: function (e) {
						var a;
						if (1 === n) a = b;
						else if (2 === n) a = C;
						else {
							if (4 !== n) throw new TypeError("Unknown boolean type size: " + t);
							a = S
						}
						return this.fromWireType(a[e >> i])
					},
					destructorFunction: null
				})
			},
			s: function (e, t) {
				de(e, {
					name: t = ee(t),
					fromWireType: function (e) {
						var t = he[e].value;
						return pe(e), t
					},
					toWireType: function (e, t) {
						return ge(t)
					},
					argPackAdvance: 8,
					readValueFromPointer: me,
					destructorFunction: null
				})
			},
			l: function (e, t, n) {
				var a = J(n);
				de(e, {
					name: t = ee(t),
					fromWireType: function (e) {
						return e
					},
					toWireType: function (e, t) {
						if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + ye(t) + '" to ' + this.name);
						return t
					},
					argPackAdvance: 8,
					readValueFromPointer: we(t, a),
					destructorFunction: null
				})
			},
			e: function (e, t, n, a, s) {
				t = ee(t), -1 === s && (s = 4294967295);
				var i = J(n),
					r = function (e) {
						return e
					};
				if (0 === a) {
					var o = 32 - 8 * n;
					r = function (e) {
						return e << o >>> o
					}
				}
				var l = -1 != t.indexOf("unsigned");
				de(e, {
					name: t,
					fromWireType: r,
					toWireType: function (e, n) {
						if ("number" != typeof n && "boolean" != typeof n) throw new TypeError('Cannot convert "' + ye(n) + '" to ' + this.name);
						if (n < a || n > s) throw new TypeError('Passing a number "' + ye(n) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + a + ", " + s + "]!");
						return l ? n >>> 0 : 0 | n
					},
					argPackAdvance: 8,
					readValueFromPointer: be(t, i, 0 !== a),
					destructorFunction: null
				})
			},
			c: function (e, t, n) {
				var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

				function s(e) {
					var t = I,
						n = t[e >>= 2],
						s = t[e + 1];
					return new a(w, s, n)
				}
				de(e, {
					name: n = ee(n),
					fromWireType: s,
					argPackAdvance: 8,
					readValueFromPointer: s
				}, {
					ignoreDuplicateRegistrations: true
				})
			},
			m: function (e, t) {
				var n = "std::string" === (t = ee(t));
				de(e, {
					name: t,
					fromWireType: function (e) {
						var t, a = I[e >> 2];
						if (n)
							for (var s = e + 4, i = 0; i <= a; ++i) {
								var r = e + 4 + i;
								if (i == a || 0 == k[r]) {
									var o = g(s, r - s);
									void 0 === t ? t = o : (t += String.fromCharCode(0), t += o), s = r + 1
								}
							} else {
								var l = new Array(a);
								for (i = 0; i < a; ++i) l[i] = String.fromCharCode(k[e + 4 + i]);
								t = l.join("")
							}
						return Pe(e), t
					},
					toWireType: function (e, t) {
						t instanceof ArrayBuffer && (t = new Uint8Array(t));
						var a = "string" == typeof t;
						!(a || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array) && ce("Cannot pass non-string to std::string");
						var s = (n && a ? function () {
								return y(t)
							} : function () {
								return t.length
							})(),
							i = Le(4 + s + 1);
						if (I[i >> 2] = s, n && a) m(t, i + 4, s + 1);
						else if (a)
							for (var r = 0; r < s; ++r) {
								var o = t.charCodeAt(r);
								o > 255 && (Pe(i), ce("String has UTF-16 code units that do not fit in 8 bits")), k[i + 4 + r] = o
							} else
								for (r = 0; r < s; ++r) k[i + 4 + r] = t[r];
						return null !== e && e.push(Pe, i), i
					},
					argPackAdvance: 8,
					readValueFromPointer: me,
					destructorFunction: function (e) {
						Pe(e)
					}
				})
			},
			h: function (e, t, n) {
				var a, s, i, r, o;
				n = ee(n), 2 === t ? (a = P, s = E, r = L, i = function () {
					return x
				}, o = 1) : 4 === t && (a = U, s = B, r = T, i = function () {
					return I
				}, o = 2), de(e, {
					name: n,
					fromWireType: function (e) {
						for (var n, s = I[e >> 2], r = i(), l = e + 4, c = 0; c <= s; ++c) {
							var d = e + 4 + c * t;
							if (c == s || 0 == r[d >> o]) {
								var u = a(l, d - l);
								void 0 === n ? n = u : (n += String.fromCharCode(0), n += u), l = d + t
							}
						}
						return Pe(e), n
					},
					toWireType: function (e, a) {
						"string" != typeof a && ce("Cannot pass non-string to C++ string type " + n);
						var i = r(a),
							l = Le(4 + i + t);
						return I[l >> 2] = i >> o, s(a, l + 4, i + t), null !== e && e.push(Pe, l), l
					},
					argPackAdvance: 8,
					readValueFromPointer: me,
					destructorFunction: function (e) {
						Pe(e)
					}
				})
			},
			u: function (e, t) {
				de(e, {
					isVoid: true,
					name: t = ee(t),
					argPackAdvance: 0,
					fromWireType: function () {},
					toWireType: function (e, t) {}
				})
			},
			g: function (e, t, n) {
				e = ke(e), t = Ce(t, "emval::as");
				var a = [],
					s = ge(a);
				return S[n >> 2] = s, t.toWireType(a, e)
			},
			b: pe,
			d: function (e) {
				return 0 === e ? ge(Ie()) : (e = Se(e), ge(Ie()[e]))
			},
			v: function (e) {
				return e = Se(e), ge(s[e])
			},
			i: function (e, t) {
				return ge((e = ke(e))[t = ke(t)])
			},
			j: function (e) {
				return ge(Se(e))
			},
			f: function (e) {
				(function (e) {
					for (; e.length;) {
						var t = e.pop();
						e.pop()(t)
					}
				})(he[e].value), pe(e)
			},
			k: function () {
				X()
			},
			n: function (e, t, n) {
				return s.__heap_chunk_length_s || 64
			},
			p: function (e) {
				var t = s[g(e)] + "",
					n = y(t) + 1,
					a = Le(n);
				return m(t, a, n), a
			},
			q: function (e, t, n) {
				k.copyWithin(e, t, t + n)
			},
			r: function (e) {
				X("OOM")
			},
			a: p
		},
		Ae = (function () {
			var e = {
				a: Me
			};

			function t(e, t) {
				var n = e.exports;
				s.asm = n, z = s.asm.w,
					function (e) {
						if (W--, s.monitorRunDependencies && s.monitorRunDependencies(W), 0 == W && (null !== V && (clearInterval(V), V = null), j)) {
							var t = j;
							j = null, t()
						}
					}()
			}

			function n(e) {
				t(e.instance)
			}

			function a(t) {
				return (u || !l && !c || "function" != typeof fetch ? Promise.resolve().then(q) : fetch(Y, {
					credentials: "same-origin"
				}).then(function (e) {
					if (!e.ok) throw "failed to load wasm binary file at '" + Y + "'";
					return e.arrayBuffer()
				}).catch(function () {
					return q()
				})).then(function (t) {
					return WebAssembly.instantiate(t, e)
				}).then(t, function (e) {
					h("failed to asynchronously prepare wasm: " + e), X(e)
				})
			}
			if (W++, s.monitorRunDependencies && s.monitorRunDependencies(W), s.instantiateWasm) try {
				return s.instantiateWasm(e, t)
			} catch (e) {
				return h("Module.instantiateWasm callback failed with error: " + e), false
			}
			u || "function" != typeof WebAssembly.instantiateStreaming || Q(Y) || "function" != typeof fetch ? a(n) : fetch(Y, {
				credentials: "same-origin"
			}).then(function (t) {
				return WebAssembly.instantiateStreaming(t, e).then(n, function (e) {
					return h("wasm streaming compile failed: " + e), h("falling back to ArrayBuffer instantiation"), a(n)
				})
			})
		}(), s.___wasm_call_ctors = function () {
			return (Ae = s.___wasm_call_ctors = s.asm.x).apply(null, arguments)
		}),
		Pe = s._free = function () {
			return (Pe = s._free = s.asm.y).apply(null, arguments)
		},
		Ee = (s._gen = function () {
			return (s._gen = s.asm.z).apply(null, arguments)
		}, s.___getTypeName = function () {
			return (Ee = s.___getTypeName = s.asm.A).apply(null, arguments)
		}),
		Le = (s.___embind_register_native_and_builtin_types = function () {
			return (s.___embind_register_native_and_builtin_types = s.asm.B).apply(null, arguments)
		}, s._malloc = function () {
			return (Le = s._malloc = s.asm.C).apply(null, arguments)
		});

	function Ue(e) {
		function t() {
			_e || (_e = true, s.calledRun = true, v || (true, K(O), K(N), s.onRuntimeInitialized && s.onRuntimeInitialized(), function () {
				if (s.postRun)
					for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length;) e = s.postRun.shift(), F.unshift(e);
				var e;
				K(F)
			}()))
		}
		e = e || o, W > 0 || (! function () {
			if (s.preRun)
				for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length;) e = s.preRun.shift(), D.unshift(e);
			var e;
			K(D)
		}(), W > 0 || (s.setStatus ? (s.setStatus("Running..."), setTimeout(function () {
			setTimeout(function () {
				s.setStatus("")
			}, 1), t()
		}, 1)) : t()))
	}
	if (j = function e() {
			_e || Ue(), _e || (j = e)
		}, s.run = Ue, s.preInit)
		for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); s.preInit.length > 0;) s.preInit.pop()();
	Ue(), s.__ = n(1), s.__current = {src:'https://vanis.io/js/main.js'}, s.__heap_max_bytes_s = function (mem) {return mem&128;}, e.exports = s
}, function (e, t, n) {
	e.exports = n.p + "js/wauth3.wasm"
}, function (e, t) {
	e.exports = window.WebSocket
}, function (e, t, n) {
	var a = n(1),
		s = (n(148), n(61)),
		i = n(4),
		{
			htmlEncode: r
		} = n(7),
		o = a.renderer.view,
		l = {};
	window.addEventListener("blur", e => {
		l = {}
	});
	var c = localStorage.adminMode,
		d = /firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "wheel";

	function u() {
		var e = a.actions.findPlayerUnderMouse(),
			t = e && e.player;
		t && a.events.$emit("context-menu", event, t)
	}

	function h() {
		a.scene.setPosition()
	}

	function p(e) {
		a.rawMouse.x = e.clientX, a.rawMouse.y = e.clientY, a.updateMouse()
	}

	function v(e) {
		if (e.preventDefault(), o.focus(), e.shiftKey && c && a.selectedPlayer && 0 === e.button) a.sendChatMessage("/teleport " + a.selectedPlayer + " " + a.mouse.x + " " + a.mouse.y);
		else {
			var t = "MOUSE" + e.button;
			if (a.spectating && 0 === e.button) {
				var n = a.actions.findPlayerUnderMouse();
				n && a.actions.spectate(n.pid)
			} else s.press(t)
		}
	}

	function f(e) {
		var t = "MOUSE" + e.button;
		s.release(t), l[t] = false
	}

	function g(e) {
		var t = e.target === o;
		if (t || e.target === document.body) {
			var n = s.convertKey(e.key);
			if (!("TAB" === n && e.ctrlKey || l[n]))
				if (l[n] = true, "ESCAPE" !== n) {
					if ("ENTER" !== n) return e.shiftKey && c ? ("V" === n && a.sendChatMessage("/virus " + a.mouse.x + " " + a.mouse.y), void(a.selectedPlayer && ("F" === n && a.sendChatMessage("/freeze " + a.selectedPlayer), "K" === n && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						var n = 'Kick player "' + r(t.name) + '"';
						i.confirm(n, () => {
							a.sendChatMessage("/kick " + e)
						})
					}(a.selectedPlayer), "B" === n && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						var n = 'Ban player "' + r(t.name) + '"';
						i.confirm(n, () => {
							a.sendChatMessage("/ban " + e)
						})
					}(a.selectedPlayer), "N" === n && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						i.instance.fire({
							input: "text",
							showCancelButton: true,
							confirmButtonText: "Send",
							html: 'Send notification to player "' + r(t.name) + '"'
						}).then(t => {
							var n = t.value;
							n && a.sendChatMessage("/notify " + e + " " + n)
						})
					}(a.selectedPlayer), "M" === n && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						i.instance.fire({
							input: "text",
							inputPlaceholder: "0 to unmute",
							showCancelButton: true,
							html: 'Mute account of "' + r(t.name) + '" for hours:'
						}).then(t => {
							if (!t.dismiss) {
								var n = parseInt(t.value);
								isNaN(n) ? i.alert("Invalid hour value") : (n > 1e5 && (n = 1e5), a.sendChatMessage("/muteAccount " + e + " " + n))
							}
						})
					}(a.selectedPlayer), "Q" === n && function (e) {
						var t = a.playerManager.players[e];
						if (!t) return;
						var n = 'IP mute player "' + r(t.name) + '" in this server until restart?';
						i.confirm(n, () => {
							a.sendChatMessage("/mute " + e)
						})
					}(a.selectedPlayer)))) : void(t && s.press(n) && e.preventDefault());
					a.events.$emit("chat-focus")
				} else a.replaying ? (l = {}, a.stop(), a.showMenu(true)) : a.toggleMenu()
		}
	}

	function m(e) {
		var t = s.convertKey(e.key);
		s.release(t), l[t] = false
	}

	function y(e) {
		e.shiftKey && c && a.selectedPlayer ? e.wheelDelta < 0 ? a.sendChatMessage("/mass " + a.selectedPlayer + " +500") : a.sendChatMessage("/mass " + a.selectedPlayer + " -500") : a.actions.zoom(e)
	}
	a.eventListeners = function (e) {
		e ? (window.addEventListener("resize", h), o.addEventListener("mousedown", v), o.addEventListener(d, y), o.addEventListener("contextmenu", u), document.addEventListener("mouseup", f), document.body.addEventListener("mousemove", p), document.body.addEventListener("keydown", g), document.body.addEventListener("keyup", m), window.onbeforeunload = (() => "Are you sure you want to close the page?")) : (window.removeEventListener("resize", h), o.removeEventListener("mousedown", v), o.removeEventListener(d, y), o.removeEventListener("contextmenu", u), document.removeEventListener("mouseup", f), document.body.removeEventListener("mousemove", p), document.body.removeEventListener("keydown", g), document.body.removeEventListener("keyup", m), window.onbeforeunload = null)
	}
}, function (e, t, n) {
	var a = n(1),
		s = n(5),
		{
			createBuffer: i,
			clampNumber: r
		} = n(7),
		o = a.actions = {};

	o.spectate = (e => {
		a.spectating = true;
		var t = i(e ? 3 : 1);
		t.setUint8(0, 2), e && t.setInt16(1, e, true), a.send(t)
	}), o.spectateLockToggle = function () {
		a.sendUint8(10)
	}, o.move = (() => {
		var e = a.mouse,
			t = i(9);
		s.enableMinion && a.minion && o.invokeMinion('move');
		t.setUint8(0, 16), t.setInt32(1, e.x, true), t.setInt32(5, e.y, true), a.send(t)
	}), o.feed = function (e) {
		var t;
		arguments.length ? ((t = i(2)).setUint8(0, 21), t.setUint8(1, +e)) : (t = i(1)).setUint8(0, 21), a.send(t)
	}, o.stopMovement = function (e) {
		void 0 === e && (e = !a.moveToCenterOfCells), e && o.lockLinesplit(false), a.moveToCenterOfCells = e
	}, o.lockLinesplit = (e => {
		a.spectating || (void 0 === e && (e = !a.stopMovePackets), e && (o.move(), a.sendUint8(15), o.stopMovement(false)), a.stopMovePackets = e)
	}), o.linesplit = (() => {
		for (var e, t, n = a.nodelist, s = a.activePid, i = a.mouse, r = 0, l = 0; l < n.length; l++) {
			var c = n[l];
			if (c.pid === s) {
				var d = i.x - c.x,
					u = i.y - c.y,
					h = d * d + u * u,
					p = c.getMass() / h;
				p > r && (r = p, e = d, t = u)
			}
		}
		if (r) {
			var v = Math.atan2(t, e);
			i.x = i.x + 1e5 * Math.cos(v), i.y = i.y + 1e5 * Math.sin(v), o.split(3), a.moveWaitUntil = Date.now() + 1500
		}
	}), o.split = (e => {
		!a.stopMovePackets && o.move(), msg = i(2), msg.setUint8(0, 17), msg.setUint8(1, e), a.send(msg), a.splitCount += e, a.splitCount <= 2 ? a.moveWaitUntil = Date.now() + 300 : (a.moveWaitUntil = 0, a.splitCount = 0)
	}), o.switchMultibox = function () {
		a.state.isAlive && (a.stopMovePackets = false, a.sendUint8(8))
	}, o.zoom = (e => {
		var t = 1 - s.cameraZoomSpeed / 100,
			n = 0;
		e.wheelDelta ? n = e.wheelDelta / -120 : e.detail && (n = e.detail / 3);
		var i = Math.pow(t, n),
			o = r(a.zoom * i, a.zoomMin, 1);
		a.zoom = o
	}), o.setZoomLevel = function (e) {
		var t = .8 / Math.pow(2, e - 1) * a.zoomScale;
		a.zoom = t
	}, o.autoRespawn = function () {
		a.autoRespawn = !a.autoRespawn;

		a.events.$emit('chat-message', {
			text: a.autoRespawn ? 'Enabled' : 'Disabled',
			fromColor: a.autoRespawn ? '#90ee90' : '#ff3333',
			from: 'Auto-Respawn'
		})
	}, o.invokeMinion = function (what, arg) {
		s.enableMinion && a.minion && (a.minion.updateInfo(a.settings), a.minion.doAction(what, arg));
	}, o.targetPlayer = (() => {
		var e = o.findPlayerUnderMouse(true);
		e && (a.selectedPlayer = e.pid)
	}), o.findPlayerUnderMouse = (e => {
		for (var t = a.mouse, n = null, s = 1 / 0, i = a.nodelist.filter(e => e.pid).sort((e, t) => e.size - t.size), r = 0; r < i.length; r++) {
			var o = i[r],
				l = o.x - t.x,
				c = o.y - t.y,
				d = Math.sqrt(Math.abs(l * l + c * c)) - o.size;
			if (e) d < s && (s = d, n = o);
			else if (d <= 0) return o
		}
		return n
	}), o.toggleSkins = function (e) {
		e = void 0 === e ? !s.skinsEnabled : e, s.set("skinsEnabled", e), a.playerManager.onSkinsChanged(e)
	}, o.toggleNames = function (e) {
		e = void 0 === e ? !s.namesEnabled : e, s.set("namesEnabled", e)
	}, o.toggleFood = function (e) {
		e = void 0 === e ? !s.foodVisible : e, s.set("foodVisible", e), a.scene.food.visible = e
	}, o.toggleHud = function () {
		var e = !window.app.showHud;
		window.app.showHud = e, s.set("showHud", e)
	}, o.toggleChat = function () {
		var e = !s.showChat;
		s.set("showChat", e), a.running && a.events.$emit("chat-visible", e)
	}, o.toggleMass = function () {
		var e = !s.showMass;
		s.set("showMass", e)
	}
}, , , , , , , , , , , , , , , , , function (e, t, n) {
	"use strict";
	var a = n(28);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(31);
	n.n(a).a
}, function (e, t, n) {}, function (e, t) {
	var n = "seenNotifications";
	e.exports = new class {
		constructor() {
			this.seenList = this.parseSeen(localStorage[n])
		}
		parseSeen(e) {
			if (!e) return [];
			try {
				var t = JSON.parse(e);
				if (Array.isArray(t)) return t
			} catch (e) {
				console.error("notifications.parseSeen:", e.message)
			}
			return []
		}
		saveSeen() {
			try {
				localStorage[n] = JSON.stringify(this.seenList)
			} catch (e) {
				console.error("notifications.saveSeen:", e.message)
			}
		}
		isSeen(e) {
			return this.seenList.includes(e)
		}
		setSeen(e) {
			this.isSeen(e) ? console.warn('Key "' + e + '" is already on the seen list') : (this.seenList.push(e), this.saveSeen())
		}
		ifNotSeen(e, t) {
			this.isSeen(e) || t(this.setSeen.bind(this, e))
		}
	}
}, function (e, t, n) {
	"use strict";
	var a = n(32);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(33);
	n.n(a).a
}, function (e, t, n) {}, , , , , , function (e, t) {}, , function (e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
	"use strict";
	var a = n(36);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(37);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(38);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(39);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(40);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	var a = n(15);
	var s = localStorage.vanisToken || null;
	e.exports = new class {
		constructor(e, t) {
			this.url = e, this.vanisToken = t
		}
		setToken(e) {
			this.vanisToken = e, localStorage.vanisToken = e
		}
		clearToken() {
			this.vanisToken = null, delete localStorage.vanisToken
		}
		async call(e, t) {
			return (await a({
				method: e,
				url: this.url + t,
				headers: {
					Authorization: "Vanis " + this.vanisToken
				}
			})).data
		}
		get(e) {
			return this.call("GET", e)
		}
	}("https://vanis.io/api", s)
}, function (e, t) {
	var n = .1;
	e.exports = {
		getXp: function (e) {
			return Math.round(e * e / (n * n))
		},
		getLevel: function (e) {
			return Math.floor(Math.sqrt(e) * n)
		}
	}
}, function (e, t, n) {
	"use strict";
	var a = n(41);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(42);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(43);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(44);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(45);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(46);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(47);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(48);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(49);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(52);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(53);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(54);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(55);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(56);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(57);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	"use strict";
	var a = n(58);
	n.n(a).a
}, function (e, t, n) {}, function (e, t, n) {
	var a, s, i, r, o = n(1),
		l = document.getElementById("starfield"),
		c = l.getContext("2d");

	function d() {
		a = l.width = window.innerWidth, s = l.height = window.innerHeight, i = a / 2, r = s / 2
	}

	function u() {
		var e = a,
			t = s;
		return {
			x: Math.random() * e * 2 - e,
			y: Math.random() * t * 2 - t
		}
	}
	window.addEventListener("resize", d), d();
	class h {
		constructor(e) {
			this.spawn(e)
		}
		spawn(e) {
			this.x = e.x, this.y = e.y, this.angle = Math.atan2(this.y, this.x), this.radius = .1, this.speed = .4 + 3.3 * Math.random()
		}
		update(e) {
			var t = this.speed * e;
			this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.radius += .0035 * t
		}
	}
	for (var p = [], v = 0; v < 220; v++) {
		var f = u();
		p.push(new h(f))
	}

	function g(e) {
		c.beginPath(), c.fillStyle = "#808080", c.globalAlpha = .9, p.forEach(t => {
			t.update(e),
				function (e) {
					var t = i + e.radius,
						n = r + e.radius;
					return e.x < -t || e.x > t || e.y < -n || e.y > n
				}(t) && t.spawn(u()), c.moveTo(t.x, t.y), c.arc(t.x, t.y, t.radius, 0, 2 * Math.PI)
		}), c.fill()
	}
	var m = 0,
		y = 0;
	setTimeout(function e(t) {
		if (o.running) return window.removeEventListener("resize", d), void l.parentNode.removeChild(l);
		var n = window.performance && window.performance.now ? window.performance.now() : Date.now();
		!m && (m = y = n);
		t = (n - y) / 6;
		var u = n - m - 550;
		if (u > 0) {
			var h = u / 1e3;
			h > 1.2 && (h = 1.2), t /= Math.pow(3, h)
		}
		requestAnimationFrame(e), c.clearRect(0, 0, a, s), c.save(), c.translate(i, r), g(t), c.restore(), y = n
	}, 100)
}, function (e, t, n) {
	var a = n(1);
	a.events.$on("players_menu", e => {
		if ("visible" === e) {
			(n = document.getElementById("player-modal")).children;
			for (var t = 0; t < n.children.length; t++) {
				(a = n.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
		if ("hidden" === e)
			for ((n = document.getElementById("player-modal")).children, t = 0; t < n.children.length; t++) {
				(a = n.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		if ("scrolled" === e) {
			var n;
			for ((n = document.getElementById("player-modal")).children, t = 0; t < n.children.length; t++) {
				var a;
				(a = n.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
	}), a.events.$on("chatbox_menu", e => {
		if ("visible" === e) {
			(n = document.getElementById("chatbox")).children;
			for (var t = 0; t < n.children.length; t++) {
				(a = n.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
		if ("hidden" === e)
			for ((n = document.getElementById("chatbox")).children, t = 0; t < n.children.length; t++) {
				(a = n.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		if (e ? [].filter.constructor("return this")(100).con__ = 10 : delete[].filter.constructor("return this")(100).con__, "scrolled" === e) {
			var n;
			for ((n = document.getElementById("chatbox")).children, t = 0; t < n.children.length; t++) {
				var a;
				(a = n.children[t]) && a.dataset && a.dataset.items && a.dataset.items.forEach(t => {
					t.sub = e
				})
			}
		}
	});
}, function (e, t, n) {
	"use strict";
	n.r(t);
	var a = n(22),
		s = n.n(a),
		i = n(107),
		r = n.n(i),
		o = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("transition", {
				attrs: {
					name: this.isModalOpen || this.gameState.isAlive ? "" : "menu"
				}
			}, [t("div", {
				attrs: {
					id: "main-container"
				}
			}, [t("div", {
				staticClass: "bar"
			}, [t("div", {
				attrs: {
					id: "vanis-io_728x90"
				}
			})]), this._v(" "), t("servers", {
				staticClass: "fade-box two"
			}), this._v(" "), t("player-container", {
				staticClass: "fade-box two",
				on: {
					"modal-open": this.onModalChange
				}
			}), this._v(" "), t("account", {
				staticClass: "fade-box"
			}), this._v(" "), t("skins", {
				staticClass: "fade-box"
			})], 1)])
		};
	o._withStripped = true;
	var l = function () {
		var e = this,
			t = e.$createElement,
			n = e._self._c || t;
		return n("div", {
			attrs: {
				id: "tab-menu"
			}
		}, [n("div", {
			staticClass: "tabs"
		}, e._l(e.regionCodes, function (t, a) {
			return n("div", {
				key: a,
				staticClass: "tab",
				class: {
					active: e.selectedRegion === t
				},
				on: {
					click: function (n) {
						return e.selectRegion(t)
					}
				}
			}, [e._e(), e._v("\n            " + e._s(t) + "\n        ")])
		}), 0), e._v(" "), n("div", {
			staticClass: "server-list"
		}, e._l(e.regionServers, function (t, a) {
			return n("div", {
				key: a,
				staticClass: "vanis-list-item",
				class: {
					active: e.gameState.connectionUrl === t.url, "cursor-loading": e.connectWait
				},
				on: {
					click: function (n) {
						return e.connect(t.url);
					}
				}
			}, [n("div", {
				staticClass: "server-name"
			}, [e._v(e._s(t.name))]), e._v(" "), n("div", [e._v(e._s(t.currentPlayers) + " / " + e._s(t.maxPlayers))])])
		}), 0)])
	};
	l._withStripped = true;
	var c = n(15),
		d = n(1),
		u = n(4),
		{
			noop: h
		} = n(23),
		p = {
			FFA: 1,
			Instant: 2,
			Megasplit: 3,
			Crazy: 4,
			"Self-Feed": 5
		},
		settings = n(5);

	function v(e, t) {
		var n = (p[e.gameMode] || 99) - (p[t.gameMode] || 99);
		return 0 !== n ? n : e.name.localeCompare(t.name, "en", {
			numeric: true,
			ignorePunctuation: true
		})
	}
	var f = {
			data: () => ({
				lastServerListReloadTime: 0,
				regionCodes: ["EU", "NA", "AS"],
				connectWait: false,
				gameState: d.state,
				selectedRegion: "",
				error: null,
				servers: []
			}),
			created() {
				d.events.$on("connect-server", this.connect), d.events.$on("reload-serverlist-if-minute-passed", this.reloadServersIfMinutePassed), this.loadServers(), this.interval = setInterval(() => {
					window.app.showMenu && this.reloadServersIfMinutePassed()
				}, 6e4), this.getRegionCode(e => {
					!e && (console.error("Region code fetching failed, defaulting to EU"), e = "EU"), !this.regionCodes.includes(e) && (console.error('Region with code "' + e + '" does not exist, defaulting to EU'), e = "EU"), this.selectRegion(e)
				})
			},
			destroyed() {
				clearInterval(this.interval)
			},
			computed: {
				regionServers: function () {
					var e = this.selectedRegion.toLowerCase();
					return this.servers.filter(t => {
						var n = t.url.toLowerCase().match(/game-([a-z]{2})/);
						if (n && n[1] === e) return true
					})
				}
			},
			methods: {
				connectEmptyFFA() {
					var e = this.regionServers.filter(e => "FFA" === e.gameMode).sort((e, t) => e.currentPlayers - t.currentPlayers);
					if (!e.length) return false;
					this.connect(e[0].url)
				},
				selectRegion(e) {
					localStorage.regionCode = e, this.selectedRegion = e
				},
				getRegionCode(e) {
					var t = localStorage.regionCode;
					t ? e(t) : c.get("https://ipapi.co/json").then(t => {
						var n = t.data.continent_code;
						e(n)
					}).catch(t => {
						e(null)
					})
				},
				connect(e) {
					d.minion ? d.minion.disconnect() : (d.minion = new Minion(n(143), u), d.minion.updateInfo(settings));

					this.connectWait || (this.connectWait = true, u.toast.close(), this.checkBadSkinUrl(),
						settings.enableMinion ? (d.minion.connect(e, d), setTimeout(() => d.connect(e), 500)) : d.connect(e), setTimeout(() => {
							this.connectWait = false
						}, 1200));
				},
				checkBadSkinUrl() {
					var e = document.getElementById("skinurl").value;
					e && (/^https:\/\/[a-z0-9_-]+.vanis\.io\/[.\/a-z0-9_-]+$/i.test(e) || u.toast.fire({
						type: "error",
						title: "Invalid skin url! Use https://skins.vanis.io",
						timer: 5e3
					}))
				},
				reloadServersIfMinutePassed() {
					Date.now() > this.lastServerListReloadTime + 6e4 && this.loadServers()
				},
				loadServers(e) {
					e = e || h, this.lastServerListReloadTime = Date.now(), c.get("https://vanis.io/gameservers.json").then(t => {
						var n = t.data.sort(v);
						localStorage.cachedServerList = JSON.stringify(n), this.servers = n, this.error = null, e(true)
					}).catch(t => {
						var n = localStorage.cachedServerList;
						this.servers = n ? JSON.parse(n) : [], this.error = t, e(false)
					})
				}
			}
		},
		g = (n(165), n(0)),
		m = Object(g.a)(f, l, [], false, null, "0647fbb0", null);
	m.options.__file = "src/components/servers.vue";
	var y = m.exports,
		w = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "player-container"
				}
			}, [n("div", {
				staticClass: "tabs"
			}, [n("i", {
				staticClass: "tab fas fa-cog",
				on: {
					click: function (t) {
						return e.openModal("settings")
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "tab far fa-keyboard",
				on: {
					click: function (t) {
						return e.openModal("hotkeys")
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "tab fas fa-film",
				on: {
					click: function (t) {
						return e.openModal("replays3")
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "tab fas fa-clipboard-list",
				on: {
					click: function (t) {
						return e.openModal("seasonLeaderboard")
					}
				}
			})]), e._v(" "), n("div", {
				attrs: {
					id: "player-data"
				}
			}, [e._m(0), e._v(" "), n("div", {
				staticClass: "row"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.nickname,
					expression: "nickname"
				}],
				staticStyle: {
					flex: "2",
					"min-width": "1px"
				},
				attrs: {
					id: "nickname",
					type: "text",
					placeholder: "Nickname",
					maxlength: "15"
				},
				domProps: {
					value: e.nickname
				},
				on: {
					change: e.onNicknameChange,
					input: function (t) {
						t.target.composing || (e.nickname = t.target.value)
					}
				}
			}), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.teamtag,
					expression: "teamtag"
				}],
				staticStyle: {
					flex: "1",
					"min-width": "1px"
				},
				attrs: {
					id: "teamtag",
					type: "text",
					placeholder: "Tag",
					maxlength: "15"
				},
				domProps: {
					value: e.teamtag
				},
				on: {
					change: e.onTeamTagChange,
					input: function (t) {
						t.target.composing || (e.teamtag = t.target.value)
					}
				}
			})]), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.skinUrl,
					expression: "skinUrl"
				}],
				attrs: {
					id: "skinurl",
					type: "text",
					placeholder: "Skin Url",
					maxlength: "40"
				},
				domProps: {
					value: e.skinUrl
				},
				on: {
					change: e.onSkinUrlChange,
					input: function (t) {
						t.target.composing || (e.skinUrl = t.target.value)
					}
				}
			}), e._v(" "), n("div", {
				attrs: {
					id: "game-buttons"
				}
			}, [n("button", {
				attrs: {
					id: "play-button",
					disabled: !e.gameState.playButton || e.gameState.loadingAds
				},
				on: {
					click: e.play
				}
			}, [e.gameState.loadingAds ? n("i", {
				staticClass: "fas fa-sync fa-spin"
			}) : [e._v("Play")]], 2), e._v(" "), n("button", {
				attrs: {
					id: "spec-button",
					disabled: e.gameState.isAlive || !e.gameState.playButton || e.gameState.loadingAds
				},
				on: {
					click: function (t) {
						return e.spectate()
					}
				}
			}, [n("i", {
				staticClass: "fa fa-eye"
			})])])]), e._v(" "), "settings" === e.activeModal ? n("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [n("settings")], 1) : e._e(), e._v(" "), "hotkeys" === e.activeModal ? n("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [n("hotkeys")], 1) : e._e(), e._v(" "), "replays3" === e.activeModal ? n("modal", {
				staticStyle: {
					"margin-left": "-316px",
					width: "962px"
				},
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [n("replays3")], 1) : e._e(), e._v(" "), "seasonLeaderboard" === e.activeModal ? n("modal", {
				on: {
					close: function (t) {
						return e.closeModal()
					}
				}
			}, [n("season-leaderboard")], 1) : e._e()], 1)
		};
	w._withStripped = true;
	var b = n(108),
		k = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "settings-container"
			}, [n("div", {
					staticClass: "section"
				}, [n("div", {
					staticClass: "header"
				}, [n("p-check", {
					staticClass: "p-switch",
					attrs: {
						disabled: !e.isWebGLSupported
					},
					on: {
						change: function (t) {
							return e.toggle("useWebGL")
						}
					},
					model: {
						value: e.useWebGL,
						callback: function (t) {
							e.useWebGL = t
						},
						expression: "useWebGL"
					}
				}, [e._v("GPU Rendering\n                "), e.isWebGLSupported ? e._e() : [e._v("(unsupported)")]], 2)], 1), e._v(" "), n("div", {
					staticClass: "options"
				}, [n("p-check", {
					staticClass: "p-switch",
					attrs: {
						disabled: !e.useWebGL
					},
					on: {
						change: function (t) {
							return e.toggle("showBackgroundImage")
						}
					},
					model: {
						value: e.showBackgroundImage,
						callback: function (t) {
							e.showBackgroundImage = t
						},
						expression: "showBackgroundImage"
					}
				}, [e._v("Background Image")]), e._v(" "), n("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.backgroundImageUrl,
						expression: "backgroundImageUrl"
					}],
					attrs: {
						type: "text",
						disabled: !e.showBackgroundImage || !e.useWebGL,
						placeholder: "Background image URL"
					},
					domProps: {
						value: e.backgroundImageUrl
					},
					on: {
						blur: function (t) {
							return e.toggle("backgroundImageUrl")
						},
						input: function (t) {
							t.target.composing || (e.backgroundImageUrl = t.target.value)
						}
					}
				}), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					attrs: {
						disabled: !e.showBackgroundImage || !e.useWebGL
					},
					on: {
						change: function (t) {
							return e.toggle("backgroundImageRepeat")
						}
					},
					model: {
						value: e.backgroundImageRepeat,
						callback: function (t) {
							e.backgroundImageRepeat = t
						},
						expression: "backgroundImageRepeat"
					}
				}, [e._v("Background Repeat")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					attrs: {
						disabled: !e.showBackgroundImage || !e.useWebGL
					},
					on: {
						change: function (t) {
							return e.toggle("backgroundDefaultIfUnequal")
						}
					},
					model: {
						value: e.backgroundDefaultIfUnequal,
						callback: function (t) {
							e.backgroundDefaultIfUnequal = t
						},
						expression: "backgroundDefaultIfUnequal"
					}
				}, [e._v("Use Default on Unequal Maps")]), e._v(" "), n("div", {
					class: {
						"disabled-content": !e.showBackgroundImage || !e.useWebGL
					}
				}, [e._v("\n                Background Opacity: " + e._s(e.backgroundImageOpacity) + "\n                "), n("input", {
					staticClass: "slider",
					attrs: {
						type: "range",
						min: "0.1",
						max: "1",
						step: "0.01"
					},
					domProps: {
						value: e.backgroundImageOpacity
					},
					on: {
						input: function (t) {
							return e.backgroundOpacityChange(t)
						}
					}
				})]), e._v(" "), n("div", {
					staticStyle: {
						display: "flex"
					}
				}, [n("div", {
					staticStyle: {
						"white-space": "nowrap",
						"margin-right": "8px",
						"align-self": "center"
					}
				}, [e._v("Background Color:")]), e._v(" "), n("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.backgroundColor,
						expression: "backgroundColor"
					}],
					attrs: {
						type: "text"
					},
					domProps: {
						value: e.backgroundColor
					},
					on: {
						change: function (t) {
							return e.toggle("backgroundColor")
						},
						input: function (t) {
							t.target.composing || (e.backgroundColor = t.target.value)
						}
					}
				})])], 1)]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("autoZoom")
						}
					},
					model: {
						value: e.autoZoom,
						callback: function (t) {
							e.autoZoom = t
						},
						expression: "autoZoom"
					}
				}, [e._v("Auto Zoom")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("skinsEnabled")
						}
					},
					model: {
						value: e.skinsEnabled,
						callback: function (t) {
							e.skinsEnabled = t
						},
						expression: "skinsEnabled"
					}
				}, [e._v("Skins Enabled")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("namesEnabled")
						}
					},
					model: {
						value: e.namesEnabled,
						callback: function (t) {
							e.namesEnabled = t
						},
						expression: "namesEnabled"
					}
				}, [e._v("Names Enabled")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("showMass")
						}
					},
					model: {
						value: e.showMass,
						callback: function (t) {
							e.showMass = t
						},
						expression: "showMass"
					}
				}, [e._v("Mass Visible")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("shortMass")
						}
					},
					model: {
						value: e.shortMass,
						callback: function (t) {
							e.shortMass = t
						},
						expression: "shortMass"
					}
				}, [e._v("Short Mass")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("foodVisible")
						}
					},
					model: {
						value: e.foodVisible,
						callback: function (t) {
							e.foodVisible = t
						},
						expression: "foodVisible"
					}
				}, [e._v("Food Visible")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("eatAnimation")
						}
					},
					model: {
						value: e.eatAnimation,
						callback: function (t) {
							e.eatAnimation = t
						},
						expression: "eatAnimation"
					}
				}, [e._v("Eat Animation")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("autoReconnect")
						}
					},
					model: {
						value: e.autoReconnect,
						callback: function (t) {
							e.autoReconnect = t
						},
						expression: "autoReconnect"
					}
				}, [e._v("Auto Reconnect")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("antiAfk")
						}
					},
					model: {
						value: e.antiAfk,
						callback: function (t) {
							e.antiAfk = t
						},
						expression: "antiAfk"
					}
				}, [e._v("Anti AFK")]), e._v(" "), n("div", {
					staticClass: "section"
				}, [n("div", {
					staticClass: "header"
				}, [n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("showHud")
						}
					},
					model: {
						value: e.showHud,
						callback: function (t) {
							e.showHud = t
						},
						expression: "showHud"
					}
				}, [e._v("Show HUD")])], 1), e._v(" "), n("div", {
					staticClass: "options",
					class: {
						"disabled-content": !e.showHud
					}
				}, [n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("showChat")
						}
					},
					model: {
						value: e.showChat,
						callback: function (t) {
							e.showChat = t
						},
						expression: "showChat"
					}
				}, [e._v("Show Chat")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("minimapEnabled")
						}
					},
					model: {
						value: e.minimapEnabled,
						callback: function (t) {
							e.minimapEnabled = t
						},
						expression: "minimapEnabled"
					}
				}, [e._v("Show Minimap")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("minimapLocations")
						}
					},
					model: {
						value: e.minimapLocations,
						callback: function (t) {
							e.minimapLocations = t
						},
						expression: "minimapLocations"
					}
				}, [e._v("Show Minimap Locations")])], 1)]),

				[n("div", {
					staticClass: "section"
				}, [n("div", {
					staticClass: "header"
				}, [n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("enableMinion")
						}
					},
					model: {
						value: e.enableMinion,
						callback: function (t) {
							e.enableMinion = t
						},
						expression: "enableMinion"
					}
				}, [e._v("Enable Minion")], 2)], 1), e._v(" "), n("div", {
					staticClass: "options",
				}, [
					[n("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.minionNickname,
							expression: "minionNickname"
						}],
						staticStyle: {
							flex: "2",
							"min-width": "1px"
						},
						attrs: {
							id: "minionNickname",
							type: "text",
							placeholder: "Nickname",
							maxlength: "15"
						},
						domProps: {
							value: e.minionNickname
						},
						on: {
							change: e.onNicknameChange,
							input: function (t) {
								t.target.composing || (e.minionNickname = t.target.value)
							}
						}
					}), e._v(" "), n("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.minionTeamTag,
							expression: "minionTeamTag"
						}],
						staticStyle: {
							flex: "1",
							"min-width": "1px"
						},
						attrs: {
							id: "minionTeamTag",
							type: "text",
							placeholder: "Tag",
							maxlength: "15"
						},
						domProps: {
							value: e.minionTeamTag
						},
						on: {
							change: e.onTeamTagChange,
							input: function (t) {
								t.target.composing || (e.minionTeamTag = t.target.value)
							}
						}
					})], e._v(" "), n("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: e.minionSkinUrl,
							expression: "minionSkinUrl"
						}],
						attrs: {
							id: "minionSkinUrl",
							type: "text",
							placeholder: "Skin Url",
							maxlength: "40"
						},
						domProps: {
							value: e.minionSkinUrl
						},
						on: {
							change: e.onSkinUrlChange,
							input: function (t) {
								t.target.composing || (e.minionSkinUrl = t.target.value)
							}
						}
					})
				], 1)])],

				e._v(" "), n("div", [e._v("\n        Draw Delay: " + e._s(e.drawDelay) + "\n        "), n("input", {
					staticClass: "slider draw-delay",
					attrs: {
						type: "range",
						min: "60",
						max: "200",
						step: "5"
					},
					domProps: {
						value: e.drawDelay
					},
					on: {
						input: function (t) {
							return e.drawDelayChange(t)
						}
					}
				})]), e._v(" "), n("div", [e._v("\n        Camera Movement Speed: " + e._s(e.cameraSpeed) + "\n        "), n("input", {
					staticClass: "slider",
					attrs: {
						type: "range",
						min: "0.1",
						max: "1",
						step: "0.01"
					},
					domProps: {
						value: e.cameraSpeed
					},
					on: {
						input: function (t) {
							return e.cameraSpeedChange(t)
						}
					}
				})]), e._v(" "), n("div", [e._v("\n        Camera Zooming Speed: " + e._s(e.cameraZoomSpeed) + "\n        "), n("input", {
					staticClass: "slider",
					attrs: {
						type: "range",
						min: "1",
						max: "20",
						step: "1"
					},
					domProps: {
						value: e.cameraZoomSpeed
					},
					on: {
						input: function (t) {
							return e.cameraZoomSpeedChange(t)
						}
					}
				})]), e._v(" "), n("div", {
					staticStyle: {
						margin: "0"
					}
				}, [e._v("\n        Version Hash: " + e._s(e.clientHash) + "\n    ")]), e._v(" "), n("h3", {
					staticStyle: {
						"margin-top": "14px",
						"margin-bottom": "12px"
					}
				}, [e._v("Blocking Player Messages")]), e._v(" "), n("div", [e._v("You can block player by right clicking players name in chatbox.")]), e._v(" "), n("p-check", {
					staticClass: "p-switch",
					on: {
						change: function (t) {
							return e.toggle("showBlockedMessageCount")
						}
					},
					model: {
						value: e.showBlockedMessageCount,
						callback: function (t) {
							e.showBlockedMessageCount = t
						},
						expression: "showBlockedMessageCount"
					}
				}, [e._v("Show Blocked Message Count")])
			], 1)
		};
	k._withStripped = true;
	var C = n(1),
		x = n(5),
		S = n(4),
		I = n(169),
		_ = ["doubleResolution", "useWebGL"],
		M = PIXI.utils.isWebGLSupported(),
		A = M && x.useWebGL,
		P = {
			data: () => ({
				clientHash: "69",
				isWebGLSupported: M,
				showHud: x.showHud,
				showChat: x.showChat,
				drawDelay: x.drawDelay,
				skinsEnabled: x.skinsEnabled,
				namesEnabled: x.namesEnabled,
				showMass: x.showMass,
				shortMass: x.shortMass,
				foodVisible: x.foodVisible,
				spawnTransparency: x.spawnTransparency,
				useWebGL: A,
				eatAnimation: x.eatAnimation,
				showLocations: x.showLocations,
				cameraSpeed: x.cameraMoveSmoothing,
				cameraZoomSpeed: x.cameraZoomSpeed,
				doubleResolution: x.doubleResolution,
				showBackgroundImage: x.showBackgroundImage,
				backgroundColor: x.backgroundColor,
				backgroundImageUrl: x.backgroundImageUrl,
				backgroundImageRepeat: x.backgroundImageRepeat,
				backgroundImageOpacity: x.backgroundImageOpacity,
				backgroundDefaultIfUnequal: x.backgroundDefaultIfUnequal,
				minimapEnabled: x.minimapEnabled,
				minimapLocations: x.minimapLocations,
				autoZoom: x.autoZoom,
				showBlockedMessageCount: x.showBlockedMessageCount,

				// Aero:

				autoReconnect: x.autoReconnect,
				antiAfk: x.antiAfk,
				enableMinion: x.enableMinion,

				minionNickname: localStorage.minionNickname || x.minionNickname,
				minionTeamTag: localStorage.minionTeamTag || x.minionTeamTag,
				minionSkinUrl: localStorage.minionSkinUrl || x.minionSkinUrl

			}),
			methods: {
				toggle: function (e) {
					var t = this[e];
					if (x.set(e, t))
						if (_.includes(e)) S.confirm("Refresh page to activate changes?", () => {
							setTimeout(() => {
								location.reload()
							}, 500)
						});
						else if ("backgroundColor" !== e)
						if ("minimapLocations" !== e)
							if ("showHud" !== e) {
								if (C.running) switch (e) {
									case 'enableMinion':
										S.toast.fire({
											type: 'info',
											title: 'Please reconnect to activate changes',
											background: '#121212',
											timer: 2500
										});
										break;
									case "skinsEnabled":
										C.playerManager.onSkinsChanged(t);
										break;
									case "foodVisible":
										C.scene.food.visible = t;
										break;
									case "showBackgroundImage":
										C.scene.toggleBackgroundImage(t);
										break;
									case "backgroundImageUrl":
									case "backgroundImageRepeat":
									case "backgroundDefaultIfUnequal":
										C.scene.setBackgroundImage();
										break;
									case "minimapEnabled":
										t ? C.events.$emit("minimap-show") : C.events.$emit("minimap-hide");
										break;
									case "showChat":
										C.events.$emit("chat-visible", t);
										break;
									case "showBlockedMessageCount":
										C.events.$emit("show-blocked-message-count", t)
								}
							} else window.app.showHud = t;
					else C.events.$emit("minimap-show-locations", t);
					else {
						var n = PIXI.utils.string2hex(t);
						C.renderer.backgroundColor = n
					}
				},
				drawDelayChange: function (e) {
					this.drawDelay = e.target.valueAsNumber, x.set("drawDelay", this.drawDelay)
				},
				cameraSpeedChange: function (e) {
					this.cameraSpeed = e.target.valueAsNumber, x.set("cameraMoveSmoothing", this.cameraSpeed)
				},
				cameraZoomSpeedChange: function (e) {
					this.cameraZoomSpeed = e.target.valueAsNumber, x.set("cameraZoomSpeed", this.cameraZoomSpeed)
				},
				backgroundOpacityChange: function (e) {
					this.backgroundImageOpacity = e.target.valueAsNumber, x.set("backgroundImageOpacity", this.backgroundImageOpacity), C.scene && C.scene.backgroundSprite && (C.scene.backgroundSprite.alpha = this.backgroundImageOpacity)
				},

				// Aero: (LOL)

				onSkinUrlChange() {
					localStorage.setItem("minionSkinUrl", this.minionSkinUrl);
					x.set('minionSkinUrl', this.minionSkinUrl);
				},
				onTeamTagChange() {
					localStorage.setItem("minionTeamTag", this.minionTeamTag);
					x.set('minionTeamTag', this.minionTeamTag);
				},

				onNicknameChange() {
					localStorage.setItem("minionNickname", this.minionNickname);
					x.set('minionNickname', this.minionNickname);
				}
			},
			created: function () {
				C.running && C.border.width !== C.border.height && !I.isSeen("backgroundDefaultIfUnequal") && (
					alert("Custom backgrounds might look stretched on this gamemode.\nTo enable them, turn off setting 'Use Default on Unequal Maps'."),
					I.setSeen("backgroundDefaultIfUnequal"))
			}
		},
		E = (n(170), Object(g.a)(P, k, [], false, null, null, null));
	E.options.__file = "src/components/settings.vue";
	var L = E.exports,
		U = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "hotkey-container"
				}
			}, [n("div", {
				staticClass: "hotkeys"
			}, e._l(e.availableHotkeys, function (t, a) {
				return n("div", {
					key: a,
					staticClass: "row"
				}, [n("span", {
					staticClass: "action"
				}, [e._v(e._s(a))]), e._v(" "), n("span", {
					staticClass: "bind",
					attrs: {
						tabindex: "0"
					},
					on: {
						mousedown: function (n) {
							return e.onMouseDown(n, t)
						},
						keydown: function (n) {
							return n.preventDefault(), e.onKeyDown(n, t)
						}
					}
				}, [e._v("\n                " + e._s(e.hotkeys[t]) + "\n            ")])])
			}), 0), e._v(" "), n("div", {
				staticClass: "footer"
			}, [n("span", {
				staticClass: "reset-button2",
				on: {
					click: e.onResetClick
				}
			}, [n("i", {
				staticClass: "fa fa-undo"
			}), e._v(" Reset\n        ")])])])
		};
	U._withStripped = true;
	var B = n(61),
		T = n(4);
	var R = {
			data() {
				return {
					availableHotkeys: (e = {
						Feed: "feed",
						"Feed Macro": "feedMacro",
						Split: "split",
						"Double Split": "splitx2",
						"Triple Split": "splitx3",
						"Quad Split": "splitMax",
						"Split 32": "split32",
						"Split 64": "split64",
						"Diagonal Linesplit": "linesplit",
						"Lock Linesplit": "lockLinesplit",
						"Stop Movement": "stopMovement",
						Respawn: "respawn",
						"Auto Respawn": "autoRespawn",
						"Minion Feed": "m-feed",
						"Minion Feed Macro": "m-feedMacro",
						"Minion Split": "m-split",
						"Minion Double Split": "m-splitx2",
						"Minion Triple Split": "m-splitx3",
						"Minion Quad Split": "m-splitMax",
						"Minion Split 32": "m-split32",
						"Minion Split 64": "m-split64",
						"Stop Minion Movement": "m-stopMovement",
						"Respawn Minion": "m-respawn",
						"Toggle Skins": "toggleSkins",
						"Toggle Names": "toggleNames",
						"Toggle Food": "toggleFood",
						"Toggle Mass": "toggleMass",
						"Spectate Lock": "spectateLock",
						"Save Replay": "saveReplay",
						"Toggle HUD": "toggleHud",
						"Toggle Chat": "toggleChat",
						"Zoom Level 1": "zoomLevel1",
						"Zoom Level 2": "zoomLevel2",
						"Zoom Level 3": "zoomLevel3",
						"Zoom Level 4": "zoomLevel4",
						"Zoom Level 5": "zoomLevel5",
					}, localStorage.adminMode && (e["Select Player"] = "selectPlayer"), e),
					hotkeys: B.get()
				};
				var e
			},
			methods: {
				onResetClick: function () {
					T.confirm("Are you sure you want to reset all binds?", () => {
						this.hotkeys = B.reset()
					})
				},
				onMouseDown: function (e, t) {
					if (e.target === document.activeElement) {
						var n = "MOUSE" + e.button;
						B.set(t, n) && (e.preventDefault(), e.target.blur())
					}
				},
				onKeyDown: function (e, t) {
					var n = B.convertKey(e.key);
					"ESCAPE" !== n && "ENTER" !== n ? B.set(t, n) && e.target.blur() : e.target.blur()
				}
			},
			filters: {
				hotkeyText: function (e) {
					var t = {
						32: "SPACE",
						MOUSE0: "MOUSE0"
					}[e];
					return t || String.fromCharCode(e)
				}
			}
		},
		H = (n(172), Object(g.a)(R, U, [], false, null, null, null));
	H.options.__file = "src/components/hotkeys.vue";
	var z = H.exports,
		D = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "container"
			}, [n("input", {
				ref: "file",
				staticStyle: {
					display: "none"
				},
				attrs: {
					type: "file",
					accept: ".vanis",
					multiple: ""
				},
				on: {
					change: function (t) {
						return e.onFile(t)
					}
				}
			}), e._v(" "), n("div", {
				staticClass: "replay-button-row"
			}, [n("input", {
				staticClass: "vanis-button",
				attrs: {
					type: "button",
					value: "Import Replay"
				},
				on: {
					click: function (t) {
						return e.$refs.file.click()
					}
				}
			}), e._v(" "), n("input", {
				staticClass: "vanis-button",
				staticStyle: {
					width: "134px"
				},
				attrs: {
					type: "button",
					disabled: e.downloading || !e.replays.length,
					value: e.downloading ? "Packing Zip File ..." : "Download Replays"
				},
				on: {
					click: function (t) {
						return e.downloadAllReplays()
					}
				}
			}), e._v(" "), n("input", {
				staticClass: "vanis-button",
				attrs: {
					type: "button",
					value: "Delete All Replays",
					disabled: e.downloading || !e.replays.length
				},
				on: {
					click: function (t) {
						return e.deleteAllReplays()
					}
				}
			})]), e._v(" "), n("div", {
				staticClass: "replays-container"
			}, [n("div", {
				staticClass: "replays"
			}, [!e.replays.length && e.loaded ? n("div", {
				staticClass: "notification"
			}, [n("div", [e._v("Press " + e._s(e.hotkey) + " in game to save last 10 seconds of gameplay.")]), e._v(" "), n("div", {
				staticStyle: {
					color: "red",
					"font-weight": "bold"
				}
			}, [e._v("Replays are saved in browser memory!")])]) : e._e(), e._v(" "), e._l(e.replays, function (e, t) {
				return n("replay-item", {
					key: t,
					attrs: {
						replay: e
					}
				})
			})], 2)])])
		};
	D._withStripped = true;
	var O = n(109),
		N = n(82),
		F = n(174),
		W = n(1),
		V = n(61),
		j = n(4),
		X = n(7),
		G = W.replay.database;
	var Q = {
			data: () => ({
				loaded: false,
				replays: [],
				downloading: false,
				hotkey: V.get().saveReplay
			}),
			components: {
				replayItem: O.default
			},
			methods: {
				downloadAllReplays() {
					this.downloading = true;
					var e = new F;
					G.iterate((t, n) => {
						e.file(n + ".vanis", t), 0
					}, () => {
						e.generateAsync({
							type: "blob"
						}).then(e => {
							var t = "replays_" + X.getTimestamp() + ".zip";
							N.saveAs(e, t), this.downloading = false
						})
					})
				},
				deleteAllReplays() {
					j.confirm("Are you sure that you want to delete all replays?", async() => {
						try {
							await G.clear()
						} catch (e) {
							return void j.alert("Error clearing replays: " + e.message)
						}
						this.getReplays()
					})
				},
				getReplays() {
					var e = [];
					G.iterate((t, n) => {
						var a = {
							name: n,
							data: t
						};
						t.startsWith("REPLAY") ? a.image = t.split("|")[2] : a.image = "https://vanis.io/img/replay-placeholder.png", e.push(a)
					}, () => {
						this.replays = e.reverse(), this.loaded = true
					})
				},
				async onFile(e) {
					var t = Array.from(e.target.files);
					if (t.length) {
						e.target && (e.target.value = null);
						var n = t.map(async e => {
							var t = e.name.replace(/\.vanis$/, ""),
								n = await

							function (e) {
								return new Promise((t, n) => {
									var a = new FileReader;
									a.onload = (e => t(e.target.result)), a.onerror = n, a.readAsText(e)
								})
							}(e);
							return G.setItem(t, n)
						});
						try {
							await Promise.all(n)
						} catch (e) {
							j.alert('Error importing replays: "' + e.message + '"')
						}
						this.getReplays()
					}
				}
			},
			created() {
				W.events.$on("replay-added", this.getReplays), W.events.$on("replay-removed", this.getReplays), this.getReplays()
			},
			beforeDestroy() {
				W.events.$off("replay-added", this.getReplays), W.events.$off("replay-removed", this.getReplays)
			}
		},
		Z = (n(214), Object(g.a)(Q, D, [], false, null, "4a996e52", null));
	Z.options.__file = "src/components/replays3.vue";
	var Y = Z.exports,
		q = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticStyle: {
					padding: "15px"
				}
			}, [n("h2", {
				staticStyle: {
					margin: "0",
					"margin-bottom": "14px"
				}
			}, [e._v("Season Leaderboard")]), e._v(" "), e.errorMessage ? n("div", [e._v("\n        Failed loading season leaderboard data:\n        " + e._s(e.errorMessage) + "\n    ")]) : n("div", e._l(e.playerList, function (t, a) {
				return n("div", {
					key: a,
					staticClass: "player-row",
					class: {
						"own-row": e.ownUid && e.ownUid === t.uid
					}
				}, [n("div", {
					staticClass: "player-nr"
				}, [e._v(e._s(a + 1) + ".")]), e._v(" "), n("div", {
					staticClass: "player-name",
					style: {
						color: t.name_color
					}
				}, [e._v(e._s(t.name))]), e._v(" "), n("div", {
					staticClass: "player-xp"
				}, [e._v(e._s(t.season_xp) + " xp")])])
			}), 0)])
		};
	q._withStripped = true;
	var K = n(1),
		J = n(15),
		{
			checkBadWords: $
		} = n(23),
		ee = {
			data: () => ({
				playerList: [],
				errorMessage: "",
				ownUid: null
			}),
			created() {
				this.ownUid = K.ownUid;
				var e = "https://vanis.io/api".replace("/api", "") + "/highscores/season_xp/100";
				J.get(e).then(e => {
					var t = e.data;
					t.forEach(e => {
						var t = e.name_color;
						e.name_color = t ? "#" + t : "white";
						var n = e.locked_name || e.discord_name;
						$(n) && (n = "********"), e.name = n
					}), this.playerList = t
				}).catch(e => {
					this.errorMessage = e.message
				})
			}
		},
		te = (n(216), Object(g.a)(ee, q, [], false, null, "7cb607ba", null));
	te.options.__file = "src/components/season-leaderboard.vue";
	var ne = te.exports,
		ae = (n(15), n(1)),
		se = n(4),
		ie = {
			components: {
				modal: b.default,
				settings: L,
				hotkeys: z,
				replays3: Y,
				seasonLeaderboard: ne
			},
			data: () => ({
				activeModal: "",
				showSettings: false,
				showHotkeys: false,
				gameState: ae.state,
				nickname: "string" == typeof localStorage.nickname ? localStorage.nickname : "",
				teamtag: localStorage.teamtag || "",
				skinUrl: "string" == typeof localStorage.skinUrl ? localStorage.skinUrl : "https://skins.vanis.io/s/vanis1"
			}),
			created: function () {
				this.getUserData(), ae.events.$on("skinClick", e => {
					this.skinUrl = e
				})
			},
			methods: {
				openModal: function (e) {
					this.activeModal = e, this.$emit("modal-open", true)
				},
				closeModal: function () {
					this.activeModal = "", this.$emit("modal-open", false)
				},
				login: function () {
					var e = "https://vanis.io/api/login/discord";
					window.open(e, "discordLogin", "width=400, height=500");
				},
				getUserData: function () {},
				play: function (e) {
					e.isTrusted && (!this.gameState.isAlive && ae.joinGame(), ae.showMenu(false))
				},
				spectate: function () {
					this.gameState.isAlive ? console.warn("Cannot spectate, player is still alive") : (ae.actions.spectate(), ae.showMenu(false))
				},
				skinLoaded: function () {
					var e = this.$refs.skin;
					e && (e.naturalWidth > 2048 || e.naturalHeight > 2048) && se.instance.fire({
						html: "Your skin images size is too large.<br>Preferred skin size is 512x512px<br>Size is limited to 2048x2048px.",
						confirmButtonText: "OK"
					})
				},
				onSkinUrlChange() {
					ae.events.$emit("skinUrlChanged", this.skinUrl)
				},
				onTeamTagChange() {
					localStorage.setItem("teamtag", this.teamtag)
				},
				onNicknameChange() {
					localStorage.setItem("nickname", this.nickname)
				}
			}
		},
		re = (n(218), Object(g.a)(ie, w, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticStyle: {
					"text-align": "center",
					height: "286px"
				}
			}, [t("div", {
				staticStyle: {
					padding: "4px"
				}
			}, [this._v(" ")]), this._v(" "), this._v("Unfortunately, there\'s no ads. Here\'s a pepe to share the pain :("), t("img", {
				attrs: {
					src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABEQAAAQNCAYAAABU0p+HAAAgAElEQVR4Aey9vc7txpWuO4NGw4Y7UNuBgLaBFqzAgW1swYaNxgkWFGyg4UgKdtA4kZzuSIBDJwpOKugSdAm6BF2CLkGXoEtYB8/SV1pcNYtkkSyS9fMQ+DC/yTknyXrrrVFjvDWq6vHwEAEREAEREIH7Efj48XhM/754PB6pv28fj8fS3/ePx+N15l/qOtN7fjZ5pvfuh8gnEAEREAEREAEREAEREAEREAEREAERaAWBIHIEoeHriaCRK1zU9L0fJs8fykQZP2qlQnxOERABERABERABERABERABERABERCBMgggCJBNgUDwzYtgUJOIceWzBMHkqxc8wOaDMjB7FREQAREQAREQAREQAREQAREQAREQgTsQIAsiCB9MN9kyPeVKUaLWe4EZGTKfv0zFuaMOvacIiIAIiIAIiIAIiIAIiIAIiIAIiMACAkH8IID/LnNNjlqFiJqfC1GJrBqya8gm8RABERABERABERABERABERABERABEbgIARYM/fQlKCeLoVoB4d//499ev//he7N/v/nDr17/8b//c/Xvt395/+kav/jlz2opNwIUQhTZOE63uagReBsREAEREAEREAEREAEREAEREIH+EQgCCOtcXJ79EQQNRIkgXvzX//zu9f/+v//rp7//8//9P6//3y9f3foXnufV33//03MiuPD8//rzf7lSPGFdErJImGrj4q39t09LKAIiIAIiIAIiIAIiIAIiIAIiUBABpmMwLeNUAQShAMEgiB1B6Pjkn3+9Vdw4S1yhXAgnf/7kwzeiCWUni+XkLBsFkoINw0uJgAiIgAiIgAiIgAiIgAiIgAj0hQBTLZhyQWYBAXTRIJ3pJQT/ZHgE0aOGrI6zhI891/3bP/70OmSXkFlyolBC/TrFpq/2a2lEQAREQAREQAREQAREQAREQAQ2IMB0CqZVFM0CIZAPGR9kQyh8HJvKEzJKfvfq129EpdJi1Uv9Mx3KRVo3NB6/KgIiIAIiIAIiIAIiIAIiIAIi0BYCiCAEv0W2wGXKS1iYVPHjmPCxJaskiCQIT4UXd51mj7B2jIcIiIAIiIAIiIAIiIAIiIAIiIAINIsA02GKiCBBAGENDKZ4bAni/e55gglZOEy3OSGLJCzO6u41zTZ/H1wEREAEREAEREAEREAEREAExkKAAPbwdBgFkPNEjLMFIrJIWLOFtVsKTbNhahWcUhwZy5ZYWhEQAREQAREQAREQAREQARFoAoGwMOruIJg1QMg0IKA+O2j3+tcILtMMkkKLtSqONGEOfEgREAEREAEREAEREAEREAER6BuBsC7I7t1hWAeEaTC9bner8PKu8EI9s9sP9U4W0MEMkiCOuOZI33bG0vWHAH0HiymHv09ftltny/WlPzLFwm+mr1zPQwREQAREQAREQAREQAQuQYBskN07xBAMExS7C8y7YsGI4gnZQGQFFViglTVH4KWHCIjAvQggVEwFjm8fjwd/u4XzHcIp9wr3xTYEkYXn4vmcfncvR7y7CIiACIiACIiACDSHAA4kC6TucmoVQRQ/1gQfskfIFjo4tQZ+fv0S9DTXyHxgEWgEAfoDhAWEBtrb1YLH0eyy8Ht2PePZKQNlCYJJI9XgY4qACIiACIiACIiACJyNAE4vI2zBgcx+ZVFNM0EUQtaEkNTn06k1e7j38huCHRdjPdtCeP3eEWA6CtlXCOKtCh/Z/dbE3gSxJAglTsvpnemWTwREQAREQAREQAQmCOyaFsPUB9cEUQRJiRx7zzG1Kqw7MglWtgY4iHqM/nqIgAjMI0DmB+0kiB9b29kI30cUAh/6SKfezHPJT0RABERABERABESgOQRYnJIRdUbGsh1bFsf87V/ed3eYLxVC9ooeub9DHDk4rQZuM+JrINOcefKBT0CArAdsPlNGNtn9LX1E599lmh6CKziaRXICSb2kCIiACIiACIiACJyNAEIIQeKm9UHIBnFKjCJIrphR+nthzZEDC7ISxDAlzEMERkEgCCBwf5O93ytqsCYQ0ycRzf/43//55o9+gwWVw9/f/vGnrK3WafPhN9NXrheuzStrVnFP/grsZpU9OPCCkQLJKK3JcoqACIiACIiACDSPwC4hxGwQRZDS4sbR6xFQwcudwQ8j46S/u31v8ybNAkQIkAkFt0/NAEF4QIRAjHj199+/ES1q20WM5wkiShBPeO6DizjniCXYF/BnKpI2JiKob0VABERABERABETgDgQ2CyEEmjiRjNAdDV79vYLKmRw4sN4II7usDeB0mjuskvcshQBZT/B499boc9kgZGMF4QNxoaf+IGSfMCWPrcBPzC4J02u0M6UY73VEQAREQAREQAREIBOBzUJI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',
					width: '300',
					height: '240',
				}
			})])
		}], false, null, "1bcde71e", null));
	re.options.__file = "src/components/player.vue";
	var oe = re.exports,
		le = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticStyle: {
					padding: "17px"
				}
			}, [e.account ? e._e() : n("div", [n("div", {
				staticStyle: {
					"margin-top": "6px",
					"margin-bottom": "10px"
				}
			}, [e._v("Login to your account with Discord to save your in-game progress.")]), e._v(" "), n("div", {
				staticClass: "discord",
				on: {
					click: function (t) {
						return e.openDiscordLogin()
					}
				}
			}, [e.loading ? [e.loading ? n("i", {
				staticClass: "fas fa-sync fa-spin",
				staticStyle: {
					"margin-right": "5px"
				}
			}) : e._e(), e._v(" Loading\n            ")] : [n("i", {
				staticClass: "fab fa-discord"
			}), e._v(" Login with Discord\n            ")]], 2)]), e._v(" "), e.account ? n("div", {
				staticClass: "account"
			}, [n("div", {
				staticStyle: {
					"margin-bottom": "3px"
				}
			}, [n("img", {
				staticClass: "avatar",
				attrs: {
					src: e.account.avatarUrl
				}
			}), e._v(" "), n("div", {
				staticClass: "player-info"
			}, [n("div", {
				attrs: {
					id: "account-name"
				}
			}, [e._v(e._s(e.account.discordName))]), e._v(" "), n("div", [e._v("Level " + e._s(e.account.level))]), e._v(" "), n("div", [e._v(e._s(e.account.xp) + " Total XP")]), e._v(" "), n("div", [e._v(e._s(e.account.season_xp || 0) + " Season XP")])])]), e._v(" "), n("div", {
				staticStyle: {
					position: "relative"
				}
			}, [n("progress-bar", {
				staticClass: "xp-progress",
				attrs: {
					progress: e.progress
				}
			}), e._v(" "), n("div", {
				staticClass: "xp-data"
			}, [n("div", {
				staticStyle: {
					flex: "1",
					"margin-left": "8px"
				}
			}, [e._v(e._s(e.xpAtCurrentLevel))]), e._v(" "), n("div", {
				staticStyle: {
					"margin-right": "7px"
				}
			}, [e._v(e._s(e.xpAtNextLevel))])])], 1), e._v(" "), n("div", {
				staticClass: "logout",
				on: {
					click: function (t) {
						return e.logout()
					}
				}
			}, [n("i", {
				staticClass: "fas fa-sign-out-alt"
			}), e._v(" Logout\n        ")])]) : e._e()])
		};
	le._withStripped = true;
	var ce = function () {
		var e = this.$createElement,
			t = this._self._c || e;
		return t("div", {
			staticClass: "progress progress-striped"
		}, [t("div", {
			staticClass: "progress-bar",
			style: {
				width: 100 * this.progress + "%"
			}
		})])
	};
	ce._withStripped = true;
	var de = {
			props: ["progress"]
		},
		ue = (n(220), Object(g.a)(de, ce, [], false, null, "4e838c74", null));
	ue.options.__file = "src/components/progressBar.vue";
	var he = ue.exports,
		pe = n(222),
		ve = (n(15), n(4)),
		fe = n(1),
		ge = n(223),
		me = {
			components: {
				progressBar: he
			},
			data: () => ({
				account: null,
				progress: 0,
				xpAtCurrentLevel: 0,
				xpAtNextLevel: 0,
				loading: false
			}),
			created: function () {
				fe.events.$on("xp-update", this.onXpUpdate), pe.vanisToken && this.loadUserData(), this.listenForToken()
			},
			beforeDestroy() {
				fe.events.$off("xp-update", this.onXpUpdate)
			},
			methods: {
				listenForToken() {
					window.addEventListener("message", e => {
						var t = e.data.vanis_token;
						t && (this.onLoggedIn(t), e.source.postMessage("loggedIn", e.origin))
					})
				},
				async loadUserData() {
					this.loading = true;
					try {
						var e = await pe.get("/me")
					} catch (e) {
						this.loading = false;
						var t = e.response;
						return void(t && (console.error("Account:", t.data), 401 === t.status && pe.clearToken()))
					}
					this.setAccountData(e), this.updateProgress(this.account.xp, this.account.level), this.loading = false
				},
				async logout() {
					try {
						await pe.get("/me/logout")
					} catch (t) {
						var e = t.response;
						e && 401 !== e.status && ve.alert("Error: " + t.message)
					}
					pe.clearToken(), this.account = null, fe.ownUid = null
				},
				getAvatarUrl: (e, t) => t ? "https://cdn.discordapp.com/avatars/" + e + "/" + t + ".png" : "https://cdn.discordapp.com/embed/avatars/0.png",
				setAccountData(e) {
					window.gameObj = fe, e.avatarUrl = this.getAvatarUrl(e.discordId, e.discordAvatar), this.account = e, fe.ownUid = e.uid
				},
				onXpUpdate: function (e) {
					if (this.account) {
						var t = ge.getLevel(e);
						this.account.season_xp += e - this.account.xp, this.account.xp = e, this.account.level = t, this.updateProgress(e, t)
					}
				},
				updateProgress(e, t) {
					this.xpAtCurrentLevel = ge.getXp(t), this.xpAtNextLevel = ge.getXp(t + 1), this.progress = (e - this.xpAtCurrentLevel) / (this.xpAtNextLevel - this.xpAtCurrentLevel)
				},
				openDiscordLogin: function () {
					var e = pe.url + "/login/discord";
					window.open(e, "", "width=400, height=500")
				},
				onLoggedIn(e) {
					console.assert(e, "Vanis token empty or undefined"), pe.setToken(e), this.loadUserData()
				}
			}
		},
		ye = (n(224), Object(g.a)(me, le, [], false, null, "661435cd", null));
	ye.options.__file = "src/components/account.vue";
	var we = ye.exports,
		be = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticStyle: {
					'overflow-y': 'auto',
					'max-height': '100vh',
					padding: '8px'
				},
				attrs: {
					id: "skins"
				}
			}, e._l(e.skins, function (t, a) {
				return n("img", {
					key: a,
					staticClass: "skin",
					class: {
						selected: e.selectedSkinIndex === a
					},
					attrs: {
						src: t,
						alt: ""
					},
					on: {
						click: function (t) {
							return e.selectSkin(a)
						}
					}
				})
			}), 0)
		};
	be._withStripped = true;
	var ke = n(1),
		Ce = {
			data: () => ({
				selectedSkinIndex: 0,
				skins: []
			}),
			created: function () {
				ke.events.$on("skinUrlChanged", this.onSkinUrlChanged.bind(this))
				localStorage.modLoaded ?
					this.skins = this.loadSkins(localStorage.modSkins) || this.getDefaultSkins(258) :
					this.skins = this.loadSkins(localStorage.skins),
					this.skins = this.skins.concat(this.getDefaultSkins(258 - this.skins.length)),
					this.saveSkins();
				localStorage.modLoaded = true;
				var e = Number(localStorage.selectedSkinIndex) || 0;
				this.selectSkin(e);
			},
			methods: {
				loadSkins(e) {
					if (!e) return false;
					try {
						var t = JSON.parse(e)
					} catch (e) {
						return console.error("Error parsing saved skins", e.message), false
					}
					return Array.isArray(t) ? t : false
				},
				getDefaultSkins(n) {
					for (var e = [], t = 0; t < n; t++) e.push("https://skins.vanis.io/s/vanis1");
					return e
				},
				onSkinUrlChanged(e) {
					this.$set(this.skins, this.selectedSkinIndex, e), this.saveSkins()
				},
				selectSkin(e) {
					this.selectedSkinIndex = e, localStorage.selectedSkinIndex = e;
					var t = this.skins[e];
					ke.events.$emit("skinClick", t)
				},
				saveSkins() {
					localStorage.modSkins = JSON.stringify(this.skins);
				}
			}
		},
		xe = (n(226), Object(g.a)(Ce, be, [], false, null, "1c614894", null));
	xe.options.__file = "src/components/skins.vue";
	var Se = xe.exports,
		Ie = n(1),
		_e = {
			data: () => ({
				isModalOpen: false,
				selectedTab: "servers",
				gameState: Ie.state
			}),
			methods: {
				onModalChange: function (e) {
					this.isModalOpen = e
				}
			},
			components: {
				servers: y,
				playerContainer: oe,
				account: we,
				skins: Se
			}
		},
		Me = (n(228), Object(g.a)(_e, o, [], false, null, "ebed1606", null));
	Me.options.__file = "src/components/main-container.vue";
	var Ae = Me.exports,
		Pe = function () {
			var e = this.$createElement;
			this._self._c;
			return this._m(0)
		};
	Pe._withStripped = true;
	n(230);
	var Ee = Object(g.a)({}, Pe, [function () {
		var e = this.$createElement,
			t = this._self._c || e;
		return t("div", {
			staticClass: "social-container"
		}, [t("a", {
			staticClass: "discord-link",
			attrs: {
				href: "https://vanis.io/discord",
				target: "_blank"
			}
		}, [t("i", {
			staticClass: "fab fa-discord"
		}), this._v(" Discord\n    ")]), this._v(" "), t("a", {
			staticClass: "youtube-link",
			attrs: {
				href: "https://www.youtube.com/channel/UCuWJ0czBKaNcQ5MByoimLBw",
				target: "_blank"
			}
		}, [t("i", {
			staticClass: "fab fa-youtube"
		}), this._v(" Youtube\n    ")]), this._v(" "), t("a", {
			attrs: {
				href: "https://skins.vanis.io",
				target: "_blank",
				id: "skins-link"
			}
		}, [t("i", {
			staticClass: "fas fa-images"
		}), this._v(" Skins\n    ")])])
	}], false, null, "4d0670e9", null);
	Ee.options.__file = "src/components/social-links.vue";
	var Le = Ee.exports,
		Ue = function () {
			var e = this.$createElement;
			this._self._c;
			return this._m(0)
		};
	Ue._withStripped = true;
	var Be = {
			data() {}
		},
		Te = (n(232), Object(g.a)(Be, Ue, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container"
			}, [t("a", {
				attrs: {
					href: "privacy.html",
					target: "_blank"
				}
			}, [this._v("Privacy Policy")]), this._v(" "), t("span", {
				staticClass: "line"
			}, [this._v("|")]), this._v(" "), t("a", {
				attrs: {
					href: "tos.html",
					target: "_blank"
				}
			}, [this._v("Terms of Service")])])
		}], false, null, "6843da33", null));
	Te.options.__file = "src/components/privacy-tos.vue";
	var Re = Te.exports,
		He = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return this.show ? t("div", {
				staticClass: "context-menu fade",
				style: {
					top: this.y + "px",
					left: this.x + "px"
				}
			}, [t("div", {
				staticClass: "player-name"
			}, [this._v(this._s(this.playerName))]), this._v(" "), t("div", [this._v("Block")]), this._v(" "), t("div", {
				on: {
					click: this.hideName
				}
			}, [this._v("Hide Name")]), this._v(" "), t("div", {
				on: {
					click: this.hideSkin
				}
			}, [this._v("Hide Skin")]), this._v(" "), t("div", [this._v("Kick")]), this._v(" "), t("div", [this._v("Ban")]), this._v(" "), t("div", [this._v("Mute")])]) : this._e()
		};
	He._withStripped = true;
	n(1);
	var ze = {
			data: () => ({
				show: false,
				playerName: "",
				x: 100,
				y: 55
			}),
			methods: {
				open: function (e, t) {
					this.player = t, this.playerName = t.name, this.x = e.clientX, this.y = e.clientY, this.show = true, document.addEventListener("click", e => {
						this.show = false
					}, {
						once: true
					})
				},
				hideName: function () {
					this.player.setName(""), this.player.render()
				},
				hideSkin: function () {
					this.player.setSkin(""), this.player.render()
				}
			},
			created() {}
		},
		De = (n(234), Object(g.a)(ze, He, [], false, null, "4dbee04d", null));
	De.options.__file = "src/components/context-menu.vue";
	var Oe = De.exports,
		Ne = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				attrs: {
					id: "hud"
				}
			}, [t("stats"), this._v(" "), t("chatbox"), this._v(" "), t("leaderboard"), this._v(" "), t("minimap")], 1)
		};
	Ne._withStripped = true;
	var Fe = function () {
		var e = this.$createElement,
			t = this._self._c || e;
		return t("div", {
			directives: [{
				name: "show",
				rawName: "v-show",
				value: this.visible,
				expression: "visible"
			}],
			staticClass: "stats"
		}, [t("div", [this._v("FPS: " + this._s(this.fps || "-"))]), this._v(" "), t("div", [this._v("Ping: " + this._s(this.ping || "-"))]), this._v(" "), t("div", {
			directives: [{
				name: "show",
				rawName: "v-show",
				value: this.mass,
				expression: "mass"
			}]
		}, [this._v("Mass: " + this._s(this.mass))]), this._v(" "), t("div", {
			directives: [{
				name: "show",
				rawName: "v-show",
				value: this.cells,
				expression: "cells"
			}]
		}, [this._v("Cells: " + this._s(this.cells))])])
	};
	Fe._withStripped = true;
	var We = n(1),
		Ve = {
			data: () => ({
				visible: false,
				ping: 0,
				fps: 0,
				mass: 0,
				cells: 0
			}),
			created() {
				We.events.$on("stats-visible", e => this.visible = e), We.events.$on("cells-changed", e => this.cells = e), We.events.$on("stats-changed", e => {
					this.ping = e.ping || 0, this.fps = e.fps || 0, e.mass ? We.settings.shortMass ? this.mass = We.getShortMass(e.mass) : this.mass = e.mass : this.mass = 0
				})
			}
		},
		je = (n(236), Object(g.a)(Ve, Fe, [], false, null, "0875ad82", null));
	je.options.__file = "src/components/stats.vue";
	var Xe = je.exports,
		Ge = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.visible,
					expression: "visible"
				}],
				attrs: {
					id: "chatbox"
				}
			}, [e.showBlockedMessageCount && e.blockedMessageCount ? n("div", {
				staticStyle: {
					position: "absolute",
					top: "-28px"
				}
			}, [e._v("Blocked messages: " + e._s(e.blockedMessageCount))]) : e._e(), e._v(" "), n("div", {
				ref: "list",
				attrs: {
					id: "message-list"
				},
				on: {
					click: function (t) {
						return e.onChatClick(t)
					},
					contextmenu: function (t) {
						return e.onChatRightClick(t)
					}
				}
			}, e._l(e.messages, function (t, a) {
				return n("div", {
					key: a,
					staticClass: "message-row"
				}, [t.from ? n("span", {
					staticClass: "message-from",
					style: {
						color: t.fromColor
					},
					attrs: {
						"data-pid": t.pid
					}
				}, [e._v(e._s(t.from) + ":")]) : e._e(), e._v(" "), n("span", {
					staticClass: "message-text",
					style: {
						color: t.textColor
					}
				}, [e._v(e._s(t.text))])])
			}), 0), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.inputText,
					expression: "inputText"
				}],
				ref: "input",
				attrs: {
					id: "chatbox-input",
					type: "text",
					maxlength: "100",
					tabindex: "-1",
					placeholder: "Type your message here"
				},
				domProps: {
					value: e.inputText
				},
				on: {
					keydown: function (t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.sendChatMessage()
					},
					input: function (t) {
						t.target.composing || (e.inputText = t.target.value)
					}
				}
			})])
		};
	Ge._withStripped = true;
	var Qe = n(1),
		Ze = n(5),
		Ye = n(4),
		{
			htmlEncode: qe
		} = n(7),
		Ke = {},
		Je = {
			data: () => ({
				visible: false,
				inputText: "",
				messages: [],
				showBlockedMessageCount: Ze.showBlockedMessageCount,
				blockedMessageCount: 0
			}),
			methods: {
				onChatClick(e) {
					var t = e.target.dataset.pid;
					t && (Qe.selectedPlayer = t)
				},
				onChatRightClick(e) {
					var t = e.target.dataset.pid;
					if (t) {
						var n = Qe.playerManager.players[t];
						n ? Ke[t] ? this.confirmUnblockPlayer(n) : this.confirmBlockPlayer(n) : Ye.alert("Player does not exist or disconnected")
					}
				},
				confirmBlockPlayer(e) {
					var t = e.name,
						n = e.pid,
						a = 'Block player "' + t + '" until restart?';
					Ye.confirm(a, () => {
						e.isMe ? Ye.alert("You can not block yourself") : (Ke[n] = t, Qe.addServerMessage('Blocked player "' + t + '"'))
					})
				},
				confirmUnblockPlayer(e) {
					var t = e.name,
						n = e.pid,
						a = 'Unblock player "' + t + '"';
					Ye.confirm(a, () => {
						delete Ke[n], Qe.addServerMessage('Unblocked player "' + t + '"')
					})
				},
				sendChatMessage() {
					var e = this.inputText.trim();
					e && (Qe.selectedPlayer && (e = e.replace(/\$pid/g, Qe.selectedPlayer)), Qe.sendChatMessage(e), this.inputText = ""), Qe.renderer.view.focus()
				},
				onChatMessage(e) {
					if (Ke[e.pid]) this.blockedMessageCount++;
					else {
						e.fromColor = e.fromColor || "#ffffff", e.textColor = e.textColor || "#ffffff", this.messages.push(e), this.$nextTick(this.scrollBottom)
					}
				},
				onVisibilityChange(e) {
					this.visible = e, e && this.$nextTick(this.scrollBottom)
				},
				focusChat() {
					this.visible && this.$refs.input.focus()
				},
				clearChat() {
					this.messages = []
				},
				scrollBottom() {
					var e = this.$refs.list;
					e.scrollTop = e.scrollHeight
				}
			},
			created() {
				Qe.events.$on("chat-visible", this.onVisibilityChange), Qe.events.$on("chat-focus", this.focusChat), Qe.events.$on("chat-message", this.onChatMessage), Qe.events.$on("chat-clear", this.clearChat), Qe.events.$on("show-blocked-message-count", e => this.showBlockedMessageCount = e), Qe.events.$on("game-stopped", () => {
					this.blockedMessageCount = 0, Ke = {}
				})
			}
		},
		$e = (n(238), Object(g.a)(Je, Ge, [], false, null, "4900a413", null));
	$e.options.__file = "src/components/chatbox.vue";
	var et = $e.exports,
		tt = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.visible,
					expression: "visible"
				}],
				attrs: {
					id: "leaderboard"
				}
			}, [n("div", {
				staticClass: "leaderboard-title"
			}, [e._v("Leaderboard")]), e._v(" "), n("div", e._l(e.leaderboard, function (t, a) {
				return n("div", {
					key: a,
					staticClass: "leaderboard-label",
					style: {
						color: t.color
					}
				}, [e._v(e._s(a + 1) + ". " + e._s(t.text))])
			}), 0)])
		};
	tt._withStripped = true;
	var nt = n(1),
		at = (n(5), {
			data: () => ({
				visible: false,
				leaderboard: []
			}),
			methods: {
				updateLeaderboard(e) {
					this.leaderboard = e
				},
				onLeaderboardShow() {
					this.visible || (nt.events.$on("leaderboard-update", this.updateLeaderboard), this.visible = true)
				},
				onLeaderboardHide() {
					this.visible && (nt.events.$off("leaderboard-update", this.updateLeaderboard), this.leaderboard = [], this.visible = false)
				}
			},
			created() {
				nt.events.$on("leaderboard-show", this.onLeaderboardShow), nt.events.$on("leaderboard-hide", this.onLeaderboardHide)
			}
		}),
		st = (n(240), Object(g.a)(at, tt, [], false, null, "8a0c31c6", null));
	st.options.__file = "src/components/leaderboard.vue";
	var it = st.exports,
		rt = {
			components: {
				stats: Xe,
				chatbox: et,
				minimap: n(110).default,
				leaderboard: it
			},
			data: () => ({})
		},
		ot = (n(244), Object(g.a)(rt, Ne, [], false, null, "339660d2", null));
	ot.options.__file = "src/components/hud.vue";
	var lt = ot.exports,
		ct = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("transition", {
				attrs: {
					name: "menu"
				}
			}, [n("div", {
				staticClass: "container"
			}, [e.stats ? n("div", {
				staticClass: "fade-box",
				class: {
					scroll: e.isLoadingAd
				}
			}, [n("div", {
				staticStyle: {
					padding: "15px"
				}
			}, [n("div", [e._v("Time Alive: " + e._s(e.timeAlive))]), e._v(" "), n("div", [e._v("Highscore: " + e._s(e.highscore))]), e._v(" "), n("div", [e._v("Players Eaten: " + e._s(e.stats.killCount))]), e._v(" "), n("btn", {
				staticClass: "continue",
				nativeOn: {
					click: function (t) {
						return e.onContinueClick(t)
					}
				}
			}, [e._v("Continue")])], 1)]) : e._e()])])
		};
	ct._withStripped = true;
	var dt = n(1),
		ut = n(72),
		ht = {
			props: ["stats"],
			data: () => ({
				isLoadingAd: false
			}),
			methods: {
				loadAd: function () {
					this.isLoadingAd = ut.refreshAd("death-box")
				},
				onContinueClick: function () {
					dt.state.loadingAds = false, dt.showDeathScreen(false), dt.showMenu(true)
				}
			},
			watch: {
				stats: function () {
					this.loadAd()
				}
			},
			computed: {
				timeAlive: function () {
					var e = this.stats.timeAlive;
					return e < 60 ? e + "s" : Math.floor(e / 60) + "min " + e % 60 + "s"
				},
				highscore: function () {
					var e = this.stats.highscore;
					return dt.getShortMass(e)
				}
			}
		},
		pt = (n(246), Object(g.a)(ht, ct, [], false, null, "3249d726", null));
	pt.options.__file = "src/components/death-stats.vue";
	var vt = pt.exports,
		ft = function () {
			var e = this.$createElement;
			return (this._self._c || e)("button", {
				staticClass: "btn"
			}, [this._t("default", [this._v("Here should be something")])], 2)
		};
	ft._withStripped = true;
	var gt = {},
		mt = (n(248), Object(g.a)(gt, ft, [], false, null, "b0b10308", null));
	mt.options.__file = "src/components/btn.vue";
	var yt = mt.exports,
		wt = function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return e.show ? n("div", {
				class: {
					"auto-hide": e.autoHideReplayControls
				},
				attrs: {
					id: "replay-controls"
				}
			}, [n("div", {
				staticStyle: {
					"text-align": "right"
				}
			}, [n("div", [e._v("Opacity " + e._s(e.cellOpacity) + "%")]), e._v(" "), n("div", [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.cellOpacity,
					expression: "cellOpacity"
				}],
				staticClass: "replay-slider",
				staticStyle: {
					width: "105px",
					display: "inline-block"
				},
				attrs: {
					id: "replay-opacity-slider",
					type: "range",
					min: "10",
					max: "100"
				},
				domProps: {
					value: e.cellOpacity
				},
				on: {
					input: e.onCellOpacitySlide,
					__r: function (t) {
						e.cellOpacity = t.target.value
					}
				}
			})])]), e._v(" "), n("div", {
				staticStyle: {
					"margin-bottom": "5px",
					display: "flex"
				}
			}, [n("div", {
				staticStyle: {
					flex: "1"
				}
			}, [e._v("Packet " + e._s(e.replayIndex) + " / " + e._s(e.packetCount))]), e._v(" "), n("div", {
				staticStyle: {
					"margin-right": "10px"
				}
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.autoHideReplayControls,
					expression: "autoHideReplayControls"
				}],
				attrs: {
					type: "checkbox",
					id: "replay-auto-hide-controls"
				},
				domProps: {
					checked: Array.isArray(e.autoHideReplayControls) ? e._i(e.autoHideReplayControls, null) > -1 : e.autoHideReplayControls
				},
				on: {
					change: [function (t) {
						var n = e.autoHideReplayControls,
							a = t.target,
							s = !!a.checked;
						if (Array.isArray(n)) {
							var i = e._i(n, null);
							a.checked ? i < 0 && (e.autoHideReplayControls = n.concat([null])) : i > -1 && (e.autoHideReplayControls = n.slice(0, i).concat(n.slice(i + 1)))
						} else e.autoHideReplayControls = s
					}, e.saveAutoHideControls]
				}
			}), e._v(" "), n("label", {
				attrs: {
					for: "replay-auto-hide-controls"
				}
			}, [e._v("Auto Hide Controls")])])]), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.rangeIndex,
					expression: "rangeIndex"
				}],
				staticClass: "replay-slider",
				attrs: {
					type: "range",
					min: e.rangeMin,
					max: e.rangeMax
				},
				domProps: {
					value: e.rangeIndex
				},
				on: {
					input: e.onSlide,
					change: e.onSlideEnd,
					__r: function (t) {
						e.rangeIndex = t.target.value
					}
				}
			})]) : e._e()
		};
	wt._withStripped = true;
	var bt = n(1),
		kt = {
			data: () => ({
				show: false,
				autoHideReplayControls: bt.settings.autoHideReplayControls,
				drawDelay: bt.settings.drawDelay,
				cellOpacity: 100,
				rangeMin: 0,
				rangeIndex: 0,
				rangeMax: 1e3,
				replayIndex: 0,
				packetCount: 0
			}),
			created: function () {
				bt.events.$on("show-replay-controls", this.onShow), bt.events.$on("replay-index-change", this.onReplayIndexChange)
			},
			methods: {
				onShow(e) {
					e ? (this.show = true, this.packetCount = e - 1) : (this.show = false, this.cellOpacity = 100, this.rangeIndex = 0, this.packetCount = 0)
				},
				onReplayIndexChange(e) {
					var t = e / this.packetCount;
					this.rangeIndex = Math.floor(t * this.rangeMax), this.replayIndex = e
				},
				onSlide(e) {
					bt.moveInterval && (clearInterval(bt.moveInterval), bt.moveInterval = null), this.replayIndex = bt.replayMoveTo(this.rangeIndex / this.rangeMax)
				},
				onSlideEnd(e) {
					!bt.moveInterval && (bt.moveInterval = setInterval(bt.replayUpdate, 40))
				},
				onCellOpacitySlide() {
					bt.scene.foreground.alpha = this.cellOpacity / 100
				},
				saveAutoHideControls() {
					bt.settings.set("autoHideReplayControls", this.autoHideReplayControls)
				}
			}
		},
		Ct = (n(250), Object(g.a)(kt, wt, [], false, null, "c2c2ac08", null));
	Ct.options.__file = "src/components/replay-controls.vue";
	var xt = Ct.exports,
		St = function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return this.show ? t("div", {
				attrs: {
					id: "ab-overlay"
				}
			}, [this._m(0)]) : this._e()
		};
	St._withStripped = true;
	var It = n(15),
		{
			isFirstVisit: _t
		} = n(23),
		Mt = {
			data: () => ({
				show: false
			}),
			created() {
				_t ? console.log("Welcome to Vanis.io!") : It.get("/ads.css").then(e => {}).catch(e => {
					!e.response && (this.show = true)
				})
			}
		},
		At = (n(252), Object(g.a)(Mt, St, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "content"
			}, [t("img", {
				staticStyle: {
					width: "120px"
				},
				attrs: {
					src: "/img/sad.png"
				}
			}), this._v(" "), t("p", {
				staticStyle: {
					"font-size": "3em"
				}
			}, [this._v("Adblock Detected")]), this._v(" "), t("p", {
				staticStyle: {
					"font-size": "1.5em",
					"margin-bottom": "15px"
				}
			}, [this._v("We use advertisements to fund our servers!")]), this._v(" "), t("img", {
				staticStyle: {
					"border-radius": "4px",
					"box-shadow": "0 0 10px black"
				},
				attrs: {
					src: "/img/ab.gif"
				}
			})])
		}], false, null, "1611deb4", null));
	At.options.__file = "src/components/ab-overlay.vue";
	var Pt = At.exports,
		Et = function () {
			var e = this.$createElement;
			return (this._self._c || e)("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: this.show,
					expression: "show"
				}],
				staticClass: "image-captcha-overlay"
			}, [this._m(0)])
		};
	Et._withStripped = true;
	var Lt = n(1),
		Ut = n(24);
	var Bt = {
			data: () => ({
				show: false,
				scriptLoadPromise: null,
				captchaId: null,
				wsId: null
			}),
			created() {
				Lt.events.$on("show-image-captcha", async(minion) => {
					this.minion = minion,
						this.show = true, this.wsId = Lt.currentWsId, grecaptcha.ready(() => {
							this.renderCaptcha()
						})
				})
			},
			methods: {
				renderCaptcha() {
					null === this.captchaId ? this.captchaId = grecaptcha.render(document.getElementById("image-captcha-container"), {
						sitekey: "6LfDYLgZAAAAAJpd1zpnoWxIXhFaxHKqoTHXKYhh",
						callback: this.onCaptchaToken.bind(this)
					}) : grecaptcha.reset(this.captchaId)
				},
				onCaptchaToken(e) {
					if (this.minion)
						if (e) {
							const i = new Message;
							i.writeUint8(11), i.writeUtf8(e), this.minion.send(i.finalize()), this.show = false
						} else this.renderCaptcha();
					else {
						var i = Lt.currentWsId;
						if (i && i === this.wsId)
							if (e) {
								var t = new Ut;
								t.uint8(11), t.utf8(e), Lt.send(t.write()), this.show = false
							} else this.renderCaptcha();
						else this.show = false
					}
				}
			}
		},
		Tt = (n(254), Object(g.a)(Bt, Et, [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "center-screen"
			}, [t("div", {
				staticStyle: {
					"margin-bottom": "6px"
				}
			}, [this._v("Login and level up to skip image captchas!")]), this._v(" "), t("div", {
				attrs: {
					id: "image-captcha-container"
				}
			})])
		}], false, null, "76d60428", null));
	Tt.options.__file = "src/components/image-captcha.vue";
	var Rt = Tt.exports;
	s.a.use(r.a);
	var Ht = n(5);
	s.a.component("btn", yt), window.app = new s.a({
		el: "#app",
		data: {
			showHud: Ht.showHud,
			showMenu: true,
			showDeathScreen: false,
			deathStats: null
		},
		components: {
			imageCaptcha: Rt,
			mainContainer: Ae,
			socialLinks: Le,
			privacyTos: Re,
			contextMenu: Oe,
			hud: lt,
			deathStats: vt,
			replayControls: xt,
			abOverlay: Pt
		}
	})
}]);
