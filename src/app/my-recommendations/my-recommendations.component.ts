import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-recommendations',
  templateUrl: './my-recommendations.component.html',
  styleUrls: ['./my-recommendations.component.css']
})
export class MyRecommendationsComponent implements OnInit {
  matches : any;
  searchInput = "India";
  resultMatches :any[] =new Array();
  recommendList : any[] =new Array();
  
  constructor( private user : UserService) { }

  ngOnInit(): void {
    this.user.getData().subscribe( data => {
      this.matches = data['matches'];
      console.log(this.matches);
    });
  }

  confirm=function(searchInput)
      {
        this.resultMatches =[] 
        console.log(252525252,searchInput);
      for(let index in this.matches)
      {
        let item=this.matches[index];
        if(item['team-1'] == searchInput   ||  item['team-2'] == searchInput  || item['type'] == searchInput)
        {
        item['team_1'] = item['team-1'];
        item['team_2'] = item['team-2'];
        item['recommend'] = false;
        item['unrecommend'] = true;
        this.resultMatches.push(item);
        console.log(this.resultMatches);
        
        }
      }
      
    }

    recommendation = function(unique_id){
      console.log(unique_id);
      
      for(let index in this.resultMatches)
      {
        let uqid =this.resultMatches[index];
      if(uqid['unique_id']==unique_id ){
        uqid['recommend'] = true;
        uqid['unrecommend'] = false;
        // uqid['id'] =unique_id['unique_id']
      this.recommendList.push(uqid);
      // console.log(this.recommendList);
      // console.log (uqid);
      }
    }
  }
      unrecommendation = function(unique_id){
      console.log(unique_id);
     
      for(let index in this.resultMatches)
      {
        let uqid1 =this.resultMatches[index];
      if(uqid1['unique_id']==unique_id ){
        uqid1['recommend'] = false;
        uqid1['unrecommend'] = true; 
      // this.recommendList.pop(uqid1);
      // console.log(this.recommendList);
      }
    }

    for(let index in this.recommendList){
    let unit = this.recommendList[index];
    if(unit['unique_id']==unique_id ){
      this.recommendList.splice(index,1);
    }
    }
  }

    clear = function(){
      this.resultMatches = [];
      this.recommendList = [];
    }

  
}
