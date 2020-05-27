function (doc) {
  if (doc.text.split(' ').length > 20 && doc.hashtags.split(' ').length > 1){
      emit(doc.key, 
  {
    state: doc.admin,
    hashtags:doc.hashtags.split(' '), 
    date:doc.date, 
    text:doc.text,
  });
  }
}