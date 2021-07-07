AlGORITHME SET1_SET2

Tab1= ARRAY_of INTEGER [3] ;
Tab1 = (3,1,7,9) ;
Tab2=  ARRAY_of INTEGER [4];
Tab2= (2,4,1,9,3);
Sum=INTEGER ;
Sum:=0 ;
Com=String ;
Com:="" ;
For i = 0 to Tab1.length Step 1 do {
      
    For J = 0 to Tab2.length STEP1 do {
	
	    If Tab1[i] != Tab2[j] then 
		  sum = sum +Tab1[i] ;
		
	    Else if Tab1[i]==Tab2[j] ;
		
	   Com = ( Com +(Tab1[i]) ) ;
	   
	   end if 
	   end for
	   end for 
	   
	  write ("sum=",sum)
	  write ("com="com)
	   
	   End
      