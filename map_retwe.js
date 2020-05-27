function (doc) {
    emit(doc.place.name,
        {retweet: doc.retweet_count});
  }