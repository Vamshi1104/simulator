	var canvas = document.querySelector('canvas');
	var c = canvas.getContext('2d');
	var selection;
	var x=900;
	var x_counter=920;
	var flag=10;
	var x_left_water=392;
	var y_left_water=291;
	var x_right_water=536;
	var x_line=599;
	var y_line=387;
	var end=0;
	var id=null;
	var line_id=null;
	canvas.width = window.innerWidth; //Setting the canvas to full width of the window
	canvas.height = window.innerHeight; //Setting the canvas to full height of the window
	
	
	//-----------Drawing outline boxes-------------------

	function draw_main()
	{
		c.beginPath();
		c.lineWidth="10";
		c.strokeStyle="#006599";
		c.rect(150,50,1000,600);
		c.closePath();
		c.stroke();
		function draw(lw,ss,x1,y1,x2,y2) //function for generalized drawing
			{
				c.beginPath();
			c.lineWidth=lw;
			c.StrokeStyle=ss;
			c.moveTo(x1,y1);
			c.lineTo(x2,y2);
			c.closePath();
			c.stroke();
			}
		draw("3","#006599",350,50,350,650);
		draw("1","#006599",200,105,305,105);
		c.font="25px Arial";
		c.fillStyle="#006599";
		c.fillText("Reynolds",200,100);
		c.stroke();
		draw("3","#767676",390,240,390,450);
		c.beginPath();
		c.lineWidth="3";
		c.strokeStyle="#767676";
		c.moveTo(390,240);
		c.lineTo(390,450);
		c.lineTo(620,450);
		c.lineTo(620,405);
		c.lineTo(985,405);
		c.lineTo(985,360);
		c.lineTo(620,360);
		c.lineTo(620,240);
		c.stroke();
		c.closePath();
		c.fillStyle="#0099FF";
		c.fillRect(391,291,228,158);
		c.fillRect(615,360,295,44);
		var k=0;
		var m=0;
		for(j=0;298+m<445;j++)
			{ 
				k=0;
				for(i=0;408+k<620;i++)
				{    
					c.beginPath();
					c.strokeStyle="white";
					c.lineWidth="2";
					c.moveTo(398+k,298+m);
					c.lineTo(408+k,298+m);
					c.stroke();
					c.closePath();
					k=k+20;
					  
				  }
				m=m+15;
			}
			m=0;
			for(j=0;373+m<403;j++)
				{ 
					k=0;
					for(i=0;408+k<926;i++)
						{    
						  c.beginPath();
						  c.strokeStyle="white";
						  c.lineWidth="2";
						  c.moveTo(398+k,373+m);
						  c.lineTo(408+k,373+m);
						  c.stroke();
						  c.closePath();
						  k=k+20;
  
						}
					m=m+15;
				}
	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(465,240);
	c.lineTo(465,324);
	c.lineTo(490,349);
	c.lineTo(490,394);
	c.lineTo(580,394);
	c.lineTo(599,387);
	c.lineTo(580,380);
	c.lineTo(510,380);
	c.lineTo(510,349);
	c.lineTo(535,324);
	c.lineTo(535,270);
	c.lineTo(465,270);
	c.fillStyle="#333333";
	c.fill();
	c.lineTo(535,270);
	c.lineTo(535,240);
	c.stroke();
	c.closePath();
	c.beginPath();
	c.moveTo(900,404);
	c.lineTo(910,381.5);
	c.lineTo(900,359);
	c.lineTo(920,359);
	c.lineTo(910,381.5);
	c.lineTo(920,404);
	c.lineTo(900,404);
	c.lineTo(900,404);
	c.fill();
	c.closePath();
	c.stroke();
	c.strokeStyle="#0099FF";
	c.fillStyle="#0099FF";
	m=0;
}
	draw_main();
	function heading(pid)  //function for replacing the heading as per user selection
			{
				var x=pid.name;
				var h=document.getElementById("heading");
				h.innerHTML=x;
				selection=x;
				cancelAnimationFrame(line_id);
				cancelAnimationFrame(id);
				x=900;
				var btn=document.getElementById("b");
				btn.disabled=false;
				c.clearRect(380,200,650,400);
				draw_main();
				x_counter=920;
				flag=10;
				x_left_water=392;
				y_left_water=291;
				x_right_water=536;
				x_line=599;
				y_line=387;
				end=0;
				id=null;
				line_id=null;
				
			}
	function main()
	{
		
		if(selection=="Transitional")
		{       x=900;
			var btn=document.getElementById("b");
			btn.disabled=true;
			Transitional_disappear();
		}	
		else if(selection=="Turbulent")
		{       x=900;
			var btn=document.getElementById("b");
			btn.disabled=true;
			Turbulent_disappear();
		}
		else
		{       x=900;
			var btn=document.getElementById("b");
			btn.disabled=true;
			Laminar_disappear();
		}
	}
	
	
	function disappear()
	{
		c.beginPath();
		c.strokeStyle="white";
		c.moveTo(900,404);
		c.lineTo(920,404);
		c.stroke();
		c.closePath();
		c.beginPath();
		c.strokeStyle="white";
		c.moveTo(900,359);
		c.lineTo(920,359);
		c.stroke();
		c.closePath();
		c.beginPath();
		c.strokeStyle="#767676";
		c.moveTo(900,404);
		c.lineTo(920,404);
		c.stroke();
		c.closePath();
		c.beginPath();
		c.strokeStyle="#767676";
		c.moveTo(900,359);
		c.lineTo(920,359);
		c.stroke();
		c.closePath();
		c.fillRect(x,360,20,44);
		x+=20;
		c.beginPath();
		c.strokeStyle="white";
		c.lineWidth="2";
		c.moveTo(898,373);
		c.lineTo(912,373);
		c.stroke();
		c.closePath();
		c.beginPath();
		c.strokeStyle="white";
		c.lineWidth="2";
		c.moveTo(898,388);
		c.lineTo(912,388);
		c.stroke();
		c.closePath();
	}
	//----Code for Laminar Animation-----
	function Laminar_disappear()
	{
        
		disappear();
		Laminar_animate();
		Laminar_line();
	}
	function Laminar_line()
	{
		line_id=requestAnimationFrame(Laminar_line);
		c.beginPath();
		c.strokeStyle="red";
		c.lineWidth="2";
		c.moveTo(x_line,y_line);
		c.lineTo(x_line+2,y_line);
		c.stroke();
		c.closePath();
		if(x_line<982)
			x_line+=2.1;
		else
		{   
            cancelAnimationFrame(line_id);
			x=900;
			var btn=document.getElementById("b");
			btn.disabled=false;
			c.clearRect(380,200,650,400);
			draw_main();
			x_counter=920;
			flag=10;
			x_left_water=392;
			y_left_water=291;
			x_right_water=536;
			x_line=599;
			y_line=387;
			end=0;
			id=null;
			line_id=null;
		}


	}
	function Laminar_animate()
	{ 	
		id=requestAnimationFrame(Laminar_animate);
		c.clearRect(x_left_water,y_left_water,72,2);
		c.clearRect(x_right_water,y_left_water,82.2,2);
		if(y_left_water<321)
			y_left_water+=0.17;
	
		c.fillRect(x,360,11,44);
		c.stroke();
		if(flag===100)
		{       
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,373);
				c.lineTo(x_counter+10,373);
				c.stroke();
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,388);
				c.lineTo(x_counter+10,388);
				c.stroke();
				c.closePath();
				c.closePath();
				x_counter+=20;
				flag=10;
		}
		    
		if(x<974)
		{
			x=x+0.3;
			flag++;
		}
		else
		{
			end=1;
		}
		
		        c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,373);
				c.lineTo(x_counter+10,373);
				c.stroke();
				c.closePath();
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,388);
				c.lineTo(x_counter+10,388);
				c.stroke();
				c.closePath();
		if(end)
		{
			cancelAnimationFrame(id);
			x=900;
		}
		
	}
	//----Code for Transitional Animation-----
	function Transitional_disappear()
	{
		
		disappear();
		Transitional_animate();
		Transitional_line();
	}
	function Transitional_animate()
	{
		
		id=requestAnimationFrame(Transitional_animate);
		c.clearRect(x_left_water,y_left_water,227,2);
		if(y_left_water<335)
			y_left_water+=0.33;
		c.beginPath();
		c.strokeStyle="black";
		c.lineWidth="1";
		c.moveTo(465,240);
		c.lineTo(465,324);
		c.lineTo(490,349);
		c.lineTo(490,394);
		c.lineTo(580,394);
		c.lineTo(599,387);
		c.lineTo(580,380);
		c.lineTo(510,380);
		c.lineTo(510,349);
		c.lineTo(535,324);
		c.lineTo(535,270);
		c.lineTo(465,270);
		c.fillStyle="#333333";
		c.fill();
		c.lineTo(535,270);
		c.lineTo(535,240);
		c.stroke();
		c.fillStyle="#0099FF";
		c.fillRect(x,360,11,44);
		c.stroke();
		if(flag===75)
		{       
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,373);
				c.lineTo(x_counter+10,373);
				c.stroke();
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,388);
				c.lineTo(x_counter+10,388);
				c.stroke();
				c.closePath();
				c.closePath();
				x_counter+=20;
				flag=10;
		}
		    
		if(x<974)
		{
			x=x+0.4;
			flag++;
		}
		else
		{
			end=1;
			
		}
		
		        c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,373);
				c.lineTo(x_counter+10,373);
				c.stroke();
				c.closePath();
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,388);
				c.lineTo(x_counter+10,388);
				c.stroke();
				c.closePath();
				
		if(end)
		{
			cancelAnimationFrame(id);
			x=900;
		}
		
	}
	var s=1;
	function Transitional_line()
	{
		line_id=requestAnimationFrame(Transitional_line);
		if(x_line<790)
		{
			c.beginPath();
		c.strokeStyle="red";
		c.lineWidth="2";
		c.moveTo(x_line,y_line);
		c.lineTo(x_line+2,y_line);
		c.stroke();
		c.closePath();
		}
		else if(x_line<982)
		{
			var y_random=Math.random()*s*4;
			s=s*-1;
			c.beginPath();
			c.strokeStyle="red";
			c.lineWidth="2";
			if(y_line+y_random>365 && y_line+y_random<400)
			{
			c.moveTo(x_line-1,y_line);
			c.lineTo(x_line-1,y_line+y_random);
			c.stroke();
			c.closePath();
			y_line=y_line+y_random;
			}
			
		}
		if(x_line<982)
			x_line+=2.1;
		else
		{   
			cancelAnimationFrame(line_id);
			x=900;
			var btn=document.getElementById("b");
			btn.disabled=false;
			c.clearRect(380,200,650,400);
			draw_main();
			x_counter=920;
			flag=10;
			x_left_water=392;
			y_left_water=291;
			x_right_water=536;
			x_line=599;
			y_line=387;
			end=0;
			id=null;
			line_id=null;
		}

	}
	//----Code for Turbulent Animation-----
	function Turbulent_disappear()
	{
		disappear();
		Turbulent_animate();
		Turbulent_line();
	}
	function Turbulent_animate()
	{
		
		id=requestAnimationFrame(Turbulent_animate);
		c.clearRect(x_left_water,y_left_water,227,2);
		if(y_left_water<345)
			y_left_water+=0.5;
		c.beginPath();
		c.strokeStyle="black";
		c.lineWidth="1";
		c.moveTo(465,240);
		c.lineTo(465,324);
		c.lineTo(490,349);
		c.lineTo(490,394);
		c.lineTo(580,394);
		c.lineTo(599,387);
		c.lineTo(580,380);
		c.lineTo(510,380);
		c.lineTo(510,349);
		c.lineTo(535,324);
		c.lineTo(535,270);
		c.lineTo(465,270);
		c.fillStyle="#333333";
		c.fill();
		c.lineTo(535,270);
		c.lineTo(535,240);
		c.stroke();
		c.fillStyle="#0099FF";
		c.fillRect(x,360,11,44);
		c.stroke();
		if(flag===60)
		{       
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,373);
				c.lineTo(x_counter+10,373);
				c.stroke();
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,388);
				c.lineTo(x_counter+10,388);
				c.stroke();
				c.closePath();
				c.closePath();
				x_counter+=20;
				flag=10;
		}
		    
		if(x<974)
		{
			x=x+0.5;
			flag++;
		}
		else
		{
			end=1;
			
		}
		
		        c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,373);
				c.lineTo(x_counter+10,373);
				c.stroke();
				c.closePath();
				c.beginPath();
				c.strokeStyle="white";
				c.lineWidth="2";
				c.moveTo(x_counter,388);
				c.lineTo(x_counter+10,388);
				c.stroke();
				c.closePath();
				
		if(end)
		{
			cancelAnimationFrame(id);
			x=900;
		}
		
	}
	function Turbulent_line()
	{
		
		line_id=requestAnimationFrame(Turbulent_line);
		if(x_line<982)
		{
			var y_random=Math.random()*s*10;
			s=s*-1;
			c.beginPath();
			c.strokeStyle="red";
			c.lineWidth="2";
			if(y_line+y_random>365 && y_line+y_random<400)
			{
			c.moveTo(x_line,y_line);
			c.lineTo(x_line,y_line+y_random);
			c.stroke();
			c.closePath();
			y_line=y_line+y_random;
			}
			
		}
		if(x_line<982)
			x_line+=2.2;
		else
		{   
			cancelAnimationFrame(line_id);
			x=900;
			var btn=document.getElementById("b");
			btn.disabled=false;
			c.clearRect(380,200,650,400);
			draw_main();
			x_counter=920;
			flag=10;
			x_left_water=392;
			y_left_water=291;
			x_right_water=536;
			x_line=599;
			y_line=387;
			end=0;
			id=null;
			line_id=null;
		}
	}
		
  
  		
