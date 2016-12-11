
var iNow = 0;
var num=0;
var index = 0;
function show()
{
    var w = document.body.clientWidth;
  if (w < 980){
    document.getElementById('left').style.display = 'none';
    }
    else{
        document.getElementById('left').style.display = 'block';
    }
}
window.onload  = show;
window.onresize = show;



function add(){
var ch=document.getElementsByName("choose");
var input=document.getElementById('allChecked');
  var oInput=document.getElementById('input1');
  var oTe = oInput.value;
  function JTrim(oTe)
  {
      return oTe.replace(/(^\s*)|(\s*$)/g, "");
  }

  if (JTrim(oTe) != "" ) {
    tianjia(iNow);
    iNow += 1;
  }
  shuzi();
  var input=document.getElementById('allChecked');
  input.style.display="block";
for(var i=0;i<ch.length;i++){
  // alert("1");
  if(!ch[i].checked){
    // alert($(".allChecked").attr('checked'));
    input.checked=false;
    return;
  }
}
}
function delete1(checkbox){

for(var j=checkbox.length-1;j>=0;j--){

                 if (checkbox[j].checked) {
                  //  alert(checkbox[j] + j);
                  var fu=checkbox[j].parentNode;
                  fu.remove();
                 }

}
//alert(checkbox.length);
if(checkbox.length==0){
var input=document.getElementById('allChecked');
  var tr1=document.getElementById('tr1');
  // tr1.style.display="none";
  tr1.remove();
  input.style.display="none";
  // input.remove();
  iNow = 0;
}

// shuzi();
}

function DoCheck(){
var p1=document.getElementsByName("p1s");
var button4 = document.getElementById("button4");
if (index%2 == 0) {
  button4.style.display="block";

}else {
  button4.style.display="none";
}
index += 1;
var ch=document.getElementsByName("choose");
if(document.getElementsByName("allChecked")[0].checked)
{
   button4.style.display="block";
button4.onclick=function(){
  var checkbox=document.getElementsByName('choose');

  delete1(checkbox);
   button4.style.display="none";


}
   for(var i=0;i<p1.length;i++)
   {
		//alert(p1[0].style);
		//p1[i].style.cssText="padding-left:50px;padding-top:16px;cursor:default;color:#dbd9d9;textDecoration:line-through;";
		p1[i].style.color="#dbd9d9";
		p1[i].style.textDecoration="line-through";
   }

	for(var i=0;i<ch.length;i++)
	{
		ch[i].checked=true;
	}
}else
{
  for(var i=0;i<ch.length;i++)
  {
	ch[i].checked=false;
  // button4.style.display="none";
  // button4.remove();
  }
  for(var i=0;i<p1.length;i++)
   {
		p1[i].style.color="black";
		p1[i].style.textDecoration="";
   }

}



shuzi();
}







function tianjia(iNow){
  var oSe=document.getElementById('search1');
  var odivs=document.getElementById('divs');
  var oInput=document.getElementById('input1');
  var oTe=oInput.value;
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var p = document.createElement('p');
  var input=document.createElement('input');
  var img=document.createElement('img');
  var div=document.createElement('div');
  table.setAttribute("id","table1");
input.setAttribute("name","choose");
tr.setAttribute("name","tr");
p.setAttribute("name","p1s");
p.setAttribute("id","p1");
p.style.cssText="padding-left:50px;padding-top:16px;cursor:default";
  input.setAttribute("type","checkbox");
  input.style.cssText="margin-top:-22px;margin-left:10px;width:30px;height:30px;float:left;display:inline-block;position:absolute;";
img.style.cssText="display:none;margin-right:20px;margin-top:1px;float:right;";
img.src="images/5.jpg"
div.style.cssText="clear:both;";
  p.innerHTML =oTe ;

  p.style.cssText="padding-left:50px;padding-top:16px;cursor:default";
  table.style.cssText="";
tr.setAttribute("id","mytr");
tr.style.cssText="position:relative;background:#ffffff;width:550px;height:57px;float:left;font-size:18px;border-top:1px solid #ededed;box-shadow:10px 10px 5px #eaeaea;margin-left:240px;";
// odivs.appendChild(tr);
odivs.appendChild(table);
table.appendChild(tr);
tr.appendChild(div);

tr.appendChild(img);
tr.appendChild(p);
tr.appendChild(input);


input.onclick=function(){
  if(this.checked){
	  var allChecked=document.getElementsByName("allChecked");
var ch=document.getElementsByName("choose");
var button4=document.getElementById('button4');
var p1=this.previousSibling;
    p1.style.color="#dbd9d9";
         p1.style.textDecoration="line-through";
          // var that=this;
button4.style.display="block";
button4.onclick=function(){
  var checkbox=document.getElementsByName('choose');

  delete1(checkbox);
   button4.style.display="none";


}
var count=0;
for(var i=0;i<ch.length;i++)
	{
		//alert("123");
		if(ch[i].checked){
			//alert(allChecked.checked);
			count++;
		}
	}if(count==ch.length){
	document.getElementsByName("allChecked")[0].checked=true;}
  }else{

    var p1=this.previousSibling;

		//alert(allChecked);
    p1.style.color="#4d4d4d";
        p1.style.textDecoration="";
		//alert("123");
		if(document.getElementsByName("allChecked")[0].checked){

			//alert("123");
			document.getElementsByName("allChecked")[0].checked=false;
			//alert(document.getElementsByName("allChecked")[0].checked);
		}
  }
    shuzi();
	//allclick();
}

tr.onmouseover=function(){
img.style.display="block"
img.onclick=function(){
  var tr=this.parentNode;
  tr.remove();
  // tr.style.display="none";
  shuzi();
    var ch=document.getElementsByName("choose");
    var allChecked=document.getElementById("allChecked");
if(ch.length==0){
  tr1.style.display="none";
allChecked.style.display="none";
}
}
}
tr.onmouseout=function(){
img.style.display="none"
}

oSe.style.display="block";
// DoCheck();
if(oTe!=''){
  oInput.value='';
}
if(iNow==0){
  tianjia1();
}
else{
    tr1.style.display="block";
}

p.ondblclick=function(){

var txt = document.createElement("input");
    txt.type = "text";
    var old=this.innerHTML;

this.nextSibling.style.marginTop="10px;";

txt.style.cssText="width:430px;height:30px;margin-top:-23px;margin-left:50px;display:inline-block;position:absolute;autofocus;z-index:5;";
  txt.value=old;

  this.parentNode.appendChild(txt);
txt.focus();
// alert(this.display);
  txt.onblur=function(){

  var newinnerHTML=txt.value;
  p.innerHTML=newinnerHTML;
  txt.remove();

  }

}

}

