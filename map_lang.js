function (doc) {
  emit(doc._id, 
  {
    lang: doc.lang,
    count: 1
  });
}

function (doc) {
  emit(doc.lang, 1);
}