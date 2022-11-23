const libraryStore = [];

String.prototype.capitalize = () => {
  return this.length === 0 ? '' : this[0].toUpperCase() + this.slice(1)
}

class Media {
  constructor(props) {
    this.title = capitalizeSentence(props.title);
    this.ratings = [];
    this.available = true;
  }

  orderMedia() {
    return new Promise((resolve, reject) => {
      if (this.available) {
        setTimeout(function() {
          this.available = false;
          resolve();
        }, 1000)
        return;
      }

      reject("Not available")
    })
  }

  returnMedia() {
    return new Promise((resolve, reject) => {
      if (!this.available) {
        setTimeout(function() {
          this.available = true;
          resolve();
        }, 1000)
        return;
      }

      reject("Already returned")
    })
  }
}

class Book {
  constructor(props) {
    this.title = capitalizeSentence(props.title);
    this.author = capitalizeSentence(props.author);
    this.pages = props.pages;
    this.ratings = [];
    this.available = true;
  }

  orderBook() {
    return new Promise((resolve, reject) => {
      if (this.available) {
        setTimeout(function() {
          this.available = false;
          resolve();
        }, 1000)
        return;
      }

      reject("Not available")
    })
  }

  returnBook() {
    return new Promise((resolve, reject) => {
      if (!this.available) {
        setTimeout(function() {
          this.available = true;
          resolve();
        }, 1000)
        return;
      }

      reject("Already returned")
    })
  }
}

const addToLibrary = (props) => {
  switch(props.type) {
    case "book": 
      const media = new Book(props)
      libraryStore.push(media)
      return media;
    case "movie": 
      const media = new Movie(props)
      libraryStore.push(media)
      return media;
    default: 
      const media = new Media(props);
      libraryStore.push(media)
      return media;
  }
}

function order(title) {
  for (let i = 0; i < libraryStore.length; i++) {
    if (libraryStore[i].title === title) {
      libraryStore[i].orderMedia().then(
        console.log("Order completed!")
      ).catch((e) => {
        console.log("Sorry! " + e)
      })
    }
  }
}