function tianjia1(){
  var tr1=document.createElement('tr1');
  // var tr2=document.createElement('tr2');
    var oCon=document.getElementById('content1');
    var p1 = document.createElement('p');
    var button1=document.createElement('button');
     var button2=document.createElement('button');
      var button3=document.createElement('button');
      var button4=document.createElement('button');
// var p2 = document.createElement('p');
// p.innerHTML="Double-click to edit a todo Written byAddy Osmani Part of TodoMVC";
      button4.setAttribute("id","button4");
       button3.style.cssText="margin-left:15px;margin-top:15px;width:80px;height:23px;border:none;background-color:#ffffff;cursor:pointer;";
       button2.style.cssText="margin-left:15px;margin-top:15px;width:52px;height:23px;border:none;background-color:#ffffff;cursor:pointer;";
        button1.style.cssText="margin-left:95px;margin-top:15px;float:left;width:32px;height:23px;cursor:pointer;";
            button4.style.cssText="display:none;margin-top:15px;float:left;width:145px;height:23px;cursor:pointer;border:none;background-color:#ffffff;float:right;";
      button1.innerHTML="All";
      button2.innerHTML="Active";
      button3.innerHTML="Completed";
      button4.innerHTML="Clear Completed";
                button2.onmouseover = function()
                  {
                         button2.style.border="1px solid #eed4d4";
                   }
                button2.onmouseout=function(){
                                 button2.style.border="none"; }
                button3.onmouseover = function(){
                               button3.style.border="1px solid #eed4d4";}
                button3.onmouseout=function(){
                                          button3.style.border="none";}
              // var checkbox=document.getElementsByName('choose');
                button3.onclick=function (){
                  //   var checkbox=document.getElementsByName('choose');
                  // for(var j=checkbox.length-1;j>=0;j--){
                  //                  if (!checkbox[j].checked) {
                  //                   var fu=checkbox[j].parentNode;
                  //                    fu.style.display="none";
                  //                  }
                  var ch=document.getElementsByName("choose");
                  for(var i=0;i<ch.length;i++)
                  {
                    var fu=ch[i].parentNode;
                fu.style.display="block";
                     if (!ch[i].checked) {
                      var fu=ch[i].parentNode;
                  fu.style.display="none";
                  }

                  }

                                          }
                button1.onclick=function (){
var ch=document.getElementsByName("choose");
for(var i=0;i<ch.length;i++)
{
    var fu=ch[i].parentNode;
fu.style.display="block";
}
                }
                button2.onclick=function(){
                var ch=document.getElementsByName("choose");
                for(var i=0;i<ch.length;i++)
                {
                  var fu=ch[i].parentNode;
              fu.style.display="block";
                   if (ch[i].checked) {
                    var fu=ch[i].parentNode;
                fu.style.display="none";
                }
                }
                }
     p1.setAttribute("id","myp1");
    p1.style.cssText="padding-left:16px;padding-top:16px;float:left;cursor:default";
    tr1.style.cssText="background:#ffffff;width:550px;height:57px;float:left;margin-left:240px;font-size:18px;border-top:1px solid #ededed;box-shadow:10px 10px 5px #eaeaea;";
    oCon.appendChild(tr1);
      // oCon.appendChild(tr2);
    tr1.appendChild(p1);
      // tr2.appendChild(p2);
    tr1.appendChild(button1);
    tr1.appendChild(button2);
    tr1.appendChild(button3);
    tr1.appendChild(button4);
  tr1.setAttribute("id","tr1");
  // shuzi();
//
}
function shuzi(){

var rowsize = document.getElementsByName('choose');
  var p1=document.getElementById('myp1');
  num=0;
// alert(rowsize.);
// alert("123");
for(var i=0;i<rowsize.length;i++){
  // alert("123");
  if(!rowsize[i].checked){
    num+=1;
  }

}
// alert(document.getElementById('myp1').innerHTML);
  p1.innerHTML=num+" items left";

}
