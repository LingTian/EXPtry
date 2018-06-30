/*
*js version info
 *for game - name-fighting
*by ajccom
 ---------------------------
compile with NAS
little experiment to apply random seed to ensure fair battle
 */

var NebPay = require("nebpay");
var nebPay = new NebPay();

var nebulas = require("nebulas"),
Account = nebulas.Account,
neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));
var dappAddress = "n1x6btgnsv9qzg7uDEGJBvDfodb5mrW19xi";

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if (typeof(webExtensionWallet) != "undefined") {
    
} else {
    
    layer.msg('请安装最新的星云钱包后刷新~ 点击下方钱包下载也可以直接下载～!');
    
}


var debug = debug || {};
debug = {
    log : function (t) {
        if(window.console){
            console.log(t);
        }
    }
};

var NF = NF || {};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('e={Q:{z:{\'0\':{d:{p:\'\',16:0,v:0,11:0,k:0,B:\'\',u:\'v.1t\'},1r:\'n\',1S:0},\'1\':{d:{p:\'\',16:0,v:0,11:0,k:0,B:\'\',u:\'v.1t\'},1r:\'n\',1S:0}},1o:{B:{G:10,\'0\':\'名字中仿佛透露着杀气\',\'1\':\'一个隐匿着气息的名字\',\'2\':\'仿佛看上去很弱的名字\',\'3\':\'一脸纠结的名字\',\'4\':\'这个名字似乎很皮\',\'5\':\'这个名字真的没问题吗\',\'6\':\'看上去很像主角\',\'7\':\'看上去很像配角\',\'8\':\'不俗的眼神\',\'9\':\'坚持到底吧少年\'},u:{28:\'2g/u/\'},23:{G:10,\'0\':\'一顿拳打脚踢, 共造成\',\'1\':\'狠狠蹂躏了顿, 共造成\',\'2\':\'扔了一袋三鹿奶粉,他乐呵呵的吃了起来, 造成\',\'3\':\'施放了炎龙斩, 共造成\',\'4\':\'放了个屁，共造成\',\'5\':\'施放了奥义-连牙断空, 共造成\',\'6\':\'送了一张动车票, 共造成\',\'7\':\'送了个飞吻, 共造成\',\'8\':\'邮寄了一个炸弹, 共造成\',\'9\':\'使用了爆菊战法, 共造成\'}}},D:{1Z:2f.2e,2d:c(){E f.1Z.2h(\'2c\')>(-1)?Y:W},S:c(o){E e.Q.z[o].d},2i:c(o){E e.Q.z[o].d.p},1X:c(){E e.Q.1o.23},2m:c(o,12){e.Q.z[o].d.p=12},27:c(){E e.Q.1o.B},24:c(){E e.Q.1o.u},2l:c(o){E e.Q.z[o].d.k},13:c(o,12,18){j s=12||\'a\',d=f.S(o),B=f.27(),u=f.24(),C=[\'16\',\'v\',\'11\',\'k\',\'B\',\'u\'],h;29(j i=C.1C;i--;){d[C[i]]=(12.2k(i%12.1C)+i*5+2+18)%1E;h=d[C[i]];m(h<=10){d[C[i]]=h+15}}m(d.k<=20){d.k=d.k*2}d.p=12;d.B=B[d.B%B.G];d.u=u.28+d.u%10+\'/u.1t\';e.x.1B=Y},1P:c(18){j 1O=$(\'#1k-p\').H(),1N=$(\'#1l-p\').H();m(e.x.1K!==Y){E}e.1p.1w.1n(\'\');f.13(0,1O,18);f.13(1,1N,18);e.x.Z(0,\'n\');e.x.Z(1,\'n\');e.x.13(0);e.x.13(1);e.1p.1f()},2j:c(b){j q=f;b=1G b===\'25\'?$(b):b;b.2n(\'2b\',c(){q.1P()})},V:c(){}},1p:{1F:0,1H:0,L:0,1w:1Q,2w:1Q,1f:c(){j q=f;j 1k=e.D.S(0),1l=e.D.S(1),h=(1k.11>=1l.11?0:1),y=(h===0?1:0);q.L=0;q.1F=h;q.1H=h;q.1v(h,y)},26:c(h,y){f.1d(\'\',\'\',\'\',\'<U>战斗结束</U>\');e.x.Z(h,\'w\');e.x.Z(y,\'l\');f.1F=0;f.1H=0;f.L=0},1d:c(1g,1q,1j,T){j 14=$(\'#19-1c .1c\'),22=1e(F.P()*2,10)===1?Y:W,r=$(\'#19-1c\');T=T||\'\';f.L++;m(1g===\'\'&&1q===\'\'&&1j===\'\'){14.1u(T)}R{m(22){j 1J=e.D.1X();1R=1J[1e(F.P()*10,10)%1J.G];14.1u(\'<U>第\'+f.L+\'回合,<g J="X">\'+1g+\'</g>对<g J="N">\'+1q+\'</g>\'+1R+\'<g J="N">\'+1j+\'</g>伤害\'+(T===\'\'?\'\':\',\'+T)+\'</U>\')}R{14.1u(\'<U>第\'+f.L+\'回合,哇塞<g J="X">\'+1g+\'</g>对<g J="N">\'+1q+\'</g>造成了<g J="N">\'+1j+\'</g>伤害\'+(T===\'\'?\'\':\',\'+T)+\'</U>\')}}2C.2z(\'14.1h()\'+14.1h()+\'//r.1h():\'+r.1h())},1v:c(h,y){j q=f;j 19=2y(c(){e.x.Z(h,\'n\');e.x.Z(y,\'i\');j 17=e.D.S(h),O=e.D.S(y),1m=W,1s=W;j I=1e((17.16/O.v)*10,10)+F.L(F.2B(-1,1e(F.P()))*F.P()*5);m(F.L(F.P()*10)<=2){j P=F.L(F.P()*10);m(P>=6){I=I*2;1m=2}R{I=I*3;1s=3}}m(I<=0){I=0;q.1d(\'\',\'\',\'\',\'<U><g J="X">\'+17.p+\'</g><g J="N">攻击失误！！！</g></U>\')}O.k=O.k-I;m(O.k<=0){e.x.1y(y,0);q.1d(17.p,O.p,I,(1m?\'2倍伤害！！！\':(1s?\'3倍伤害！！！\':\'\'))+\'<g J="X">胜利的是\'+17.p+\'</g>\');2A(19);q.26(h,y);E W}R{e.x.1y(y,O.k);q.1d(17.p,O.p,I,(1m?\'2倍伤害！！！\':(1s?\'3倍伤害！！！\':\'\')))}h=y===0?0:1;y=h===0?1:0;q.1v(h,y)},2x)},V:c(){f.1w=$(\'#19-1c .1c\')}},x:{1B:W,1U:c(){$(\'1Y\').M(\'1f\');E Y},1K:W,2o:c(){$(\'1Y\').A(\'1f\')},Z:c(h,1r){j D=e.D;21=D.S(h),u=21.u,b=$(\'#z\'+h+\'-d\'),1L=b.1b(\'.u\');1L.A(\'n i l w\');1L.M(1r)},1T:c(b,t){j q=f;b=1G b===\'25\'?$(b):b;b.H(t);b.M(\'v\');b.1I(c(){j b=$(f);b.M(\'1I\');m(b.H()!==t){b.A(\'v\')}R{m(b.1a(\'v\')){b.H(\'\');b.A(\'v\')}}});b.2r(c(){j b=$(f),H=b.H();m(H!==t&&H!==\'\'){b.A(\'v\');q.1K=Y}R{b.H(t);b.M(\'v\')}b.A(\'1I\')})},1D:c(K,G,1A,1x){j r=K.r();m(1G G!==\'2q\'){E}m(r.1a(\'k\')||r.1a(\'16\')||r.1a(\'v\')||r.1a(\'11\')){m(G>=1A){K.A(\'1z\').A(\'N\').M(\'X\')}R{m(G<1A&&G>=1x){K.A(\'X\').A(\'N\').M(\'1z\')}R{m(G<1x){K.A(\'1z\').A(\'X\').M(\'N\')}}}}},1y:c(o,k){j 2p,b=$(\'#z\'+o+\'-d .k g\'),K=$(\'#z\'+o+\'-d .k 2a, #z\'+o+\'-d .k g\');K.1n(k);f.1D(K,k,1W,1V);b.2s({\'1i\':(k/1E)*b.r().1i()+\'1M\'},2t)},13:c(o){m(f.1B===Y){j d=e.D.S(o),b=$(\'#z\'+o+\'-d\'),K=$(\'#z\'+o+\'-d g, #z\'+o+\'-d 2a\'),C=[\'16\',\'v\',\'11\',\'k\',\'B\',\'u\'];b.1b(\'.p\').1n(d.p);29(j i=C.1C;i--;){j r=b.1b(\'.\'+C[i]);j h=r.2v();h.1n(d[C[i]]);m(r.1b(\'g\')[0]){j g=r.1b(\'g\');g.2u(\'1i\',(d[C[i]]/1E)*r.1i()+\'1M\')}f.1D(h,d[C[i]],1W,1V)}}f.1U()},V:c(){f.1T(\'#1k-p,#1l-p\',\'请输入名字\')}},V:c(){f.D.V();f.1p.V();f.x.V()}};',62,163,'|||||||||||ele|function|able|NF|this|span|current||var|hp||if||id|name|that|parent|||face|def||ui|next|actor|removeClass|intro|ables|common|return|Math|num|val|harm|class|eles|round|addClass|red|ableN|random|data|else|getAble|txt|div|ini|false|green|true|setFace||spd|str|setAble|conBox||att|ableC|incoming|act|hasClass|find|content|showReport|parseInt|ready|actCurrentName|height|width|harmNum|actor0|actor1|bonus2|text|otherDate|state|actNextName|status|bonus3|gif|append|fight|contextBox|lv2|setHp|yellow|lv1|dataReady|length|setClass|100|firstActor|typeof|currentActor|focus|fd|nameReady|faceEle|px|name1|name0|restart|null|useFd|currentHp|placeHold|uiReady|40|70|getFightDescOption|body|ua||currentAble|otherDesc|fightingDesc|getFaceOption|string|end|getIntroOption|imgPath|for|em|click|webkit|isWebKit|userAgent|navigator|img|indexOf|getName|_bind|charCodeAt|getHp|setName|bind|reload|hpStatus|number|blur|animate|500|css|children|actBtn|2000|setTimeout|log|clearTimeout|pow|debug'.split('|'),0,{}))

