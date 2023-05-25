// Role klasse
class Role {
    constructor(email, name, password) {
      this.email = email;
      this.name = name;
      this.password = password;
    }
  }
  
  class Administrator extends Role {
    constructor(email, name, password) {
      super(email, name, password);
    }
  }
  
  class EndUser extends Role {
    constructor(email, name, password) {
      super(email, name, password);
    }
  }
  
  // InstructionGuide class and its subclasses (Video and PDF)
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

  // PDF class extending InstructionGuide
  class PDF extends InstructionGuide {
    constructor(title, subject, keywords, createdDate, deletedDate, numberOfPages, version) {
      super(title, subject, keywords, createdDate, deletedDate, version);
      this.numberOfPages = numberOfPages;
    }
  }

  
    // Video class extending InstructionGuide
  class Video extends InstructionGuide {
    constructor(title, subject, keywords, createdDate, deletedDate, duration) {
      super(title, subject, keywords, createdDate, deletedDate, version);
      this.duration = duration;
    }
  }
  
  // UpdatedVideo class extending Video
  class UpdatedVideo extends Video {
    constructor(title, subject, keywords, createdDate, deletedDate, duration, updatedDate) {
      super(title, subject, keywords, createdDate, deletedDate, duration);
      this.updatedDate = updatedDate;
    }
  }
  
  // UpdatedPDF class extending PDF
  class UpdatedPDF extends PDF {
    constructor(title, subject, keywords, createdDate, deletedDate, numberOfPages, updatedDate) {
      super(title, subject, keywords, createdDate, deletedDate, numberOfPages);
      this.updatedDate = updatedDate;
    }
  }
  
  // Notification class
  class Notification {
    constructor(sentDate, message, read, version) {
      this.sentDate = sentDate;
      this.message = message;
      this.read = read;
      this.version = version;
    }
  }
  
  // Favorite class
  class Favorite {
    constructor(favoritedDate) {
      this.favoritedDate = favoritedDate;
    }
  }

  // UpdatedPDF class extending PDF
  class PDFhandlling extends Favorite {
    constructor(subject, keywords, createdDate, deletedDate, numberOfPages, updatedDate) {
      super(favoritedDate);
      this.favoritedDate = favoritedDate;
    }
  }

  // UpdatedPDF class extending PDF
  class VideoHandling extends Favorite {
    constructor(favoritedDate) {
      super(favoritedDate);
      this.favoritedDate = favoritedDate;
    }
  }

  // Subject class
  class Subject {
    constructor(title, number, createdDate, deletedDate) {
      this.title = title;
      this.number = number;
      this.createdDate = createdDate;
      this.deletedDate = deletedDate;
    }
  }
  
  // Exporting the classes
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