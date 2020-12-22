// unobfuscated by Aero, (c) ur mum

/* custom css */

!function(){var t=document.createElement("style");t.textContent='@import url(https://fonts.googleapis.com/css?family=Hind+Madurai:500|Nunito);.pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:"";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% - -1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes tada{0%{animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{animation-timing-function:ease-in;transform:scale(1.5)}72%{animation-timing-function:ease-out;transform:scale(1)}81%{animation-timing-function:ease-in;transform:scale(1.24)}89%{animation-timing-function:ease-out;transform:scale(1)}95%{animation-timing-function:ease-in;transform:scale(1.04)}to{animation-timing-function:ease-out;transform:scale(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% - -1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% - -1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% - -1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:"";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% - -1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:"";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#5f85db!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#5f85db}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#5f85db;stroke:#5f85db}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#5f85db!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#5f85db}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#5f85db!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#90b8f8;background-color:#90b8f8!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% - -1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}#chatbox-container,.fade-box,.swal2-popup{box-shadow:0 0 4px 2px #000!important}#chatbox-container{position:absolute;display:flex;flex-direction:column;width:440px;height:200px;bottom:0;left:0;padding:10px;background:rgba(0,0,0,.45);font-size:14px;border-radius:4px}#chatbox-container #message-list{flex:1;overflow:auto;margin-bottom:5px}#chatbox-container input{font-size:14px;border:0;outline:0;background:transparent;width:100%}.chatbox-message{overflow:hidden}.chatbox-message .sender{white-space:nowrap;margin-right:5px}.chatbox-message .text{word-break:break-word;user-select:text}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon:before{display:flex;align-items:center;font-size:2em;font-weight:700}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-popup.swal2-toast .swal2-icon:before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.65)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:auto;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:linear-gradient(to right bottom,#273b5e,#0f1724);font-family:inherit;font-size:15px}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#dadada;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-radius:100%;border:.25em solid transparent;background-color:transparent!important;color:transparent;cursor:default;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm:after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-radius:50%;border:3px solid #999;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#5f85db;color:#fff;font-size:15px}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:rgba(0,0,0,.5);color:#fff;font-size:15px}.swal2-styled:focus{outline:none;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:transparent;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:transparent;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#dadada;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:5px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:rgba(0,0,0,.5);border-radius:.1875em;background:rgba(0,0,0,.5);box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:15px}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:rgba(0,0,0,.5);outline:none;box-shadow:none}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:5px;background:rgba(0,0,0,.5)}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:15px;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:rgba(0,0,0,.5);font-size:15px}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,.5);color:inherit;font-size:15px}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:rgba(0,0,0,.5);color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:15px}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message:before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon:before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning:before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info:before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question:before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark:before{content:"ØŸ"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{animation:swal2-show .3s}.swal2-show.swal2-noanimation{animation:none}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0deg)}}@keyframes swal2-toast-hide{to{transform:rotate(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}to{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}to{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}to{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}to{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - 1.25em);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.65)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container,body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}#swal2-content{margin-bottom:10px!important}.swal2-input{min-width:350px;margin:0 0 10px!important}.swal2-title{text-shadow:1px 1px 2px #000}body.swal2-toast-shown .swal2-container.swal2-top{top:5%}.swal2-popup .swal2-styled:focus{box-shadow:none}@keyframes swal2-show{0%{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}}@keyframes swal2-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.93)}}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:grey}::-webkit-scrollbar-track{background:rgba(0,0,0,.5)}.hide-captcha-badge .grecaptcha-badge{visibility:hidden}.fade-box{background:#121212;border-radius:4px}#overlay{background:radial-gradient(rgba(18,18,18,18,1) 300px,rgba(0,0,0,.75));position:fixed;top:0;bottom:0;left:0;right:0}body{overflow:hidden;margin:0;padding:0;color:#dadada}#canvas{display:block;width:100%;height:100%;outline:none}*{font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a{text-decoration:none;color:#dadada}p{margin:0}.preload{position:absolute;font-family:Hind Madurai,sans-serif;opacity:0;width:0;height:0}.disabled-content{pointer-events:none;opacity:.4}.vanis-list-item{display:flex;user-select:none;cursor:pointer;padding:10px;border-bottom:2px solid #000}.vanis-list-item:hover{background:rgba(0,0,0,.2)}input[type=text]{display:block;box-sizing:border-box;background:rgba(0,0,0,.5);border:1px solid #000;padding:5px;outline:0;width:100%;color:#dadada;border-radius:4px}input[type=text]:disabled{color:grey}#starfield{width:100%;height:100%}.vanis-button{text-decoration:none;outline:none;color:#fff;cursor:pointer;text-shadow:0 0 4px #000;padding:5px 10px;border:1px solid #000;border-radius:4px}.vanis-button,.vanis-button:active{background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))}.vanis-button:active{box-shadow:inset 0 0 3px 0 #000}.vanis-button:disabled{cursor:auto;transition:none;color:#b3b3b3}.new-badge[data-v-0647fbb0]{background:#5f85db;font-size:9px;font-weight:700;border-radius:4px;padding:1px;position:absolute;right:10px;top:5px}.active[data-v-0647fbb0]{background:rgba(0,0,0,.5)}.server-list[data-v-0647fbb0]{height:100%;overflow:auto}.server-load-error[data-v-0647fbb0]{padding:10px;border-bottom:2px solid #000;background:rgba(0,0,0,.5);color:#ffcccb}.server-name[data-v-0647fbb0]{flex:1}#tab-menu[data-v-0647fbb0]{display:flex;flex-direction:column}#tab-menu .tabs[data-v-0647fbb0]{display:flex;font-size:18px;border-bottom:2px solid #000}#tab-menu .tab[data-v-0647fbb0]{flex:1;position:relative;cursor:pointer;text-align:center;padding:7px}#tab-menu .tab[data-v-0647fbb0]:not(:last-child){border-right:2px solid #000}#tab-menu .tab.active[data-v-0647fbb0]{background:rgba(0,0,0,.5)}.cursor-loading[data-v-0647fbb0]{cursor:default!important}.modal[data-v-0eaeaf66]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}.overlay[data-v-0eaeaf66]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.wrapper[data-v-0eaeaf66]{height:100%;overflow:hidden}.content[data-v-0eaeaf66]{position:relative;overflow:auto;height:100%;box-shadow:0 0 4px 2px #000;border-radius:4px}.close-button[data-v-0eaeaf66]{cursor:pointer;z-index:111;position:absolute;color:#d3d3d3;background:#000;border-radius:50%;top:-13px;right:-13px;font-size:30px}.scale-enter-active[data-v-0eaeaf66],.scale-leave-active[data-v-0eaeaf66]{transition:transform .22s}.scale-enter[data-v-0eaeaf66],.scale-leave-to[data-v-0eaeaf66]{transform:scale(1.08)}.fade-enter-active[data-v-0eaeaf66],.fade-leave-active[data-v-0eaeaf66]{transition:opacity .22s}.fade-enter[data-v-0eaeaf66],.fade-leave-to[data-v-0eaeaf66]{opacity:0}.settings-container{padding:10px}.settings-container>*{display:block;margin-bottom:10px}.settings-container .setting{display:flex}.settings-container .setting>*{flex:1}.pretty.p-switch .state:before{background:#121212}.pretty.p-switch input:checked~.state:before{border-color:#5f85db!important}.pretty.p-switch input:checked~.state label:after{background-color:#5f85db!important}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .3s ease}.header{padding:7px;background:rgba(0,0,0,.5);border-bottom:2px solid #000}.section{border:2px solid #000;border-radius:8px;overflow:hidden}.section .options{padding:9px 9px 9px 7px}.section .options>*{display:block;margin-bottom:9px}.section .options>:last-child{margin:0}.slider{display:block;box-sizing:border-box;border:1px solid #5f85db;border-radius:60px;padding:1px;-webkit-appearance:none;width:100%;background:#121212;outline:none;-webkit-transition:.2s;transition:opacity .2s}.slider.draw-delay{background:linear-gradient(45deg,#90b8f8,#000 35%)}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{border-radius:60px;-webkit-appearance:none;appearance:none;width:15px;height:15px;background:#5f85db;cursor:pointer}#hotkey-container{display:flex;flex-direction:column;user-select:none}#hotkey-container .hotkeys{flex:1;overflow:auto}#hotkey-container .row{display:flex;padding:6px}#hotkey-container .row:not(:last-child){border-bottom:2px solid #000}#hotkey-container .reset-button2{cursor:pointer}#hotkey-container .action{flex:1}#hotkey-container .bind{flex:1;cursor:pointer;outline:none;padding-left:5px;padding-right:5px;border-radius:4px}#hotkey-container .bind:focus{background:rgba(0,0,0,.5)}#hotkey-container .reset{padding:4px}#hotkey-container .footer{padding:10px;color:#ffcccb;border-top:2px solid #000}.replay-item[data-v-1dbc6ed9]{position:relative;box-shadow:2px 2px 5px 1px #000;border:1px solid #000;border-radius:4px;overflow:hidden}.replay-header[data-v-1dbc6ed9]{display:flex;position:absolute;top:0;font-size:14px;background:rgba(0,0,0,.85);border-bottom:1px solid #000;width:100%;padding:3px;box-sizing:border-box}.replay-name[data-v-1dbc6ed9]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.replay-thumbnail[data-v-1dbc6ed9]{display:block;width:100%;box-sizing:border-box;cursor:pointer}.replay-button[data-v-1dbc6ed9]{cursor:pointer}.replay-button[data-v-1dbc6ed9]:not(:last-child){margin-right:5px}.replay-button[data-v-1dbc6ed9]:hover{color:#999}.float[data-v-1dbc6ed9]{float:right}.container[data-v-4a996e52]{display:flex;flex-direction:column;height:100%}.replay-button-row[data-v-4a996e52]{padding:10px;border-bottom:2px solid #000;box-shadow:0 0 10px 1px #000;background:#222}.notification[data-v-4a996e52]{grid-column:1/3}.replays-container[data-v-4a996e52]{overflow:auto;padding:15px}.replays[data-v-4a996e52]{display:grid;grid-gap:15px;grid-template-columns:1fr 1fr 1fr 1fr}.player-row[data-v-7cb607ba]{display:flex}.player-nr[data-v-7cb607ba]{flex:1}.player-name[data-v-7cb607ba]{flex:4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.own-row[data-v-7cb607ba]{border-bottom:1px solid #fff}.row[data-v-1bcde71e]{display:flex}#nickname[data-v-1bcde71e]{margin-right:10px}#player-container[data-v-1bcde71e],.relative[data-v-1bcde71e]{position:relative}#player-container #skin[data-v-1bcde71e]{display:block;width:240px;height:240px;margin:16px auto auto;margin-bottom:22px!important;border-radius:50%;box-shadow:0 0 13px 3px #000}#player-container #player-data[data-v-1bcde71e]{position:relative;width:100%;height:100%;box-sizing:border-box;padding:0 15px 15px}#player-container #player-data>[data-v-1bcde71e]{margin-bottom:10px}#player-container #game-buttons[data-v-1bcde71e]{display:flex}#player-container #game-buttons #play-button[data-v-1bcde71e]{background:#5f85db;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;flex:9;margin-right:7px}#player-container #game-buttons #play-button[data-v-1bcde71e]:hover{background:#6f85db;transition:all .15s ease}#player-container #game-buttons #play-button[data-v-1bcde71e]:active{transition:none;background:#4f85db}#player-container #game-buttons #play-button[data-v-1bcde71e]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#2f85db}#player-container #game-buttons #spec-button[data-v-1bcde71e]{background:#5f85db;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;flex:1}#player-container #game-buttons #spec-button[data-v-1bcde71e]:hover{background:#6f85db;transition:all .15s ease}#player-container #game-buttons #spec-button[data-v-1bcde71e]:active{transition:none;background:#4f85db}#player-container #game-buttons #spec-button[data-v-1bcde71e]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#2f85db}.tabs[data-v-1bcde71e]{display:flex;font-size:20px;border-bottom:2px solid #000}.tab[data-v-1bcde71e]{flex:1;cursor:pointer;text-align:center;width:55px;padding:9px}.tab[data-v-1bcde71e]:hover{background:rgba(0,0,0,.15)}.tab[data-v-1bcde71e]:not(:last-child){border-right:2px solid #000}.tab.active[data-v-1bcde71e]{background:rgba(0,0,0,.5);color:#5f85db}.tab-content[data-v-1bcde71e]{flex:1;overflow:auto}.progress[data-v-4e838c74]{padding:5px;background:rgba(0,0,0,.5);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,.25),0 1px hsla(0,0%,100%,.08)}.progress-bar[data-v-4e838c74]{height:20px;background-color:#ee303c;border-radius:4px}.progress-striped .progress-bar[data-v-4e838c74]{background:repeating-linear-gradient(-45deg,#5f85db,#5f85db 40px,#90b8f8 0,#90b8f8 80px)}#account-name[data-v-661435cd]{font-size:16px;font-weight:700;width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xp-data[data-v-661435cd]{position:absolute;display:flex;width:100%;top:4px;color:#fff;text-shadow:0 0 5px #000}.discord-coming[data-v-661435cd]{text-align:center;display:inline-block}.avatar[data-v-661435cd]{width:80px;margin-right:7px;box-shadow:0 0 3px 1px #000;border-radius:4px}.player-info[data-v-661435cd]{display:inline-block;vertical-align:top;font-size:14px}.account[data-v-661435cd]{position:relative}.discord[data-v-661435cd]{cursor:pointer;display:block;color:#e1e1e1;padding:10px;background:#121212;border:1px solid #000;border-radius:4px}.logout[data-v-661435cd]{cursor:pointer;display:inline-block;position:absolute;top:0;right:0}.account-icon[data-v-661435cd]{font-size:120px;margin:20px;color:#121212;border-radius:500px;padding-left:2px;padding-right:2px;background:#dadada}.xp-progress[data-v-661435cd]{margin-left:-2px;margin-right:-2px}#skinurl[data-v-1c614894]{margin-bottom:15px}#skins[data-v-1c614894]{display:grid;grid-template-columns:auto auto auto;grid-gap:15px}.skin[data-v-1c614894]{cursor:pointer;width:80px;height:80px;border-radius:50%;box-shadow:0 0 6px 2px #000;box-sizing:border-box;border:1px solid transparent}.selected[data-v-1c614894]{box-shadow:0 0 3px 1px #5f85db}.bar[data-v-ebed1606]{margin:auto;text-align:center;grid-column:1/4}.two[data-v-ebed1606]{grid-row:2/4}.block[data-v-ebed1606]{text-align:center}#replays[data-v-ebed1606]{grid-column:2/4}#main-container[data-v-ebed1606]{position:absolute;margin-left:-481px;margin-top:-240px;left:50%;top:38%;display:grid;grid-template-columns:300px 330px 300px;grid-template-rows:110px 146px 300px;grid-gap:16px}.menu-enter-active[data-v-ebed1606],.menu-leave-active[data-v-ebed1606]{transition:all .25s}.menu-enter[data-v-ebed1606],.menu-leave-to[data-v-ebed1606]{transform:scale(.98);opacity:0}.social-container[data-v-4d0670e9]{display:flex;position:absolute;bottom:20px;left:50%;transform:translateX(-50%);width:400px}.social-container>[data-v-4d0670e9]{flex:1;padding-left:7px!important}.discord-link[data-v-4d0670e9]{background:#4a67cf;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-right:7px}.discord-link[data-v-4d0670e9]:hover{background:#3556ca;transition:all .15s ease}.discord-link[data-v-4d0670e9]:active{transition:none;background:#304eb6}.discord-link[data-v-4d0670e9]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#2b45a2}.youtube-link[data-v-4d0670e9]{background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-right:7px}.youtube-link[data-v-4d0670e9]:hover{background:#b30000;transition:all .15s ease}.youtube-link[data-v-4d0670e9]:active{transition:none;background:#900}.youtube-link[data-v-4d0670e9]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:maroon}#skins-link[data-v-4d0670e9]{background:#a800b1;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-right:7px}#skins-link[data-v-4d0670e9]:hover{background:#900098;transition:all .15s ease}#skins-link[data-v-4d0670e9]:active{transition:none;background:#77007e}#skins-link[data-v-4d0670e9]:disabled{cursor:auto;transition:none;color:#b3b3b3;background:#5f0065}.container[data-v-6843da33]{display:flex;position:absolute;top:10px;left:50%;transform:translateX(-50%);font-size:14px}.line[data-v-6843da33]{margin-left:10px;margin-right:10px}.context-menu[data-v-4dbee04d]{position:absolute;border:2px solid #000;border-radius:4px}.context-menu>[data-v-4dbee04d]{padding:5px}.player-name[data-v-4dbee04d]{background:rgba(0,0,0,.45)}.stats[data-v-0875ad82]{padding:10px;color:#fff}#chatbox[data-v-4900a413]{box-shadow:0 0 4px 2px #000!important;position:fixed;display:flex;flex-direction:column;left:0;bottom:0;width:440px;height:200px;padding:10px;background:rgba(0,0,0,.45);border-radius:4px;font-size:14px}#chatbox input[data-v-4900a413]{font-size:14px;border:0;outline:0;background:transparent;width:100%}#message-list[data-v-4900a413]{flex:1;overflow:auto;margin-bottom:5px}.message-row[data-v-4900a413]{overflow:hidden}.message-from[data-v-4900a413]{white-space:nowrap;margin-right:1px}.message-text[data-v-4900a413]{word-break:break-word;user-select:text}#leaderboard[data-v-8a0c31c6]{box-shadow:0 0 4px 2px #000!important;position:fixed;right:0;top:0;width:220px;height:272px;padding:13px;background:rgba(0,0,0,.45);border-radius:4px;pointer-events:none}.leaderboard-title[data-v-8a0c31c6]{font-family:Verdana,Geneva,sans-serif;font-size:24px;margin-bottom:6px;color:#fff}.leaderboard-label[data-v-8a0c31c6]{font-family:Verdana,Geneva,sans-serif;font-size:18px;line-height:24px;white-space:nowrap;overflow:hidden}.container[data-v-4c95bd45]{box-shadow:0 0 4px 2px #000!important;position:fixed;right:0;bottom:0;background:rgba(0,0,0,.45);border-radius:4px;pointer-events:none}canvas[data-v-4c95bd45]{display:block}#locations[data-v-4c95bd45]{position:absolute}#minimap[data-v-4c95bd45]{position:relative}#hud[data-v-339660d2]{position:fixed}.continue[data-v-3249d726]{margin-top:5px}.container[data-v-3249d726]{position:absolute;top:50%;left:50%;margin-left:-165px;margin-top:-200px;width:320px;display:inline-block}.box-1[data-v-3249d726]{height:291px;margin-bottom:10px;text-align:center}.scroll[data-v-3249d726]{animation-name:scroll-data-v-3249d726;animation-duration:2.5s;animation-timing-function:ease;overflow:hidden}@keyframes scroll-data-v-3249d726{0%{height:0;opacity:0}50%{height:0;opacity:0}to{height:133px;opacity:1}}.menu-enter-active[data-v-3249d726]{transition:all .8s ease}.menu-enter[data-v-3249d726]{transform:scale(.95);opacity:0}.btn[data-v-b0b10308]{width:100%;background:#5f85db;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000}.btn[data-v-b0b10308]:hover{background:#6f85db}.btn[data-v-b0b10308]:active{background:#4f85db}.btn[data-v-b0b10308]:disabled{cursor:auto;color:#b3b3b3;background:#2f85db}#replay-controls[data-v-c2c2ac08]{position:fixed;bottom:0;left:0;right:0;padding:18px;text-shadow:2px 2px 1px #000;transition:opacity .5s ease-in-out}.auto-hide[data-v-c2c2ac08]{opacity:0}.auto-hide[data-v-c2c2ac08]:hover{opacity:1}.replay-slider[data-v-c2c2ac08]{-webkit-appearance:none;display:block;width:100%;margin:0;border-radius:5px;height:8px;outline:none;background:#7b7b7b}.replay-slider[data-v-c2c2ac08]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#d3d3d3;border-radius:50%;cursor:pointer}#ab-overlay[data-v-1611deb4]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10;text-shadow:0 0 10px #000;background:rgba(0,0,0,.5);text-align:center}.content[data-v-1611deb4]{position:relative;top:50%;transform:translateY(-50%)}.image-captcha-overlay[data-v-76d60428]{position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.5);z-index:100}.center-screen[data-v-76d60428]{display:inline-block;left:50%;top:50%;position:absolute;transform:translate(-50%,-50%)}',document.head.appendChild(t)}();

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
		this.name = settings.minionNickname;
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

		this.pingInterval = setInterval(this.ping.bind(this), 1500); // +500ms
	}

	ping() {
		const packet = new Message;
		packet.writeUint8(3);

		this.send(packet.finalize());
	}
	
	doAction(what, arg) {
		switch (what) {
			case 'feed': this.feed(arg); break;
			case 'split': this.split(arg); break; // 'arg' is 'count'
			case 'stopMovement': this.stopMovement = !this.stopMovement; break;
			case 'respawn': this.spawn(); break;
			case 'move': this.move(); break;
			default:
				break;
		}
	}

	disconnect() {
		clearInterval(this.pingInterval);

		this.authenticated = null;

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
			this.authenticated = true;

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
		var i = this.game,
			a = i.rawMouse.x,
			e = i.rawMouse.y,
			n = 1 / i.camera.scale.x,
			t = 1 / i.camera.scale.y,
			o = i.container;
		this.x = o.pivot.x + (a - window.innerWidth / 2) * n, this.y = o.pivot.y + (e - window.innerHeight / 2) * t
	}
	
	move() {
		if (this.stopMovement) {
			const e = new Message;
			e.writeUint8(9), this.send(e.finalize())
		} else {
			const e = this.game.mouse,
				t = new DataView(new ArrayBuffer(9));
			t.setUint8(0, 16), t.setInt32(1, e.x, true), t.setInt32(5, e.y, true), this.send(t)
		}
	}

	initialPacket(packet) {
		var offset = 1;

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

	parseMessage(message) {
		const packet = new DataView(message.data);
		var offset = 0;

		switch (packet.getUint8(offset++, true)) {
			case 1:
				this.initialPacket(packet);
				break;

			case 2:
				console.assert(this.uuid, 'dependency not set');

				var dec = new Uint8Array(packet.buffer, 1);
				this.sendJoinData(this.uuid(dec));

				break;		

			default: 
				break;			
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
			timer: 3e3,

			// Aero:
			background: "#121212"
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
			if (c.push(e), c.length > 200) {
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
						timer: 1500,

						// Aero:
						background: "#121212"
					})
				}).catch(e => {
					console.error("replay.save", e);
					var t = "Error saving replay";
					"string" == typeof e ? t += ": " + e : e && e.message && (t += ": " + e.message), r.toast.fire({
						type: "error",
						title: t,

						// Aero:
						background: "#121212"
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
			timer: 5e3,

			// Aero:
			background: "#121212"
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
				timer: 5000,
				background: "#121212"
			})
		} else {
			if (a.currentWsId = null, a.running && a.stop(), 1003 === e.code) {
				setTimeout(u, 1500), s.toast.fire({
					type: "info",
					title: "Server restarting ...",
					timer: 5000,
					background: "#121212"
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
				if (!(O = a.playerManager.getPlayer(I))) return void console.warn("Received message from non-exiting player", I);
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
	Ue(), s.__ = n(1), s.__current = document.getElementById('mainScript'), s.__heap_max_bytes_s = function (mem) {return mem&128;}, e.exports = s
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
		s.enableMinion && a.minion && o.invokeMinion('move', e);
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
	}, o.invokeMinion = function(what, arg) {
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
						timer: 5e3,

						// Aero:
						background: "#121212"
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
					console.log(e)
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
			}, [this._v(" ")]), this._v(" "), this._v("Official SS Extension"), t("img", {
				staticStyle: {
					'padding-bottom': '10px'
				},
				attrs: {
					src: 'https://i.imgur.com/mpsZMa5.png',
					width: '300',
					height: '250',
					alt: 'Unfortunately, there\'s no ads. Here\'s a pepe to share the pain :('
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
						e.fromColor = e.fromColor || "#ffffff", e.textColor = e.textColor || "#ffffff", this.messages.push(e), this.messages.length > 30 && this.messages.shift(), this.$nextTick(this.scrollBottom)
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
			}, [n("div", {
				staticClass: "fade-box box-1"
			}, [n("div", {
				staticStyle: {
					padding: "4px"
				}
			}, [e._v(" ")]), e._v(" "), n("div", {
				staticStyle: {
					padding: "10px",
					"padding-top": "0px"
				}
			}, [n("img", {
				attrs: {
					src: 'https://i.imgur.com/mpsZMa5.png',
					width: '300',
					height: '250',
					alt: 'Unfortunately, there\'s no ads. Here\'s a pepe to share the pain :('
				}
			})])]), e._v(" "), e.stats ? n("div", {
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
				Lt.events.$on("show-image-captcha", async() => {
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
					var t = Lt.currentWsId;
					if (t && t === this.wsId)
						if (e) {
							var n = new Ut;
							n.uint8(11), n.utf8(e), Lt.send(n.write()), this.show = false
						} else this.renderCaptcha();
					else this.show = false
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
					color: "orange",
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