$(function(){
    NF.ini();

  var pack=document.getElementById('pack');
  var start=  document.getElementById('start');
  
  start.onclick=callcontract;
  pack.onclick=packfun;
  
  function packfun(){
  layer.msg("<img src=\"img/neb.png \" height=\"60\" width=\"60\"><br>" +
            
            "网页下载地址:<br>" +
            "<a href=\"https:\/\/github.com\/ChengOrangeJu\/WebExtensionWallet\">https://github.com/ChengOrangeJu/WebExtensionWallet\</a>" +
            "<br>苹果钱包下载地址(海外):<br><a href=\"https:\/\/itunes.apple.com\/hk\/app\/nas-nano\/id1281191905\?l=zh\&ls=1\&mt=8\">https://itunes.apple.com/hk/app/nas-nano/id1281191905?l=zh&ls=1&mt=8\</a><br>安卓钱包下载地址:<br><a href=\"https:\/\/nano.nebulas.io\/index_cn.html\">https://nano.nebulas.io/index_cn.html\</a><br>", {
            time: 0 //不自动关闭
            , anim: 0, btnAlign: 'c', shade: 0.3, area: ['50%', '50%'], shadeClose:1
            
            });
  }
  function callcontract(){

  var to = dappAddress;
  var value = 0.00001;
  console.log("********* call smart contract \"sendTransaction\" *****************")
  
  var func = "newbattlelseed";
  //var args = "[\"" + nextid + "\",\"" +1+ "\"]";
  var args = "[\"" + 'random' + "\"]";
  console.log(args);
  
  
  nebPay.call(to, value, func, args, {
              qrcode: {
              showQRCode: false
              },
              goods: {
              name: "test",
              desc: "test goods"
              },
                          listener: newbattlelseedcallback
    });
//  NF.common.restart();
  
  }

});

