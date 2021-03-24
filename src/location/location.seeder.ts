import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Location } from './location.model';
 
@Seeder({
   model: 'Location',
   unique: ['Name'],
})

export class LocationSeeder implements OnSeederInit {
   run() {
      const data = [
        {
          Name: 'Faustiana One',
          North: 40.344208,
          West: -94.891494,
          South: 40.343652,
          East: -94.8884,
         
        },
        {
          Name: 'Faustiana Two',
          North: 40.343579,
          West: -94.89084,
          South: 40.343268,
          East: -94.8884,
       
        },
        {
          Name: 'Faustiana Three',
          North: 40.342947,
          West: -94.8862633,
          South: 40.34275,
          East: -94.8884,
         
        },
        {
          Name: 'Faustiana Four',
          North: 40.342533,
          West: -94.890749,
          South: 40.341902,
          East: -94.8884,
       
        },
        {
          Name: '16th One',
          North: 40.360516,
          West: -94.888755,
          South: 40.360123,
          East: -94.88847,
      
        },
        {
          Name: '16th Two',
          North: 40.360516,
          West: -94.888994,
          South: 40.360123,
          East: -94.88887,
       
        },
        {
          Name: '16th Three',
          North: 40.360516,
          West: -94.889264,
          South: 40.360123,
          East: -94.8891,
       
        },
        {
          Name: '16th Four',
          North: 40.360516,
          West: -94.889651,
          South: 40.360123,
          East: -94.889332,
       
        },
        {
          Name: 'Judah Park One',
          North: 40.344085,
          West: -94.880743,
          South: 40.343735,
          East: -94.880552,
      
        },
        {
          Name: 'Judah Park Two',
          North: 40.344303,
          West: -94.880513,
          South: 40.344055,
          East: -94.880272,
      
        },
        {
          Name: 'Judah Park Three',
          North: 40.344258,
          West: -94.878851,
          South: 40.344037,
          East: -94.878598,
        
        },
        {
          Name: 'Judah Park Four',
          North: 40.344699,
          West: -94.880021,
          South: 40.344527,
          East: -94.879821,
         
        },
        {
          Name: 'Super Quest One',
          North: 40.340629,
          West: -94.882013,
          South: 40.340446,
          East: -94.881700,
        
        },
        {
          Name: 'Super Quest Two',
          North: 40.352834,
          West: -94.674814,
          South: 40.351630,
          East: -94.671554,
         
        },
         {
          Name: 'Colden Pond One, Baby',
          North: 40.351133,
          West: -94.882717,
          South: 40.351049,
          East: -94.882375,
       
        },
        {
          Name: 'Colden Pond Two, Beautiful',
          North: 40.350438,
          West: -94.883363,
          South: 40.350296,
          East: -94.883180,
         
        },
        {
          Name: 'Colden Pond Three, Radical',
          North: 40.349627,
          West: -94.883429,
          South: 40.349529,
          East: -94.883309,
        
        },
        {
          Name: 'Colden Pond Four, Excellent Smithers',
          North: 40.350225,
          West: -94.882697,
          South: 40.350144,
          East: -94.882576,
        
        },
          {
          Name: 'Badami Office, Excellent Smithers',
          North: 40.351187,
          West: -94.883172,
          South: 40.350864,
          East: -94.882831,
         
        },
      ];
      return data;
   }
 
   
}