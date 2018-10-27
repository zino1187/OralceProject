/*
재사용가능성이 높은 코드는 클래스로 정의한다
*/
class Arrow{
    constructor(y){
        this.span;
        this.x=0;
        this.y=y;
        this.span=document.createElement("span");
        this.span.innerText="→";            
        //css 적용 
        this.span.style.position="absolute";
        this.span.style.left=0+"px";
        this.span.style.top=this.y+"px";
        this.span.style.fontSize=30+"px";
        document.body.appendChild(this.span);
    }  

    move(){
        this.x+=10;
        this.span.style.left=this.x+"px";
    }       

}