function newbattlelseedcallback(resp) {
    console.log("callback resp: " + JSON.stringify(resp))
    if (resp != 'Error: Transaction rejected by user') {
        setTimeout(applyseeddata, 2000);
        
        layer.msg('应用链上随机种子到本场战斗..如读取不成功可能是Nas节点不稳定');
        
    } else {
        layer.msg('放弃获得链上随机种子..');
        
        
    }
    
}


function applyseeddata() {
    
    
    var func = "getseeddetail";
    
    //    var func = "getworld";
    //        var args = "[\"" + pass + "\"]";
    var from = Account.NewAccount().getAddressString();
    
    var args = 0;
    var callArgs = JSON.stringify([args]);
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var contract = {
        "function": func,
        "args": callArgs
    }
    
    neb.api.call(from,dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
                                                                                 applyintobattle(resp)
                                                                                 }).catch(function (err) {
                                                                                          
                                                                                          console.log("error:" + err.message)
                                                                                          })
    
}

function randomize(lower,upper) {
    return Math.floor((Math.random() * (upper - lower) + lower));
}

function applyintobattle(resp) {
    eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 7=m.7;5 9=o.g(7);5 8=9.d();5 4=8.c(",");f=6(4[0]);b=6(4[1]);e=6(4[2]);5 a=h(1,3);n.l("开始战斗!");k.i.j(6(4[a]));',25,25,'||||singlein|var|parseInt|result|stringinfo|resultString|q|surviveability|split|toString|division|adaption|parse|randomize|common|restart|NF|msg|resp|layer|JSON'.split('|'),0,{}))

}



