(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(7),o=a.n(n),s=a(1),i=a(2),l=a(4),p=a(3),m=a(5),u=a(8),d=a.n(u),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"card-body text-center"},c.a.createElement("span",{role:"img","aria-label":"emoji",style:{fontSize:"64px"}},this.props.emoji))}}]),t}(c.a.Component),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).emojiList=["\ud83d\ude00","\ud83d\ude01","\ud83d\ude02","\ud83d\ude18","\ud83d\ude44","\ud83d\ude0b","\ud83d\ude10","\ud83d\ude11","\ud83d\ude36","\ud83d\ude15","\ud83d\ude43","\ud83d\ude2d","\ud83d\ude20","\ud83e\udd22","\ud83d\ude2c","\ud83e\udd21","\ud83e\udd74","\ud83d\ude0c"],a.state={CurrentDisplay:[],clickedList:[],currentScore:0,bestScore:0,lastGuess:"Click an Emoji to start!"},a.randomEmoji=function(){for(var e=[],t=0;t<12;t++)e[t]=a.emojiList[Math.floor(Math.random()*a.emojiList.length)];a.setState({CurrentDisplay:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.randomEmoji()}},{key:"compareClicked",value:function(e){console.log(this.state.CurrentDisplay[e]);for(var t=!0,a=0;a<this.state.clickedList.length;a++){this.state.clickedList[a]===this.state.CurrentDisplay[e]&&(t=!1)}if(t){var r=this.state.clickedList,c=this.state.currentScore+1;r.push(this.state.CurrentDisplay[e]),this.state.bestScore<c?this.setState({currentScore:c,clickedList:r,bestScore:c,lastGuess:"Correct!"}):this.setState({currentScore:c,clickedList:r,lastGuess:"Correct!"})}else this.setState({currentScore:0,clickedList:[],lastGuess:"Incorrect!"});this.randomEmoji()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{style:{backgroundImage:"url(".concat(d.a,")"),height:"418px",boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)"}},c.a.createElement("nav",{className:"navbar row sticky-top",style:{backgroundColor:"rgba(81, 51, 164, 1)",color:"white"}},c.a.createElement("span",{className:"navbar-brand mb-0 h1 col-sm"},c.a.createElement("h3",null,"Clicky Game!")),c.a.createElement("span",{className:"col-sm d-flex justify-content-center"},c.a.createElement("h1",null,this.state.lastGuess)),c.a.createElement("span",{className:"col-sm d-flex justify-content-end"},c.a.createElement("h3",null,"Score: ",this.state.currentScore," | Top Score: ",this.state.bestScore))),c.a.createElement("div",{className:"header",style:{margin:"100px",color:"white"}},c.a.createElement("h1",{className:"mt-6 d-flex justify-content-center"},"Clicky Game!"),c.a.createElement("h5",{className:"mt-4 d-flex justify-content-center",style:{paddingBottom:"150px"}},"Click on an image to earn points, but don't click on any more than once!"))),c.a.createElement("div",{className:"container",style:{width:"50%"}},c.a.createElement("div",{class:"card-deck",style:{marginTop:"30px"}},c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(0)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[0]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(1)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[1]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(2)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[2]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(3)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[3]}))),c.a.createElement("div",{class:"card-deck",style:{marginTop:"30px"}},c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(4)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[4]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(5)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[5]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(6)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[6]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(7)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[7]}))),c.a.createElement("div",{class:"card-deck",style:{marginTop:"30px"}},c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(8)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[8]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(9)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[9]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(10)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[10]})),c.a.createElement("div",{className:"card",style:{boxShadow:"0 6px 12px rgba(0,0,0,.24), 0 6px 12px rgba(0,0,0,.4)",cursor:"pointer"},onClick:function(){return e.compareClicked(11)}},c.a.createElement(x,{emoji:this.state.CurrentDisplay[11]})))),c.a.createElement("footer",{className:"footer",style:{marginTop:"30px",backgroundColor:"rgba(81, 51, 164, 0.95)",color:"white",height:"40px"}}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/bg.726c02ab.png"},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9c5ab1d4.chunk.js.map