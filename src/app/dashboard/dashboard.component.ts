import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
matches :any;
oldMatches : any;
resultRecom : any[] =new Array();
resultRecom1 : any[] =new Array();
totalRecord :Number;
totalRecord1 :String;
page :Number = 1;
pages : Number =1;
// resultMatches :any[] =new Array();
  constructor( private user : UserService) { 
    
  }

  ngOnInit(): void {
    //for upcoming matches
    this.user.getData().subscribe( data =>
      {
        this.matches = this.processData(data['matches']);
        console.log(this.matches);
        
        this.totalRecord =this.matches.length
      })
      
      //for old matches
      // this.user.getOldMatch().subscribe( data  =>
      //   {
      //     this.oldMatches = this.processData1(data['oldMatches']);
      //   console.log(this.oldMatches);
      //   })
      let res = this.user.getOldMatch();
      res.subscribe(data =>{
        this.oldMatches = this.processData1(data['data']);
        console.log(this.oldMatches);
        this.totalRecord1 =this.oldMatches.length
      })
   }

   //for upcoming
   Recommendation = function(unique_id){
    console.log(unique_id);
    
    for(let index in this.matches)
    {
      let uqid =this.matches[index];
    if(uqid['unique_id']==unique_id ){
      uqid['recommend'] = true;
      uqid['unrecommend'] = false;
      // uqid['id'] =unique_id['unique_id']
    this.resultRecom.push(uqid);
    
    }
  }
}

Unrecommendation = function(unique_id){
  console.log(unique_id);
 
  for(let index in this.matches)
  {
    let uqid1 =this.matches[index];
  if(uqid1['unique_id']==unique_id ){
    uqid1['recommend'] = false;
    uqid1['unrecommend'] = true; 
  // this.recommendList.pop(uqid1);
  // console.log(this.recommendList);
  }
}
for(let index in this.resultRecom){
  let unit = this.resultRecom[index];
  if(unit['unique_id']==unique_id ){
    this.resultRecom.splice(index,1);
  }
  }

}

processData(data){
  for(let item of data){
    console.log(item);
    item['team_1'] = item['team-1'];
        item['team_2'] = item['team-2'];
        item['recommend'] = false;
        item['unrecommend'] = true;
  }
  return data;
}

// for old matches
Recommendation1 = function(unique_id){
  console.log(unique_id);
  
  for(let index in this.oldMatches)
  {
    let uqid =this.oldMatches[index];
  if(uqid['unique_id']==unique_id ){
    console.log("kli")
    uqid['recommend'] = true;
    uqid['unrecommend'] = false;
    // uqid['id'] =unique_id['unique_id']
  this.resultRecom1.push(uqid);
  console.log(this.resultRecom1);
  
  }
}
}

Unrecommendation1 = function(unique_id){
  console.log(unique_id);
 
  for(let index in this.oldMatches)
  {
    let uqid2 =this.oldMatches[index];
  if(uqid2['unique_id']==unique_id ){
    uqid2['recommend'] = false;
    uqid2['unrecommend'] = true; 
  // this.recommendList.pop(uqid1);
  // console.log(this.recommendList);
  }
}
for(let index in this.resultRecom1){
  let uqid3 = this.resultRecom1[index];
  if(uqid3['unique_id']==unique_id ){
    this.resultRecom1.splice(index,1);
  }
  }

}

processData1(data){
  for(let items of data){
    console.log(items);
        items['recommend'] = false;
        items['unrecommend'] = true;
  }
  return data;
}


}
