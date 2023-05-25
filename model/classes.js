// Role klasse, super
class Role {
    constructor(email, name, password) {
      this.email = email;
      this.name = name;
      this.password = password;
    }
  }
  // adminstrator klasse, sub
  class Administrator extends Role {
    constructor(email, name, password) {
      super(email, name, password);
    }
  }
    // enduser klasse, sub
  class EndUser extends Role {
    constructor(email, name, password) {
      super(email, name, password);
    }
  }
  
// instruicitonguide klasse, super
class InstructionGuide {
    constructor(title, subject, keywords, createdDate, deletedDate, version) {
      this.title = title;
      this.subject = subject;
      this.keywords = keywords;
      this.createdDate = createdDate;
      this.deletedDate = deletedDate;
      this.version = version;

    }
  }

    // PDF klasse, sub
    class PDF extends InstructionGuide {
    constructor(title, subject, keywords, createdDate, deletedDate, numberOfPages, version) {
      super(title, subject, keywords, createdDate, deletedDate, version);
      this.numberOfPages = numberOfPages;
    }
  }

  
    // Video klasse, sub
    class Video extends InstructionGuide {
    constructor(title, subject, keywords, createdDate, deletedDate, duration) {
      super(title, subject, keywords, createdDate, deletedDate, version);
      this.duration = duration;
    }
  }
  
  // UpdatedVideo klasse extends Video
  class UpdatedVideo extends Video {
    constructor(title, subject, keywords, createdDate, deletedDate, duration, updatedDate) {
      super(title, subject, keywords, createdDate, deletedDate, duration);
      this.updatedDate = updatedDate;
    }
  }
  
  // UpdatedPDF klasse extends PDF
  class UpdatedPDF extends PDF {
    constructor(title, subject, keywords, createdDate, deletedDate, numberOfPages, updatedDate) {
      super(title, subject, keywords, createdDate, deletedDate, numberOfPages);
      this.updatedDate = updatedDate;
    }
  }
  
  // Notification klasse
  class Notification {
    constructor(sentDate, message, read, version) {
      this.sentDate = sentDate;
      this.message = message;
      this.read = read;
      this.version = version;
    }
  }
  
  // Favorite klasse
  class Favorite {
    constructor(favoritedDate) {
      this.favoritedDate = favoritedDate;
    }
  }

  // PDFhandlling klasse extends PDF
  class PDFhandlling extends Favorite {
    constructor(subject, keywords, createdDate, deletedDate, numberOfPages, updatedDate) {
      super(favoritedDate);
      this.favoritedDate = favoritedDate;
    }
  }

  // VideoHandling klasse extends video
  class VideoHandling extends Favorite {
    constructor(favoritedDate) {
      super(favoritedDate);
      this.favoritedDate = favoritedDate;
    }
  }

  // Subject klasse
  class Subject {
    constructor(title, number, createdDate, deletedDate) {
      this.title = title;
      this.number = number;
      this.createdDate = createdDate;
      this.deletedDate = deletedDate;
    }
  }
  
  // Eksporter klasser
  module.exports = {
    Role,
    Administrator,
    EndUser,
    InstructionGuide,
    Video,
    PDF,
    UpdatedVideo,
    UpdatedPDF,
    Notification,
    Favorite,
    PDFhandlling,
    VideoHandling,
    Subject
  };