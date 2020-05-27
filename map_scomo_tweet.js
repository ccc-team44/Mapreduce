function (doc) {
    if( doc.entities.hashtags[0]){
      for(var i=0;i<doc.entities.hashtags.length;i++){
        if(doc.entities.hashtags[i].text.toLowerCase().indexOf('scomo') != -1){
          emit(doc.coordinates, 1);
          break;
        }
      }
    }
  }