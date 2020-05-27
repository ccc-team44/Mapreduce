function (doc) {
    if( doc.entities.hashtags[0]){
      for(var i=0;i<doc.entities.hashtags.length;i++){
        if(doc.entities.hashtags[i].text.toLowerCase().indexOf('scomo') != -1){
          emit(doc.id, 
            {
              city: 'melbourne',//can change the city to where you want
              hashtags: doc.entities.hashtags.text, 
              date: doc.created_at, 
              text: doc.full_text,
            });
          break;
        }
      }
    }
  }