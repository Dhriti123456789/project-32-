class block{
    constructor(x,y){
        var options =  {
            isStatic : false,
            'restitution' : 0.8,
            'density': 0.7,
            'friction':0.8

        } 
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,30,40,options);
        this.width = 30;
        this.height = 40;
        World.add(world,this.body);
    }
   
    display(){
        if(this.body.speed < 3){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5 ;
            tint(255,this.Visiblity);
           //fill("blue");
            pop();
        }
    }
    score(){
        if (this.Visiblity<0 && this.Visiblity>-105){
            Score++;
        } 
   }
    
}