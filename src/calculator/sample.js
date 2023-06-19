result="3+9-7";
let res=0,i=0;
      let l=result.split('');
      let r=[],o=[];
      let c='',cnt=0;
      while(i!==result.length){
        if(l[i]!=='+' || l[i]!=='-' || l[i]!=='*' || l[i]!=='/'){
          c=c+l[i];
        }
        else{
          cnt+=1;
          o.push(l[i]);
          r.push(parseInt(c));
          c='';
          console.log(o,r);
        }
        if(cnt===2){
          if(o[0]==='+')
          res+=r[0]+r[1];
          else if(o[0]==='-')
          res+=r[0]-r[1];
          else if(o[0]==='*')
          res+=r[0]*r[1];
          else if(o[0]==='/')
          res+=r[0]/r[1];
          cnt-=1;
          o.shift();
          r.splice(0,2,res);
        }

      }
      console.log(res);